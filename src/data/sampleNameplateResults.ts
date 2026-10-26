export interface DecodedPlateResult {
  maker: string;
  modelName: string;
  burmeseName: string;
  countryOfOrigin: string;
  manufactureYear: string;
  generationEra: string;
  categoryMm: string;
  fuelSystemMm: string;
  engine: {
    code: string;
    displacement: string;
    cylinders?: string;
    valvesSystem?: string;
    timingType?: string;
    timingNote?: string;
    horsepower?: string;
    torque?: string;
    sparkPlugOrInjector?: string;
    valveClearanceMm?: string;
  };
  transmission: {
    transCode: string;
    transName?: string;
    transType: string;
    driveType: string;
    driveDetailMm?: string;
    axleCode?: string;
    axleExplanationMm?: string;
    solenoidNoteMm?: string;
  };
  fluids: {
    engineOil: {
      viscosity: string;
      capacityWithFilter: string;
      capacityWithoutFilter?: string;
      interval?: string;
      standard?: string;
    };
    transmissionFluid: {
      fluidType: string;
      cautionNote: string;
      drainRefillCapacity?: string;
      panDropFilterCapacity?: string;
      totalDryCapacity?: string;
      inspectionMethod?: string;
    };
    differentialFluid?: {
      frontDiff?: string;
      rearDiff?: string;
      transferCase?: string;
    };
    coolant?: {
      type: string;
      capacity: string;
    };
    brakeFluid?: string;
    fuelTankCapacity?: string;
  };
  paintAndTrim?: {
    code: string;
    nameEn: string;
    nameMm: string;
    hex?: string;
    trimCode: string;
    trimDescriptionMm: string;
  };
  plateBreakdown?: Array<{
    stampName: string;
    stampValue: string;
    meaningMm: string;
  }>;
  mechanicProTips?: string[];
  plateLocationGuide?: string;
}

