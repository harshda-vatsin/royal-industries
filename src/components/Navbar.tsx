'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Menu, X } from 'lucide-react';

const MENU_ITEMS = [
  { name: 'About Us', href: '/about' },
  { 
    name: 'Chemical Types', 
    href: '/chemical-types',
    subItems: [
      { name: 'PVC Resins', href: '/chemical-types/pvc' },
      { name: 'PE Polymers', href: '/chemical-types/pe' },
      { name: 'EVA Copolymers', href: '/chemical-types/eva' },
      { name: 'Polypropylene (PP)', href: '/chemical-types/pp' },
      { name: 'Specialty Copolymers', href: '/chemical-types/copolymers' },
    ]
  },
  { name: 'Applications', href: '/applications' },
  { name: 'Responsibility', href: '/responsibility' },
  { name: 'Contact', href: '/contact' },
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
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@indiaroyale.com" className="flex items-center space-x-1.5 hover:text-brand-blue transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@indiaroyale.com</span>
            </a>
            <a href="tel:+911146200000" className="flex items-center space-x-1.5 hover:text-brand-blue transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91-11-46200000</span>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3 pr-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-shadow duration-300 z-40 border-b border-gray-100 sticky top-0 ${
        isScrolled ? 'shadow-md' : ''
      } py-3.5`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image 
                src="/logo.png" 
                alt="Royale Resinex Logo" 
                width={240} 
                height={80} 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-7">
                {MENU_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.subItems && pathname.startsWith(item.href));
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={`text-sm font-semibold tracking-wide hover-underline-animation uppercase py-4 ${
                          isActive ? 'text-brand-blue font-bold' : 'text-charcoal-light hover:text-brand-blue'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Desktop Dropdown */}
                      {item.subItems && (
                        <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                          <div className="py-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-brand-blue-light/5 hover:text-brand-blue-light transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <Link
                href="/#rfq"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-colors duration-200 rounded-sm shadow-sm"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal hover:text-brand-blue p-2"
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
                className="text-charcoal hover:text-brand-blue p-1"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 flex-grow">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.subItems && pathname.startsWith(item.href));
                return (
                  <div key={item.name} className="flex flex-col border-b border-gray-50">
                    <Link
                      href={item.href}
                      onClick={() => !item.subItems && setIsOpen(false)}
                      className={`text-sm font-semibold uppercase tracking-wider py-3 ${
                        isActive ? 'text-brand-blue font-bold' : 'text-charcoal-light hover:text-brand-blue'
                      }`}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Sub Items */}
                    {item.subItems && (
                      <div className="flex flex-col pl-4 pb-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-xs font-semibold text-gray-500 hover:text-brand-blue-light py-1.5`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto">
              <Link
                href="/#rfq"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold py-3 uppercase tracking-widest transition-colors duration-200 rounded-sm"
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
