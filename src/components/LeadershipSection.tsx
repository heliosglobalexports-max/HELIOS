import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { INITIAL_DIRECTORS } from '../data/companyData';
import { Director } from '../types';

interface LeadershipSectionProps {
  directors?: Director[];
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  directors = INITIAL_DIRECTORS,
}) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="leadership" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            <span>Management Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Meet Our Leadership
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Our team combines business management, export coordination and agricultural product expertise to serve customers across international markets.
          </p>
        </div>

        {/* Directors Profile Cards Grid - ONLY PHOTO, NAME, AND POST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {directors.map((director) => {
            const hasImgError = imageErrors[director.id];
            const imgSrc = director.customImageUrl || `${import.meta.env.BASE_URL}${director.imageFileName}`;

            return (
              <div
                key={director.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Director Photo */}
                <div className="relative h-64 sm:h-60 bg-gradient-to-b from-stone-200 via-stone-300 to-stone-400 overflow-hidden flex items-center justify-center">
                  {!hasImgError ? (
                    <img
                      src={imgSrc}
                      alt={`${director.name} - ${director.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(director.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-stone-800 to-stone-900 text-white">
                      <div className="w-16 h-16 rounded-2xl bg-amber-600/30 border border-amber-500/40 text-amber-300 flex items-center justify-center font-display font-extrabold text-2xl mb-2 shadow-inner">
                        {director.code}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Director {director.code}
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-stone-700">
                    Director {director.code}
                  </div>
                </div>

                {/* Director Name & Post ONLY */}
                <div className="p-4 text-center space-y-1 flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-bold text-stone-900 font-display leading-tight">
                    {director.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 leading-snug">
                    {director.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
