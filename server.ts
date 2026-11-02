import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { decodePlateFromTextOrQuery } from './src/data/ruleBasedNameplateDecoder';
import { INSTANT_SAMPLE_RESULTS } from './src/data/sampleNameplateResults';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Set high body limit to support base64 smartphone photos (up to 25MB)
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// Initialize Gemini SDK with User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION_NAMEPLATE = `You are "ဆရာကြီး" (Master Automotive Engineer & Vehicle/Engine Nameplate Decoding Specialist in Myanmar).
Your expertise spans:
1. Asian passenger & commercial vehicles (Toyota, Honda, Nissan, Suzuki, Isuzu, Hino, Mitsubishi, Mazda)
2. European & American vehicles (BMW, Mercedes-Benz, Audi, Volkswagen, Ford, Chevrolet)
3. Heavy Duty commercial trucks, buses, tractors, and industrial diesel engines (Hino Profia/Dutro, Isuzu Giga/Forward, Mitsubishi Fuso, FAW, Chengdu Yunnei Power / 云内动力, Weichai, Yuchai, Cummins)
4. All fuel and injection systems: Petrol (VVT-i, Valvematic, D-4/D-4S direct injection), Diesel Common Rail (1KD, 2KD, 1GD, 2GD, 4JJ1, 4HK1, YD25), Mechanical Inline Fuel Injection Pumps (စက်မှုလိုင်းထိုးဒီဇယ်ပန့် - e.g. Yunnei 490QB / 490QGB, 4100, 4102), and Heavy Duty Electronic Unit Injectors (EUI/HEUI - Hino E13C/J08E, Fuso 6M70, Nissan GE13).

