import React, { useState } from 'react';
import logoBadgeImg from '../assets/images/helios_logo_badge_1786808325986.jpg';

interface HeliosLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const HeliosLogo: React.FC<HeliosLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13',
    lg: 'w-18 h-18',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative shrink-0 rounded-full overflow-hidden shadow-md bg-white border border-stone-200/80 p-0.5 flex items-center justify-center`}>
        {!imgError ? (
          <img
            src={logoBadgeImg}
            alt="Helios Global Exports Official Logo"
            className="w-full h-full object-cover rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#0F2444" strokeWidth="4" />
            {/* Globe Background */}
            <circle cx="100" cy="72" r="42" fill="#E0F2FE" stroke="#1D4ED8" strokeWidth="2" />
            {/* Continents */}
            <path d="M78 60 C85 55, 95 58, 92 68 C88 74, 76 80, 80 88 C82 92, 75 96, 70 90 Z" fill="#1E40AF" opacity="0.8" />
            <path d="M105 50 C115 52, 128 60, 125 72 C122 80, 110 85, 112 95 Z" fill="#1E40AF" opacity="0.8" />
            {/* Leaf */}
            <path d="M48 95 C45 60, 68 40, 92 35 C88 52, 80 75, 60 90 C54 94, 50 96, 48 95 Z" fill="#2E7D32" />
            <path d="M60 88 C70 70, 78 55, 90 38" stroke="#81C784" strokeWidth="2" strokeLinecap="round" />
            {/* Cargo Ship */}
            <path d="M72 104 L142 104 L132 118 L82 118 Z" fill="#0F2444" />
            <rect x="88" y="92" width="12" height="12" fill="#0F2444" stroke="#FFF" strokeWidth="1" />
            <rect x="102" y="92" width="12" height="12" fill="#0F2444" stroke="#FFF" strokeWidth="1" />
            <rect x="116" y="92" width="12" height="12" fill="#0F2444" stroke="#FFF" strokeWidth="1" />
            {/* Waves */}
            <path d="M55 120 C70 114, 85 124, 100 118 C115 112, 130 122, 145 116" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
            <path d="M65 127 C80 121, 95 131, 110 125 C125 119, 140 129, 155 123" stroke="#0F2444" strokeWidth="3" strokeLinecap="round" />
            {/* Text HELIOS */}
            <text x="100" y="152" textAnchor="middle" fill="#0F2444" fontFamily="serif" fontWeight="900" fontSize="22" letterSpacing="1">
              HELiOS
            </text>
            <circle cx="106" cy="138" r="2.5" fill="#2E7D32" />
            {/* Text GLOBAL EXPORTS */}
            <line x1="38" y1="168" x2="60" y2="168" stroke="#2E7D32" strokeWidth="2" />
            <text x="100" y="172" textAnchor="middle" fill="#2E7D32" fontFamily="sans-serif" fontWeight="800" fontSize="10" letterSpacing="2">
              GLOBAL EXPORTS
            </text>
            <line x1="140" y1="168" x2="162" y2="168" stroke="#2E7D32" strokeWidth="2" />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-extrabold text-stone-900 font-display tracking-tight text-lg sm:text-xl leading-none">
              HELIOS
            </span>
            <span className="font-bold text-emerald-800 text-lg sm:text-xl leading-none">
              GLOBAL EXPORTS
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold text-amber-800 tracking-wider uppercase mt-1">
            Quality Agricultural Products • Global Connections
          </span>
        </div>
      )}
    </div>
  );
};
