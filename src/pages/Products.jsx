import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products({ onOpenQuote }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeTab, setActiveTab] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if URL search query changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  }, [searchParams]);

  const handleTabChange = (categoryId) => {
    setActiveTab(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.stoneType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-stone-pattern border-b border-slate-200/80 py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#6C1A32]/10 text-[#6C1A32] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Architectural Catalog & Product Gallery
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#6C1A32] font-sans tracking-tight">
            Premium Marble & Granite Collection
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-body text-center">
            Explore our handcrafted tombstones, kitchen countertops, church podiums, and custom cut stone slabs. Every design can be customized to your precise dimensions.
          </p>

          {/* Search & Quick Action Bar */}
          <div className="pt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by marble type (e.g. Juprano, Black Galaxy)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#5B9D3C] focus:border-[#5B9D3C] outline-none text-sm bg-white shadow-sm"
              />
            </div>
            <button
              onClick={onOpenQuote}
              className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition shrink-0"
            >
              Custom Spec Request
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Tab Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-slate-200">
          <span className="text-xs font-bold uppercase text-slate-400 mr-2 shrink-0 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
          </span>
          {PRODUCT_CATEGORIES.map((category) => {
            const isSelected = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shrink-0 flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-[#6C1A32] text-white shadow-md shadow-maroon-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-[#6C1A32] border border-slate-200'
                }`}
              >
                <span>{category.label}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-[#5B9D3C]"></span>}
              </button>
            );
          })}
        </div>

        {/* Product Count Indicator */}
        <div className="flex justify-between items-center mt-6 mb-8 text-xs text-slate-500 font-medium">
          <p>
            Showing <strong className="text-[#6C1A32]">{filteredProducts.length}</strong> stone products
            {activeTab !== 'all' && (
              <span> in <em>{PRODUCT_CATEGORIES.find(c => c.id === activeTab)?.label}</em></span>
            )}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#5B9D3C] hover:underline font-bold"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto my-12">
            <div className="w-16 h-16 bg-[#6C1A32]/10 rounded-full flex items-center justify-center mx-auto text-[#6C1A32]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#6C1A32]">No Matching Products Found</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We couldn't find any stone items matching your search query "{searchQuery}". However, we craft custom stone pieces to any custom specification.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="bg-[#5B9D3C] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow"
            >
              View Full Catalog
            </button>
          </div>
        )}
      </section>

      {/* 4. Bottom WhatsApp Custom Order Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-l-8 border-[#5B9D3C]">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-sans">Have a Custom Drawing or Dimensions in Mind?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Send your drawings, photos, or exact measurements directly to our engineering team on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/2347085514253?text=Hello%20Beracah%20Marble%2C%20I%20have%20custom%20architectural%20plans%20and%20dimensions%20I%20would%20like%20to%20send%20for%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-[#5B9D3C]" />
            <span>Send Blueprint on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
