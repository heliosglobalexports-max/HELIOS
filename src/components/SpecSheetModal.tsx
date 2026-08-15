import React from 'react';
import { Printer, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { HeliosLogo } from './HeliosLogo';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 animate-in zoom-in-95 my-8">
        
        {/* Modal Controls Bar (hidden during print) */}
        <div className="sticky top-0 z-10 bg-stone-900 text-white p-4 flex items-center justify-between border-b border-stone-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">Technical Specification Sheet • Product Dossier</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg text-sm font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable Spec Sheet Document Body */}
        <div className="p-6 sm:p-10 space-y-8 text-stone-900 font-sans">
          
          {/* Header of Doc */}
          <div className="flex flex-wrap items-start justify-between gap-6 pb-6 border-b-2 border-amber-800">
            <div>
              <HeliosLogo size="md" />
              <p className="text-xs text-stone-600 mt-2 font-medium">
                {COMPANY_DETAILS.address.fullFormatted}
              </p>
              <p className="text-xs text-stone-500">
                Email: {COMPANY_DETAILS.officialEmail} | WhatsApp Export Desk: {COMPANY_DETAILS.primaryPhoneDisplay}
              </p>
            </div>

            <div className="text-right text-xs space-y-1">
              <div className="inline-block px-2.5 py-1 bg-amber-100 text-amber-900 font-bold rounded border border-amber-200 uppercase text-[10px]">
                Export Product Dossier
              </div>
              <div className="text-stone-500">Doc Ref: <span className="font-mono text-stone-800">HGE-SPEC-2026</span></div>
              <div className="text-stone-500">Origin: <strong className="text-stone-900">Pollachi, Tamil Nadu, India</strong></div>
            </div>
          </div>

          {/* Product Identification & Origin */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-1">
              1. Product Identification &amp; Export Gateways
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div>
                <span className="text-stone-500 text-[10px] uppercase font-bold block">Commodity</span>
                <span className="font-bold text-stone-900">Coco Peat / Coir Pith 5kg Blocks</span>
              </div>
              <div>
                <span className="text-stone-500 text-[10px] uppercase font-bold block">HS Tariff Code</span>
                <span className="font-mono font-bold text-stone-900">5305.00.00 / 1404.90</span>
              </div>
              <div>
                <span className="text-stone-500 text-[10px] uppercase font-bold block">Origin</span>
                <span className="font-bold text-amber-900">Pollachi, Coimbatore, India</span>
              </div>
              <div>
                <span className="text-stone-500 text-[10px] uppercase font-bold block">Dispatch Seaports</span>
                <span className="font-bold text-stone-900">Tuticorin • Cochin • Chennai</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Comparison Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-1">
              2. Certified Technical Specifications (Low-EC vs High-EC)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-300">
                <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-300">
                  <tr>
                    <th className="p-3 border-r border-stone-300">Quality Parameter</th>
                    <th className="p-3 border-r border-stone-300 bg-emerald-50/70 text-emerald-950">Low-EC Grade (Washed)</th>
                    <th className="p-3 border-r border-stone-300 bg-amber-50/70 text-amber-950">High-EC Grade (Unwashed)</th>
                    <th className="p-3">Testing Method / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">Electrical Conductivity (EC)</td>
                    <td className="p-3 font-bold text-emerald-900 bg-emerald-50/30 border-r border-stone-300">&lt; 0.5 mS/cm</td>
                    <td className="p-3 font-bold text-amber-900 bg-amber-50/30 border-r border-stone-300">&gt; 1.0 mS/cm (1.5 – 3.0 mS/cm)</td>
                    <td className="p-3 text-stone-500">1:5 volume extraction method</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">pH Value</td>
                    <td className="p-3 font-bold border-r border-stone-300 bg-emerald-50/30 text-emerald-900">5.5 – 6.5</td>
                    <td className="p-3 font-bold border-r border-stone-300 bg-amber-50/30 text-amber-900">5.8 – 7.5</td>
                    <td className="p-3 text-stone-500">Direct digital pH probe</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">Expansion Volume</td>
                    <td className="p-3 border-r border-stone-300 bg-emerald-50/30 font-semibold">15 – 16 Liters / kg (75L+/block)</td>
                    <td className="p-3 border-r border-stone-300 bg-amber-50/30 font-semibold">14 – 15 Liters / kg (70L+/block)</td>
                    <td className="p-3 text-stone-500">Hydration in water bath</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">Moisture Content</td>
                    <td className="p-3 border-r border-stone-300 bg-emerald-50/30">10% – 15% (Max 18%)</td>
                    <td className="p-3 border-r border-stone-300 bg-amber-50/30">12% – 18%</td>
                    <td className="p-3 text-stone-500">Standard halogen oven dry</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">Sand &amp; Fine Impurities</td>
                    <td className="p-3 border-r border-stone-300 bg-emerald-50/30 font-bold text-emerald-800">&lt; 2.0% (Rotary Sifted)</td>
                    <td className="p-3 border-r border-stone-300 bg-amber-50/30">&lt; 2.5%</td>
                    <td className="p-3 text-stone-500">Sieve &amp; sediment separation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border-r border-stone-300">Primary Intended Use</td>
                    <td className="p-3 border-r border-stone-300 bg-emerald-50/30 font-medium">Commercial Hydroponics, Greenhouses, Seed Germination, Soft Fruit &amp; Vegetables</td>
                    <td className="p-3 border-r border-stone-300 bg-amber-50/30 font-medium">Soil conditioning, Landscape bulk mulch, Animal/Horse bedding, Open-field farming</td>
                    <td className="p-3 text-stone-500">Application target</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Formats & Packaging */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-1">
              3. Packaging &amp; Ocean Container Stacking
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <strong className="text-stone-900 block font-bold">5kg Compressed Blocks (Palletized)</strong>
                <p className="text-stone-600">Block Dimensions: 30 x 30 x 12 cm (± 2cm)</p>
                <p className="text-stone-600">Pallet Standard: ISPM-15 Heat-Treated Wooden / Plastic Pallets</p>
                <p className="text-stone-600">40ft High Cube Payload: ~22-24 Metric Tons (20-22 Pallets)</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <strong className="text-stone-900 block font-bold">5kg Compressed Blocks (Floor Loaded)</strong>
                <p className="text-stone-600">Block Dimensions: 30 x 30 x 12 cm (± 2cm)</p>
                <p className="text-stone-600">Loading Method: Manual floor stacking for maximum container space utilization</p>
                <p className="text-stone-600">40ft High Cube Payload: ~25-26 Metric Tons (~5,000-5,200 blocks)</p>
              </div>
            </div>
          </div>

          {/* Quality Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Lot Quality Confirmation Note:</strong> Final EC and pH specifications should be confirmed for each product/lot based on the agreed buyer specification. Every ocean shipment includes an accredited laboratory certificate of analysis and ISPM-15 quarantine documentation.
            </div>
          </div>

          {/* Footer of Doc */}
          <div className="pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div>
              HELIOS GLOBAL EXPORTS • Pollachi, Coimbatore, India
            </div>
            <div>
              Contact: {COMPANY_DETAILS.officialEmail}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
