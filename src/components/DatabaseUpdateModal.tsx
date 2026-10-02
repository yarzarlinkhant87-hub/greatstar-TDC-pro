import React, { useState } from 'react';
import { 
  X, 
  RefreshCw, 
  CheckCircle2, 
  CloudDownload, 
  Database, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  Sparkles,
  Server,
  HardDrive,
  Layers,
  ArrowRight
} from 'lucide-react';

interface DatabaseUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOnline: boolean;
  setIsOnline: (online: boolean) => void;
}

export const DatabaseUpdateModal: React.FC<DatabaseUpdateModalProps> = ({
  isOpen,
  onClose,
  isOnline,
  setIsOnline,
}) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updateProgress, setUpdateProgress] = useState<number>(0);
  const [updateStatusText, setUpdateStatusText] = useState<string>('');
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string>('ယနေ့ ၂၀၂၆ အောက်တိုဘာလ (နောက်ဆုံးဗားရှင်း)');
  const [updateCompleted, setUpdateCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartUpdate = () => {
    setIsUpdating(true);
    setUpdateCompleted(false);
    setUpdateProgress(10);
    setUpdateStatusText('Cloud Server သို့ ချိတ်ဆက်နေပါသည်...');

    setTimeout(() => {
      setUpdateProgress(35);
      setUpdateStatusText('အာရှ၊ ဥရောပ၊ အမေရိက ကားမော်ဒယ်အသစ်များ ဒေါင်းလုဒ်ဆွဲနေပါသည်...');
    }, 700);

    setTimeout(() => {
      setUpdateProgress(68);
      setUpdateStatusText('P0, P1, C, B, U Error Code များနှင့် နိမ်းပလိပ်ပြား Specs များ Sync ပြုလုပ်နေပါသည်...');
    }, 1500);

    setTimeout(() => {
      setUpdateProgress(90);
      setUpdateStatusText('ဖုန်းတွင်း Local Storage / Offline Vault ထဲသို့ သိမ်းဆည်းနေပါသည်...');
    }, 2200);

    setTimeout(() => {
      setUpdateProgress(100);
      setUpdateStatusText('ဆော့ဝဲဒေတာ အောင်မြင်စွာ Update ပြုလုပ်ပြီးပါပြီ!');
      setIsUpdating(false);
      setUpdateCompleted(true);
      setLastUpdatedTime(new Date().toLocaleTimeString() + ' တွင် အပ်ဒိတ်ပြီး');
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80">
      <div 
        className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl max-w-lg w-full flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-['Chakra_Petch',sans-serif] flex items-center gap-2">
                <span>ဆော့ဝဲအရှင် ဒေတာ အပ်ဒိတ်စနစ်</span>
                <span className="text-[10px] bg-emerald-500 text-slate-950 font-bold font-mono px-1.5 py-0.2 rounded uppercase">
                  LIVE SYNC
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                လိုင်းမရှိလည်းသုံး၊ လိုင်းဖွင့်ပါက အသစ်အသစ်သော ကားဒေတာများ တင်နိုင်ခြင်း
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
        <div className="p-5 space-y-4">
          {/* Online / Offline Dual Mode Selector */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                isOnline ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
              }`}>
                {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono">
                  {isOnline ? 'ONLINE CLOUD SYNC ချိတ်ဆက်ထားသည်' : 'OFFLINE LOCAL VAULT (လိုင်းပိတ်သုံးနေသည်)'}
                </div>
                <div className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                  {isOnline 
                    ? 'AI Cloud နှင့် တိုက်ရိုက်ချိတ်ဆက်ပြီး ကားဒေတာအသစ်များ အလိုအလျောက် ရယူနိုင်သည်' 
                    : 'အင်တာနက်မရှိဘဲ ဖုန်းထဲတွင် သိမ်းထားသော အချက်အလက်များဖြင့်သာ သုံးနေသည်'}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                isOnline 
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {isOnline ? 'ONLINE' : 'OFFLINE'}
            </button>
          </div>

          {/* Current Database Vault Stats */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                <span>OFFLINE DATABASE</span>
              </span>
              <div className="text-sm font-bold text-white">v2.5.0 PRO</div>
              <div className="text-[10px] text-emerald-400">100% ဖုန်းထဲတွင် အသင့်ရှိ</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>CAR BRANDS & SPECS</span>
              </span>
              <div className="text-sm font-bold text-cyan-300">Asia, Europe, USA</div>
              <div className="text-[10px] text-slate-400">အာရှ၊ ဥရောပ၊ အမေရိက</div>
            </div>
          </div>

          {/* Update Progress Area */}
          {isUpdating && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{updateStatusText}</span>
                </span>
                <span className="text-white font-bold">{updateProgress}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${updateProgress}%` }}
                />
              </div>
            </div>
          )}

          {updateCompleted && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-200 font-['Padauk',sans-serif]">
                <strong className="text-emerald-400 font-bold block font-mono">
                  DATABASE UPDATED SUCCESSFULLY!
                </strong>
                ကား Error Codes၊ နိမ်းပလိပ်ပြား Specs နှင့် ဂီယာဝိုင်ယာ အသစ်များအားလုံး ဖုန်းထဲသို့ ဒေါင်းလုဒ်သွင်းပြီးပါပြီ။ လိုင်းမရှိလည်း ဆက်လက် သုံးနိုင်ပါသည်။
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleStartUpdate}
              disabled={isUpdating}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold font-mono text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition cursor-pointer disabled:opacity-60"
            >
              <RefreshCw className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} />
              <span>{isUpdating ? 'ဒေတာများ တင်ယူနေပါသည်...' : 'ဒေတာအသစ်ရယူရန် (CHECK & UPDATE DATABASE)'}</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2 font-['Padauk',sans-serif]">
              မှတ်တမ်း: {lastUpdatedTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
