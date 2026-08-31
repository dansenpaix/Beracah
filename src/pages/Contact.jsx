import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Building
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'tombs',
    stonePreference: 'Black Galaxy Granite',
    dimensions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryLabel = PRODUCT_CATEGORIES.find(c => c.id === formData.category)?.label || formData.category;

    const textPayload = `*NEW CONTACT INQUIRY - BERACAH MARBLE & GRANITE*
----------------------------------------
*Client Name:* ${formData.name}
*Phone Number:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Project Category:* ${categoryLabel}
*Stone Preference:* ${formData.stonePreference}
*Dimensions / Location:* ${formData.dimensions || 'N/A'}
*Additional Message:* ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/2347085514253?text=${encodeURIComponent(textPayload)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-stone-pattern border-b border-slate-200/80 py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#6C1A32]/10 text-[#6C1A32] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Direct Communication & Factory Line
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#6C1A32] font-sans tracking-tight">
            Contact Beracah Marble & Granite
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-body text-center">
            Get in touch for custom pricing, site consultations, stone slab selection, and nationwide installation schedules.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Primary Phone */}
          <a
            href="tel:+2347085514253"
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-stone hover:shadow-stone-hover transition-all duration-300 space-y-3 group hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-[#5B9D3C]/10 text-[#5B9D3C] rounded-xl w-fit group-hover:bg-[#5B9D3C] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">Primary Customer Line</p>
              <h3 className="text-xl font-extrabold text-[#6C1A32] group-hover:text-[#5B9D3C] transition-colors mt-1">
                +234 708 551 4253
              </h3>
            </div>
            <span className="text-xs font-bold text-[#5B9D3C] flex items-center pt-2">
              Click to Call Direct →
            </span>
          </a>

          {/* Card 2: Secondary Phone */}
          <a
            href="tel:+2349071210896"
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-stone hover:shadow-stone-hover transition-all duration-300 space-y-3 group hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-[#6C1A32]/10 text-[#6C1A32] rounded-xl w-fit group-hover:bg-[#6C1A32] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">Alternative Phone Line</p>
              <h3 className="text-xl font-extrabold text-[#6C1A32] group-hover:text-[#5B9D3C] transition-colors mt-1">
                +234 907 121 0896
              </h3>
            </div>
            <span className="text-xs font-bold text-[#5B9D3C] flex items-center pt-2">
              Click to Call Direct →
            </span>
          </a>

          {/* Card 3: Instant WhatsApp */}
          <a
            href="https://wa.me/2347085514253"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-stone hover:shadow-stone-hover transition-all duration-300 space-y-3 group hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-[#5B9D3C] text-white rounded-xl w-fit shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">WhatsApp Direct Chat</p>
              <h3 className="text-xl font-extrabold text-[#6C1A32] group-hover:text-[#5B9D3C] transition-colors mt-1">
                Instant Chat
              </h3>
              <p className="text-xs text-slate-500 mt-1">Send photos & CAD dimensions</p>
            </div>
            <span className="text-xs font-bold text-[#5B9D3C] flex items-center pt-2">
              Launch WhatsApp →
            </span>
          </a>

          {/* Card 4: Instagram Official */}
          <a
            href="https://www.instagram.com/beracah_marble_and_granite?igsi=c3oxemY1YXNqa2Nh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-stone hover:shadow-stone-hover transition-all duration-300 space-y-3 group hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-pink-600 text-white rounded-xl w-fit shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-4">Instagram Portfolio</p>
              <h3 className="text-sm font-extrabold text-[#6C1A32] group-hover:text-[#5B9D3C] transition-colors mt-1 truncate">
                @beracah_marble_and_granite
              </h3>
              <p className="text-xs text-slate-500 mt-1">View latest completed jobs</p>
            </div>
            <span className="text-xs font-bold text-pink-600 flex items-center pt-2">
              Visit Instagram →
            </span>
          </a>

        </div>
      </section>

      {/* 3. Interactive Form & Factory Notice (2-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="text-center sm:text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5B9D3C]">
                Interactive Spec Request Form
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#6C1A32] font-sans mt-1">
                Send Us Your Project Details
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Fill out the fields below to submit directly to our engineering team on WhatsApp for an immediate price estimate.
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-medium flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#5B9D3C] shrink-0" />
                <span>Form submitted! Redirecting to WhatsApp with your formatted project specifications.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief Adeleke Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Project Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm bg-white"
                  >
                    {PRODUCT_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Stone Preference</label>
                  <select
                    value={formData.stonePreference}
                    onChange={(e) => setFormData({ ...formData, stonePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm bg-white"
                  >
                    <option value="Black Galaxy Granite">Black Galaxy Granite</option>
                    <option value="Carrara White Marble">Carrara White Marble</option>
                    <option value="Absolute Black Granite">Absolute Black Granite</option>
                    <option value="Imperial Red Granite">Imperial Red Granite</option>
                    <option value="Verde Guatemala Marble">Verde Guatemala Marble</option>
                    <option value="Custom / Undecided">Custom / Undecided</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Dimensions / Installation Site
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2.4m x 0.6m kitchen slab, Lagos site location"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message & Custom Notes</label>
                <textarea
                  rows="4"
                  placeholder="Write any special edge profiling, gold engraving instructions, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] outline-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5B9D3C] hover:bg-[#48802e] text-white py-2.5 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-[#5B9D3C]" />
                <span>Submit Specs via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Location & Schedule Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#6C1A32] text-white p-8 rounded-3xl space-y-6 border-t-4 border-[#5B9D3C] shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Building className="w-6 h-6 text-[#5B9D3C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans">Factory & Workshop</h3>
                  <p className="text-xs text-amber-200">State-of-the-Art Fabrication</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-200">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Consultation Hours:</strong>
                    <p>Monday – Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-slate-300">Sunday: Closed (WhatsApp inquiries active 24/7)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Nationwide Installation:</strong>
                    <p>On-site measurements and professional fitting available across Lagos, Abuja, Port Harcourt, and all states in Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <ShieldCheck className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Stone Sample Requests:</strong>
                    <p>Physical granite and marble slab samples can be inspected upon request prior to final cut.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Highlight */}
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-3">
              <div className="flex items-center space-x-2 text-[#5B9D3C] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Fastest Response Time</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                For urgent project timelines or immediate tombstone memorial orders, please call directly at <strong>+234 708 551 4253</strong> or send a message on WhatsApp.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
