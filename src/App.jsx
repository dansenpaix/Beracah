import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] font-sans antialiased selection:bg-[#5B9D3C] selection:text-white">
      <ScrollToTop />
      
      {/* Header Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
          <Route path="/products" element={<Products onOpenQuote={handleOpenQuote} />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all fallback redirect to home */}
          <Route path="*" element={<Home onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Action Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
