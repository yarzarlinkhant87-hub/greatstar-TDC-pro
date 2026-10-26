export type VehicleCategory = 
  | 'sedan' 
  | 'compact' 
  | 'mpv' 
  | 'suv' 
  | 'diesel_commonrail' 
  | 'heavy_duty' 
  | 'hybrid' 
  | 'european_american'
  | 'all';

export interface EngineSpecification {
  code: string;              // e.g. "1NZ-FE", "1KD-FTV", "E13C-TL", "B48B20"
  displacement: string;      // e.g. "1496 cc (1.5L)", "12,913 cc (12.9L)"
  cylinders: string;         // e.g. "Inline 4-cylinder, DOHC 16-valve"
  valvesSystem: string;      // e.g. "VVT-i", "Common Rail D-4D 1600 bar", "Electronic Unit Injector (EUI)"
  timingType: string;        // e.g. "Timing Chain", "Timing Belt", "Gear Train (စက်သွားဂီယာစနစ်)"
  timingNote?: string;       // e.g. "ကြိုးလဲရန်မလို၊ အင်ဂျင်ဝိုင် ပုံမှန်လဲပေးပါက သက်တမ်းရှည်သည်"
  horsepower: string;        // e.g. "110 PS @ 6,000 RPM", "410 PS @ 1,800 RPM"
  torque: string;            // e.g. "141 N·m @ 4,400 RPM", "1,618 N·m @ 1,100 RPM"
  sparkPlug?: string;        // e.g. "DENSO K16R-U11 / NGK BKR5EYA-11 (Gap: 1.1 mm)"
  sparkPlugOrInjector?: string;// e.g. "DENSO K16R-U11" or "Denso G2 Common Rail Injector (1600 bar)" or "Bosch Unit Injector"
}

export interface TransmissionSpecification {
  transCode: string;         // e.g. "K310", "AC60F", "ZF 8HP50", "M035S5", "Hino ProShift 7-Speed"
  transName: string;         // e.g. "Super CVT-i", "6-Speed Automatic", "7-Speed Manual Hi-Low Splitter"
  transType: 'CVT' | 'Automatic (AT)' | 'Manual (MT)' | 'Dual Clutch (DCT)';
  driveType: string;         // e.g. "FWD (ရှေ့ဆွဲ ၂ ဘီး)", "4WD (၄ ဘီးယက်)", "RWD (နောက်ဆွဲ)", "6x4 (နောက်ဘီးစုံယက်)"
  driveDetailMm: string;     // Myanmar explanation of drive mechanics
  axleCode: string;          // e.g. "-02A", "B02A", "A01A", "Ratio 4.100"
  axleExplanationMm: string; // Myanmar explanation of ring gear and differential pinion
}

export interface FluidsGuide {
  engineOil: {
    viscosity: string;         // e.g. "0W-20 / 5W-30" or "15W-40 CI-4/CK-4 (ဒီဇယ်အကြံပြု)"
    capacityWithFilter: string;// e.g. "3.7 Liters", "33.0 Liters"
    capacityWithoutFilter: string;// e.g. "3.5 Liters", "30.0 Liters"
    interval: string;          // e.g. "5,000 km သို့မဟုတ် 6 လ"
    standard: string;          // e.g. "API SP / ILSAC GF-6A" or "API CI-4 / JASO DH-1"
  };
  transmissionFluid: {
    fluidType: string;         // e.g. "Toyota Genuine CVT Fluid FE", "Toyota ATF WS", "ZF Lifeguard 8", "Gear Oil 80W-90 GL-4"
    cautionNote: string;       // e.g. "CVT Fluid FE နှင့် TC မမှားစေရ။ ATF WS လုံးဝ မထည့်ရ!"
    drainRefillCapacity: string;// e.g. "3.5 - 3.8 Liters"
    panDropFilterCapacity: string; // e.g. "4.2 - 4.5 Liters"
    totalDryCapacity: string;  // e.g. "6.5 Liters", "13.0 Liters"
    inspectionMethod: string;  // e.g. "35°C - 45°C Overflow Plug အဆင့်စစ်ဆေးခြင်း" or "ဆီတိုင်းတံ (Dipstick) Hot Mark"
  };
  differentialFluid?: {
    frontDiff?: string;        // e.g. "Hypoid Gear Oil LT 75W-85 GL-5 (0.8 L)"
    rearDiff?: string;         // e.g. "Toyota Hypoid Gear Oil GL-5 85W-90 (1.1 L)" or "85W-140 GL-5 (8.5 L)"
    transferCase?: string;     // e.g. "Hypoid Gear Oil LT 75W-85 GL-5 (0.8 L)"
  };
  coolant: {
    type: string;              // e.g. "Toyota Super Long Life Coolant (SLLC - Pink)"
    capacity: string;          // e.g. "5.5 Liters", "38.0 Liters"
  };
  brakeFluid: string;          // e.g. "DOT 3 သို့မဟုတ် DOT 4 (သို့မဟုတ် ကားကြီး လေဘရိတ် Air Brake System)"
  fuelTankCapacity: string;    // e.g. "50 Liters (ဓာတ်ဆီ 92 / 95 Ron)", "300 Liters (ဒီဇယ်)"
}

