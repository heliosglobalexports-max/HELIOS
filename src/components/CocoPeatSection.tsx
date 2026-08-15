import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  FileText, 
  ArrowRight,
  Droplets,
  Layers,
  ShieldCheck,
  Sprout,
  TreeDeciduous,
  MessageSquare
} from 'lucide-react';
import { COCO_PEAT_PRODUCTS, COCO_PEAT_DIFFERENCES, COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';
import { CocoPeatProduct } from '../types';

interface CocoPeatSectionProps {
  onSelectProductForQuote: (productName: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)', ecGrade: 'Low EC' | 'High EC') => void;
  onOpenSpecSheet: () => void;
}

export const CocoPeatSection: React.FC<CocoPeatSectionProps> = ({
  onSelectProductForQuote,
  onOpenSpecSheet,
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'low-ec' | 'high-ec'>('both');

  const lowEcProduct = COCO_PEAT_PRODUCTS[0];
  const highEcProduct = COCO_PEAT_PRODUCTS[1];

  const handleWhatsAppStandardInquiry = (productName: string, ecLevel: string) => {
    const text = encodeURIComponent(
      generateStandardWhatsAppMessage({
        productName,
        ecLevel,
        phRange: ecLevel.includes('Low') ? '5.5 - 6.5' : '5.8 - 7.5',
      })
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section id="coco-peat" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct Manufacturer &amp; Exporter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            Low-EC &amp; High-EC Coco Peat Blocks
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            <strong>HELIOS GLOBAL EXPORTS</strong> manufactures and exports premium 5kg compressed Coco Peat blocks from Pollachi, Coimbatore, Tamil Nadu, India.
          </p>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We supply both <strong className="text-amber-900">Low-EC (Washed)</strong> and <strong className="text-amber-900">High-EC (Unwashed)</strong> grades, carefully processed to match buyer agronomic targets and export specifications.
          </p>
        </div>

        {/* 2-Column Product Showcase: Low-EC vs High-EC with Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* 1. Low-EC Product Card */}
          <div className="bg-stone-50 rounded-2xl border-2 border-amber-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-5">
              
              {/* Product Photo */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-stone-900 border border-stone-300 shadow-inner">
                <img 
                  src={lowEcProduct.imageUrl} 
                  alt="Low-EC Washed Coco Peat 5kg Blocks" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-extrabold uppercase bg-emerald-600 text-white rounded-md shadow-sm">
                    Low-EC Washed (&lt; 0.5 mS/cm)
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-stone-900/90 text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700 font-mono">
                  Pollachi • 5kg Block
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-stone-900 font-display">
                    {lowEcProduct.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    EC &lt; 0.5 mS/cm
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {lowEcProduct.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-xl border border-stone-200">
                {lowEcProduct.description}
              </p>

              {/* Primary Uses Specific to Low-EC */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>Primary Use &amp; Best Suited For:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {lowEcProduct.primaryUses.map((use, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Specs Table */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden text-xs">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70 w-2/5">Electrical Conductivity</td>
                      <td className="p-2.5 font-bold text-emerald-700">&lt; 0.5 mS/cm (1:5 dilution)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">pH Range</td>
                      <td className="p-2.5 font-bold text-stone-800">5.5 – 6.5 (Ideal Root Uptake)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">Expanded Yield</td>
                      <td className="p-2.5 font-semibold text-stone-800">75 – 80+ Liters / 5kg Block</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">Sand / Sieve Purity</td>
                      <td className="p-2.5 font-semibold text-stone-800">&lt; 2.0% (Rotary Sifted)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            {/* Action Buttons for Low-EC */}
            <div className="pt-6 mt-6 border-t border-stone-200 flex flex-wrap gap-2.5">
              <button
                onClick={() => onSelectProductForQuote('Low-EC Coco Peat (Washed)', 'Low EC')}
                className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Request Low-EC Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsAppStandardInquiry('Low-EC Coco Peat (Washed) 5kg Blocks', 'Low EC (< 0.5 mS/cm)')}
                className="py-3 px-3.5 bg-stone-100 hover:bg-stone-200 text-emerald-800 rounded-xl font-bold text-xs flex items-center gap-1.5 border border-stone-300 transition-colors"
                title="Direct WhatsApp Inquiry with standard format"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* 2. High-EC Product Card */}
          <div className="bg-stone-50 rounded-2xl border-2 border-stone-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-5">
              
              {/* Product Photo */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-stone-900 border border-stone-300 shadow-inner">
                <img 
                  src={highEcProduct.imageUrl} 
                  alt="High-EC Unwashed Coco Peat 5kg Blocks" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-extrabold uppercase bg-amber-700 text-white rounded-md shadow-sm">
                    High-EC Unwashed (&gt; 1.0 mS/cm)
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-stone-900/90 text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700 font-mono">
                  Pollachi • 5kg Block
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-stone-900 font-display">
                    {highEcProduct.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    EC &gt; 1.0 mS/cm
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {highEcProduct.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-xl border border-stone-200">
                {highEcProduct.description}
              </p>

              {/* Primary Uses Specific to High-EC */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <TreeDeciduous className="w-4 h-4 text-amber-700" />
                  <span>Primary Use &amp; Best Suited For:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {highEcProduct.primaryUses.map((use, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Specs Table */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden text-xs">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70 w-2/5">Electrical Conductivity</td>
                      <td className="p-2.5 font-bold text-amber-800">&gt; 1.0 mS/cm (1.5 – 3.0 mS/cm)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">pH Range</td>
                      <td className="p-2.5 font-bold text-stone-800">5.8 – 7.5 (Natural Broad Spectrum)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">Expanded Yield</td>
                      <td className="p-2.5 font-semibold text-stone-800">70 – 75 Liters / 5kg Block</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-stone-900 bg-stone-50/70">Primary Advantage</td>
                      <td className="p-2.5 font-semibold text-stone-800">Economical Bulk Soil Amendment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            {/* Action Buttons for High-EC */}
            <div className="pt-6 mt-6 border-t border-stone-200 flex flex-wrap gap-2.5">
              <button
                onClick={() => onSelectProductForQuote('High-EC Coco Peat (Unwashed)', 'High EC')}
                className="flex-1 py-3 px-4 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Request High-EC Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsAppStandardInquiry('High-EC Coco Peat (Unwashed) 5kg Blocks', 'High EC (> 1.0 mS/cm)')}
                className="py-3 px-3.5 bg-stone-100 hover:bg-stone-200 text-amber-900 rounded-xl font-bold text-xs flex items-center gap-1.5 border border-stone-300 transition-colors"
                title="Direct WhatsApp Inquiry with standard format"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

        {/* Section: Comprehensive Difference of Use Breakdown */}
        <div id="differences" className="bg-stone-50 rounded-2xl border border-stone-300 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>Technical Buyer Guide</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Difference of Use: Low-EC vs. High-EC Coco Peat
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Understanding which grade to order based on crop salt sensitivity, cultivation environment, and budget parameters:
            </p>
          </div>

          {/* Comparative Matrix Table */}
          <div className="overflow-x-auto rounded-xl border border-stone-300 bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-300">
                <tr>
                  <th className="p-3.5 sm:p-4 w-1/4 border-r border-stone-200">Comparison Feature</th>
                  <th className="p-3.5 sm:p-4 w-3/8 bg-emerald-50/80 text-emerald-950 border-r border-stone-200">
                    Low-EC Coco Peat (Washed)
                  </th>
                  <th className="p-3.5 sm:p-4 w-3/8 bg-amber-50/80 text-amber-950">
                    High-EC Coco Peat (Unwashed)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {COCO_PEAT_DIFFERENCES.map((diff, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/80">
                    <td className="p-3.5 sm:p-4 font-bold text-stone-900 border-r border-stone-200 bg-stone-50/50">
                      {diff.feature}
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-950 font-medium border-r border-stone-200 bg-emerald-50/20">
                      {diff.lowEc}
                    </td>
                    <td className="p-3.5 sm:p-4 text-amber-950 font-medium bg-amber-50/20">
                      {diff.highEc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Summary Grid of Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-stone-200">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs">
              <span className="font-bold text-emerald-900 text-sm block">
                🌱 When should you choose Low-EC?
              </span>
              <p className="text-stone-700 leading-relaxed">
                Choose <strong>Low-EC</strong> if you operate commercial greenhouses, precision hydroponic drip setups, berry farms, vegetable crop cultivation (tomatoes, cucumbers, peppers), or seedling nurseries where delicate root tips can suffer from osmotic shock / salt burn.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2 text-xs">
              <span className="font-bold text-amber-900 text-sm block">
                🌾 When should you choose High-EC?
              </span>
              <p className="text-stone-700 leading-relaxed">
                Choose <strong>High-EC</strong> for large acreage open-field soil conditioning, golf courses, turf laying, lawn sodding, moisture retention in dry soils, horse stable &amp; poultry bedding (extreme absorbency), or industrial oil spill absorption at an economical price per ton.
              </p>
            </div>
          </div>

          {/* Seaports Dispatch Callout */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                Ocean Container Shipments dispatched via <strong>V.O.C. Port Tuticorin</strong>, <strong>Cochin Port</strong>, and <strong>Chennai Port</strong>.
              </span>
            </div>

            <button
              onClick={onOpenSpecSheet}
              className="text-amber-800 hover:text-amber-900 font-bold underline underline-offset-2 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Technical Specification Sheet (PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
