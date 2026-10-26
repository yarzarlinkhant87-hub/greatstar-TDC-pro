import React from 'react';
import { ToyotaVehicle } from '../types/nameplate';
import { Droplet, Settings, Wrench, Palette, Search, ShieldCheck, MapPin } from 'lucide-react';

interface NameplatePlateCardProps {
  vehicle: ToyotaVehicle;
  onOpenSection: (section: 'fluids' | 'transmission' | 'engine' | 'paint' | 'breakdown') => void;
}

export const NameplatePlateCard: React.FC<NameplatePlateCardProps> = ({
  vehicle,
  onOpenSection
}) => {
  const brandName = vehicle.brand || 'Toyota';
  const country = vehicle.countryOfOrigin || 'Japan';

  // Get manufacturer header text on stamped plate
  const getPlateHeaderTitle = () => {
    switch (brandName.toLowerCase()) {
      case 'hino':
        return 'HINO MOTORS, LTD. (TOKYO, JAPAN)';
      case 'isuzu':
        return 'ISUZU MOTORS LIMITED (JAPAN)';
      case 'bmw':
        return 'BAYERISCHE MOTOREN WERKE AG (GERMANY)';
      case 'mercedes-benz':
        return 'MERCEDES-BENZ AG (STUTTGART, GERMANY)';
      case 'ford':
        return 'FORD MOTOR COMPANY (GLOBAL VEHICLE)';
      case 'nissan':
        return 'NISSAN MOTOR CO., LTD. (JAPAN)';
      case 'honda':
        return 'HONDA MOTOR CO., LTD. (JAPAN)';
      default:
        return 'TOYOTA MOTOR CORPORATION';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition hover:border-amber-500/40">
      {/* Vehicle Header Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-amber-500 text-slate-950">
              {brandName}
            </span>
            <h3 className="text-lg md:text-xl font-black text-amber-400 tracking-wide font-['Chakra_Petch',sans-serif]">
              {vehicle.modelName}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              {vehicle.chassisCode}
            </span>
            {vehicle.categoryLabelMm && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-['Padauk',sans-serif]">
                {vehicle.categoryLabelMm}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 font-['Padauk',sans-serif] mt-0.5">
            {vehicle.burmeseName} • ({vehicle.generationYears})
          </p>
        </div>

        {/* Drive Type & Origin Badges */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
            {country}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-md font-mono font-bold flex items-center gap-1 ${
            vehicle.transmission.driveType.includes('4WD') || vehicle.transmission.driveType.includes('6x4')
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
              : vehicle.transmission.driveType.includes('RWD')
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            {vehicle.transmission.driveType}
          </span>
        </div>
      </div>

      <div className="p-4 md:p-5 space-y-4">
        {/* Realistic Brushed Metallic Stamped Nameplate */}
        <div className="relative rounded-xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 p-1 shadow-inner text-slate-950 font-mono select-none">
          {/* Rivet Screws */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-slate-500 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-700" />
          </div>
          <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-slate-500 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-700" />
          </div>
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-slate-500 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-700" />
          </div>
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-slate-500 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-700" />
          </div>

          <div className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 rounded-lg p-3 md:p-4 border border-slate-400/80 shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),inset_0_-1px_3px_rgba(0,0,0,0.2)]">
            <div className="text-center pb-2 mb-2 border-b border-slate-400/60 flex items-center justify-between gap-2 flex-wrap">
              <span className="font-extrabold tracking-widest text-xs md:text-sm text-slate-800">
                {getPlateHeaderTitle()}
              </span>
              <span className="text-[10px] text-slate-600 font-sans">
                ORIGIN: {country}
              </span>
            </div>

            {/* Interactive Grid of Nameplate Fields */}
            <div className="space-y-1.5 text-xs md:text-sm">
              {/* Line 1: MODEL */}
              <button
                type="button"
                onClick={() => onOpenSection('breakdown')}
                className="w-full flex items-center justify-between p-1.5 rounded hover:bg-amber-400/30 transition text-left group"
                title="မော်ဒယ်ကုဒ် ဖတ်နည်း နှိပ်ပါ"
              >
                <span className="font-bold text-slate-700 w-24 shrink-0 flex items-center gap-1">
                  MODEL
                  <span className="text-[9px] text-amber-700 font-sans opacity-0 group-hover:opacity-100 transition">[ဖတ်နည်း]</span>
                </span>
                <span className="font-black text-slate-950 tracking-wider text-right font-mono group-hover:text-amber-900">
                  {vehicle.nameplatePlate.model}
                </span>
              </button>

              {/* Line 2: ENGINE */}
              <button
                type="button"
                onClick={() => onOpenSection('engine')}
                className="w-full flex items-center justify-between p-1.5 rounded hover:bg-amber-400/30 transition text-left group"
                title="အင်ဂျင် အသေးစိတ် နှိပ်ပါ"
              >
                <span className="font-bold text-slate-700 w-24 shrink-0 flex items-center gap-1">
                  ENGINE
                  <span className="text-[9px] text-amber-700 font-sans opacity-0 group-hover:opacity-100 transition">[အင်ဂျင်]</span>
                </span>
                <span className="font-black text-slate-950 tracking-wider text-right font-mono group-hover:text-amber-900">
                  {vehicle.nameplatePlate.engine}
                </span>
              </button>

              {/* Line 3: FRAME NO / VIN */}
              <div className="flex items-center justify-between p-1.5">
                <span className="font-bold text-slate-700 w-24 shrink-0">FRAME/VIN</span>
                <span className="font-bold text-slate-800 tracking-wider text-right font-mono">
                  {vehicle.nameplatePlate.frame}
                </span>
              </div>

              {/* Line 4: COLOR / TRIM */}
              <button
                type="button"
                onClick={() => onOpenSection('paint')}
                className="w-full flex items-center justify-between p-1.5 rounded hover:bg-amber-400/30 transition text-left group"
                title="ဆေးကုဒ် အသေးစိတ် နှိပ်ပါ"
              >
                <span className="font-bold text-slate-700 w-28 shrink-0 flex items-center gap-1">
                  COLOR / TRIM
                  <span className="text-[9px] text-amber-700 font-sans opacity-0 group-hover:opacity-100 transition">[ဆေးကုဒ်]</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-500 shadow-sm" style={{ backgroundColor: vehicle.paints[0]?.colorHex || '#FFF' }} />
                  <span className="font-black text-slate-950 tracking-wider font-mono group-hover:text-amber-900">
                    {vehicle.nameplatePlate.colorTrim}
                  </span>
                </div>
              </button>

              {/* Line 5: TRANS / AXLE */}
              <button
                type="button"
                onClick={() => onOpenSection('transmission')}
                className="w-full flex items-center justify-between p-1.5 rounded hover:bg-amber-400/30 transition text-left group"
                title="ဂီယာနှင့် အချိုး အသေးစိတ် နှိပ်ပါ"
              >
                <span className="font-bold text-slate-700 w-28 shrink-0 flex items-center gap-1">
                  TRANS./AXLE
                  <span className="text-[9px] text-amber-700 font-sans opacity-0 group-hover:opacity-100 transition">[ဂီယာ/အချိုး]</span>
                </span>
                <span className="font-black text-slate-950 tracking-wider text-right font-mono group-hover:text-amber-900">
                  {vehicle.nameplatePlate.transAxle}
                </span>
              </button>

              {/* Line 6: Extra / Plant / Weights */}
              {vehicle.nameplatePlate.extraStamps && (
                <div className="flex items-center justify-between p-1.5 text-slate-700 text-[11px] font-mono border-t border-slate-400/30 mt-1">
                  <span className="font-bold">WEIGHTS/LIMIT</span>
                  <span>{vehicle.nameplatePlate.extraStamps}</span>
                </div>
              )}
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-400/40 text-[10px] text-slate-600 text-center flex items-center justify-center gap-1 font-sans">
              <span>👆 အပေါ်ရှိ စာသားအကွက်များကို တိုက်ရိုက် ထောက်၍လည်း ဖတ်ရှုနိုင်ပါသည်</span>
            </div>
          </div>
        </div>

        {/* Quick Diagnostic Workshop Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-400 block font-['Padauk',sans-serif]">အင်ဂျင်ဝိုင် စံနှုန်း</span>
            <span className="font-bold text-amber-300 font-mono text-sm">{vehicle.fluids.engineOil.viscosity.split(' ')[0]}</span>
            <span className="text-[11px] text-slate-400 block">{vehicle.fluids.engineOil.capacityWithFilter}</span>
          </div>

          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-400 block font-['Padauk',sans-serif]">ဂီယာဆီ အမျိုးအစား</span>
            <span className="font-bold text-emerald-400 font-mono text-xs line-clamp-1">
              {vehicle.fluids.transmissionFluid.fluidType.replace('Toyota Genuine ', '').replace('Heavy Duty Gear Oil ', '')}
            </span>
            <span className="text-[11px] text-slate-400 block">{vehicle.fluids.transmissionFluid.drainRefillCapacity}</span>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <span className="text-slate-400 block font-['Padauk',sans-serif]">ဂီယာဘောက်စ်</span>
            <span className="font-bold text-sky-400 font-mono text-sm">{vehicle.transmission.transCode}</span>
            <span className="text-[10px] text-slate-400 line-clamp-1">{vehicle.transmission.transType}</span>
          </div>
        </div>

        {/* Grease-Finger-Friendly Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-2">
          {/* Button 1: Fluids */}
          <button
            type="button"
            onClick={() => onOpenSection('fluids')}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-amber-500/10 to-amber-600/5 hover:from-amber-500/20 hover:to-amber-600/15 border border-amber-500/30 text-amber-300 transition group shadow-md"
          >
            <Droplet className="w-5 h-5 mb-1 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-['Padauk',sans-serif]">ဆီအမျိုးအစား</span>
            <span className="text-[10px] text-amber-400/70">& လီတာပမာဏ</span>
          </button>

          {/* Button 2: Transmission */}
          <button
            type="button"
            onClick={() => onOpenSection('transmission')}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-sky-500/10 to-sky-600/5 hover:from-sky-500/20 hover:to-sky-600/15 border border-sky-500/30 text-sky-300 transition group shadow-md"
          >
            <Settings className="w-5 h-5 mb-1 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-['Padauk',sans-serif]">ဂီယာဘောက်</span>
            <span className="text-[10px] text-sky-400/70">& ဆွဲအား 2W/4W</span>
          </button>

          {/* Button 3: Engine */}
          <button
            type="button"
            onClick={() => onOpenSection('engine')}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-emerald-500/10 to-emerald-600/5 hover:from-emerald-500/20 hover:to-emerald-600/15 border border-emerald-500/30 text-emerald-300 transition group shadow-md"
          >
            <Wrench className="w-5 h-5 mb-1 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-['Padauk',sans-serif]">အင်ဂျင် & Timing</span>
            <span className="text-[10px] text-emerald-400/70">{vehicle.engine.code}</span>
          </button>

          {/* Button 4: Paint & Trim */}
          <button
            type="button"
            onClick={() => onOpenSection('paint')}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/15 border border-purple-500/30 text-purple-300 transition group shadow-md"
          >
            <Palette className="w-5 h-5 mb-1 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-['Padauk',sans-serif]">ဆေးကုဒ် (Color)</span>
            <span className="text-[10px] text-purple-400/70">{vehicle.paints[0]?.code} • {vehicle.paints[0]?.nameMm?.split(' ')?.[0] || 'ဆေး'}</span>
          </button>

          {/* Button 5: Breakdown */}
          <button
            type="button"
            onClick={() => onOpenSection('breakdown')}
            className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 hover:bg-slate-700/60 border border-slate-700 text-slate-200 transition group shadow-md"
          >
            <Search className="w-5 h-5 mb-1 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-['Padauk',sans-serif]">နိမ်းပြားဖတ်နည်း</span>
            <span className="text-[10px] text-slate-400">စနစ်တကျ ခွဲခြမ်းချက်</span>
          </button>
        </div>
      </div>
    </div>
  );
};
