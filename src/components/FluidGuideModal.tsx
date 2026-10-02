import React from 'react';
import { 
  Droplets, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Gauge, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { FLUID_SPECS, FluidSpec } from '../data/fluidSpecs';

export const FluidGuideModal: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              <Droplets className="w-3.5 h-3.5" />
              TRANSMISSION FLUID MASTER SPECIFICATIONS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Chakra_Petch',sans-serif]">
              အော်တို & CVT ဂီယာဆီ စံသတ်မှတ်ချက် လမ်းညွှန်
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif]">
              ဂီယာဆီ အမှားထည့်မိခြင်းကြောင့် ဂီယာအိုးနှင့် CVT Belt ခါးပတ် ပျက်စီးဆုံးရှုံးမှု မဖြစ်ပေါ်စေရန် တရားဝင် စံနှုန်းများ၊ ဆီတိုင်းနည်းနှင့် သတိပေးချက်များ
            </p>
          </div>
        </div>
      </div>

      {/* Critical Warning Alert Box */}
      <div className="bg-red-950/40 border-2 border-red-500/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm font-['Padauk',sans-serif]">
          <h4 className="font-bold text-red-400 text-sm sm:text-base">
            အရေးအကြီးဆုံး သတိပေးချက်: CVT ကားများတွင် သာမန် ATF ဆီ လုံးဝ (လုံးဝ) မထည့်ရ!
          </h4>
          <p className="text-slate-300 leading-relaxed">
            Axio, Fielder, Wish, Fit, Note စသည့် CVT စနစ်သုံး ကားများထဲသို့ သာမန် အော်တိုဆီ (ATF Dexron သို့မဟုတ် Type T-IV) မှားထည့်မိပါက CVT Steel Belt (သံခါးပတ်ကြိုး) သည် ပူလီပေါ်တွင် ချက်ချင်းချော်သွားပြီး သံမှုန့်များထွက်ကာ <strong className="text-red-300">ဂီယာအိုးတစ်လုံးလုံး ပျက်စီးသွားပါမည်</strong>။ သက်ဆိုင်ရာ CVT Fluid (FE, TC, HCF-2, NS-3) ကိုသာ တိကျစွာ အသုံးပြုရပါမည်။
          </p>
        </div>
      </div>

      {/* Fluid Specs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FLUID_SPECS.map((spec, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    {spec.brand}
                  </span>
                  <h4 className="text-sm font-bold text-white font-['Padauk',sans-serif]">
                    {spec.gearboxType}
                  </h4>
                </div>
              </div>

              {/* Recommended Oil */}
              <div className="bg-emerald-950/30 border border-emerald-800/60 p-3 rounded-xl space-y-1">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ထည့်သွင်းရမည့် ဆီအမျိုးအစား (Recommended):
                </span>
                <div className="text-xs sm:text-sm font-bold text-emerald-200 font-mono">
                  {spec.recommendedOil}
                </div>
              </div>

              {/* Prohibited Oil */}
              <div className="bg-red-950/20 border border-red-900/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  လုံးဝမထည့်ရမည့် ဆီ (Prohibited):
                </span>
                <div className="text-xs text-red-300 font-['Padauk',sans-serif]">
                  {spec.prohibitedOil}
                </div>
              </div>

              {/* Capacity and Intervals */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block mb-0.5 font-['Padauk',sans-serif]">လဲလှယ်ဆီပမာဏ:</span>
                  <span className="font-mono font-bold text-slate-200">{spec.capacityChange}</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block mb-0.5 font-['Padauk',sans-serif]">လဲလှယ်သင့်သည့်သက်တမ်း:</span>
                  <span className="font-mono font-bold text-amber-400 text-[11px]">{spec.changeInterval}</span>
                </div>
              </div>

              {/* Checking Method */}
              <div className="space-y-1 text-xs">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block font-['Padauk',sans-serif]">
                  ဆီအဆင့် စစ်ဆေးနည်း (How to Check):
                </span>
                <p className="text-slate-300 font-['Padauk',sans-serif] leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  {spec.checkingMethodMm}
                </p>
              </div>
            </div>

            {/* Note Warning */}
            <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300/90 font-['Padauk',sans-serif] flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{spec.warningMm}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