export const INSTANT_SAMPLE_RESULTS: Record<string, DecodedPlateResult> = {
  'sample-fielder': {
    maker: 'Toyota',
    modelName: 'Corolla Fielder 1.5G (DBA-NZE141G-AWXEK)',
    burmeseName: 'တိုယိုတာ ဖီးလ်ဒါ ၁.၅ (၁၀ မျိုးဆက် ကွန်ပက် ဝဂ္ဂန်)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၀၈ ခုနှစ် (JDM Frame Serial 904xxxx / DBA အိတ်ဇောစံနှုန်းအရ)',
    generationEra: 'E140 အလယ်ပိုင်း မော်ဒယ် (Facelift)',
    categoryMm: 'ကားသေး ကွန်ပက် (Compact Station Wagon)',
    fuelSystemMm: 'ဓာတ်ဆီ 1.5L DOHC 16-Valve VVT-i (Electronic Fuel Injection)',
    engine: {
      code: '1NZ-FE',
      displacement: '1,496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve',
      valvesSystem: 'VVT-i (Variable Valve Timing with intelligence)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'ပုံမှန်အင်ဂျင်ဝိုင် လဲလှယ်ပေးပါက ကီလို ၃ သိန်းကျော်အထိ သံကြိုးလဲရန်မလိုပါ',
      horsepower: '110 PS @ 6,000 RPM',
      torque: '141 N·m @ 4,400 RPM',
      sparkPlugOrInjector: 'DENSO K16R-U11 / NGK BKR5EYA-11 (ပလပ် Gap: 1.1 mm)',
      valveClearanceMm: 'အဝင် (Intake): 0.15 - 0.25 mm ၊ အထွက် (Exhaust): 0.25 - 0.35 mm (အအေးချိန်)',
    },
    transmission: {
      transCode: 'K310',
      transName: 'Super CVT-i (Continuously Variable Transmission)',
      transType: 'CVT အော်တိုဂီယာ',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် စနစ်ဖြစ်ပြီး အင်ဂျင်ကို အလျားလိုက် (Transverse) တပ်ဆင်ထားသည်',
      axleCode: '-02A',
      axleExplanationMm: '7.5 လက်မ Ring Gear နှင့် 2-Pinion Differential အချိုး',
      solenoidNoteMm: 'CVT Belt Pressure Solenoid ကို ကွန်ပျူတာဖြင့် တိုက်ရိုက် ထိန်းချုပ်ထားသည်',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 / 5W-20 (စက်ရုံအကြံပြု) သို့မဟုတ် 5W-30',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် ၂၀၀၉ အောက် TC)',
        cautionNote: 'သတိပြုရန် - CVT Fluid FE နှင့် TC မမှားစေရ။ ATF WS လုံးဝ (လုံးဝ) မထည့်ရ! CVT ကြိုးပြား ချော်ပျက်စီးစေပါသည်!',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.2 - 4.5 Liters (ဆီစစ်ပန်ခွက်ဖြုတ်လဲလှယ်မှု)',
        totalDryCapacity: '6.5 Liters (အတွင်းပိုင်း အခြောက်ဝင်ဆံ့မှု)',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 35°C - 45°C တွင်သာ Overflow Level Plug မှ ပိုလျှံဆီ စစ်ဆေးဖောက်ထုတ်ပါ',
      },
      differentialFluid: {
        frontDiff: 'ဂီယာအိုးနှင့် တဆက်တည်းဖြစ်၍ K310 CVT Fluid သာ သုံးရသည်',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC - Pink ရောင်)',
        capacity: '5.5 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '50 Liters (ဓာတ်ဆီ 92 / 95 Ron)',
    },
    paintAndTrim: {
      code: '070',
      nameEn: 'White Pearl Crystal Shine',
      nameMm: 'သဘာဝ ပုလဲဖြူရောင် (၃ လွှာသုတ်ဆေး)',
      hex: '#F7F6F2',
      trimCode: 'FA20',
      trimDescriptionMm: 'အနက်ရောင် Fabric အတွင်းခန်းနှင့် ပလပ်စတစ်ကူရှင်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-NZE141G-AWXEK',
        meaningMm: 'DBA (အိတ်ဇောစံနှုန်း) - NZE141 (၁.၅ အင်ဂျင် ကိုယ်ထည်) - G (ဝဂ္ဂန်) - A (Corolla) - W (Wagon) - X (G Grade) - E (CVT) - K (DOHC EFI)',
      },
      {
        stampName: 'ENGINE',
        stampValue: '1NZ-FE 1496cc',
        meaningMm: '1NZ အင်ဂျင်မိသားစု၊ 1.5L DOHC 16-Valve EFI ဓာတ်ဆီအင်ဂျင်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'NZE141-9041234',
        meaningMm: 'ဂျပန်စက်ရုံထုတ် ကိုယ်ထည်ဘောင် အမှတ်စဉ် (၂၀၀၈ မော်ဒယ်)',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '070 / FA20',
        meaningMm: '070 = White Pearl ပုလဲဖြူဆေး၊ FA20 = အနက်ရောင် ကူရှင်',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'K310 -02A',
        meaningMm: 'K310 = Super CVT-i အော်တိုဂီယာ၊ -02A = 7.5" Differential အချိုး',
      },
      {
        stampName: 'PLANT',
        stampValue: 'A51 (Kanto Auto Works)',
        meaningMm: 'ဂျပန်နိုင်ငံ Kanto စက်ရုံထုတ်လုပ်မှု',
      },
    ],
    mechanicProTips: [
      'CVT ဂီယာဆီ လဲလှယ်သည့်အခါ ဆီအပူချိန် ၃၅°C - ၄၅°C တွင်သာ အင်ဂျင်နှိုးလျက် Overflow Plug မှ စစ်ဆေးပါ',
      'အင်ဂျင်ဝိုင် 0W-20 သို့မဟုတ် 5W-30 အပျစ်အကျဲကိုသာ သုံးပါ၊ 20W-50 အလွန်ပျစ်သောဆီများ ထည့်ပါက VVT-i Cam Gear ဆီလိုင်းပိတ်ပြီး အင်ဂျင်သံကြမ်းစေသည်',
      'မီးလောင်ခန်း သန့်ရှင်းမှုနှင့် သံကြိုးတိုင်မင် အသက်ရှည်စေရန် ပလပ်ခေါင်းများကို Gap 1.1 mm အတိုင်းသာ သုံးပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း ရှေ့လေကာမှန်အောက် Firewall ကာရံနံရံ အလယ်တည့်တည့်တွင် အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-revo': {
    maker: 'Toyota',
    modelName: 'Hilux Revo 2.8D 4WD (GUN126R-DTTHXT)',
    burmeseName: 'တိုယိုတာ ဟိုင်းလပ် ရီဗို ၂.၈ ဒီဇယ် ၄ ဘီးယက်',
    countryOfOrigin: 'ထိုင်း (TMT - Toyota Motor Thailand)',
    manufactureYear: '၂၀၁၈ ခုနှစ် (VIN အက္ခရာ ၁၀ လုံးမြောက် "J" အရ ၂၀၁၈ ခုနှစ်ထုတ် အစစ်ဖြစ်ပါသည်)',
    generationEra: 'Hilux Generation 8 (AN120 / AN130 Series)',
    categoryMm: 'အလတ်စား ပစ်ကပ် ၄ ဘီးယက် (Medium Double Cab 4WD Pickup)',
    fuelSystemMm: 'ဒီဇယ် Common Rail တိုက်ရိုက်ထိုးသွင်းစနစ် (2,200 bar Piezo / Solenoid Injector)',
    engine: {
      code: '1GD-FTV',
      displacement: '2,755 cc (2.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve Intercooled Turbo',
      valvesSystem: '16-Valve with Variable Nozzle Turbo (VN Turbo)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: '1GD အင်ဂျင်သည် အကြမ်းခံ သံကြိုးစနစ်ဖြစ်ပြီး ဆီအဆိပ်မသင့်စေရန် ဒီဇယ်ဆီစစ် ပုံမှန်လဲပေးရပါမည်',
      horsepower: '177 PS (130 kW) @ 3,400 RPM',
      torque: '450 N·m @ 1,600 - 2,400 RPM',
      sparkPlugOrInjector: 'Denso Common Rail Injectors (အသစ်လဲပါက 30-digit QR Code ECU တွဲဖက်မှတ်ပုံတင်ရပါမည်)',
      valveClearanceMm: 'အဝင်: 0.20 - 0.30 mm ၊ အထွက်: 0.35 - 0.45 mm',
    },
    transmission: {
      transCode: 'AC60F',
      transName: '6-Speed Super ECT Automatic (Sequential Shift)',
      transType: 'Torque Converter ၆ ချက်ထိုး အော်တိုဂီယာ',
      driveType: 'Part-Time 4WD (၄ ဘီးယက် အနှေး/အမြန် လျှပ်စစ်ခလုတ်စနစ်)',
      driveDetailMm: 'အနောက်ဘီးယက် အဓိကဖြစ်ပြီး လိုအပ်ပါက 4H / 4L သို့ ခလုတ်ဖြင့် ပြောင်းလဲနိုင်သည်',
      axleCode: 'B02A',
      axleExplanationMm: '8.0 လက်မ Differential Ring Gear နှင့် 3.909 Final Gear Ratio',
      solenoidNoteMm: 'Linear Solenoid ၆ လုံးဖြင့် ဂီယာပြောင်းအချိုးကို ချောမွေ့အောင် ထိန်းညှိထားသည်',
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 (အကြံပြု) သို့မဟုတ် 10W-30 / 15W-40 CK-4/CJ-4',
        capacityWithFilter: '7.5 Liters',
        capacityWithoutFilter: '7.0 Liters',
        interval: '5,000 km (ဒီဇယ်ဆီစစ်ပါ ၁၀,၀၀၀ km တစ်ကြိမ် လဲလှယ်ပါ)',
        standard: 'ACEA C2 (DPF ပါလျှင်) သို့မဟုတ် API CK-4 / CI-4',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS (World Standard)',
        cautionNote: 'အရေးကြီးသတိပေးချက် - ATF Type IV သို့မဟုတ် CVT ဆီ လုံးဝ မထည့်ရ! ATF WS စံနှုန်းစစ်စစ်သာ သုံးရမည်!',
        drainRefillCapacity: '3.0 - 3.5 Liters',
        panDropFilterCapacity: '4.5 - 5.0 Liters (ဆီစစ်ဇကာနှင့် အောက်ခွက် ဖြုတ်လဲလျှင်)',
        totalDryCapacity: '9.5 Liters (အသစ်စက်စက် အခြောက်ဆံ့မှု)',
        inspectionMethod: 'ATF အပူချိန် 35°C - 45°C တွင် အင်ဂျင်နှိုးလျက် Overflow Check Plug မှ စစ်ဆေးပါ',
      },
      differentialFluid: {
        frontDiff: 'Toyota Genuine Differential Gear Oil LT 75W-85 (1.5 Liters)',
        rearDiff: 'Toyota Hypoid Gear Oil LSD / GL-5 85W-90 (3.2 Liters)',
        transferCase: 'Toyota Genuine Transfer Gear Oil LF 75W (1.0 Liter)',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC - Pink)',
        capacity: '9.1 Liters',
      },
      brakeFluid: 'DOT 4 သို့မဟုတ် DOT 5.1',
      fuelTankCapacity: '80 Liters (ဒီဇယ်စစ်စစ်)',
    },
    paintAndTrim: {
      code: '070',
      nameEn: 'White Pearl Crystal Shine',
      nameMm: 'ပုလဲဖြူရောင် မူရင်းဆေးသုတ်',
      hex: '#F5F4EE',
      trimCode: 'LA20',
      trimDescriptionMm: 'အနက်ရောင် သားရေထိုင်ခုံနှင့် မီးခိုးရောင် တံခါးကူရှင်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'GUN126R-DTTHXT',
        meaningMm: 'GUN126 (2.8L 4WD) - R (ညာမောင်း) - D (Double Cab ၄ တံခါး) - T (6-Speed Auto) - T (High Grade) - H (DOHC VN Turbo) - X (Revo) - T (Thailand)',
      },
      {
        stampName: 'ENGINE',
        stampValue: '1GD-FTV 2755cc',
        meaningMm: '2.8 လီတာ ဒီဇယ် တာဘို ကွန်မွန်းရွိုင် အင်ဂျင်',
      },
      {
        stampName: 'VIN / FRAME',
        stampValue: 'MROHA3CD6J0123456',
        meaningMm: 'MR0 (ထိုင်းနိုင်ငံထုတ်) - ၁၀ လုံးမြောက် J အက္ခရာသည် ၂၀၁၈ ခုနှစ်ထုတ်လုပ်မှု ဖြစ်ကြောင်း သက်သေပြသည်',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'AC60F B02A',
        meaningMm: 'AC60F = ၆ ချက်ထိုး ၄ ဘီးယက် အော်တိုဂီယာ၊ B02A = ၈ လက်မ အနောက်ဒစ်ဖရန်ရှယ် အချိုး',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '070 / LA20',
        meaningMm: '070 = White Pearl မူရင်းဆေးရောင်၊ LA20 = Leather Interior',
      },
    ],
    mechanicProTips: [
      'ဒီဇယ်ဆီစစ် (Fuel Filter) သတိပေးမီးလင်းပါက မပေါ့ဆဘဲ ချက်ချင်းလဲပါ၊ ကွန်မွန်းရွိုင် နော်ဇယ် ၄ လုံး ဆီဖိအား ၂,၂၀၀ bar ကြောင့် ပျက်စီးလွယ်ပါသည်',
      'အင်ဂျင်ဝိုင်လဲတိုင်း ဒီဇယ်ဆီစစ်အတွင်း ရေစစ်ခွက် (Sedimenter) ကို ရေဖောက်ပေးပါ',
      'AC60F ဂီယာဆီ လဲလှယ်သည့်အခါ OBD-II Scanner သို့မဟုတ် Short Pin ဖြင့် ATF Temperature Mode သွင်း၍ စစ်ဆေးပါ',
    ],
    plateLocationGuide: 'ယာဉ်မောင်းဘက် (သို့မဟုတ် ဘေးခရီးသည်ဘက်) B-Pillar တံခါးတိုင်အောက်ခြေတွင် အနက်ရောင် စတစ်ကာပြား (သို့) အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-hino': {
    maker: 'Hino (Toyota Group)',
    modelName: 'Hino Profia 700 12.9L (QKG-FR1EXEG)',
    burmeseName: 'ဟီနို ပရိုဖီယာ ၇၀၀ (၁၀ ဘီး ကုန်တင်ကားကြီး)',
    countryOfOrigin: 'ဂျပန် (Hino Motors Japan)',
    manufactureYear: '၂၀၁၄ ခုနှစ် (QKG ဂျပန် ပတ်ဝန်းကျင် အိတ်ဇော ထိန်းချုပ်စံနှုန်း ၂၀၁၄ အရ)',
    generationEra: 'Profia Heavy Duty Gen 2 (E13C Heavy)',
    categoryMm: 'ကားကြီး ကုန်တင်ယာဉ် (Heavy Duty 10-Wheel Truck)',
    fuelSystemMm: 'Unit Injector System (EUI - Electronic Unit Injector ကမ်ရှပ်တိုက်ရိုက် ဖိအားမြင့်စနစ်)',
    engine: {
      code: 'E13C-TL',
      displacement: '12,913 cc (12.9 Liters)',
      cylinders: 'Inline 6-cylinder, 24-valve OHC Intercooled Turbo',
      valvesSystem: 'Overhead Camshaft (OHC) with Jake Compression Engine Brake',
      timingType: 'Timing Gear Train (သံမဏိ ဂီယာတိုက်ရိုက်စနစ် - ကြိုးမလို)',
      timingNote: 'သံမဏိ ဂီယာသွားများဖြင့် တိုက်ရိုက်ချိတ်ဆက်ထား၍ သံကြိုးလဲစရာ လုံးဝမလိုပါ',
      horsepower: '410 PS (302 kW) @ 1,800 RPM',
      torque: '1,618 N·m @ 1,100 RPM',
      sparkPlugOrInjector: 'Electronic Unit Injector (EUI) ၆ လုံး - ကမ်ရှပ်ဖြင့် စက်ပိုင်းဆိုင်ရာ ဖိအားထုတ်ပြီး လျှပ်စစ်ဖြင့် ဆီဖြန်းချိန်ညှိသည်',
      valveClearanceMm: 'အဝင် (Intake): 0.40 mm ၊ အထွက် (Exhaust): 0.85 mm ၊ Jake Brake: 0.65 mm',
    },
    transmission: {
      transCode: 'M009',
      transName: 'Hino 7-Speed / 9-Speed Manual Splitter Transmission',
      transType: 'Manual Transmission (အမြန်/အနှေး Splitter ပါ မန်နျူရယ်ဂီယာ)',
      driveType: '6x2 / 6x4 (နောက်ဘီး ၂ တန်းယက် ကုန်တင်ကားကြီးစနစ်)',
      driveDetailMm: 'နောက်ဘီး တွဲလုံး ၂ တန်းရှိပြီး ရုန်းအားမြင့်မားသည့် Hub Reduction Differential ပါဝင်သည်',
      axleCode: 'SH19 / THD',
      axleExplanationMm: 'Heavy Duty Full Floating Axle 13-Ton Capacity',
      solenoidNoteMm: 'လေဖိအားသုံး Air-Assisted Splitter Solenoid Valves',
    },
    fluids: {
      engineOil: {
        viscosity: '15W-40 (Heavy Duty Diesel Engine Oil DH-2 / CK-4)',
        capacityWithFilter: '38.0 Liters',
        capacityWithoutFilter: '34.0 Liters',
        interval: '15,000 km (အကြီးစား ဆီစစ်ကြီး ၂ လုံးပါ)',
        standard: 'JASO DH-2 / API CK-4 / CI-4 Heavy Duty Diesel',
      },
      transmissionFluid: {
        fluidType: 'GL-4 / GL-5 Heavy Duty Manual Gear Oil SAE 80W-90',
        cautionNote: 'အော်တိုဆီ ATF လုံးဝ မထည့်ရ! Heavy Duty Gear Oil SAE 80W-90 သာ ထည့်ရမည်!',
        drainRefillCapacity: '13.5 Liters',
        panDropFilterCapacity: '14.0 Liters',
        totalDryCapacity: '15.0 Liters',
        inspectionMethod: 'ဂီယာအိုးဘေး Level Plug အပေါက်မှ ဆီလျှံထွက်လာသည်အထိ ဖြည့်စွက်ပါ',
      },
      differentialFluid: {
        rearDiff: 'GL-5 Hypoid Heavy Axle Gear Oil 85W-140 (18.0 Liters)',
      },
      coolant: {
        type: 'Heavy Duty LLC Coolant (Green or Blue 50/50 Premix)',
        capacity: '48.0 Liters',
      },
      brakeFluid: 'Air Brake System (လေဘရိတ်စနစ်ဖြစ်ပြီး လေခြောက်စစ်ကလပ်ခွက် Air Dryer Cartridge ပါဝင်သည်)',
      fuelTankCapacity: '300 - 400 Liters (ဒီဇယ်)',
    },
    paintAndTrim: {
      code: '058',
      nameEn: 'Pure White (Commercial)',
      nameMm: 'စက်ရုံထုတ် ကုန်တင်ကားဖြူရောင်',
      hex: '#FFFFFF',
      trimCode: 'TR01',
      trimDescriptionMm: 'အကြမ်းခံ Vinyl ကူရှင်နှင့် လေအိတ်ထိုင်ခုံ (Air Suspension Seat)',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'QKG-FR1EXEG',
        meaningMm: 'QKG (၂၀၁၄ ဂျပန်အိတ်ဇောစံနှုန်း) - FR (10-Wheel 6x2) - 1E (E13C အင်ဂျင်) - XEG (Heavy Duty Air Suspension Chassis)',
      },
      {
        stampName: 'ENGINE',
        stampValue: 'E13C-TL 12913cc',
        meaningMm: '၁၃ လီတာ Unit Injector ၄၁၀ မြင်းကောင်ရေ ဒီဇယ်အင်ဂျင်ကြီး',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'FR1EXE-10258',
        meaningMm: 'ဟီနို ကားကြီး ကိုယ်ထည်ဘောင်အမှတ်စဉ်',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '058 / TR01',
        meaningMm: '058 = White အဖြူရောင်၊ TR01 = Heavy Truck Interior',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'M009 / SH19',
        meaningMm: 'M009 = Hi-Low Splitter မန်နျူရယ်ဂီယာ၊ SH19 = Heavy Duty Axle',
      },
      {
        stampName: 'GVW',
        stampValue: '24,980 kg',
        meaningMm: 'ယာဉ်အလေးချိန်နှင့် ကုန်တင်ဆောင်နိုင်မှု စုစုပေါင်း ၂၅ တန် စံနှုန်း',
      },
    ],
    mechanicProTips: [
      'Unit Injector (EUI) အသစ်လဲပါက ကမ်ရှပ်အမြင့် ချိန်ညှိကိရိယာဖြင့် Pre-stroke အမြင့် တိကျစွာ ချိန်ညှိပေးရပါမည်',
      'လေဘရိတ်စနစ်အတွက် Air Dryer Filter ကို မိုးရာသီမတိုင်မီ ပုံမှန်လဲလှယ်ပေးပါ',
      'အင်ဂျင်ဝိုင် ၃၈ လီတာအထိ ဝင်ဆံ့သဖြင့် ဆီစစ်ကြီး ၂ လုံး (Main Filter နှင့် Sub Filter) ကို ပြိုင်တူလဲလှယ်ပေးပါ',
    ],
    plateLocationGuide: 'ယာဉ်မောင်းဘက် တံခါးဖွင့်သည့်အခါ ခြေနင်းခုံဘေးဘောင် သို့မဟုတ် ခေါင်းခန်းမတင်မီ ရှေ့ဘမ်ပါဘေးတွင် ကြေးပြားဖြင့် သံမှိုစွဲထားပါသည်',
  },

  'sample-bmw': {
    maker: 'BMW',
    modelName: 'BMW 320i Sedan (F30 LCI - B48B20)',
    burmeseName: 'ဘီအမ်ဒဗလျူ ၃၂၀ အိုင် (ဂျာမန် ဥရောပ ဆီဒင်ကား)',
    countryOfOrigin: 'ဂျာမနီ (Munich / Regensburg, Germany)',
    manufactureYear: '၂၀၁၆ ခုနှစ် (VIN အက္ခရာ ၁၀ လုံးမြောက် "G" အရ ၂၀၁၆ ခုနှစ်ထုတ် မော်ဒယ်ဖြစ်ပါသည်)',
    generationEra: 'BMW 3 Series F30 LCI (Life Cycle Impulse Facelift)',
    categoryMm: 'ဥရောပ အလတ်စား ဆီဒင် (Compact Executive European Sedan)',
    fuelSystemMm: 'Direct Injection (HPI) High Pressure Petrol (၂၀၀ bar တိုက်ရိုက်ဓာတ်ဆီထိုးစနစ်)',
    engine: {
      code: 'B48B20',
      displacement: '1,998 cc (2.0 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve TwinPower Turbo',
      valvesSystem: 'Valvetronic (အဆို့ရှင် အဖွင့်အပိတ် အပြည့်အဝ ထိန်းချုပ်စနစ်) + Double VANOS',
      timingType: 'Timing Chain (နောက်ဘက် တပ်ဆင်ထားသော သံကြိုးစနစ်)',
      timingNote: 'B48 အင်ဂျင်သည် သံကြိုးကို အင်ဂျင်အနောက်ဘက် (ဂီယာဘက်) တွင် တပ်ဆင်ထား၍ သတ်မှတ် အင်ဂျင်ဝိုင် အပြည့်အဝ သုံးပေးရန် အလွန်အရေးကြီးပါသည်',
      horsepower: '184 PS (135 kW) @ 5,000 - 6,500 RPM',
      torque: '290 N·m @ 1,350 - 4,250 RPM',
      sparkPlugOrInjector: 'Bosch ZR5TPP330 / Champion (ပလပ် Gap: 0.75 mm တင်းကြပ်စွာ ချိန်ညှိရန်)',
      valveClearanceMm: 'Valvetronic စနစ်ဖြစ်၍ ကွန်ပျူတာ မော်တာဖြင့် အလိုအလျောက် ချိန်ညှိပါသည်',
    },
    transmission: {
      transCode: 'ZF 8HP50',
      transName: 'ZF 8-Speed Steptronic Automatic Transmission',
      transType: '၈ ချက်ထိုး Torque Converter အော်တိုဂီယာ',
      driveType: 'RWD (အနောက်ဘီးယက် ဂျာမန်ဆီဒင်စနစ်)',
      driveDetailMm: 'အနောက်ဘီးယက် စနစ်ဖြစ်ပြီး အလေးချိန် 50:50 မျှခြေ ထိန်းသိမ်းထားသည်',
      axleCode: '168LW',
      axleExplanationMm: 'BMW Lightweight Final Drive Differential',
      solenoidNoteMm: 'Mechatronic Valve Body အတွင်း TCU ကွန်ပျူတာ ထည့်သွင်းထားသည်',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-30 (BMW Longlife-01 / Longlife-04 / Longlife-17 FE+)',
        capacityWithFilter: '5.25 Liters',
        capacityWithoutFilter: '5.0 Liters',
        interval: '8,000 - 10,000 km (iDrive မျက်နှာပြင်မှ Oil Service Reset လုပ်ပါ)',
        standard: 'BMW Longlife-01 / Longlife-04 Full Synthetic',
      },
      transmissionFluid: {
        fluidType: 'ZF Lifeguard Fluid 8 (သို့မဟုတ် BMW ATF 3+)',
        cautionNote: 'အလွန်အရေးကြီးသည် - ဂျပန် ATF ဆီများ လုံးဝ (လုံးဝ) မထည့်ရ! ZF 8-Speed သီးသန့် Lifeguard 8 ဆီသာ သုံးရမည်!',
        drainRefillCapacity: '4.5 - 5.0 Liters',
        panDropFilterCapacity: '5.5 Liters (ဆီစစ်သည် ပလပ်စတစ် အောက်ခွက်နှင့် တစ်ဆက်တည်းဖြစ်၍ ပန်ခွက်ပါ အသစ်လဲရပါသည်)',
        totalDryCapacity: '8.5 Liters',
        inspectionMethod: 'ဆီအပူချိန် 30°C - 50°C တွင်သာ ကွန်ပျူတာ ISTA ချိတ်ဆက်၍ Fill Plug မှ စစ်ဆေးဖြည့်သွင်းပါ',
      },
      differentialFluid: {
        rearDiff: 'BMW Hypoid Axle Oil G1 / SAF-XO 75W-90 (0.8 Liter)',
      },
      coolant: {
        type: 'BMW Coolant (LC-87 Blue / HT-12 Green Nitrite-Free)',
        capacity: '7.2 Liters (တာဘို အအေးခံ စနစ်ခွဲပါ)',
      },
      brakeFluid: 'DOT 4 Low Viscosity (ESP/DSC စနစ်အတွက်)',
      fuelTankCapacity: '60 Liters (ဓာတ်ဆီ 95 Ron အနည်းဆုံး)',
    },
    paintAndTrim: {
      code: '300',
      nameEn: 'Alpine White III',
      nameMm: 'အယ်လ်ပိုင်း အဖြူရောင် (BMW စံရောင်)',
      hex: '#F8F9FA',
      trimCode: 'LCSW',
      trimDescriptionMm: 'Dakota Black Leather (အနက်ရောင် သားရေစစ်စစ်)',
    },
    plateBreakdown: [
      {
        stampName: 'VIN / CHASSIS',
        stampValue: 'WBA8A12080K123456',
        meaningMm: 'WBA (BMW ဂျာမနီ) - 8A12 (320i Sedan) - 0 (စစ်ဆေးရေးကုဒ်) - ၁၀ လုံးမြောက် G (၂၀၁၆ ခုနှစ်) - K (Munich Plant)',
      },
      {
        stampName: 'ENGINE',
        stampValue: 'B48B20 1998cc',
        meaningMm: 'B48 မိသားစု၊ ၂.၀ လီတာ တာဘို ဓာတ်ဆီ အင်ဂျင်အသစ်',
      },
      {
        stampName: 'TRANSMISSION',
        stampValue: 'ZF 8HP50',
        meaningMm: 'ZF ကုမ္ပဏီထုတ် ၈ ချက်ထိုး အော်တိုဂီယာဘောက်စ်',
      },
      {
        stampName: 'PAINT / COLOR',
        stampValue: '300 / LCSW',
        meaningMm: '300 = Alpine White III အဖြူ၊ LCSW = Dakota Black သားရေ',
      },
      {
        stampName: 'WEIGHT SPECS',
        stampValue: 'GVW 2,025 kg',
        meaningMm: 'ယာဉ်အလေးချိန် စံနှုန်းသတ်မှတ်ချက်',
      },
    ],
    mechanicProTips: [
      'ZF 8-Speed ဂီယာဆီ လဲလှယ်သည့်အခါ ဆီစစ်တစ်ခုတည်း ဖြုတ်လဲ၍မရဘဲ အောက်ခံ Oil Pan ပလပ်စတစ်ခွက်တစ်ခုလုံး အသစ်လဲလှယ်ရပါသည်',
      'Valvetronic Eccentric Shaft ဆင်ဆာနှင့် Cam Magnet များကို ဆီစိမ့်မှု မကြာခဏ စစ်ဆေးပေးပါ',
      'အအေးခံစနစ်တွင် ပလပ်စတစ် ရေပိုက်ခေါင်းများ (Coolant Vent Hose) ကျွတ်ဆတ်တတ်သဖြင့် ဖြုတ်တပ်သည့်အခါ ဂရုစိုက်ပါ',
    ],
    plateLocationGuide: 'ယာဉ်မောင်းဘက် B-Pillar တံခါးတိုင်အောက်ခြေတွင် အနက်ရောင် ဗီနိုင်းစတစ်ကာပြားဖြင့် ကပ်ထားပါသည် (ဥရောပကားများတွင် အင်ဂျင်ခန်းထဲ၌ မရှိဘဲ တံခါးတိုင်တွင် ရှိတတ်ပါသည်)',
  },

  'sample-wish-blue': {
    maker: 'Toyota',
    modelName: 'Toyota Wish 1.8X 2nd Gen (DBA-ZGE20G-HPXNP)',
    burmeseName: 'တိုယိုတာ ဝစ်ရှ် ၁.၈ (ဒုတိယမျိုးဆက် - ပုံထဲက ကားပြာ)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၁၀ မှ ၂၀၁၂ ခုနှစ် (ZGE20 Frame နံပါတ် 0147xxx အရ ဒုတိယမျိုးဆက် မီးခွက်ပြောင်းကာလ အစောပိုင်း)',
    generationEra: 'ZGE20 Series (၂၀၀၉ မှ ၂၀၁၇ ခုနှစ်အထိ ထုတ်လုပ်သော မျိုးဆက်)',
    categoryMm: 'ကားလတ် ၇ ယောက်စီး မိသားစု MPV (Compact 7-Seater MPV)',
    fuelSystemMm: 'ဓာတ်ဆီ 1.8L Valvematic DOHC 16-Valve (Dual VVT-i + Valvematic လျှပ်စစ်ဗားမော်တာစနစ်)',
    engine: {
      code: '2ZR-FAE',
      displacement: '1,797 cc (1.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve Dual VVT-i with Valvematic',
      valvesSystem: 'Valvematic စနစ် (အဆို့ရှင် အတိမ်အနက်ကို လျှပ်စစ်မော်တာဖြင့် တိုက်ရိုက်ထိန်းချုပ်သောကြောင့် ဆီစားသက်သာပြီး ရုန်းအားကောင်းပါသည်)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'Valvematic စနစ်သည် သန့်ရှင်းသော အင်ဂျင်ဝိုင်ဖိအားဖြင့် အလုပ်လုပ်သဖြင့် 0W-20 သို့မဟုတ် 5W-20 အပျစ်အကျဲကိုသာ မဖြစ်မနေ သုံးပေးရပါမည်',
      horsepower: '144 PS (106 kW) @ 6,400 RPM',
      torque: '176 N·m @ 4,400 RPM',
      sparkPlugOrInjector: 'DENSO SC20HR11 (Iridium Long Reach, Gap: 1.1 mm - ပလပ်ခေါင်းအရစ်ရှည် သီးသန့်)',
      valveClearanceMm: 'Hydraulic Lash Adjusters (ဆီဖိအားဖြင့် အလိုအလျောက် ချိန်ညှိသဖြင့် ဗားချိန်ရန် မလိုပါ)',
    },
    transmission: {
      transCode: 'K311',
      transName: 'Super CVT-i 7-Speed Sport Sequential Shiftmatic',
      transType: 'Continuously Variable Transmission (CVT အော်တို ၇ ချက်ထိုး ပုံစံ)',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် စနစ်ဖြစ်ပြီး အင်ဂျင်ကို အလျားလိုက် Transverse တပ်ဆင်ထားသည်',
      axleCode: '-02A',
      axleExplanationMm: '7.5 လက်မ Differential Ring Gear နှင့် 5.474:1 Final Drive Ratio',
      solenoidNoteMm: 'Lock-up clutch control နှင့် Primary/Secondary pulley pressure solenoids',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 (စက်ရုံအကြံပြု) သို့မဟုတ် 5W-20 / 5W-30',
        capacityWithFilter: '4.2 Liters',
        capacityWithoutFilter: '3.9 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A (Full Synthetic)',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် CVT Fluid TC)',
        cautionNote: 'အလွန်အရေးကြီးသတိပေးချက် - K311 ဂီယာတွင် Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC) ကိုသာ သုံးရပါမည်။ ATF WS သို့မဟုတ် ATF Type IV လုံးဝ (လုံးဝ) မထည့်ရ! ဆီမှားထည့်မိပါက CVT သံကြိုးပြား ချော်ပျက်စီးပြီး ဂီယာအိုးတစ်လုံးလုံး လဲလှယ်ရပါမည်!',
        drainRefillCapacity: '3.5 - 3.8 Liters (အောက်ဆီဖောက်လဲလှယ်မှု)',
        panDropFilterCapacity: '4.2 - 4.5 Liters (ဆီစစ်ဇကာနှင့် အောက်ခံခွက် ဖြုတ်လဲလျှင်)',
        totalDryCapacity: '6.5 Liters (အတွင်းပိုင်း အခြောက်ဆံ့မှု)',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 35°C - 45°C တွင် အင်ဂျင်နှိုးလျက် Overflow Check Plug မှ ပိုလျှံဆီ စစ်ဆေးဖောက်ထုတ်ပါ',
      },
      differentialFluid: {
        frontDiff: 'ဂီယာအိုးနှင့် တဆက်တည်းဖြစ်၍ K311 CVT Fluid သာ သုံးရသည်',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC - Pink ရောင်)',
        capacity: '6.5 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '60 Liters (ဓာတ်ဆီ 92 / 95 Ron)',
    },
    paintAndTrim: {
      code: '8V9',
      nameEn: 'Satin Blue Mica Metallic',
      nameMm: 'စက်တင် အပြာရောင် မိုက်ကာ မက်ထလစ် (ပုံထဲရှိ မူရင်းကားပြာရောင်)',
      hex: '#2d4d76',
      trimCode: 'FA42',
      trimDescriptionMm: 'မီးခိုးစင်း အနက်ရောင် Fabric ကူရှင်နှင့် ၇ ယောက်စီး ထိုင်ခုံခေါက်စနစ်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-ZGE20G-HPXNP',
        meaningMm: 'DBA (အိတ်ဇောစံနှုန်း) - ZGE20 (1.8L FWD ကိုယ်ထည်) - G (အိမ်စီး Wagon) - H (Wish) - P (CVT) - X (X Grade) - N (5-Door) - P (1.8L Valvematic)',
      },
      {
        stampName: 'ENGINE',
        stampValue: '2ZR-FAE 1797 mL',
        meaningMm: '2ZR အင်ဂျင်၊ 1.8 Liters (1797 cc) DOHC 16-Valve Dual VVT-i with Valvematic လျှပ်စစ်ဗားမော်တာစနစ်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'ZGE20-0147194',
        meaningMm: 'ဂျပန် တိုယိုတာ မူရင်းကိုယ်ထည်နံပါတ် (0147xxx စီးရီးအရ ၂၀၁၀-၂၀၁၂ မော်ဒယ်ဖြစ်သည်)',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '8V9 / FA42',
        meaningMm: '8V9 = Satin Blue Mica Metallic (အပြာရောင် သုတ်ဆေး) ၊ FA42 = Dark Grey Fabric ကူရှင်',
      },
      {
        stampName: 'PLANT',
        stampValue: 'A54',
        meaningMm: 'A54 = ဂျပန်နိုင်ငံ Takaoka စက်ရုံထုတ် (Toyota Motor Corporation Takaoka Plant)',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'K311 -02A',
        meaningMm: 'K311 = Super CVT-i အော်တိုဂီယာဘောက်စ် ၊ -02A = 7.5 လက်မ 2-Pinion Differential အချိုး',
      },
      {
        stampName: 'OPTION',
        stampValue: '178',
        meaningMm: 'အအေးပိုင်းဒေသ စံနှုန်း သို့မဟုတ် ဂျပန်စက်ရုံထုတ် သီးသန့် အပိုပစ္စည်း Option Package',
      },
    ],
    mechanicProTips: [
      'Valvematic Controller Controller Actuator မော်တာသည် ဆီဂျီးတက်ပါက Check Engine မီးလင်းပြီး ကားလေးသွားတတ်သည်၊ ထို့ကြောင့် အင်ဂျင်ဝိုင် 0W-20 သို့မဟုတ် 5W-20 ကို ၅,၀၀၀ km မကျော်မီ ပုံမှန်လဲပေးပါ',
      'K311 CVT ဂီယာသည် ဆီအရည်အသွေး အလွန်နူးညံ့ပါသည်၊ CVT FE ဆီကိုသာ တိကျစွာ သုံးပါ၊ ATF WS လုံးဝ မထည့်ရပါ',
      'ပလပ်ခေါင်းများ လဲလှယ်သည့်အခါ သာမန်အရစ်တိုပလပ် မထည့်မိစေရန် သတိပြုပါ၊ DENSO SC20HR11 (အရစ်ရှည် Long Reach) ကိုသာ သုံးပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း ရှေ့လေကာမှန်အောက် Firewall ကာရံနံရံ (ယာဉ်မောင်းထိုင်ခုံရှေ့တည့်တည့်) တွင် အပြာရောင်ဆေးပေါ်၌ အနက်ရောင်စာလုံး ရိုက်နှိပ်ထားသော အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-wish-sport': {
    maker: 'Toyota',
    modelName: 'Toyota Wish 1.8S Sport (DBA-ZGE20W-HPXSP)',
    burmeseName: 'တိုယိုတာ ဝစ်ရှ် ၁.၈ အက်စ် (စပို့ဂရိတ် မော်ဒယ်)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၀၉ မှ ၂၀၁၂ ခုနှစ် (ZGE20 Frame နံပါတ် 0032xxx အရ 2nd Gen အစောပိုင်း မော်ဒယ်)',
    generationEra: 'ZGE20W Sport Aerodynamics Bodykit Series',
    categoryMm: 'ကားလတ် ၇ ယောက်စီး စပို့မိသားစု MPV (Sporty 7-Seater MPV)',
    fuelSystemMm: 'ဓာတ်ဆီ 1.8L Valvematic DOHC 16-Valve (Dual VVT-i + Valvematic)',
    engine: {
      code: '2ZR-FAE',
      displacement: '1,797 cc (1.8 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve Dual VVT-i with Valvematic',
      valvesSystem: 'Valvematic စနစ် (Sport Paddle Shift နှင့် တွဲဖက်ထားသည်)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးတိုင်မင် အသက်ရှည်စေရန် အင်ဂျင်ဝိုင်ကို သတ်မှတ်စံနှုန်းအတိုင်းသာ ထည့်ပါ',
      horsepower: '144 PS (106 kW) @ 6,400 RPM',
      torque: '176 N·m @ 4,400 RPM',
      sparkPlugOrInjector: 'DENSO SC20HR11 (Iridium Long Reach, Gap: 1.1 mm)',
    },
    transmission: {
      transCode: 'K311',
      transName: 'Super CVT-i with 7-Speed Paddle Shift',
      transType: 'CVT အော်တို ၇ ချက်ထိုး ပုံစံ',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် စနစ်ဖြစ်ပြီး စတီယာရင်တွင် Paddle Shifter ပါဝင်သည်',
      axleCode: '-02A',
      axleExplanationMm: '7.5 လက်မ Differential Ring Gear',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30',
        capacityWithFilter: '4.2 Liters',
        capacityWithoutFilter: '3.9 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
        cautionNote: 'သတိပြုရန် - K311 ဂီယာအတွက် CVT Fluid FE စစ်စစ်သာ သုံးပါ၊ ATF WS လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.5 - 3.8 Liters',
        panDropFilterCapacity: '4.2 - 4.5 Liters',
        totalDryCapacity: '6.5 Liters',
        inspectionMethod: '35°C - 45°C တွင် Overflow Check Plug မှ စစ်ဆေးပါ',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '6.5 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '60 Liters (ဓာတ်ဆီ 92 / 95 Ron)',
    },
    paintAndTrim: {
      code: '8S6',
      nameEn: 'Dark Blue Mica Metallic',
      nameMm: 'အပြာရင့်ရောင် မိုက်ကာ မက်ထလစ် (Nautical Blue)',
      hex: '#1e293b',
      trimCode: 'FB12',
      trimDescriptionMm: 'စပို့ အနက်ရောင် ကူရှင်နှင့် အနက်ရောင် အလွိုင်းခွေစနစ်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-ZGE20W-HPXSP',
        meaningMm: 'DBA - ZGE20W (စပို့ကိုယ်ထည် ကျယ်) - H (Wish) - P (CVT) - X - S (1.8S Sport Grade) - P',
      },
      {
        stampName: 'ENGINE',
        stampValue: '2ZR-FAE 1797 mL',
        meaningMm: '2ZR-FAE 1.8 လီတာ Valvematic ဓာတ်ဆီအင်ဂျင်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'ZGE20-0032285',
        meaningMm: 'ကိုယ်ထည်ဘောင် အမှတ်စဉ် (၂၀၀၉-၂၀၁၀ အစောပိုင်းထုတ် မော်ဒယ်)',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '8S6 / FB12',
        meaningMm: '8S6 = Dark Blue Mica Metallic အပြာရင့် ၊ FB12 = Sport Black Interior',
      },
      {
        stampName: 'PLANT',
        stampValue: 'A54',
        meaningMm: 'Takaoka Plant, Toyota Motor Corp Japan',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'K311 -02A',
        meaningMm: 'K311 Super CVT-i ဂီယာဘောက်စ် ၊ -02A Differential',
      },
      {
        stampName: 'OPTION',
        stampValue: '651',
        meaningMm: 'Factory Aerodynamics Bumper & Side Mudguards Option Package',
      },
    ],
    mechanicProTips: [
      'ZGE20W စပို့ဂရိတ်တွင် ဘီးအရွယ်အစား 16 လက်မ / 17 လက်မ ပါဝင်သဖြင့် တာယာဖိအား 32 - 34 psi မျှခြေထားပါ',
      'K311 ဂီယာဆီ လဲလှယ်သည့်အခါ CVT Fluid FE ကိုသာ တိကျစွာ သုံးပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း Firewall နံရံ အလယ်တွင် စက်ရုံထုတ် အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-alphard': {
    maker: 'Toyota',
    modelName: 'Toyota Alphard 2.4 240S (DBA-ANH20W-PFXSK)',
    burmeseName: 'တိုယိုတာ အယ်လ်ဖတ် ၂.၄ (ANH20 ဒုတိယမျိုးဆက် မော်ဒယ်)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၁၀ ခုနှစ် (ANH20 Frame 80xxxxx / DBA စံနှုန်းအရ ၂၀၁၀ မော်ဒယ်)',
    generationEra: 'Alphard / Vellfire 2nd Generation (2008 - 2015)',
    categoryMm: 'အဆင့်မြင့် ဇိမ်ခံ ၇/၈ ယောက်စီး ဗန်ကားကြီး (Luxury Full-Size MPV)',
    fuelSystemMm: 'ဓာတ်ဆီ 2.4L DOHC 16-Valve VVT-i (Electronic Fuel Injection)',
    engine: {
      code: '2AZ-FE',
      displacement: '2,362 cc (2.4 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with VVT-i',
      valvesSystem: 'VVT-i (Intake Camshaft Variable Timing)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အင်ဂျင်ဝိုင် ပုံမှန် ၅,၀၀၀ km မကျော်မီ လဲပေးရန် လိုအပ်ပါသည်',
      horsepower: '170 PS (125 kW) @ 6,000 RPM',
      torque: '224 N·m @ 4,000 RPM',
      sparkPlugOrInjector: 'DENSO SK20R11 / NGK IFR6A11 (Iridium Long Life, Gap: 1.1 mm)',
      valveClearanceMm: 'အဝင်: 0.19 - 0.29 mm ၊ အထွက်: 0.38 - 0.48 mm (အအေးချိန်)',
    },
    transmission: {
      transCode: 'K112',
      transName: 'Super CVT-i with 7-Speed Sports Sequential Shift',
      transType: 'CVT အော်တို ၇ ချက်ထိုး ပုံစံ',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် အလျားလိုက် Transverse တပ်ဆင်မှု',
      axleCode: '-01A',
      axleExplanationMm: 'Heavy Duty FWD Differential Ring Gear',
      solenoidNoteMm: 'CVT High Pressure Line Solenoid & Lock-up Solenoid',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30 (API SP Full Synthetic)',
        capacityWithFilter: '4.3 Liters',
        capacityWithoutFilter: '4.1 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် ၂၀၁၁ အောက် CVT Fluid TC)',
        cautionNote: 'အထူးသတိပြုရန် - K112 CVT ဂီယာအတွက် Toyota CVT Fluid FE (သို့မဟုတ် TC) စစ်စစ်သာ သုံးပါ၊ ATF WS လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.8 - 4.2 Liters',
        panDropFilterCapacity: '4.8 - 5.2 Liters (ဆီစစ်ဇကာနှင့် အောက်ခံခွက် ဖြုတ်လဲလျှင်)',
        totalDryCapacity: '8.7 Liters (အတွင်းပိုင်း အခြောက်ဆံ့မှု)',
        inspectionMethod: 'ဂီယာဆီအပူချိန် 35°C - 45°C တွင် အင်ဂျင်နှိုးလျက် Overflow Check Plug မှ စစ်ဆေးဖောက်ထုတ်ပါ',
      },
      differentialFluid: {
        frontDiff: 'ဂီယာအိုးနှင့် တဆက်တည်းဖြစ်၍ K112 CVT Fluid သာ သုံးရသည်',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '8.6 Liters (Dual AC အနောက်လေအေးပေးစနစ်ပါ)',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '65 Liters (ဓာတ်ဆီ 92 / 95 Ron)',
    },
    paintAndTrim: {
      code: '070',
      nameEn: 'White Pearl Crystal Shine',
      nameMm: 'သဘာဝ ပုလဲဖြူရောင် (၃ လွှာသုတ်ဆေး)',
      hex: '#F7F6F2',
      trimCode: 'FG01',
      trimDescriptionMm: 'Beige ကတ္တီပါသား ဇိမ်ခံခေါက်ထိုင်ခုံ ကူရှင်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-ANH20W-PFXSK',
        meaningMm: 'ANH20W (2.4L Alphard FWD) - P (Alphard) - F (CVT) - X (240S Grade) - S (Sport Aerodynamics) - K (DOHC EFI)',
      },
      {
        stampName: 'ENGINE',
        stampValue: '2AZ-FE 2362cc',
        meaningMm: '2.4 Liters DOHC 16-Valve VVT-i ဓာတ်ဆီအင်ဂျင်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'ANH20-8012345',
        meaningMm: 'ကိုယ်ထည်ဘောင် အမှတ်စဉ် (၂၀၁၀ မော်ဒယ် စီးရီး)',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '070 / FG01',
        meaningMm: '070 = White Pearl ပုလဲဖြူဆေး ၊ FG01 = Beige ဇိမ်ခံအတွင်းခန်း',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'K112 -01A',
        meaningMm: 'K112 = Super CVT-i ဂီယာဘောက်စ် ၊ -01A = Differential အချိုး',
      },
    ],
    mechanicProTips: [
      '2AZ-FE အင်ဂျင်များတွင် အင်ဂျင်ဝိုင်စားတတ်သည့် ပြဿနာ (Oil Consumption) ကြောင့် အင်ဂျင်ဝိုင်တိုင်းတံကို ၂ ပတ်တစ်ကြိမ် မပျက်မကွက် စစ်ဆေးပါ',
      'ကားကြီးပြီး လေးလံသဖြင့် K112 CVT ဂီယာဆီကို ၂၀,၀၀၀ km တစ်ကြိမ် ပုံမှန်လဲလှယ်ပေးပါက ဂီယာအသက်ရှည်ပါသည်',
      'အနောက် Aircon ရေတိုင်ကီပိုက်လိုင်းများ သံချေးတက် ရေယိုစိမ့်မှု မရှိစေရန် စစ်ဆေးပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း ရှေ့လေကာမှန်အောက် Firewall ကာရံနံရံ အလယ်တွင် အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-crown': {
    maker: 'Toyota',
    modelName: 'Toyota Crown Athlete 2.5 (DBA-GRS200-AETXH)',
    burmeseName: 'တိုယိုတာ ခရောင်း အက်သလိ ၂.၅ (GRS200 အားကစားဆီဒင်)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၀၉ မှ ၂၀၁၂ ခုနှစ် (GRS200 Athlete စီးရီး)',
    generationEra: 'Toyota Crown 13th Generation (S200 Series)',
    categoryMm: 'ဇိမ်ခံ အားကစား ဆီဒင်ကြီး (Full-Size Luxury Sports Sedan)',
    fuelSystemMm: 'ဓာတ်ဆီ 2.5L V6 Direct Injection (D-4 တိုက်ရိုက်ဓာတ်ဆီထိုးစနစ်)',
    engine: {
      code: '4GR-FSE',
      displacement: '2,499 cc (2.5 Liters)',
      cylinders: 'V-type 6-cylinder, 24-valve Dual VVT-i D-4',
      valvesSystem: 'Dual VVT-i (Intake & Exhaust Camshaft Variable Timing)',
      timingType: 'Timing Chain (V6 သံကြိုး ၃ ချောင်းစနစ်)',
      timingNote: 'သံကြိုးတိုင်မင် အသက်ရှည်စေရန် အင်ဂျင်ဝိုင် ပုံမှန်လဲပါ',
      horsepower: '215 PS (158 kW) @ 6,400 RPM',
      torque: '260 N·m @ 3,800 RPM',
      sparkPlugOrInjector: 'DENSO FK20HBR11 (High Ignitability Iridium Spark Plug)',
    },
    transmission: {
      transCode: 'A960E',
      transName: '6-Speed Super ECT Automatic (Sequential Shiftmatic)',
      transType: 'Torque Converter ၆ ချက်ထိုး အော်တိုဂီယာ',
      driveType: 'RWD (အနောက်ဘီးယက် ဇိမ်ခံစနစ်)',
      driveDetailMm: 'အင်ဂျင်ကို အလျားလိုက် (Longitudinal) တပ်ဆင်ထားပြီး အနောက်ဘီးယက်ဖြစ်သည်',
      axleCode: 'B01A',
      axleExplanationMm: '8.0 လက်မ Differential Ring Gear နှင့် 3.909 Final Gear Ratio',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30 (API SP)',
        capacityWithFilter: '6.3 Liters',
        capacityWithoutFilter: '5.9 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF WS (World Standard)',
        cautionNote: 'အရေးကြီးသတိပေးချက် - A960E ဂီယာသည် ဆီတိုင်းတံ မပါသော စနစ်ဖြစ်၍ Toyota ATF WS စစ်စစ်သာ သုံးရမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.0 - 3.5 Liters',
        panDropFilterCapacity: '4.0 - 4.5 Liters',
        totalDryCapacity: '7.9 Liters',
        inspectionMethod: 'ဆီအပူချိန် 35°C - 45°C တွင် အင်ဂျင်နှိုးလျက် Overflow Plug မှ စစ်ဆေးပါ',
      },
      differentialFluid: {
        rearDiff: 'Toyota Hypoid Gear Oil GL-5 SAE 85W-90 (1.35 Liters)',
      },
      coolant: {
        type: 'Toyota Super Long Life Coolant (SLLC Pink)',
        capacity: '9.2 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '71 Liters (ဓာတ်ဆီ 95 Ron အထူးအကြံပြု)',
    },
    paintAndTrim: {
      code: '202',
      nameEn: 'Black (Solid Black)',
      nameMm: 'အနက်ရောင် ပြောင် (Crown မူရင်း အနက်ရောင်)',
      hex: '#0A0A0A',
      trimCode: 'LB20',
      trimDescriptionMm: 'Athlete အနက်ရောင် စပို့သားရေ ကူရှင်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-GRS200-AETXH',
        meaningMm: 'GRS200 (Crown 2.5L RWD) - A (Crown) - E (6-Speed Auto) - T (Athlete) - X (High Grade) - H (D-4 EFI)',
      },
      {
        stampName: 'ENGINE',
        stampValue: '4GR-FSE 2499cc',
        meaningMm: '2.5L V6 24-Valve Dual VVT-i Direct Injection (D-4)',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'GRS200-0012345',
        meaningMm: 'ဂျပန်ထုတ် ခရောင်း ကိုယ်ထည်ဘောင်နံပါတ်',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '202 / LB20',
        meaningMm: '202 = Solid Black အနက်ဆေး ၊ LB20 = Athlete Black Leather',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'A960E B01A',
        meaningMm: 'A960E = 6-Speed Automatic ဂီယာ ၊ B01A = 8" Rear Differential',
      },
    ],
    mechanicProTips: [
      '4GR-FSE D-4 တိုက်ရိုက်ထိုးစနစ်ဖြစ်၍ Intake Valve ပေါ်တွင် ကာဗွန်ဂျီးတက်တတ်သဖြင့် 95 Ron ဓာတ်ဆီနှင့် Injector Cleaner သုံးပေးပါ',
      'A960E ဂီယာဆီ လဲလှယ်သည့်အခါ OBD2 စကန်နာဖြင့် ATF Temperature Mode သွင်း၍ အဆင့်ချိန်ပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း Firewall နံရံ သို့မဟုတ် ယာဉ်မောင်းဘက် B-Pillar တံခါးတိုင်အောက်တွင် ကပ်ထားပါသည်',
  },

  'sample-probox': {
    maker: 'Toyota',
    modelName: 'Toyota Probox Van 1.5 DX (DBE-NCP51V-EXPDK)',
    burmeseName: 'တိုယိုတာ ပရိုဘောက် ၁.၅ ဗန် (NCP51 လုပ်ငန်းသုံး ကား)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၁၂ ခုနှစ် (DBE အိတ်ဇောစံနှုန်းအရ လုပ်ငန်းသုံး ဗန်)',
    generationEra: 'Toyota Probox 1st Gen (XP50 Series)',
    categoryMm: 'လုပ်ငန်းသုံး ကွန်ပက် ဗန်/တက္ကစီ (Commercial Compact Van)',
    fuelSystemMm: 'ဓာတ်ဆီ 1.5L DOHC 16-Valve VVT-i (Electronic Fuel Injection)',
    engine: {
      code: '1NZ-FE',
      displacement: '1,496 cc (1.5 Liters)',
      cylinders: 'Inline 4-cylinder, DOHC 16-valve with VVT-i',
      valvesSystem: 'VVT-i (Variable Valve Timing with intelligence)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'အကြမ်းခံဆုံး သံကြိုးအင်ဂျင်ဖြစ်ပြီး ဆီပုံမှန်လဲလျှင် ကီလို ၅ သိန်းကျော် အသုံးခံပါသည်',
      horsepower: '109 PS @ 6,000 RPM',
      torque: '141 N·m @ 4,200 RPM',
      sparkPlugOrInjector: 'DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)',
    },
    transmission: {
      transCode: 'U340E',
      transName: '4-Speed Super ECT Automatic',
      transType: 'Torque Converter ၄ ချက်ထိုး အော်တိုဂီယာ',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် ရိုးရိုး ၄ ချက်ထိုး အကြမ်းခံ အော်တိုဂီယာစနစ်',
      axleCode: '-05A',
      axleExplanationMm: '7.5 လက်မ Differential Ring Gear',
    },
    fluids: {
      engineOil: {
        viscosity: '5W-30 သို့မဟုတ် 10W-30 / 10W-40 (API SP / SN)',
        capacityWithFilter: '3.7 Liters',
        capacityWithoutFilter: '3.5 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / SN',
      },
      transmissionFluid: {
        fluidType: 'Toyota Genuine ATF Type T-IV (သို့မဟုတ် ATF WS)',
        cautionNote: 'အထူးသတိပြုရန် - NCP51 တွင် U340E ၄ ချက်ထိုးဂီယာဖြစ်သဖြင့် ATF Type T-IV သုံးရသည်! K410 CVT ဆီ လုံးဝ မထည့်ရပါ!',
        drainRefillCapacity: '3.0 - 3.3 Liters',
        panDropFilterCapacity: '3.8 - 4.0 Liters',
        totalDryCapacity: '6.4 Liters',
        inspectionMethod: 'ဂီယာဆီတိုင်းတံ (Dipstick) ပါရှိသဖြင့် အင်ဂျင်နှိုးလျက် HOT အမှတ်တွင် စစ်ဆေးပါ',
      },
      coolant: {
        type: 'Toyota Long Life Coolant (LLC Red/Pink)',
        capacity: '5.2 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '50 Liters (ဓာတ်ဆီ 92 Ron)',
    },
    paintAndTrim: {
      code: '058',
      nameEn: 'White (Commercial White)',
      nameMm: 'စက်ရုံထုတ် အဖြူရောင်ပြောင်',
      hex: '#FFFFFF',
      trimCode: 'FB10',
      trimDescriptionMm: 'လုပ်ငန်းသုံး Vinyl/Fabric ကူရှင်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBE-NCP51V-EXPDK',
        meaningMm: 'DBE = လုပ်ငန်းသုံး အိတ်ဇောစံနှုန်း ၊ NCP51V = 1.5L 2WD Van ၊ EXPDK = 4-Speed Auto DX Grade',
      },
      {
        stampName: 'ENGINE',
        stampValue: '1NZ-FE 1496cc',
        meaningMm: '1.5L DOHC 16-Valve VVT-i အကြမ်းခံ ဓာတ်ဆီအင်ဂျင်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'NCP51-0123456',
        meaningMm: 'ပရိုဘောက် ကိုယ်ထည်ဘောင် အမှတ်စဉ်',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: '058 / FB10',
        meaningMm: '058 = White အဖြူရောင် ၊ FB10 = DX Grade အတွင်းခန်း',
      },
      {
        stampName: 'TRANS / AXLE',
        stampValue: 'U340E -05A',
        meaningMm: 'U340E = 4-Speed Automatic ဂီယာ ၊ -05A = FWD Differential',
      },
    ],
    mechanicProTips: [
      'NCP51 (U340E ၄ ချက်ထိုးအော်တို) နှင့် NCP160 (K410 CVT ဂီယာ) မမှားစေရန် အထူးဂရုစိုက်ပါ၊ NCP51 သည် ATF Type T-IV သုံးပြီး NCP160 သည် CVT Fluid FE သုံးရပါသည်',
      '1NZ-FE သည် ကီလိုများလာပါက Throttle Body နှင့် Idle Air Control Valve (IACV) ဂျီးပိတ်တတ်သဖြင့် ကာဗွန်ဆေးပေးပါ',
    ],
    plateLocationGuide: 'အင်ဂျင်ခန်းအတွင်း ရှေ့လေကာမှန်အောက် Firewall ကာရံနံရံ အလယ်တွင် အလူမီနီယံပြားဖြင့် ကပ်ထားပါသည်',
  },

  'sample-honda-fit': {
    maker: 'Honda',
    modelName: 'Honda Fit 1.3G (DBA-GE6 - L13A)',
    burmeseName: 'ဟွန်ဒါ ဖစ် ၁.၃ (GE6 ဒုတိယမျိုးဆက် ဟက်ခ်ျဘက်ခ်)',
    countryOfOrigin: 'ဂျပန် (JDM - Japan Domestic Market)',
    manufactureYear: '၂၀၁၀ ခုနှစ် (GE6 Frame စီးရီးအရ)',
    generationEra: 'Honda Fit / Jazz 2nd Generation (GE Series)',
    categoryMm: 'ကားသေး ကွန်ပက် ဟက်ခ်ျဘက်ခ် (Subcompact Hatchback)',
    fuelSystemMm: 'ဓာတ်ဆီ 1.3L i-VTEC SOHC 16-Valve (PGM-FI Electronic Fuel Injection)',
    engine: {
      code: 'L13A',
      displacement: '1,339 cc (1.3 Liters)',
      cylinders: 'Inline 4-cylinder, SOHC 16-valve i-VTEC',
      valvesSystem: 'i-VTEC (Intake Valve Timing & Lift Control)',
      timingType: 'Timing Chain (သံကြိုးစနစ်)',
      timingNote: 'သံကြိုးစနစ်ဖြစ်ပြီး အင်ဂျင်ဝိုင် 0W-20 သို့မဟုတ် 5W-30 အပျစ်အကျဲ သုံးပါ',
      horsepower: '100 PS (73 kW) @ 6,000 RPM',
      torque: '127 N·m @ 4,800 RPM',
      sparkPlugOrInjector: 'NGK DIFR6A13G / DENSO DK20PR-D13 (Iridium, Gap: 1.3 mm)',
      valveClearanceMm: 'အဝင်: 0.15 - 0.19 mm ၊ အထွက်: 0.26 - 0.30 mm (အအေးချိန်)',
    },
    transmission: {
      transCode: 'CVT',
      transName: 'Honda Multimatic CVT Transmission',
      transType: 'CVT အော်တိုဂီယာ',
      driveType: 'FWD (ရှေ့ဘီးယက် ၂ ဘီး)',
      driveDetailMm: 'ရှေ့ဘီးယက် ကွန်ပက် စနစ်',
      axleCode: 'Std FWD',
      axleExplanationMm: 'Honda Integrated Differential',
    },
    fluids: {
      engineOil: {
        viscosity: '0W-20 သို့မဟုတ် 5W-20 / 5W-30 (API SP)',
        capacityWithFilter: '3.6 Liters',
        capacityWithoutFilter: '3.4 Liters',
        interval: '5,000 km သို့မဟုတ် ၆ လတစ်ကြိမ်',
        standard: 'API SP / ILSAC GF-6A',
      },
      transmissionFluid: {
        fluidType: 'Honda Genuine HMMF (Honda Multi Matic Fluid) သို့မဟုတ် CVTF',
        cautionNote: 'အလွန်အရေးကြီးသည် - Toyota CVT သို့မဟုတ် အခြား ATF ဆီများ လုံးဝ (လုံးဝ) မထည့်ရ! Honda HMMF / CVTF စစ်စစ်သာ သုံးရပါမည်!',
        drainRefillCapacity: '3.2 Liters',
        panDropFilterCapacity: '3.6 Liters',
        totalDryCapacity: '5.8 Liters',
        inspectionMethod: 'အင်ဂျင်ကို အပူချိန်ရောက်အောင် နှိုးပြီး စက်သတ်ပြီးနောက် ၆၀ မှ ၉၀ စက္ကန့်အတွင်း ဆီတိုင်းတံ အဝါရောင်ခေါင်းမှ စစ်ဆေးပါ',
      },
      coolant: {
        type: 'Honda All Season Antifreeze / Coolant Type 2 (Blue)',
        capacity: '4.8 Liters',
      },
      brakeFluid: 'DOT 3 သို့မဟုတ် DOT 4',
      fuelTankCapacity: '42 Liters (ဓာတ်ဆီ 92 / 95 Ron)',
    },
    paintAndTrim: {
      code: 'NH700M',
      nameEn: 'Alabaster Silver Metallic',
      nameMm: 'အလာဘက်စတာ ငွေရောင် မက်ထလစ်',
      hex: '#C0C0C0',
      trimCode: 'NH167L',
      trimDescriptionMm: 'အနက်ရောင် Fabric ကူရှင်နှင့် Magic Seat စနစ်',
    },
    plateBreakdown: [
      {
        stampName: 'MODEL',
        stampValue: 'DBA-GE6',
        meaningMm: 'DBA (အိတ်ဇောစံနှုန်း) - GE6 (Honda Fit 1.3L FWD Model)',
      },
      {
        stampName: 'ENGINE',
        stampValue: 'L13A 1339cc',
        meaningMm: 'Honda 1.3L SOHC 16-Valve i-VTEC ဓာတ်ဆီအင်ဂျင်',
      },
      {
        stampName: 'FRAME NO',
        stampValue: 'GE6-1045678',
        meaningMm: 'ဟွန်ဒါ ဖစ် ကိုယ်ထည်ဘောင် အမှတ်စဉ်',
      },
      {
        stampName: 'COLOR / TRIM',
        stampValue: 'NH700M / -A-S',
        meaningMm: 'NH700M = Silver ငွေရောင်ဆေး ၊ အနက်ရောင် အတွင်းခန်း',
      },
      {
        stampName: 'TRANS',
        stampValue: 'CVT',
        meaningMm: 'Honda Multimatic CVT အော်တိုဂီယာ',
      },
    ],
    mechanicProTips: [
      'ဟွန်ဒါ CVT ဂီယာသည် ဆီမှားထည့်ပါက တုန်ခါခြင်း (Juddering) ဖြစ်တတ်သဖြင့် Honda HMMF စစ်စစ်သာ သုံးပါ',
      'ဂီယာဆီစစ်ဆေးနည်းသည် တိုယိုတာနှင့်မတူဘဲ စက်သတ်ပြီးမှ ဆီတိုင်းတံဖြင့် စစ်ဆေးရပါသည်',
    ],
    plateLocationGuide: 'ရှေ့လေကာမှန်အောက် ဘေးဘောင် သို့မဟုတ် ယာဉ်မောင်းဘက် B-Pillar တံခါးတိုင်တွင် စတစ်ကာဖြင့် ကပ်ထားပါသည်',
  },
};

