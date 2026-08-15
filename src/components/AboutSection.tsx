import React from 'react';
import { 
  Building2, 
  MapPin, 
  Leaf, 
  CheckCircle2, 
  Award, 
  Anchor
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            About Helios Global Exports
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Directly connecting Pollachi’s world-renowned coconut substrate manufacturing cluster with international commercial growers, greenhouse operators, and agricultural distributors.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual & Geo Credibility */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
                alt="Pollachi coconut plantation landscape in Tamil Nadu" 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-stone-900 font-display">Registered Export Facility</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                      {COMPANY_DETAILS.address.fullFormatted}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <span className="text-stone-500 text-[10px] uppercase font-bold">Sea Gateways</span>
                    <p className="font-bold text-stone-800">Tuticorin • Cochin • Chennai</p>
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <span className="text-stone-500 text-[10px] uppercase font-bold">Grades Supplied</span>
                    <p className="font-bold text-stone-800">Low-EC &amp; High-EC Peat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative & Operational Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>
                <strong className="text-stone-900">Helios Global Exports</strong> is a dedicated Indian agro-export enterprise specializing in the production and global shipment of premium <strong className="text-amber-900 font-semibold">Low-EC (Washed)</strong> and <strong className="text-amber-900 font-semibold">High-EC (Unwashed)</strong> compressed 5kg Coco Peat blocks.
              </p>
              <p>
                Operating out of Pollachi in Coimbatore district, Tamil Nadu — the epicentre of India's coconut processing belt — we oversee raw material selection, rotary sifting to eliminate heavy sand and impurities (&lt;2%), freshwater washing, and heavy hydraulic compression to produce export blocks of consistent density and high rehydrated volume.
              </p>
            </div>

            {/* Core Export Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-700" />
                  <span>Certified EC &amp; pH Testing</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Every production lot is lab-tested using calibrated 1:5 extract testing to verify target EC (&lt;0.5 mS/cm Low-EC or &gt;1.0 mS/cm High-EC) and pH (5.5–7.5).
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Anchor className="w-4 h-4 text-amber-700" />
                  <span>Tri-Port Shipping Logistics</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fast container stuffing and ocean dispatch through <strong className="text-stone-800">Tuticorin (V.O.C. Port)</strong>, <strong className="text-stone-800">Cochin Port</strong>, and <strong className="text-stone-800">Chennai Port</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <span>100% Organic &amp; Sustainable</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Renewable, eco-friendly peat moss alternative with high water retention and balanced aeration for modern agriculture.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>International Documentation</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Complete quarantine compliance: Phytosanitary Certificates, ISPM-15 Fumigation, Certificate of Origin (COO), and Bill of Lading.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
