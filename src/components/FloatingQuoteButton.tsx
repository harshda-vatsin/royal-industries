'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on initial mount

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-6 z-[99] transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      <Link
        href="/#rfq"
        className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white shadow-xl hover:shadow-2xl px-5 py-3 sm:px-6 sm:py-4 rounded-full transition-all duration-300 group border-[3px] border-white/20"
      >
        <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-bold text-xs sm:text-sm tracking-widest uppercase">Request a Quote</span>
      </Link>
    </div>
  );
}
