import React from 'react';
import { 
  FileSpreadsheet, 
  FlaskConical, 
  CheckCircle2, 
  Cog, 
  PackageCheck, 
  Ship,
  FileCheck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { EXPORT_PIPELINE } from '../data/companyData';

export const ExportProcessSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    FileSpreadsheet,
    FlaskConical,
    CheckCircle2,
    Cog,
    PackageCheck,
    Ship,
  };

  const exportDocs = [
    { name: 'Original Bill of Lading (B/L)', desc: 'Issued by ocean freight carrier upon vessel departure' },
    { name: 'Phytosanitary Certificate', desc: 'Issued by Plant Quarantine Authority, Ministry of Agriculture, Govt. of India' },
    { name: 'ISPM-15 Fumigation Certificate', desc: 'Certified Methyl Bromide or Phosphine treatment against pests' },
    { name: 'Certificate of Origin (COO)', desc: 'Issued by authorized Chamber of Commerce / Export Promotion Council' },
    { name: 'Laboratory Analysis Test Report', desc: 'Detailed lot-specific EC, pH, sand%, and moisture results' },
    { name: 'Commercial Invoice & Packing List', desc: 'Itemized container metrics, HS codes, weights, and seal numbers' },
  ];

  return (
    <section id="export-process" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Ship className="w-3.5 h-3.5 text-amber-700" />
            <span>End-to-End Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Our Export Process
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            A transparent, six-stage quality assurance and dispatch pipeline ensuring seamless container shipment from our Pollachi yards to your destination seaport.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {EXPORT_PIPELINE.map((step) => {
            const Icon = iconMap[step.iconName] || CheckCircle2;
            return (
              <div 
                key={step.stepNumber}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:border-amber-400 hover:bg-amber-50/20 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-amber-800 font-display">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-amber-800 border border-stone-200 flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Deliverables / Outputs:
                  </span>
                  {step.keyOutputs.map((out, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-stone-700 text-[11px] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* International Trade Documents Checklist */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Customs Clearance Ready</span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Standard Export Documentation Package
              </h3>
            </div>
            <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/40">
              100% Import Quarantine Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {exportDocs.map((doc, idx) => (
              <div key={idx} className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/70 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                  <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{doc.name}</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
