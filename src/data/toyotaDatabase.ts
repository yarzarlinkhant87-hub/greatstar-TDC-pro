import { ToyotaVehicle } from '../types/nameplate';

export const TOYOTA_PETROL_DATABASE: ToyotaVehicle[] = [
  // 1. Toyota Premio NZT260
  {
    id: 'toyota-premio-nzt260',
    modelName: 'Premio 1.5 FL Package',
    burmeseName: 'တိုယိုတာ ပရီမီယို (၁.၅ လီတာ)',
    chassisCode: 'NZT260',
    fullModelCode: 'DBA-NZT260-AEXEK',
    generationYears: '2007 - 2020',
    category: 'sedan',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-NZT260-AEXEK',
      engine: '1NZ-FE 1496cc',
      frame: 'NZT260-3028145',
      colorTrim: '070 / FA20',
      transAxle: 'K310 - 02A',
      plant: 'A51'
    },
    engine: {
      code: '1NZ-FE',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i (Variable Valve Timing with intelligence)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်၍ သက်တမ်းအလိုက် ကြိုးလဲရန်မလိုပါ။ Engine Oil အချိန်မှန်လဲလှယ်ပေးရန် အထူးအရေးကြီးပါသည်။',
      horsepower: '110 PS (81 kW) @ 6,000 RPM',
      torque: '141 N·m (14.4 kgf·m) @ 4,400 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Iridium: FK16HR11, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K310',
      transName: 'Super CVT-i (Continuously Variable Transmission)',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF (Front-engine, Front-wheel-drive) ဖြစ်ပြီး အင်ဂျင်နှင့် CVT ဂီယာဘောက်စ်သည် ရှေ့ပိုင်းတွင် တပြိုင်တည်း တည်ရှိကာ ရှေ့ဘီး ၂ ဘီးဖြင့် မောင်းနှင်ပါသည်။ 4WD မဟုတ်ပါ။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Ring Gear အချင်း 6.7 လက်မ၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (ဆီစားအသက်သာဆုံး စံနှုန်း) သို့မဟုတ် 5W-20 / 5W-30',
        capacityWithFilter: '3.7 Liters (Filter ပါလဲလျှင်)',
        capacityWithoutFilter: '3.5 Liters (Filter မလဲလျှင်)',
        interval: '5,000 km သို့မဟုတ် 6 လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A (Synthetic Recommended)'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် မူလခေတ်ဟောင်း CVT Fluid TC)',
        cautionNote: '⚠️ သတိပေးချက် - အင်ဂျင်ခန်းထဲတွင် CVT FE ဟု ရေးထားပါက FE သာ သုံးရပါမည်။ ATF WS သို့မဟုတ် DEXRON အမျိုးအစား လုံးဝ မထည့်ရပါ (ဂီယာကြိုးပြတ်/စလစ်ဖြစ်နိုင်သည်)။',
        drainRefillCapacity: '3.5 - 3.8 Liters (အောက်ခြေ ဝက်အူဖွင့်ချလျှင်)',
        panDropFilterCapacity: '4.2 - 4.5 Liters (ဂီယာဝမ်းဗိုက်ခွာပြီး စစ်ကာပါလဲလျှင်)',
        totalDryCapacity: '6.5 Liters (ဂီယာဘောက်စ် တစ်ခုလုံး အခြောက်ခံ ပမာဏ)',
        inspectionMethod: 'အင်ဂျင်နိုးထားပြီး ဂီယာဆီအပူချိန် 35°C မှ 45°C အတွင်း ရောက်မှ Overflow Plug ဖွင့်၍ အဆင့်ချိန်ရပါမည်။'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC - ပန်းရောင်/အနီရောင်)',
        capacity: '5.2 Liters'
      },
      brakeFluid: 'Toyota Brake Fluid DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '60 Liters (ဓာတ်ဆီ 92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (White Pearl ၃ ထပ်ဆေး)', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အထည်စ ထိုင်ခုံနှင့် တံခါးဘေး အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ် (Silver)', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက်ရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်စစ်စစ် (Black Mica)', colorHex: '#121214', trimCode: 'FB20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1G3', nameEn: 'Gray Metallic', nameMm: 'ခဲရောင် မက်တဲလစ် (Dolphin Gray)', colorHex: '#525456', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'DBA', meaning: 'Japan 2005 Low Emission Vehicle (75% reduction standard)', meaningMm: 'ဂျပန် ၂၀၀၅ ခုနှစ် အိတ်ဇော အဆိပ်ငွေ့ ၇၅% လျှော့ချရေး စံချိန်မီ အသိအမှတ်ပြုကုဒ်' },
      { codeSegment: 'NZT', meaning: '1NZ-FE Engine series platform', meaningMm: '1NZ-FE (1.5L) အင်ဂျင်တပ်ဆင်ထားသော ပလက်ဖောင်းကုဒ်' },
      { codeSegment: '260', meaning: 'T260 Body platform (Premio / Allion 2nd Generation)', meaningMm: 'Premio/Allion ဒုတိယမျိုးဆက် ကိုယ်ထည်ကုဒ် (ရှေ့ဆွဲ 2WD)' },
      { codeSegment: 'A', meaning: 'Sedan Body Type (Sedan ၄ တံခါး)', meaningMm: '၄ တံခါး ဆီဒင် ကိုယ်ထည်အမျိုးအစား' },
      { codeSegment: 'E', meaning: 'Continuously Variable Transmission (Super CVT-i)', meaningMm: 'Super CVT-i ဂီယာဘောက်စ် တပ်ဆင်ထားကြောင်း ဖော်ပြချက်' },
      { codeSegment: 'X', meaning: 'Grade Designation (X Package / Standard)', meaningMm: 'Grade အဆင့် (X Package / FL Package)' },
      { codeSegment: 'E', meaning: 'DOHC EFI Specification (Electronic Fuel Injection)', meaningMm: 'DOHC အီလက်ထရွန်းနစ် ဓာတ်ဆီဖြန်းစနစ်' },
      { codeSegment: 'K', meaning: 'Passenger Car for Japan Domestic Market (JDM Spec)', meaningMm: 'ဂျပန်ပြည်တွင်းသုံး ယာဉ်မောင်းညာမောင်း စံနှုန်း' }
    ],
    workshopTips: [
      'Premio NZT260 အင်ဂျင်ဝိုင်လဲလျှင် 0W-20 သို့မဟုတ် 5W-20 ထည့်ပါက VVT-i Controller သန့်ရှင်းပြီး အင်ဂျင်အသံ အလွန်ငြိမ်သက်စေပါသည်။',
      'K310 CVT ဂီယာဘောက်စ်သည် ဂီယာဆီ ပုံမှန်မလဲပါက Solenoid Valve များ ပိတ်ဆို့တတ်ပြီး D ထိုးလျှင် ကားတုန်ခါခြင်း ဖြစ်တတ်ပါသည်။',
      'မီးလင်းလျှင် O2 Sensor (Oxygen Sensor B1S1) နှင့် Throttle Body ဂျီးတင်ခြင်းကို အရင်ဆုံး စစ်ဆေးသင့်ပါသည်။'
    ]
  },

  // 2. Toyota Premio / Allion ZRT260 (1.8L Valvematic)
  {
    id: 'toyota-premio-zrt260',
    modelName: 'Premio 1.8X / Allion A18 (Valvematic)',
    burmeseName: 'တိုယိုတာ ပရီမီယို / အယ်လီယွန် (၁.၈ လီတာ Valvematic)',
    chassisCode: 'ZRT260',
    fullModelCode: 'DBA-ZRT260-AEXEP',
    generationYears: '2007 - 2021',
    category: 'sedan',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-ZRT260-AEXEP',
      engine: '2ZR-FAE 1797cc',
      frame: 'ZRT260-3105421',
      colorTrim: '070 / FB20',
      transAxle: 'K311 - 02A',
      plant: 'A51'
    },
    engine: {
      code: '2ZR-FAE (သို့မဟုတ် အစောပိုင်း 2ZR-FE)',
      displacement: '1797 cc (1.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'Dual VVT-i + Valvematic (Continuously Variable Valve Lift)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'Valvematic Controller မော်တာ ပါဝင်သဖြင့် Engine Oil သန့်ရှင်းမှု အလွန်လိုအပ်သည်။ ဂျီးတင်ပါက Valvematic Controller ချို့ယွင်းတတ်သည်။',
      horsepower: '144 PS (106 kW) @ 6,400 RPM',
      torque: '176 N·m (17.9 kgf·m) @ 4,400 RPM',
      sparkPlug: 'DENSO SC20HR11 / NGK ILKAR7B11 (Long-reach Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K311',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shift',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး 7-speed Manual Mode ကစားနိုင်သော K311 Super CVT-i ဂီယာဘောက်စ် တပ်ဆင်ထားပါသည်။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Ring Gear 6.7 လက်မ၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (စက်ရုံထုတ် သတ်မှတ်ချက် - အထူးအကြံပြု)',
        capacityWithFilter: '4.2 Liters (Filter ပါလဲလျှင်)',
        capacityWithoutFilter: '3.9 Liters (Filter မလဲလျှင်)',
        interval: '5,000 km သို့မဟုတ် 6 လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A Full Synthetic'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE',
        cautionNote: '⚠️ အရေးကြီး - ZRT260 K311 ဂီယာဘောက်စ်သည် CVT Fluid FE သာ အဓိက သုံးရပါမည်။ TC ထည့်ပါက ဆီစားပိုများပြီး ဂီယာတုံ့ပြန်မှု နှေးကွေးတတ်သည်။',
        drainRefillCapacity: '3.6 - 3.9 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '6.8 Liters',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 35°C မှ 45°C အတွင်း အောက်ခြေ Overflow Tube မှ အဆင့်ချိန်ညှိရမည်။'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '5.8 Liters'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '60 Liters (92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FB20', trimDescriptionMm: 'အနက်ရောင် ပရီမီယံ အထည်စ' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်စစ်', colorHex: '#121214', trimCode: 'FB20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '4T8', nameEn: 'Beige Metallic', nameMm: 'ရွှေညို/ဘေဂျ့်ရောင် (Gold Beige)', colorHex: '#B9A992', trimCode: 'FA40', trimDescriptionMm: 'အဝါနု/ဘေဂျ့်ရောင် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FB20', trimDescriptionMm: 'မီးခိုးနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'DBA', meaning: 'Japan 2005 Emission Regulation Passed', meaningMm: 'ဂျပန်ဓာတ်ငွေ့ထုတ်လွှတ်မှု လျှော့ချရေး စံချိန်မီ' },
      { codeSegment: 'ZRT', meaning: 'ZR-series Engine Platform (1.8L / 2.0L)', meaningMm: 'ZR စီးရီး အင်ဂျင်ပလက်ဖောင်း' },
      { codeSegment: '260', meaning: 'T260 Chassis 2WD Front-Wheel Drive', meaningMm: 'T260 ရှေ့ဆွဲ ၂ ဘီးယက် ကိုယ်ထည်' },
      { codeSegment: 'A', meaning: 'Sedan Body Style', meaningMm: 'ဆီဒင် ၄ တံခါး' },
      { codeSegment: 'E', meaning: 'Super CVT-i Transmission', meaningMm: 'Super CVT-i ဂီယာဘောက်စ်' },
      { codeSegment: 'X', meaning: 'X Grade Specification', meaningMm: 'X Grade အဆင့်' },
      { codeSegment: 'E', meaning: 'EFI Fuel System', meaningMm: 'အီလက်ထရွန်းနစ် ဓာတ်ဆီဖြန်းစနစ်' },
      { codeSegment: 'P', meaning: 'Premium Equipment Package', meaningMm: 'Premium Package အပိုဆောင်းစနစ်များ ပါဝင်ခြင်း' }
    ],
    workshopTips: [
      '2ZR-FAE အင်ဂျင်တွင် Error Code U011B (Lost Communication with Valvematic) သို့မဟုတ် P1047 ပေါ်ပါက Valvematic Controller ECU မော်တာ သို့မဟုတ် ဝါယာကြိုး ကြည့်ရှုရပါမည်။',
      'Spark Plug လဲသည့်အခါ Thread အရှည် မော်ဒယ်ဖြစ်သည့် SC20HR11 တပ်ဆင်ရပါမည်။ မူလတိုသည့် ပလပ်များ လုံးဝ တပ်ဆင်၍ မရပါ။'
    ]
  },

  // 3. Toyota Corolla Fielder NZE141G (Wagon 2WD)
  {
    id: 'toyota-fielder-nze141g',
    modelName: 'Corolla Fielder 1.5G / 1.5X',
    burmeseName: 'တိုယိုတာ ကိုရိုလာ ဖီးလ်ဒါ (၁.၅ လီတာ ရှေ့ဆွဲ)',
    chassisCode: 'NZE141G',
    fullModelCode: 'DBA-NZE141G-AWXEK',
    generationYears: '2006 - 2012',
    category: 'compact',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-NZE141G-AWXEK',
      engine: '1NZ-FE 1496cc',
      frame: 'NZE141-9087211',
      colorTrim: '070 / FA20',
      transAxle: 'K310 - 02A',
      plant: 'A51'
    },
    engine: {
      code: '1NZ-FE',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အင်ဂျင်ဝိုင် 0W-20 သို့မဟုတ် 5W-30 စနစ်တကျ လဲပေးပါက ကီလို ၂ သိန်းကျော်အထိ အလွန်ခံပါသည်။',
      horsepower: '110 PS @ 6,000 RPM',
      torque: '140 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K310',
      transName: 'Super CVT-i',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး ရှေ့ဘီးနှစ်ဘီးဖြင့် ရုန်းကန်မောင်းနှင်ပါသည်။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Ring Gear 6.7 လက်မ၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 / 5W-20 (ဆီစားသက်သာရန် အကောင်းဆုံး) သို့မဟုတ် 5W-30',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km သို့မဟုတ် 6 လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC - ခုနှစ်အလိုက်)',
        cautionNote: '⚠️ 2006-2009 အစောပိုင်းတွင် CVT TC သုံးခဲ့ပြီး 2010 နောက်ပိုင်းတွင် CVT FE ပြောင်းလဲသုံးစွဲခဲ့ပါသည်။ ဂီယာဆီတံဆိပ် အတည်ပြုပြီးမှ ထည့်ပါ။',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.2 Liters',
        totalDryCapacity: '6.5 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်စစ်ဆေးနည်း'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '5.2 Liters'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '50 Liters (92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက်ရောင် အထည်စ' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်စစ်စစ်', colorHex: '#121214', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '8S6', nameEn: 'Nautical Blue Metallic', nameMm: 'ပင်လယ်ပြာရောင် မက်တဲလစ် (Dark Blue)', colorHex: '#1C2E4A', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'DBA', meaning: 'Japan 2005 Emission Regulation Passed', meaningMm: 'ဂျပန်ဓာတ်ငွေ့စံချိန်မီ' },
      { codeSegment: 'NZE', meaning: '1NZ-FE 1.5L Engine Platform', meaningMm: '1NZ-FE ၁.၅ လီတာ အင်ဂျင်' },
      { codeSegment: '141', meaning: 'Corolla 140 Series 2WD Chassis', meaningMm: 'ကိုရိုလာ ၁၄၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက် ကိုယ်ထည်' },
      { codeSegment: 'G', meaning: 'Wagon Body Style (Fielder)', meaningMm: 'ဝက်ဂွန် (Wagon) ကိုယ်ထည်စတိုင် - ဖီးလ်ဒါ' },
      { codeSegment: 'A', meaning: 'Corolla Vehicle Family', meaningMm: 'ကိုရိုလာ ကားအုပ်စု' },
      { codeSegment: 'W', meaning: 'Station Wagon Body', meaningMm: 'စတေရှင် ဝက်ဂွန် ၅ တံခါး' },
      { codeSegment: 'X', meaning: 'X / G Grade Specification', meaningMm: 'X သို့မဟုတ် G ဂရိတ်အဆင့်' },
      { codeSegment: 'E', meaning: 'Super CVT-i Automatic', meaningMm: 'Super CVT-i ဂီယာဘောက်စ်' },
      { codeSegment: 'K', meaning: 'JDM Domestic Market Spec', meaningMm: 'ဂျပန်ပြည်တွင်းသုံး စံနှုန်း' }
    ],
    workshopTips: [
      'NZE141G တွင် မီးလင်းပြီး P0171 (System Too Lean) ပြပါက Mass Air Flow (MAF) Sensor ဂျီးတင်ခြင်း သို့မဟုတ် Intake Manifold Gasket လေစိမ့်ခြင်းကို စစ်ဆေးပါ။',
      'AC ကွန်ပရက်ဆာသည် Variable Displacement စနစ်ဖြစ်၍ ကွန်ပရက်ဆာဝိုင်နှင့် Gas ပမာဏ တိကျရန် လိုအပ်ပါသည်။'
    ]
  },

  // 4. Toyota Corolla Fielder NZE144G (Wagon 4WD)
  {
    id: 'toyota-fielder-nze144g',
    modelName: 'Corolla Fielder 1.5X 4WD',
    burmeseName: 'တိုယိုတာ ကိုရိုလာ ဖီးလ်ဒါ (၁.၅ လီတာ ၄ ဘီးယက် 4WD)',
    chassisCode: 'NZE144G',
    fullModelCode: 'DBA-NZE144G-AWXEK',
    generationYears: '2006 - 2012',
    category: 'compact',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-NZE144G-AWXEK',
      engine: '1NZ-FE 1496cc',
      frame: 'NZE144-9012450',
      colorTrim: '1F7 / FA20',
      transAxle: 'K310F - 03A',
      plant: 'A51'
    },
    engine: {
      code: '1NZ-FE',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အင်ဂျင်ဝိုင် ပုံမှန်လဲလှယ်ပေးရန် လိုအပ်သည်။',
      horsepower: '105 PS @ 6,000 RPM (4WD Tuning)',
      torque: '138 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K310F',
      transName: 'Super CVT-i 4WD with Active Torque Control',
      transType: 'CVT',
      driveType: '4WD (၄ ဘီးယက် - V-Flex II / Active Torque Control 4WD)',
      driveDetailMm: 'ရှေ့ဆွဲကို အခြေခံထားပြီး လမ်းချော်သည့်အခါ နောက်ဘီးသို့ အလိုအလျောက် တွန်းကန်အား ပို့ပေးသော Active Torque 4WD စနစ် ဖြစ်ပါသည်။ ကားအောက်ပိုင်းတွင် နောက်ဒစ်ဖရန်ရှယ် (Rear Differential) နှင့် အလယ်ပန်ကာတံ (Propeller Shaft) ပါဝင်ပါသည်။',
      axleCode: '-03A',
      axleExplanationMm: '03 = Ring Gear အချိုးကုဒ်၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-30',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km သို့မဟုတ် 6 လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
        cautionNote: '⚠️ 4WD K310F ဂီယာဘောက်စ်သည် Transfer Case နှင့် ဆက်စပ်နေသဖြင့် Transfer Case အတွက် သီးသန့် Gear Oil ထည့်ရပါမည်။',
        drainRefillCapacity: '3.6 - 3.9 Liters',
        panDropFilterCapacity: '4.3 Liters',
        totalDryCapacity: '6.7 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်ချိန်ညှိခြင်း'
      },
      differentialFluid: {
        frontDiff: 'Transfer Case: Hypoid Gear Oil LT 75W-85 GL-5 (ဝင်ဆံ့မှု: 0.45 Liters)',
        rearDiff: 'Rear Differential: Toyota Hypoid Gear Oil SX GL-5 85W-90 (ဝင်ဆံ့မှု: 0.5 Liters)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '5.4 Liters'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '50 Liters (92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက်ရောင် အထည်စ' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်', colorHex: '#121214', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'NZE', meaning: '1NZ-FE 1.5L Engine', meaningMm: '1NZ-FE အင်ဂျင်' },
      { codeSegment: '144', meaning: 'Corolla 140 Series 4WD Chassis', meaningMm: 'ကိုရိုလာ ၁၄၀ စီးရီး ၄ ဘီးယက် (4WD) ကိုယ်ထည်ကုဒ်' },
      { codeSegment: 'G', meaning: 'Station Wagon Body', meaningMm: 'ဝက်ဂွန် ကိုယ်ထည်' },
      { codeSegment: 'K310F', meaning: 'F suffix indicates 4WD CVT Transmission', meaningMm: 'F စာလုံးသည် 4WD စနစ်ပါသော CVT ဂီယာဘောက်စ်ကို ရည်ညွှန်းသည်' }
    ],
    workshopTips: [
      '4WD ဖီးလ်ဒါများသည် နောက်ဘီး ဒစ်ဖရန်ရှယ်ဝိုင် (Rear Diff Oil) ကို ကီလို ၃၀,၀၀၀ သို့မဟုတ် ၂ နှစ်တစ်ကြိမ် ပုံမှန်လဲပေးရပါမည်။ မလဲပါက နောက်ပိုင်းမှ အသံမြည်ခြင်း (Humming noise) ဖြစ်တတ်ပါသည်။',
      'ကားမောင်းစဉ် တုန်ခါမှုဖြစ်ပါက အလယ်ပန်ကာတံ (Center Bearing) နှင့် Propeller Shaft Universal Joint များကို စစ်ဆေးပါ။'
    ]
  },

  // 5. Toyota Probox Van NCP51V (1.5L 4AT 2WD)
  {
    id: 'toyota-probox-ncp51v',
    modelName: 'Probox Van 1.5 DX / GL / F Extra Package',
    burmeseName: 'တိုယိုတာ ပရိုဘောက်စ် (၁.၅ လီတာ 4-Speed Auto ရှေ့ဆွဲ)',
    chassisCode: 'NCP51V',
    fullModelCode: 'CBE-NCP51V-EXPDK',
    generationYears: '2002 - 2014',
    category: 'compact',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'CBE-NCP51V-EXPDK',
      engine: '1NZ-FE 1496cc',
      frame: 'NCP51-0189423',
      colorTrim: '058 / FB10',
      transAxle: 'U340E - 05A',
      plant: 'A11'
    },
    engine: {
      code: '1NZ-FE (Commercial Grade)',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး ဝပ်ရှော့သမားများ အသိဆုံး အလွန်ရုန်းနိုင်၊ အကြမ်းခံသော အင်ဂျင်ဖြစ်ပါသည်။',
      horsepower: '109 PS @ 6,000 RPM',
      torque: '141 N·m @ 4,200 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'U340E',
      transName: 'Super ECT 4-Speed Automatic (Traditional Auto Gearbox)',
      transType: 'Automatic (AT)',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အကြမ်းခံ ရိုးရိုး 4-Speed Automatic (ဆီတံဆိပ် အနီတံ) ဂီယာဘောက်စ် တပ်ဆင်ထားပါသည်။ CVT မဟုတ်ပါ။',
      axleCode: '-05A',
      axleExplanationMm: '05 = Final Drive Ratio အချိုး၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30 (အကြမ်းခံ) / 0W-20',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် အစောပိုင်း Dexron III / အချို့ ATF WS)',
        cautionNote: '⚠️ အလွန်အရေးကြီး - Probox NCP51V U340E ဂီယာဘောက်စ်သည် ရိုးရိုး Auto ဖြစ်သဖြင့် CVT ဆီ လုံးဝ လုံးဝ မထည့်ရပါ! ATF Type T-IV သို့မဟုတ် ATF WS (ဂီယာဆီတိုင်းတံတွင် ရေးထားသည့်အတိုင်း) သာ ထည့်ရပါမည်။',
        drainRefillCapacity: '2.9 - 3.2 Liters (အောက်ခြေ ဝက်အူဖွင့်ချလျှင်)',
        panDropFilterCapacity: '3.8 - 4.0 Liters (ဝမ်းဗိုက်ခွာလျှင်)',
        totalDryCapacity: '5.6 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ (Dipstick) ပါရှိသည်။ အင်ဂျင်နိုးထားပြီး P ထိုးကာ HOT မျဉ်းတွင် တိုင်းတာရပါမည်။'
      },
      coolant: {
        type: 'Toyota Long Life Coolant (Red/Pink)',
        capacity: '4.8 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '50 Liters (92 Ron)'
    },
    paints: [
      { code: '058', nameEn: 'White (Commercial Pure White)', nameMm: 'အဖြူရောင်စစ်စစ် (ပရိုဘောက် အဖြူ)', colorHex: '#F4F4F4', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် ရိုးရိုး ဗီနိုင်း/အထည်စ အတွင်းခန်း' },
      { code: '1E7', nameEn: 'Silver Mica Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#BFC3C7', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်ရောင်', colorHex: '#121214', trimCode: 'FB10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '8P4', nameEn: 'Dark Blue Mica Metallic', nameMm: 'အပြာရင့်ရောင် မက်တဲလစ်', colorHex: '#1E2C3D', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'CBE', meaning: 'Commercial Van Low Emission Regulation Code', meaningMm: 'ကုန်တင် ဗန်ကား အိတ်ဇောစံချိန်ကုဒ်' },
      { codeSegment: 'NCP', meaning: 'NZ-series Engine on P-platform', meaningMm: 'NZ အင်ဂျင် ပရိုဘောက်စ် ပလက်ဖောင်း' },
      { codeSegment: '51', meaning: '1.5L 2WD Front-Wheel Drive model', meaningMm: '၁.၅ လီတာ ရှေ့ဆွဲ ၂ ဘီးယက် မော်ဒယ်' },
      { codeSegment: 'V', meaning: 'Van Body Style (Commercial / 4-number)', meaningMm: 'ကုန်တင် ဗန်ကား (Van ကိုယ်ထည်)' },
      { codeSegment: 'E', meaning: '4-Speed Automatic Transmission', meaningMm: '၄ ချက်ထိုး အော်တို ဂီယာဘောက်စ်' },
      { codeSegment: 'X', meaning: 'DX Grade Specification', meaningMm: 'DX ဂရိတ်အဆင့်' },
      { codeSegment: 'P', meaning: 'Passenger / Cargo Package', meaningMm: 'လူစီးနှင့် ကုန်တင် ပက်ကေ့ချ်' },
      { codeSegment: 'D', meaning: 'DOHC 16-Valve Engine', meaningMm: 'DOHC အဆို့ရှင် ၁၆ ခုပါ အင်ဂျင်' },
      { codeSegment: 'K', meaning: 'Japan Commercial Spec', meaningMm: 'ဂျပန်ပြည်တွင်းသုံး စီးပွားရေးယာဉ် စံနှုန်း' }
    ],
    workshopTips: [
      'Probox NCP51V သည် ဂီယာဆီတိုင်းတံ ပါရှိသဖြင့် အင်ဂျင်ပူနေချိန်တွင် စစ်ဆေးပါက လွယ်ကူပါသည်။',
      'ဝန်တင်များသော ကားဖြစ်သဖြင့် နောက် Axle Hub Bearing နှင့် Shock Absorber Bush များကို ပုံမှန် စစ်ဆေးပေးသင့်ပါသည်။'
    ]
  },

  // 6. Toyota Probox NCP160V (New Model 1.5L CVT)
  {
    id: 'toyota-probox-ncp160v',
    modelName: 'Probox Van New Model (CVT)',
    burmeseName: 'တိုယိုတာ ပရိုဘောက်စ် အသစ် (၁.၅ လီတာ CVT)',
    chassisCode: 'NCP160V',
    fullModelCode: 'DBE-NCP160V-EXXCK',
    generationYears: '2014 - Present',
    category: 'compact',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBE-NCP160V-EXXCK',
      engine: '1NZ-FE 1496cc',
      frame: 'NCP160-0045129',
      colorTrim: '058 / FC10',
      transAxle: 'K312 - 01A',
      plant: 'A11'
    },
    engine: {
      code: '1NZ-FE (e-VVT-i Updated)',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 0W-20 အင်ဂျင်ဝိုင် သုံးစွဲရန် စက်ရုံက ညွှန်ကြားထားသည်။',
      horsepower: '109 PS @ 6,000 RPM',
      torque: '136 N·m @ 4,800 RPM',
      sparkPlug: 'DENSO FK16HR11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K312',
      transName: 'Super CVT-i (High-Efficiency CVT)',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'မော်ဒယ်အသစ် NCP160V သည် ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်သော်လည်း မူလ 4AT အစား K312 Super CVT-i သို့ ပြောင်းလဲတပ်ဆင်ထားပါသည်။ ဆီစား အလွန်သက်သာပါသည်။',
      axleCode: '-01A',
      axleExplanationMm: '01 = Final Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (စက်ရုံထုတ် သတ်မှတ်ချက် - ဆီစားသက်သာရန်)',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE သာလျှင်',
        cautionNote: '⚠️ သတိပြုရန် - Probox အဟောင်း (NCP51V) သည် ATF သုံးသော်လည်း၊ ဤ Probox အသစ် (NCP160V) သည် CVT ဖြစ်သဖြင့် CVT FE သာ လုံးဝ ထည့်ရပါမည်! မမှားပါစေနှင့်။',
        drainRefillCapacity: '3.4 - 3.7 Liters',
        panDropFilterCapacity: '4.2 Liters',
        totalDryCapacity: '6.4 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ မပါဝင်တော့ပါ။ အောက်ခြေ Overflow Plug ဖြင့် အပူချိန် 35°C - 45°C တွင် စစ်ဆေးရပါမည်။'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '5.0 Liters'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '50 Liters (92 Ron)'
    },
    paints: [
      { code: '058', nameEn: 'White', nameMm: 'အဖြူရောင်', colorHex: '#F4F4F4', trimCode: 'FC10', trimDescriptionMm: 'မီးခိုးနက် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FC10', trimDescriptionMm: 'မီးခိုးနက် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်', colorHex: '#121214', trimCode: 'FC10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'NCP', meaning: 'NZ-series Engine Platform', meaningMm: 'NZ အင်ဂျင် ပလက်ဖောင်း' },
      { codeSegment: '160', meaning: '160 Chassis Series (2014+ Facelift / CVT Model)', meaningMm: '၁၆၀ စီးရီး မော်ဒယ်သစ် (CVT ဂီယာဘောက်စ် မော်ဒယ်)' },
      { codeSegment: 'V', meaning: 'Commercial Van', meaningMm: 'ကုန်တင် ဗန်ကား' },
      { codeSegment: 'K312', meaning: 'Super CVT-i Transmission Code', meaningMm: 'K312 Super CVT-i ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Probox အဟောင်းနှင့် အသစ် ဂီယာဆီ မှားထည့်မှု အများဆုံး ဖြစ်တတ်ပါသည်။ ကားအောက်ပိုင်း ကတ်ပြားတွင် K312 ဟု တွေ့ပါက CVT FE သာ ထည့်ရပါမည်။'
    ]
  },

  // 7. Toyota Belta / Vitz NCP91 (1.5L CVT)
  {
    id: 'toyota-belta-ncp91',
    modelName: 'Belta 1.5G / Vitz RS',
    burmeseName: 'တိုယိုတာ ဘယ်လ်တာ / ဗစ် (၁.၅ လီတာ)',
    chassisCode: 'NCP91',
    fullModelCode: 'DBA-NCP91-BEXGK',
    generationYears: '2005 - 2012',
    category: 'compact',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-NCP91-BEXGK',
      engine: '1NZ-FE 1496cc',
      frame: 'NCP91-2019483',
      colorTrim: '070 / FB10',
      transAxle: 'K310 - 02A',
      plant: 'A21'
    },
    engine: {
      code: '1NZ-FE',
      displacement: '1496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 0W-20 သို့မဟုတ် 5W-30 အင်ဂျင်ဝိုင် ထည့်သွင်းရပါမည်။',
      horsepower: '110 PS @ 6,000 RPM',
      torque: '141 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K310',
      transName: 'Super CVT-i',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး ရှေ့ဘီးနှစ်ဘီးဖြင့် ရုန်းကန်မောင်းနှင်ပါသည်။ 4WD မဟုတ်ပါ။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Final Drive 6.7 လက်မ၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 / 5W-20 သို့မဟုတ် 5W-30',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
        cautionNote: '⚠️ CVT Fluid FE သို့မဟုတ် TC သာ ထည့်ပါ။ ATF ဆီ လုံးဝ မထည့်ရပါ။',
        drainRefillCapacity: '3.5 Liters',
        panDropFilterCapacity: '4.2 Liters',
        totalDryCapacity: '6.3 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်စစ်ဆေးနည်း'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '4.8 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '42 Liters (92 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးနက် အထည်စ' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '3R3', nameEn: 'Red Mica Metallic', nameMm: 'ကြက်သွေးနီရောင် (Red Mica)', colorHex: '#7C1A22', trimCode: 'FB10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'NCP', meaning: 'NZ-engine Platform', meaningMm: 'NZ အင်ဂျင် ပလက်ဖောင်း' },
      { codeSegment: '91', meaning: '1.5L 2WD Chassis Code', meaningMm: '၁.၅ လီတာ ရှေ့ဆွဲ ၂ ဘီးယက် ကိုယ်ထည်' },
      { codeSegment: 'B', meaning: 'Belta Sedan Body Code', meaningMm: 'ဘယ်လ်တာ ၄ တံခါး ဆီဒင်' }
    ],
    workshopTips: [
      'Belta 1.5L တွင် အင်ဂျင်တုန်ပါက Engine Mounting (အထူးသဖြင့် ညာဘက် Oil Mount) ဆီယိုခြင်းကို စစ်ဆေးပါ။'
    ]
  },

  // 8. Toyota Wish ZGE20G / ZGE20W (2nd Gen 1.8L Valvematic CVT)
  {
    id: 'toyota-wish-zge20g',
    modelName: 'Wish 1.8X / 1.8S (Valvematic)',
    burmeseName: 'တိုယိုတာ ဝစ်ရှ် (၁.၈ လီတာ Valvematic မော်ဒယ်သစ်)',
    chassisCode: 'ZGE20G / ZGE20W',
    fullModelCode: 'DBA-ZGE20G-HPXEP',
    generationYears: '2009 - 2017',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-ZGE20G-HPXEP',
      engine: '2ZR-FAE 1797cc',
      frame: 'ZGE20-0084129',
      colorTrim: '070 / FA20',
      transAxle: 'K311 - 02A',
      plant: 'A31'
    },
    engine: {
      code: '2ZR-FAE',
      displacement: '1797 cc (1.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'Dual VVT-i + Valvematic',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'Valvematic Controller ပါရှိသဖြင့် အင်ဂျင်ဝိုင် 0W-20 သန့်ရှင်းမှုကို အထူးဂရုစိုက်ရပါမည်။',
      horsepower: '144 PS @ 6,400 RPM',
      torque: '176 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO SC20HR11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K311',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shiftmatic',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး Steering Paddle Shift (1.8S ဂရိတ်) ဖြင့် 7-speed ကစားနိုင်သော Super CVT-i ဖြစ်ပါသည်။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Final Drive 6.7 လက်မ၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (စက်ရုံထုတ် အကြံပြုချက်) သို့မဟုတ် 5W-20',
        capacityWithFilter: '4.2 Liters',
        capacityWithoutFilter: '3.9 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE',
        cautionNote: '⚠️ ZGE20G K311 ဂီယာဘောက်စ်သည် CVT FE သာ လုံးဝ ထည့်ရပါမည်။ ATF WS မထည့်ရပါ။',
        drainRefillCapacity: '3.7 - 3.9 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '6.8 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်ချိန်ညှိခြင်း'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '6.0 Liters'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '60 Liters (92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက် အထည်စ' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်စစ်စစ်', colorHex: '#121214', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '8S6', nameEn: 'Dark Blue Mica', nameMm: 'အပြာရင့်ရောင် မက်တဲလစ်', colorHex: '#1C2E4A', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ZGE', meaning: 'ZR-engine Wish 2nd Generation Platform', meaningMm: 'ZR အင်ဂျင် ဝစ်ရှ် ဒုတိယမျိုးဆက်' },
      { codeSegment: '20', meaning: '1.8L 2WD Front-Wheel Drive', meaningMm: '၁.၈ လီတာ ရှေ့ဆွဲ ၂ ဘီးယက်' },
      { codeSegment: 'G', meaning: 'Narrow Body 5-number (Standard)', meaningMm: 'နံပါတ် ၅ ကိုယ်ထည် အကျယ် (၅ ယောက်/၇ ယောက်စီး)' },
      { codeSegment: 'W', meaning: 'Aero Body 3-number (1.8S / 2.0Z)', meaningMm: 'နံပါတ် ၃ ကိုယ်ထည် စပေါ့ဘော်ဒီ (1.8S / 2.0Z)' }
    ],
    workshopTips: [
      'Valvematic Controller Error (P1047 / U011B) လာပါက အင်ဂျင်ဝိုင် ဂျီးတင်ခြင်းကြောင့် မော်တာပိတ်ဆို့ခြင်း ရှိမရှိ စစ်ဆေးပါ။',
      'ရေဆူတတ်ပါက Electric Radiator Fan Motor ကာဘွန်ကုန်ခြင်း သို့မဟုတ် Thermostat ပိတ်ခြင်းကို စစ်ဆေးပါ။'
    ]
  },

  // 9. Toyota Wish ZNE10G (1st Gen 1.8L 4AT)
  {
    id: 'toyota-wish-zne10g',
    modelName: 'Wish 1.8X (1st Generation 4AT)',
    burmeseName: 'တိုယိုတာ ဝစ်ရှ် (၁.၈ လီတာ 4AT မော်ဒယ်ဟောင်း)',
    chassisCode: 'ZNE10G',
    fullModelCode: 'UA-ZNE10G-HPXEK',
    generationYears: '2003 - 2009',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'UA-ZNE10G-HPXEK',
      engine: '1ZZ-FE 1794cc',
      frame: 'ZNE10-0145892',
      colorTrim: '040 / FB10',
      transAxle: 'U341E - 02A',
      plant: 'A31'
    },
    engine: {
      code: '1ZZ-FE',
      displacement: '1794 cc (1.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 1ZZ အင်ဂျင်များသည် အင်ဂျင်ဝိုင် ပုံမှန်မလဲပါက Piston Oil Ring ကပ်ပြီး အင်ဂျင်ဝိုင် စားတတ်ပါသည်။',
      horsepower: '132 PS @ 6,000 RPM',
      torque: '170 N·m @ 4,200 RPM',
      sparkPlug: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'U341E',
      transName: 'Super ECT 4-Speed Automatic',
      transType: 'Automatic (AT)',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အကြမ်းခံ 4-Speed Super ECT Automatic ရိုးရိုး အော်တို ဂီယာဘောက်စ် ဖြစ်ပါသည်။ CVT မဟုတ်ပါ။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Final Drive 6.7 လက်မ၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30 / 10W-40 (မိုင်များပါက)',
        capacityWithFilter: '4.2 Liters',
        capacityWithoutFilter: '3.9 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS - Dipstick အတိုင်း)',
        cautionNote: '⚠️ ZNE10G U341E သည် ရိုးရိုး Auto ဖြစ်သဖြင့် ATF Type T-IV သို့မဟုတ် ATF WS သာ ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ။',
        drainRefillCapacity: '3.1 - 3.4 Liters',
        panDropFilterCapacity: '4.0 Liters',
        totalDryCapacity: '6.5 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ (Dipstick) ပါရှိသည်။ အင်ဂျင်နိုးထားပြီး P ထိုးကာ HOT မျဉ်းတွင် တိုင်းပါ။'
      },
      coolant: {
        type: 'Toyota Long Life Coolant (Red / Pink)',
        capacity: '5.8 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '60 Liters (92 Ron)'
    },
    paints: [
      { code: '040', nameEn: 'Super White II', nameMm: 'အဖြူရောင်စစ်', colorHex: '#F5F5F5', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '1D9', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်', colorHex: '#121214', trimCode: 'FB10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ZNE', meaning: 'ZZ-series Engine Wish Platform', meaningMm: '1ZZ အင်ဂျင်တပ်ဆင်ထားသော ဝစ်ရှ် ပထမမျိုးဆက်' },
      { codeSegment: '10', meaning: '1.8L 2WD Front-Wheel Drive', meaningMm: '၁.၈ လီတာ ရှေ့ဆွဲ ၂ ဘီးယက်' },
      { codeSegment: 'U341E', meaning: 'Super ECT 4-Speed Auto Transmission', meaningMm: '၄ ချက်ထိုး ရိုးရိုး အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      '1ZZ-FE အင်ဂျင်များတွင် အိတ်ဇောမှ မီးခိုးပြာထွက်ပြီး အင်ဂျင်ဝိုင်စားပါက Valve Stem Seal နှင့် Piston Ring များကို စစ်ဆေးရပါမည်။'
    ]
  },

  // 10. Toyota Alphard / Vellfire 20 Series ANH20W (2.4L CVT 2WD)
  {
    id: 'toyota-alphard-anh20w',
    modelName: 'Alphard 240S / Vellfire 2.4Z',
    burmeseName: 'တိုယိုတာ အယ်လ်ဖတ် / ဗဲလ်ဖိုင်ယား ၂၀ စီးရီး (၂.၄ လီတာ ရှေ့ဆွဲ)',
    chassisCode: 'ANH20W',
    fullModelCode: 'DBA-ANH20W-PRXGK',
    generationYears: '2008 - 2015',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-ANH20W-PRXGK',
      engine: '2AZ-FE 2362cc',
      frame: 'ANH20-8041925',
      colorTrim: '070 / FA20',
      transAxle: 'K112 - 01A',
      plant: 'M21'
    },
    engine: {
      code: '2AZ-FE',
      displacement: '2362 cc (2.4 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with Balance Shafts',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 2AZ အင်ဂျင်များသည် ပုံမှန် 0W-20 သို့မဟုတ် 5W-30 အင်ဂျင်ဝိုင် လဲလှယ်ပေးရန် အထူးအရေးကြီးပါသည်။',
      horsepower: '170 PS @ 6,000 RPM',
      torque: '224 N·m @ 4,000 RPM',
      sparkPlug: 'DENSO SK20R11 / NGK IFR6A11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K112',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shift',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အင်ဂျင်အရွယ်အစားကြီးမားသော 2AZ အတွက် K112 Super CVT-i ဂီယာဘောက်စ် တပ်ဆင်ထားပါသည်။ 4WD မဟုတ်ပါ။',
      axleCode: '-01A',
      axleExplanationMm: '01 = Final Drive Ratio၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30',
        capacityWithFilter: '4.3 Liters',
        capacityWithoutFilter: '4.1 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် အစောပိုင်း CVT Fluid TC)',
        cautionNote: '⚠️ အလွန်အရေးကြီး - ANH20W K112 ဂီယာဘောက်စ်သည် CVT ဖြစ်သဖြင့် CVT FE (သို့မဟုတ် TC) သာ ထည့်ရပါမည်။ ATF WS လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '4.0 - 4.3 Liters',
        panDropFilterCapacity: '4.8 - 5.0 Liters',
        totalDryCapacity: '8.7 Liters',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 35°C - 45°C တွင် အောက်ခြေ Overflow Tube ဖြင့် အဆင့်စစ်ဆေးရပါမည်။'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '8.4 Liters (Front & Rear Dual AC System)'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '65 Liters (92 / 95 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (လူကြိုက်အများဆုံး)', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် ကတီပါ/သားရေ အတွင်းခန်း' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်စစ်စစ် (Solid Black)', colorHex: '#080808', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ANH', meaning: '2AZ-FE Engine Alphard/Vellfire Platform', meaningMm: '2AZ-FE အင်ဂျင် အယ်လ်ဖတ် ပလက်ဖောင်း' },
      { codeSegment: '20', meaning: '20 Series 2WD Front-Wheel Drive', meaningMm: '၂၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက် မော်ဒယ်' },
      { codeSegment: 'W', meaning: 'Wagon / Minivan Luxury Body', meaningMm: 'မင်နီဗန် ဇိမ်ခံ ကားကြီး ကိုယ်ထည်' },
      { codeSegment: 'K112', meaning: 'Heavy Duty Super CVT-i Transmission', meaningMm: 'ဝန်အားကြီး Super CVT-i ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'ANH20W တွင် အင်ဂျင်ဝိုင် အလွန်အကျွံစားပါက 2AZ အင်ဂျင်၏ Piston Oil Ring ဒီဇိုင်းကြောင့် ဖြစ်တတ်ပြီး Piston Ring မွမ်းမံထားသော ပုံစံဖြင့် အစားထိုး လဲလှယ်ပေးရပါမည်။',
      'Dual AC စနစ်ဖြစ်သဖြင့် ရေတိုင်ကီ Coolant လဲလှယ်ရာတွင် နောက်ပိုင်း AC Heater Core ဘက်သို့ လေခိုခြင်း (Air Bleeding) သေချာ ပြုလုပ်ပေးရပါမည်။'
    ]
  },

  // 11. Toyota Alphard 10 Series ANH10W (2.4L 4AT)
  {
    id: 'toyota-alphard-anh10w',
    modelName: 'Alphard 2.4 AX / AS (10 Series)',
    burmeseName: 'တိုယိုတာ အယ်လ်ဖတ် ၁၀ စီးရီး (၂.၄ လီတာ 4AT)',
    chassisCode: 'ANH10W',
    fullModelCode: 'CBA-ANH10W-PFXSK',
    generationYears: '2002 - 2008',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'CBA-ANH10W-PFXSK',
      engine: '2AZ-FE 2362cc',
      frame: 'ANH10-0091421',
      colorTrim: '042 / FB10',
      transAxle: 'U241E - 02A',
      plant: 'M21'
    },
    engine: {
      code: '2AZ-FE',
      displacement: '2362 cc (2.4 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 5W-30 သို့မဟုတ် 10W-30 အင်ဂျင်ဝိုင် သုံးစွဲနိုင်ပါသည်။',
      horsepower: '159 PS @ 5,600 RPM',
      torque: '220 N·m @ 4,000 RPM',
      sparkPlug: 'DENSO SK20R11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'U241E',
      transName: 'Super ECT 4-Speed Automatic',
      transType: 'Automatic (AT)',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အကြမ်းခံ ရိုးရိုး 4-Speed Super ECT Automatic ဂီယာဘောက်စ် တပ်ဆင်ထားပါသည်။ CVT မဟုတ်ပါ။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Final Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30',
        capacityWithFilter: '4.3 Liters',
        capacityWithoutFilter: '4.1 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS - Dipstick အတိုင်း)',
        cautionNote: '⚠️ Alphard 10 Series U241E သည် ရိုးရိုး Auto ဖြစ်သဖြင့် ATF Type T-IV (သို့မဟုတ် WS) သာ ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ။',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '8.2 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ ပါရှိသည်။ အင်ဂျင်နိုးပြီး P ထိုးကာ တိုင်းတာရပါမည်။'
      },
      coolant: {
        type: 'Toyota Long Life Coolant (Red / Pink)',
        capacity: '8.5 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '70 Liters (92 Ron)'
    },
    paints: [
      { code: '042', nameEn: 'White Pearl Mica', nameMm: 'ပုလဲဖြူရောင် (၁၀ စီးရီး မူရင်း)', colorHex: '#F0EEE9', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုး/ဘေဂျ့်ရောင် အထည်စ' },
      { code: '1C0', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C3C5C7', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်', colorHex: '#121214', trimCode: 'FB10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ANH', meaning: '2AZ Engine Alphard Platform', meaningMm: '2AZ အင်ဂျင် အယ်လ်ဖတ်' },
      { codeSegment: '10', meaning: '10 Series 2WD Front-Wheel Drive', meaningMm: '၁၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက်' },
      { codeSegment: 'U241E', meaning: '4-Speed Automatic Transmission', meaningMm: '၄ ချက်ထိုး အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Alphard 10 စီးရီးနှင့် ၂၀ စီးရီး ကွာခြားချက်မှာ ၁၀ စီးရီးသည် ရိုးရိုး 4AT (U241E) ဖြစ်ပြီး ၂၀ စီးရီးသည် CVT (K112) ဖြစ်ပါသည်။ ဂီယာဆီ လုံးဝ မတူညီပါ။'
    ]
  },

  // 12. Toyota Alphard 30 Series AGH30W (2.5L CVT 2WD)
  {
    id: 'toyota-alphard-agh30w',
    modelName: 'Alphard 2.5 S / SC / Executive Lounge',
    burmeseName: 'တိုယိုတာ အယ်လ်ဖတ် ၃၀ စီးရီး (၂.၅ လီတာ Dual VVT-i)',
    chassisCode: 'AGH30W',
    fullModelCode: 'DBA-AGH30W-PFXSK',
    generationYears: '2015 - 2023',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-AGH30W-PFXSK',
      engine: '2AR-FE 2493cc',
      frame: 'AGH30-0051892',
      colorTrim: '070 / FC20',
      transAxle: 'K114 - 01A',
      plant: 'M21'
    },
    engine: {
      code: '2AR-FE',
      displacement: '2493 cc (2.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with Balance Shafts',
      valvesSystem: 'Dual VVT-i (Intake & Exhaust Variable Valve Timing)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အလွန်ခေတ်မီ ငြိမ်သက်သော 2AR အင်ဂျင်ဖြစ်ပါသည်။ 0W-20 အင်ဂျင်ဝိုင် သာ သုံးစွဲရန် ညွှန်ကြားထားသည်။',
      horsepower: '182 PS @ 6,000 RPM',
      torque: '235 N·m @ 4,100 RPM',
      sparkPlug: 'DENSO FK16HR11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K114',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shiftmatic',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အဆင့်မြှင့်တင်ထားသော K114 Super CVT-i ဂီယာဘောက်စ် တပ်ဆင်ထားပါသည်။',
      axleCode: '-01A',
      axleExplanationMm: '01 = Final Drive Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (စက်ရုံထုတ် အကြံပြုချက်) သို့မဟုတ် 5W-20',
        capacityWithFilter: '4.4 Liters',
        capacityWithoutFilter: '4.0 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A Full Synthetic'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE သာလျှင်',
        cautionNote: '⚠️ AGH30W K114 ဂီယာဘောက်စ်သည် CVT Fluid FE သာ လုံးဝ ထည့်ရပါမည်။ TC သို့မဟုတ် ATF WS လုံးဝ မထည့်ရပါ။',
        drainRefillCapacity: '4.1 - 4.4 Liters',
        panDropFilterCapacity: '5.2 Liters',
        totalDryCapacity: '8.8 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်ချိန်ညှိခြင်း'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '8.6 Liters'
      },
      brakeFluid: 'Toyota DOT 4',
      fuelTankCapacity: '65 Liters (95 / 92 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FC20', trimDescriptionMm: 'အနက်ရောင် သားရေ အတွင်းခန်း' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'FC20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '220', nameEn: 'Sparkling Black Pearl Crystal Shine', nameMm: 'မိတ်ကပ်နက် မက်တဲလစ် (Sparkling Black)', colorHex: '#18151E', trimCode: 'FC20', trimDescriptionMm: 'အနက်ရောင် သားရေ' }
    ],
    codeBreakdown: [
      { codeSegment: 'AGH', meaning: '2AR-FE 2.5L Engine Alphard Platform', meaningMm: '2AR-FE ၂.၅ လီတာ အင်ဂျင် ပလက်ဖောင်း' },
      { codeSegment: '30', meaning: '30 Series 2WD Front-Wheel Drive', meaningMm: '၃၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက် မော်ဒယ်' },
      { codeSegment: 'W', meaning: 'Minivan Luxury Body', meaningMm: 'ဇိမ်ခံ မင်နီဗန် ကိုယ်ထည်' },
      { codeSegment: 'K114', meaning: 'Latest Generation Super CVT-i', meaningMm: 'နောက်ဆုံးပေါ် K114 Super CVT-i ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'AGH30W တွင် Electric Parking Brake (EPB) စနစ် ပါရှိသဖြင့် နောက်ဘရိတ်ရှူး လဲလှယ်ရာတွင် Diagnostic Tool ဖြင့် Service Mode ထည့်သွင်းပြီးမှ ကာလီပါကို ညှစ်ရပါမည်။'
    ]
  },

  // 13. Toyota Mark X GRX120 (2.5L V6 6AT RWD နောက်ဆွဲ)
  {
    id: 'toyota-markx-grx120',
    modelName: 'Mark X 250G / 250G S Package (RWD)',
    burmeseName: 'တိုယိုတာ မတ်တူး မတ်အိတ်စ် (၂.၅ လီတာ V6 နောက်ဆွဲ)',
    chassisCode: 'GRX120',
    fullModelCode: 'DBA-GRX120-AETZH',
    generationYears: '2004 - 2009',
    category: 'sedan',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-GRX120-AETZH',
      engine: '4GR-FSE 2499cc',
      frame: 'GRX120-0041289',
      colorTrim: '062 / FA20',
      transAxle: 'A960E - B01A',
      plant: 'A41'
    },
    engine: {
      code: '4GR-FSE',
      displacement: '2499 cc (2.5 Liters)',
      cylinders: 'V6, DOHC 24-valve with D-4 Direct Injection',
      valvesSystem: 'Dual VVT-i (Intake & Exhaust)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ် ၃ ချောင်း)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး D-4 Direct Injection စနစ် ဖြစ်သဖြင့် ဓာတ်ဆီ အောက်တိန်း ၉၅ သုံးစွဲရန် စက်ရုံက သတ်မှတ်ထားသည်။',
      horsepower: '215 PS @ 6,400 RPM',
      torque: '260 N·m @ 3,800 RPM',
      sparkPlug: 'DENSO FK20HBR11 (High Performance Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'A960E',
      transName: '6-Speed Super ECT Automatic (FR Sports Auto)',
      transType: 'Automatic (AT)',
      driveType: 'RWD (နောက်ဆွဲ ၂ ဘီးယက် - FR စနစ်)',
      driveDetailMm: 'FR (Front-engine, Rear-wheel-drive) ဖြစ်ပြီး အင်ဂျင်သည် ရှေ့တွင် ဒေါင်လိုက်တည်ရှိကာ အလယ်ပန်ကာတံ (Propeller Shaft) မှတဆင့် နောက်ဘီး ၂ ဘီးဖြင့် မောင်းနှင်သော နောက်ဆွဲ အားကစားဆီဒင် ဖြစ်ပါသည်။',
      axleCode: 'B01A',
      axleExplanationMm: 'B = 8-inch Ring Gear၊ 01 = Final Drive Ratio (3.909)၊ A = 2-Pinion Open Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-20 သို့မဟုတ် 5W-30 (API SP Synthetic)',
        capacityWithFilter: '6.3 Liters (V6 အင်ဂျင် ဖြစ်၍ ဝင်ဆံ့မှု များပါသည်)',
        capacityWithoutFilter: '5.9 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS သာလျှင်',
        cautionNote: '⚠️ Mark X A960E 6-Speed Auto ဂီယာဘောက်စ်သည် ATF WS သာ လုံးဝ ထည့်ရပါမည်။ Type T-IV သို့မဟုတ် Dexron သို့မဟုတ် CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '7.9 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ မပါဝင်ပါ။ ဂီယာဆီအပူချိန် 36°C - 46°C တွင် အောက်ခြေ Overflow Plug ဖြင့် တိကျစွာ အဆင့်ချိန်ရပါမည်။'
      },
      differentialFluid: {
        rearDiff: 'Toyota Genuine Hypoid Gear Oil SX GL-5 85W-90 (ဝင်ဆံ့မှု: 1.35 Liters)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '9.1 Liters (V6 စနစ်)'
      },
      brakeFluid: 'Toyota DOT 4 / DOT 3',
      fuelTankCapacity: '70 Liters (95 Ron အထူးအကြံပြု)'
    },
    paints: [
      { code: '062', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (Mark X အစောပိုင်း)', colorHex: '#EDEBE4', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက်ရောင် အထည်စ/သားရေ' },
      { code: '070', nameEn: 'White Pearl Crystal Shine (Late)', nameMm: 'ပုလဲဖြူရောင် (မော်ဒယ်နောက်ပိုင်း)', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'GRX', meaning: 'GR-engine Mark X Platform', meaningMm: 'GR စီးရီး V6 အင်ဂျင် မတ်အိတ်စ် ပလက်ဖောင်း' },
      { codeSegment: '120', meaning: '120 Series RWD Rear-Wheel Drive', meaningMm: '၁၂၀ စီးရီး နောက်ဆွဲ ၂ ဘီးယက် မော်ဒယ်' },
      { codeSegment: 'A960E', meaning: '6-Speed Rear-Wheel Drive Automatic Transmission', meaningMm: 'နောက်ဆွဲ ၆ ချက်ထိုး အားကစား အော်တို ဂီယာဘောက်စ်' },
      { codeSegment: 'B01A', meaning: '8-inch Ring Gear Rear Differential', meaningMm: '၈ လက်မ အရွယ်အစားရှိ နောက်ဒစ်ဖရန်ရှယ်' }
    ],
    workshopTips: [
      '4GR-FSE D-4 အင်ဂျင်သည် Intake Valve တွင် ကာဗွန်ဂျီးတင်ခြင်း (Carbon Buildup) ဖြစ်တတ်သဖြင့် ကီလို ၅၀,၀၀၀ တစ်ကြိမ် Intake Valve နှင့် Throttle Body ကို ဆေးကြောပေးသင့်ပါသည်။',
      'နောက်ဆွဲဖြစ်သဖြင့် နောက်ဒစ်ဖရန်ရှယ်ဝိုင် (Rear Diff Oil) ကို ကီလို ၃၀,၀၀၀ တစ်ကြိမ် လဲလှယ်ပေးရန် မမေ့ပါနှင့်။'
    ]
  },

  // 14. Toyota Land Cruiser Prado 120 TRJ120W (2.7L Petrol 4WD)
  {
    id: 'toyota-prado-trj120w',
    modelName: 'Land Cruiser Prado 120 TX / TX Limited',
    burmeseName: 'တိုယိုတာ ပရာဒို ၁၂၀ (၂.၇ လီတာ ဓာတ်ဆီ 4WD)',
    chassisCode: 'TRJ120W',
    fullModelCode: 'CBA-TRJ120W-GGPEK',
    generationYears: '2004 - 2009',
    category: 'suv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'CBA-TRJ120W-GGPEK',
      engine: '2TR-FE 2693cc',
      frame: 'TRJ120-0021489',
      colorTrim: '070 / FB10',
      transAxle: 'A343F - A02A',
      plant: 'A11'
    },
    engine: {
      code: '2TR-FE',
      displacement: '2693 cc (2.7 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with Balance Shafts',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး ဝပ်ရှော့သမားများ အလွန်နှစ်ခြိုက်သော အကြမ်းဆုံး 2TR အင်ဂျင် ဖြစ်ပါသည်။',
      horsepower: '163 PS @ 5,200 RPM',
      torque: '246 N·m @ 3,800 RPM',
      sparkPlug: 'DENSO K20HR-U11 / NGK LFR6C-11 (Long-reach Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'A343F',
      transName: '4-Speed Super ECT 4WD Automatic Transmission',
      transType: 'Automatic (AT)',
      driveType: '4WD (Full-Time 4WD - အချိန်ပြည့် ၄ ဘီးယက် စနစ်)',
      driveDetailMm: 'Full-time 4WD စနစ်ဖြစ်ပြီး Torsen LSD Center Differential ပါရှိကာ အလယ် Transfer Case တွင် H (High), HL (High Lock), N (Neutral), LL (Low Lock ၄ ဘီးကြမ်း) ခလုတ်/ဂီယာတံ ပါဝင်ပါသည်။',
      axleCode: 'A02A',
      axleExplanationMm: 'A = 7.5-inch / 8-inch Front & Rear Axle Size၊ 02 = 4.100 Gear Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30 / 10W-40',
        capacityWithFilter: '5.8 Liters (Filter ပါလဲလျှင်)',
        capacityWithoutFilter: '5.2 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS (သို့မဟုတ် အစောပိုင်း မူကွဲ ATF Type T-IV - Dipstick အတိုင်း)',
        cautionNote: '⚠️ ဂီယာဆီတိုင်းတံတွင် ရေးထားသည့်အတိုင်း ATF WS သို့မဟုတ် Type T-IV သာ ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.5 - 4.0 Liters',
        panDropFilterCapacity: '5.0 Liters',
        totalDryCapacity: '9.8 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ (Dipstick) ဖြင့် အင်ဂျင်နိုးထားပြီး P ထိုးကာ HOT မျဉ်းတွင် တိုင်းတာရပါမည်။'
      },
      differentialFluid: {
        frontDiff: 'Hypoid Gear Oil GL-5 75W-90 (ဝင်ဆံ့မှု: 1.4 Liters)',
        rearDiff: 'Hypoid Gear Oil GL-5 80W-90 သို့မဟုတ် LT 75W-85 (ဝင်ဆံ့မှု: 2.75 Liters)',
        transferCase: 'Toyota Genuine Transfer Gear Oil 75W-90 GL-4 / GL-5 (ဝင်ဆံ့မှု: 1.4 Liters)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '9.8 Liters (Dual AC)'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '87 Liters (Option Sub-tank ပါပါက 180 Liters)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (Prado လူကြိုက်အများဆုံး)', colorHex: '#F2EFEB', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုး/ဘေဂျ့်ရောင် အထည်စ/သားရေ' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးနက်ရောင် အတွင်းခန်း' },
      { code: '1E7', nameEn: 'Silver Mica Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#BFC3C7', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'TRJ', meaning: '2TR-FE 2.7L Petrol Engine Prado Platform', meaningMm: '2TR-FE ၂.၇ ဓာတ်ဆီ အင်ဂျင် ပရာဒို' },
      { codeSegment: '120', meaning: '120 Series Prado Chassis', meaningMm: '၁၂၀ စီးရီး ပရာဒို ကိုယ်ထည်' },
      { codeSegment: 'W', meaning: 'Wagon SUV Body', meaningMm: 'SUV ဝက်ဂွန် ၅ တံခါး ကိုယ်ထည်' },
      { codeSegment: 'A343F', meaning: '4-Speed 4WD Automatic Transmission', meaningMm: '၄ ချက်ထိုး ၄ ဘီးယက် အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Prado 120 4WD ကားများတွင် အောက်ပိုင်း အဆီထိုးရန် (Grease Nipples) ၆ နေရာမှ ၈ နေရာအထိ Propeller Shaft Spider နှင့် Slide Yoke များတွင် ပါရှိသဖြင့် ဆီလဲတိုင်း အဆီထိုးပေးရပါမည်။',
      'Front Diff, Rear Diff, Transfer Case ဆီ (၃) မျိုးလုံးကို ကီလို ၃၀,၀၀၀ သို့မဟုတ် ၂ နှစ်တစ်ကြိမ် ပုံမှန်စစ်ဆေး လဲလှယ်ပေးရပါမည်။'
    ]
  },

  // 15. Toyota Land Cruiser Prado 150 TRJ150W (2.7L Petrol 6AT 4WD)
  {
    id: 'toyota-prado-trj150w',
    modelName: 'Land Cruiser Prado 150 TX / TX L-Package (Dual VVT-i 6AT)',
    burmeseName: 'တိုယိုတာ ပရာဒို ၁၅၀ (၂.၇ လီတာ Dual VVT-i 6AT)',
    chassisCode: 'TRJ150W',
    fullModelCode: 'CBA-TRJ150W-GGPEK',
    generationYears: '2009 - 2023',
    category: 'suv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'CBA-TRJ150W-GGPEK',
      engine: '2TR-FE 2693cc',
      frame: 'TRJ150-0082491',
      colorTrim: '070 / LB20',
      transAxle: 'AC60F - A02A',
      plant: 'A11'
    },
    engine: {
      code: '2TR-FE (Dual VVT-i Facelift)',
      displacement: '2693 cc (2.7 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with Balance Shafts',
      valvesSystem: 'Dual VVT-i (Intake & Exhaust VVT-i)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး 0W-20 သို့မဟုတ် 5W-20 / 5W-30 အင်ဂျင်ဝိုင် သုံးစွဲနိုင်ပါသည်။',
      horsepower: '163 PS @ 5,200 RPM',
      torque: '246 N·m @ 3,900 RPM',
      sparkPlug: 'DENSO SK20HR11 (Iridium Long-reach, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'AC60F (သို့မဟုတ် အစောပိုင်း A750F 5AT)',
      transName: '6-Speed Super ECT Automatic 4WD Transmission',
      transType: 'Automatic (AT)',
      driveType: '4WD (Full-Time 4WD - အချိန်ပြည့် ၄ ဘီးယက် စနစ်)',
      driveDetailMm: 'Full-Time 4WD စနစ်ဖြစ်ပြီး Torsen LSD Center Differential နှင့် Electronic Center Diff Lock ခလုတ် ပါရှိပါသည်။ 2WD ပြောင်း၍ မရသော အချိန်ပြည့် ၄ ဘီးယက် စနစ် ဖြစ်ပါသည်။',
      axleCode: 'A02A',
      axleExplanationMm: 'A = 8-inch Axle၊ 02 = Gear Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30',
        capacityWithFilter: '5.9 Liters (Filter ပါလဲလျှင်)',
        capacityWithoutFilter: '5.3 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS သာလျှင်',
        cautionNote: '⚠️ Prado 150 AC60F (6-Speed) နှင့် A750F (5-Speed) ဂီယာဘောက်စ်များသည် ATF WS သာ လုံးဝ ထည့်ရပါမည်။ Type T-IV သို့မဟုတ် အခြားဆီများ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.6 - 4.1 Liters',
        panDropFilterCapacity: '5.2 Liters',
        totalDryCapacity: '10.2 Liters',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 41°C - 46°C တွင် အောက်ခြေ Overflow Plug မှ အဆင့်ချိန်ညှိရပါမည်။'
      },
      differentialFluid: {
        frontDiff: 'Hypoid Gear Oil LT 75W-85 GL-5 (ဝင်ဆံ့မှု: 1.4 Liters)',
        rearDiff: 'Hypoid Gear Oil LT 75W-85 GL-5 (ဝင်ဆံ့မှု: 2.7 Liters)',
        transferCase: 'Toyota Genuine Transfer Gear Oil LF 75W (ဝင်ဆံ့မှု: 1.4 Liters)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '10.2 Liters'
      },
      brakeFluid: 'Toyota DOT 4',
      fuelTankCapacity: '87 Liters'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'LB20', trimDescriptionMm: 'အနက်ရောင်/ဘေဂျ့် သားရေ အတွင်းခန်း' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'LB20', trimDescriptionMm: 'အနက်ရောင် သားရေ' },
      { code: '218', nameEn: 'Attitude Black Mica', nameMm: 'မိုက်ကာ အနက်စစ်စစ် (သလင်းနက်)', colorHex: '#0E1012', trimCode: 'LB20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1G3', nameEn: 'Gray Metallic', nameMm: 'ခဲရောင် မက်တဲလစ်', colorHex: '#525456', trimCode: 'LB20', trimDescriptionMm: 'မီးခိုးနက် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'TRJ', meaning: '2TR-FE 2.7L Petrol Engine', meaningMm: '2TR-FE ၂.၇ ဓာတ်ဆီ အင်ဂျင်' },
      { codeSegment: '150', meaning: '150 Series Prado Modern Chassis', meaningMm: '၁၅၀ စီးရီး ပရာဒို မော်ဒယ်သစ်' },
      { codeSegment: 'AC60F', meaning: '6-Speed 4WD Super ECT Automatic Transmission', meaningMm: '၆ ချက်ထိုး ၄ ဘီးယက် အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'AC60F 6-Speed ဂီယာဘောက်စ်သည် ဂီယာဆီအပူချိန် 41°C-46°C မတိုင်မီ Overflow Plug ဖွင့်မိပါက ဆီလျော့နည်းသွားတတ်ပြီး ဂီယာထိုးလျှင် Shock ဖြစ်တတ်ပါသည်။ အပူချိန် ကွက်တိတိုင်းပြီး ချိန်ရပါမည်။'
    ]
  },

  // 16. Toyota Noah / Voxy ZRR70G (2.0L Valvematic CVT 2WD)
  {
    id: 'toyota-noah-zrr70g',
    modelName: 'Noah X / Voxy ZS (ZRR70 Series)',
    burmeseName: 'တိုယိုတာ နိုအာ / ဗောက်ဆီ ၇၀ စီးရီး (၂.၀ လီတာ Valvematic)',
    chassisCode: 'ZRR70G / ZRR70W',
    fullModelCode: 'DBA-ZRR70G-ARXEK',
    generationYears: '2007 - 2014',
    category: 'mpv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'DBA-ZRR70G-ARXEK',
      engine: '3ZR-FAE 1986cc',
      frame: 'ZRR70-0194821',
      colorTrim: '070 / FA20',
      transAxle: 'K111 - 01A',
      plant: 'M21'
    },
    engine: {
      code: '3ZR-FAE (သို့မဟုတ် အစောပိုင်း 3ZR-FE)',
      displacement: '1986 cc (2.0 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'Dual VVT-i + Valvematic',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး Valvematic မော်တာပါရှိသည်။ 0W-20 အင်ဂျင်ဝိုင် ပုံမှန်လဲရန် လိုအပ်သည်။',
      horsepower: '158 PS @ 6,200 RPM',
      torque: '196 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO SC20HR11 (Iridium Long-reach, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'K111',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shift',
      transType: 'CVT',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး ၂.၀ လီတာ အင်ဂျင်အတွက် K111 Super CVT-i တပ်ဆင်ထားပါသည်။',
      axleCode: '-01A',
      axleExplanationMm: '01 = Final Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20',
        capacityWithFilter: '4.2 Liters',
        capacityWithoutFilter: '3.9 Liters',
        interval: '5,000 km',
        standard: 'API SP / ILSAC GF-6A'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
        cautionNote: '⚠️ K111 ဂီယာဘောက်စ်သည် CVT FE သို့မဟုတ် TC သာ ထည့်ရပါမည်။ ATF WS မထည့်ရပါ။',
        drainRefillCapacity: '3.8 - 4.1 Liters',
        panDropFilterCapacity: '4.8 Liters',
        totalDryCapacity: '8.4 Liters',
        inspectionMethod: '35°C - 45°C Overflow Plug အဆင့်စစ်ဆေးနည်း'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '7.8 Liters (Dual AC)'
      },
      brakeFluid: 'Toyota DOT 3 / DOT 4',
      fuelTankCapacity: '60 Liters (92 Ron)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#F2EFEB', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက် အတွင်းခန်း' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C5C7C8', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ZRR', meaning: 'ZR-engine Minivan Platform', meaningMm: 'ZR စီးရီး အင်ဂျင် နိုအာ/ဗောက်ဆီ' },
      { codeSegment: '70', meaning: '70 Series 2WD Front-Wheel Drive', meaningMm: '၇၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက်' },
      { codeSegment: 'K111', meaning: '2.0L Super CVT-i Transmission', meaningMm: '၂.၀ လီတာ Super CVT-i ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Noah/Voxy တွင် ဆလိုက်တံခါး (Power Sliding Door) မပိတ်ပါက Door Release Cable နှင့် Center Roller Bearing ဂျီးတင်ခြင်းကို စစ်ဆေးပါ။'
    ]
  },

  // 17. Toyota Harrier ACU30W (2.4L 4AT 2WD)
  {
    id: 'toyota-harrier-acu30w',
    modelName: 'Harrier 240G / 240G L Package',
    burmeseName: 'တိုယိုတာ ဟာရီယာ (၂.၄ လီတာ ရှေ့ဆွဲ)',
    chassisCode: 'ACU30W',
    fullModelCode: 'CBA-ACU30W-AWPGK',
    generationYears: '2003 - 2013',
    category: 'suv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'CBA-ACU30W-AWPGK',
      engine: '2AZ-FE 2362cc',
      frame: 'ACU30-0081492',
      colorTrim: '062 / FA20',
      transAxle: 'U140E - 02A',
      plant: 'M21'
    },
    engine: {
      code: '2AZ-FE',
      displacement: '2362 cc (2.4 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အင်ဂျင်ဝိုင် ပုံမှန်လဲလှယ်ပေးရန် လိုအပ်သည်။',
      horsepower: '160 PS @ 5,600 RPM',
      torque: '221 N·m @ 4,000 RPM',
      sparkPlug: 'DENSO SK20R11 (Iridium, Gap: 1.1 mm)'
    },
    transmission: {
      transCode: 'U140E',
      transName: 'Super ECT 4-Speed Automatic Transmission',
      transType: 'Automatic (AT)',
      driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီးယက် - FF စနစ်)',
      driveDetailMm: 'FF ရှေ့ဆွဲ ၂ ဘီးယက်ဖြစ်ပြီး အကြမ်းခံ 4-Speed Super ECT Automatic ရိုးရိုး အော်တို ဂီယာဘောက်စ် ဖြစ်ပါသည်။ CVT မဟုတ်ပါ။',
      axleCode: '-02A',
      axleExplanationMm: '02 = Final Ratio၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30 / 5W-20',
        capacityWithFilter: '4.3 Liters',
        capacityWithoutFilter: '4.1 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS - Dipstick အတိုင်း)',
        cautionNote: '⚠️ Harrier ACU30W U140E သည် ရိုးရိုး Auto ဖြစ်သဖြင့် ATF Type T-IV (သို့မဟုတ် WS) သာ ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '8.4 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ ပါရှိသည်။ အင်ဂျင်နိုးပြီး P ထိုးကာ HOT မျဉ်းတွင် တိုင်းတာရပါမည်။'
      },
      coolant: {
        type: 'Toyota Long Life Coolant (Red/Pink)',
        capacity: '8.2 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '72 Liters (92 Ron)'
    },
    paints: [
      { code: '062', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင်', colorHex: '#EDEBE4', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးနက် သားရေ/အထည်စ' },
      { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ်', colorHex: '#080808', trimCode: 'FA20', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' },
      { code: '1C0', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C3C5C7', trimCode: 'FA20', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'ACU', meaning: '2AZ-FE Engine Harrier Platform', meaningMm: '2AZ အင်ဂျင် ဟာရီယာ' },
      { codeSegment: '30', meaning: '30 Series 2WD Front-Wheel Drive', meaningMm: '၃၀ စီးရီး ရှေ့ဆွဲ ၂ ဘီးယက် မော်ဒယ်' },
      { codeSegment: 'U140E', meaning: '4-Speed Super ECT Automatic', meaningMm: '၄ ချက်ထိုး ရိုးရိုး အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Harrier ACU30W သည် ဂီယာဆီတိုင်းတံ ပါရှိပြီး ဂီယာဘောက်စ် အလွန်အကြမ်းခံသော်လည်း ဆီမလဲဘဲ ကြာရှည်မောင်းပါက ဒုတိယဂီယာမှ တတိယဂီယာ ကူးပြောင်းချိန်တွင် တွန့်ဆုတ်ခြင်း (Shift flare) ဖြစ်တတ်ပါသည်။'
    ]
  },

  // 18. Toyota Rush J200E (1.5L 4AT RWD-based 2WD/4WD)
  {
    id: 'toyota-rush-j200e',
    modelName: 'Rush 1.5X / 1.5G (Compact SUV)',
    burmeseName: 'တိုယိုတာ ရပ်ရှ် (၁.၅ လီတာ)',
    chassisCode: 'J200E',
    fullModelCode: 'ABA-J200E-GQGF',
    generationYears: '2006 - 2016',
    category: 'suv',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: 'ABA-J200E-GQGF',
      engine: '3SZ-VE 1495cc',
      frame: 'J200E-0012481',
      colorTrim: 'W09 / FB10',
      transAxle: '4AT - A01A',
      plant: 'D11'
    },
    engine: {
      code: '3SZ-VE',
      displacement: '1495 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve (Daihatsu/Toyota Engine)',
      valvesSystem: 'DVVT (Dynamic Variable Valve Timing)',
      timingType: 'Timing Chain (ဂီယာကြိုး / သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး ဒေါင်လိုက် (Longitudinal Engine) တပ်ဆင်ထားပါသည်။',
      horsepower: '109 PS @ 6,000 RPM',
      torque: '141 N·m @ 4,400 RPM',
      sparkPlug: 'DENSO SXU22PR9 / NGK DCPR7E (Gap: 0.9 mm)'
    },
    transmission: {
      transCode: '4AT (A4Q)',
      transName: '4-Speed Automatic Transmission (FR Rear-Wheel Drive Layout)',
      transType: 'Automatic (AT)',
      driveType: 'RWD (နောက်ဆွဲ ၂ ဘီးယက် - FR Layout အခြေခံ)',
      driveDetailMm: 'FR (Front Engine, Rear Wheel Drive) နောက်ဆွဲ ၂ ဘီးယက် အခြေခံဖြစ်ပြီး အလယ်ပန်ကာတံနှင့် နောက်ဒစ်ဖရန်ရှယ် ခိုင်မာစွာ ပါဝင်ပါသည်။ (4WD မော်ဒယ်ဖြစ်ပါက J210E ဖြစ်သည်)။',
      axleCode: 'A01A',
      axleExplanationMm: 'A = Rear Solid Axle၊ 01 = Final Drive Ratio (5.125)၊ A = 2-Pinion Differential ဖြစ်ပါသည်။'
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30',
        capacityWithFilter: '3.5 Liters',
        capacityWithoutFilter: '3.2 Liters',
        interval: '5,000 km',
        standard: 'API SN / SP'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် Ammix D-III)',
        cautionNote: '⚠️ Rush J200E သည် ရိုးရိုး Auto ဖြစ်သဖြင့် ATF Type T-IV သာ ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '2.5 - 2.8 Liters',
        panDropFilterCapacity: '3.5 Liters',
        totalDryCapacity: '5.2 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ ပါရှိသည်။ အင်ဂျင်နိုးပြီး P ထိုးကာ HOT မျဉ်းတွင် စစ်ပါ။'
      },
      differentialFluid: {
        rearDiff: 'Toyota Hypoid Gear Oil GL-5 80W-90 (ဝင်ဆံ့မှု: 1.65 Liters)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '5.3 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '50 Liters (92 Ron)'
    },
    paints: [
      { code: 'W09', nameEn: 'White (Solid White)', nameMm: 'အဖြူရောင်စစ်စစ်', colorHex: '#F6F6F6', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးနက်ရောင် အထည်စ' },
      { code: 'S28', nameEn: 'Bright Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ်', colorHex: '#C8CBCE', trimCode: 'FB10', trimDescriptionMm: 'မီးခိုးရောင် အတွင်းခန်း' },
      { code: 'X07', nameEn: 'Black Mica Metallic', nameMm: 'မိုက်ကာ အနက်ရောင်', colorHex: '#121214', trimCode: 'FB10', trimDescriptionMm: 'အနက်ရောင် အတွင်းခန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'J200E', meaning: '2WD Rear-Wheel Drive Rush Platform', meaningMm: 'ရပ်ရှ် နောက်ဆွဲ ၂ ဘီးယက် ကိုယ်ထည်ကုဒ်' },
      { codeSegment: '3SZ', meaning: '1.5L DVVT Daihatsu/Toyota Engine', meaningMm: '၁.၅ လီတာ 3SZ အင်ဂျင်' },
      { codeSegment: '4AT', meaning: '4-Speed Automatic Transmission', meaningMm: '၄ ချက်ထိုး အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'Toyota Rush သည် Daihatsu Terios နှင့် အတူတူဖြစ်သဖြင့် ပလပ်ဆိုဒ် (Spark plug thread) သည် အခြား တိုယိုတာများနှင့် မတူဘဲ သေးသွယ်သော 16mm socket အမျိုးအစား (DCPR7E) ဖြစ်ပါသည်။'
    ]
  },

  // 19. Toyota Hilux Revo 2.8D 4WD (1GD-FTV Diesel Common Rail)
  {
    id: 'toyota-hilux-revo-1gd',
    brand: 'Toyota',
    countryOfOrigin: 'Thailand (ထိုင်း)',
    modelName: 'Hilux Revo 2.8D 4WD ROCCO',
    burmeseName: 'တိုယိုတာ ဟိုင်းလပ် ရီဗို ၂.၈ ဒီဇယ် 4WD (ကွန်မွန်းရေးလ်)',
    chassisCode: 'GUN126R',
    fullModelCode: 'GUN126R-DTTHXT',
    generationYears: '2015 - 2024 (ခေတ်သစ် Common Rail)',
    yearIdentificationMethodMm: 'နိမ်းပလိပ်ပြား VIN (Chassis No) ၁၇ လုံး၏ ၁၀ လုံးမြောက် စာလုံး (ဥပမာ G=2016, H=2017, J=2018, K=2019, L=2020)',
    category: 'diesel_commonrail',
    categoryLabelMm: 'ကားလတ် ဒီဇယ် Pickup 4WD',
    fuelType: 'ဒီဇယ် Common Rail',
    nameplatePlate: {
      model: 'GUN126R-DTTHXT',
      engine: '1GD-FTV 2755cc',
      frame: 'MROHA3CD6J0123456',
      colorTrim: '070 / LA20',
      transAxle: 'AC60F - B02A',
      plant: 'T11',
      extraStamps: 'GVWR: 2910 kg / Front: 1450 kg / Rear: 1700 kg'
    },
    engine: {
      code: '1GD-FTV',
      displacement: '2755 cc (2.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve Intercooled VN Turbo',
      valvesSystem: 'Common Rail Direct Injection D-4D (ဖိအား 2,200 bar)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်၍ သက်တမ်းရှည်သည်။ အင်ဂျင်ဝိုင် ပုံမှန် ၅၀၀၀ ကီလို လဲလှယ်ပေးရန် လိုအပ်သည်။',
      horsepower: '204 PS (150 kW) @ 3,400 RPM',
      torque: '500 N·m @ 1,600 - 2,800 RPM',
      sparkPlugOrInjector: 'Denso Solenoid G4 Common Rail Injector (Piezo-fast action, ဖိအား 2,200 bar)'
    },
    transmission: {
      transCode: 'AC60F',
      transName: '6-Speed Super ECT Automatic (Part-time 4WD)',
      transType: 'Automatic (AT)',
      driveType: '4WD (၄ ဘီးယက် - H2 / H4 / L4 Transfer)',
      driveDetailMm: 'Part-time 4WD ဖြစ်ပြီး ကုန်းကြမ်း/ရွှံ့တွင် H4/L4 လှည့်သုံးနိုင်ပြီး ရိုးရိုးလမ်းတွင် H2 နောက်ဆွဲ မောင်းနှင်ပါသည်။',
      axleCode: 'B02A',
      axleExplanationMm: 'B = 8.0 လက်မ Ring Gear၊ 02 = 3.909 Gear Ratio၊ A = 2-Pinion Rear Differential'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-30 သို့မဟုတ် 5W-30 (DPF မီးခိုးဇကာပါပါက ACEA C2/C3 Low SAPS သာထည့်ရမည်)',
        capacityWithFilter: '7.5 Liters (Filter အပါ)',
        capacityWithoutFilter: '7.0 Liters (Filter မပါ)',
        interval: '5,000 km သို့မဟုတ် 6 လ',
        standard: 'API CK-4 / CJ-4 သို့မဟုတ် ACEA C2'
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS (World Standard)',
        cautionNote: '⚠️ သတိပေးချက် - ဆီတိုင်းတံ မပါရှိပါ။ Type T-IV သို့မဟုတ် CVT Fluid လုံးဝ မထည့်ရ! ATF WS စစ်စစ်သာ သုံးပါ။',
        drainRefillCapacity: '3.0 - 3.5 Liters',
        panDropFilterCapacity: '4.5 - 5.0 Liters',
        totalDryCapacity: '9.5 Liters',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 36°C မှ 46°C အတွင်း ရောက်မှ Overflow Level Plug ဖွင့်၍ ဆီအဆင့် ချိန်ညှိရမည်။'
      },
      differentialFluid: {
        frontDiff: 'Toyota Hypoid Gear Oil GL-5 75W-85 (1.5 Liters)',
        rearDiff: 'Toyota Hypoid Gear Oil GL-5 85W-90 သို့မဟုတ် 80W-90 (3.1 Liters)',
        transferCase: 'Toyota Genuine Transfer Gear Oil LF 75W (1.0 Liter)'
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '10.5 Liters'
      },
      brakeFluid: 'Toyota DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '80 Liters (ဒီဇယ် ပရီမီယံ/ရိုးရိုး)'
    },
    paints: [
      { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (၃ ထပ်ဆေး)', colorHex: '#F0EFEA', trimCode: 'LA20', trimDescriptionMm: 'အနက်ရောင် သားရေထိုင်ခုံ' },
      { code: '218', nameEn: 'Attitude Black Mica', nameMm: 'မိုက်ကာ အနက်ရောင်', colorHex: '#101114', trimCode: 'LA20', trimDescriptionMm: 'အနက်ရောင် သားရေ' },
      { code: '1D6', nameEn: 'Silver Metallic', nameMm: 'ငွေမီးခိုးရောင်', colorHex: '#BFC2C7', trimCode: 'LA20', trimDescriptionMm: 'အနက်ရောင် သားရေ' }
    ],
    codeBreakdown: [
      { codeSegment: 'GUN126R', meaning: 'Hilux Revo 4WD Right Hand Drive (2.8L)', meaningMm: 'ဟိုင်းလပ် ရီဗို ၄ ဘီးယက် ညာမောင်း ၂.၈ လီတာ မော်ဒယ်' },
      { codeSegment: '1GD', meaning: 'Toyota Global Diesel 2.8L Engine', meaningMm: '၂.၈ လီတာ 1GD ဒီဇယ်အင်ဂျင်' },
      { codeSegment: 'AC60F', meaning: 'Aisin 6-Speed Automatic 4WD Transmission', meaningMm: 'အိုက်ဆင် ၆ ချက်ထိုး ၄ ဘီးယက် အော်တိုဂီယာ' }
    ],
    workshopTips: [
      'Common Rail ဖိအားသည် 2,200 bar အထိ မြင့်မားသဖြင့် စက်နိုးထားစဉ် ဆီပိုက်နှင့် အင်ဂျက်တာလိုင်းများကို လုံးဝ ဖြုတ်ခွာစစ်ဆေးခြင်း မပြုရပါ။',
      'DPF (Diesel Particulate Filter) မီးလင်းပါက Scanner ဖြင့် Forced DPF Regeneration ပြုလုပ်ပေးရန် လိုအပ်ပါသည်။'
    ],
    plateLocationMm: 'ရှေ့လေကာမှန်အောက် ဘယ်ဘက် Firewall နံရံ သို့မဟုတ် ယာဉ်မောင်းတံခါးတိုင် B-Pillar'
  },

  // 20. Toyota Hilux Vigo 3.0D 4WD (1KD-FTV Common Rail)
  {
    id: 'toyota-hilux-vigo-1kd',
    brand: 'Toyota',
    countryOfOrigin: 'Thailand (ထိုင်း)',
    modelName: 'Hilux Vigo 3.0 D-4D 4WD',
    burmeseName: 'တိုယိုတာ ဟိုင်းလပ် ဗီဂို ၃.၀ ဒီဇယ် 4WD (ကွန်မွန်းရေးလ်)',
    chassisCode: 'KUN26R',
    fullModelCode: 'KUN26R-PRMSYT',
    generationYears: '2004 - 2015',
    yearIdentificationMethodMm: 'နိမ်းပလိပ်ပြား VIN ၁၀ လုံးမြောက် စာလုံး (ဥပမာ 8=2008, 9=2009, A=2010, B=2011, C=2012, D=2013, E=2014)',
    category: 'diesel_commonrail',
    categoryLabelMm: 'ကားလတ် ဒီဇယ် Pickup 4WD',
    fuelType: 'ဒီဇယ် Common Rail',
    nameplatePlate: {
      model: 'KUN26R-PRMSYT',
      engine: '1KD-FTV 2982cc',
      frame: 'MROFR22G901234567',
      colorTrim: '1D4 / FC11',
      transAxle: 'A343F - A02A',
      plant: 'T11',
      extraStamps: 'GVWR: 2810 kg'
    },
    engine: {
      code: '1KD-FTV',
      displacement: '2982 cc (3.0 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve Turbo Intercooler',
      valvesSystem: 'Common Rail D-4D (ဖိအား 1600 bar)',
      timingType: 'Timing Belt (ခါးပတ်ကြိုးစနစ်)',
      timingNote: '⚠️ အရေးကြီး - ကီလို ၁၅၀,၀၀၀ (၁ သိန်းခွဲ) တွင် ဒက်ရှ်ဘုတ် T-BELT မီးလင်းပါမည်။ တိုင်မင်ကြိုးနှင့် တန်ရှင်နာ ဘယ်ရင် အသစ်လဲပြီး T-BELT Reset ချရပါမည်။',
      horsepower: '163 PS (120 kW) @ 3,400 RPM',
      torque: '343 N·m @ 1,400 - 3,200 RPM',
      sparkPlugOrInjector: 'Denso Common Rail Injector (095000-8290 / 23670-30280)'
    },
    transmission: {
      transCode: 'A343F',
      transName: '4-Speed Super ECT Automatic with Dipstick',
      transType: 'Automatic (AT)',
      driveType: '4WD (၄ ဘီးယက် Part-time)',
      driveDetailMm: 'အင်ဂျင်ခန်းထဲတွင် ဂီယာဆီတိုင်းတံ (Dipstick) ပါရှိသော ၄ ချက်ထိုး အကြမ်းခံ အော်တိုဂီယာ ဖြစ်ပါသည်။',
      axleCode: 'A02A',
      axleExplanationMm: 'A = 7.5/8.0 လက်မ Ring Gear၊ 02 = 3.727 Gear Ratio'
    },
    fluids: {
      engineOil: {
        viscosity: '15W-40 သို့မဟုတ် 10W-30 / 5W-30 ဒီဇယ်အင်ဂျင်ဝိုင်',
        capacityWithFilter: '7.0 Liters (Filter အပါ)',
        capacityWithoutFilter: '6.5 Liters (Filter မပါ)',
        interval: '5,000 km သို့မဟုတ် 6 လ',
        standard: 'API CI-4 / CH-4'
      },
      transmissionFluid: {
        fluidType: 'Toyota ATF Type T-IV (သို့မဟုတ် နောက်ပိုင်းမော်ဒယ်များ ATF WS)',
        cautionNote: '⚠️ သတိပေးချက် - ဂီယာဆီတိုင်းတံတွင် Type T-IV ဟု ရေးထားပါက T-IV သာ သုံးပါ။ CVT ဆီ လုံးဝ မထည့်ရ!',
        drainRefillCapacity: '3.5 Liters',
        panDropFilterCapacity: '4.5 Liters',
        totalDryCapacity: '9.8 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ ပါရှိသည်။ ကားစက်နိုးထားပြီး P ထိုးကာ HOT မှတ်တွင် စစ်ဆေးပါ။'
      },
      differentialFluid: {
        frontDiff: 'Toyota Hypoid Gear Oil GL-5 75W-90 (1.4 Liters)',
        rearDiff: 'Toyota Hypoid Gear Oil GL-5 85W-90 (2.5 Liters - LSD ပါက LSD ဆီသီးသန့်)',
        transferCase: 'Toyota Transfer Oil 75W-90 (1.0 Liter)'
      },
      coolant: {
        type: 'Toyota Long Life Coolant (Red / Pink SLLC)',
        capacity: '9.8 Liters'
      },
      brakeFluid: 'Toyota DOT 3',
      fuelTankCapacity: '80 Liters (ဒီဇယ်)'
    },
    paints: [
      { code: '1D4', nameEn: 'Silver Metallic', nameMm: 'ငွေမီးခိုးရောင်', colorHex: '#C5C7CC', trimCode: 'FC11', trimDescriptionMm: 'မီးခိုးရောင် အထည်စ' },
      { code: '040', nameEn: 'Super White II', nameMm: 'အဖြူစွတ်စွတ်', colorHex: '#FFFFFF', trimCode: 'FC11', trimDescriptionMm: 'မီးခိုးရောင် အထည်စ' },
      { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက်ရောင်', colorHex: '#141416', trimCode: 'FC11', trimDescriptionMm: 'မီးခိုးရောင် အထည်စ' }
    ],
    codeBreakdown: [
      { codeSegment: 'KUN26R', meaning: 'Hilux Vigo 4WD 3.0L Right Hand Drive', meaningMm: 'ဗီဂို ၄ ဘီးယက် ညာမောင်း ၃.၀ လီတာ' },
      { codeSegment: '1KD', meaning: '3.0L Turbo Diesel Engine with Common Rail', meaningMm: '၃.၀ လီတာ 1KD ဒီဇယ် ကွန်မွန်းရေးလ် အင်ဂျင်' },
      { codeSegment: 'A343F', meaning: '4-Speed Automatic 4WD Gearbox', meaningMm: '၄ ချက်ထိုး အော်တို ဂီယာဘောက်စ်' }
    ],
    workshopTips: [
      'ဗီဂိုများတွင် မနက်စက်နှိုးရခက်ခြင်း၊ မီးခိုးဖြူထွက်ခြင်း ဖြစ်ပါက Injector Feedback Value (ကျောပမာဏ) ကို Scanner ဖြင့် စစ်ဆေးပါ။ +3.0 ထက် ကျော်ပါက အင်ဂျက်တာ အသစ်လဲရပါမည်။',
      'SCV (Suction Control Valve) ချေးတက်ပါက ကားစက်သေတတ်သဖြင့် Common rail SCV valve ကို ဆေးကြောပါ သို့မဟုတ် အသစ်လဲပါ။'
    ],
    plateLocationMm: 'အင်ဂျင်ခန်းအတွင်း Firewall နံရံ သို့မဟုတ် ယာဉ်မောင်းတံခါးတိုင် B-Pillar'
  },

  // 21. Hino Profia 700 12.9L (Heavy Duty Unit Injector EUI Truck)
  {
    id: 'hino-profia-700-e13c',
    brand: 'Hino',
    countryOfOrigin: 'Japan (ဂျပန်)',
    modelName: 'Hino Profia 700 12.9L (Heavy Duty 10-Wheeler / 12-Wheeler)',
    burmeseName: 'ဟီနို ပရိုဖီယာ ၇၀၀ ကုန်တင်ကားကြီး (၁၀ ဘီး / ၁၂ ဘီး / ကရိန်းကား)',
    chassisCode: 'FR1EXEG / FS1EK',
    fullModelCode: 'QKG-FR1EXEG',
    generationYears: '2003 - 2018 (ဂျပန် ကုန်တင်ကားကြီး)',
    yearIdentificationMethodMm: 'Chassis No (ဘောင်နံပါတ်) စီးရီးနှင့် အင်ဂျင်ကုဒ် မှတ်တမ်းအချက်အလက်အရ ခွဲခြားသည်',
    category: 'heavy_duty',
    categoryLabelMm: 'ကားကြီး ကုန်တင် ၁၀ ဘီး / ၁၂ ဘီး (Heavy Duty Truck)',
    fuelType: 'ဒီဇယ် Electronic Unit Injector (EUI)',
    nameplatePlate: {
      model: 'QKG-FR1EXEG',
      engine: 'E13C-TL 12913cc',
      frame: 'FR1EXE-10258',
      colorTrim: '058 / TR01',
      transAxle: 'Hino M009 / Ratio 4.100',
      plant: 'Hino Hino Plant (Tokyo)',
      extraStamps: 'GVW: 24,980 kg / Front Axle: 6,500 kg / Rear Tandem: 18,500 kg'
    },
    engine: {
      code: 'E13C-TL',
      displacement: '12,913 cc (12.9 Liters)',
      cylinders: 'Inline 6-cylinder, 24-valve OHC Turbo Intercooler',
      valvesSystem: 'Electronic Unit Injector (EUI) အီလက်ထရောနစ် ယူနစ် အင်ဂျက်တာ စနစ်',
      timingType: 'Gear Train (စက်သွားဂီယာစနစ် - သံကြိုး/ခါးပတ် မဟုတ်ပါ)',
      timingNote: 'အင်ဂျင်အတွင်း စက်သွားကြီးများဖြင့် တိုက်ရိုက်ချိတ်ဆက်ထားသဖြင့် တိုင်မင်ကြိုးပြတ်ကျိုးခြင်း မရှိပါ။',
      horsepower: '410 PS (302 kW) @ 1,800 RPM',
      torque: '1,618 N·m (165 kgf·m) @ 1,100 RPM',
      sparkPlugOrInjector: 'Electronic Unit Injector (EUI - Camshaft မှ တိုက်ရိုက်ဖိအားပေးပြီး Solenoid မှ လျှပ်စစ်ဖြင့် ဆီဖြန်းချိန် ထိန်းချုပ်သည်)'
    },
    transmission: {
      transCode: 'ProShift 7 / M009',
      transName: '7-Speed / 9-Speed Manual with Hi-Low Range Splitter',
      transType: 'Manual (MT)',
      driveType: '6x2 သို့မဟုတ် 6x4 (နောက်ဘီးစုံယက် Tandem Drive)',
      driveDetailMm: 'နောက်ဘီး ဝင်ရိုး ၂ ချောင်းစလုံးကို ဒစ်ဖရန်ရှယ် ၂ လုံး (Inter-axle differential) ဖြင့် ချိတ်ဆက် မောင်းနှင်ပါသည်။',
      axleCode: 'Ratio 4.100',
      axleExplanationMm: 'ကားကြီး ကုန်အပြည့်တင် ရုန်းကန်နိုင်ရန် အကြီးစား သံပေါင် ဒစ်ဖရန်ရှယ် အချိုး'
    },
    fluids: {
      engineOil: {
        viscosity: '15W-40 CI-4 / DH-1 သို့မဟုတ် 10W-30 Heavy Duty Diesel Engine Oil',
        capacityWithFilter: '33.0 Liters (ဆီစစ် ၂ လုံး အပါ)',
        capacityWithoutFilter: '30.0 Liters (ဆီစစ် မပါ)',
        interval: '10,000 km သို့မဟုတ် ၆ လ',
        standard: 'API CI-4 / JASO DH-1 (ဂျပန် ကားကြီး စံနှုန်း)'
      },
      transmissionFluid: {
        fluidType: 'Heavy Duty Gear Oil SAE 80W-90 GL-4',
        cautionNote: '⚠️ သတိပေးချက် - ကားကြီး မန်နျူရယ် ဂီယာတွင် GL-5 ဆီထည့်ပါက Synchronizer Ring ကြေးဝါများကို တိုက်စားစေနိုင်သဖြင့် GL-4 သာ ထည့်ပါ!',
        drainRefillCapacity: '11.0 - 13.0 Liters',
        panDropFilterCapacity: 'မလိုပါ',
        totalDryCapacity: '14.0 Liters',
        inspectionMethod: 'ဂီယာအိုး ဘေးဘက် Level Plug ဝက်အူဖွင့်၍ ဆီအဆင့် တိုင်းပါ။'
      },
      differentialFluid: {
        rearDiff: 'Hypoid Gear Oil 85W-140 GL-5 (ရှေ့ဒစ်: 9.0 L / နောက်ဒစ်: 8.5 L စုစုပေါင်း 17.5 L)'
      },
      coolant: {
        type: 'Hino Genuine Long Life Coolant (LLC Green/Blue)',
        capacity: '38.0 Liters'
      },
      brakeFluid: 'Full Air Brake (လေဘရိတ်စနစ် - ဆီမဟုတ်ဘဲ လေကွန်ပရက်ဆာနှင့် လေအိုးသုံးသည်)',
      fuelTankCapacity: '300 - 400 Liters (ဒီဇယ်)'
    },
    paints: [
      { code: '058', nameEn: 'White (Hino Commercial White)', nameMm: 'ဟီနို ကုန်တင်ကား အဖြူရောင်', colorHex: '#F2F2F0', trimCode: 'TR01', trimDescriptionMm: 'မီးခိုးနက်ရောင် ကုန်တင်ကား အတွင်းခန်း' },
      { code: '542', nameEn: 'Turquoise Blue Metallic', nameMm: 'စိမ်းပြာရောင် မက်တဲလစ်', colorHex: '#2E6F8E', trimCode: 'TR01', trimDescriptionMm: 'ကုန်တင်ကား စံနှုန်း' }
    ],
    codeBreakdown: [
      { codeSegment: 'FR1EXEG', meaning: 'Hino Profia 6x2 Heavy Truck with E13C Engine', meaningMm: 'ဟီနို ပရိုဖီယာ E13C အင်ဂျင်ပါ ၁၀ ဘီး ကုန်တင်ကားကြီး' },
      { codeSegment: 'E13C', meaning: '12.9 Liter 6-Cylinder Heavy Duty Diesel Engine', meaningMm: '၁၂.၉ လီတာ ဆလင်ဒါ ၆ လုံးထိုး အကြီးစား ဒီဇယ်အင်ဂျင်' },
      { codeSegment: 'EUI', meaning: 'Electronic Unit Injector Cam-Driven Fuel System', meaningMm: 'ကမ်ရှပ်တိုက်ရိုက် အီလက်ထရောနစ် ယူနစ် အင်ဂျက်တာ စနစ်' }
    ],
    workshopTips: [
      'Unit Injector (EUI) များသည် ကမ်ရှပ်မှ တိုက်ရိုက် မောင်းနှင်သဖြင့် Valve Clearance နှင့် Injector Pre-load/Height ချိန်ညှိမှု မှန်ကန်ရန် အထူးအရေးကြီးပါသည်။ မမှန်ပါက စက်သံဆူညံပြီး ဆီစားများပါမည်။',
      'Full Air Brake စနစ် ဖြစ်သောကြောင့် နေ့စဉ် မနက်တိုင်း လေအိုးအောက်ရှိ Drain Valve ကို ဆွဲဖွင့်၍ ရေငွေ့များ ဖောက်ထုတ်ပေးရပါမည်။'
    ],
    plateLocationMm: 'ယာဉ်မောင်းတံခါးဘောင် (B-Pillar တံခါးတိုင်) သို့မဟုတ် ခရီးသည်ဘက် ရှေ့ဘီးအထက် ကက်ဘင်နံရံ'
  },

  // 22. BMW 320i Sedan F30 (European Petrol Example)
  {
    id: 'bmw-320i-f30',
    brand: 'BMW',
    countryOfOrigin: 'Germany (ဂျာမနီ)',
    modelName: 'BMW 320i Sedan (F30 / LCI)',
    burmeseName: 'ဘီအမ်ဒဗလျူ ၃၂၀ အိုင် (ဥရောပ ဆီဒင်ကား)',
    chassisCode: 'F30',
    fullModelCode: 'WBA8A12080K123456',
    generationYears: '2012 - 2019',
    yearIdentificationMethodMm: 'နိမ်းပြား B-Pillar စတစ်ကာနှင့် လေကာမှန်အောက်ရှိ ၁၇ လုံးပါ VIN ၏ ၁၀ လုံးမြောက် စာလုံး (F=2015, G=2016, H=2017, J=2018)',
    category: 'european_american',
    categoryLabelMm: 'ဥရောပ ဇိမ်ခံ ဆီဒင် (European Luxury Sedan)',
    fuelType: 'ဓာတ်ဆီ (Petrol)',
    nameplatePlate: {
      model: '320i Sedan (F30)',
      engine: 'B48B20 1998cc',
      frame: 'WBA8A12080K123456',
      colorTrim: '300 / LCSW',
      transAxle: 'ZF 8HP50 / 8-Speed Auto',
      plant: 'BMW AG Munich (Germany)',
      extraStamps: '1- 1050 kg / 2- 1200 kg / Gross: 2050 kg'
    },
    engine: {
      code: 'B48B20',
      displacement: '1998 cc (2.0 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve TwinPower Turbo',
      valvesSystem: 'Valvetronic + Double-VANOS + Direct Injection (HPI)',
      timingType: 'Timing Chain (အင်ဂျင်နောက်ဘက် Flywheel ဘက်တွင် တပ်ဆင်ထားသည်)',
      timingNote: 'သံကြိုးစနစ် ဖြစ်သော်လည်း ဂျာမန်စံချိန်အရ အင်ဂျင်ဝိုင် BMW LL-01 / LL-04 စံနှုန်းကိုသာ တင်းကြပ်စွာ သုံးရပါမည်။',
      horsepower: '184 PS (135 kW) @ 5,000 RPM',
      torque: '290 N·m @ 1,350 - 4,250 RPM',
      sparkPlugOrInjector: 'NGK SILZKGR8B8S (High Precision Direct Injectors)'
    },
    transmission: {
      transCode: 'ZF 8HP50',
      transName: 'ZF 8-Speed Steptronic Automatic (RWD)',
      transType: 'Automatic (AT)',
      driveType: 'RWD (နောက်ဆွဲ ၂ ဘီးယက် - Rear Wheel Drive)',
      driveDetailMm: 'ဂျာမန် ZF 8-Speed အော်တိုဂီယာ ဖြစ်ပြီး အလေးချိန်မျှတစေရန် အင်ဂျင်ကို ရှေ့ဘက် အလယ်ပိုင်း ထားရှိပြီး နောက်ဘီးဖြင့် တွန်းကန် မောင်းနှင်ပါသည်။',
      axleCode: 'Ratio 2.813',
      axleExplanationMm: 'ZF 8HP အတွက် အဝေးပြေး ဆီစားသက်သာစေမည့် အချိုး'
    },
    fluids: {
      engineOil: {
        viscosity: '0W-30 သို့မဟုတ် 5W-30 (BMW Longlife-01 / LL-04 စံနှုန်းပြည့်မီရမည်)',
        capacityWithFilter: '5.25 Liters (Filter အပါ)',
        capacityWithoutFilter: '5.0 Liters (Filter မပါ)',
        interval: '7,000 - 8,000 km သို့မဟုတ် ၁ နှစ်',
        standard: 'BMW LL-01 / LL-04, API SP / ACEA C3'
      },
      transmissionFluid: {
        fluidType: 'ZF Lifeguard Fluid 8 (သို့မဟုတ် BMW ATF 3+)',
        cautionNote: '⚠️ သတိပေးချက် - အခြား ဂျပန် ATF သို့မဟုတ် Dexron လုံးဝ မထည့်ရ! ဂီယာဆီစစ် (Filter) သည် ပလတ်စတစ် အောက်ခွက် (Oil Pan) နှင့် တပါတည်း တွဲရက်ပါသဖြင့် ဆီလဲလျှင် ပန်ခွက်ပါ အသစ်လဲရပါမည်။',
        drainRefillCapacity: '4.5 - 5.0 Liters',
        panDropFilterCapacity: '5.5 Liters (ပန်ခွက်အသစ် လဲလျှင်)',
        totalDryCapacity: '8.5 Liters',
        inspectionMethod: 'ဆီအပူချိန် 30°C မှ 50°C အတွင်း ရောက်မှ Fill Plug ဖွင့်၍ စစ်ဆေးရပါမည်။'
      },
      differentialFluid: {
        rearDiff: 'BMW Hypoid Axle Oil G1 75W-85 (0.8 Liter)'
      },
      coolant: {
        type: 'BMW Coolant (Blue / Green Silicate-based)',
        capacity: '7.5 Liters'
      },
      brakeFluid: 'DOT 4 Low Viscosity (LV)',
      fuelTankCapacity: '60 Liters (95 Ron အထက်သာ သုံးရမည်)'
    },
    paints: [
      { code: '300', nameEn: 'Alpine White III', nameMm: 'အယ်လ်ပိုင်း အဖြူရောင်', colorHex: '#F6F6F4', trimCode: 'LCSW', trimDescriptionMm: 'Dakota အနက်ရောင် သားရေ' },
      { code: '475', nameEn: 'Black Sapphire Metallic', nameMm: 'နက်ပြာရောင် မက်တဲလစ်', colorHex: '#121316', trimCode: 'LCSW', trimDescriptionMm: 'Dakota သားရေ' },
      { code: 'B39', nameEn: 'Mineral Grey Metallic', nameMm: 'သတ္တု မီးခိုးရောင်', colorHex: '#525458', trimCode: 'LCSW', trimDescriptionMm: 'Dakota သားရေ' }
    ],
    codeBreakdown: [
      { codeSegment: 'WBA', meaning: 'West Germany BMW AG Passenger Car', meaningMm: 'ဂျာမနီနိုင်ငံထုတ် BMW ခရီးသည်တင်ယာဉ်' },
      { codeSegment: 'B48B20', meaning: '2.0L 4-Cylinder Turbocharged Engine', meaningMm: '၂.၀ လီတာ ဆလင်ဒါ ၄ လုံးထိုး တာဘို အင်ဂျင်' },
      { codeSegment: 'ZF 8HP', meaning: 'ZF 8-Speed Longitudinal Transmission', meaningMm: 'ZF ၈ ချက်ထိုး အလျားလိုက် အော်တိုဂီယာ' }
    ],
    workshopTips: [
      'ဥရောပကားဖြစ်၍ နိမ်းပလိပ်ပြားကို ဂျပန်ကားလို အင်ဂျင်ခန်းထဲတွင် မထားဘဲ ယာဉ်မောင်းတံခါးတိုင် (B-Pillar) တွင် စတစ်ကာဖြင့် ကပ်ထားပါသည်။',
      'ZF 8HP ဂီယာဆီ လဲလှယ်ရာတွင် ပလတ်စတစ် အောက်ခွက် (Oil Pan) ကို ဝက်အူ အသစ်များဖြင့် Torque 10 N·m ညီညာစွာ စနစ်တကျ ပြန်လည်ကျပ်ရပါမည်။'
    ],
    plateLocationMm: 'ယာဉ်မောင်းတံခါးတိုင် (B-Pillar) စတစ်ကာ သို့မဟုတ် ရှေ့လေကာမှန် အောက်ခြေဘယ်ဘက်'
  }
];
