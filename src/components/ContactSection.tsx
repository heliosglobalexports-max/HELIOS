import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  CheckCircle2,
  Ship
} from 'lucide-react';
import { COMPANY_DETAILS, FAQ_LIST, generateStandardWhatsAppMessage } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Coco Peat Export Inquiry (Low-EC / High-EC)',
    message: '',
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${COMPANY_DETAILS.officialEmail}?subject=${encodeURIComponent(formData.subject + ' - ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\nDelivery Address: ${COMPANY_DETAILS.address.fullFormatted}`)}`;
    window.location.href = mailtoUrl;
    setMsgSent(true);
  };

  const handleOpenStandardWhatsApp = () => {
    const text = encodeURIComponent(generateStandardWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct Commercial Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Contact Helios Global Exports
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Reach out directly to our Pollachi headquarters for technical inquiries, container schedules, sample dispatches, and international contracts.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Company Details & Geolocation */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Export Facility &amp; Head Office</span>
                <h3 className="text-2xl font-extrabold text-stone-900 font-display mt-0.5">
                  HELIOS GLOBAL EXPORTS
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Pollachi Coco Peat &amp; Agricultural Substrates
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Registered Office &amp; Facility</strong>
                    <span className="text-stone-700 leading-relaxed font-medium">
                      {COMPANY_DETAILS.address.fullFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ship className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Ocean Freight Dispatch Ports</strong>
                    <span className="text-stone-700 leading-relaxed">
                      Tuticorin Port (VOC Port) • Cochin Port • Chennai Port
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Official Export Email</strong>
                    <a 
                      href={`mailto:${COMPANY_DETAILS.officialEmail}`}
                      className="text-amber-800 hover:text-amber-900 font-semibold underline underline-offset-2"
                    >
                      {COMPANY_DETAILS.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">WhatsApp Export Desk</strong>
                    <button 
                      onClick={handleOpenStandardWhatsApp}
                      className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 text-left"
                    >
                      <span>{COMPANY_DETAILS.primaryPhoneDisplay} (Direct WhatsApp)</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Working Hours</strong>
                    <span className="text-stone-600">
                      Monday to Saturday: 09:00 AM – 07:00 PM IST (GMT+5:30)
                    </span>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      * WhatsApp hotline available for international timezones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Standard Callout Button */}
              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={handleOpenStandardWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Standard WhatsApp Export Inquiry</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
              Send Direct Message
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Our export management desk will review your requirements and respond with complete product documentation and pricing.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Smith"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Message / Inquired Grade (Low-EC or High-EC) *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify: Product grade (Low EC / High EC), desired target pH & EC, destination port, container quantity, and preferred Incoterm (FOB/CIF/CFR/EXW)..."
                  className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:border-amber-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </div>

              {msgSent && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inquiry initialized! We will respond promptly with full technical pricing.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider border border-stone-200">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>International Trade Guidance</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 font-display">
              Frequently Asked Questions (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-stone-900 hover:text-amber-800"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-amber-700" /> : <ChevronDown className="w-4 h-4 shrink-0 text-stone-400" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
