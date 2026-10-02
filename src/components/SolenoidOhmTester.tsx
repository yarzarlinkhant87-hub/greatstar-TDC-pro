import React, { useState, useEffect } from 'react';
import { 
  Sliders, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Zap, 
  Info,
  Activity
} from 'lucide-react';
import { SolenoidPin } from '../types/diagnostic';

interface SolenoidOhmTesterProps {
  preselectedPin?: SolenoidPin | null;
  gearboxName?: string;
}

export const SolenoidOhmTester: React.FC<SolenoidOhmTesterProps> = ({
  preselectedPin,
  gearboxName,
}) => {
  const [selectedTarget, setSelectedTarget] = useState<string>(
    preselectedPin?.label || 'SLT'
  );
  const [meterMode, setMeterMode] = useState<'ohm' | 'continuity' | 'voltage'>('ohm');
  const [coilHealthState, setCoilHealthState] = useState<'normal' | 'open' | 'short' | 'degraded'>('normal');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [probesConnected, setProbesConnected] = useState<boolean>(true);

  // Targets list
  const targets = [
    {
      id: 'SLT',
      nameMm: 'Toyota U340E - SLT Line Pressure Solenoid',
      specMin: 5.0,
      specMax: 5.6,
      normalVal: 5.3,
      unit: 'Ω',
      roleMm: 'ပင်မဆီဖိအား ထိန်းချုပ်ဆလိုးနွိုက် (Probox, Vitz)',
      code: 'P0770 / P0746'
    },
    {
      id: 'S1',
      nameMm: 'Toyota U340E - S1 Shift Solenoid No. 1',
      specMin: 11.0,
      specMax: 15.0,
      normalVal: 12.8,
      unit: 'Ω',
      roleMm: 'ဂီယာ ၁ နှင့် ၂ ပြောင်းလဲပေးသော ဆလိုးနွိုက်',
      code: 'P0750'
    },
    {
      id: 'S2',
      nameMm: 'Toyota U340E - S2 Shift Solenoid No. 2',
      specMin: 11.0,
      specMax: 15.0,
      normalVal: 13.2,
      unit: 'Ω',
      roleMm: 'ဂီယာ ၃ နှင့် ၄ ပြောင်းလဲပေးသော ဆလိုးနွိုက်',
      code: 'P0755'
    },
    {
      id: 'K310_SL1',
      nameMm: 'Toyota K310 CVT - SL1 Primary Solenoid',
      specMin: 5.0,
      specMax: 5.6,
      normalVal: 5.2,
      unit: 'Ω',
      roleMm: 'CVT အချိုးပြောင်း ဆလိုးနွိုက် (Fielder, Axio)',
      code: 'P0746'
    },
    {
      id: 'FIT_SC',
      nameMm: 'Honda Fit - Start Clutch Solenoid',
      specMin: 4.5,
      specMax: 5.5,
      normalVal: 5.0,
      unit: 'Ω',
      roleMm: 'စထွက်ချိန် ကလပ်ထိန်း ဆလိုးနွိုက် (Fit GD1/GE6)',
      code: 'P1887'
    },
    {
      id: 'NOTE_STEP',
      nameMm: 'Nissan Note JF015E - Primary Solenoid',
      specMin: 5.6,
      specMax: 6.5,
      normalVal: 6.0,
      unit: 'Ω',
      roleMm: 'Xtronic CVT ပင်မဆီဖိအား ထိန်းချုပ်ဆလိုးနွိုက်',
      code: 'P0841'
    }
  ];

  const currentTarget = targets.find(t => t.id === selectedTarget) || targets[0];

  // Calculate LCD reading based on mode and health state
  let readingText = '0.00';
  let readingUnit = 'Ω';
  let isGood = false;
  let statusTextMm = '';

  if (!probesConnected) {
    readingText = meterMode === 'voltage' ? '0.00' : 'O.L';
    readingUnit = meterMode === 'voltage' ? 'V' : 'Ω';
    statusTextMm = 'Probes များ မထိစပ်သေးပါ (တိုင်များသို့ ထိကပ်ပါ)';
  } else if (meterMode === 'ohm') {
    readingUnit = 'Ω';
    if (coilHealthState === 'normal') {
      readingText = currentTarget.normalVal.toFixed(1);
      isGood = true;
      statusTextMm = `ပုံမှန် (Normal) - ခုခံမှုသည် စံသတ်မှတ်ချက် ${currentTarget.specMin} - ${currentTarget.specMax} Ω အတွင်း ရှိပါသည်`;
    } else if (coilHealthState === 'open') {
      readingText = 'O.L';
      isGood = false;
      statusTextMm = 'ကွိုင်ပြတ်နေသည် (Open Circuit) - Solenoid အတွင်းပိုင်း လျှပ်စစ်ကွိုင်ပြတ်တောက်နေသဖြင့် အသစ်လဲရမည်';
    } else if (coilHealthState === 'short') {
      readingText = '0.1';
      isGood = false;
      statusTextMm = 'ရှော့ခ်ဖြစ်နေသည် (Short Circuit) - ကွိုင်ခွေများ အချင်းချင်း ပူးကပ်ရှော့ဖြစ်နေပါသည် (အသစ်လဲရန်)';
    } else if (coilHealthState === 'degraded') {
      readingText = '42.5';
      isGood = false;
      statusTextMm = 'ခုခံမှုလွန်ကဲနေသည် (High Resistance) - ကွိုင်အပူလောင်ကျွမ်းသဖြင့် Ohm တန်ဖိုး မြင့်တက်နေပါသည်';
    }
  } else if (meterMode === 'continuity') {
    readingUnit = 'Ω';
    if (coilHealthState === 'short') {
      readingText = '0.1';
      statusTextMm = 'အဆက်အသွယ်ရှိသည် (Continuous) - ဘီပီအသံ မြည်နေသည်';
    } else if (coilHealthState === 'normal') {
      readingText = currentTarget.normalVal.toFixed(1);
      statusTextMm = `ခုခံမှုတန်ဖိုး ${currentTarget.normalVal} Ω ရှိပါသည်`;
    } else {
      readingText = 'O.L';
      statusTextMm = 'အဆက်အသွယ်ပြတ်တောက်နေသည် (Open Loop)';
    }
  } else if (meterMode === 'voltage') {
    readingUnit = 'V';
    readingText = coilHealthState === 'open' ? '0.00' : '12.45';
    isGood = coilHealthState !== 'open';
    statusTextMm = 'ECU/TCM မှ Solenoid သို့ ပေးပို့သော ဗို့အားဖြစ်သည်';
  }

  // Play audio beep for continuity test if short or continuity mode
  const playBeep = () => {
    if (!audioEnabled || typeof window === 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      // Audio not permitted or supported
    }
  };

  useEffect(() => {
    if (meterMode === 'continuity' && (coilHealthState === 'short' || coilHealthState === 'normal') && probesConnected) {
      playBeep();
    }
  }, [meterMode, coilHealthState, probesConnected]);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              <Sliders className="w-3.5 h-3.5" />
              DIGITAL MULTIMETER & SOLENOID TESTER
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Chakra_Petch',sans-serif]">
              Solenoid ခုခံမှု (Ohm) နှင့် ဝိုင်ယာစမ်းသပ်စနစ်
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif]">
              မာတီမီတာ (Multimeter) ဖြင့် ဂီယာ Solenoid Valve များ ကောင်းမကောင်း၊ ကွိုင်ပြတ်/ရှော့ ရှိမရှိ လက်တွေ့တိုင်းတာ စစ်ဆေးနိုင်ပါသည်
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 text-xs font-mono ${
                audioEnabled ? 'bg-amber-500/15 border-amber-500 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
              title="Continuity Beep အသံဖွင့်/ပိတ်"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{audioEnabled ? 'BEEP ON' : 'MUTE'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Multimeter Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Multimeter Hardware Simulator (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            {/* Multimeter Top Brand Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <span className="font-mono text-xs font-bold text-amber-400 tracking-widest uppercase">
                AUTO-METER PRO // TRUE-RMS MULTIMETER
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                CAT III 600V
              </span>
            </div>

            {/* LCD Screen Display */}
            <div className="bg-[#18231c] border-4 border-slate-800 rounded-2xl p-5 mb-6 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-500/80 mb-1">
                <span>{meterMode.toUpperCase()} MODE</span>
                <span>AUTO RANGE</span>
              </div>

              {/* Main Numbers */}
              <div className="flex items-baseline justify-end gap-2 font-mono py-2">
                <span className="text-4xl sm:text-6xl font-bold tracking-wider text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                  {readingText}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-500">
                  {readingUnit}
                </span>
              </div>

              {/* Sub-status on LCD */}
              <div className="pt-2 border-t border-emerald-900/60 flex items-center justify-between text-[11px] font-mono text-emerald-400/90">
                <span>TARGET: {currentTarget.id}</span>
                <span>SPEC: {currentTarget.specMin} - {currentTarget.specMax} {currentTarget.unit}</span>
              </div>
            </div>

            {/* Rotary Selector Dial */}
            <div className="flex flex-col items-center justify-center my-4 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                မီတာခလုတ် ရွေးချယ်မှု (Rotary Mode):
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setMeterMode('ohm')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
                    meterMode === 'ohm' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Ω (Resistance)
                </button>
                <button
                  onClick={() => setMeterMode('continuity')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1 ${
                    meterMode === 'continuity' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>🔊 (Beep)</span>
                </button>
                <button
                  onClick={() => setMeterMode('voltage')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
                    meterMode === 'voltage' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  DCV (12V)
                </button>
              </div>
            </div>

            {/* Probe Simulator */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="w-3 h-3 rounded-full bg-red-600 inline-block shadow" />
                  <span className="text-red-300">RED (+)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="w-3 h-3 rounded-full bg-slate-800 inline-block border border-slate-600" />
                  <span className="text-slate-400">BLACK (GND)</span>
                </div>
              </div>

              <button
                onClick={() => setProbesConnected(!probesConnected)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  probesConnected 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {probesConnected ? '✓ Probes Connected' : '✕ Probes Disconnected'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Solenoid Selection & Fault Condition Simulation (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Target Solenoid Picker */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>၁။ စမ်းသပ်မည့် Solenoid ရွေးချယ်ပါ:</span>
            </h3>

            <div className="space-y-2">
              {targets.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTarget(t.id)}
                  className={`w-full text-left p-3 rounded-xl border transition cursor-pointer ${
                    selectedTarget === t.id
                      ? 'bg-amber-500/15 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-0.5">
                    <span>{t.id}</span>
                    <span className="font-mono text-emerald-400">{t.specMin} - {t.specMax} {t.unit}</span>
                  </div>
                  <div className="text-xs text-slate-200 font-['Padauk',sans-serif]">
                    {t.nameMm}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    Related Code: {t.code}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Simulate Coil Health State */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>၂။ Solenoid ချွတ်ယွင်းမှု အခြေအနေ စမ်းသပ်ရန်:</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCoilHealthState('normal')}
                className={`p-2.5 rounded-xl border text-xs text-left transition cursor-pointer ${
                  coilHealthState === 'normal'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">✓ ပုံမှန် (Normal)</div>
                <div className="text-[10px] opacity-75 font-mono">{currentTarget.normalVal} Ω</div>
              </button>

              <button
                onClick={() => setCoilHealthState('open')}
                className={`p-2.5 rounded-xl border text-xs text-left transition cursor-pointer ${
                  coilHealthState === 'open'
                    ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">✕ ကွိုင်ပြတ် (Open)</div>
                <div className="text-[10px] opacity-75 font-mono">O.L (Infinite)</div>
              </button>

              <button
                onClick={() => setCoilHealthState('short')}
                className={`p-2.5 rounded-xl border text-xs text-left transition cursor-pointer ${
                  coilHealthState === 'short'
                    ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">⚡ ရှော့ခ် (Short)</div>
                <div className="text-[10px] opacity-75 font-mono">0.1 Ω (Beep)</div>
              </button>

              <button
                onClick={() => setCoilHealthState('degraded')}
                className={`p-2.5 rounded-xl border text-xs text-left transition cursor-pointer ${
                  coilHealthState === 'degraded'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold mb-0.5">⚠️ ကွိုင်ကျက် (High Ω)</div>
                <div className="text-[10px] opacity-75 font-mono">42.5 Ω</div>
              </button>
            </div>

            {/* Diagnostic Conclusion Box in Burmese */}
            <div className={`p-4 rounded-xl border text-xs font-['Padauk',sans-serif] leading-relaxed ${
              isGood 
                ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200' 
                : 'bg-red-950/40 border-red-800 text-red-200'
            }`}>
              <div className="font-bold flex items-center gap-1.5 mb-1">
                {isGood ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}
                <span>စစ်ဆေးတွေ့ရှိချက် သုံးသပ်ချက်:</span>
              </div>
              <p>{statusTextMm}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
