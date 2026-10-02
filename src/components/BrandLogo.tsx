import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-9 h-9', icon: 'w-5 h-5', text: 'text-sm', sub: 'text-[9px]' },
    md: { box: 'w-12 h-12', icon: 'w-7 h-7', text: 'text-base', sub: 'text-[10px]' },
    lg: { box: 'w-16 h-16', icon: 'w-9 h-9', text: 'text-xl', sub: 'text-xs' },
    xl: { box: 'w-24 h-24', icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Golden Hex Badge Emblem */}
      <div className={`relative ${currentSize.box} rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-xl shadow-amber-500/25 ring-2 ring-amber-300/40 transform transition hover:scale-105 shrink-0`}>
        <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-amber-400/30">
          {/* Subtle Background Radial Glow */}
          <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent pointer-events-none" />

          {/* SVG Insignia: Star + Check Engine + Gear */}
          <svg
            className={`${currentSize.icon} text-amber-400 filter drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]`}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gear Outline */}
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            
            {/* 4 Point Star Sparkle Behind */}
            <path
              d="M24 6L26.5 18.5L39 21L26.5 23.5L24 36L21.5 23.5L9 21L21.5 18.5L24 6Z"
              fill="url(#goldGrad)"
              opacity="0.3"
            />
            
            {/* Check Engine Silhouette with Wrench Accent */}
            <path
              d="M40 24V21H36V16H32V13H24V10H20V13H12C10.3 13 9 14.3 9 16V19H5V25H9V28C9 29.7 10.3 31 12 31H17V34H27V31H32C33.7 31 35 29.7 35 28V24H40ZM12 16H32V28H12V16ZM15 19H18V25H15V19ZM25 19H28V25H25V19Z"
              fill="url(#goldGrad)"
            />
            
            {/* Star In Center */}
            <path
              d="M21.5 19.5L22.5 21.5L24.5 21.8L23 23.2L23.4 25.2L21.5 24.2L19.6 25.2L20 23.2L18.5 21.8L20.5 21.5L21.5 19.5Z"
              fill="#F59E0B"
            />

            <defs>
              <linearGradient id="goldGrad" x1="5" y1="10" x2="40" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE68A" />
                <stop offset="0.4" stopColor="#F59E0B" />
                <stop offset="1" stopColor="#D97706" />
              </linearGradient>
            </defs>
          </svg>

          {/* Micro Trademark Tag */}
          <span className="text-[7px] font-black text-amber-300 font-mono tracking-tighter leading-none mt-0.5">
            Z.N.W
          </span>
        </div>

        {/* Status Indicator Dot */}
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-950 shadow-sm" />
      </div>

      {/* Optional Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`font-black font-['Chakra_Petch',sans-serif] tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent ${currentSize.text}`}>
              GREATSTAR • Z.N.W
            </span>
            <span className="text-[10px] bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black px-1.5 py-0.5 rounded font-mono shadow-sm">
              PRO DTC
            </span>
          </div>
          <span className={`text-slate-400 font-['Padauk',sans-serif] flex items-center gap-1 ${currentSize.sub}`}>
            <span className="text-amber-400/90 font-semibold">ဆရာ Zaw Naing Win (ဝပ်ရှော့အင်ဂျင်နီယာ)</span>
          </span>
        </div>
      )}
    </div>
  );
};
