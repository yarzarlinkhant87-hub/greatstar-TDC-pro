export interface FluidSpec {
  brand: string;
  gearboxType: string;
  recommendedOil: string;
  prohibitedOil: string;
  capacityChange: string;
  totalCapacity: string;
  changeInterval: string;
  checkingMethodMm: string;
  warningMm: string;
}

export const FLUID_SPECS: FluidSpec[] = [
  {
    brand: 'Toyota',
    gearboxType: 'Super ECT 4-Speed (U340E / U440E / U140E) - Probox, Vitz, Premio',
    recommendedOil: 'Toyota ATF Type T-IV (သို့မဟုတ် ATF WS - Dipstick ပေါ်မူတည်သည်)',
    prohibitedOil: 'CVT Fluid (FE / TC) လုံးဝမထည့်ရ!',
    capacityChange: '၂.၅ - ၃.၀ လီတာ (ဆီပန် ဖြုတ်လဲပါက ၃.၅ လီတာ)',
    totalCapacity: '၅.၆ - ၆.၅ လီတာ',
    changeInterval: 'ကီလို ၂၀,၀၀၀ မှ ၃၀,၀၀၀ ကြား (သို့မဟုတ် ၁ နှစ်ခွဲတစ်ကြိမ်)',
    checkingMethodMm: 'အင်ဂျင်စက်နှိုးထားပြီး အပူချိန် ၇၀-၈၀ ဒီဂရီတွင် P သို့မဟုတ် N အနေအထား၌ Dipstick ချောင်း၏ HOT အမှတ်အသားဖြင့် စစ်ဆေးပါ။',
    warningMm: 'ဂီယာချောင်းတွင် "Type T-IV" ဟု ရေးထားပါက Type T-IV ဆီကိုသာ ထည့်ပါ၊ WS ကို ၂၀၀၅ နောက်ပိုင်း မော်ဒယ်များတွင်သာ သုံးပါ။'
  },
  {
    brand: 'Toyota',
    gearboxType: 'Super CVT-i (K310 / K311 / K312 / K313) - Axio, Fielder, Wish',
    recommendedOil: 'Toyota Genuine CVT Fluid FE (သို့မဟုတ် CVT Fluid TC)',
    prohibitedOil: 'သာမန် ATF (Automatic Transmission Fluid) လုံးဝ မထည့်ရ! ထည့်မိပါက CVT Belt ခါးပတ် ချက်ချင်းချော်ပြီး ပျက်စီးမည်။',
    capacityChange: '၃.၅ - ၄.၀ လီတာ',
    totalCapacity: '၇.၅ - ၈.၀ လီတာ',
    changeInterval: 'ကီလို ၂၀,၀၀၀ မှ ၂၅,၀၀၀ ကြား',
    checkingMethodMm: 'ဆီတိုင်းချောင်း မပါသော မော်ဒယ်များတွင် Overflow Plug (ဆီပိုလျှံဖောက်ခလုတ်) ဖြင့် ဂီယာဆီအပူချိန် ၃၅°C - ၄၅°C တွင် စစ်ဆေးရပါမည်။',
    warningMm: 'CVT-FE သည် ဆီကျဲပြီး ဆီစားသက်သာစေရန် ထုတ်လုပ်ထားသည်။ CVT-TC ထည့်ရမည့် အဟောင်းများတွင် TC ကို သုံးပါ။'
  },
  {
    brand: 'Honda',
    gearboxType: 'Multi-Matic CVT (Fit GD1, GE6, GK3, Insight ZE2, Freed)',
    recommendedOil: 'Honda Genuine HCF-2 (သို့မဟုတ် GD1 မော်ဒယ်ဟောင်းများအတွက် Ultra HMMF)',
    prohibitedOil: 'Dexron ATF သို့မဟုတ် အခြား multi-vehicle ဆီများ မထည့်ရ!',
    capacityChange: '၃.၂ - ၃.၅ လီတာ',
    totalCapacity: '၅.၄ လီတာ',
    changeInterval: 'ကီလို ၂၀,၀၀၀ တစ်ကြိမ်',
    checkingMethodMm: 'အင်ဂျင်ပူအောင် နှိုးပြီးနောက် စက်သတ်၍ ၆၀ မှ ၉၀ စက္ကန့်အတွင်း Dipstick ချောင်းဖြင့် တိုင်းပါ။ (Honda သီးသန့် နည်းစနစ်)',
    warningMm: 'ဆီလဲပြီးတိုင်း Start Clutch Calibration ပြန်လည် မလုပ်ဆောင်ပါက စထွက်ချိန်တွင် တုန်ခါခြင်း (Judder) ဖြစ်ပေါ်တတ်ပါသည်။'
  },
  {
    brand: 'Nissan',
    gearboxType: 'Xtronic CVT (Jatco JF015E / JF011E) - Note E12, Sylphy, Tiida',
    recommendedOil: 'Nissan Genuine CVT Fluid NS-3 (သို့မဟုတ် NS-2 မော်ဒယ်ဟောင်းများအတွက်)',
    prohibitedOil: 'သာမန် ATF ဆီများ လုံးဝမထည့်ရ!',
    capacityChange: '၃.၅ - ၄.၀ လီတာ',
    totalCapacity: '၇.၂ လီတာ',
    changeInterval: 'ကီလို ၂၀,၀၀၀ မှ ၃၀,၀၀၀ တစ်ကြိမ်',
    checkingMethodMm: 'CVT အပူချိန် ၄၀°C တွင် စစ်ဆေးပါ။ ဆီပန်အောက်ရှိ အဝိုင်းပုံ စက္ကူဆီဇကာ (Cartridge Filter) ပါ အသစ်လဲသင့်သည်။',
    warningMm: 'Note E12 တွင် NS-3 ကိုသာ သုံးရပါမည်။ NS-2 သုံးပါက ပူလီဖိအားကျဆင်းပြီး Limp Mode ကျတတ်သည်။'
  },
  {
    brand: 'Suzuki',
    gearboxType: 'Jatco CVT7 (Wagon R, Spacia, Hustler 660cc)',
    recommendedOil: 'Suzuki CVT Fluid Green 1 / Green 2',
    prohibitedOil: 'ATF ဆီများ လုံးဝမသုံးရ',
    capacityChange: '၂.၆ - ၂.၈ လီတာ',
    totalCapacity: '၅.၆ လီတာ',
    changeInterval: 'ကီလို ၂၀,၀၀၀ တစ်ကြိမ်',
    checkingMethodMm: 'Dipstick HOT အမှတ်အသားဖြင့် စစ်ဆေးပါ။',
    warningMm: 'ဆီလွန်ကဲစွာ မထည့်ပါနှင့်။ ဆီများလွန်းပါက အမြှုပ်ထပြီး ဆီဖိအားကျဆင်းတတ်ပါသည်။'
  }
];