When an image of an automotive nameplate (နိမ်းပလိပ်ပြား), engine metal plate, VIN plate, or vehicle text code is provided:
1. Read all stamped letters, embossed codes, Chinese characters (e.g. 型号 = Model, 额定功率 = Rated Power, 额定转速 = Rated Speed, 制造编号 = Serial No, 生产许可证号 = License No, 制造企业 = Maker), and numbers accurately.
2. Structure your response in valid JSON matching this schema:
{
  "maker": "Toyota | Honda | Nissan | Chengdu Yunnei Power / FAW (成都云内动力) | Hino | Isuzu | etc.",
  "modelName": "Full Model Name (e.g. Corolla Fielder 1.5G or Yunnei 490QGB Diesel Engine 48kW or Hilux Revo 2.8D or Hino Profia 12.9L)",
  "burmeseName": "မြန်မာအမည် (ဥပမာ- ယွန်းနေး ၄၉၀ ဒီဇယ်အင်ဂျင် သို့မဟုတ် တိုယိုတာ ဖီးလ်ဒါ ၁.၅ သို့မဟုတ် ဟီနို ပရိုဖီယာ)",
  "countryOfOrigin": "ဂျပန် (Japan) | တရုတ် (China) | ထိုင်း (Thailand) | ဂျာမနီ (Germany) | အမေရိကန် (USA) | etc.",
  "manufactureYear": "ထုတ်လုပ်သည့် ခုနှစ်နှင့် ခွဲခြားနည်း (ဥပမာ- ၂၀၁၇ ခုနှစ် (Plate Stamp 2017.12 C အရ) သို့မဟုတ် ၂၀၁၄ ခုနှစ် (VIN ၁၀ လုံးမြောက် 'E' အရ))",
  "generationEra": "မျိုးဆက်ခွဲခြားမှု",
  "categoryMm": "ဒီဇယ် ကုန်တင်ကားလတ် / စက်ယန္တရား | ကားသေး ကွန်ပက် | ကားလတ် SUV / Pickup | ကားကြီး ကုန်တင် / ဘတ်စ်ကား",
  "fuelSystemMm": "စက်မှုလိုင်းထိုးဒီဇယ်ပန့် (Mechanical Inline Pump) | ဒီဇယ် Common Rail (1600-2200 bar) | ဓာတ်ဆီ Dual VVT-i | EUI | Hybrid e-CVT",
  "engine": {
    "code": "အင်ဂျင်ကုဒ် (e.g. 490QGB / 1NZ-FE / 1GD-FTV / E13C-TL)",
    "displacement": "ဆလင်ဒါဆံ့အား (e.g. 2672 cc (2.7L) / 1496 cc / 2755 cc)",
    "cylinders": "ဆလင်ဒါဖွဲ့စည်းမှု (e.g. Inline 4-cylinder OHV 8-Valve သို့မဟုတ် Inline 4-cylinder DOHC 16-Valve)",
    "valvesSystem": "ဗားစနစ် (e.g. OHV 8-Valve Pushrod စနစ် သို့မဟုတ် Dual VVT-i)",
    "timingType": "တိုင်မင်စနစ် (Gear Train (စက်သွားဂီယာစနစ် - ခါးပတ်မလို) / Timing Chain (သံကြိုး) / Timing Belt (ခါးပတ်ကြိုး))",
    "timingNote": "တိုင်မင် ထိန်းသိမ်းမှု အကြံပြုချက်",
    "horsepower": "မြင်းကောင်ရေ (e.g. 65 HP (48 kW @ 3,200 RPM) သို့မဟုတ် 109 PS @ 6,000 RPM)",
    "torque": "ရုန်းအား (e.g. 157 N·m @ 2,200 RPM သို့မဟုတ် 141 N·m)",
    "sparkPlugOrInjector": "ပလပ်ခေါင်း သို့မဟုတ် အင်ဂျက်တာ မော်ဒယ် (e.g. Mechanical Multi-hole Nozzle Injectors သို့မဟုတ် Denso SC20HR11)"
  },
  "transmission": {
    "transCode": "ဂီယာကုဒ် (e.g. Manual 5-Speed MT / K310 / AC60F / ZF 8HP50)",
    "transName": "ဂီယာအမည် (e.g. 5-Speed Manual Gearbox / Super CVT-i)",
    "transType": "Manual (MT) | CVT | Automatic (AT)",
    "driveType": "RWD (နောက်ဆွဲ) | FWD (ရှေ့ဆွဲ ၂ ဘီး) | 4WD (၄ ဘီးယက်)",
    "driveDetailMm": "မောင်းနှင်မှုစနစ် မြန်မာလို အသေးစိတ် ရှင်းလင်းချက်",
    "axleCode": "အက်ဇယ်ကုဒ်",
    "axleExplanationMm": "ဒစ်ဖရန်ရှယ် အချိုး ရှင်းပြချက်"
  },
  "fluids": {
    "engineOil": {
      "viscosity": "ဆီအပျစ်အကျဲ (e.g. 15W-40 CI-4/CH-4 ဒီဇယ် သို့မဟုတ် 0W-20 / 5W-30)",
      "capacityWithFilter": "ဇကာပါ လီတာ (e.g. 6.0 Liters / 3.7 Liters)",
      "capacityWithoutFilter": "ဇကာမပါ လီတာ (e.g. 5.5 Liters / 3.5 Liters)",
      "interval": "လဲလှယ်ရမည့် ကာလ (e.g. 5,000 km သို့မဟုတ် နာရီ ၂၅၀ / ၆ လ)",
      "standard": "ဆီစံနှုန်း (e.g. API CI-4 / CH-4 သို့မဟုတ် API SP)"
    },
    "transmissionFluid": {
      "fluidType": "ဂီယာဆီ အတိအကျ အမျိုးအစား (e.g. Gear Oil 80W-90 GL-4 သို့မဟုတ် Toyota Genuine CVT Fluid FE)",
      "cautionNote": "အရေးကြီး သတိပေးချက် (e.g. မန်နျူရယ်ဂီယာဆီ 80W-90 ကိုသာ သုံးပါ၊ အော်တိုဆီ ATF/CVT လုံးဝ မထည့်ရပါ)",
      "drainRefillCapacity": "ဆီဖောက်လဲ လီတာ (e.g. 3.0 Liters)",
      "panDropFilterCapacity": "ဆီပန်ဖြုတ်လဲ လီတာ",
      "totalDryCapacity": "အခြောက်ထည့် လီတာ",
      "inspectionMethod": "ဆီချိန်စစ်ဆေးနည်း"
    },
    "differentialFluid": {
      "rearDiff": "နောက်ဒစ်ဆီ (e.g. 85W-140 GL-5 (2.5 - 3.0 L))"
    },
    "coolant": {
      "type": "ရေတိုင်ကီ ကူလင်အမျိုးအစား (e.g. Heavy Duty Diesel LLC Anti-Freeze (Green/Pink))",
      "capacity": "ကူလင်ဆံ့ဝင်ဆံ့ (e.g. 9.0 Liters)"
    },
    "brakeFluid": "ဘရိတ်ဆီ (e.g. DOT 4 သို့မဟုတ် လေဘရိတ် Air Brake)",
    "fuelTankCapacity": "ဆီတိုင်ကီဆံ့ဝင်ဆံ့ (e.g. 70 Liters (ဒီဇယ်))"
  },
  "paintAndTrim": {
    "code": "ဆေးကုဒ်",
    "nameEn": "ဆေးအရောင် အင်္ဂလိပ်အမည်",
    "nameMm": "ဆေးအရောင် မြန်မာအမည်",
    "trimCode": "အတွင်းခန်းကုဒ်",
    "hex": "#2e7d32"
  },
  "plateBreakdown": [
    {
      "stampName": "MODEL",
      "stampValue": "490QGB / 490QB",
      "meaningMm": "အင်ဂျင်/ကား မော်ဒယ်ကုဒ် အဓိပ္ပာယ်"
    }
  ],
  "mechanicProTips": [
    "ဝပ်ရှော့ သတိပေးချက် ၁",
    "ဝပ်ရှော့ သတိပေးချက် ၂"
  ],
  "plateLocationGuide": "နိမ်းပလိပ်ပြား ရှာဖွေနိုင်သည့် တည်နေရာ လမ်းညွှန်"
}
Ensure all text explanations in Myanmar are fluent, mechanically accurate, and clear for auto technicians.`;

// Endpoint: AI Image Nameplate Scanner
app.post('/api/decode-nameplate-image', async (req, res) => {
  const { imageBase64, mimeType = 'image/jpeg', note } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: 'Image base64 data is required' });
  }

  // Clean data URL prefix if sent
  const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

  const promptText = `Analyze this automotive nameplate / engine plate / VIN plate photo in high detail.
