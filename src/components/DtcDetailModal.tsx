import React from 'react';
import { 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Wrench, 
  Zap, 
  Cpu, 
  Printer, 
  Share2, 
  ArrowRight,
  ShieldAlert,
  Flame,
  HelpCircle,
  Car,
  ShieldCheck,
  Check
} from 'lucide-react';
import { DtcItem } from '../types/diagnostic';

interface DtcDetailModalProps {
  dtc: DtcItem | null;
  onClose: () => void;
  onNavigateToWiring?: (code?: string) => void;
  onAskAiForCode?: (code: string) => void;
}

export const DtcDetailModal: React.FC<DtcDetailModalProps> = ({
  dtc,
  onClose,
  onNavigateToWiring,
  onAskAiForCode,
}) => {
  if (!dtc) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80">
      <div 
        className="bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between print:border-b-2 print:border-black print:bg-white">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl font-black text-amber-400 bg-slate-900 px-3 py-1 rounded-xl border border-amber-500/30 print:bg-gray-100 print:text-black print:border-black">
              {dtc.code}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                  dtc.severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  dtc.severity === 'high' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  dtc.severity === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-slate-700 text-slate-300'
                }`}>
                  SEVERITY: {dtc.severity}
                </span>
                <span className="text-xs text-slate-400 font-mono">[{dtc.category}]</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                {dtc.titleEn}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Print Customer Job Card"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">ပရင့်ထုတ်ရန်</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-5 text-slate-200 print:text-black print:space-y-3">
          {/* Main Title & Burmese Description */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white font-['Padauk',sans-serif] print:text-black">
              ၁။ အဓိပ္ပာယ် အနှစ်ချုပ်: {dtc.titleMm}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif] leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300 print:text-black">
              {dtc.descriptionMm}
            </p>
          </div>

          {/* Emergency Advice Highlight */}
          {dtc.emergencyAdviceMm && (
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              dtc.severity === 'critical'
                ? 'bg-red-950/40 border-red-500/40 text-red-200'
                : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
            }`}>
              <ShieldAlert className={`w-5 h-5 shrink-0 mt-0.5 ${
                dtc.severity === 'critical' ? 'text-red-400' : 'text-emerald-400'
              }`} />
              <div className="space-y-0.5 text-xs font-['Padauk',sans-serif]">
                <strong className="block text-xs uppercase tracking-wider font-bold">
                  ၂။ အရေးပေါ် ဆက်မောင်းသင့်/မမောင်းသင့် အကြံပြုချက်:
                </strong>
                <p className="leading-relaxed">{dtc.emergencyAdviceMm}</p>
              </div>
            </div>
          )}

          {/* Symptoms Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 print:text-black">
              <AlertTriangle className="w-4 h-4" />
              <span>၃။ ကားမှာ ဖြစ်ပေါ်နေမည့် လက္ခဏာများ (Symptoms):</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dtc.symptomsMm.map((symptom, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-xs flex items-start gap-2 font-['Padauk',sans-serif] print:bg-white print:border-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5 print:bg-black" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Causes List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5 print:text-black">
              <ShieldAlert className="w-4 h-4" />
              <span>၄။ ဖြစ်နိုင်ခြေရှိသော အကြောင်းရင်းများ (Root Causes):</span>
            </h4>
            <div className="space-y-1.5">
              {dtc.causesMm.map((cause, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-xs flex items-start gap-2 font-['Padauk',sans-serif] print:bg-white print:border-gray-300"
                >
                  <span className="text-red-400 font-bold shrink-0 print:text-black">#{idx + 1}</span>
                  <span>{cause}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Diagnostic & Fix Guide */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 print:text-black">
              <Wrench className="w-4 h-4" />
              <span>၅။ လက်တွေ့ စစ်ဆေးပြုပြင်နည်း အဆင့်ဆင့် (Step-by-Step Fix):</span>
            </h4>
            <div className="space-y-2">
              {dtc.diagnosisStepsMm.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-emerald-950/20 border border-emerald-900/50 p-3 rounded-xl text-xs flex items-start gap-2.5 font-['Padauk',sans-serif] leading-relaxed print:bg-white print:border-gray-300"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5 print:bg-gray-200 print:text-black">
                    {idx + 1}
                  </span>
                  <span className="text-slate-200 print:text-black">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gearbox Wiring & Solenoid Specs (If available) */}
          {dtc.gearWiringReference && (
            <div className="bg-cyan-950/30 border border-cyan-800/60 rounded-2xl p-4 space-y-3 print:bg-white print:border-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 font-mono print:text-black">
                  <Cpu className="w-4 h-4" />
                  ၆။ ဂီယာဝိုင်ယာ & PINOUT လမ်းညွှန်:
                </span>
                {onNavigateToWiring && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToWiring(dtc.code);
                    }}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer print:hidden"
                  >
                    <span>ဝိုင်ယာပြား ဖွင့်ကြည့်မည်</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-200 font-['Padauk',sans-serif] bg-slate-950/80 p-3 rounded-xl border border-cyan-900/40 print:bg-white print:border-gray-200 print:text-black">
                🔌 {dtc.gearWiringReference}
              </div>

              {dtc.solenoidSpecs && dtc.solenoidSpecs.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {dtc.solenoidSpecs.map((spec, i) => (
                    <div key={i} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1 print:bg-white print:border-gray-300 print:text-black">
                      <div className="text-amber-400 font-bold print:text-black">{spec.name}</div>
                      <div className="text-slate-300 print:text-black">Pin: {spec.pinNumber}</div>
                      <div className="text-emerald-400 font-bold print:text-black">Ohm: {spec.normalResistance}</div>
                      <div className="text-slate-400 text-[11px] print:text-gray-600">{spec.wireColor}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Affected Cars */}
          {dtc.affectedCarsMm && (
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center gap-2 print:bg-white print:border-gray-300">
              <Car className="w-4 h-4 text-amber-400 shrink-0 print:text-black" />
              <span className="text-slate-400 font-['Padauk',sans-serif] print:text-black">အဖြစ်များသော ကားများ:</span>
              <span className="text-slate-200 font-semibold font-['Padauk',sans-serif] print:text-black">{dtc.affectedCarsMm}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-slate-400 font-['Padauk',sans-serif]">
            DTC-PRO မော်တော်ယာဉ် ကုတ်ဖတ် & ဝိုင်ယာ လမ်းညွှန်စနစ်
          </div>

          <div className="flex items-center gap-2">
            {onAskAiForCode && (
              <button
                onClick={() => {
                  onClose();
                  onAskAiForCode(dtc.code);
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-slate-700"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>ဆရာကြီး AI နှင့် မေးမြန်းမည်</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition cursor-pointer shadow"
            >
              ပိတ်မည် (Close)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
