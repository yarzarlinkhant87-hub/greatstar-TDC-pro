import { DtcItem, ScanScenario } from '../types/diagnostic';

export const DTC_DATABASE: DtcItem[] = [
  // --- TRANSMISSION / GEARBOX CODES ---
  {
    code: 'P0700',
    titleMm: 'Transmission Control System (MIL Request) - ဂီယာထိန်းချုပ်မှုစနစ် ချွတ်ယွင်းချက် မီးလင်းခြင်း',
    titleEn: 'Transmission Control System Malfunction (MIL Request)',
    category: 'Transmission',
    severity: 'high',
    descriptionMm: 'TCM (ဂီယာကွန်ပျူတာ) မှ ဂီယာစနစ်အတွင်း ချွတ်ယွင်းချက်တစ်ခုခု တွေ့ရှိရသဖြင့် အင်ဂျင်ကွန်ပျူတာ (ECM) သို့ Check Engine မီးလင်းရန် သတင်းပို့ထားသော ယေဘုယျကုတ် ဖြစ်သည်။ ဤကုတ်တစ်ခုတည်းဖြင့် ဂီယာပျက်သည်ဟု မဆုံးဖြတ်ဘဲ TCM အောက်ရှိ ဒုတိယမြောက် Sub-code (ဥပမာ- P0750, P0705, P0740) ကို ထပ်မံဖတ်ရှုရန် လိုအပ်ပါသည်။',
    symptomsMm: [
      'ဒက်ရှ်ဘုတ်တွင် Check Engine မီးလင်းနေခြင်း',
      'ကားမောင်းစဉ် ဂီယာပြောင်းလဲမှု အဆင်မပြေခြင်း သို့မဟုတ် ဂီယာ ၃ တွင်သာ ငြိမ်နေခြင်း (Limp Mode / Safe Mode)',
      'ဂီယာပြောင်းချိန် အနည်းငယ် ဒုန်းခနဲ စောင့်တက်ခြင်း'
    ],
    causesMm: [
      'ဂီယာအတွင်း Solenoid Valve များ ချွတ်ယွင်းခြင်း',
      'TCM နှင့် ECM ကြား ဆက်သွယ်ရေး ဝိုင်ယာကြိုး ချွတ်ယွင်းခြင်း',
      'ဂီယာဆီပမာဏ နည်းပါးခြင်း သို့မဟုတ် ဆီအရည်အသွေး ကျဆင်းခြင်း',
      'Valve Body အတွင်း အမှိုက်ပိတ်ဆို့ခြင်း'
    ],
    diagnosisStepsMm: [
      'Scanner တွင် Transmission စနစ် (TCM) သို့ တိုက်ရိုက်ဝင်ရောက်ပြီး သက်ဆိုင်ရာ Sub-code ကို ရှာဖွေဖတ်ရှုပါ။',
      'ဂီယာဆီချောင်း (Dipstick) ဖြင့် ဆီအဆင့်နှင့် အရောင် (အနက်ရောင်/လောင်နံ့) စစ်ဆေးပါ။',
      'TCM ပလပ်ခေါင်းများ ချေးတက်ခြင်း၊ ရေစိုခြင်း သို့မဟုတ် ဝိုင်ယာကြိုးပြတ်ခြင်း ရှိမရှိ စစ်ဆေးပါ။',
      'Sub-code မတွေ့ပါက Battery အနှုတ်ကြိုးကို ၁၀ မိနစ်ဖြုတ်ပြီး Clear Code ပြန်လုပ်ကြည့်ပါ။'
    ],
    emergencyAdviceMm: 'ဂီယာအိုး Safe Mode ကျနေပါက အရှိန်ပြင်းပြင်း မမောင်းပါနှင့်။ အနီးဆုံး ဝပ်ရှော့သို့ ဂီယာ ၃ ဖြင့် ဖြည်းညင်းစွာ မောင်းနှင်သွားနိုင်ပါသည်။',
    gearWiringReference: 'TCM Main Power & CAN-H / CAN-L Communication Lines',
    affectedCarsMm: 'Toyota Probox, Fielder, Insight, Fit, Demio, Bongo, Crown အားလုံး',
    milStatus: true
  },
  {
    code: 'P0705',
    titleMm: 'Transmission Range Sensor Circuit Malfunction (PRNDL Input) - ဂီယာအထိုင်ဆင်ဆာ/ခလုတ် ချွတ်ယွင်းခြင်း',
    titleEn: 'Transmission Range Sensor Circuit Malfunction (PRNDL Input)',
    category: 'Transmission',
    severity: 'medium',
    descriptionMm: 'ဂီယာမောင်းတံ ရွှေ့ပြောင်းသည့် အနေအထား (P, R, N, D, 2, L) ကို ECU/TCM သို့ အချက်ပြပေးပို့သော Neutral Safety Switch (Inhibitor Switch) သို့မဟုတ် Range Sensor ၏ ဝိုင်ယာပတ်လမ်း ချွတ်ယွင်းနေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဂီယာ P သို့မဟုတ် N တွင် စက်နှိုးမရဘဲ ငြိမ်နေခြင်း (Starter မလည်ခြင်း)',
      'ဒက်ရှ်ဘုတ် ဒိုင်ခွက်ပေါ်တွင် P, R, N, D မီးများ မမှန်ကန်ဘဲ ပျောက်နေခြင်း သို့မဟုတ် D မီးမှိတ်တုတ်မှိတ်တုတ် ဖြစ်နေခြင်း',
      'ဂီယာပြောင်းချိန် အထစ်ထစ်ဖြစ်ပြီး ဒုန်းခနဲ ထိုးဆင်းခြင်း',
      'Reverse (R) ထိုးသော်လည်း နောက်မီးနှင့် နောက်ကင်မရာ မပွင့်ခြင်း'
    ],
    causesMm: [
      'ကားအောက်ခြေရှိ Neutral Safety Switch တွင် ရေဝင်ခြင်း သို့မဟုတ် ချေးတက်ခြင်း',
      'Range Sensor ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း သို့မဟုတ် ကြွက်ကိုက်ခြင်း',
      'ဂီယာမောင်းတံ ကြိုး (Shift Cable) လျော့ရဲပြီး ခလုတ်အနေအထား လွဲချော်နေခြင်း',
      'Range Switch အတွင်းပိုင်း Contact အချက်အလက်များ ပွန်းစားခြင်း'
    ],
    diagnosisStepsMm: [
      'ဂီယာအိုးဘေးရှိ Range Switch ပလပ်ခေါင်းကို ဖြုတ်ပြီး ရေဝင်ခြင်း/ချေးတက်ခြင်း စစ်ဆေးပါ။ Contact Cleaner ဖြင့် ဆေးကြောပါ။',
      'မီတာကို အဆက်အသွယ် (Continuity / Ohm) သို့ချိန်ပြီး P, R, N, D တစ်ခုချင်းစီတွင် သက်ဆိုင်ရာ Pin များ အဖွင့်အပိတ် ပုံမှန်ရှိမရှိ တိုင်းပါ။',
      'P နှင့် N အနေအထားတွင် 12V Starter Signal ထွက်မထွက် စစ်ဆေးပါ။',
      'Shift Cable ချိန်ညှိမှု မလွဲစေရန် စစ်ဆေးပြီး အနေအထား ပြန်ညှိပါ။'
    ],
    emergencyAdviceMm: 'စက်နှိုးမရပါက ဂီယာကို N (Neutral) သို့ ရွှေ့ပြီး စက်နှိုးကြည့်ပါ။ အရေးပေါ် ဆက်လက်မောင်းနှင်နိုင်သော်လည်း ဂီယာအဝင်ကြမ်းနိုင်ပါသည်။',
    gearWiringReference: 'Neutral Position Switch Pin 1-9 (Inhibitor Connector)',
    affectedCarsMm: 'Honda Fit (GD1/GE6), Toyota Probox, Premio, Nissan Note, Mazda Demio',
    milStatus: true
  },
  {
    code: 'P0750',
    titleMm: 'Shift Solenoid A (Solenoid 1) Malfunction - ဂီယာအမှတ် (၁) ဆလိုးနွိုက် ချွတ်ယွင်းခြင်း',
    titleEn: 'Shift Solenoid "A" Malfunction',
    category: 'Transmission',
    severity: 'high',
    descriptionMm: 'အော်တိုဂီယာအိုးအတွင်း ဂီယာနံပါတ် (၁) နှင့် (၂) သို့ ကူးပြောင်းပေးသော Shift Solenoid No. 1 (S1) ၏ လျှပ်စစ်ကွိုင် ပြတ်တောက်ခြင်း၊ ရှော့ခ်ဖြစ်ခြင်း သို့မဟုတ် ဟိုက်ဒရောလစ် အဆို့ရှင် ပိတ်ဆို့နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဂီယာ ၁ မှ ဂီယာ ၂ သို့ မပြောင်းဘဲ စက်သံကျယ်လောင်နေခြင်း (RPM မြင့်တက်ခြင်း)',
      'ဂီယာပြောင်းချိန် အလွန်ပြင်းထန်စွာ ဆောင့်တက်ခြင်း (Shift Shock)',
      'ကားစထွက်ချိန်တွင် အားမရှိဘဲ ဂီယာ ၃ ဖြင့် စထွက်နေသကဲ့သို့ လေးလံနေခြင်း'
    ],
    causesMm: [
      'Shift Solenoid No. 1 (S1) အတွင်း လျှပ်စစ်ကွိုင် ပြတ်တောက်ခြင်း (Open Loop)',
      'Valve Body ပလပ်ခေါင်းမှ Pin 3 ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း သို့မဟုတ် မြေစိုက်ကြိုး ချို့ယွင်းခြင်း',
      'TCM ကွန်ပျူတာအတွင်း Solenoid Driver IC လောင်ကျွမ်းခြင်း',
      'ဂီယာဆီမလဲသည်မှာ ကြာသဖြင့် သံမှုန့်များ ကွိုင်အတွင်း ပိတ်မိနေခြင်း'
    ],
    diagnosisStepsMm: [
      'ဂီယာအိုး Valve Body ပလပ်ခေါင်းကို ဖြုတ်ပြီး Multimeter ဖြင့် Pin 3 နှင့် Ground ကြား ခုခံမှု Ohm တိုင်းပါ။ (စံနှုန်း: 11 - 15 Ω @ 20°C)',
      'အကယ်၍ O.L (Infinite) ပြပါက Solenoid ကွိုင်ပြတ်နေသဖြင့် ဆီပန်ဖြုတ်၍ Solenoid အသစ်လဲပါ။',
      'ခုခံမှု ပုံမှန်ရှိပါက TCM Connector မှ ပလပ်ခေါင်းအထိ ဝိုင်ယာလိုင်း ကြိုးပြတ်/ရှော့ စစ်ဆေးပါ။',
      '12V တိုက်ရိုက်ပေးပြီး ကလစ်-ကလစ် ဟု Solenoid အဖွင့်အပိတ် အသံမြည်မမြည် စမ်းသပ်ပါ။'
    ],
    emergencyAdviceMm: 'ဂီယာအချိုး မပြောင်းလဲနိုင်သဖြင့် အဝေးပြေးလမ်းတွင် အရှိန်ပြင်းပြင်း မောင်းပါက ဂီယာအိုး အပူလွန်ကဲ ပျက်စီးနိုင်ပါသည်။ မြို့တွင်း ဖြည်းဖြည်းမောင်း၍ ဝပ်ရှော့ပြပါ။',
    gearWiringReference: 'U340E Valve Body Connector Pin 3 (S1 - Violet/White Wire)',
    solenoidSpecs: [
      {
        name: 'Shift Solenoid No. 1 (S1)',
        normalResistance: '11.0 - 15.0 Ω',
        pinNumber: 'Pin 3',
        wireColor: 'ခရမ်းရောင်/အဖြူလိုင်း (Violet/White)'
      }
    ],
    affectedCarsMm: 'Toyota Probox 1NZ-FE, Succeed, Vitz, Belta, Premio 1.5, Passo',
    milStatus: true
  },
  {
    code: 'P0755',
    titleMm: 'Shift Solenoid B (Solenoid 2) Malfunction - ဂီယာအမှတ် (၂) ဆလိုးနွိုက် ချွတ်ယွင်းခြင်း',
    titleEn: 'Shift Solenoid "B" Malfunction',
    category: 'Transmission',
    severity: 'high',
    descriptionMm: 'ဂီယာ ၃ နှင့် ၄ သို့ တက်ရန်နှင့် ဆင်းရန် ထိန်းချုပ်ပေးသော Shift Solenoid No. 2 (S2) ၏ ဝိုင်ယာပတ်လမ်း သို့မဟုတ် Solenoid ကိုယ်တိုင် ချွတ်ယွင်းနေခြင်း ဖြစ်သည်။ Probox များတွင် အလွန်အဖြစ်များသည်။',
    symptomsMm: [
      'ကားမောင်းနေစဉ် ဂီယာ ၃ သို့ လုံးဝမဝင်တော့ဘဲ ဂီယာ ၂ တွင်သာ တစ်နေခြင်း',
      'အဝေးပြေးလမ်းတွင် မောင်းပါက 60 km/h ကျော်လျှင် စက်သံ အလွန်ကျယ်နေခြင်း (Overdrive မဝင်ခြင်း)',
      'O/D OFF မီးလင်းနေခြင်း သို့မဟုတ် Check Engine မီး လင်းလာခြင်း'
    ],
    causesMm: [
      'Shift Solenoid No. 2 (S2) အတွင်းပိုင်း ကွိုင်အပူလောင်ကျွမ်းခြင်း',
      'Valve Body ပလပ် Pin 4 ဝိုင်ယာကြိုး အခွံပေါက်၍ ဘော်ဒီနှင့် ရှော့ခ်ဖြစ်နေခြင်း',
      'ဂီယာဆီပူပြင်းလွန်းသဖြင့် Solenoid အတွင်းရှိ ရာဘာ O-ring ပျက်စီးပြီး ဆီယိုစိမ့်ခြင်း'
    ],
    diagnosisStepsMm: [
      'Digital Multimeter ကို Ohm (Ω) ရွေးချယ်ပြီး Valve Body Plug Pin 4 နှင့် Ground ကြား ခုခံမှု တိုင်းပါ။ (စံနှုန်း: 11 - 15 Ω)',
      'ခုခံမှု 0.1 Ω (Short) သို့မဟုတ် O.L (Open) ဖြစ်နေပါက Solenoid S2 ပျက်နေပြီ ဖြစ်သည်။',
      'ဂီယာအောက်ဆီပန် (Oil Pan) ကို ဖြုတ်၍ Solenoid 2 အသစ် လဲလှယ်ပါ။',
      'ATF ဆီအသစ် (Toyota Type T-IV သို့မဟုတ် WS) ပြန်လည်ဖြည့်သွင်းပါ။'
    ],
    emergencyAdviceMm: 'ဂီယာ ၂ တွင်သာ တစ်နေသဖြင့် RPM မြင့်တက်ပြီး ဆီအလွန်စားပါမည်။ အရှိန် 40-50 km/h ထက် ပိုမမောင်းဘဲ အနီးဆုံး ဝပ်ရှော့သို့ သွားပါ။',
    gearWiringReference: 'U340E Valve Body Connector Pin 4 (S2 - Green/Yellow Wire)',
    solenoidSpecs: [
      {
        name: 'Shift Solenoid No. 2 (S2)',
        normalResistance: '11.0 - 15.0 Ω',
        pinNumber: 'Pin 4',
        wireColor: 'အစိမ်းရောင်/အဝါလိုင်း (Green/Yellow)'
      }
    ],
    affectedCarsMm: 'Toyota Probox (NCP51), Vitz, Belta, Corolla NZE121',
    milStatus: true
  },
  {
    code: 'P0746',
    titleMm: 'Pressure Control Solenoid A Performance / Stuck Off - ပင်မဆီဖိအား ဆလိုးနွိုက် ညပ်နေခြင်း/ဖိအားမထိန်းနိုင်ခြင်း',
    titleEn: 'Pressure Control Solenoid "A" Performance / Stuck Off',
    category: 'Transmission',
    severity: 'critical',
    descriptionMm: 'CVT သို့မဟုတ် အော်တိုဂီယာအိုးအတွင်းရှိ Primary Pulley နှင့် Line Pressure ကို ထိန်းချုပ်ပေးသော ပင်မ Pressure Solenoid (SL1 / Line Pressure Solenoid) သည် ကွန်ပျူတာ၏ ညွှန်ကြားချက်အတိုင်း ဆီဖိအား မထုတ်ပေးနိုင်ဘဲ ညပ်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ကားစထွက်ချိန်တွင် တဆတ်ဆတ် တုန်ခါခြင်း (Judder / Shudder)',
      'လီဗာနင်းသော်လည်း ကားအရှိန်ချက်ချင်းမတက်ဘဲ အချိန်ဆွဲပြီးမှ ဝုန်းခနဲ ထွက်ခြင်း',
      'CVT သံခါးပတ် (Steel Belt) ချော်သံ ထွက်ပေါ်ခြင်း',
      'ကုန်းတက်တွင် ကားရုန်းအား လုံးဝမရှိတော့ခြင်း'
    ],
    causesMm: [
      'CVT ဆီ မလဲသည်မှာ ကြာမြင့်သဖြင့် အမှုန်အမွှားများ Solenoid Spool Valve တွင် ပိတ်ဆို့ညပ်နေခြင်း',
      'CVT ဆီအမှား (သာမန် ATF ဆီ) ထည့်မိခြင်းကြောင့် ဆီဖိအားကျဆင်းခြင်း',
      'Line Pressure Solenoid ကွိုင်အတွင်းပိုင်း ခုခံမှု မူမမှန်ခြင်း (စံနှုန်း: 5.0 - 5.6 Ω)',
      'TCM မှ ပို့သော PWM Duty Cycle Signal ဝိုင်ယာလိုင်း ချွတ်ယွင်းခြင်း'
    ],
    diagnosisStepsMm: [
      'CVT ဆီ အရောင်နှင့် အနံ့ စစ်ဆေးပါ။ မဲနက်နေပါက ဆီနှင့် ဆီဇကာ (Filter) အမြန်လဲပါ။',
      'Valve Body ပလပ်ခေါင်းရှိ SL1 Solenoid Pin ၏ ခုခံမှု (Ohm) ကို တိုင်းပါ။ ပုံမှန်တန်ဖိုးမှာ 5.0 - 5.6 Ω ဖြစ်ရပါမည်။',
      'Scanner Live Data တွင် Target Line Pressure နှင့် Actual Line Pressure ကွာဟချက်ကို စစ်ဆေးပါ။',
      'ဆလိုးနွိုက် ပိတ်ဆို့နေပါက Valve Body ကို ဖြုတ်ဆေးပြီး Solenoid အသစ်လဲပါ။'
    ],
    emergencyAdviceMm: 'အလွန်အရေးကြီးပါသည်! ဆက်လက်မောင်းနှင်ပါက CVT သံခါးပတ် ပူလီပေါ်တွင် ပွတ်တိုက်ပျက်စီးပြီး ဂီယာအိုးတစ်လုံးလုံး အသစ်လဲရနိုင်ပါသည်။ ချက်ချင်းရပ်ပြီး စစ်ဆေးပါ။',
    gearWiringReference: 'K310 CVT Valve Body Pin 1 (SL1 - Yellow/Black Wire)',
    solenoidSpecs: [
      {
        name: 'Primary Pressure Solenoid (SL1)',
        normalResistance: '5.0 - 5.6 Ω',
        pinNumber: 'Pin 1',
        wireColor: 'အဝါရောင်/အနက်လိုင်း (Yellow/Black)'
      }
    ],
    affectedCarsMm: 'Toyota Fielder (NZE141/161), Axio, Wish (ZGE20), Nissan Note (JF015E)',
    milStatus: true
  },
  {
    code: 'P0770',
    titleMm: 'Shift Solenoid E (Lock-Up Solenoid SL) Malfunction - လော့ခ်အပ်ဆလိုးနွိုက် ချွတ်ယွင်းခြင်း',
    titleEn: 'Shift Solenoid "E" (Lock-Up Solenoid SL) Malfunction',
    category: 'Transmission',
    severity: 'medium',
    descriptionMm: 'Torque Converter Clutch (TCC) ကို တိုက်ရိုက်ကလပ်ကပ်ပေးသော Lock-Up Solenoid (SL) ၏ ဝိုင်ယာ သို့မဟုတ် ဘား ချွတ်ယွင်းနေခြင်း ဖြစ်သည်။ မြန်နှုန်းမြင့်မောင်းစဉ် အင်ဂျင်နှင့် ဂီယာအချိုးကို ၁:၁ တိုက်ရိုက် ချိတ်ဆက်မပေးနိုင်တော့ပါ။',
    symptomsMm: [
      'အဝေးပြေးလမ်းတွင် မောင်းနှင်စဉ် ဆီစားအလွန်များလာခြင်း (RPM ပုံမှန်ထက် မြင့်နေခြင်း)',
      'ကားရပ်ရန် ဘရိတ်အုပ်လိုက်ချိန်တွင် ကားစက်သေချင်သကဲ့သို့ တုန်ခါခြင်း',
      'ဂီယာ ၄ သို့ ရောက်သော်လည်း Lock-up မကပ်ခြင်း'
    ],
    causesMm: [
      'Lock-Up Solenoid ကွိုင်လောင်ကျွမ်းခြင်း (စံနှုန်း: 11 - 15 Ω)',
      'Torque Converter Clutch ပွန်းစားပြီး ဆီလမ်းကြောင်း ပိတ်ဆို့ခြင်း',
      'TCM Lock-up Signal Wire ပြတ်တောက်ခြင်း'
    ],
    diagnosisStepsMm: [
      'Valve Body ပလပ်ခေါင်းရှိ SL Pin ၏ Ohm တန်ဖိုးကို တိုင်းပါ။',
      '12V တိုက်ရိုက်ကျွေးပြီး Solenoid ဖွင့်ပိတ် အသံ စစ်ဆေးပါ။',
      'Torque Converter Clutch Slip Speed ကို Live Data တွင် စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'မြို့တွင်းတွင် သာမန်အတိုင်း မောင်းနှင်နိုင်ပါသည်။ သို့သော် အဝေးပြေးတွင် ဆီစားများမည်ဖြစ်ပြီး အမြန်ဆုံး ပြုပြင်သင့်ပါသည်။',
    gearWiringReference: 'U340E Valve Body Connector Pin 5 (SL Solenoid)',
    affectedCarsMm: 'Toyota Probox, Premio, Corolla, Camry',
    milStatus: true
  },
  {
    code: 'P0841',
    titleMm: 'Transmission Fluid Pressure Sensor/Switch "A" Circuit Range/Performance - ဂီယာဆီဖိအားဆင်ဆာ အချက်ပြလွဲမှားခြင်း',
    titleEn: 'Transmission Fluid Pressure Sensor/Switch "A" Circuit Range/Performance',
    category: 'Transmission',
    severity: 'high',
    descriptionMm: 'CVT သို့မဟုတ် အော်တိုဂီယာအိုးအတွင်း ဆီဖိအားအခြေအနေကို စောင့်ကြည့်တိုင်းတာသော Fluid Pressure Sensor ၏ ဗို့အားအချက်ပြမှုသည် ပုံမှန်သတ်မှတ်ဘောင်အတွင်း မရှိဘဲ လွဲချော်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဂီယာပြောင်းရွှေ့မှု မမှန်ကန်ခြင်း၊ လီဗာနင်းသလောက် ကားမလိုက်ခြင်း',
      'CVT ဂီယာသည် အမြင့်ဆုံးအချိုး (High Ratio) သို့ မတက်နိုင်ဘဲ အရှိန် 60 km/h တွင် တစ်နေခြင်း',
      'Check Engine မီးနှင့်အတူ Transmission Warning မီးလင်းခြင်း'
    ],
    causesMm: [
      'ဆီဖိအားဆင်ဆာ (Pressure Sensor) ကိုယ်တိုင် ပျက်စီးခြင်း သို့မဟုတ် ချေးတက်ခြင်း',
      'ဆင်ဆာသို့ ပို့သော 5V Reference Voltage လိုင်း သို့မဟုတ် Ground လိုင်း ချို့ယွင်းခြင်း',
      'ဂီယာဆီပန့် (Oil Pump) စွမ်းဆောင်ရည် ကျဆင်းသဖြင့် တကယ်တမ်း ဆီဖိအား အမှန်တကယ် ကျနေခြင်း'
    ],
    diagnosisStepsMm: [
      'ဆင်ဆာပလပ်ရှိ 5V Reference ဗို့အား၊ Signal ဗို့အား (0.5V - 4.5V) နှင့် Ground ကို Multimeter ဖြင့် တိုင်းပါ။',
      'ဂီယာဆီ အဆင့်နှင့် ဖိအားကို Gauge မီတာဖြင့် တိုက်ရိုက်တိုင်းတာစစ်ဆေးပါ။',
      'ဝိုင်ယာကြိုး ပွန်းပဲ့ပြတ်တောက်မှု မရှိပါက Pressure Sensor အသစ်လဲပါ။'
    ],
    emergencyAdviceMm: 'ဆီဖိအားမမှန်ပါက ဂီယာအိုးတွင်း ကလပ်ပြားများ လောင်ကျွမ်းနိုင်သဖြင့် အဝေးပြေးခရီးရှည် မမောင်းသင့်ပါ။',
    gearWiringReference: 'CVT Pressure Sensor Pin 1 (5V Ref), Pin 2 (Signal), Pin 3 (GND)',
    affectedCarsMm: 'Nissan Note (E12), Toyota Fielder CVT, Honda Fit CVT, Suzuki Wagon R',
    milStatus: true
  },

  // --- ENGINE / SENSOR CODES ---
  {
    code: 'P0011',
    titleMm: 'Camshaft Position "A" - Timing Over-Advanced or System Performance (Bank 1) - ဗားတိုင်မင် အချိန်လွန်ကဲစောနေခြင်း (VVT စနစ်)',
    titleEn: 'Camshaft Position "A" - Timing Over-Advanced or System Performance (Bank 1)',
    category: 'Engine',
    severity: 'high',
    descriptionMm: 'အင်ဂျင်၏ Variable Valve Timing (VVT-i / i-VTEC) စနစ်တွင် Camshaft ၏ အဖွင့်အပိတ် အချိန်သည် သတ်မှတ်ထားသည်ထက် စောလွန်းနေခြင်း သို့မဟုတ် VVT ဆီဆလိုးနွိုက် (OCV) ညပ်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'အင်ဂျင်စက်သံ မမှန်ခြင်း၊ မနက်စက်နှိုးချိန် စက်တုန်ခါခြင်း',
      'ဆီစား အလွန်များလာခြင်းနှင့် ကားအရှိန်တက်ရာတွင် အားမရှိခြင်း',
      'Idle (စက်ရပ်ထားချိန်) တွင် စက်သေချင်သကဲ့သို့ ဖြစ်ခြင်း'
    ],
    causesMm: [
      'အင်ဂျင်ဝိုင်ဆီ မလဲသည်မှာ ကြာသဖြင့် ချေး (Sludge) များပြီး VVT OCV ဆလိုးနွိုက် ဆီပေါက် ပိတ်ဆို့ခြင်း',
      'VVT Oil Control Valve (OCV) ကွိုင် ပျက်စီးခြင်း သို့မဟုတ် ညပ်နေခြင်း',
      'Timing Chain (တိုင်မင်ကြိုး) လျော့ရဲပြီး သွားကျော်ခြင်း',
      'Camshaft Position Sensor အချက်ပြ မှားယွင်းခြင်း'
    ],
    diagnosisStepsMm: [
      'အင်ဂျင်ဝိုင်အဆင့်နှင့် အရည်အသွေးကို စစ်ဆေးပါ။ မဲညစ်နေပါက အင်ဂျင်ဝိုင်နှင့် ဆီဇကာ အမြန်လဲပါ။',
      'VVT OCV ဆလိုးနွိုက်ကို ဖြုတ်ပြီး ဘရိတ်ကလီနာဖြင့် ဆေးကြောပါ။ 12V ကျွေးပြီး ကွိုင်ပွင့်မပွင့် စမ်းပါ။',
      'Camshaft Sensor ၏ ပလပ်ခေါင်းနှင့် ဝိုင်ယာလိုင်း စစ်ဆေးပါ။',
      'တိုင်မင်သံကြိုး အသံမြည်နေပါက တိုင်မင်အထိုင် လျော့ရဲမှု စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'အင်ဂျင်ဝိုင် လုံလောက်စွာ ရှိပါက အနီးဆုံးဝပ်ရှော့သို့ ဖြည်းညင်းစွာ မောင်းနိုင်ပါသည်။ အကယ်၍ စက်သံပြင်းထန်စွာ မြည်နေပါက စက်ချက်ချင်းသတ်ပါ။',
    affectedCarsMm: 'Toyota Probox 1NZ, Fielder, Wish 1ZZ/2ZR, Honda Fit L13A/L15A, Nissan Note HR12',
    milStatus: true
  },
  {
    code: 'P0101',
    titleMm: 'Mass or Volume Air Flow (MAF) Circuit Range/Performance - လေဆင်ဆာ အချက်ပြ လွဲမှားနေခြင်း',
    titleEn: 'Mass or Volume Air Flow (MAF) Circuit Range/Performance',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'အင်ဂျင်အတွင်းသို့ ဝင်ရောက်လာသော လေထုထည်ပမာဏကို တိုင်းတာပေးသည့် MAF Sensor (Mass Air Flow Sensor) ၏ အချက်ပြမှုသည် ပုံမှန်ဘောင်အတွင်း မရှိဘဲ လွဲချော်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'အင်ဂျင်စက်နှိုးရ ခက်ခဲခြင်း သို့မဟုတ် စက်နှိုးပြီးလျှင် ချက်ချင်းပြန်သေသွားခြင်း',
      'လီဗာနင်းလိုက်ချိန်တွင် တုံ့ခနဲဖြစ်ပြီး အရှိန်မတက်ခြင်း (Hesitation / Bogging down)',
      'အိတ်ဇောမှ မီးခိုးမည်းများ ထွက်ပြီး ဓာတ်ဆီအနံ့ နံခြင်း'
    ],
    causesMm: [
      'MAF လေဆင်ဆာ၏ ပလက်တီနမ်ဝိုင်ယာကြိုးမျှင်တွင် ဖုန်နှင့် ချေးများ ပိတ်ဆို့နေခြင်း',
      'လေစစ် (Air Filter) အလွန်ညစ်ပတ်နေခြင်း',
      'MAF Sensor နှင့် Throttle Body ကြားရှိ လေပိုက် ရာဘာကွဲအက်၍ လေခိုးဝင်နေခြင်း',
      'MAF Sensor ဝိုင်ယာကြိုးပြတ်ခြင်း သို့မဟုတ် ဆင်ဆာကိုယ်တိုင် ပျက်စီးခြင်း'
    ],
    diagnosisStepsMm: [
      'Air Filter ဘူးအဖုံးကို ဖွင့်၍ MAF Sensor ကို ဖြုတ်ကာ သီးသန့် MAF Cleaner စပရေးဖြင့် ညင်သာစွာ ဆေးကြောပါ။ (လက်နှင့် မထိရပါ)',
      'လေပိုက်ကြီးများ ကွဲအက်ပေါက်ပြဲမှု ရှိမရှိ စစ်ဆေးပါ။',
      'Scanner Live Data တွင် Idle ထားချိန် MAF တန်ဖိုး 1.5 - 2.5 g/s ဝန်းကျင် ရှိမရှိ စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'အနီးဆုံး ဝပ်ရှော့အထိ သာမန်အတိုင်း မောင်းနှင်နိုင်ပါသည်။ လီဗာကို ဆောင့်မနင်းဘဲ ဖြည်းညင်းစွာ နင်းပါ။',
    affectedCarsMm: 'Toyota, Honda, Nissan, Suzuki, Mazda, Subaru အားလုံး',
    milStatus: true
  },
  {
    code: 'P0171',
    titleMm: 'System Too Lean (Bank 1) - ဓာတ်ဆီနည်းပြီး လေခိုးများနေခြင်း',
    titleEn: 'System Too Lean (Bank 1)',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'အင်ဂျင်အတွင်း လေနှင့် ဓာတ်ဆီ ရောစပ်မှု အချိုးတွင် ဓာတ်ဆီပမာဏ နည်းပါးပြီး လေပမာဏ အလွန်များပြားနေကြောင်း အောက်စီဂျင်ဆင်ဆာမှ အချက်ပြခြင်း ဖြစ်သည်။ မြန်မာပြည်တွင် အလွန်အဖြစ်များသော အင်ဂျင်ကုတ် ဖြစ်သည်။',
    symptomsMm: [
      'မနက်ပိုင်း စက်အေးချိန်တွင် စက်နှိုးရခက်ပြီး စက်တုန်ခါခြင်း',
      'ကားမောင်းစဉ် အရှိန်တက်ရန် လီဗာနင်းသော်လည်း ကားအဆွဲအရုန်း အားမရှိခြင်း',
      'ဆီစား သိသိသာသာ များလာခြင်း',
      'အိတ်ဇောမှ ပေါက်ကွဲသံ အနည်းငယ် ထွက်ပေါ်တတ်ခြင်း (Backfire)'
    ],
    causesMm: [
      'Intake Manifold လေပိုက်လိုင်းများ၊ PCV ပိုက်များ ကွဲအက်ပေါက်ပြဲ၍ လေခိုး (Vacuum Leak) ဝင်နေခြင်း',
      'Air Flow Sensor (MAF Sensor) တွင် ဖုန်နှင့် အမှိုက်များ ပိတ်ဆို့နေခြင်း',
      'ဓာတ်ဆီပန့် (Fuel Pump) ဖိအားကျဆင်းခြင်း သို့မဟုတ် ဓာတ်ဆီဇကာ (Fuel Filter) ပိတ်ဆို့ခြင်း',
      'ဓာတ်ဆီဘား (Fuel Injector) များ အပေါက်ပိတ်ဆို့နေခြင်း'
    ],
    diagnosisStepsMm: [
      'Carb Cleaner သို့မဟုတ် မီးခိုးထုတ်စက် (Smoke Tester) ဖြင့် လေပိုက်လိုင်းများနှင့် Manifold Gasket တစ်ဝိုက် လေခိုးဝင်ပေါက် ရှာဖွေပါ။',
      'MAF လေဆင်ဆာကို သီးသန့် Cleaner စပရေးဖြင့် ဆေးကြောပါ။',
      'Fuel Pressure Gauge ဖြင့် ဓာတ်ဆီဖိအား (3.0 - 3.5 bar / 45-50 psi) ရှိမရှိ တိုင်းပါ။',
      'Scanner Live Data တွင် Short Term Fuel Trim (STFT) နှင့် Long Term Fuel Trim (LTFT) ပေါင်းလဒ် +20% ကျော်နေပါက လေခိုးသေချာပါသည်။'
    ],
    emergencyAdviceMm: 'ဝပ်ရှော့သို့ ဖြည်းညင်းစွာ မောင်းနှင်နိုင်ပါသည်။ သို့သော် အချိန်ကြာမြင့်စွာ မပြင်ဘဲ မောင်းပါက ပစ္စတင်နှင့် အဆို့ရှင်များ အပူလောင်ကျွမ်း ပျက်စီးနိုင်ပါသည်။',
    affectedCarsMm: 'Toyota Probox 1NZ, Fielder, Honda Fit, Insight, Nissan Note, Suzuki Wagon R',
    milStatus: true
  },
  {
    code: 'P0172',
    titleMm: 'System Too Rich (Bank 1) - ဓာတ်ဆီလွန်ကဲပြီး လေနည်းနေခြင်း',
    titleEn: 'System Too Rich (Bank 1)',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'အင်ဂျင်ဆလင်ဒါအတွင်းသို့ ဓာတ်ဆီများ လွန်ကဲစွာ ဝင်ရောက်နေပြီး လေပမာဏ နည်းနေခြင်း ဖြစ်သည်။ ဆီမီးလောင်ကျွမ်းမှု မပြည့်စုံဘဲ ဆီစားအလွန်များစေသည်။',
    symptomsMm: [
      'အိတ်ဇောမှ မီးခိုးမည်းများ ထွက်ပြီး အစိမ်းနံ့ (ဓာတ်ဆီနံ့) ပြင်းထန်စွာ နံခြင်း',
      'ဆီစား အလွန်အမင်း များပြားလာခြင်း',
      'ပလပ် (Spark Plug) များ မဲနက်ချေးတက်ပြီး မီးကူးအားနည်းခြင်း'
    ],
    causesMm: [
      'ဓာတ်ဆီထိုးအပ် (Fuel Injector) အဆို့ရှင် ညပ်ပြီး ဆီအဆက်မပြတ် ယိုစီးနေခြင်း',
      'Air Filter (လေစစ်) အလွန်အမင်း ညစ်ပတ်ပိတ်ဆို့နေခြင်း',
      'Mass Air Flow (MAF) Sensor မှားယွင်းစွာ ဖတ်နေခြင်း',
      'Oxygen Sensor ချို့ယွင်းနေခြင်း'
    ],
    diagnosisStepsMm: [
      'Air Filter အသစ်လဲပါ။',
      'Spark Plug များကို ဖြုတ်စစ်ပါ (မဲနက်နေသော ဆလင်ဒါရှိ Injector ကို စစ်ဆေးပါ)။',
      'Fuel Pressure Regulator ကို စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'အိတ်ဇော Catalytic Converter ကို မီးခိုးမည်းများ ပိတ်ဆို့စေနိုင်သဖြင့် အမြန်ဆုံး စစ်ဆေးပြင်ဆင်သင့်ပါသည်။',
    affectedCarsMm: 'Toyota, Honda, Nissan, Mazda, Mitsubishi အားလုံး',
    milStatus: true
  },
  {
    code: 'P0300',
    titleMm: 'Random/Multiple Cylinder Misfire Detected - ဆလင်ဒါမျိုးစုံတွင် မီးမကူး/မီးလွတ်ခြင်း',
    titleEn: 'Random/Multiple Cylinder Misfire Detected',
    category: 'Engine',
    severity: 'critical',
    descriptionMm: 'အင်ဂျင်၏ ဆလင်ဒါတစ်ခု သို့မဟုတ် အများအပြားတွင် ပလပ်မီးကူးမှု မမှန်ဘဲ မီးလွတ် (Misfire) ဖြစ်နေခြင်း ဖြစ်သည်။ Check Engine မီး မှိတ်တုတ်မှိတ်တုတ် (Blinking) ဖြစ်နေပါက အလွန်အန္တရာယ်ကြီးပါသည်။',
    symptomsMm: [
      'ဒက်ရှ်ဘုတ်ရှိ Check Engine မီးသည် မှိတ်တုတ်မှိတ်တုတ် အဆက်မပြတ် လင်းနေခြင်း',
      'ကားတစ်စီးလုံး ပြင်းထန်စွာ တုန်ခါနေခြင်း (၃ ဘီးဆိုင်ကယ် စက်သံကဲ့သို့ ဖြစ်နေခြင်း)',
      'ကားအရှိန်တက်ရန် လီဗာနင်းမရဘဲ စက်သေချင်သကဲ့သို့ ဖြစ်ခြင်း'
    ],
    causesMm: [
      'Ignition Coil (မီးကွိုင်) တစ်ခု သို့မဟုတ် နှစ်ခု လောင်ကျွမ်းပျက်စီးခြင်း',
      'Spark Plug (ပလပ်ခေါင်း) များ အဟောင်းဖြစ်ပြီး မီးကွာဟချက် (Gap) ကြီးနေခြင်း',
      'ဓာတ်ဆီဘား Injector ဆီမဖြန်းနိုင်ခြင်း',
      'ဆလင်ဒါအတွင်း လေဖိအား (Compression) ကျဆင်းခြင်း'
    ],
    diagnosisStepsMm: [
      'အင်ဂျင်စက်နှိုးထားစဉ် မီးကွိုင်ပလပ်များကို တစ်လုံးချင်း ဆွဲဖြုတ်ကြည့်ပါ။ စက်သံမပြောင်းလဲသော ကွိုင်သည် ပျက်နေသောကွိုင် ဖြစ်သည်။',
      'ပလပ်ခေါင်းများကို ဖြုတ်ပြီး ချေးတက်ခြင်း၊ ဆီစိုနေခြင်း ရှိမရှိ စစ်ဆေးပါ။',
      'မီးကွိုင်သို့ ရောက်သော 12V Power Line နှင့် Pulse Signal ကို စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'သတိပြုရန်: Check Engine မီး မှိတ်တုတ်မှိတ်တုတ် ဖြစ်နေပါက မီးမလောင်သော ဓာတ်ဆီများ အိတ်ဇောသို့ ရောက်ပြီး Catalytic Converter မီးလောင်ပေါက်ကွဲနိုင်ပါသည်။ ကားကို ချက်ချင်းဘေးချရပ်ပါ။',
    affectedCarsMm: 'Toyota Probox, Fielder, Insight, Fit, Demio, Swift, Bongo',
    milStatus: true
  },
  {
    code: 'P0301',
    titleMm: 'Cylinder 1 Misfire Detected - ဆလင်ဒါ အမှတ် (၁) တွင် မီးမကူးခြင်း',
    titleEn: 'Cylinder 1 Misfire Detected',
    category: 'Engine',
    severity: 'high',
    descriptionMm: 'အင်ဂျင်၏ နံပါတ် ၁ ဆလင်ဒါတွင် ပလပ်မီးမကူးဘဲ စက်တုန်ခါနေခြင်း ဖြစ်သည်။',
    symptomsMm: ['ကားစက်နှိုးထားစဉ် တုန်ခါခြင်း', 'အဆွဲအရုန်းကျဆင်းခြင်း', 'အိတ်ဇောသံ တဖောက်ဖောက်မြည်ခြင်း'],
    causesMm: ['နံပါတ် ၁ မီးကွိုင် (Ignition Coil 1) ပျက်စီးခြင်း', 'နံပါတ် ၁ ပလပ် ပျက်ခြင်း', 'နံပါတ် ၁ Injector ဆီမဖြန်းခြင်း'],
    diagnosisStepsMm: [
      'နံပါတ် ၁ မီးကွိုင်ကို နံပါတ် ၂ သို့ ရွှေ့တပ်ကြည့်ပါ။ ကုတ်သည် P0302 သို့ ပြောင်းသွားပါက မီးကွိုင်သေချာပေါက် ပျက်နေခြင်း ဖြစ်သည်။',
      'ပလပ်ခေါင်း အသစ်လဲပါ။'
    ],
    emergencyAdviceMm: 'အဝေးပြေး မောင်းနှင်ခြင်း မပြုပါနှင့်။ အနီးဆုံး ဝပ်ရှော့သို့ ဖြည်းညင်းစွာ သွားရောက်ပါ။',
    affectedCarsMm: 'ကားအမျိုးအစား အားလုံး',
    milStatus: true
  },
  {
    code: 'P0335',
    titleMm: 'Crankshaft Position Sensor "A" Circuit - ကရိုင်းဆင်ဆာ (CKP) ဝိုင်ယာပတ်လမ်း ချွတ်ယွင်းခြင်း',
    titleEn: 'Crankshaft Position Sensor "A" Circuit Malfunction',
    category: 'Engine',
    severity: 'critical',
    descriptionMm: 'အင်ဂျင်၏ ပစ္စတင်နှင့် ကရိုင်းရှပ် လည်ပတ်မှု အနေအထားကို ECU သို့ အဓိက အချက်ပြပေးသော Crankshaft Position Sensor (CKP) ၏ အချက်ပြမှု ပြတ်တောက်နေခြင်း ဖြစ်သည်။ ဤဆင်ဆာ မရှိပါက အင်ဂျင်သည် မီးနှင့်ဆီကို မည်သည့်အချိန် ဖြန်းရမည် မသိတော့သဖြင့် စက်လုံးဝ နှိုးမရတော့ပါ။',
    symptomsMm: [
      'စက်နှိုးမော်တာ (Starter) ပုံမှန်လည်သော်လည်း အင်ဂျင် စက်လုံးဝ နှိုးမရခြင်း (Crank No Start)',
      'ကားမောင်းနေစဉ် ရုတ်တရက် အင်ဂျင်စက်သေသွားခြင်း',
      'ဒိုင်ခွက်ပေါ်ရှိ RPM လက်တံ လုံးဝမတက်ခြင်း'
    ],
    causesMm: [
      'Crankshaft Sensor အတွင်းပိုင်း ကွိုင်ပြတ်တောက်ခြင်း (အင်ဂျင်ပူလာပါက ရပ်တန့်တတ်သည်)',
      'ဆင်ဆာဝိုင်ယာကြိုး အိတ်ဇောပိုက်နှင့် ထိပြီး အရည်ပျော်ပြတ်တောက်ခြင်း',
      'ဆင်ဆာထိပ်ဖျားတွင် သံမှုန့်များ ချေးတက်ဖုံးလွှမ်းနေခြင်း'
    ],
    diagnosisStepsMm: [
      'ကရိုင်းဆင်ဆာ ပလပ်ခေါင်းကို ဖြုတ်ပြီး Multimeter ဖြင့် ကွိုင်ခုခံမှု Ohm တိုင်းပါ။ (စံနှုန်း: 900 - 2,000 Ω @ 20°C)',
      'အကယ်၍ O.L ပြပါက ဆင်ဆာအသစ် ချက်ချင်းလဲပါ။',
      'ဆင်ဆာသို့ ရောက်သော 5V Reference သို့မဟုတ် Signal Wire စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'စက်သေသွားပါက လမ်းဘေးလုံခြုံသော နေရာတွင် ရပ်ပါ။ အင်ဂျင်အေးသွားပါက ခေတ္တ ပြန်နှိုးနိုင်သော်လည်း ချက်ချင်း ပြန်သေတတ်သဖြင့် ကရိန်းဆွဲယာဉ် ခေါ်ယူသင့်ပါသည်။',
    affectedCarsMm: 'Toyota, Nissan Note, Honda Fit, Hyundai Starex, Suzuki Wagon R',
    milStatus: true
  },
  {
    code: 'P0420',
    titleMm: 'Catalyst System Efficiency Below Threshold (Bank 1) - အိတ်ဇော ကာတာလိုက်တစ် ပိတ်ဆို့/စွမ်းဆောင်ရည်ကျဆင်းခြင်း',
    titleEn: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    category: 'Engine',
    severity: 'low',
    descriptionMm: 'အိတ်ဇောငွေ့ သန့်စင်ပေးသော Catalytic Converter ၏ စွမ်းဆောင်ရည် ကျဆင်းနေကြောင်း အောက်စီဂျင်ဆင်ဆာ (Downstream O2 Sensor) မှ အချက်ပြခြင်း ဖြစ်သည်။ မြန်မာပြည်တွင် ဓာတ်ဆီအရည်အသွေးကြောင့် အလွန်အဖြစ်များသည်။',
    symptomsMm: [
      'ဒက်ရှ်ဘုတ်တွင် Check Engine မီးလင်းနေသော်လည်း ကားမောင်းရသည်မှာ သာမန်အတိုင်း ပုံမှန်နီးပါး ဖြစ်နေခြင်း',
      'အိတ်ဇောမှ ဥပုပ်နံ့ သို့မဟုတ် ဆာလဖာအနံ့ အနည်းငယ် ထွက်ပေါ်ခြင်း',
      'အလွန်ဆိုးရွားပါက ကာတာလိုက်တစ် ပိတ်ဆို့ပြီး ကုန်းတက် အရှိန်မတက်ခြင်း'
    ],
    causesMm: [
      'Catalytic Converter အတွင်းရှိ ပျားလပို့ကဲ့သို့ ကြွေပြားများ သက်တမ်းကုန်ခြင်း သို့မဟုတ် ပိတ်ဆို့ခြင်း',
      'အိတ်ဇောပိုက် နောက်ဘက်ရှိ အောက်စီဂျင်ဆင်ဆာ (Sensor 2) ချွတ်ယွင်းခြင်း',
      'အိတ်ဇောပိုက် အဆက်များ လေလုံမှုမရှိဘဲ လေပေါက်နေခြင်း'
    ],
    diagnosisStepsMm: [
      'အိတ်ဇောပိုက် လေပေါက်/အက်ကွဲမှု ရှိမရှိ စစ်ဆေးပါ။',
      'Scanner Live Data တွင် O2 Sensor 1 နှင့် Sensor 2 ဗို့အားလှိုင်းကို စစ်ဆေးပါ။ (Sensor 2 သည် 0.6V - 0.7V တွင် ငြိမ်နေရမည်)',
      'ကာတာလိုက်တစ် ဆေးကြောသည့် သီးသန့် ကာဗာဆေးရည် (Cat Cleaner) ဖြင့် ဆေးကြောကြည့်ပါ။'
    ],
    emergencyAdviceMm: 'အရေးပေါ် မဟုတ်ပါ။ ခရီးဝေး သာမန်အတိုင်း ဆက်လက်မောင်းနှင်နိုင်ပါသည်။ အားလပ်ချိန်တွင် ဆေးကြောခြင်း သို့မဟုတ် အသစ်လဲခြင်း ပြုလုပ်နိုင်ပါသည်။',
    affectedCarsMm: 'Toyota Probox, Fielder, Insight, Fit, Premio, Nissan Note, Crown',
    milStatus: true
  },
  {
    code: 'P0500',
    titleMm: 'Vehicle Speed Sensor (VSS) Malfunction - ကားအရှိန်တိုင်းဆင်ဆာ ချွတ်ယွင်းခြင်း',
    titleEn: 'Vehicle Speed Sensor "A" Malfunction',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'ကား၏ မောင်းနှင်နေသော အရှိန် (km/h) ကို တိုင်းတာပေးသည့် Vehicle Speed Sensor (VSS) သို့မဟုတ် ABS Speed Sensor ထံမှ အချက်ပြလှိုင်း ပျောက်ဆုံးနေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဒိုင်ခွက်ပေါ်ရှိ ကီလိုလက်တံ (Speedometer) လုံးဝမတက်ဘဲ သုညတွင် ငြိမ်နေခြင်း',
      'အော်တိုဂီယာသည် အရှိန်ကို မသိသဖြင့် ဂီယာမပြောင်းဘဲ ဂီယာနိမ့်တွင် တစ်နေခြင်း',
      'Check Engine မီးနှင့်အတူ O/D မီး မှိတ်တုတ်မှိတ်တုတ် ဖြစ်နေခြင်း'
    ],
    causesMm: [
      'ဂီယာအိုးပေါ်ရှိ VSS ဆင်ဆာ ပျက်စီးခြင်း သို့မဟုတ် ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း',
      'ABS ECU မှ Speed Signal ကို အင်ဂျင်ကွန်ပျူတာသို့ မပို့နိုင်ခြင်း',
      'ဒိုင်ခွက် Speedometer Cluster ချို့ယွင်းခြင်း'
    ],
    diagnosisStepsMm: [
      'Scanner Live Data တွင် Vehicle Speed တက်မတက် စစ်ဆေးပါ။',
      'VSS ဆင်ဆာ၏ ပလပ်ခေါင်းနှင့် ဝိုင်ယာလိုင်း စစ်ဆေးပါ။ မီတာဖြင့် Pulse Signal ထွက်မထွက် စစ်ပါ။',
      'ABS စနစ်တွင် Wheel Speed Sensor ကုတ်များ ရှိမရှိ စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'ဂီယာပြောင်းရွှေ့မှု မမှန်ကန်နိုင်သဖြင့် ဖြည်းညင်းစွာ မောင်းနှင်၍ ပြုပြင်ပါ။',
    affectedCarsMm: 'Toyota Probox, Vitz, Honda Fit, Nissan, Suzuki',
    milStatus: true
  },

  // --- ABS / CHASSIS CODES ---
  {
    code: 'C0200',
    titleMm: 'Right Front Wheel Speed Sensor Signal Malfunction - ညာဘက်ရှေ့ဘီး အရှိန်ဆင်ဆာ အချက်ပြ ချွတ်ယွင်းခြင်း',
    titleEn: 'Right Front Wheel Speed Sensor Signal Malfunction',
    category: 'ABS/Chassis',
    severity: 'medium',
    descriptionMm: 'ညာဘက်ရှေ့ဘီး၏ လည်ပတ်နှုန်းကို တိုင်းတာပေးသော ABS Wheel Speed Sensor ၏ အချက်ပြလှိုင်း ပျောက်ဆုံးနေခြင်း သို့မဟုတ် ဝိုင်ယာကြိုး ပြတ်တောက်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဒက်ရှ်ဘုတ်တွင် ABS မီး၊ VSC မီးနှင့် ဘေးချော်အချက်ပြ (Skid Control) မီးများ အတူတကွ လင်းလာခြင်း',
      'သာမန် ဘရိတ်အုပ်ချိန်တွင် အသံမြည်ခြင်း မရှိသော်လည်း ABS စနစ် အလုပ်မလုပ်တော့ခြင်း'
    ],
    causesMm: [
      'ညာဘက်ရှေ့ဘီး Hub အနီးရှိ ABS Sensor ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း (ဘီးလှည့်ချိန် ပွတ်တိုက်မိခြင်း)',
      'ဘီး Bearings အသစ်လဲရာတွင် သံလိုက်ကွင်း (Magnetic Encoder Ring) မပါသော အတုထည့်မိခြင်း',
      'ဆင်ဆာထိပ်ဖျားတွင် သံမှုန့်နှင့် ရွှံ့များ ပိတ်ဆို့နေခြင်း'
    ],
    diagnosisStepsMm: [
      'ညာဘက်ရှေ့ဘီးကို ဖြုတ်၍ ABS Sensor ဝိုင်ယာကြိုး ပွန်းပဲ့ပြတ်တောက်မှု ရှိမရှိ စစ်ဆေးပါ။',
      'ဆင်ဆာထိပ်ဖျားကို သန့်ရှင်းရေး ပြုလုပ်ပါ။',
      'Multimeter ဖြင့် ဘီးလှည့်ကြည့်ပါက AC Voltage သို့မဟုတ် Pulse အချက်ပြ ထွက်မထွက် စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'သာမန် ဟိုက်ဒရောလစ် ဘရိတ်သည် ပုံမှန်အလုပ်လုပ်ပါသေးသည်။ သို့သော် ရုတ်တရက် ဘရိတ်အုပ်ပါက ဘီးလော့ခ်ကျနိုင်သဖြင့် မိုးတွင်းလမ်းချောတွင် ဂရုတစိုက် မောင်းပါ။',
    affectedCarsMm: 'Toyota Crown Athlete, Fielder, Insight, Fit, Nissan Note, Prado',
    milStatus: false
  },
  {
    code: 'C1201',
    titleMm: 'Engine Control System Malfunction (ABS Request) - အင်ဂျင်စနစ် ချွတ်ယွင်းမှုကြောင့် ABS စနစ် ပိတ်ထားခြင်း',
    titleEn: 'Engine Control System Malfunction (ABS Communication)',
    category: 'ABS/Chassis',
    severity: 'medium',
    descriptionMm: 'ABS စနစ်တွင် ချွတ်ယွင်းချက် မရှိသော်လည်း အင်ဂျင်ကွန်ပျူတာ (ECM) ဘက်တွင် Error Code (ဥပမာ- P0171, P0300) ပေါ်နေသဖြင့် VSC / TRC စနစ်ကို ဘေးကင်းရေးအရ အလိုအလျောက် ပိတ်ထားခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'Check Engine မီးနှင့်အတူ ABS / VSC / TRC မီးများ တစ်ပြိုင်နက်တည်း လင်းနေခြင်း'
    ],
    causesMm: [
      'အင်ဂျင်စနစ်အတွင်းရှိ ချွတ်ယွင်းချက် (P-Code များ ရှိနေခြင်း)'
    ],
    diagnosisStepsMm: [
      'ABS ဘက်ကို မပြင်မီ Engine ECU ဘက်ရှိ P-Code များကို ဦးစွာ ရှာဖွေပြင်ဆင်ပါ။',
      'အင်ဂျင်ကုတ် ပျောက်သွားပါက C1201 သည် အလိုအလျောက် ပျောက်ကွယ်သွားပါမည်။'
    ],
    emergencyAdviceMm: 'အင်ဂျင်စနစ်ကို ဦးစွာ စစ်ဆေးပြုပြင်ပါ။ သာမန်မောင်းနှင်နိုင်ပါသည်။',
    affectedCarsMm: 'Toyota Crown, Camry, Alphard, Prado, Lexus',
    milStatus: false
  },

  // --- NETWORK / CAN BUS CODES ---
  {
    code: 'U0100',
    titleMm: 'Lost Communication with ECM/PCM "A" - အင်ဂျင်ကွန်ပျူတာနှင့် ဆက်သွယ်ရေး လိုင်းပြတ်တောက်ခြင်း',
    titleEn: 'Lost Communication with ECM/PCM "A"',
    category: 'Network',
    severity: 'critical',
    descriptionMm: 'ကား၏ အခြားကွန်ပျူတာများ (TCM, ABS, Meter Cluster) သည် အဓိက အင်ဂျင်ကွန်ပျူတာ (ECM) နှင့် CAN-Bus ဒေတာ ဆက်သွယ်ရေး ပြတ်တောက်သွားခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ကားစက်နှိုးမရခြင်း (No Crank / No Start)',
      'ဒိုင်ခွက်ပေါ်ရှိ မီးများအားလုံး လင်းနေပြီး ဒိုင်ခွက်လက်တံများ အလုပ်မလုပ်ခြင်း',
      'OBD Scanner ထိုးသော်လည်း Engine ECU သို့ ချိတ်ဆက်မရခြင်း (Communication Error)'
    ],
    causesMm: [
      'အင်ဂျင်ကွန်ပျူတာ ECM သို့ သွားသော Main Relay သို့မဟုတ် EFI Fuse ပြတ်နေခြင်း',
      'CAN-H သို့မဟုတ် CAN-L ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း သို့မဟုတ် ကြွက်ကိုက်ထားခြင်း',
      'ECM Main Ground ကြိုး လျော့ရဲနေခြင်း သို့မဟုတ် ကွန်ပျူတာ ရေဝင်လောင်ကျွမ်းခြင်း'
    ],
    diagnosisStepsMm: [
      'အင်ဂျင်ခန်းအတွင်းရှိ EFI / ECM Fuse များကို မီးစစ်တံ (Test Light) ဖြင့် အရင်ဆုံး စစ်ဆေးပါ။',
      'DLC OBD Port ၏ Pin 6 (CAN-H) နှင့် Pin 14 (CAN-L) ကြား Battery ဖြုတ်၍ ခုခံမှု Ohm တိုင်းပါ။ (စံနှုန်း: 60 Ω တိတိ ရှိရပါမည်)',
      'ECM ပလပ်ရှိ 12V Constant Power, Ignition Switch 12V နှင့် Ground လိုင်းများကို စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'ကားစက်နှိုးမရနိုင်ပါ။ ဝိုင်ယာကြိုးနှင့် Fuse များကို အရင်စစ်ဆေးပြီး မရပါက ဝပ်ရှော့သို့ ကရိန်းဆွဲရပါမည်။',
    affectedCarsMm: 'ကားအမျိုးအစား အားလုံး (Toyota, Honda, Nissan, Mazda, Suzuki, Ford)',
    milStatus: true
  },
  {
    code: 'U0101',
    titleMm: 'Lost Communication with Transmission Control Module (TCM) - ဂီယာကွန်ပျူတာနှင့် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း',
    titleEn: 'Lost Communication with TCM',
    category: 'Network',
    severity: 'critical',
    descriptionMm: 'အင်ဂျင်ကွန်ပျူတာ (ECM) နှင့် ဂီယာကွန်ပျူတာ (TCM) ကြား CAN Bus ဆက်သွယ်ရေး ပြတ်တောက်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ဂီယာလုံးဝ မပြောင်းခြင်း (Limp Mode ကျခြင်း)',
      'D မီးမှိတ်တုတ်မှိတ်တုတ် ဖြစ်ခြင်း သို့မဟုတ် မီးလုံးဝမပြခြင်း',
      'ဂီယာအဝင် အလွန်ဆောင့်တက်ခြင်း'
    ],
    causesMm: [
      'TCM Power Fuse ပြတ်ခြင်း',
      'TCM ပလပ်ခေါင်း ရေဝင်ချေးတက်ခြင်း',
      'CAN Bus ဝိုင်ယာကြိုးပြတ်ခြင်း'
    ],
    diagnosisStepsMm: [
      'TCM Fuse ကို စစ်ဆေးပါ။',
      'TCM ပလပ်ခေါင်းကို ဖြုတ်ပြီး Contact Cleaner ဖြင့် ဆေးကြောပါ။',
      'TCM ကွန်ပျူတာ အစားထိုး စမ်းသပ်ပါ။'
    ],
    emergencyAdviceMm: 'ဂီယာ Safe Mode ကျနေသဖြင့် အရှိန်ပြင်းပြင်း မမောင်းပါနှင့်။ ဖြည်းညင်းစွာ အနီးဆုံး ဝပ်ရှော့ပြပါ။',
    affectedCarsMm: 'Toyota, Nissan Note, Honda, Mazda',
    milStatus: true
  },
  {
    code: 'P0016',
    titleMm: 'Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor A) - ခရိုင်းနှင့် ကင်မ်ရှပ် အံကိုက်မှု လွဲချော်ခြင်း',
    titleEn: 'Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor A)',
    category: 'Engine',
    severity: 'high',
    descriptionMm: 'ခရိုင်းရှပ် (Crankshaft) နှင့် ကင်မ်ရှပ် (Camshaft) ကြား လည်ပတ်ချိန် တိုင်မင် (Timing) အတိမ်းအစောင်း ဖြစ်နေခြင်း သို့မဟုတ် တိုင်မင်ချိန်း (Timing Chain) ကြောလျော့နေခြင်းကို ညွှန်ပြသည်။',
    symptomsMm: [
      'စက်နှိုးရခက်ခြင်း သို့မဟုတ် စက်နှိုးသံ အလွန်ရှည်ကြာခြင်း (Long Crank)',
      'အင်ဂျင်ဆွဲအား ကျဆင်းခြင်းနှင့် စက်တုန်ခြင်း',
      'Check Engine မီးလင်းနေခြင်း',
      'စက်သံတွင် ချိန်းတိုက်သံ (Rattling Noise) ထွက်ပေါ်ခြင်း'
    ],
    causesMm: [
      'Timing Chain ကြိုးလျော့သွားခြင်း သို့မဟုတ် အံကျော်သွားခြင်း',
      'VVT Camshaft Phaser / Sprocket ဂီယာ အထိုင်ချွတ်ယွင်းခြင်း',
      'VVT OCV Solenoid တွင် ဂျိုး/အမှိုက် ပိတ်ဆို့ခြင်း',
      'Crankshaft Sensor သို့မဟုတ် Camshaft Sensor ချွတ်ယွင်းခြင်း'
    ],
    diagnosisStepsMm: [
      'Scope သို့မဟုတ် Live Data ဖြင့် Crank/Cam Sensor လှိုင်းများကို တိုက်ဆိုင်တိုင်းတာပါ။',
      'VVT OCV Solenoid ကို ဖြုတ်၍ ဆန်ကာသန့်ရှင်းရေးနှင့် 12V ကျွေးပြီး စမ်းသပ်ပါ။',
      'Timing Cover ဖြုတ်၍ Timing Marks များ တည့်မတည့်နှင့် Chain Tensioner အထွက်အတိုင်းအတာ စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'တိုင်မင်ချိန်း လျော့နေပါက ဆက်မမောင်းသင့်ပါ။ အဆို့ရှင် (Valve) ခေါင်းနှင့် ပစ္စတင် ရိုက်မိပြီး အင်ဂျင် ကွဲနိုင်ပါသည်။',
    affectedCarsMm: 'Toyota 1NZ/2ZR, BMW N20/N52, Ford Ranger, VW 2.0 TSI',
    milStatus: true
  },
  {
    code: 'P0299',
    titleMm: 'Turbocharger / Supercharger Underboost Condition - တာဘို လေဖိအား အားနည်းလွန်းခြင်း',
    titleEn: 'Turbocharger / Supercharger "A" Underboost Condition',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'တာဘိုချာဂျာ (Turbocharger) မှ ထုတ်ပေးသော လေဖိအား (Boost Pressure) သည် ECM ကွန်ပျူတာ သတ်မှတ်ထားသော Target Boost ထက် လျော့နည်းနေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ကားအရှိန်တက်ရန် နင်းသော်လည်း စက်လေးနေပြီး အဆွဲအရုန်း မရှိခြင်း',
      'အိတ်ဇောမှ မီးခိုးမည်း အနည်းငယ် ထွက်ခြင်း',
      'လေယိုစိမ့်သံ (Hissing sound) ကြားရခြင်း',
      'Check Engine မီးလင်းခြင်း'
    ],
    causesMm: [
      'Intercooler ပိုက်လိုင်းများ ပေါက်ပြဲခြင်း သို့မဟုတ် ကလစ်လျော့ခြင်း',
      'Turbo Wastegate Actuator ချွတ်ယွင်းခြင်း သို့မဟုတ် ကပ်နေခြင်း',
      'Boost Pressure Control Solenoid (VNT Solenoid) ပျက်စီးခြင်း',
      'Turbocharger အတွင်းပိုင်း ပန်ကာဒလက် ပွန်းစားခြင်း'
    ],
    diagnosisStepsMm: [
      'Smoke Tester သို့မဟုတ် လေဖိအားသုံး၍ Intercooler ပိုက်လိုင်း လေယိုမယို စစ်ဆေးပါ။',
      'VNT Vacuum Actuator တံကို လက်ဖြင့် ဆွဲကြည့်၍ ပုံမှန် လှုပ်ရှားမှု ရှိမရှိ စစ်ဆေးပါ။',
      'Boost Pressure Sensor (MAP Sensor) ၏ Live Data ဖတ်ရှုစစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'ပုံမှန်အမြန်နှုန်းဖြင့် ဖြည်းညင်းစွာ မောင်းနှင်နိုင်ပါသည်။ အရှိန်ပြင်းပြင်း မနင်းပါနှင့်။',
    affectedCarsMm: 'Ford Ranger TDCi, Isuzu D-Max 3.0, BMW F10, VW EA888 Turbo',
    milStatus: true
  },
  {
    code: 'P0101',
    titleMm: 'Mass or Volume Air Flow Circuit Range/Performance - လေစီးဆင်းမှုတိုင်း ဆင်ဆာ အဝင်အထွက် ချွတ်ယွင်းခြင်း',
    titleEn: 'Mass or Volume Air Flow "A" Circuit Range/Performance',
    category: 'Engine',
    severity: 'medium',
    descriptionMm: 'အင်ဂျင်အတွင်းသို့ ဝင်ရောက်လာသော လေထုထည်ကို တိုင်းတာပေးသည့် MAF Sensor ၏ Signal သည် သတ်မှတ်အကွာအဝေးအတွင်း ပုံမှန်မဟုတ်ဘဲ လွဲချော်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'ကားစက်နှိုးထားစဉ် မီးပွိုင့်တွင် စက်သေချင်သလို ဖြစ်ခြင်း (Rough Idle)',
      'ကားအနင်းမရုန်းဘဲ ဆီစားများလာခြင်း',
      'Check Engine မီးလင်းနေခြင်း'
    ],
    causesMm: [
      'MAF Sensor ဝါယာကြိုးမျှင်တွင် ဖုန်နှင့် အဆီဂျိုး ပိတ်ဆို့နေခြင်း',
      'Air Filter ပိတ်ဆို့ခြင်း သို့မဟုတ် လေစစ်ဘူး အဖုံးမလုံခြင်း',
      'Air Intake Hose ပိုက်လိုင်း အက်ကွဲပြီး လေခိုးဝင်ခြင်း'
    ],
    diagnosisStepsMm: [
      'MAF Sensor ကို ဖြုတ်၍ အထူးသီးသန့် MAF Cleaner Spray ဖြင့် ဖြန်းဆေးပါ။',
      'Air Filter သန့်ရှင်းရေး ပြုလုပ်ပါ သို့မဟုတ် အသစ်လဲပါ။',
      'Scanner Live Data တွင် စက်ငြိမ်ထားချိန် လေထုထည် (1.5g/s - 2.5g/s ဝန်းကျင်) ရှိမရှိ စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'ဝပ်ရှော့သို့ ဆက်လက် မောင်းနှင်သွားနိုင်ပါသည်။ MAF ဆေးကြောပါက အလွယ်တကူ သက်သာတတ်ပါသည်။',
    affectedCarsMm: 'Toyota Probox, Nissan Note, Ford Ranger, BMW, Mercedes',
    milStatus: true
  },
  {
    code: 'U0100',
    titleMm: 'Lost Communication with ECM/PCM "A" - အင်ဂျင်ကွန်ပျူတာနှင့် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း',
    titleEn: 'Lost Communication with ECM/PCM "A"',
    category: 'Network',
    severity: 'high',
    descriptionMm: 'ကားအတွင်းရှိ အခြား ကွန်ပျူတာများ (ဥပမာ- TCM, ABS, BCM, Meter Cluster) သည် CAN Bus ကွန်ရက်ပေါ်တွင် အင်ဂျင်ကွန်ပျူတာ (ECM) ထံမှ Signal မရရှိတော့ဘဲ ဆက်သွယ်မှု ပြတ်တောက်နေခြင်း ဖြစ်သည်။',
    symptomsMm: [
      'စက်နှိုးမရဘဲ ဒိုင်ခွက်တွင် မီးစုံလင်းပြီး Starter မလည်ခြင်း',
      'ဒိုင်ခွက်တွင် စက်အပူချိန်ပြ ဒိုင်ခွက်နှင့် ဂီယာအမှတ်အသားများ ပျောက်ကွယ်နေခြင်း',
      'ဂီယာအိုး Safe Mode ကျပြီး ဂီယာ ၃ တွင်သာ ငြိမ်နေခြင်း'
    ],
    causesMm: [
      'ECM Main Power Fuse သို့မဟုတ် Main Relay ပြတ်တောက်ခြင်း',
      'ECM အောက်ခံ Ground (E1/E2) ကြိုးလိုင်း လျော့ရဲခြင်း သို့မဟုတ် သံချေးတက်ခြင်း',
      'CAN High / CAN Low ဝိုင်ယာကြိုး ပြတ်တောက်ခြင်း သို့မဟုတ် ကြွက်ကိုက်ခံရခြင်း',
      'ECM ကွန်ပျူတာအတွင်းပိုင်း ပျက်စီးခြင်း'
    ],
    diagnosisStepsMm: [
      'Fuse Box အတွင်းရှိ EFI Main Fuse နှင့် ECM Fuse များကို မီတာဖြင့် တိုက်ရိုက်တိုင်းပါ။',
      'OBD-II DLC ပေါက်ရှိ Pin 6 (CAN-H) နှင့် Pin 14 (CAN-L) ကြား Resistance ကို တိုင်းပါ (60 Ohms ဝန်းကျင် ရှိရမည်)။',
      'ECM Main Relay အလုပ်လုပ်မလုပ် စစ်ဆေးပါ။'
    ],
    emergencyAdviceMm: 'ဆက်လက်မောင်းနှင်ရန် မဖြစ်နိုင်ပါ။ ကွန်ပျူတာ ပါဝါလိုင်းနှင့် Fuse များကို အရင်စစ်ဆေးရပါမည်။',
    affectedCarsMm: 'ကားအမျိုးအစား အားလုံး (Asia, Europe, America)',
    milStatus: true
  },
  {
    code: 'C1201',
    titleMm: 'Engine Control System Malfunction - အင်ဂျင်စနစ် ချွတ်ယွင်းချက်ကြောင့် ABS/VSC ပိတ်ထားခြင်း',
    titleEn: 'Engine Control System Malfunction (Brake / Skid Control)',
    category: 'ABS/Chassis',
    severity: 'medium',
    descriptionMm: 'အင်ဂျင်စနစ် (ECM) တွင် Check Engine မီးလင်းစေသော Fault Code တစ်ခုခု ရှိနေသဖြင့် ABS / Skid Control ကွန်ပျူတာက ဘေးကင်းရေးအတွက် VSC/TRC စနစ်ကို အလိုအလျောက် ပိတ်ထားခြင်း ဖြစ်သည်။ ABS အမှန်တကယ် ပျက်ခြင်း မဟုတ်ပါ။',
    symptomsMm: [
      'ABS မီး၊ VSC မီး၊ TRC မီးနှင့် Check Engine မီးများ တစ်ပြိုင်နက်တည်း လင်းနေခြင်း',
      'ကားဘရိတ် ပုံမှန် နင်း၍ ရသော်လည်း Skid Control အလုပ်မလုပ်ခြင်း'
    ],
    causesMm: [
      'အင်ဂျင်ကွန်ပျူတာ (ECM) တွင် မီးလင်းစေသော Error Code (ဥပမာ- P0300, P0171, P0705) ရှိနေခြင်း',
      'ECM နှင့် ABS ကွန်ပျူတာကြား Communication လွဲချော်ခြင်း'
    ],
    diagnosisStepsMm: [
      'Scanner ဖြင့် အင်ဂျင်စနစ် (Engine ECM) သို့ အရင်ဝင်ရောက်၍ အဓိက Error Code ကို ရှာဖွေ ပြင်ဆင်ပါ။',
      'အင်ဂျင်ဘက် ပြင်ဆင်ပြီးပါက အင်ဂျင် Code ရော ABS C1201 Code ပါ Clear All DTC ပြုလုပ်ပါ။'
    ],
    emergencyAdviceMm: 'အင်ဂျင်စနစ်ကို အရင် ပြုပြင်ရပါမည်။ ဘရိတ် စက်ပိုင်းဆိုင်ရာ ပုံမှန် အလုပ်လုပ်နိုင်ပါသည်။',
    affectedCarsMm: 'Toyota Crown, Prado, Alphard, Lexus, Fielder',
    milStatus: true
  }
];

// Presets for Quick Testing & Realistic Scanner Scenarios
export const SCAN_SCENARIOS: ScanScenario[] = [
  {
    id: 'probox-p0755-limp',
    carNameMm: 'Toyota Probox 1.5 (NCP51 / 1NZ-FE)',
    brand: 'Toyota',
    transmission: 'Super ECT 4-Speed (U340E)',
    reportedProblemMm: 'အဝေးပြေးလမ်းတွင် ဂီယာ ၃ မဝင်ဘဲ စက်သံကျယ်နေပြီး Check Engine မီးလင်းနေခြင်း',
    dtcCodes: ['P0755', 'P0700'],
    freezeFrame: {
      engineRpm: 3200,
      vehicleSpeed: 65,
      coolantTemp: 88,
      atfTemp: 96,
      selectedGear: '2nd (Hold)',
      throttlePos: 35,
      batteryVoltage: 13.9
    }
  },
  {
    id: 'fielder-cvt-judder',
    carNameMm: 'Toyota Corolla Fielder (NZE141 / 1NZ-FE)',
    brand: 'Toyota',
    transmission: 'Super CVT-i (K310)',
    reportedProblemMm: 'စထွက်ချိန်တွင် တဆတ်ဆတ် တုန်ခါပြီး ကုန်းတက်တွင် အရှိန်မတက်ခြင်း',
    dtcCodes: ['P0746', 'P0841'],
    freezeFrame: {
      engineRpm: 2100,
      vehicleSpeed: 15,
      coolantTemp: 82,
      atfTemp: 104,
      selectedGear: 'D',
      throttlePos: 42,
      batteryVoltage: 14.1
    }
  },
  {
    id: 'honda-fit-range-sensor',
    carNameMm: 'Honda Fit (GE6 / L13A i-VTEC)',
    brand: 'Honda',
    transmission: 'Multi-Matic CVT',
    reportedProblemMm: 'ဒိုင်ခွက်တွင် D မီး မှိတ်တုတ်မှိတ်တုတ်ဖြစ်ပြီး ဂီယာ P တွင် စက်နှိုးမရခြင်း',
    dtcCodes: ['P0705'],
    freezeFrame: {
      engineRpm: 0,
      vehicleSpeed: 0,
      coolantTemp: 45,
      atfTemp: 40,
      selectedGear: 'P / Unknown',
      throttlePos: 0,
      batteryVoltage: 12.2
    }
  },
  {
    id: 'probox-lean-shaking',
    carNameMm: 'Toyota Probox (NCP51)',
    brand: 'Toyota',
    transmission: 'Super ECT 4-Speed (U340E)',
    reportedProblemMm: 'မနက်စက်နှိုးချိန် စက်တုန်ပြီး ဆီစားအလွန်များနေခြင်း',
    dtcCodes: ['P0171', 'P0300'],
    freezeFrame: {
      engineRpm: 750,
      vehicleSpeed: 0,
      coolantTemp: 72,
      atfTemp: 65,
      selectedGear: 'P',
      throttlePos: 14,
      batteryVoltage: 14.0
    }
  },
  {
    id: 'nissan-note-pulley-pressure',
    carNameMm: 'Nissan Note (E12 / HR12DE)',
    brand: 'Nissan',
    transmission: 'Jatco Xtronic CVT (JF015E)',
    reportedProblemMm: 'Eco မီးလင်းပြီး ကားအရှိန်မတက်ဘဲ အဝေးပြေးတွင် အရှိန် ၆၀ တွင် တစ်နေခြင်း',
    dtcCodes: ['P0746', 'P0700'],
    freezeFrame: {
      engineRpm: 2600,
      vehicleSpeed: 60,
      coolantTemp: 85,
      atfTemp: 108,
      selectedGear: 'D (Limp)',
      throttlePos: 28,
      batteryVoltage: 14.0
    }
  },
  {
    id: 'crown-abs-wheel-sensor',
    carNameMm: 'Toyota Crown Athlete (GRS180 / GRS200)',
    brand: 'Toyota',
    transmission: '6-Speed Super ECT A760E',
    reportedProblemMm: 'ABS မီး၊ VSC မီးနှင့် Skid Control မီးများ လင်းနေခြင်း',
    dtcCodes: ['C0200', 'C1201'],
    freezeFrame: {
      engineRpm: 1800,
      vehicleSpeed: 60,
      coolantTemp: 86,
      atfTemp: 82,
      selectedGear: 'D (5th)',
      throttlePos: 22,
      batteryVoltage: 14.2
    }
  }
];
