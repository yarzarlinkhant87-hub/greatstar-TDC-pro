export interface ToyotaTransmissionInfo {
  code: string;
  name: string;
  type: 'CVT' | 'Automatic (AT)';
  speed: string;
  driveLayout: 'FWD (ရှေ့ဆွဲ)' | 'RWD (နောက်ဆွဲ)' | '4WD (၄ ဘီးယက်)';
  requiredFluid: string;
  fluidCautionMm: string;
  drainRefillLiters: string;
  panDropLiters: string;
  dryFillLiters: string;
  commonCars: string;
  dipstickPresent: boolean;
  checkMethodMm: string;
}

export const TOYOTA_TRANS_DATABASE: ToyotaTransmissionInfo[] = [
  {
    code: 'K310',
    name: 'Super CVT-i (Small Vehicle)',
    type: 'CVT',
    speed: 'Stepless Continuous Variable',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
    fluidCautionMm: '⚠️ အရေးကြီး - ATF WS သို့မဟုတ် Dexron လုံးဝ မထည့်ရ! CVT Fluid FE သာ အဓိက သုံးရပါမည်။',
    drainRefillLiters: '3.5 - 3.8 Liters',
    panDropLiters: '4.2 - 4.5 Liters',
    dryFillLiters: '6.5 Liters',
    commonCars: 'Premio 1.5 (NZT260), Fielder 1.5 (NZE141G), Belta 1.5 (NCP91), Axio (NZE141)',
    dipstickPresent: false,
    checkMethodMm: 'အောက်ခြေ Overflow Plug ဖြင့် 35°C - 45°C တွင် စစ်ဆေးချိန်ညှိခြင်း။'
  },
  {
    code: 'K311',
    name: 'Super CVT-i with 7-Speed Sports Sequential',
    type: 'CVT',
    speed: 'Stepless + 7-Speed Manual Mode',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE',
    fluidCautionMm: '⚠️ 2ZR အင်ဂျင်နှင့် တွဲဖက်ထားပြီး CVT Fluid FE သာ လုံးဝ ထည့်ရပါမည်။',
    drainRefillLiters: '3.7 - 3.9 Liters',
    panDropLiters: '4.5 Liters',
    dryFillLiters: '6.8 Liters',
    commonCars: 'Premio 1.8 (ZRT260), Allion 1.8, Wish 1.8 (ZGE20G/20W), Auris',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (35°C - 45°C)။'
  },
  {
    code: 'K312',
    name: 'Super CVT-i (High Efficiency Modern)',
    type: 'CVT',
    speed: 'Stepless Continuous Variable',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE သာလျှင်',
    fluidCautionMm: '⚠️ Probox အသစ် (NCP160V) တွင် သုံးထားပြီး CVT FE သာ ထည့်ရပါမည်။ Probox အဟောင်းနှင့် မှား၍ ATF မထည့်ရ!',
    drainRefillLiters: '3.4 - 3.7 Liters',
    panDropLiters: '4.2 Liters',
    dryFillLiters: '6.4 Liters',
    commonCars: 'Probox New Model (NCP160V), Succeed New, Vitz NSP130',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (35°C - 45°C)။'
  },
  {
    code: 'K111',
    name: 'Super CVT-i (2.0L Class)',
    type: 'CVT',
    speed: 'Stepless + 7-Speed Manual Mode',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE / TC',
    fluidCautionMm: '⚠️ Noah/Voxy ၇၀ စီးရီးသုံးဖြစ်ပြီး CVT FE သို့မဟုတ် TC ထည့်ရပါမည်။',
    drainRefillLiters: '3.8 - 4.1 Liters',
    panDropLiters: '4.8 Liters',
    dryFillLiters: '8.4 Liters',
    commonCars: 'Noah / Voxy (ZRR70G/70W), Premio 2.0 (ZRT261), Avensis',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (35°C - 45°C)။'
  },
  {
    code: 'K112',
    name: 'Super CVT-i Heavy Duty',
    type: 'CVT',
    speed: 'Stepless + 7-Speed Sports Mode',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် TC)',
    fluidCautionMm: '⚠️ Alphard 20 စီးရီးသုံးဖြစ်ပြီး CVT Fluid FE သာ လုံးဝ ထည့်ရပါမည်။ ATF WS မထည့်ရ!',
    drainRefillLiters: '4.0 - 4.3 Liters',
    panDropLiters: '4.8 - 5.0 Liters',
    dryFillLiters: '8.7 Liters',
    commonCars: 'Alphard / Vellfire 20 Series 2.4L (ANH20W), RAV4 2.4 (ACA31W), Vanguard',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (35°C - 45°C)။'
  },
  {
    code: 'K114',
    name: 'Super CVT-i Next Generation',
    type: 'CVT',
    speed: 'Stepless + 7-Speed Sports Mode',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota Genuine CVT Fluid FE သာလျှင်',
    fluidCautionMm: '⚠️ Alphard 30 စီးရီးသုံးဖြစ်ပြီး CVT Fluid FE သာ သီးသန့် ထည့်ရပါမည်။',
    drainRefillLiters: '4.1 - 4.4 Liters',
    panDropLiters: '5.2 Liters',
    dryFillLiters: '8.8 Liters',
    commonCars: 'Alphard / Vellfire 30 Series 2.5L (AGH30W), Harrier 2.0 (ZSU60W)',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (35°C - 45°C)။'
  },
  {
    code: 'U340E',
    name: 'Super ECT 4-Speed Automatic',
    type: 'Automatic (AT)',
    speed: '4-Speed Auto',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS - Dipstick အတိုင်း)',
    fluidCautionMm: '⚠️ CVT ဆီ လုံးဝ မထည့်ရပါ! ATF Type T-IV သို့မဟုတ် ATF WS သာ ထည့်ရပါမည်။',
    drainRefillLiters: '2.9 - 3.2 Liters',
    panDropLiters: '3.8 - 4.0 Liters',
    dryFillLiters: '5.6 Liters',
    commonCars: 'Probox (NCP51V), Yaris, Vitz 1st Gen, Platz',
    dipstickPresent: true,
    checkMethodMm: 'ဆီတိုင်းတံ (Dipstick) ပါရှိသည်။ အင်ဂျင်နိုးထားပြီး P ထိုးကာ HOT မျဉ်းတွင် တိုင်းပါ။'
  },
  {
    code: 'U341E',
    name: 'Super ECT 4-Speed Automatic (1.8L)',
    type: 'Automatic (AT)',
    speed: '4-Speed Auto',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS)',
    fluidCautionMm: '⚠️ CVT ဆီ လုံးဝ မထည့်ရ! ATF Type T-IV သို့မဟုတ် ATF WS သာ ထည့်ရပါမည်။',
    drainRefillLiters: '3.1 - 3.4 Liters',
    panDropLiters: '4.0 Liters',
    dryFillLiters: '6.5 Liters',
    commonCars: 'Wish 1st Gen 1.8 (ZNE10G), Corolla Altis 1.8',
    dipstickPresent: true,
    checkMethodMm: 'ဆီတိုင်းတံ (Dipstick) ဖြင့် စစ်ဆေးခြင်း။'
  },
  {
    code: 'U241E',
    name: 'Super ECT 4-Speed Automatic (2.4L Heavy)',
    type: 'Automatic (AT)',
    speed: '4-Speed Auto',
    driveLayout: 'FWD (ရှေ့ဆွဲ)',
    requiredFluid: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS)',
    fluidCautionMm: '⚠️ Alphard 10 စီးရီးသုံးဖြစ်ပြီး CVT ဆီ လုံးဝ မထည့်ရပါ။ ATF T-IV/WS သာ ထည့်ရပါမည်။',
    drainRefillLiters: '3.5 - 3.8 Liters',
    panDropLiters: '4.5 Liters',
    dryFillLiters: '8.2 Liters',
    commonCars: 'Alphard 10 Series (ANH10W), Camry ACV30, Ipsum ACM21W, Harrier ACU10',
    dipstickPresent: true,
    checkMethodMm: 'ဆီတိုင်းတံ (Dipstick) ဖြင့် စစ်ဆေးခြင်း။'
  },
  {
    code: 'A960E',
    name: '6-Speed FR Sports Automatic Transmission',
    type: 'Automatic (AT)',
    speed: '6-Speed Auto with Sequential',
    driveLayout: 'RWD (နောက်ဆွဲ)',
    requiredFluid: 'Toyota Genuine ATF WS သာလျှင်',
    fluidCautionMm: '⚠️ ATF WS သာ သီးသန့် ထည့်ရပါမည်။ T-IV သို့မဟုတ် Dexron လုံးဝ မထည့်ရပါ!',
    drainRefillLiters: '3.5 - 3.8 Liters',
    panDropLiters: '4.5 Liters',
    dryFillLiters: '7.9 Liters',
    commonCars: 'Mark X (GRX120 / GRX130 2.5L RWD), Crown 2.5 (GRS180 / GRS200), Lexus IS250',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (36°C - 46°C) တွင် အဆင့်ညှိရမည်။'
  },
  {
    code: 'A343F',
    name: '4-Speed Full-Time 4WD Automatic Transmission',
    type: 'Automatic (AT)',
    speed: '4-Speed Auto 4WD',
    driveLayout: '4WD (၄ ဘီးယက်)',
    requiredFluid: 'Toyota Genuine ATF WS သို့မဟုတ် ATF Type T-IV',
    fluidCautionMm: '⚠️ Prado 120 4WD သုံးဖြစ်ပြီး ATF WS သို့မဟုတ် T-IV ထည့်ရပါမည်။ CVT ဆီ လုံးဝ မထည့်ရပါ။',
    drainRefillLiters: '3.5 - 4.0 Liters',
    panDropLiters: '5.0 Liters',
    dryFillLiters: '9.8 Liters',
    commonCars: 'Land Cruiser Prado 120 (TRJ120W), Hilux Surf, Hiace 4WD',
    dipstickPresent: true,
    checkMethodMm: 'ဆီတိုင်းတံ (Dipstick) ပါရှိသည်။'
  },
  {
    code: 'AC60F',
    name: '6-Speed Super ECT 4WD Heavy Automatic Transmission',
    type: 'Automatic (AT)',
    speed: '6-Speed Auto 4WD',
    driveLayout: '4WD (၄ ဘီးယက်)',
    requiredFluid: 'Toyota Genuine ATF WS သာလျှင်',
    fluidCautionMm: '⚠️ Prado 150 6-Speed အသစ်သုံးဖြစ်ပြီး ATF WS သာ လုံးဝ ထည့်ရပါမည်။',
    drainRefillLiters: '3.6 - 4.1 Liters',
    panDropLiters: '5.2 Liters',
    dryFillLiters: '10.2 Liters',
    commonCars: 'Land Cruiser Prado 150 (TRJ150W Facelift), Hilux Revo Petrol',
    dipstickPresent: false,
    checkMethodMm: 'Overflow Plug စနစ် (41°C - 46°C) တွင် တိကျစွာ အဆင့်ချိန်ရမည်။'
  }
];
