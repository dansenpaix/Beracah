import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const whatsappNumber = '2347085514253';
  const defaultMessage = encodeURIComponent('Hello Beracah Marble & Granite, I would like to inquire about your custom stone products and services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="mr-3 bg-[#6C1A32] text-white text-xs font-medium py-1.5 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block whitespace-nowrap border border-white/20">
        Chat with Us on WhatsApp!
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative bg-[#5B9D3C] hover:bg-[#48802e] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center pulse-glow"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-[#5B9D3C]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
      </a>
    </div>
  );
}
