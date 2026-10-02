import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  HelpCircle, 
  Sliders, 
  AlertTriangle, 
  Layers, 
  Check, 
  Droplets, 
  ArrowRight,
  ShieldCheck,
  Search,
  ExternalLink
} from 'lucide-react';
import { GEARBOX_MODELS } from '../data/gearboxWiringData';
import { GearboxModel, SolenoidPin } from '../types/diagnostic';

interface GearboxWiringExplorerProps {
  initialGearboxId?: string;
  onOpenMultimeterForPin?: (pin: SolenoidPin, gearboxName: string) => void;
}

export const GearboxWiringExplorer: React.FC<GearboxWiringExplorerProps> = ({
  initialGearboxId,
  onOpenMultimeterForPin,
}) => {
  const [selectedGearboxId, setSelectedGearboxId] = useState<string>(
    initialGearboxId || GEARBOX_MODELS[0].id
  );

  const currentGearbox: GearboxModel = 
    GEARBOX_MODELS.find(g => g.id === selectedGearboxId) || GEARBOX_MODELS[0];

  const [selectedPin, setSelectedPin] = useState<SolenoidPin>(
    currentGearbox.valveBodyConnectorPins[0]
  );

  // When gearbox changes, reset selected pin
  const handleSelectGearbox = (id: string) => {
    setSelectedGearboxId(id);
    const gb = GEARBOX_MODELS.find(g => g.id === id);
    if (gb && gb.valveBodyConnectorPins.length > 0) {
      setSelectedPin(gb.valveBodyConnectorPins[0]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              TRANSMISSION WIRING & PINOUT GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Chakra_Petch',sans-serif]">
              အော်တို & CVT ဂီယာဝိုင်ယာ လမ်းညွှန် (Gear Wiring & Solenoid Pinout)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif]">
              မြန်မာပြည်တွင် အသုံးများသော Probox, Fielder, Fit, Note, Wagon R ကားများ၏ ဂီယာပလပ်ခေါင်း Pinout၊ Solenoid ခုခံမှု (Ohm) စံနှုန်းများနှင့် ဝိုင်ယာကြိုးအရောင်များ
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-3 py-2 rounded-xl text-xs font-mono">
            <span className="text-slate-400">စနစ်:</span>
            <span className="text-amber-400 font-bold">{currentGearbox.transmissionType}</span>
          </div>
        </div>
      </div>

      {/* Gearbox Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {GEARBOX_MODELS.map((gb) => (
          <button
            key={gb.id}
            onClick={() => handleSelectGearbox(gb.id)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedGearboxId === gb.id
                ? 'bg-amber-500/15 border-amber-500 shadow-md text-white'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <div className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider mb-1">
              {gb.manufacturer}
            </div>
            <div className="text-xs font-bold text-slate-100 line-clamp-1 mb-1">
              {gb.name.split('(')[0]}
            </div>
            <div className="text-[10px] text-slate-400 font-['Padauk',sans-serif] line-clamp-1">
              {gb.popularCarsMm.split(',')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Main Interactive Pinout and Wiring Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Connector Diagram & Pin Selector (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2 font-['Chakra_Petch',sans-serif]">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>{currentGearbox.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-['Padauk',sans-serif] mt-0.5">
                  အသုံးများသောကားများ: <span className="text-slate-200">{currentGearbox.popularCarsMm}</span>
                </p>
              </div>

              <span className="text-xs font-mono bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-cyan-400">
                {currentGearbox.valveBodyConnectorPins.length} PINS
              </span>
            </div>

            {/* Visual Valve Body Plug Diagram */}
            <div className="bg-slate-950 border-2 border-slate-800 rounded-xl p-5 mb-5 text-center relative overflow-hidden">
              <div className="text-[11px] font-mono text-slate-400 mb-4 flex items-center justify-center gap-2">
                <span>[ VALVE BODY HARNESS CONNECTOR - ပလပ်ခေါင်း အပေါက်ကြည့် ပုံစံ ]</span>
              </div>

              {/* Connector Pin Slots Grid */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto py-2">
                {currentGearbox.valveBodyConnectorPins.map((pin) => (
                  <button
                    key={pin.pin}
                    onClick={() => setSelectedPin(pin)}
                    className={`w-12 h-14 rounded-xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                      selectedPin.pin === pin.pin
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold scale-110 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/50'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-80">PIN</span>
                    <span className="text-sm font-bold font-mono">{pin.pin}</span>
                    <span className="text-[9px] font-mono truncate max-w-[42px]">{pin.label}</span>
                  </button>
                ))}
              </div>

              <div className="text-[11px] text-amber-400/80 font-['Padauk',sans-serif] mt-4">
                💡 အပေါ်ရှိ Pin နံပါတ်များကို နှိပ်ပြီး သက်ဆိုင်ရာ ဝိုင်ယာကြိုးနှင့် Ohm စံနှုန်းကို စစ်ဆေးပါ
              </div>
            </div>

            {/* Solenoid Resistance Summary Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>Solenoid Ohm ခုခံမှု စံနှုန်းဇယား (Standard Specs @ 20°C)</span>
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Pin</th>
                      <th className="py-2.5 px-3">Label</th>
                      <th className="py-2.5 px-3">အမည် (မြန်မာ)</th>
                      <th className="py-2.5 px-3">Ohm စံနှုန်း (Ω)</th>
                      <th className="py-2.5 px-3">ဝိုင်ယာအရောင်</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-sans">
                    {currentGearbox.valveBodyConnectorPins.map((p) => (
                      <tr 
                        key={p.pin}
                        onClick={() => setSelectedPin(p)}
                        className={`cursor-pointer transition-colors ${
                          selectedPin.pin === p.pin 
                            ? 'bg-amber-500/10 text-white font-medium' 
                            : 'hover:bg-slate-800/50 text-slate-300'
                        }`}
                      >
                        <td className="py-2 px-3 font-mono font-bold text-amber-400">{p.pin}</td>
                        <td className="py-2 px-3 font-mono">{p.label}</td>
                        <td className="py-2 px-3 font-['Padauk',sans-serif]">{p.nameMm}</td>
                        <td className="py-2 px-3 font-mono text-emerald-400 font-semibold">{p.normalResistance}</td>
                        <td className="py-2 px-3 text-[11px] font-['Padauk',sans-serif] text-slate-400">{p.wireColor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Selected Pin Diagnostic Details & Multimeter Link (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
            {/* Header of Pin Detail */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold font-mono text-lg flex items-center justify-center shadow">
                  P{selectedPin.pin}
                </div>
                <div>
                  <div className="font-mono text-xs text-amber-400 font-bold">
                    PIN {selectedPin.pin} : {selectedPin.label}
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Padauk',sans-serif]">
                    {selectedPin.nameMm}
                  </h4>
                </div>
              </div>

              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                selectedPin.type === 'shift' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                selectedPin.type === 'pressure' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                selectedPin.type === 'lockup' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                selectedPin.type === 'ground' ? 'bg-slate-700 text-slate-300' :
                'bg-emerald-500/20 text-emerald-300'
              }`}>
                {selectedPin.type}
              </span>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-0.5">ပုံမှန်ခုခံမှု (Resistance):</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">
                  {selectedPin.normalResistance}
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-0.5">အလုပ်လုပ်ဗို့အား (Voltage):</span>
                <span className="font-mono font-bold text-cyan-400 text-xs">
                  {selectedPin.voltageRange}
                </span>
              </div>
            </div>

            {/* Wire Color */}
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1 font-['Padauk',sans-serif]">ဝိုင်ယာကြိုးအရောင် (Wire Color):</span>
              <div className="font-semibold text-slate-200 flex items-center gap-2 font-['Padauk',sans-serif]">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span>{selectedPin.wireColor}</span>
              </div>
            </div>

            {/* Function Description */}
            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-semibold uppercase text-[11px] tracking-wider block">
                လုပ်ဆောင်ချက် (Function):
              </span>
              <p className="text-slate-300 font-['Padauk',sans-serif] leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                {selectedPin.descriptionMm}
              </p>
            </div>

            {/* Testing Guide in Burmese */}
            <div className="space-y-1.5 text-xs">
              <span className="text-amber-400 font-semibold uppercase text-[11px] tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                စစ်ဆေးတိုင်းတာနည်း (Testing Procedure):
              </span>
              <div className="bg-amber-500/10 border border-amber-500/25 p-3 rounded-xl text-slate-200 font-['Padauk',sans-serif] leading-relaxed">
                {selectedPin.testProcedureMm}
              </div>
            </div>

            {/* Jump to Multimeter Tester */}
            {onOpenMultimeterForPin && (
              <button
                onClick={() => onOpenMultimeterForPin(selectedPin, currentGearbox.name)}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer shadow"
              >
                <Sliders className="w-4 h-4" />
                <span>ဤ Solenoid ကို မာတီမီတာဖြင့် စမ်းသပ်စစ်ဆေးမည်</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Fluid & TCM Location Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-400" />
              <span>ဂီယာဆီနှင့် ကွန်ပျူတာတည်နေရာ</span>
            </h4>

            <div className="space-y-1.5 font-['Padauk',sans-serif] text-slate-300">
              <div className="flex items-start gap-1">
                <span className="text-slate-400 shrink-0">ဂီယာဆီ:</span>
                <span className="text-emerald-400 font-semibold">{currentGearbox.fluidType}</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-slate-400 shrink-0">ပမာဏ:</span>
                <span>{currentGearbox.fluidCapacityMm}</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-slate-400 shrink-0">TCM တည်နေရာ:</span>
                <span>{currentGearbox.tcmLocationMm}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Checklist Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>{currentGearbox.name} အတွက် အဖြစ်များသော ဂီယာပြဿနာများနှင့် ပြုပြင်နည်း</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {currentGearbox.troubleshootingGuideMm.map((guide, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 space-y-2"
            >
              <div className="font-bold text-xs text-amber-400 font-['Padauk',sans-serif]">
                ⚠️ {guide.symptom}
              </div>
              <div className="text-[11px] text-slate-300 font-['Padauk',sans-serif]">
                <strong className="text-slate-400">အကြောင်းရင်း:</strong> {guide.possibleCause}
              </div>
              <div className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg font-['Padauk',sans-serif]">
                <strong>ပြုပြင်နည်း:</strong> {guide.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
