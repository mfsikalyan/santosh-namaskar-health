import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'iconOnly';
  lightBg?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', lightBg = true, className = '' }) => {
  const primaryTextColor = lightBg ? 'text-navy' : 'text-white';
  const secondaryTextColor = lightBg ? 'text-teal' : 'text-teal-light';
  const goldColor = lightBg ? 'text-gold-dark' : 'text-gold';

  if (variant === 'iconOnly') {
    return (
      <div className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-navy-dark shadow-md p-2 border border-gold/40 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E5B52B" strokeWidth="3" opacity="0.8"/>
          <path d="M50 80 C32 66 22 52 22 40 A14 14 0 0 1 50 28 A14 14 0 0 1 78 40 C78 52 68 66 50 80 Z" fill="#079B84" opacity="0.3"/>
          <rect x="44" y="28" width="12" height="44" rx="3" fill="#079B84"/>
          <rect x="28" y="44" width="44" height="12" rx="3" fill="#079B84"/>
          <circle cx="50" cy="50" r="5" fill="#E5B52B"/>
        </svg>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative w-16 h-16 mb-2">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="48" fill="#063B5A" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="#E5B52B" strokeWidth="3" />
            <path d="M50 80 C32 66 22 52 22 40 A14 14 0 0 1 50 28 A14 14 0 0 1 78 40 C78 52 68 66 50 80 Z" fill="#079B84" opacity="0.4"/>
            <rect x="43" y="26" width="14" height="48" rx="4" fill="#079B84"/>
            <rect x="26" y="43" width="48" height="14" rx="4" fill="#079B84"/>
            <circle cx="50" cy="50" r="6" fill="#E5B52B"/>
          </svg>
        </div>
        <span className={`text-xl font-extrabold tracking-wider ${primaryTextColor} font-heading uppercase`}>
          Namaskar
        </span>
        <span className={`text-xs font-semibold tracking-widest ${secondaryTextColor} uppercase -mt-0.5`}>
          Home Health Care Service
        </span>
        <div className="flex items-center gap-1 mt-1">
          <div className="h-0.5 w-6 bg-gold"></div>
          <span className={`text-[10px] font-bold ${goldColor}`}>24x7 HOME SERVICE</span>
          <div className="h-0.5 w-6 bg-gold"></div>
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-navy-dark shadow-md p-1.5 border border-gold/40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#E5B52B" strokeWidth="4" />
          <path d="M50 80 C32 66 22 52 22 40 A14 14 0 0 1 50 28 A14 14 0 0 1 78 40 C78 52 68 66 50 80 Z" fill="#079B84" opacity="0.35"/>
          <rect x="43" y="27" width="14" height="46" rx="3.5" fill="#079B84"/>
          <rect x="27" y="43" width="46" height="14" rx="3.5" fill="#079B84"/>
          <circle cx="50" cy="50" r="6" fill="#E5B52B"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`text-lg sm:text-xl font-extrabold tracking-tight ${primaryTextColor} font-heading leading-tight uppercase`}>
            NAMASKAR
          </span>
          <span className="inline-block px-1.5 py-0.5 bg-gold/15 text-gold-dark text-[10px] font-bold rounded border border-gold/30">
            24x7
          </span>
        </div>
        <span className={`text-[11px] sm:text-xs font-bold tracking-wider ${secondaryTextColor} uppercase leading-none`}>
          HOME HEALTH CARE SERVICE
        </span>
      </div>
    </div>
  );
};
