export interface NameplateSpec {
  plateId: string;
  brand: string;
  region: 'Asia' | 'Europe' | 'America';
  carModel: string;
  samplePlateText: string;
  vinOrFrame: string;
  engineCode: string;
  engineDisplacement: string;
  engineTypeMm: string;
  gearboxCode: string;
  gearboxTypeMm: string;
  driveSystemMm: string;
  driveTypeCode: 'FWD' | 'RWD' | '4WD' | 'AWD';
  axleCode?: string;
  plantCode?: string;
  colorTrim?: string;
  recommendedEngineOil: string;
  recommendedGearOil: string;
  oilCapacityLiters: {
    engineOil: string;
    gearboxFluid: string;
  };
  workshopNoticeMm: string;
}

export const SAMPLE_NAMEPLATES: NameplateSpec[] = [
  // 1. Toyota Probox / Succeed (NCP51) - Most famous in Myanmar
  {
    plateId: 'toyota-probox-ncp51',
    brand: 'Toyota',
    region: 'Asia',
    carModel: 'Toyota Probox Van (NCP51V)',
    samplePlateText: 'MODEL: CBE-NCP51V-EXPDK\nENGINE: 1NZ-FE 1496cc\nFRAME No: NCP51-0182431\nCOLOR/TRIM: 058 / FA11\nTRANS/AXLE: U340E - 05A\nPLANT/BUILT: A51',
    vinOrFrame: 'NCP51-0182431',
    engineCode: '1NZ-FE',
    engineDisplacement: '1,496 cc (1.5L)',
    engineTypeMm: '4-Cylinder In-line DOHC 16-Valve VVT-i ဓာတ်ဆီအင်ဂျင်',
    gearboxCode: 'U340E (05A Axle)',
    gearboxTypeMm: '4-Speed Super ECT Automatic Transmission (4AT ရှေ့ဆွဲအော်တို)',
    driveSystemMm: 'FWD (ရှေ့ဘီးယက် ၂ ဘီးဆွဲ - Front Wheel Drive)',
    driveTypeCode: 'FWD',
    axleCode: '05A (Final Drive Ratio: 3.941)',
    plantCode: 'A51 (Daihatsu Motor Kyoto Plant)',
    colorTrim: '058 (Pure White) / FA11 (Grey Fabric)',
    recommendedEngineOil: '5W-30 သို့မဟုတ် 0W-20 API SP / ILSAC GF-6A',
    recommendedGearOil: 'Toyota Genuine ATF Type T-IV (သို့မဟုတ်) ATF-WS (2010+ မော်ဒယ်သစ်)',
    oilCapacityLiters: {
      engineOil: '3.7 Liters (Filter ပါ)',
      gearboxFluid: '2.9 Liters (Drain & Refill) / 6.4L (Total)'
    },
    workshopNoticeMm: 'ဂီယာအိုး နံပါတ်ပြားပေါ်တွင် "U340E - 05A" ဟု ပါရှိပါက 4-Speed Automatic ဖြစ်ပြီး CVT မဟုတ်ပါ။ ဂီယာဆီ လဲလှယ်ရာတွင် T-IV သို့မဟုတ် WS စစ်ဆေးပြီး ထည့်သွင်းပါ။'
  },

  // 2. Toyota Fielder / Axio (NZE161) - Super CVT-i
  {
    plateId: 'toyota-fielder-nze161',
    brand: 'Toyota',
    region: 'Asia',
    carModel: 'Toyota Corolla Fielder / Axio (NZE161G)',
    samplePlateText: 'MODEL: DBA-NZE161G-AWXEB\nENGINE: 1NZ-FE 1496cc\nFRAME No: NZE161-7034192\nCOLOR/TRIM: 1F7 / FB20\nTRANS/AXLE: K312 - 01A\nPLANT/BUILT: B21',
    vinOrFrame: 'NZE161-7034192',
    engineCode: '1NZ-FE',
    engineDisplacement: '1,496 cc (1.5L)',
    engineTypeMm: '4-Cylinder DOHC VVT-i / Dual VVT-i အင်ဂျင်',
    gearboxCode: 'K312 (Super CVT-i)',
    gearboxTypeMm: 'Continuously Variable Transmission (Super CVT-i ဘယ်လ်ကြိုးဂီယာ)',
    driveSystemMm: 'FWD (ရှေ့ဘီးယက် ၂ ဘီးဆွဲ)',
    driveTypeCode: 'FWD',
    axleCode: '01A',
    plantCode: 'B21 (Toyota Motor East Japan Miyagi Plant)',
    colorTrim: '1F7 (Classic Silver Metallic) / FB20',
    recommendedEngineOil: '0W-20 (အထူးသင့်လျော်) သို့မဟုတ် 5W-30 API SP',
    recommendedGearOil: 'Toyota Genuine Super CVT Fluid FE (သို့မဟုတ် TC)',
    oilCapacityLiters: {
      engineOil: '3.7 Liters',
      gearboxFluid: '2.8 Liters (Drain & Refill) / 6.3L (Full Capacity)'
    },
    workshopNoticeMm: 'သတိပြုရန်: Trans/Axle တွင် "K312" ပါရှိသဖြင့် ဤကားသည် CVT ဂီယာ ဖြစ်သည်။ သာမန် ATF ဆီ အနီလုံးဝ မထည့်ရ! Super CVT Fluid FE သာ အသုံးပြုရပါမည်။'
  },

  // 3. Honda Fit / Jazz (GE6)
  {
    plateId: 'honda-fit-ge6',
    brand: 'Honda',
    region: 'Asia',
    carModel: 'Honda Fit (GE6)',
    samplePlateText: 'CHASSIS No: GE6-1049281\nENGINE: L13A 1339cc\nTYPE: DBA-GE6 G Grade\nTRANSMISSION: M24A / CVT\nCOLOR: NH700M / -B-S\nPLANT: S (Suzuka Plant)',
    vinOrFrame: 'GE6-1049281',
    engineCode: 'L13A',
    engineDisplacement: '1,339 cc (1.3L)',
    engineTypeMm: '4-Cylinder SOHC 16-Valve i-VTEC အင်ဂျင်',
    gearboxCode: 'M24A (Honda Multi-Matic CVT)',
    gearboxTypeMm: 'CVT with Torque Converter (စက်ဆွဲအားထိန်း CVT ဂီယာ)',
    driveSystemMm: 'FWD (ရှေ့ဘီးယက် ၂ ဘီးဆွဲ)',
    driveTypeCode: 'FWD',
    axleCode: 'Integrated Front Differential',
    plantCode: 'Suzuka Factory, Japan',
    colorTrim: 'NH700M (Alabaster Silver Metallic)',
    recommendedEngineOil: '0W-20 Honda Ultra LEO API SP',
    recommendedGearOil: 'Honda Genuine HCF-2 (သို့မဟုတ် HMMF အစောပိုင်းထုတ်များ)',
    oilCapacityLiters: {
      engineOil: '3.6 Liters (Filter ပါ)',
      gearboxFluid: '3.2 Liters (Drain & Refill)'
    },
    workshopNoticeMm: 'Honda Fit GE6 မော်ဒယ်သည် Torque Converter ပါဝင်သော CVT ဖြစ်သဖြင့် ဆီအရည်အသွေး လိုအပ်ချက် မြင့်မားပါသည်။ HCF-2 စစ်စစ်သာ သုံးစွဲပါက ဂီယာတုန်ခါခြင်း (Judder) ကို ကာကွယ်နိုင်ပါသည်။'
  },

  // 4. Nissan Note (E12 e-POWER & HR12DE)
  {
    plateId: 'nissan-note-e12',
    brand: 'Nissan',
    region: 'Asia',
    carModel: 'Nissan Note (E12 Medalist / X)',
    samplePlateText: 'MODEL: DBA-E12 FDUARDZE12EDA\nENGINE: HR12DE 1198cc\nCHASSIS: E12-085732\nCOLOR/TRIM: QAB / G\nTRANS: RE0F11A (GM38)\nPLANT: Oppama Plant',
    vinOrFrame: 'E12-085732',
    engineCode: 'HR12DE',
    engineDisplacement: '1,198 cc (1.2L 3-Cylinder)',
    engineTypeMm: '3-Cylinder In-line DOHC 12-Valve ဓာတ်ဆီအင်ဂျင်',
    gearboxCode: 'RE0F11A (Jatco JF015E / CVT7)',
    gearboxTypeMm: 'Jatco CVT7 with Auxiliary 2-Speed Sub-planetary Gearbox',
    driveSystemMm: 'FWD (ရှေ့ဘီးယက် ၂ ဘီးဆွဲ)',
    driveTypeCode: 'FWD',
    axleCode: 'GM38 (3.882 Final Drive)',
    plantCode: 'Oppama Plant, Kanagawa Japan',
    colorTrim: 'QAB (Brilliant White Pearl) / Trim G',
    recommendedEngineOil: '0W-20 Nissan Strong Save X API SP',
    recommendedGearOil: 'Nissan Genuine NS-3 CVT Fluid (စိမ်းပြာရောင်)',
    oilCapacityLiters: {
      engineOil: '3.0 Liters (Filter ပါ)',
      gearboxFluid: '3.1 Liters (Drain & Fill) / 6.9L Total'
    },
    workshopNoticeMm: 'Jatco JF015E (RE0F11A) ဂီယာအိုးတွင် High/Low 2-Speed Planetary ဂီယာ ပါရှိသဖြင့် NS-3 အဆင့်မြင့် စိမ်းပြာရောင် ဆီသာ သုံးရပါမည်။ NS-2 သုံးပါက Solenoid အပူလွန်ကဲနိုင်ပါသည်။'
  },

  // 5. Ford Ranger (T6 2.2 / 3.2 TDCi 4WD) - America/Global
  {
    plateId: 'ford-ranger-t6',
    brand: 'Ford',
    region: 'America',
    carModel: 'Ford Ranger Wildtrak 4x4 (T6)',
    samplePlateText: 'VIN: MNBSXXGCHSFW12934\nENGINE: PUMA 2.2L TDCi (QJ2R)\nTRANS: 6R80 (6-Speed Auto)\nAXLE: 3.73 Limited Slip (L9)\nDRIVE: 4WD (Part-Time Electronic Shift-on-the-Fly)\nGVW: 3200 kg',
    vinOrFrame: 'MNBSXXGCHSFW12934',
    engineCode: 'PUMA 2.2L (ZSD-422)',
    engineDisplacement: '2,198 cc (2.2L Turbo Diesel)',
    engineTypeMm: '4-Cylinder Common Rail Direct Injection Variable Geometry Turbo Intercooler',
    gearboxCode: 'Ford 6R80 (ZF 6HP အခြေခံ ထုတ်လုပ်ထားသော 6-Speed AT)',
    gearboxTypeMm: '6-Speed Heavy Duty Electronic Automatic Transmission',
    driveSystemMm: '4WD / 4x4 (2H, 4H, 4L Electronic Transfer Case with Rear Diff Lock)',
    driveTypeCode: '4WD',
    axleCode: 'L9 (3.73 E-Locker Differential)',
    plantCode: 'AAT (AutoAlliance Thailand Plant)',
    colorTrim: 'Pride Orange / Ebony Leather',
    recommendedEngineOil: '5W-30 Ford WSS-M2C913-D / ACEA A5/B5 Synthetic',
    recommendedGearOil: 'Motorcraft MERCON LV Automatic Transmission Fluid',
    oilCapacityLiters: {
      engineOil: '8.6 Liters (Oil Filter အပါ)',
      gearboxFluid: '4.5 Liters (Service Drain) / 10.0L Total Dry'
    },
    workshopNoticeMm: 'Ford 6R80 ဂီယာအိုးတွင် Dipstick မပါဘဲ အောက်ခြေ Overflow Level Plug ဖြင့် ၄၅°C တွင် ဆီချိန်ရပါသည်။ Mercon LV မှလွဲ၍ အခြား ATF ထည့်ပါက Torque Converter Shudder ဖြစ်တတ်ပါသည်။'
  },

  // 6. BMW 5 Series (528i F10) - Germany/Europe
  {
    plateId: 'bmw-528i-f10',
    brand: 'BMW',
    region: 'Europe',
    carModel: 'BMW 5 Series 528i Sedan (F10)',
    samplePlateText: 'VIN: WBAXG51020DW81923\nTYPE: 528i Limousine\nENGINE: N20B20A 180kW (245PS)\nTRANS: GA8HP45Z (ZF 8HP)\nPAINT: 300 / Alpinweiss 3\nUPHOLSTERY: LCSW Leather Dakota Schwarz',
    vinOrFrame: 'WBAXG51020DW81923',
    engineCode: 'N20B20A',
    engineDisplacement: '1,997 cc (2.0L TwinPower Turbo)',
    engineTypeMm: 'Inline 4-Cylinder Twin-Scroll Turbocharged Valvetronic Direct Injection',
    gearboxCode: 'GA8HP45Z (ZF 8HP45)',
    gearboxTypeMm: 'ZF 8-Speed Steptronic Automatic Transmission',
    driveSystemMm: 'RWD (နောက်ဘီးယက် ၂ ဘီးဆွဲ - sDrive Rear Wheel Drive)',
    driveTypeCode: 'RWD',
    axleCode: 'HAG 188L Rear Differential (3.07 Ratio)',
    plantCode: 'Dingolfing Plant 2.4, Germany',
    colorTrim: '300 Alpinweiss 3 (Alpine White) / Black Dakota Leather',
    recommendedEngineOil: '5W-30 / 0W-30 BMW Longlife-01 Full Synthetic',
    recommendedGearOil: 'ZF Lifeguard Fluid 8 (စိမ်းပြာရောင် အထူးဂီယာဆီ)',
    oilCapacityLiters: {
      engineOil: '5.0 Liters',
      gearboxFluid: '4.5 Liters (Pan & Filter Replacement) / 8.5L Total'
    },
    workshopNoticeMm: 'ZF 8HP ဂီယာအိုးသည် Plastic Sump (Pan) နှင့် Filter တွဲလျက်ပါသဖြင့် ဂီယာဆီလဲလျှင် Pan ပါ အသစ်လဲရပါသည်။ ZF Lifeguard 8 သာ ထည့်သွင်းရပါမည်။'
  },

  // 7. Mercedes-Benz C200 / C250 (W205) - Germany/Europe
  {
    plateId: 'benz-c200-w205',
    brand: 'Mercedes-Benz',
    region: 'Europe',
    carModel: 'Mercedes-Benz C-Class C200 (W205)',
    samplePlateText: 'FIN: WDD2050422R183921\nMODEL: C200 AMG Line\nENGINE: M274.920 1991cc\nTRANS: 722.995 (7G-TRONIC PLUS)\nPAINT: 799U Diamond White\nAXLE RATIO: 3.07',
    vinOrFrame: 'WDD2050422R183921',
    engineCode: 'M274.920',
    engineDisplacement: '1,991 cc (2.0L Turbo)',
    engineTypeMm: '4-Cylinder In-line Turbocharged Camtronic CGI ဓာတ်ဆီအင်ဂျင်',
    gearboxCode: '722.995 (7G-Tronic Plus)',
    gearboxTypeMm: '7-Speed Automatic Transmission with ECO Start/Stop Direct Select',
    driveSystemMm: 'RWD (နောက်ဘီးယက် ၂ ဘီးဆွဲ - Rear Wheel Drive)',
    driveTypeCode: 'RWD',
    axleCode: 'Rear Drive Axle 3.07 Ratio',
    plantCode: 'Bremen Plant, Germany',
    colorTrim: '799U Diamond White Bright / Artico Black',
    recommendedEngineOil: '5W-40 / 5W-30 MB-Approval 229.5 Fully Synthetic',
    recommendedGearOil: 'Mercedes-Benz Genuine ATF MB 236.15 (အပြာရောင် FE Fluid)',
    oilCapacityLiters: {
      engineOil: '6.0 Liters (Filter အပါ)',
      gearboxFluid: '5.0 Liters (Service Drain) / 9.0L Complete with Converter'
    },
    workshopNoticeMm: '7G-Tronic Plus (A89 code) တွင် အပြာရောင် MB 236.15 ဆီသာ အသုံးပြုရမည်ဖြစ်ပြီး၊ ယခင်မော်ဒယ်ဟောင်းသုံး အနီရောင် MB 236.14 ဆီနှင့် လုံးဝ ရောနှောထည့်သွင်း၍ မရပါ။'
  },

  // 8. Isuzu D-Max 3.0 V-Cross (RT50/RG01) - Asia/Japan
  {
    plateId: 'isuzu-dmax-30',
    brand: 'Isuzu',
    region: 'Asia',
    carModel: 'Isuzu D-Max 3.0 V-Cross 4x4 (RT85)',
    samplePlateText: 'VIN: MPATFR85JHT019284\nMODEL: TFR85HD-M\nENGINE: 4JJ1-TCX 2999cc\nTRANS: AWR6B45 (Aisin 6-Speed Auto)\nAXLE: 3.727 (Diff Lock)\nDRIVE: 4WD Terrain Command',
    vinOrFrame: 'MPATFR85JHT019284',
    engineCode: '4JJ1-TCX',
    engineDisplacement: '2,999 cc (3.0L Blue Power Turbo Diesel)',
    engineTypeMm: '4-Cylinder DOHC 16V Common Rail Intercooled VGS Turbo Diesel',
    gearboxCode: 'AWR6B45 (Aisin Warner 6-Speed AT)',
    gearboxTypeMm: 'Aisin 6-Speed Heavy Duty Automatic Transmission with Rev-Tronic',
    driveSystemMm: 'Terrain Command 4WD (2H, 4H, 4L Shift-on-the-fly with Rear Differential Lock)',
    driveTypeCode: '4WD',
    axleCode: 'Rear Differential 3.727 Ratio with LSD/Lock',
    plantCode: 'Samrong Plant, Thailand',
    colorTrim: 'Valencia Orange Metallic / Leather Trim',
    recommendedEngineOil: '10W-30 / 5W-30 Isuzu Besco Clean Super API CK-4 / JASO DH-2',
    recommendedGearOil: 'Isuzu Besco ATF-WS သို့မဟုတ် Toyota ATF-WS (Aisin Warner 6AT standard)',
    oilCapacityLiters: {
      engineOil: '7.5 Liters (Filter အပါ)',
      gearboxFluid: '4.0 Liters (Drain & Refill) / 9.2L Total'
    },
    workshopNoticeMm: 'Isuzu D-Max Aisin 6-Speed ဂီယာအိုးသည် Toyota ATF-WS standard အဆင့်ရှိ ဆီကို သုံးစွဲနိုင်ပြီး ဂီယာဆီအပူချိန် ၄၀-၄၅°C တွင် Level စစ်ဆေးရပါမည်။'
  }
];
