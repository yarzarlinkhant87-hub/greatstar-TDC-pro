import React, { useState } from 'react';
import { X, Search, Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { TOYOTA_PETROL_DATABASE } from '../data/toyotaDatabase';

interface InteractiveDecoderToolProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVehicle: (id: string) => void;
}

export const InteractiveDecoderTool: React.FC<InteractiveDecoderToolProps> = ({
  isOpen,
  onClose,
  onSelectVehicle
}) => {
  const [inputCode, setInputCode] = useState('DBA-NZE141G-AWXEK');

  if (!isOpen) return null;

  // Find exact or closest match in database
  const cleaned = inputCode.trim().toUpperCase();
  const matched = TOYOTA_PETROL_DATABASE.find(v => 
    cleaned.includes(v.chassisCode) || 
    v.fullModelCode.toUpperCase().includes(cleaned) ||
    cleaned.includes(v.nameplatePlate.model)
  );

  const sampleCodes = [
    'DBA-NZE141G-AWXEK',
    'GUN126R-DTTHXT',
    'KUN26R-PRMSYT',
    'QKG-FR1EXEG',
    'WBA8A12080K123456',
    'DBA-ZRT260-AEXEP',
    'DBA-ANH20W-PRXGK',
    'CBA-TRJ120W-GGPEK',
    'CBE-NCP51V-EXPDK'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-['Chakra_Petch',sans-serif] text-slate-100">
                တိုက်ရိုက် နိမ်းပလိပ်ပြား ဖတ်စက် (Live Nameplate Decoder)
              </h2>
              <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                နိမ်းပြားပေါ်ရှိ မော်ဒယ်ကုဒ် အပြည့်အစုံ ရိုက်ထည့်၍ အဓိပ္ပာယ်ကို တိုက်ရိုက် ခွဲခြမ်းစိတ်ဖြာပါ
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input box */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 space-y-3">
          <div className="relative">
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              placeholder="မော်ဒယ်ကုဒ် ရိုက်ထည့်ပါ (ဥပမာ DBA-NZE141G-AWXEK)..."
              className="w-full px-4 py-3 bg-slate-900 border-2 border-amber-500/50 rounded-xl text-base md:text-lg font-mono font-black text-amber-300 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Sample Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 text-[11px] shrink-0 font-mono">နမူနာများ:</span>
            {sampleCodes.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setInputCode(code)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] shrink-0 transition"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Live Result Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {matched ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-mono">ကိုက်ညီသော ကားမော်ဒယ်</span>
                  <h3 className="text-lg font-bold text-slate-100 font-['Chakra_Petch',sans-serif]">
                    {matched.modelName} ({matched.chassisCode})
                  </h3>
                  <p className="text-xs text-slate-300 font-['Padauk',sans-serif]">{matched.burmeseName}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectVehicle(matched.id);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-lg font-['Padauk',sans-serif]"
                >
                  <span>ကတ်ပြားသို့ သွားမည်</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Code Breakdown Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">
                  အက္ခရာတစ်လုံးချင်းစီ ခွဲခြမ်းချက်
                </h4>

                <div className="grid grid-cols-1 gap-2">
                  {matched.codeBreakdown.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-black text-sm shrink-0">
                        {item.codeSegment}
                      </span>
                      <div>
                        <span className="text-xs text-slate-400 font-mono block">{item.meaning}</span>
                        <p className="text-xs md:text-sm text-slate-200 font-bold font-['Padauk',sans-serif]">
                          {item.meaningMm}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Specs Snapshot */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">အင်ဂျင်:</span>
                  <span className="font-bold text-emerald-400 font-mono">{matched.engine.code}</span>
                  <span className="text-[11px] text-slate-300 block">{matched.engine.displacement}</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">ဂီယာဘောက်စ်:</span>
                  <span className="font-bold text-sky-400 font-mono">{matched.transmission.transCode}</span>
                  <span className="text-[11px] text-slate-300 block">{matched.transmission.transType}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">ဆွဲအား (Drive):</span>
                  <span className="font-bold text-amber-400 font-mono">{matched.transmission.driveType}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="font-['Padauk',sans-serif]">
                မော်ဒယ်ကုဒ် အပြည့်အစုံ သို့မဟုတ် အပိုင်းအစကို အပေါ်ရှိ နမူနာခလုတ်များ နှိပ်၍ စမ်းသပ်ကြည့်ပါခင်ဗျာ။
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition text-xs"
          >
            ပိတ်မည် (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
