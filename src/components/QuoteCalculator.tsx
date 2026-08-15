import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Ship, 
  Sparkles 
} from 'lucide-react';
import { COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteCalculatorProps {
  initialProduct?: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)';
  initialEcGrade?: 'Low EC' | 'High EC';
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  initialProduct = 'Low-EC Coco Peat (Washed)',
  initialEcGrade = 'Low EC',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    buyerName: '',
    companyName: '',
    email: '',
    phoneOrWhatsApp: '',
    productName: initialProduct,
    ecGrade: initialEcGrade,
    phRange: '5.5 – 6.5',
    targetEcValue: '< 0.5 mS/cm',
    location: '',
    quantity: '1 x 40ft High Cube Container (~24-26 MT)',
    exportTerm: 'CIF',
    paymentOption: 'Letter of Credit (LC at sight)',
    additionalNotes: '',
  });

  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleProductChange = (prod: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)') => {
    if (prod === 'Low-EC Coco Peat (Washed)') {
      setFormData({
        ...formData,
        productName: prod,
        ecGrade: 'Low EC',
        phRange: '5.5 – 6.5',
        targetEcValue: '< 0.5 mS/cm',
      });
    } else {
      setFormData({
        ...formData,
        productName: prod,
        ecGrade: 'High EC',
        phRange: '5.8 – 7.5',
        targetEcValue: '> 1.0 mS/cm',
      });
    }
  };

  const generateStandardFormattedMessage = () => {
    const buyerHeader = formData.buyerName 
      ? `\nBuyer: ${formData.buyerName} ${formData.companyName ? `(${formData.companyName})` : ''}` 
      : '';
    const contactInfo = formData.phoneOrWhatsApp || formData.email 
      ? `\nContact: ${formData.phoneOrWhatsApp || ''} ${formData.email ? `| ${formData.email}` : ''}` 
      : '';

    return (
      `*HELIOS GLOBAL EXPORTS - CONTAINER INQUIRY*${buyerHeader}${contactInfo}\n\n` +
      `1. Product Name: ${formData.productName}\n` +
      `2. Required EC Level: ${formData.ecGrade} (${formData.targetEcValue})\n` +
      `3. Required pH Range: ${formData.phRange}\n` +
      `4. Delivery Location / Destination Port: ${formData.location || '[Please enter destination port/country]'}\n` +
      `5. Quantity: ${formData.quantity}\n` +
      `6. Export Term (Incoterm): ${formData.exportTerm}\n` +
      `7. Preferred Payment Option: ${formData.paymentOption}\n` +
      (formData.additionalNotes ? `\nNotes: ${formData.additionalNotes}\n` : '\n') +
      `Origin: Pollachi, Tamil Nadu, India\n` +
      `Seaports: Tuticorin • Cochin • Chennai`
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(generateStandardFormattedMessage());
    const url = `https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`;
    window.open(url, '_blank');
    setSubmittedMessage(true);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quotation Request: ${formData.productName} (${formData.quantity}) - ${formData.companyName || formData.buyerName || 'Buyer'}`);
    const body = encodeURIComponent(generateStandardFormattedMessage());
    const mailtoUrl = `mailto:${COMPANY_DETAILS.officialEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmittedMessage(true);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateStandardFormattedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="quote" className="py-20 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span>High EC &amp; Low EC Quotation Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Request Quotation
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Direct pricing for <strong className="text-stone-900">Low-EC (Washed)</strong> and <strong className="text-stone-900">High-EC (Unwashed)</strong> Coco Peat 5kg blocks shipped from Pollachi via Tuticorin, Cochin, or Chennai ports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Input Columns */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-display">
                Container Order Specification
              </h3>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Pollachi Direct Export
              </span>
            </div>

            <form className="space-y-4 text-xs">
              
              {/* Product Selection Toggle: ONLY Low-EC and High-EC as requested */}
              <div>
                <label className="font-bold text-stone-800 block mb-1.5 text-xs uppercase tracking-wide">
                  1. Select Product Grade *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleProductChange('Low-EC Coco Peat (Washed)')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.productName === 'Low-EC Coco Peat (Washed)'
                        ? 'bg-emerald-50/90 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-500'
                        : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <div className="font-bold text-sm">Low-EC Coco Peat (Washed)</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">EC &lt; 0.5 mS/cm • pH 5.5–6.5 (Hydroponics)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleProductChange('High-EC Coco Peat (Unwashed)')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.productName === 'High-EC Coco Peat (Unwashed)'
                        ? 'bg-amber-50/90 border-amber-600 text-amber-950 shadow-xs ring-1 ring-amber-500'
                        : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <div className="font-bold text-sm">High-EC Coco Peat (Unwashed)</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">EC &gt; 1.0 mS/cm • pH 5.8–7.5 (Soil/Bedding)</div>
                  </button>
                </div>
              </div>

              {/* Row 2: Target EC & pH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    2. Required EC Level *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.targetEcValue}
                    onChange={(e) => setFormData({ ...formData, targetEcValue: e.target.value })}
                    placeholder="e.g. < 0.5 mS/cm or 1.5 - 2.5 mS/cm"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    3. Required pH Range *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phRange}
                    onChange={(e) => setFormData({ ...formData, phRange: e.target.value })}
                    placeholder="e.g. 5.5 – 6.5"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Row 3: Location / Destination Port & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    4. Delivery Location / Destination Port &amp; Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Port of Rotterdam (Netherlands), Long Beach (USA), Jebel Ali (UAE)"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    5. Order Quantity *
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-medium focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  >
                    <option value="1 x 40ft High Cube Container (~24-26 MT)">1 x 40ft High Cube Container (~24-26 MT)</option>
                    <option value="2 to 5 x 40ft HC Containers">2 to 5 x 40ft HC Containers</option>
                    <option value="Annual Supply Contract (10+ Containers/Year)">Annual Supply Contract (10+ Containers/Year)</option>
                    <option value="1 x 20ft Standard FCL (~12-14 MT)">1 x 20ft Standard FCL (~12-14 MT)</option>
                    <option value="Custom Quantity / Trial Order">Custom Quantity / Trial Pallet</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Export Terms (Incoterms) with different kinds */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  6. Export Term (Incoterm) *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { code: 'FOB', desc: 'Free On Board (Tuticorin/Cochin/Chennai)' },
                    { code: 'CIF', desc: 'Cost, Insurance & Freight' },
                    { code: 'CFR', desc: 'Cost & Freight' },
                    { code: 'EXW', desc: 'Ex-Works Pollachi Factory' },
                  ].map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setFormData({ ...formData, exportTerm: item.code as any })}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        formData.exportTerm === item.code
                          ? 'bg-amber-700 text-white border-amber-700 font-bold shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="font-bold text-xs">{item.code}</div>
                      <div className={`text-[10px] truncate ${formData.exportTerm === item.code ? 'text-amber-100' : 'text-stone-500'}`}>
                        {item.desc.split(' ')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Payment Options */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  7. Preferred Payment Option *
                </label>
                <select
                  value={formData.paymentOption}
                  onChange={(e) => setFormData({ ...formData, paymentOption: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-medium focus:bg-white focus:border-amber-600 focus:outline-hidden"
                >
                  <option value="Letter of Credit (LC at sight / Irrevocable LC)">Letter of Credit (LC at sight / Irrevocable LC)</option>
                  <option value="100% Telegraphic Transfer (TT Advance)">100% Telegraphic Transfer (TT Advance)</option>
                  <option value="30% Advance TT + 70% DP against Bill of Lading (B/L) copy">30% Advance TT + 70% DP against Bill of Lading (B/L) copy</option>
                  <option value="Document Against Payment (DP / CAD)">Document Against Payment (DP / CAD)</option>
                  <option value="Escrow / Trade Assurance Contract">Escrow / Trade Assurance Contract</option>
                </select>
              </div>

              {/* Row 6: Buyer Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    value={formData.buyerName}
                    onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                    placeholder="e.g. John Doe / Global Greenhouses LLC"
                    className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    WhatsApp or Email
                  </label>
                  <input
                    type="text"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    placeholder="e.g. +1 555 123 4567 or buyer@email.com"
                    className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry (Standard Format)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="py-3 px-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-98"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Official Email Inquiry</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Live Quotation Preview Card with Standard Format */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Standard WhatsApp / RFQ Format</span>
                  <h3 className="text-lg font-bold font-display text-white">Inquiry Summary</h3>
                </div>
                <button
                  onClick={handleCopyText}
                  className="flex items-center gap-1 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 px-2.5 py-1 rounded-md border border-stone-700 transition-colors"
                  title="Copy standard inquiry message text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Exact Standard WhatsApp Format Box */}
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 font-mono text-[11px] leading-relaxed text-stone-300 space-y-1.5 whitespace-pre-line overflow-x-auto">
                {generateStandardFormattedMessage()}
              </div>

              {/* Port & Documentation Notes */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Export Gateways: <strong>Tuticorin • Cochin • Chennai Ports</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes Batch Lab Testing, Phytosanitary &amp; ISPM-15 Fumigation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Export Email: <strong className="text-amber-300">{COMPANY_DETAILS.officialEmail}</strong></span>
                </div>
              </div>

              {submittedMessage && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Inquiry template loaded! Directing to Helios Global Exports export desk.</span>
                </div>
              )}
            </div>

            {/* Address & Facility Box */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 text-xs space-y-1.5 text-stone-700">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                Direct Facility Address:
              </span>
              <p className="font-medium text-stone-900">
                {COMPANY_DETAILS.address.fullFormatted}
              </p>
              <p className="text-[11px] text-stone-500">
                Registered Exporter of Coco Peat &amp; Agricultural Substrates
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
