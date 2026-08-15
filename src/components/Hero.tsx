import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Ship, 
  ShieldCheck,
  MessageSquare,
  FileText
} from 'lucide-react';
import { COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';
import { HeliosLogo } from './HeliosLogo';
import lowEcImg from '../assets/images/low_ec_cocopeat_1786808339319.jpg';

interface HeroProps {
  onViewProducts: () => void;
  onRequestQuote: () => void;
  onViewDifferences: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProducts,
  onRequestQuote,
  onViewDifferences,
}) => {
  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(generateStandardWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28">
      {/* Background Subtle Grid & Warm Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Origin & Address Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_DETAILS.address.fullFormatted}</span>
            </div>

            {/* Main Headline with Logo Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 mb-2">
                <HeliosLogo size="lg" showText={false} />
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
                    HELIOS GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">EXPORTS</span>
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-emerald-400 tracking-wide font-sans">
                    Quality Agricultural Products. Global Connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-description focusing on Low EC & High EC from Pollachi */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Direct manufacturer and global exporter of high-grade <strong className="text-amber-300 font-semibold">Low-EC (Washed)</strong> and <strong className="text-amber-300 font-semibold">High-EC (Unwashed)</strong> Coco Peat 5kg blocks sourced directly from our processing center in Pollachi, Coimbatore, Tamil Nadu, India.
            </p>

            {/* Key Quality & Seaport Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-stone-800/70 border border-stone-700/60 rounded-xl p-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Low & High EC</div>
                  <div className="text-[11px] text-stone-400">&lt;0.5 &amp; &gt;1.0 mS/cm</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-stone-800/70 border border-stone-700/60 rounded-xl p-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">pH 5.5 – 7.5</div>
                  <div className="text-[11px] text-stone-400">Lab certified per lot</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-stone-800/70 border border-stone-700/60 rounded-xl p-3">
                <Ship className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Direct Sea Ports</div>
                  <div className="text-[11px] text-stone-400">Tuticorin • Cochin • Chennai</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={onViewProducts}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-900/30 hover:shadow-amber-700/40 transition-all flex items-center gap-2 active:scale-98"
                id="btn-hero-view-products"
              >
                <span>View Low &amp; High EC Peat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-98"
                id="btn-hero-request-quote"
              >
                <span>Request Quotation</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="px-4 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-xl transition-all flex items-center gap-2 active:scale-98"
                id="btn-hero-whatsapp-standard"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Format Inquiry</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700/80 p-6 shadow-2xl overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-700">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Direct Export Specification</span>
                  <h2 className="text-lg font-bold text-white font-display">Low &amp; High EC Coco Peat Blocks</h2>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-md">
                  5kg Export Blocks
                </span>
              </div>

              {/* Product Visual */}
              <div className="my-4 relative h-52 rounded-xl overflow-hidden bg-stone-950 border border-stone-800">
                <img 
                  src={lowEcImg} 
                  alt="Low EC washed 5kg compressed coco peat blocks from Pollachi" 
                  className="w-full h-full object-cover object-center brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                  <span className="bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-stone-700 font-mono">
                    30 x 30 x 12 cm (5:1 Press)
                  </span>
                  <span className="bg-amber-500 text-stone-950 font-bold px-2.5 py-1 rounded-md">
                    75L–80L+ Expansion
                  </span>
                </div>
              </div>

              {/* Spec Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                  <div className="text-stone-400 text-[11px]">Low-EC Grade</div>
                  <div className="font-bold text-amber-300">&lt; 0.5 mS/cm (Washed)</div>
                </div>
                <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                  <div className="text-stone-400 text-[11px]">High-EC Grade</div>
                  <div className="font-bold text-amber-400">&gt; 1.0 mS/cm (Unwashed)</div>
                </div>
                <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                  <div className="text-stone-400 text-[11px]">Moisture</div>
                  <div className="font-bold text-white">&lt; 15% (Sun Dried)</div>
                </div>
                <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                  <div className="text-stone-400 text-[11px]">Dispatch Ports</div>
                  <div className="font-bold text-sky-300">Tuticorin • Cochin • Chennai</div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-4 pt-4 border-t border-stone-700/80 flex items-center justify-between text-xs">
                <button
                  onClick={onViewDifferences}
                  className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
                >
                  View Differences of Use →
                </button>

                <button
                  onClick={onRequestQuote}
                  className="text-stone-300 hover:text-white font-bold"
                >
                  Get Quote (FOB/CIF) →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
