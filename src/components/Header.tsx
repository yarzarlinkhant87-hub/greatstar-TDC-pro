import React from 'react';
import { 
  Activity, 
  Wrench, 
  Cpu, 
  Zap, 
  Sliders, 
  HelpCircle, 
  Droplets, 
  Camera, 
  Wifi, 
  WifiOff,
  Download, 
  Award,
  Scan,
  Database
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ZoomController } from './ZoomController';

interface HeaderProps {
  activeTab: 'scanner' | 'dtc-list' | 'nameplate' | 'gear-wiring' | 'multimeter' | 'ai-consult' | 'fluids';
  setActiveTab: (tab: 'scanner' | 'dtc-list' | 'nameplate' | 'gear-wiring' | 'multimeter' | 'ai-consult' | 'fluids') => void;
  scannerConnected: boolean;
  batteryVoltage: number;
  zoomScale: number;
  setZoomScale: (scale: number) => void;
  isOnline: boolean;
  setIsOnline: (online: boolean) => void;
  onOpenOcrCamera: () => void;
  onOpenInstallModal: () => void;
  onOpenUpdateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  scannerConnected,
  batteryVoltage,
  zoomScale,
  setZoomScale,
  isOnline,
  setIsOnline,
  onOpenOcrCamera,
  onOpenInstallModal,
  onOpenUpdateModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 shadow-xl">
      {/* Top Status HUD Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-mono text-emerald-400">
              <span className={`w-2 h-2 rounded-full ${scannerConnected ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-amber-500'}`} />
              DLC: {scannerConnected ? 'OBD-II 16-PIN CONNECTED' : 'STANDBY'}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 font-mono">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              BATT: <strong className="text-slate-200">{batteryVoltage.toFixed(1)}V</strong>
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
              <Wifi className="w-3 h-3 text-emerald-400" />
              100% OFFLINE READY (အော့ဖ်လိုင်းသုံးနိုင်)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 flex-wrap">
            {/* Online / Offline Sync & Update Button */}
            <button
              onClick={onOpenUpdateModal}
              className={`px-2.5 py-1 rounded-xl border text-[11px] font-bold font-mono flex items-center gap-1.5 transition cursor-pointer shadow ${
                isOnline 
                  ? 'bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-500/50 text-emerald-300' 
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
              title="ဒေတာအသစ်ရယူရန်နှင့် အွန်လိုင်း/အော့ဖ်လိုင်း ပြောင်းလဲရန်"
            >
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>{isOnline ? '🟢 ONLINE (ဒေတာအပ်ဒိတ်)' : '⚪ OFFLINE (VAULT)'}</span>
            </button>

            {/* Top Compact Zoom Controller */}
            <ZoomController zoomScale={zoomScale} setZoomScale={setZoomScale} />

            {/* Install / Save App Button */}
            <button
              onClick={onOpenInstallModal}
              className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 font-bold text-[11px] flex items-center gap-1.5 transition cursor-pointer shadow"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>ဆော့ဝဲသိမ်းမည် (INSTALL)</span>
            </button>

            {/* OCR Camera Launcher */}
            <button
              onClick={onOpenOcrCamera}
              className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>SCAN CODE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Trademark Logo & Author Header */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('scanner')}>
            <BrandLogo size="md" />

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2 font-['Chakra_Petch',sans-serif]">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    GREATSTAR • Z.N.W
                  </span>
                  <span className="text-xs bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded font-mono uppercase tracking-wider shadow">
                    DTC-PRO V9.8
                  </span>
                </h1>
              </div>
              <p className="text-xs text-slate-400 font-['Padauk',sans-serif] flex items-center gap-1.5 flex-wrap">
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  ဆရာ Zaw Naing Win (ဝပ်ရှော့အင်ဂျင်နီယာ)
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-slate-300">ကားစက်ထိုး ကုတ်ဖတ် & ဂီယာဝိုင်ယာ လက်စွဲ</span>
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('scanner')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'scanner'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>စက်ထိုးစစ်ဆေးခြင်း</span>
              <span className="text-[10px] px-1 rounded bg-black/20 font-mono">OBD2</span>
            </button>

            <button
              onClick={() => setActiveTab('dtc-list')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'dtc-list'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Error Code ရှာဖွေရန်</span>
              <span className="text-[10px] px-1 rounded bg-black/20 font-mono">DTC</span>
            </button>

            <button
              onClick={() => setActiveTab('nameplate')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'nameplate'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Scan className="w-4 h-4 text-cyan-400" />
              <span>နိမ်းပလိပ်ပြား စကန်</span>
              <span className="text-[10px] px-1 rounded bg-cyan-500/20 text-cyan-300 font-mono">VIN</span>
            </button>

            <button
              onClick={() => setActiveTab('gear-wiring')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'gear-wiring'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>ဂီယာဝိုင်ယာ လမ်းညွှန်</span>
              <span className="text-[10px] px-1 rounded bg-black/20 font-mono">Wiring</span>
            </button>

            <button
              onClick={() => setActiveTab('multimeter')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'multimeter'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Solenoid Ohm စမ်းသပ်</span>
              <span className="text-[10px] px-1 rounded bg-black/20 font-mono">Ω</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-consult')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'ai-consult'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>ဆရာကြီး AI</span>
              <span className="text-[10px] px-1 rounded bg-cyan-500/20 text-cyan-300 font-mono">AI</span>
            </button>

            <button
              onClick={() => setActiveTab('fluids')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'fluids'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Droplets className="w-4 h-4 text-emerald-400" />
              <span>ဂီယာဆီစံနှုန်း</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
