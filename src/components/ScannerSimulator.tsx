import React, { useState } from 'react';
import { 
  Scan, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  RefreshCw, 
  ArrowRight, 
  Flame, 
  Gauge, 
  Trash2,
  Plug,
  Wrench,
  Check,
  ChevronRight,
  Info
} from 'lucide-react';
import { SCAN_SCENARIOS, DTC_DATABASE } from '../data/dtcDatabase';
import { DtcItem, ScanScenario } from '../types/diagnostic';

interface ScannerSimulatorProps {
  onSelectDtc: (dtc: DtcItem) => void;
  onNavigateToWiring: (gearboxId?: string) => void;
  onAskAiWithCodes: (codes: string[], carInfo: string) => void;
}

export const ScannerSimulator: React.FC<ScannerSimulatorProps> = ({
  onSelectDtc,
  onNavigateToWiring,
  onAskAiWithCodes,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCAN_SCENARIOS[0].id);
  const [customCodeInput, setCustomCodeInput] = useState<string>('');
  const [ignitionState, setIgnitionState] = useState<'off' | 'on' | 'running'>('on');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanStepText, setScanStepText] = useState<string>('');
  const [hasScanned, setHasScanned] = useState<boolean>(false);
  const [scannedResults, setScannedResults] = useState<DtcItem[]>([]);
  const [currentScenario, setCurrentScenario] = useState<ScanScenario | null>(null);
  const [isCleared, setIsCleared] = useState<boolean>(false);

  const startScan = (scenarioToRun?: ScanScenario, customCode?: string) => {
    if (ignitionState === 'off') {
      alert('သတိပေးချက်: ကားစက်သော့ (Ignition Switch) ကို "ON" သို့မဟုတ် "ENGINE RUNNING" အရင်ဖွင့်ပေးပါ!');
      return;
    }

    setIsScanning(true);
    setScanProgress(0);
    setHasScanned(false);
    setIsCleared(false);

    const scenario = scenarioToRun || SCAN_SCENARIOS.find(s => s.id === selectedScenarioId) || SCAN_SCENARIOS[0];
    setCurrentScenario(scenario);

    const steps = [
      { p: 15, text: 'OBD-II 16-Pin DLC ပလပ်ခေါင်း ချိတ်ဆက်မှု စစ်ဆေးနေသည်...' },
      { p: 35, text: 'ပရိုတိုကော ရှာဖွေနေသည် (ISO 15765-4 CAN 11-bit 500kbps)...' },
      { p: 60, text: 'ECU (အင်ဂျင်) နှင့် TCM (ဂီယာကွန်ပျူတာ) အချက်အလက် ဖတ်ရှုနေသည်...' },
      { p: 85, text: 'Fault Codes & Freeze Frame Data ဆွဲထုတ်နေသည်...' },
      { p: 100, text: 'စစ်ဆေးမှု ပြီးဆုံးပါပြီ။ အဖြေထုတ်ပေးနေသည်...' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setScanProgress(steps[currentStep].p);
        setScanStepText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setHasScanned(true);

        // Find matching DTCs
        let codesToLookup = scenario.dtcCodes;
        if (customCode && customCode.trim()) {
          codesToLookup = [customCode.trim().toUpperCase()];
        }

        const found: DtcItem[] = [];
        codesToLookup.forEach(code => {
          const match = DTC_DATABASE.find(d => d.code.toUpperCase() === code.toUpperCase());
          if (match) {
            found.push(match);
          } else {
            // Generate dummy fallback DTC item
            found.push({
              code: code.toUpperCase(),
              titleMm: `${code.toUpperCase()} အထူးစစ်ဆေးရမည့် Error Code`,
              titleEn: `Manufacturer Specific DTC ${code.toUpperCase()}`,
              category: code.startsWith('P07') || code.startsWith('P08') || code.startsWith('P27') ? 'Transmission' : 'Engine',
              severity: 'high',
              descriptionMm: `ဤကုတ် (${code.toUpperCase()}) သည် ကားကွန်ပျူတာမှ ပေးပို့သော ချွတ်ယွင်းချက် ဖြစ်သည်။ အသေးစိတ်ကို ဆရာကြီး AI ဖြင့် ဆက်လက်စစ်ဆေးနိုင်ပါသည်။`,
              symptomsMm: ['Check Engine မီးလင်းခြင်း', 'ကားစွမ်းဆောင်ရည် ကျဆင်းခြင်း'],
              causesMm: ['ဝိုင်ယာကြိုးချွတ်ယွင်းခြင်း', 'ဆင်ဆာ သို့မဟုတ် Solenoid ပျက်စီးခြင်း'],
              diagnosisStepsMm: ['ဝိုင်ယာလိုင်း စစ်ဆေးပါ', 'Multimeter ဖြင့် ဗို့အားနှင့် အွမ်တိုင်းပါ'],
              milStatus: true
            });
          }
        });

        setScannedResults(found);
      }
    }, 450);
  };

  const handleClearCodes = () => {
    if (window.confirm('သတိပေးချက်: ကားကွန်ပျူတာအတွင်းရှိ Error Code များကို အမှန်တကယ် ဖျက်ပစ် (Clear DTC) လိုပါသလား? (အမှားအယွင်း ပြင်ဆင်ပြီးမှသာ ဖျက်သင့်ပါသည်)')) {
      setIsScanning(true);
      setScanProgress(50);
      setScanStepText('ECU / TCM မှ DTC Fault Memory များကို ဖျက်ပစ်နေသည် (Service 04)...');
      setTimeout(() => {
        setIsScanning(false);
        setScannedResults([]);
        setIsCleared(true);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Concept Explainer */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              <Plug className="w-3.5 h-3.5" />
              OBD-II VIRTUAL SCAN TOOL
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              ကားစက်ထိုး ကုတ်ဖတ် စမ်းသပ်စနစ် (DTC Scanner Simulator)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-['Padauk',sans-serif]">
              OBD-II စက်ထိုးကိရိယာကို ကား၏ 16-Pin DLC ခေါင်းတွင် ထိုးစစ်လိုက်သကဲ့သို့ အင်ဂျင်နှင့် အော်တို/CVT ဂီယာကွန်ပျူတာ (ECU/TCM) မှ ပေါ်လာသော Error Code များကို <strong className="text-amber-400">မြန်မာဘာသာဖြင့် တိကျရှင်းလင်းစွာ ချက်ချင်းဖတ်ရှုနိုင်သည်</strong>။
            </p>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            <button
              onClick={() => startScan()}
              disabled={isScanning}
              className="w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              <Scan className={`w-5 h-5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'စစ်ဆေးနေပါသည်...' : 'စက်ထိုးပြီး စစ်ဆေးမည်'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Control Panel & Scanner Hardware Unit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Vehicle & Ignition Setup (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-400" />
              ၁။ စစ်ဆေးမည့်ကား / ပြဿနာ ရွေးချယ်ပါ
            </h3>

            <div className="space-y-2.5 mb-5">
              {SCAN_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedScenarioId(sc.id);
                    setCustomCodeInput('');
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    selectedScenarioId === sc.id && !customCodeInput
                      ? 'bg-amber-500/15 border-amber-500 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="font-['Chakra_Petch',sans-serif] text-amber-400">{sc.brand}</span>
                    <span className="font-mono bg-slate-800 px-1.5 py-0.5 rounded text-[11px] text-slate-300">
                      {sc.dtcCodes.join(', ')}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mb-1">
                    {sc.carNameMm}
                  </div>
                  <div className="text-[11px] text-slate-400 font-['Padauk',sans-serif] line-clamp-1">
                    {sc.reportedProblemMm}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Code Input */}
            <div className="pt-3 border-t border-slate-800/80">
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                သို့မဟုတ် မိမိဖတ်လိုသော Error Code ရိုက်ထည့်ပါ:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ဥပမာ- P0705, P0750, P0171..."
                  value={customCodeInput}
                  onChange={(e) => setCustomCodeInput(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 uppercase"
                />
                <button
                  onClick={() => {
                    if (customCodeInput.trim()) {
                      startScan(undefined, customCodeInput);
                    }
                  }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold rounded-lg text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                >
                  စစ်မည်
                </button>
              </div>
            </div>

            {/* Ignition Switch Simulator */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400 font-medium">စက်သော့အနေအထား (Ignition):</span>
                <span className={`font-mono font-bold ${
                  ignitionState === 'off' ? 'text-slate-500' : ignitionState === 'on' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {ignitionState === 'off' ? 'OFF (စက်သတ်)' : ignitionState === 'on' ? 'KEY ON (မီးပွင့်)' : 'RUNNING (စက်နှိုး)'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  onClick={() => setIgnitionState('off')}
                  className={`py-1.5 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    ignitionState === 'off' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OFF
                </button>
                <button
                  onClick={() => setIgnitionState('on')}
                  className={`py-1.5 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    ignitionState === 'on' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ON
                </button>
                <button
                  onClick={() => setIgnitionState('running')}
                  className={`py-1.5 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                    ignitionState === 'running' ? 'bg-emerald-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  RUN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Scanner Diagnostic HUD Screen (8 Cols) */}
        <div className="lg:col-span-8">
          <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col min-h-[460px]">
            {/* Scanner Bezel Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="font-mono text-slate-300 font-semibold tracking-wider">
                  SCANNER V9.4 // LIVE ECU/TCM DATA
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {hasScanned && scannedResults.length > 0 && (
                  <span className="flex items-center gap-1 text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 animate-pulse">
                    <Flame className="w-3.5 h-3.5" />
                    MIL ON ({scannedResults.length} FAULTS)
                  </span>
                )}
                {isCleared && (
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    NO DTC CODES
                  </span>
                )}
              </div>
            </div>

            {/* Main Interactive Screen Content */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Scanning Animation */}
              {isScanning && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-amber-400 animate-spin flex items-center justify-center">
                      <Scan className="w-8 h-8 text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white font-mono">
                      {scanProgress}% SCANNING...
                    </h4>
                    <p className="text-xs text-amber-300 font-['Padauk',sans-serif]">
                      {scanStepText}
                    </p>
                  </div>
                  <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 transition-all duration-300 rounded-full"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Ready to scan state */}
              {!isScanning && !hasScanned && !isCleared && (
                <div className="py-14 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    <Plug className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="max-w-md space-y-1">
                    <h4 className="text-base font-bold text-white">
                      OBD-II 16-Pin DLC ပလပ်ခေါင်း ချိတ်ဆက်ထားပြီးပါပြီ
                    </h4>
                    <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                      ကား၏ အင်ဂျင်နှင့် အော်တို/CVT ဂီယာစနစ် Error Codes များကို ဖတ်ရှုရန် အထက်ပါ <strong className="text-amber-400">"စက်ထိုးပြီး စစ်ဆေးမည်"</strong> ခလုတ်ကို နှိပ်ပါ။
                    </p>
                  </div>
                  <button
                    onClick={() => startScan()}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition cursor-pointer"
                  >
                    စက်ထိုးစစ်ဆေးခြင်း စတင်ပါ
                  </button>
                </div>
              )}

              {/* Cleared state */}
              {!isScanning && isCleared && (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-400 font-mono">
                    ALL DTCs CLEARED // NO ERROR CODES
                  </h4>
                  <p className="text-xs text-slate-400 font-['Padauk',sans-serif] max-w-sm">
                    ကားကွန်ပျူတာအတွင်းရှိ Error Code များအားလုံး အောင်မြင်စွာ ဖျက်သိမ်းပြီးပါပြီ။ Check Engine မီး ပျောက်ကွယ်သွားပါမည်။
                  </p>
                  <button
                    onClick={() => startScan()}
                    className="mt-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>ပြန်လည်စစ်ဆေးရန် (Rescan)</span>
                  </button>
                </div>
              )}

              {/* Scanned Results List */}
              {!isScanning && hasScanned && scannedResults.length > 0 && (
                <div className="space-y-4">
                  {/* Vehicle summary header */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] text-slate-400">စစ်ဆေးတွေ့ရှိသော ယာဉ်:</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <span>{currentScenario?.carNameMm || 'မော်တော်ယာဉ်'}</span>
                        <span className="text-[10px] bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded font-mono">
                          {currentScenario?.transmission || 'Auto Transmission'}
                        </span>
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleClearCodes}
                        className="px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg text-xs font-mono flex items-center gap-1 transition cursor-pointer"
                        title="DTC Code များ ဖျက်မည်"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear Codes</span>
                      </button>
                      <button
                        onClick={() => startScan()}
                        className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition cursor-pointer"
                        title="ပြန်လည် စစ်ဆေးမည်"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Scanned Fault Cards */}
                  <div className="space-y-3">
                    {scannedResults.map((dtc) => (
                      <div 
                        key={dtc.code}
                        className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4 transition-all shadow-md group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-base sm:text-lg font-bold font-mono text-amber-400 tracking-wider bg-slate-950 px-2.5 py-1 rounded-lg border border-amber-500/30">
                              {dtc.code}
                            </span>
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                              dtc.severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                              dtc.severity === 'high' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                              dtc.severity === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                              'bg-slate-700 text-slate-300'
                            }`}>
                              {dtc.severity}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">
                              [{dtc.category}]
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => onSelectDtc(dtc)}
                              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1 transition shadow cursor-pointer"
                            >
                              <span>မြန်မာလို အဖြေဖတ်ရန်</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Title in Burmese */}
                        <h5 className="text-sm font-bold text-slate-100 font-['Padauk',sans-serif] mb-1.5">
                          {dtc.titleMm}
                        </h5>

                        <p className="text-xs text-slate-300 font-['Padauk',sans-serif] leading-relaxed line-clamp-2 mb-3">
                          {dtc.descriptionMm}
                        </p>

                        {/* Quick Tips & Wiring Reference */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80">
                          <div className="flex items-start gap-1.5 text-slate-300">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-['Padauk',sans-serif]">
                              <strong className="text-slate-200">အဓိကလက္ခဏာ:</strong> {dtc.symptomsMm[0] || 'ဂီယာမပြောင်းခြင်း'}
                            </span>
                          </div>

                          {dtc.gearWiringReference ? (
                            <div className="flex items-center justify-between text-slate-300">
                              <span className="line-clamp-1 font-mono text-[11px] text-cyan-300">
                                🔌 {dtc.gearWiringReference}
                              </span>
                              <button
                                onClick={() => onNavigateToWiring(currentScenario?.brand.toLowerCase())}
                                className="text-[11px] text-amber-400 hover:underline flex items-center gap-0.5 shrink-0 ml-1 cursor-pointer"
                              >
                                ဝိုင်ယာကြည့်မည် <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <div className="text-slate-400 text-[11px]">
                              ဖြစ်နိုင်ခြေ: {dtc.causesMm[0] || 'ဝိုင်ယာ/ဆင်ဆာ စစ်ဆေးရန်'}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Freeze Frame Data Panel */}
                  {currentScenario && currentScenario.freezeFrame && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 mt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 font-mono">
                          <Gauge className="w-4 h-4 text-cyan-400" />
                          FREEZE FRAME SNAPSHOT (ကုတ်ပေါ်စဉ် ယာဉ်အခြေအနေ)
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">PID 0x02</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center text-xs">
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">ENGINE RPM</div>
                          <div className="font-mono font-bold text-amber-400">{currentScenario.freezeFrame.engineRpm} rpm</div>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">SPEED</div>
                          <div className="font-mono font-bold text-slate-200">{currentScenario.freezeFrame.vehicleSpeed} km/h</div>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">COOLANT</div>
                          <div className="font-mono font-bold text-emerald-400">{currentScenario.freezeFrame.coolantTemp}°C</div>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">ATF TEMP</div>
                          <div className={`font-mono font-bold ${currentScenario.freezeFrame.atfTemp > 100 ? 'text-red-400' : 'text-cyan-400'}`}>
                            {currentScenario.freezeFrame.atfTemp}°C
                          </div>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">GEAR POS</div>
                          <div className="font-mono font-bold text-slate-200">{currentScenario.freezeFrame.selectedGear}</div>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">BATT VOLT</div>
                          <div className="font-mono font-bold text-amber-400">{currentScenario.freezeFrame.batteryVoltage}V</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Quick Consult CTA */}
                  <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-cyan-950/40 border border-cyan-800/40 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <Info className="w-4 h-4" />
                      </div>
                      <span className="font-['Padauk',sans-serif]">
                        ဤ Error Code များနှင့်ပတ်သက်၍ လက်တွေ့ပြင်ဆင်နည်းနှင့် ဂီယာဝိုင်ယာ အခက်အခဲများကို ဆရာကြီး AI ထံ မြန်မာလို မေးမြန်းလိုပါသလား?
                      </span>
                    </div>

                    <button
                      onClick={() => onAskAiWithCodes(scannedResults.map(r => r.code), currentScenario?.carNameMm || '')}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg whitespace-nowrap shadow transition cursor-pointer flex items-center gap-1.5"
                    >
                      <span>ဆရာကြီး AI နှင့် တိုင်ပင်မည်</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
