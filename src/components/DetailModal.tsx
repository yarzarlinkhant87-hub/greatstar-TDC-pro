import React from 'react';
import { ToyotaVehicle } from '../types/nameplate';
import { sanitizeVehicle } from '../utils/vehicleSanitizer';
import { 
  X, 
  Droplet, 
  Settings, 
  Wrench, 
  Palette, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ShieldAlert,
  Zap,
  Gauge,
  Thermometer,
  Compass
} from 'lucide-react';

interface DetailModalProps {
  vehicle: ToyotaVehicle | null;
  section: 'fluids' | 'transmission' | 'engine' | 'paint' | 'breakdown' | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  vehicle: rawVehicle,
  section,
  onClose
}) => {
  if (!rawVehicle || !section) return null;
  const vehicle = sanitizeVehicle(rawVehicle);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${
              section === 'fluids' ? 'bg-amber-500/20 text-amber-400' :
              section === 'transmission' ? 'bg-sky-500/20 text-sky-400' :
              section === 'engine' ? 'bg-emerald-500/20 text-emerald-400' :
              section === 'paint' ? 'bg-purple-500/20 text-purple-400' :
              'bg-slate-700/50 text-amber-400'
            }`}>
              {section === 'fluids' && <Droplet className="w-6 h-6" />}
              {section === 'transmission' && <Settings className="w-6 h-6" />}
              {section === 'engine' && <Wrench className="w-6 h-6" />}
              {section === 'paint' && <Palette className="w-6 h-6" />}
              {section === 'breakdown' && <Search className="w-6 h-6" />}
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold font-['Chakra_Petch',sans-serif] text-slate-100">
                {section === 'fluids' && '🛢️ ဆီအမျိုးအစားနှင့် ဝင်ဆံ့မှု ပမာဏ (Fluids Guide)'}
                {section === 'transmission' && '⚙️ ဂီယာဘောက်စ်နှင့် ဆွဲအားစနစ် (Transmission & 2WD/4WD)'}
                {section === 'engine' && '🔧 အင်ဂျင် သတ်မှတ်ချက်နှင့် စနစ်များ (Engine Specs)'}
                {section === 'paint' && '🎨 ဆေးကုဒ်နှင့် အတွင်းခန်း (Paint & Trim Specs)'}
                {section === 'breakdown' && '🔍 နိမ်းပလိပ်ပြား စာလုံးပေါင်း ဖတ်နည်း (Full Breakdown)'}
              </h2>
              <p className="text-xs text-amber-400 font-mono">
                {vehicle.modelName} ({vehicle.chassisCode}) • {vehicle.fullModelCode}
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

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 text-sm">

          {/* ================= SECTION 1: FLUIDS ================= */}
          {section === 'fluids' && (
            <div className="space-y-6">
              {/* Caution Warning Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-amber-300 font-['Padauk',sans-serif]">ဝပ်ရှော့ သတိပြုရန် စည်းကမ်းချက် -</h4>
                  <p className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                    {vehicle.fluids.transmissionFluid.cautionNote}
                  </p>
                </div>
              </div>

              {/* Engine Oil Card */}
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800 pb-2">
                  <Droplet className="w-5 h-5" />
                  <h3 className="font-bold text-base font-['Padauk',sans-serif]">အင်ဂျင်ဝိုင် သတ်မှတ်ချက် (Engine Oil)</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">သတ်မှတ် Viscosity (စေးပျစ်မှု):</span>
                    <span className="font-bold text-amber-300 font-mono text-base">{vehicle.fluids.engineOil.viscosity}</span>
                    <span className="text-[11px] text-slate-400 block mt-1">{vehicle.fluids.engineOil.standard}</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">ဆီလဲလျှင် ဝင်ဆံ့သည့် ပမာဏ:</span>
                    <span className="font-bold text-emerald-400 text-sm block">
                      Filter ပါလဲလျှင်: {vehicle.fluids.engineOil.capacityWithFilter}
                    </span>
                    <span className="text-slate-300 text-xs block mt-0.5">
                      Filter မလဲလျှင်: {vehicle.fluids.engineOil.capacityWithoutFilter}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-slate-500" />
                  <span>အကြံပြု လဲလှယ်ချိန်ကာလ: <strong className="text-slate-200">{vehicle.fluids.engineOil.interval}</strong></span>
                </div>
              </div>

              {/* Transmission Fluid Card */}
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 border-b border-slate-800 pb-2">
                  <Settings className="w-5 h-5" />
                  <h3 className="font-bold text-base font-['Padauk',sans-serif]">
                    ဂီယာဝိုင် သတ်မှတ်ချက် ({vehicle.transmission.transType})
                  </h3>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-lg border border-sky-500/30">
                  <span className="text-slate-400 text-xs block">ထည့်သွင်းရမည့် ဂီယာဆီအမျိုးအစား:</span>
                  <span className="font-extrabold text-sky-300 font-mono text-base md:text-lg block mt-0.5">
                    {vehicle.fluids.transmissionFluid.fluidType}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">အောက်ခြေဝက်အူဖွင့်လဲ (Drain & Refill)</span>
                    <span className="font-bold text-slate-100 text-sm">{vehicle.fluids.transmissionFluid.drainRefillCapacity}</span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">ဝမ်းဗိုက်ခွာ/စစ်ကာလဲ (Pan Drop)</span>
                    <span className="font-bold text-slate-100 text-sm">{vehicle.fluids.transmissionFluid.panDropFilterCapacity}</span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">ဂီယာတစ်ခုလုံး အခြောက်ဆံ့ (Dry Fill)</span>
                    <span className="font-bold text-slate-100 text-sm">{vehicle.fluids.transmissionFluid.totalDryCapacity}</span>
                  </div>
                </div>

                {/* Inspection Method */}
                <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Thermometer className="w-4 h-4" />
                    <span>ဂီယာဆီ အဆင့်စစ်ဆေးနည်း (Inspection):</span>
                  </div>
                  <p className="text-slate-300 font-['Padauk',sans-serif]">
                    {vehicle.fluids.transmissionFluid.inspectionMethod}
                  </p>
                </div>
              </div>

              {/* Differential & Coolant Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Diff Fluid */}
                {vehicle.fluids.differentialFluid && (
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="font-bold text-purple-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-4 h-4" />
                      ဒစ်ဖရန်ရှယ် / Transfer ဝိုင်
                    </h4>
                    {vehicle.fluids.differentialFluid.frontDiff && (
                      <div className="text-xs bg-slate-900 p-2 rounded border border-slate-800">
                        <span className="text-slate-400 block">Front Diff / Transfer:</span>
                        <span className="font-bold text-slate-200">{vehicle.fluids.differentialFluid.frontDiff}</span>
                      </div>
                    )}
                    {vehicle.fluids.differentialFluid.rearDiff && (
                      <div className="text-xs bg-slate-900 p-2 rounded border border-slate-800">
                        <span className="text-slate-400 block">Rear Differential:</span>
                        <span className="font-bold text-slate-200">{vehicle.fluids.differentialFluid.rearDiff}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Coolant & Brake */}
                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-rose-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Droplet className="w-4 h-4" />
                    အအေးခံရည် နှင့် ဘရိတ်ဆီ
                  </h4>
                  <div className="text-xs bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block">Radiator Coolant:</span>
                    <span className="font-bold text-slate-200">{vehicle.fluids.coolant.type}</span>
                    <span className="text-slate-400 block mt-0.5">ဝင်ဆံ့ပမာဏ: {vehicle.fluids.coolant.capacity}</span>
                  </div>
                  <div className="text-xs bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block">Brake Fluid & ဆီတိုင်ကီ:</span>
                    <span className="font-bold text-slate-200">{vehicle.fluids.brakeFluid}</span>
                    <span className="text-slate-400 block mt-0.5">ဆီတိုင်ကီ: {vehicle.fluids.fuelTankCapacity}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 2: TRANSMISSION & 2WD/4WD ================= */}
          {section === 'transmission' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-sky-950/40 p-4 md:p-5 rounded-xl border border-sky-500/30">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-mono">Transmission Code</span>
                    <h3 className="text-2xl font-black text-sky-300 font-mono tracking-wider">
                      {vehicle.transmission.transCode}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-mono">အမျိုးအစား</span>
                    <span className="block font-bold text-slate-200 text-sm">
                      {vehicle.transmission.transName}
                    </span>
                  </div>
                </div>

                {/* Drive Type Highlight */}
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {vehicle.transmission.driveType}
                    </span>
                    <span className="text-xs text-slate-400 font-['Padauk',sans-serif]">မောင်းနှင်မှု ဆွဲအား စနစ်</span>
                  </div>
                  <p className="text-sm text-slate-200 font-['Padauk',sans-serif] leading-relaxed">
                    {vehicle.transmission.driveDetailMm}
                  </p>
                </div>
              </div>

              {/* Axle Code Breakdown */}
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-3">
                <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 font-['Padauk',sans-serif]">
                  <Gauge className="w-5 h-5 text-amber-400" />
                  Axle Code ရှင်းလင်းချက် ({vehicle.transmission.axleCode})
                </h4>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs md:text-sm text-slate-300 font-['Padauk',sans-serif] leading-relaxed">
                  {vehicle.transmission.axleExplanationMm}
                </div>
              </div>

              {/* Workshop Tips for Transmission */}
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-4 h-4" />
                  ဂီယာဘောက်စ် ဝပ်ရှော့ အကြံပြုချက်
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-['Padauk',sans-serif]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>CVT ဂီယာများသည် ဂီယာဆီ အသစ်လဲတိုင်း စက်ဖြင့် Diagnostic Tool သုံး၍ <strong>CVT Oil Pressure Calibration & Memory Reset</strong> ပြုလုပ်ပေးပါက D ထိုးလျှင် ကားတုန်ခါခြင်း မဖြစ်ပေါ်တော့ပါ။</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ဆီအဆင့် တိုင်းတာရာတွင် ကားကို ညီညာသော မြေပြင်ပေါ် ထားရှိပြီး စက်ရုံသတ်မှတ် အပူချိန်ရောက်မှ Overflow Plug ဖွင့်ရပါမည်။</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ================= SECTION 3: ENGINE & SPECS ================= */}
          {section === 'engine' && (
            <div className="space-y-5">
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-mono">Engine Model</span>
                    <h3 className="text-2xl font-black text-emerald-400 font-mono tracking-wider">
                      {vehicle.engine.code}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-mono">ဆလင်ဒါ / အဆို့ရှင်စနစ်</span>
                    <span className="block font-bold text-slate-200 text-sm">
                      {vehicle.engine.valvesSystem}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">Displacement (cc အရွယ်အစား):</span>
                    <span className="font-bold text-slate-100 font-mono text-base">{vehicle.engine.displacement}</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">ဆလင်ဒါ ဖွဲ့စည်းပုံ:</span>
                    <span className="font-bold text-slate-100">{vehicle.engine.cylinders}</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">မြင်းကောင်ရေ (Horsepower):</span>
                    <span className="font-bold text-amber-300 font-mono">{vehicle.engine.horsepower}</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-xs">ရုန်းအား (Torque):</span>
                    <span className="font-bold text-amber-300 font-mono">{vehicle.engine.torque}</span>
                  </div>
                </div>

                {/* Timing System */}
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-300 font-['Padauk',sans-serif]">Timing စနစ်:</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">{vehicle.engine.timingType}</span>
                  </div>
                  {vehicle.engine.timingNote && (
                    <p className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                      {vehicle.engine.timingNote}
                    </p>
                  )}
                </div>

                {/* Spark Plug / Injector Specs */}
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 block font-['Padauk',sans-serif]">
                    {vehicle.fuelType?.includes('ဒီဇယ်') ? 'အင်ဂျက်တာ မော်ဒယ် (Injector Spec & Fuel Pressure):' : 'သတ်မှတ် မီးပလပ် (Spark Plug & Gap):'}
                  </span>
                  <span className="font-mono font-bold text-amber-300 text-xs md:text-sm block">
                    {vehicle.engine.sparkPlugOrInjector || vehicle.engine.sparkPlug || 'OEM Spec'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 4: PAINT & TRIM ================= */}
          {section === 'paint' && (
            <div className="space-y-5">
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-purple-400 border-b border-slate-800 pb-2">
                  <Palette className="w-5 h-5" />
                  <h3 className="font-bold text-base font-['Padauk',sans-serif]">မူရင်း ဆေးကုဒ်များနှင့် အတွင်းခန်း (Paint & Trim)</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.paints.map((paint) => (
                    <div 
                      key={paint.code} 
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 hover:border-purple-500/40 transition"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg shrink-0 border-2 border-slate-600 shadow-md flex items-center justify-center font-mono font-bold text-[10px] text-slate-950"
                        style={{ backgroundColor: paint.colorHex }}
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-amber-400 font-mono text-base">{paint.code}</span>
                          <span className="text-xs font-semibold text-slate-200">{paint.nameEn}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-['Padauk',sans-serif]">{paint.nameMm}</p>
                        <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                          <span>Trim: <strong className="text-purple-300">{paint.trimCode}</strong></span>
                          <span>• {paint.trimDescriptionMm}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 5: MODEL BREAKDOWN ================= */}
          {section === 'breakdown' && (
            <div className="space-y-5">
              <div className="bg-slate-950/70 p-4 md:p-5 rounded-xl border border-slate-800 space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">Full Identification Code</span>
                  <h3 className="text-xl md:text-2xl font-black text-amber-400 font-mono tracking-wider">
                    {vehicle.fullModelCode}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-['Padauk',sans-serif]">
                    နိမ်းပလိပ်ပြားပေါ်ရှိ မော်ဒယ်ကုဒ် အက္ခရာတစ်လုံးချင်းစီ၏ အဓိပ္ပာယ် ခွဲခြမ်းစိတ်ဖြာချက်
                  </p>
                </div>

                <div className="space-y-2">
                  {vehicle.codeBreakdown.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3 hover:border-amber-500/30 transition"
                    >
                      <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono font-black text-sm shrink-0">
                        {item.codeSegment}
                      </span>
                      <div className="space-y-0.5">
                        <span className="text-xs text-slate-400 font-mono block">{item.meaning}</span>
                        <p className="text-xs md:text-sm text-slate-200 font-bold font-['Padauk',sans-serif]">
                          {item.meaningMm}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Workshop Tips */}
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  အင်ဂျင်နီယာ လက်တွေ့ ပြင်ဆင်ရေး မှတ်ချက်များ
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-['Padauk',sans-serif]">
                  {vehicle.workshopTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-['Padauk',sans-serif]">
            GREATSTAR • Z.N.W Toyota Diagnostic Database
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition"
          >
            ပိတ်မည် (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