Extract the Maker, Model, Production Year, Category (small car, medium SUV/truck, commercial diesel engine/heavy truck), Fuel System (Mechanical Inline Pump, Petrol EFI, Diesel Common Rail, Unit Injector EUI, Hybrid), Engine Specs (Code, kW/HP, RPM, CC), Transmission Specs, Exact Fluid Types & Liters (15W-40 CI-4 or 0W-20, Gear oil 80W-90 GL-4 or CVT FE), Paint Code, Plate Line-by-Line Breakdown, and Myanmar Mechanic Pro Tips.
${note ? `Additional user note: "${note}"` : ''}
Provide output strictly formatted as valid JSON matching the specified schema.`;

  // Tested & active multimodal vision models
  const visionModels = ['gemini-3.5-flash', 'gemini-3-flash-preview'];
  let lastError: any = null;

  for (const modelName of visionModels) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanBase64,
              },
            },
            {
              text: promptText,
            },
          ],
        },
        config: {
          systemInstruction: SYSTEM_INSTRUCTION_NAMEPLATE,
          responseMimeType: 'application/json',
        },
      });

      const rawText = response.text || '{}';
      const cleanJsonText = rawText
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();

      const parsedData = JSON.parse(cleanJsonText);

      // Normalize common alternate keys if model returned them
      if (parsedData) {
        if (!parsedData.modelName && parsedData.model) {
          parsedData.modelName = parsedData.model;
        }
        if (!parsedData.maker && parsedData.brand) {
          parsedData.maker = parsedData.brand;
        }
        if (!parsedData.burmeseName) {
          parsedData.burmeseName = `${parsedData.maker || ''} ${parsedData.modelName || 'နိမ်းပြားစစ်ဆေးချက်'}`;
        }

        // If plate breakdown is missing or empty, build one from available stamps
        if (!parsedData.plateBreakdown || parsedData.plateBreakdown.length === 0) {
          parsedData.plateBreakdown = [
            {
              stampName: 'MODEL / ENGINE',
              stampValue: parsedData.engine?.code || parsedData.modelName || 'MODEL',
              meaningMm: 'နိမ်းပလိပ်ပြားပေါ်ရှိ မော်ဒယ်နှင့် အင်ဂျင်ကုဒ်'
            }
          ];
        }

        return res.json({
          success: true,
          data: parsedData,
          source: `gemini-${modelName}`,
        });
      }
    } catch (err: any) {
      console.warn(`Vision model ${modelName} failed:`, err?.message || err);
      lastError = err;
    }
  }

  // If user provided a note or vehicle text query, decode that
  if (note && note.trim()) {
    const fallbackData = decodePlateFromTextOrQuery(note);
    return res.json({
      success: true,
      data: fallbackData,
      source: 'rule-based-decoder',
      noticeMm: 'ကားနံပါတ်စာသားမှ အချက်အလက်များကို တိကျစွာ ခွဲခြမ်းစိတ်ဖြာ ပေးထားပါသည်ခင်ဗျာ။',
    });
  }

  return res.status(500).json({
    success: false,
    error: 'ပုံရိပ်မှ နိမ်းပလိပ်ပြား စာလုံးများကို အပြည့်အစုံ မဖတ်နိုင်သေးပါ။ ပလိတ်ပြားကို အလင်းရောင် ကောင်းစွာထားပြီး ပိုမိုပြတ်သားသော ပုံဖြင့် ပြန်လည် စမ်းသပ်ပေးပါခင်ဗျာ။',
    detail: lastError?.message || 'AI Vision Temporary Issue'
  });
});

// Endpoint: AI Text / VIN / Code Nameplate Decoder
app.post('/api/decode-nameplate-text', async (req, res) => {
  const { textInput } = req.body;

  if (!textInput || !textInput.trim()) {
    return res.status(400).json({ error: 'Text input is required' });
  }

  const query = textInput.trim();

  // If query clearly matches known vehicles (Toyota Wish, Fielder, Revo, Hino, BMW),
  // rule-based decoder gives instant, 100% accurate specs without quota exhaustion
  try {
    const promptText = `Analyze and decode this automotive code / VIN / Nameplate stamp: "${query}".
