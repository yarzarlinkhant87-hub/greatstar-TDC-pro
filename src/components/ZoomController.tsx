import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ZoomControllerProps {
  zoomScale: number;
  setZoomScale: (scale: number) => void;
  className?: string;
}

export const ZOOM_LEVELS = [100, 120, 140, 170, 200];

export const ZoomController: React.FC<ZoomControllerProps> = ({
  zoomScale,
  setZoomScale,
  className = '',
}) => {
  const handleZoomOut = () => {
    const currentIndex = ZOOM_LEVELS.indexOf(zoomScale);
    if (currentIndex > 0) {
      setZoomScale(ZOOM_LEVELS[currentIndex - 1]);
    } else if (zoomScale > 100) {
      setZoomScale(100);
    }
  };

  const handleZoomIn = () => {
    const currentIndex = ZOOM_LEVELS.indexOf(zoomScale);
    if (currentIndex < ZOOM_LEVELS.length - 1 && currentIndex !== -1) {
      setZoomScale(ZOOM_LEVELS[currentIndex + 1]);
    } else if (currentIndex === -1) {
      const next = ZOOM_LEVELS.find(lvl => lvl > zoomScale) || 200;
      setZoomScale(next);
    }
  };

  return (
    <div className={`flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-1 text-xs shadow-lg backdrop-blur-md ${className}`}>
      {/* Label with icon */}
      <div className="flex items-center gap-1 px-2 text-slate-300 font-mono font-bold text-[11px] shrink-0">
        <span className="text-amber-400">🔍 စာလုံးချဲ့ရန်:</span>
      </div>

      {/* Minus Button */}
      <button
        onClick={handleZoomOut}
        disabled={zoomScale <= 100}
        title="စာလုံးသေးအောင် လျှော့မည်"
        className="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-slate-200 flex items-center justify-center font-bold font-mono transition cursor-pointer border border-slate-700"
      >
        <ZoomOut className="w-3.5 h-3.5 text-slate-300" />
      </button>

      {/* Quick Preset Buttons */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
        {ZOOM_LEVELS.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setZoomScale(lvl)}
            className={`px-2 py-1 rounded-xl font-mono text-[11px] font-bold transition cursor-pointer ${
              zoomScale === lvl
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30 ring-1 ring-amber-300'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60'
            }`}
          >
            {lvl}%
          </button>
        ))}
      </div>

      {/* Plus Button */}
      <button
        onClick={handleZoomIn}
        disabled={zoomScale >= 200}
        title="စာလုံးကြီးအောင် ချဲ့မည်"
        className="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-slate-200 flex items-center justify-center font-bold font-mono transition cursor-pointer border border-slate-700"
      >
        <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
      </button>

      {/* Reset button if not 100% */}
      {zoomScale !== 100 && (
        <button
          onClick={() => setZoomScale(100)}
          title="မူလအတိုင်းပြန်ထားမည် (100%)"
          className="px-1.5 py-1 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition text-[10px] flex items-center gap-0.5 font-mono cursor-pointer"
        >
          <RotateCcw className="w-3 h-3 text-slate-400" />
          <span className="hidden sm:inline">မူလ</span>
        </button>
      )}
    </div>
  );
};
