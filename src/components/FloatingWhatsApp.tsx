import React, { useState } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';
import { COMPANY_DETAILS, generateStandardWhatsAppMessage } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState<'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)'>('Low-EC Coco Peat (Washed)');
  const [ecLevel, setEcLevel] = useState('< 0.5 mS/cm');
  const [phRange, setPhRange] = useState('5.5 - 6.5');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('1 x 40ft HC Container (~24-26 MT)');
  const [incoterm, setIncoterm] = useState('CIF');
  const [paymentOption, setPaymentOption] = useState('Letter of Credit (LC) / TT');

  const handleProductChange = (val: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)') => {
    setProductName(val);
    if (val === 'Low-EC Coco Peat (Washed)') {
      setEcLevel('< 0.5 mS/cm (Washed)');
      setPhRange('5.5 - 6.5');
    } else {
      setEcLevel('> 1.0 mS/cm (Unwashed)');
      setPhRange('5.8 - 7.5');
    }
  };

  const handleOpenWhatsApp = () => {
    const message = generateStandardWhatsAppMessage({
      productName,
      ecLevel,
      phRange,
      location: location || '[Destination Port / Country]',
      quantity,
      incoterm,
      paymentOption,
    });
    const url = `https://wa.me/${COMPANY_DETAILS.primaryWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-84 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Helios Export Desk</h4>
                <p className="text-[11px] text-emerald-100">Pollachi, India • Direct WhatsApp Desk</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white p-1 rounded-md"
              aria-label="Close WhatsApp widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Standard Form Body */}
          <div className="p-4 space-y-3 bg-stone-50 text-xs max-h-[75vh] overflow-y-auto">
            <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-[11px]">
              <strong>Standard Export Inquiry:</strong> Pre-fill your container parameters below to send a formatted inquiry directly to our export managers.
            </div>

            {/* 1. Product Grade */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">1. Product Name</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleProductChange('Low-EC Coco Peat (Washed)')}
                  className={`p-2 rounded-lg text-left text-xs font-bold border transition-all ${
                    productName === 'Low-EC Coco Peat (Washed)'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  Low-EC Washed
                </button>
                <button
                  type="button"
                  onClick={() => handleProductChange('High-EC Coco Peat (Unwashed)')}
                  className={`p-2 rounded-lg text-left text-xs font-bold border transition-all ${
                    productName === 'High-EC Coco Peat (Unwashed)'
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  High-EC Unwashed
                </button>
              </div>
            </div>

            {/* 2 & 3. EC & pH */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="font-bold text-stone-700 block mb-1">2. Target EC</label>
                <input
                  type="text"
                  value={ecLevel}
                  onChange={(e) => setEcLevel(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded-lg text-stone-900 text-xs"
                />
              </div>
              <div>
                <label className="font-bold text-stone-700 block mb-1">3. Target pH</label>
                <input
                  type="text"
                  value={phRange}
                  onChange={(e) => setPhRange(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded-lg text-stone-900 text-xs"
                />
              </div>
            </div>

            {/* 4. Location / Destination Port */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">4. Destination Port / Country</label>
              <input
                type="text"
                placeholder="e.g. Rotterdam / USA / UAE"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 bg-white border border-stone-300 rounded-lg text-stone-900 text-xs"
              />
            </div>

            {/* 5. Quantity */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">5. Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-2 bg-white border border-stone-300 rounded-lg text-stone-900 text-xs"
              >
                <option value="1 x 40ft HC Container (~24-26 MT)">1 x 40ft HC Container (~24-26 MT)</option>
                <option value="2 to 5 x 40ft HC Containers">2 to 5 x 40ft HC Containers</option>
                <option value="1 x 20ft FCL (~12-14 MT)">1 x 20ft FCL (~12-14 MT)</option>
                <option value="Annual Volume Supply Contract">Annual Volume Supply Contract</option>
              </select>
            </div>

            {/* 6. Export Term */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">6. Export Term (Incoterm)</label>
              <div className="grid grid-cols-4 gap-1">
                {['CIF', 'FOB', 'CFR', 'EXW'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setIncoterm(term)}
                    className={`py-1.5 px-2 rounded-md font-bold text-xs border text-center transition-all ${
                      incoterm === term
                        ? 'bg-amber-700 text-white border-amber-700'
                        : 'bg-white text-stone-700 border-stone-200'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* 7. Payment Option */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">7. Preferred Payment Option</label>
              <select
                value={paymentOption}
                onChange={(e) => setPaymentOption(e.target.value)}
                className="w-full p-2 bg-white border border-stone-300 rounded-lg text-stone-900 text-xs"
              >
                <option value="Letter of Credit (LC at sight)">Letter of Credit (LC at sight)</option>
                <option value="100% TT Advance">100% TT Advance</option>
                <option value="30% Advance + 70% DP against BL copy">30% Advance + 70% DP against BL copy</option>
                <option value="Document Against Payment (DP)">Document Against Payment (DP)</option>
              </select>
            </div>

            {/* Send Button */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs pt-3"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Launch Formatted WhatsApp Chat</span>
            </button>
          </div>

          <div className="bg-stone-100 px-4 py-2 text-[10px] text-stone-500 text-center border-t border-stone-200">
            Helios Global Exports • Pollachi, Coimbatore, India
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 focus:outline-hidden border-2 border-white"
        aria-label="Direct WhatsApp Chat"
        id="btn-floating-whatsapp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-emerald-600 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-emerald-600" />
        
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="text-xs font-bold font-sans tracking-wide">
          WhatsApp Inquiry
        </span>
      </button>

    </div>
  );
};