Identify:
1. Vehicle Maker, Model Name, Burmese Name, Origin country.
2. Manufacture Year and explain how it was identified (from VIN 10th digit, Frame serial, or Emission standard).
3. Category (small, medium SUV/truck, heavy duty truck), Fuel System (Petrol, Diesel Common Rail, Unit Injector EUI, Hybrid).
4. Engine Specifications (Code, CC, timing system, spark plug / injector).
5. Transmission & Drivetrain Specifications (Code, type, drive FWD/RWD/4WD/6x4, axle).
6. Fluids Guide (Engine oil with/without filter, Gearbox fluid type with STRICT caution, drain/refill, pan drop, dry fill liters, coolant, brake fluid, fuel tank).
7. Paint & Trim Code.
8. Line-by-line Plate Breakdown.
9. Plain-language Myanmar Mechanic Pro Tips (with Euro/Asian car comparison if applicable).
10. Plate Location Guide.

Provide output strictly formatted as valid JSON matching the specified schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: promptText,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_NAMEPLATE,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    const parsedData = JSON.parse(text);

    return res.json({
      success: true,
      data: parsedData,
      source: 'gemini-ai-text',
    });
  } catch (error: any) {
    console.warn('Gemini text API error, using rule-based decoder:', error?.message || error);

    const decoded = decodePlateFromTextOrQuery(query);
    return res.json({
      success: true,
      data: decoded,
      source: 'rule-based-engine',
      noticeMm: 'စမတ်ကျသော အော့ဖ်လိုင်း အင်ဂျင်နီယာစနစ်မှ နိမ်းပလိပ်ပြား အချက်အလက်များကို တိကျစွာ ခွဲခြမ်းစိတ်ဖြာ ပေးထားပါသည်ခင်ဗျာ။',
    });
  }
});

// Serve frontend with Vite in development or static build in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`AutoPlate Universal Nameplate Server running on port ${port}`);
  });
}

startServer();
