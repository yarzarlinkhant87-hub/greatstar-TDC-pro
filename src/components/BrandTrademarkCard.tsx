import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, Award, Wrench, Cpu, CheckCircle2, Sparkles } from 'lucide-react';

interface BrandTrademarkCardProps {
  onOpenInstallModal?: () => void;
  className?: string;
}

export const BrandTrademarkCard: React.FC<BrandTrademarkCardProps> = ({
  onOpenInstallModal,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/30 p-4 sm:p-5 shadow-2xl shadow-amber-500/10 ${className}`}>
      {/* Decorative Gold Glow Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left: Official Trademark Badge & Title */}
        <div className="flex items-center gap-3.5">
          <BrandLogo size="lg" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-black text-lg sm:text-2xl font-['Chakra_Petch',sans-serif] tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                GREATSTAR • Z.N.W
              </span>
              <span className="px-2 py-0.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs font-mono tracking-tight shadow">
                မူပိုင်အမှတ်တံဆိပ်
              </span>
            </div>

            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-sm sm:text-base font-bold text-amber-200 font-['Padauk',sans-serif] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                ပိုင်ရှင် - ဆရာ Zaw Naing Win (ဝပ်ရှော့အင်ဂျင်နီယာ)
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-1 font-['Padauk',sans-serif] flex items-center gap-2 flex-wrap">
              <span className="text-slate-300 font-medium">DTC-PRO Car Diagnostic & Gearbox Wiring Master</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% OFFLINE VERIFIED
              </span>
            </p>
          </div>
        </div>

        {/* Right: Feature Highlights Badge & Quick Actions */}
        <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto justify-start md:justify-end border-t md:border-t-0 border-slate-800/80 pt-3 md:pt-0">
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono w-full sm:w-auto">
            <div className="bg-slate-950/70 border border-amber-500/20 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 text-amber-300">
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>OBD-II DTC 2,000+ ကုတ်</span>
            </div>
            <div className="bg-slate-950/70 border border-emerald-500/20 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 text-emerald-300">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>ဂီယာဝိုင်ယာ & Solenoid</span>
            </div>
          </div>

          {onOpenInstallModal && (
            <button
              onClick={onOpenInstallModal}
              className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-xs transition cursor-pointer hover:shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-1.5 active:scale-95 font-['Padauk',sans-serif]"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>မူပိုင် အက်ပ်အဖြစ် ဖုန်းတွင်သွင်းမည်</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