export interface PaintSpec {
  code: string;                // e.g. "070", "300", "1F7"
  nameEn: string;              // e.g. "White Pearl Crystal Shine", "Alpine White"
  nameMm: string;              // e.g. "ပုလဲဖြူရောင် (White Pearl ၃ ထပ်ဆေး)"
  colorHex: string;            // e.g. "#F0EFEA"
  trimCode: string;            // e.g. "FA20", "LCSW"
  trimDescriptionMm: string;   // e.g. "အနက်ရောင် အထည်စ ထိုင်ခုံနှင့် အတွင်းခန်း"
}

export interface ModelCodeBreakdownItem {
  codeSegment: string;         // e.g. "DBA", "NZE", "141", "G", "1KD", "WBA"
  meaning: string;             // English meaning
  meaningMm: string;           // Myanmar explanation
}

export interface ToyotaVehicle {
  id: string;
  brand?: 'Toyota' | 'Isuzu' | 'Hino' | 'Nissan' | 'Suzuki' | 'BMW' | 'Mercedes-Benz' | 'Ford' | 'Other' | string;
  countryOfOrigin?: string;
  modelName: string;           // e.g. "Corolla Fielder (Wagon)", "Hilux Revo 2.8D 4WD", "Hino Profia 700 12.9L"
  burmeseName: string;         // e.g. "ကိုရိုလာ ဖီးလ်ဒါ (ဝက်ဂွန်)", "ဟိုင်းလပ် ရီဗို ၂.၈ ဒီဇယ် 4WD"
  chassisCode: string;         // e.g. "NZE141G", "GUN126R", "FR1EXEG", "F30"
  fullModelCode: string;       // e.g. "DBA-NZE141G-AWXEK", "GUN126R-DTTHXT", "WBA3A5C59DF..."
  generationYears: string;     // e.g. "2006 - 2012 (DBA အိတ်ဇောစံနှုန်း)"
  yearIdentificationMethodMm?: string; // How the year is determined (e.g. "VIN ၁၀ လုံးမြောက် ဂဏန်း သို့မဟုတ် Frame အမှတ်စဉ်")
  category: VehicleCategory;
  categoryLabelMm?: string;    // e.g. "ကားသေး ကွန်ပက်", "ကားလတ် ဒီဇယ် Pickup", "ကားကြီး ကုန်တင် ၁၀ ဘီး"
  fuelType: 
    | 'ဓာတ်ဆီ (Petrol)' 
    | 'ဒီဇယ် Common Rail' 
    | 'ဒီဇယ် Electronic Unit Injector (EUI)' 
    | 'Hybrid (Petrol + Electric)' 
    | 'ဒီဇယ် သာမန် (Mechanical Pump)'
    | 'ဓာတ်ဆီ Hybrid (Petrol + Electric)'
    | string;
  
  // Physical nameplate sample stamps
  nameplatePlate: {
    model: string;             // "DBA-NZE141G-AWXEK" or "GUN126R"
    engine: string;            // "1NZ-FE 1496cc" or "1GD-FTV 2755cc"
    frame: string;             // "NZE141-9045892" or "MROHA3CD6J0..."
    colorTrim: string;         // "070 / FA20"
    transAxle: string;         // "K310 - 02A" or "AC60F - B02A"
    plant: string;             // "A51"
    extraStamps?: string;      // Weight limits or chassis stamp
  };

  engine: EngineSpecification;
  transmission: TransmissionSpecification;
  fluids: FluidsGuide;
  paints: PaintSpec[];
  codeBreakdown: ModelCodeBreakdownItem[];
  workshopTips: string[];
  plateLocationMm?: string;    // Where to find nameplate
  scannedAt?: string;
  isCustomScanned?: boolean;
}

export interface UniversalPlateScanResult {
  id: string;
  maker: string;               // e.g. "Toyota", "BMW", "Mercedes-Benz", "Ford", "Hino"
  modelName: string;
  burmeseName: string;
  countryOfOrigin: string;
  manufactureYear: string;     // e.g. "၂၀၁၆ ခုနှစ် (VIN ၁၀ လုံးမြောက် 'G' အရ အတည်ပြုချက်)"
  generationEra: string;       // e.g. "မီးခွက်ပြောင်း Facelift"
  categoryMm: string;          // e.g. "ကားလတ် SUV", "ကားကြီး ကုန်တင် ၁၀ ဘီး"
  fuelSystemMm: string;        // e.g. "ဒီဇယ် Common Rail (2000 bar)", "ဓာတ်ဆီ Dual VVT-i"
  engine: EngineSpecification;
  transmission: TransmissionSpecification;
  fluids: FluidsGuide;
  paintAndTrim: {
    code: string;
    nameEn: string;
    nameMm: string;
    trimCode: string;
    hex?: string;
  };
  plateBreakdown: Array<{
    stampName: string;
    stampValue: string;
    meaningMm: string;
  }>;
  mechanicProTips: string[];   // Plain-language Myanmar workshop guide and Euro/Asian comparison
  plateLocationGuide: string;  // Where this car's plate is located
  scannedAt: string;
  imageUrl?: string;
}
