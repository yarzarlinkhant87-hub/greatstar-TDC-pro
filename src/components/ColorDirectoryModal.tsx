import React, { useState } from 'react';
import { TOYOTA_POPULAR_COLORS, ToyotaColorItem } from '../data/toyotaColors';
import { X, Search, Palette } from 'lucide-react';

interface ColorDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorDirectoryModal: React.FC<ColorDirectoryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'White', 'Silver & Gray', 'Black', 'Red & Wine', 'Blue & Green', 'Gold & Bronze'];

  const filteredColors = TOYOTA_POPULAR_COLORS.filter(c => {
    const matchesSearch = c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.nameMm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.popularVehicles.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-['Chakra_Petch',sans-serif] text-slate-100">
                တိုယိုတာ မူရင်း ဆေးကုဒ်များ စာရင်း (Toyota Paint Code Directory)
              </h2>
              <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                နိမ်းပလိပ်ပြားပေါ်ရှိ Color Code (ဥပမာ 070, 040, 209, 1F7) များ၏ မူရင်းအရောင် အမည်နှင့် အမျိုးအစား
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

        {/* Search and Filters */}
        <div className="p-4 bg-slate-950/50 border-b border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ဆေးကုဒ် ရိုက်ရှာပါ (ဥပမာ 070, 209, 1F7 သို့မဟုတ် အရောင်အမည်)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg shrink-0 transition font-mono ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Colors Grid */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredColors.map((color) => (
              <div
                key={color.code}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-purple-500/40 transition flex items-start gap-3.5"
              >
                {/* Color Swatch */}
                <div 
                  className="w-12 h-12 rounded-xl border-2 border-slate-600 shadow-lg flex items-center justify-center font-mono font-bold text-xs text-slate-950 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black font-mono text-amber-400">
                      {color.code}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {color.paintType}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-200">{color.nameEn}</h4>
                  <p className="text-xs text-purple-300 font-['Padauk',sans-serif]">{color.nameMm}</p>
                  <p className="text-[10px] text-slate-400 pt-1 line-clamp-1">
                    <strong>သုံးထားသောကားများ:</strong> {color.popularVehicles}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
