import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CocoPeatSection } from './components/CocoPeatSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ExportProcessSection } from './components/ExportProcessSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SpecSheetModal } from './components/SpecSheetModal';
import { Footer } from './components/Footer';
import { INITIAL_DIRECTORS } from './data/companyData';
import { Director } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState<boolean>(false);
  const [quoteProduct, setQuoteProduct] = useState<'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)'>('Low-EC Coco Peat (Washed)');
  const [quoteEcGrade, setQuoteEcGrade] = useState<'Low EC' | 'High EC'>('Low EC');
  
  // Leadership state with localStorage fallback
  const [directors, setDirectors] = useState<Director[]>(() => {
    try {
      const saved = localStorage.getItem('helios_directors');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved directors', e);
    }
    return INITIAL_DIRECTORS;
  });

  const handleUpdateDirector = (updatedDirector: Director) => {
    setDirectors((prev) => {
      const next = prev.map((d) => (d.id === updatedDirector.id ? updatedDirector : d));
      try {
        localStorage.setItem('helios_directors', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save directors', e);
      }
      return next;
    });
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (
    productName: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)', 
    ecGrade: 'Low EC' | 'High EC' = 'Low EC'
  ) => {
    setQuoteProduct(productName);
    setQuoteEcGrade(ecGrade);
    handleNavigate('quote');
  };

  // Intersection observer to track which section is currently on screen
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 
        'about', 
        'coco-peat', 
        'differences',
        'leadership', 
        'export-process', 
        'quote', 
        'contact'
      ];
      
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-600 selection:text-white font-sans">
      
      {/* Fixed Sticky Header Navigation with Official Logo & Standard WhatsApp */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      />

      {/* Main Content Sections strictly adhering to user instructions */}
      <main className="grow">
        
        {/* 1. Hero Section */}
        <Hero
          onViewProducts={() => handleNavigate('coco-peat')}
          onRequestQuote={() => handleNavigate('quote')}
          onViewDifferences={() => handleNavigate('differences')}
        />

        {/* 2. About Helios Global Exports with Updated Address & Mission */}
        <AboutSection />

        {/* 3. Low-EC and High-EC Coco Peat Section (Photos, Specifications & Differences of Use) */}
        <CocoPeatSection
          onSelectProductForQuote={handleSelectProductForQuote}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />

        {/* 4. Meet Our Leadership (Directors Photo, Name, and Post Only) */}
        <LeadershipSection
          directors={directors}
          onUpdateDirector={handleUpdateDirector}
        />

        {/* 5. Export Process & Quality Assurance */}
        <ExportProcessSection />

        {/* 6. Request Quotation (Only for Low EC and High EC with Standard Format) */}
        <QuoteCalculator
          initialProduct={quoteProduct}
          initialEcGrade={quoteEcGrade}
        />

        {/* 7. Contact Us, Updated Address, Seaports (Tuticorin, Cochin, Chennai) & FAQs */}
        <ContactSection />

      </main>

      {/* Global Floating WhatsApp on Every Page with Standard Inquiry Format */}
      <FloatingWhatsApp />

      {/* Printable Technical Spec Sheet Modal */}
      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={() => setIsSpecSheetOpen(false)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      />

    </div>
  );
}
