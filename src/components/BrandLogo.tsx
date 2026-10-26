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
    sm: { box: 'w-9 h-9', text: 'text-sm sm:text-base', sub: 'text-[9px] sm:text-[10px]' },
    md: { box: 'w-11 h-11', text: 'text-base sm:text-lg', sub: 'text-[10px] sm:text-xs' },
    lg: { box: 'w-16 h-16', text: 'text-xl sm:text-2xl', sub: 'text-xs sm:text-sm' },
    xl: { box: 'w-24 h-24', text: 'text-2xl sm:text-3xl', sub: 'text-sm sm:text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 min-w-0 ${className}`}>
      {/* 3D Automotive Emblem with GreatStar on top & Z.N.W on bottom */}
      <div className={`relative ${currentSize.box} rounded-full p-[1.5px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-md shadow-amber-500/25 shrink-0 group transition-transform duration-200 hover:scale-105 overflow-hidden`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative">
          <img
            src="/greatstar_emblem.jpg"
            alt="GreatStar Z.N.W 3D Automotive Emblem"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
          {/* Subtle 3D Glass Specular Sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Brand Typography & Official English App Title */}
      {showText && (
        <div className="flex flex-col min-w-0 select-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`font-black font-['Chakra_Petch',sans-serif] tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent ${currentSize.text} leading-none`}>
              GREATSTAR
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-wider bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold px-1.5 py-0.5 rounded font-mono uppercase whitespace-nowrap">
              AutoSpec • Z.N.W
            </span>
          </div>
          <span className={`text-slate-400 font-['Padauk',sans-serif] ${currentSize.sub} leading-tight truncate mt-0.5`}>
            မော်တော်ယာဉ် နိမ်းပလိပ် စွယ်စုံကျမ်း
          </span>
        </div>
      )}
    </div>
  );
};
