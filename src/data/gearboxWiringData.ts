import { GearboxModel } from '../types/diagnostic';

export const GEARBOX_MODELS: GearboxModel[] = [
  {
    id: 'toyota-u340e',
    name: 'Toyota U340E / U440E (Super ECT 4-Speed AT)',
    transmissionType: '4-Speed AT (Super ECT)',
    manufacturer: 'Toyota',
    popularCarsMm: 'Probox, Succeed (NCP51/55), Vitz, Belta, Platz, Passo, Yaris (1NZ-FE, 2NZ-FE အင်ဂျင်များ)',
    tcmLocationMm: 'ECU နှင့် TCM တစ်တွဲတည်း (Glove box အတွင်းပိုင်း သို့မဟုတ် ဒက်ရှ်ဘုတ်အောက်ခြေ)',
    fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ်) ATF WS (ဂီယာချောင်း အမှတ်အသားစစ်ပါ)',
    fluidCapacityMm: 'လဲလှယ်ချိန်: ၂.၅ - ၃.၀ လီတာ (တစ်ခုလုံးအသစ်ထည့်ပါက ၅.၆ လီတာ)',
    commonFaultCodes: ['P0750', 'P0753', 'P0755', 'P0758', 'P0770', 'P0705', 'P0710'],
    valveBodyConnectorPins: [
      {
        pin: 1,
        label: 'SLT+',
        nameMm: 'Line Pressure Linear Solenoid (+)',
        wireColor: 'အနီရောင် (Red) / အနက်လိုင်း',
        normalResistance: '5.0 - 5.6 Ω',
        voltageRange: '0 - 12V (Duty Cycle PWM)',
        descriptionMm: 'ပင်မဆီဖိအား ထိန်းချုပ်ဆလိုးနွိုက်။ ဂီယာပြောင်းချိန် ချောမွေ့စေရန် ဆီဖိအားကို ညှိပေးသည်။',
        testProcedureMm: 'Pin 1 နှင့် Pin 2 ကြား အွမ်တိုင်းပါက 5.0 - 5.6 Ω ရှိရမည်။ 0 Ω ဖြစ်နေပါက ရှော့ဖြစ်ပြီး၊ အဆုံးမရှိ (OL) ဖြစ်ပါက ကွိုင်ပြတ်နေသည်။',
        type: 'pressure'
      },
      {
        pin: 2,
        label: 'SLT-',
        nameMm: 'Line Pressure Linear Solenoid (-)',
        wireColor: 'အဖြူရောင် (White) / အနက်လိုင်း',
        normalResistance: '5.0 - 5.6 Ω (Pin 1 နှင့်)',
        voltageRange: 'Ground / Pulse',
        descriptionMm: 'SLT Solenoid ၏ အနုတ်ငုတ် (ECU မှ pulse ဖြင့် ground ချပေးသည်)။',
        testProcedureMm: 'Pin 1 နှင့် Pin 2 ကြား အွမ်တိုင်းပါ။ ကားဘော်ဒီနှင့် တိုက်ရိုက် ground မကျစေရ။',
        type: 'ground'
      },
      {
        pin: 3,
        label: 'S1',
        nameMm: 'Shift Solenoid No. 1 (Gear 1 & 2)',
        wireColor: 'ခရမ်းရောင် (Violet) / အဖြူလိုင်း',
        normalResistance: '11 - 15 Ω (Body Ground နှင့်)',
        voltageRange: '11 - 14 V (ON/OFF)',
        descriptionMm: 'ဂီယာ ၁ နှင့် ၂ ပြောင်းလဲရာတွင် အသုံးပြုသော ON/OFF Solenoid Valve ဖြစ်သည်။',
        testProcedureMm: 'Pin 3 နှင့် ဂီယာအိုးဘော်ဒီ (Ground) ကြား အွမ်တိုင်းပါ။ ၁၁ မှ ၁၅ အွမ် ရှိရမည်။ ပြတ်နေပါက ဂီယာ ၁ နှင့် ၄ သာ ဝင်မည်။',
        type: 'shift'
      },
      {
        pin: 4,
        label: 'S2',
        nameMm: 'Shift Solenoid No. 2 (Gear 3 & 4)',
        wireColor: 'အပြာရောင် (Blue) / အဝါလိုင်း',
        normalResistance: '11 - 15 Ω (Body Ground နှင့်)',
        voltageRange: '11 - 14 V (ON/OFF)',
        descriptionMm: 'ဂီယာ ၃ နှင့် ၄ ပြောင်းလဲရာတွင် အသုံးပြုသော Solenoid ဖြစ်သည်။',
        testProcedureMm: 'Pin 4 နှင့် ဂီယာအိုးဘော်ဒီ ကြား တိုင်းပါ။ ၁၁ မှ ၁၅ အွမ် ရှိရမည်။ ပြတ်နေပါက ဂီယာ ၃ မဝင်ဘဲ RPM တက်နေမည်။',
        type: 'shift'
      },
      {
        pin: 5,
        label: 'DSL / SL',
        nameMm: 'Lock-Up Solenoid (Torque Converter)',
        wireColor: 'အစိမ်းရောင် (Green) / အနက်လိုင်း',
        normalResistance: '11 - 15 Ω (Body Ground နှင့်)',
        voltageRange: '11 - 14 V (PWM/ON-OFF)',
        descriptionMm: 'အဝေးပြေးလမ်းတွင် ဆီစားသက်သာစေရန် Torque Converter ကို တိုက်ရိုက် လော့ခ်ချပေးသော ဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 5 နှင့် Ground ကြား ၁၁ မှ ၁၅ အွမ် တိုင်းပါ။ P0770 ပေါ်ပါက ဤ Pin ကို စစ်ဆေးပါ။',
        type: 'lockup'
      },
      {
        pin: 6,
        label: 'THW / TFT',
        nameMm: 'ATF Fluid Temperature Sensor',
        wireColor: 'အဝါရောင် (Yellow)',
        normalResistance: '0.9 - 1.5 kΩ (20°C တွင်)',
        voltageRange: '0.5V - 4.5V',
        descriptionMm: 'ဂီယာဆီ အပူချိန်တိုင်း ဆင်ဆာ။ အပူချိန်တက်လာပါက Resistance လျော့နည်းသွားသည်။',
        testProcedureMm: '၂၀ ဒီဂရီတွင် ၁ မှ ၁.၅ kΩ ရှိပြီး၊ အပူချိန် ၈၀ ဒီဂရီတွင် ၀.၂ မှ ၀.၄ kΩ သို့ ကျဆင်းရမည်။',
        type: 'sensor'
      },
      {
        pin: 7,
        label: 'E1',
        nameMm: 'Sensor Earth Ground',
        wireColor: 'အညိုရောင် (Brown)',
        normalResistance: '0.1 - 0.5 Ω (Body Earth သို့)',
        voltageRange: '0V',
        descriptionMm: 'အပူချိန်ဆင်ဆာအတွက် သီးသန့် အနုတ်ငုတ် (ECU Ground)။',
        testProcedureMm: 'ECU E1 ငုတ်နှင့် ဆက်သွယ်မှု ရှိမရှိ Continuity တိုင်းပါ။',
        type: 'ground'
      }
    ],
    troubleshootingGuideMm: [
      {
        symptom: 'ဂီယာ D ထိုးချိန် စောင့်ကန်ခြင်း (Shifting Shock / Jerk)',
        possibleCause: 'SLT Solenoid ဂျမ်းဖြစ်ခြင်း သို့မဟုတ် ဝိုင်ယာ Pin 1/2 ကြိုးပြတ်/ရှော့ဖြစ်ခြင်း၊ ဂီယာဆီ ပေကျံနေခြင်း',
        action: 'Pin 1 & 2 ကြား အွမ်တိုင်းပါ (5.0 - 5.6 Ω)။ Valve Body ရှိ SLT ဘားအုံ ဖြုတ်ဆေးပြီး ဆီသစ်လဲပါ။'
      },
      {
        symptom: 'ဂီယာ ၃ မဝင်ဘဲ စက်သံကျယ်ပြီး အရှိန်မတက်ခြင်း (Slip in 3rd/4th gear)',
        possibleCause: 'S2 Solenoid (Pin 4) ကွိုင်ပြတ်ခြင်း သို့မဟုတ် ဝိုင်ယာ ပလပ်ခေါင်း ချေးတက်ခြင်း',
        action: 'Pin 4 နှင့် ဘော်ဒီကြား ၁၁ မှ ၁၅ အွမ် ရှိမရှိ စစ်ပါ။ ၁၅ အွမ်ထက်ကျော်ပါက Solenoid အသစ်လဲပါ။'
      },
      {
        symptom: 'ကုန်းတက်ချိန် ဂီယာချော်ခြင်း၊ ဆွဲအားမရှိခြင်း',
        possibleCause: 'ဂီယာဆီနည်းခြင်း သို့မဟုတ် ပင်မဆီဖိအားကျဆင်းခြင်း (Line Pressure Low)',
        action: 'ဂီယာဆီပမာဏ စစ်ဆေးပါ။ Solenoid filter ဇကာများ ပိတ်ဆို့မှု ရှိမရှိ စစ်ဆေးပါ။'
      }
    ]
  },
  {
    id: 'toyota-k310-cvt',
    name: 'Toyota K310 / K311 / K312 / K313 (Super CVT-i)',
    transmissionType: 'Super CVT-i',
    manufacturer: 'Toyota',
    popularCarsMm: 'Axio, Fielder (NZE141/NZE161), Wish (ZGE20), Premio, Allion (NZT260), Vitz (KSP130), Ractis',
    tcmLocationMm: 'TCM သီးသန့် ဘောက်စ် (Dashboard အောက် ယာဉ်မောင်းဘက် သို့မဟုတ် အင်ဂျင်ခန်းအတွင်း)',
    fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC) - **လုံးဝ ATF မထည့်ရ!**',
    fluidCapacityMm: 'လဲလှယ်ချိန်: ၃.၅ - ၄.၀ လီတာ (စက်ဖြင့် လုံးဝဖောက်ထုတ်ပါက ၇.၅ လီတာ)',
    commonFaultCodes: ['P0746', 'P0841', 'P0962', 'P0965', 'P2769', 'P2770', 'P0712'],
    valveBodyConnectorPins: [
      {
        pin: 1,
        label: 'SLS+',
        nameMm: 'Secondary Pressure Linear Solenoid (+)',
        wireColor: 'အစိမ်းရောင် (Green)',
        normalResistance: '5.0 - 5.6 Ω',
        voltageRange: 'PWM Duty Control',
        descriptionMm: 'CVT ပူလီအနောက်ဖက် (Secondary Pulley) ဆီဖိအားကို ထိန်းချုပ်ပြီး ခါးပတ်ကြိုး (Belt) မချော်စေရန် ညှိပေးသည်။',
        testProcedureMm: 'Pin 1 နှင့် Pin 2 ကြား အွမ်တိုင်းပါ။ ၅.၀ မှ ၅.၆ အွမ် ရှိရမည်။',
        type: 'pressure'
      },
      {
        pin: 2,
        label: 'SLS-',
        nameMm: 'Secondary Pressure Solenoid (-)',
        wireColor: 'အနက်ရောင် (Black)',
        normalResistance: '5.0 - 5.6 Ω (Pin 1 နှင့်)',
        voltageRange: 'TCM Return Line',
        descriptionMm: 'SLS Solenoid ၏ အနုတ်လိုင်း။',
        testProcedureMm: 'TCM မှ ground ပေးပို့မှု စစ်ဆေးပါ။',
        type: 'ground'
      },
      {
        pin: 3,
        label: 'SLU+',
        nameMm: 'Lock-Up / Clutch Pressure Solenoid (+)',
        wireColor: 'အဝါရောင် (Yellow) / အနီလိုင်း',
        normalResistance: '5.0 - 5.6 Ω',
        voltageRange: '0 - 12V Pulse',
        descriptionMm: 'Forward Clutch နှင့် Lock-up clutch ဖိအားကို ချောမွေ့စွာ ထိန်းပေးသည်။',
        testProcedureMm: 'Pin 3 နှင့် Pin 4 ကြား ၅.၀ မှ ၅.၆ အွမ် ရှိရမည်။ အကယ်၍ ချွတ်ယွင်းပါက စထွက်ချိန် ဒုန်းခနဲဖြစ်မည်။',
        type: 'lockup'
      },
      {
        pin: 4,
        label: 'SLU-',
        nameMm: 'Lock-Up Solenoid (-)',
        wireColor: 'အဖြူရောင် (White)',
        normalResistance: '5.0 - 5.6 Ω (Pin 3 နှင့်)',
        voltageRange: 'Ground Return',
        descriptionMm: 'SLU Solenoid အနုတ်လိုင်း။',
        testProcedureMm: 'ဝိုင်ယာကြိုးပြတ်ခြင်း မရှိစေရန် Continuity စစ်ပါ။',
        type: 'ground'
      },
      {
        pin: 5,
        label: 'SL1+',
        nameMm: 'Primary Ratio Control Solenoid (+)',
        wireColor: 'အပြာရောင် (Blue)',
        normalResistance: '5.0 - 5.6 Ω',
        voltageRange: 'PWM Control',
        descriptionMm: 'CVT အချိုး (Gear Ratio) ကို အဓိက ပြောင်းလဲပေးသော Solenoid ဖြစ်သည်။',
        testProcedureMm: 'Pin 5 နှင့် Pin 6 ကြား ၅.၀ မှ ၅.၆ အွမ် တိုင်းပါ။ P0746 ပေါ်ပါက ဤဆလိုးနွိုက်ကို စစ်ပါ။',
        type: 'shift'
      },
      {
        pin: 6,
        label: 'SL1-',
        nameMm: 'Primary Ratio Solenoid (-)',
        wireColor: 'အညိုရောင် (Brown)',
        normalResistance: '5.0 - 5.6 Ω (Pin 5 နှင့်)',
        voltageRange: 'TCM Ground Pulse',
        descriptionMm: 'SL1 Solenoid အနုတ်လိုင်း။',
        testProcedureMm: 'TCM ပလပ်ခေါင်းအထိ ဝိုင်ယာဆက်ကြောင်း ရှိမရှိ စစ်ပါ။',
        type: 'ground'
      },
      {
        pin: 7,
        label: 'SCX',
        nameMm: 'Shift Lock / On-Off Solenoid',
        wireColor: 'လိမ္မော်ရောင် (Orange)',
        normalResistance: '11 - 15 Ω (Body Ground သို့)',
        voltageRange: '12V ON/OFF',
        descriptionMm: 'CVT စနစ် လုံခြုံရေးနှင့် shift lock ထိန်းချုပ် ဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 7 နှင့် ဂီယာဘော်ဒီ ကြား ၁၁ မှ ၁၅ အွမ် ရှိရမည်။',
        type: 'shift'
      }
    ],
    troubleshootingGuideMm: [
      {
        symptom: 'ကားစထွက်ချိန်တွင် တုန်ခါခြင်း (Judder / Shudder on takeoff)',
        possibleCause: 'CVT Forward Clutch ဆီဖိအားမမှန်ခြင်း၊ CVT Fluid သက်တမ်းကုန်ခြင်း သို့မဟုတ် ATF အမှားထည့်ထားမိခြင်း',
        action: 'Toyota CVT Fluid FE အသစ်လဲပါ၊ TCM Calibration (Zero Point / Forward Clutch learning) စက်ထိုး၍ Reset ပြန်ချပေးပါ။'
      },
      {
        symptom: 'အရှိန်တက်သော်လည်း ကားမပြေးခြင်း (RPM မြင့်တက်ပြီး Belt ချော်သံကြားရခြင်း)',
        possibleCause: 'Secondary Pressure ကျဆင်းခြင်း (SLS Solenoid ဂျမ်းဖြစ်ခြင်း သို့မဟုတ် Valve Body ခြစ်ရာထင်ခြင်း)',
        action: 'P0841 / P0746 ကုတ်စစ်ပါ။ Valve Body ဖိအားတိုင်းကိရိယာဖြင့် စစ်ဆေးပါ။ လိုအပ်ပါက Valve Body လဲလှယ်ပါ။'
      },
      {
        symptom: 'D မောင်းနေစဉ် ရုတ်တရက် အင်ဂျင်ထိုးရပ်သွားခြင်း',
        possibleCause: 'SLU Lock-up Solenoid ပွင့်လျက် အမြဲ lock ဖြစ်နေခြင်း',
        action: 'Pin 3 & 4 SLU Solenoid Ohm စစ်ဆေးပါ။ Solenoid ကပ်မကပ် 12V ခဏတို့၍ စမ်းသပ်ပါ။'
      }
    ]
  },
  {
    id: 'honda-fit-cvt',
    name: 'Honda Fit / Insight / Freed (Multi-Matic CVT & Dual-Clutch)',
    transmissionType: 'Multi-Matic CVT',
    manufacturer: 'Honda',
    popularCarsMm: 'Fit (GD1, GE6, GK3), Insight (ZE2 Hybrid), Freed (GB3), Civic, Vezel (RU3)',
    tcmLocationMm: 'PCM (Powertrain Control Module) အင်ဂျင်ခန်းအတွင်း ဘက်ထရီဘေးတွင် တည်ရှိသည်',
    fluidType: 'Honda Genuine HCF-2 (သို့မဟုတ် Ultra HMMF for older GD1 models)',
    fluidCapacityMm: 'လဲလှယ်ချိန်: ၃.၂ - ၃.၅ လီတာ',
    commonFaultCodes: ['P0705', 'P0747', 'P0776', 'P0796', 'P0843', 'P0847', 'P1885', 'P1887'],
    valveBodyConnectorPins: [
      {
        pin: 1,
        label: 'DRIVE_P',
        nameMm: 'Drive Pulley Pressure Control Solenoid',
        wireColor: 'အပြာရောင် (Blue) / အဖြူလိုင်း',
        normalResistance: '3.8 - 4.6 Ω',
        voltageRange: 'Linear Current Control (0 - 1.0A)',
        descriptionMm: 'Drive Pulley သို့ သွားသော ဆီဖိအားကို တိကျစွာ ထိန်းချုပ်သည်။',
        testProcedureMm: 'Pin 1 နှင့် Pin 2 ကြား ၃.၈ မှ ၄.၆ အွမ် ရှိရမည်။',
        type: 'pressure'
      },
      {
        pin: 2,
        label: 'DRIVE_M',
        nameMm: 'Drive Pulley Solenoid Return (-)',
        wireColor: 'အနက်ရောင် (Black) / အနီလိုင်း',
        normalResistance: '3.8 - 4.6 Ω (Pin 1 နှင့်)',
        voltageRange: 'PCM Controlled',
        descriptionMm: 'Drive Pulley Solenoid အနုတ်လိုင်း။',
        testProcedureMm: 'Continuity စစ်ဆေးပါ။',
        type: 'ground'
      },
      {
        pin: 3,
        label: 'DRIVEN_P',
        nameMm: 'Driven Pulley Pressure Control Solenoid',
        wireColor: 'အစိမ်းရောင် (Green) / အဝါလိုင်း',
        normalResistance: '3.8 - 4.6 Ω',
        voltageRange: 'Linear Current Control',
        descriptionMm: 'Driven Pulley ဖိအားထိန်း ဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 3 နှင့် Pin 4 ကြား ၃.၈ မှ ၄.၆ အွမ် ရှိရမည်။',
        type: 'pressure'
      },
      {
        pin: 4,
        label: 'DRIVEN_M',
        nameMm: 'Driven Pulley Solenoid Return (-)',
        wireColor: 'အညိုရောင် (Brown)',
        normalResistance: '3.8 - 4.6 Ω (Pin 3 နှင့်)',
        voltageRange: 'PCM Controlled',
        descriptionMm: 'Driven Pulley Solenoid အနုတ်ငုတ်။',
        testProcedureMm: 'Continuity စစ်ဆေးပါ။',
        type: 'ground'
      },
      {
        pin: 5,
        label: 'SC_SOL',
        nameMm: 'Start Clutch / Forward Clutch Solenoid',
        wireColor: 'အနီရောင် (Red) / အပြာလိုင်း',
        normalResistance: '4.5 - 5.5 Ω',
        voltageRange: 'PWM Control',
        descriptionMm: 'စတင်ထွက်ခွာချိန် Clutch ချိတ်ဆက်မှုကို ထိန်းချုပ်ပေးသော အဓိက Solenoid။ Honda Fit GD1/GE6 တွင် အထူးအရေးပါသည်။',
        testProcedureMm: 'Pin 5 နှင့် Pin 6 ကြား ၄.၅ မှ ၅.၅ အွမ် ရှိရမည်။',
        type: 'shift'
      },
      {
        pin: 6,
        label: 'SC_GND',
        nameMm: 'Start Clutch Solenoid Ground',
        wireColor: 'အနက်ရောင် (Black)',
        normalResistance: '0.2 Ω (Earth)',
        voltageRange: 'Ground',
        descriptionMm: 'Start Clutch လိုင်း၏ အနုတ်ငုတ်။',
        testProcedureMm: 'Ground မိမမိ စစ်ပါ။',
        type: 'ground'
      }
    ],
    troubleshootingGuideMm: [
      {
        symptom: 'Honda Fit D ထိုးပြီး စထွက်ချိန် တဆတ်ဆတ် တုန်ခါခြင်း (Start Clutch Judder)',
        possibleCause: 'Honda CVT HMMF/HCF-2 ဆီ သက်တမ်းလွန်ခြင်း သို့မဟုတ် Start Clutch Plate ချေးတက်ခြင်း',
        action: 'Honda Genuine HCF-2 ဆီ အပြည့်လဲပါ။ ထို့နောက် Scanner ဖြင့် Start Clutch Calibration (Clutch Feedback Learn) ပြုလုပ်ပေးပါ။'
      },
      {
        symptom: 'D Indicator မီး မှိတ်တုတ်မှိတ်တုတ် ဖြစ်နေခြင်း (D light blinking)',
        possibleCause: 'Transmission Fault Code ဝင်နေခြင်း (ဥပမာ- P0705 Inhibitor Switch သို့မဟုတ် Pulley Pressure Sensor)',
        action: 'OBD2 စက်ထိုး၍ Transmission Code ဖတ်ပါ။ Range Switch ပလပ်ခေါင်းတွင် ရေဝင်ခြင်း/ဝိုင်ယာပြတ်ခြင်း စစ်ပါ။'
      }
    ]
  },
  {
    id: 'nissan-xtronic-cvt',
    name: 'Nissan Xtronic CVT (Jatco JF015E / RE0F11A)',
    transmissionType: 'Xtronic CVT',
    manufacturer: 'Nissan',
    popularCarsMm: 'Nissan Note (E12), Tiida, Latio, Sylphy, Cube, Serena, Juke, March',
    tcmLocationMm: 'TCM ကို ဘက်ထရီအောက်ခြေ သို့မဟုတ် အင်ဂျင်ခန်း ဝဲဘက်တွင် တပ်ဆင်ထားသည်',
    fluidType: 'Nissan Genuine CVT Fluid NS-3 (သို့မဟုတ် အဟောင်းများအတွက် NS-2)',
    fluidCapacityMm: 'လဲလှယ်ချိန်: ၃.၅ - ၄.၀ လီတာ (ဆီဇကာ ၂ ခုပါသည် - Paper filter နှင့် Pan filter)',
    commonFaultCodes: ['P0746', 'P0841', 'P0965', 'P0744', 'P17F0', 'P17F1', 'P2857', 'P2859'],
    valveBodyConnectorPins: [
      {
        pin: 1,
        label: 'L/H_CLUTCH',
        nameMm: 'Low/High Clutch Select Solenoid (Auxiliary Gearbox)',
        wireColor: 'အစိမ်းရောင် (Green)',
        normalResistance: '10 - 14 Ω',
        voltageRange: '12V Pulse',
        descriptionMm: 'JF015E CVT7 ၏ Sub-planetary gear (ဂီယာအနိမ့်/အမြင့်) ပြောင်းလဲပေးသော ဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 1 နှင့် Pin 2 ကြား ၁၀ မှ ၁၄ အွမ် ရှိရမည်။',
        type: 'shift'
      },
      {
        pin: 2,
        label: 'SOL_GND',
        nameMm: 'Solenoid Common Ground',
        wireColor: 'အနက်ရောင် (Black) / အဖြူလိုင်း',
        normalResistance: '0.1 - 0.3 Ω (Body Ground)',
        voltageRange: '0V',
        descriptionMm: 'Solenoid များ၏ ဘုံအနုတ်လိုင်း။',
        testProcedureMm: 'ကားဘော်ဒီ Ground နှင့် ဆက်သွယ်မှု စစ်ပါ။',
        type: 'ground'
      },
      {
        pin: 3,
        label: 'PRI_SOL',
        nameMm: 'Primary Pressure Solenoid (Belt Ratio)',
        wireColor: 'အနီရောင် (Red)',
        normalResistance: '5.6 - 6.5 Ω',
        voltageRange: 'Linear PWM (0 - 1.0A)',
        descriptionMm: 'CVT ပူလီ အရှေ့ဖက် ဆီဖိအားကို ထိန်းညှိပေးသည်။',
        testProcedureMm: 'Pin 3 နှင့် Ground ကြား ၅.၆ မှ ၆.၅ အွမ် ရှိရမည်။',
        type: 'pressure'
      },
      {
        pin: 4,
        label: 'SEC_SOL',
        nameMm: 'Secondary Pressure Solenoid',
        wireColor: 'အပြာရောင် (Blue)',
        normalResistance: '5.6 - 6.5 Ω',
        voltageRange: 'Linear PWM',
        descriptionMm: 'CVT အနောက်ဖက် ပူလီ ဖိအားထိန်း ဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 4 နှင့် Ground ကြား ၅.၆ မှ ၆.၅ အွမ် ရှိရမည်။',
        type: 'pressure'
      },
      {
        pin: 5,
        label: 'TCC_SOL',
        nameMm: 'Torque Converter Clutch (Lock-up) Solenoid',
        wireColor: 'အဝါရောင် (Yellow)',
        normalResistance: '5.6 - 6.5 Ω',
        voltageRange: 'PWM',
        descriptionMm: 'Lock-up clutch ထိန်းချုပ်ဆလိုးနွိုက်။ P0744 ကုတ်အတွက် ဤ Pin ကို စစ်ရမည်။',
        testProcedureMm: 'Pin 5 နှင့် Ground ကြား ၅.၆ မှ ၆.၅ အွမ် ရှိရမည်။',
        type: 'lockup'
      },
      {
        pin: 6,
        label: 'LINE_SOL',
        nameMm: 'Line Pressure Control Solenoid',
        wireColor: 'ခရမ်းရောင် (Violet)',
        normalResistance: '5.6 - 6.5 Ω',
        voltageRange: 'Linear PWM',
        descriptionMm: 'ပင်မဆီဖိအား ထိန်းချုပ်သည်။',
        testProcedureMm: 'Pin 6 နှင့် Ground ကြား ၅.၆ မှ ၆.၅ အွမ် ရှိရမည်။',
        type: 'pressure'
      }
    ],
    troubleshootingGuideMm: [
      {
        symptom: 'ကားစထွက်ချိန်တွင် အလွန်လေးလံပြီး ၄၀ km/h ကျော်မှ အရှိန်ရခြင်း (Limp Home Mode)',
        possibleCause: 'Auxiliary Gearbox Low Clutch ချော်ခြင်း သို့မဟုတ် Flow Control Valve ဂျမ်းဖြစ်ခြင်း',
        action: 'P17F0 / P17F1 ကုတ်စစ်ပါ။ ဆီပန်ဇကာနှင့် အပြင် စက္ကူဆီဇကာ (Cartridge filter) ၂ ခုစလုံး အသစ်လဲပါ။'
      },
      {
        symptom: 'ကုန်းတက်မောင်းစဉ် ဂီယာဝှီးသံ (Whining noise) ကျယ်လောင်စွာ ထွက်ပေါ်ခြင်း',
        possibleCause: 'CVT Bearing စားခြင်း သို့မဟုတ် ဆီပူလွန်းခြင်း (Overheating)',
        action: 'CVT Cooler နှင့် ဆီအပူချိန် စစ်ဆေးပါ။ Nissan NS-3 ဆီသစ်လဲပါ။'
      }
    ]
  },
  {
    id: 'suzuki-wagonr-cvt',
    name: 'Suzuki Wagon R / Spacia / Hustler (Jatco CVT7)',
    transmissionType: 'Xtronic CVT',
    manufacturer: 'Suzuki',
    popularCarsMm: 'Wagon R (MH34S, MH44S, MH55S), Spacia (MK32S), Hustler (MR31S), Alto Eco, Swift 1.2',
    tcmLocationMm: 'TCM ကို ယာဉ်မောင်းဘက် ဒက်ရှ်ဘုတ်အောက် ကပ်လျက်တွင် တွေ့နိုင်သည်',
    fluidType: 'Suzuki CVT Fluid Green 1 သို့မဟုတ် Green 2 (Shell / Idemitsu CVT အဆင့်)',
    fluidCapacityMm: 'လဲလှယ်ချိန်: ၂.၆ - ၂.၈ လီတာ',
    commonFaultCodes: ['P0730', 'P0840', 'P0841', 'P0746', 'P0705'],
    valveBodyConnectorPins: [
      {
        pin: 1,
        label: 'SOL1',
        nameMm: 'Low-Mode Shift Solenoid',
        wireColor: 'အစိမ်းရောင် (Green)',
        normalResistance: '11 - 14 Ω',
        voltageRange: '12V',
        descriptionMm: 'Wagon R ၏ 660cc အင်ဂျင်အတွက် ဂီယာအနိမ့်ပိုင်း မောင်းနှင်အား ထိန်းဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 1 နှင့် Ground ကြား ၁၁ မှ ၁၄ အွမ် တိုင်းပါ။',
        type: 'shift'
      },
      {
        pin: 2,
        label: 'LINE_P',
        nameMm: 'Pressure Solenoid',
        wireColor: 'အနီရောင် (Red)',
        normalResistance: '5.0 - 6.5 Ω',
        voltageRange: 'PWM',
        descriptionMm: 'ပင်မဆီဖိအား ညှိဆလိုးနွိုက်။',
        testProcedureMm: 'Pin 2 နှင့် Pin 3 ကြား အွမ်တိုင်းပါ။',
        type: 'pressure'
      },
      {
        pin: 3,
        label: 'GND',
        nameMm: 'Ground Return Pin',
        wireColor: 'အနက်ရောင် (Black)',
        normalResistance: '0.1 Ω',
        voltageRange: '0V',
        descriptionMm: 'အနုတ်လိုင်းငုတ်။',
        testProcedureMm: 'Body continuity စစ်ပါ။',
        type: 'ground'
      }
    ],
    troubleshootingGuideMm: [
      {
        symptom: 'မီးပွိုင့်ရပ်ပြီး ပြန်ထွက်ချိန် ချက်ချင်းမရွေ့ဘဲ ၂ စက္ကန့်ခန့် ကြာမှ ဒုန်းခနဲ ထွက်ခြင်း',
        possibleCause: 'Forward Clutch ဖိအားနောက်ကျခြင်း သို့မဟုတ် Idling Stop စနစ် အဖွင့်အပိတ်တွင် Valve Body ဖိအားကျခြင်း',
        action: 'CVT Green 2 ဆီ အသစ်လဲပြီး ဆီဖိအား သင်ကြားမှု (Pressure Learn) ပြန်လည်ပြုလုပ်ပါ။'
      }
    ]
  }
];
