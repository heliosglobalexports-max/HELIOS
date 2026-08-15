import React from 'react';
import { 
  MapPin, 
  Mail, 
  MessageSquare, 
  Ship, 
  FileText, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';
import { HeliosLogo } from './HeliosLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSpecSheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSpecSheet }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(generateStandardWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs">
      
      {/* Top Banner with Direct WhatsApp / Quick Connect */}
      <div className="bg-stone-900/90 border-b border-stone-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white font-display">
              Ready to schedule your next container shipment?
            </h4>
            <p className="text-stone-400 text-xs mt-0.5">
              Direct export pricing for Low-EC and High-EC Coco Peat 5kg blocks from Pollachi, Coimbatore, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Export Desk (Standard Format)</span>
            </button>

            <button
              onClick={() => onNavigate('quote')}
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-xs transition-colors"
            >
              Request Container Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Origin (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <HeliosLogo size="md" />

            <p className="text-stone-400 leading-relaxed text-xs max-w-sm">
              Helios Global Exports is an Indian agricultural export enterprise supplying premium Low-EC (Washed) and High-EC (Unwashed) Coco Peat 5kg blocks sourced directly from Pollachi, Coimbatore, Tamil Nadu, India.
            </p>

            <div className="pt-2 text-stone-400 space-y-1 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-stone-300 font-medium">{COMPANY_DETAILS.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.officialEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.officialEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-amber-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
                  About Helios
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('coco-peat')} className="hover:text-amber-300 transition-colors">
                  Low &amp; High EC Peat
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('differences')} className="hover:text-amber-300 transition-colors">
                  Differences of Use
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leadership')} className="hover:text-amber-300 transition-colors">
                  Meet Our Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('export-process')} className="hover:text-amber-300 transition-colors">
                  Export Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coco Peat Range */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Coco Peat Grades
            </h5>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigate('coco-peat')} className="hover:text-amber-300 text-left">
                  Low-EC Washed 5kg Blocks (&lt;0.5 mS/cm)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('coco-peat')} className="hover:text-amber-300 text-left">
                  High-EC Unwashed 5kg Blocks (&gt;1.0 mS/cm)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('differences')} className="hover:text-amber-300 text-left">
                  Hydroponics vs Soil / Bedding
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quote')} className="hover:text-amber-300 text-left">
                  Incoterms: FOB / CIF / CFR / EXW
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quote')} className="hover:text-amber-300 text-left">
                  Payment: LC / TT Advance / DP
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Seaports & Downloads */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Export Ports &amp; Specs
            </h5>
            <div className="space-y-2 text-stone-400">
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block">Ocean Dispatch Gateways</span>
                <p className="text-stone-300">• V.O.C. Port Tuticorin (INTUT)</p>
                <p className="text-stone-300">• Cochin Port (INCOK)</p>
                <p className="text-stone-300">• Chennai Port (INMAA)</p>
              </div>

              <button
                onClick={onOpenSpecSheet}
                className="w-full py-2 px-3 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg border border-stone-800 text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Technical Spec Sheet (PDF)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-14 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} HELIOS GLOBAL EXPORTS. All Rights Reserved. Sourced from Pollachi, Tamil Nadu, India.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Note: Final EC and pH specifications confirmed per agreed buyer specification.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
