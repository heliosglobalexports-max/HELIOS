import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';
import { HeliosLogo } from './HeliosLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSpecSheet: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenSpecSheet,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'coco-peat', label: 'Low & High EC Peat' },
    { id: 'differences', label: 'Differences of Use' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'export-process', label: 'Export Process' },
    { id: 'quote', label: 'Request a Quote' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(generateStandardWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
      {/* Top Notification / International Trade Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Site No 17, Sakthi Garden, Vadakipalayam Piruvu, Pollachi, Coimbatore, India
            </span>
            <span className="hidden lg:inline-block text-stone-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Ports: Tuticorin • Cochin • Chennai
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <a 
              href={`mailto:${COMPANY_DETAILS.officialEmail}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Official Email"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">{COMPANY_DETAILS.officialEmail}</span>
              <span className="md:hidden">Email</span>
            </a>
            <span className="text-stone-700">|</span>
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo with exact uploaded styling */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group focus:outline-hidden"
          id="btn-brand-home"
        >
          <HeliosLogo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeSection === link.id
                  ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200/80 shadow-2xs'
                  : 'text-stone-700 hover:text-amber-800 hover:bg-stone-100/70'
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenSpecSheet}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200"
            title="View & Download Technical Spec Sheet"
            id="btn-header-specsheet"
          >
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden xl:inline">Spec Sheet</span>
          </button>

          <button
            onClick={() => handleNavClick('quote')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-98"
            id="btn-header-quote"
          >
            <span>Request Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('quote')}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-amber-700 rounded-lg"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 border border-stone-200 focus:outline-hidden"
            aria-label="Toggle navigation menu"
            id="btn-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1.5 py-2 border-b border-stone-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-100/70 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSpecSheet();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-700 bg-stone-100 rounded-lg border border-stone-200"
            >
              <FileText className="w-4 h-4 text-amber-700" />
              Download Technical Spec Sheet (PDF)
            </button>
            <button
              onClick={() => handleNavClick('quote')}
              className="w-full py-2.5 text-xs font-bold text-center text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs"
            >
              Request Container Quote (High / Low EC)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
