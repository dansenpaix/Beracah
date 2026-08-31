import React from 'react';
import { MessageCircle, CheckCircle, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const whatsappNumber = '2347085514253';
  const messageText = encodeURIComponent(`Hello Beracah Marble & Granite, I am interested in inquiring about the "${product.title}" (${product.stoneType}) design.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
      
      {/* Image Container with Zoom effect */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Category & Popular Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-[#6C1A32] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {product.categoryLabel}
          </span>
          {product.popular && (
            <span className="bg-[#5B9D3C] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured Design</span>
            </span>
          )}
        </div>

        {/* Stone Type Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
          <span className="bg-black/70 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-lg border border-white/20">
            {product.stoneType}
          </span>
          <span className="text-[11px] bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-lg">
            {product.finish}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold font-sans text-[#6C1A32] group-hover:text-[#5B9D3C] transition-colors leading-snug">
            {product.title}
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed font-body">
            {product.description}
          </p>

          {/* Key Specifications / Bullet features */}
          {product.features && (
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#5B9D3C] mr-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#5B9D3C] hover:bg-[#48802e] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-[#5B9D3C]" />
            <span>Inquire About This Design</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
