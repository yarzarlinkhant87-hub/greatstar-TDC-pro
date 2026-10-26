import React, { useState } from 'react';
import { TOYOTA_TRANS_DATABASE, ToyotaTransmissionInfo } from '../data/toyotaTransmissions';
import { X, Search, Settings, AlertTriangle, Droplet, Thermometer } from 'lucide-react';

interface TransmissionDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransmissionDirectoryModal: React.FC<TransmissionDirectoryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredTrans = TOYOTA_TRANS_DATABASE.filter(t => 
    t.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.commonCars.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.requiredFluid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-['Chakra_Petch',sans-serif] text-slate-100">
                တိုယိုတာ ဂီယာဘောက်စ်နှင့် ဆီသတ်မှတ်ချက် ဇယားကြီး (Transmission Guide)
              </h2>
              <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                CVT နှင့် Auto ဂီယာဘောက်စ် ကုဒ်များ၊ လိုအပ်သော ဆီအမျိုးအစားနှင့် ဝင်ဆံ့လီတာများ
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

        {/* Search Input */}
        <div className="p-4 bg-slate-950/50 border-b border-slate-800">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ဂီယာဘောက်ကုဒ် ရိုက်ရှာပါ (ဥပမာ - K310, K312, U340E, A960E, AC60F သို့မဟုတ် ကားအမည်)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        {/* List of Transmissions */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 text-xs md:text-sm">
          {filteredTrans.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              ရှာဖွေမှုနှင့် ကိုက်ညီသော ဂီယာဘောက်စ် မတွေ့ရှိပါ။
            </div>
          ) : (
            filteredTrans.map((item) => (
              <div 
                key={item.code}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg font-black font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/30">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-200">{item.name}</h4>
                      <span className="text-[11px] text-slate-400 font-mono">{item.speed} • {item.driveLayout}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                    item.type === 'CVT' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Fluid spec strip */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                    <Droplet className="w-4 h-4" />
                    <span>သုံးရမည့် ဆီအမျိုးအစား:</span>
                  </div>
                  <div className="text-slate-100 font-mono font-black text-sm">
                    {item.requiredFluid}
                  </div>
                  <p className="text-xs text-amber-300/90 font-['Padauk',sans-serif] pt-1">
                    {item.fluidCautionMm}
                  </p>
                </div>

                {/* Liter breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">အောက်ခြေဝက်အူဖွင့်ချ:</span>
                    <span className="font-bold text-slate-200">{item.drainRefillLiters}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">ဝမ်းဗိုက်ခွာ/စစ်ကာလဲ:</span>
                    <span className="font-bold text-slate-200">{item.panDropLiters}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">အခြောက်ဆံ့ (Dry Fill):</span>
                    <span className="font-bold text-slate-200">{item.dryFillLiters}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">ဆီတိုင်းတံ (Dipstick):</span>
                    <span className={`font-bold ${item.dipstickPresent ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {item.dipstickPresent ? '✓ တိုင်းတံပါသည်' : '✗ တိုင်းတံမပါ (Overflow)'}
                    </span>
                  </div>
                </div>

                {/* Common Cars */}
                <div className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                  <strong className="text-slate-300">သုံးထားသော မော်ဒယ်များ:</strong> {item.commonCars}
                </div>
              </div>
            ))
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
