import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'tombs',
    stonePreference: 'Granite',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryObj = PRODUCT_CATEGORIES.find(c => c.id === formData.category);
    const categoryLabel = categoryObj ? categoryObj.label : formData.category;

    const messageText = `*QUICK QUOTE REQUEST - BERACAH MARBLE & GRANITE*
----------------------------------------
*Full Name:* ${formData.name || 'Not provided'}
*Phone Number:* ${formData.phone || 'Not provided'}
*Project Category:* ${categoryLabel}
*Stone Preference:* ${formData.stonePreference}
*Project Details / Dimensions:* ${formData.message || 'General inquiry'}`;

    const whatsappUrl = `https://wa.me/2347085514253?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#6C1A32] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2 text-[#5B9D3C] text-xs font-bold tracking-widest uppercase mb-1">
            <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-emerald-300">Instant Estimate</span>
          </div>
          <h3 className="text-2xl font-bold font-sans">Request a Custom Quote</h3>
          <p className="text-sm text-slate-200 mt-1">
            Fill in your specs below for immediate pricing & factory design consultation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chief Adeleke Johnson"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none transition text-slate-800 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+234..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none transition text-slate-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Project Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none transition text-slate-800 text-sm bg-white"
              >
                {PRODUCT_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Stone Preference
            </label>
            <select
              value={formData.stonePreference}
              onChange={(e) => setFormData({ ...formData, stonePreference: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none transition text-slate-800 text-sm bg-white"
            >
              <option value="Black Galaxy Granite">Black Galaxy Granite</option>
              <option value="Carrara White Marble">Carrara White Marble</option>
              <option value="Absolute Black Granite">Absolute Black Granite</option>
              <option value="Imperial Red Granite">Imperial Red Granite</option>
              <option value="Verde Guatemala Marble">Verde Guatemala Marble</option>
              <option value="Custom / Expert Recommendation">Custom / Undecided</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Dimensions & Project Notes
            </label>
            <textarea
              rows="3"
              placeholder="Describe required dimensions, design ideas, or delivery location..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none transition text-slate-800 text-sm"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#5B9D3C] hover:bg-[#48802e] text-white py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Send Quote Request to WhatsApp</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              Opens WhatsApp directly with your pre-filled inquiry for immediate response.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
