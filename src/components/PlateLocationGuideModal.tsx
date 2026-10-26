import React from 'react';
import { X, MapPin, Compass, Car, ShieldAlert, CheckCircle2, Info } from 'lucide-react';

interface PlateLocationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlateLocationGuideModal: React.FC<PlateLocationGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const locationGuides = [
    {
      brandGroup: 'ဂျပန်နှင့် အာရှကားများ (Toyota, Honda, Nissan, Suzuki, Isuzu)',
      flag: '🇯🇵 🇹🇭',
      color: 'border-amber-500/40 bg-amber-950/20 text-amber-400',
      locations: [
        {
          title: '၁။ အင်ဂျင်ခန်းအတွင်း နောက်ကာရံနံရံ (Engine Bay Firewall)',
          desc: 'ဘောနပ်ဖုံးဖွင့်ပြီး အင်ဂျင်၏ အနောက်ဘက် လေကာမှန်အောက်ခံ သံပြားနံရံ အလယ် သို့မဟုတ် ယာဘက်တွင် အလူမီနီယမ် နိမ်းပလိပ်ပြားကို ဝက်အူရိုက်၍ တပ်ဆင်ထားသည်။ (Premio, Fielder, Probox, Alphard အများစု)',
        },
        {
          title: '၂။ ယာဉ်မောင်းတံခါးဘောင် (Driver Door B-Pillar)',
          desc: 'ယာဉ်မောင်းတံခါးကို ဖွင့်လိုက်ပါက တံခါးတိုင် (B-Pillar) သို့မဟုတ် တံခါးအောက်ခြေဘောင်တွင် အမည်းရောင်/ငွေရောင် စတစ်ကာဖြင့် ကပ်ထားသည်။ (Hilux Vigo, Revo, Fortuner, D-Max)',
        },
        {
          title: '၃။ ရှေ့ရေတိုင်ကီ အထက်ဘောင် (Radiator Core Support)',
          desc: 'ဘောနပ်ဖုံးဖွင့်ပြီး ရေတိုင်ကီအထက် သံဘောင်တန်းပေါ်တွင် နိမ်းပြားငယ် ရိုက်ထားတတ်သည်။ (Honda Fit, Civic, Nissan March)',
        },
      ],
      tipMm: 'ဂျပန်ပြည်တွင်းသုံး (JDM) ကားများတွင် VIN ၁၇ လုံးအစား Frame Number (ဥပမာ- NZT260-3028145) အဖြစ် တွေ့ရပါမည်။',
    },
    {
      brandGroup: 'ဥရောပကားများ (BMW, Mercedes-Benz, Audi, Volkswagen)',
      flag: '🇩🇪 🇪🇺',
      color: 'border-blue-500/40 bg-blue-950/20 text-blue-400',
      locations: [
        {
          title: '၁။ ယာဉ်မောင်းတံခါးတိုင် B-Pillar စတစ်ကာ (Driver Door Pillar)',
          desc: 'ဥရောပကားများသည် အင်ဂျင်ခန်းထဲတွင် နိမ်းပြားမထားဘဲ ယာဉ်မောင်းတံခါး ဖွင့်လိုက်သည့် တံခါးတိုင်တွင် ဘားကုဒ်၊ VIN ၁၇ လုံးနှင့် အလေးချိန် (kg) များပါသော အမည်းရောင် စတစ်ကာပြား ကပ်ထားသည်။ (BMW 3/5 Series, Benz C/E-Class)',
        },
        {
          title: '၂။ ရှေ့လေကာမှန် အောက်ခြေထောင့် (Lower Windshield Corner)',
          desc: 'ကားအပြင်ဘက် ရှေ့လေကာမှန် အောက်ဘက်ထောင့် (ယာဉ်မောင်းဘက်) တွင် ဖောက်ထားသော အကွက်လေးထဲမှ ၁၇ လုံးပါ VIN နံပါတ်ကို ဖတ်ရှုနိုင်သည်။',
        },
        {
          title: '၃။ ခရီးသည်ထိုင်ခုံအောက် ကြမ်းခင်း (Under Passenger Seat Carpet)',
          desc: 'အရှေ့ခရီးသည်ထိုင်ခုံကို နောက်သို့ အဆုံးရွှေ့ပြီး ကြမ်းခင်းကော်ဇောရှိ အဖုံးလေးကို လှန်ကြည့်ပါက ကိုယ်ထည်သံပြားပေါ်တွင် VIN စာလုံး ထွင်းထားသည်ကို တွေ့ရပါမည်။',
        },
      ],
      tipMm: 'ဥရောပကား နိမ်းပြားတွင် 1- xxxx kg, 2- xxxx kg ဟူ၍ ရေးထားသည်မှာ ရှေ့ဘီးဝင်ရိုးနှင့် နောက်ဘီးဝင်ရိုး ခံနိုင်ဝန် အလေးချိန် (Axle Weight) ဖြစ်ပါသည်။',
    },
    {
      brandGroup: 'အမေရိကန်ကားများ (Ford, Chevrolet)',
      flag: '🇺🇸',
      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-400',
      locations: [
        {
          title: '၁။ ယာဉ်မောင်းတံခါး သော့ချိတ်ဘောင် (Driver Door Latch Face)',
          desc: 'ယာဉ်မောင်းတံခါး ဖွင့်လိုက်သော တံခါးအစွန်းဘက် သို့မဟုတ် B-Pillar ပေါ်တွင် Safety Certification Sticker အနေဖြင့် ကပ်ထားသည်။ (Ford Ranger, Everest)',
        },
        {
          title: '၂။ ရှေ့လေကာမှန် အောက်ခြေ VIN ပြား',
          desc: 'ကားရှေ့မှန် အောက်ခြေဘယ်ဘက်တွင် သတ္တုပြားဖြင့် VIN ၁၇ လုံးကို အလွယ်တကူ မြင်တွေ့နိုင်သည်။',
        },
      ],
      tipMm: 'Ford ကားများတွင် နိမ်းပြား၏ ၁၀ လုံးမြောက် စာလုံးသည် ကားထုတ်လုပ်သည့် ခုနှစ် (Model Year) ကို အတိအကျ ညွှန်ပြပါသည်။',
    },
    {
      brandGroup: 'ကုန်တင်ကားကြီးနှင့် ဘတ်စ်ကားများ (Hino, Isuzu, Mitsubishi Fuso)',
      flag: '🚚 🚛',
      color: 'border-purple-500/40 bg-purple-950/20 text-purple-400',
      locations: [
        {
          title: '၁။ ယာဉ်မောင်းတံခါးဖွင့် B-Pillar သို့မဟုတ် ခြေနင်းခုံနံရံ (Cabin Step)',
          desc: 'ယာဉ်မောင်းတံခါးဖွင့်ပြီး ကက်ဘင်ထဲ တက်သည့် ခြေနင်းခုံဘေးဘောင် သို့မဟုတ် တံခါးတိုင်တွင် အကြီးစား သတ္တုနိမ်းပြားကို ရိုက်ကပ်ထားသည်။ (Hino Profia, Dutro, Isuzu Forward, Giga)',
        },
        {
          title: '၂။ ရှေ့ဘီးနောက် ကားသံပေါင် (Chassis Frame Rail)',
          desc: 'ရှေ့ဘီး (ယာဘက် သို့မဟုတ် ဘယ်ဘက်) နောက်နားရှိ ကားသံပေါင်ခွေ (Frame Rail) ပေါ်တွင် Chassis Number ကြီးမားစွာ ထွင်းထားသည်။',
        },
      ],
      tipMm: 'ကားကြီးများတွင် Gross Vehicle Weight (GVW ကားတစ်စီးလုံး စုစုပေါင်း အလေးချိန်) နှင့် Engine Displacement (cc) တို့ကို အတိအကျ ဖော်ပြထားပါသည်။',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-['Padauk',sans-serif] flex items-center gap-2">
                <span>နိမ်းပလိပ်ပြား ရှာဖွေနည်း လမ်းညွှန် (Plate Location Guide)</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                ဂျပန်၊ ဥရောပ၊ အမေရိကန်နှင့် ကားကြီးများတွင် နိမ်းပြားနှင့် VIN တည်ရှိရာ နေရာများ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-['Padauk',sans-serif] flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <p className="leading-relaxed">
              <strong>ဆရာကြီးများအတွက် သတိပြုရန်</strong> — ဂျပန်ကားများတွင် အင်ဂျင်ခန်းထဲ၌ နိမ်းပြား တွေ့ရလေ့ရှိသော်လည်း၊ ဥရောပ (BMW, Benz) နှင့် အမေရိကန်ကားများတွင် အင်ဂျင်ခန်းထဲ၌ မရှိဘဲ <strong>ယာဉ်မောင်းတံခါးတိုင် (B-Pillar) စတစ်ကာ</strong> သို့မဟုတ် <strong>ရှေ့လေကာမှန်အောက်ခြေ</strong> တွင်သာ အဓိက တွေ့ရှိရပါမည်။
            </p>
          </div>

          <div className="space-y-4">
            {locationGuides.map((group, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border bg-slate-950/70 p-4 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{group.flag}</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-100 font-['Padauk',sans-serif]">
                      {group.brandGroup}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${group.color}`}>
                    LOCATION GUIDE
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {group.locations.map((loc, lIdx) => (
                    <div key={lIdx} className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-bold text-amber-300 font-['Padauk',sans-serif] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{loc.title}</span>
                      </div>
                      <p className="text-slate-300 font-['Padauk',sans-serif] text-[11px] leading-relaxed pl-5">
                        {loc.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900 p-2 rounded-xl font-['Padauk',sans-serif] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{group.tipMm}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer shadow"
          >
            နားလည်ပါပြီ (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
