import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  Share2, 
  CheckCircle2, 
  WifiOff, 
  ExternalLink, 
  Copy, 
  Check, 
  AlertTriangle,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt?: any;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
}) => {
  const [activePlatform, setActivePlatform] = useState<'android' | 'ios'>('android');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  // Active Live Running URL (Development App URL on asia-southeast1)
  const devAppUrl = 'https://ais-dev-iku7oks6jsr7lqieh6shwv-563113433469.asia-southeast1.run.app';
  
  const liveUrl = (typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost') && window.location.origin !== 'null')
    ? window.location.origin
    : devAppUrl;

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setActivePlatform('ios');
    }
  }, []);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setIsInstalled(true);
        }
      } catch (err) {
        console.error('Install prompt error:', err);
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(liveUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80">
      <div 
        className="bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow">
              <img src="/favicon.svg" alt="Check Engine Light" className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-['Chakra_Petch',sans-serif] flex items-center gap-1.5 flex-wrap">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  GREATSTAR • Z.N.W
                </span>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-bold font-mono px-1.5 py-0.2 rounded uppercase">
                  DTC-PRO V9.8
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                ပိုင်ရှင် - ဆရာ Zaw Naing Win • ဖုန်းတွင် တိုက်ရိုက်သိမ်းဆည်းနည်း
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

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Status Alert: Fixed 404 URL */}
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-3.5 flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xs font-['Padauk',sans-serif]">
              <span className="font-bold text-emerald-300 block mb-0.5">
                ၄၀၄ Error မဖြစ်စေရန် လင့်ခ်အသစ် ပြင်ဆင်ပေးထားပါသည်-
              </span>
              <span className="text-slate-300">
                ယခင်လင့်ခ်တွင် 404 မပေါ်စေရန် လက်ရှိ အလုပ်လုပ်နေသော အောက်ပါ လင့်ခ်အမှန်ဖြင့် တိုက်ရိုက် ဖွင့်လှစ်နိုင်ပါပြီခင်ဗျာ။
              </span>
            </div>
          </div>

          {/* Action Box: Direct App Link */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-bold font-['Padauk',sans-serif] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>DTC-PRO တိုက်ရိုက်လင့်ခ် (Direct Live Link):</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                LIVE & WORKING
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-amber-300 truncate flex-1 select-all">
                {liveUrl}
              </div>
              <button
                onClick={handleCopyLink}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border border-slate-700 shrink-0"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{isCopied ? 'ကူးပြီး' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Open Button */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>အက်ပ်တိုက်ရိုက်လင့်ခ်သို့ သွားမည် (OPEN APP DIRECTLY)</span>
            </a>
          </div>

          {/* Direct 1-Click Install Button if supported by browser */}
          {deferredPrompt && (
            <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-3.5 space-y-2">
              <div className="text-xs text-emerald-300 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ဖုန်းထဲသို့ တိုက်ရိုက် ၁-ချက်နှိပ် သွင်းနိုင်ပါသည်</span>
              </div>
              <button
                onClick={handleInstallClick}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DTC-PRO အက်ပ်ကို ဖုန်းထဲသို့ သွင်းမည် (INSTALL NOW)</span>
              </button>
            </div>
          )}

          {/* Icon Preview Box */}
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-amber-500/50 flex items-center justify-center p-2 shadow-lg shadow-amber-500/10 shrink-0">
              <img src="/favicon.svg" alt="Check Engine Icon" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5 font-['Chakra_Petch',sans-serif]">
                <span>DTC-PRO</span>
                <span className="text-[10px] text-amber-400 font-mono">(ကားအချက်မီး လိုဂို)</span>
              </div>
              <p className="text-[11px] text-slate-400 font-['Padauk',sans-serif] mt-0.5 leading-relaxed">
                သွင်းပြီးပါက ဖုန်း Home Screen ပေါ်တွင် အထက်ပါ ကားအချက်မီး သင်္ကေတလေးဖြင့် အမြဲတမ်း ပေါ်နေမည် ဖြစ်ပါသည်။
              </p>
            </div>
          </div>

          {/* Android Chrome Instructions */}
          <div className="space-y-2.5 font-['Padauk',sans-serif] text-xs text-slate-300">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              ဖုန်းတွင် အချက်မီး Icon ဖြင့် သွင်းယူရန် အဆင့်များ-
            </h4>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                ၁
              </div>
              <div>
                ဖုန်းမျက်နှာပြင်ရှိ <strong>"Google AI Studio" icon အဟောင်းများကို ဦးစွာ ဖျက် (Remove/Uninstall)</strong> လိုက်ပါ။
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                ၂
              </div>
              <div>
                အထက်ပါ <strong>"အက်ပ်တိုက်ရိုက်လင့်ခ်သို့ သွားမည်"</strong> ခလုတ်ကို နှိပ်ပါ (သို့မဟုတ် လင့်ခ်ကို ကူးပြီး Chrome တွင် တိုက်ရိုက် ဖွင့်ပါ)။
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                ၃
              </div>
              <div>
                Chrome ညာဘက်အပေါ်ထောင့်ရှိ <strong>အစက် ၃ စက် (⋮) မီနူး</strong> ကို နှိပ်ပြီး <strong className="text-amber-400">"Install app" (အက်ပ် ထည့်သွင်းပါ)</strong> သို့မဟုတ် <strong className="text-amber-400">"Add to Home screen" (ပင်မစခရင်သို့ ထည့်ပါ)</strong> ကို နှိပ်လိုက်ပါ။
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                ✓
              </div>
              <div>
                ပြီးပါက ဖုန်းမျက်နှာပြင်ပေါ်တွင် <strong>DTC-PRO အမည်နှင့် Check Engine ကားအချက်မီး ပုံစံလေး</strong> ရောက်ရှိသွားမည် ဖြစ်ပြီး အင်တာနက်မရှိဘဲ အမြဲတမ်း ဖွင့်သုံးနိုင်ပါပြီခင်ဗျာ။
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
            DTC-PRO မော်တော်ယာဉ် ကုတ်ဖတ် & ဂီယာဝိုင်ယာ
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition cursor-pointer shadow"
          >
            နားလည်ပါပြီ (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
