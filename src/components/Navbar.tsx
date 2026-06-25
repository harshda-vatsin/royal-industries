'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Menu, X, Globe } from 'lucide-react';

const MENU_ITEMS = [
  { name: 'About Us', href: '/about' },
  { name: 'Materials', href: '/segments' },
  { name: 'Contact & RFQ', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-charcoal text-gray-300 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-charcoal-light relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@indiaroyale.com" className="flex items-center space-x-1.5 hover:text-brand-red transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@indiaroyale.com</span>
            </a>
            <a href="tel:+911146200000" className="flex items-center space-x-1.5 hover:text-brand-red transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91-11-46200000</span>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3 border-r border-gray-700 pr-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-1 hover:text-brand-red cursor-pointer transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all duration-300 z-40 border-b border-gray-100 ${
        isScrolled ? 'fixed top-0 shadow-md py-3' : 'relative py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-heading font-bold text-xl tracking-wider rounded-sm transition-transform duration-300 group-hover:scale-105">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-charcoal leading-none">
                  ROYALE INDUSTRIES
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-brand-red uppercase mt-0.5">
                  India Royale Industries
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-7">
                {MENU_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-semibold tracking-wide hover-underline-animation uppercase ${
                        isActive ? 'text-brand-red font-bold' : 'text-charcoal-light hover:text-brand-red'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/#rfq"
                className="bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-colors duration-200 rounded-sm shadow-sm"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal hover:text-brand-red p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-out Drawer */}
        <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full py-6 px-6">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <span className="font-heading font-extrabold text-base tracking-tight text-charcoal">
                NAVIGATION
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal hover:text-brand-red p-1"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 flex-grow">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold uppercase tracking-wider py-2 border-b border-gray-50 ${
                      isActive ? 'text-brand-red border-brand-red' : 'text-charcoal-light hover:text-brand-red'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto">
              <Link
                href="/#rfq"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold py-3 uppercase tracking-widest transition-colors duration-200 rounded-sm"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
