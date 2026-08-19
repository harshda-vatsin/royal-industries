'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-charcoal text-gray-300 font-sans mt-auto border-t border-charcoal-light snap-align-start">
      {/* Top Footer Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Company Profile */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2 bg-white p-2 rounded-sm w-fit inline-block">
              <Image
                src="/logo_main.png"
                alt="Royale Logo"
                width={200}
                height={60} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Established in May 2004, Royale is a leading B2B importer, trader, and supplier of a wide variety of polymer and plastic raw materials in bulk. Sourced from global producers, based in New Delhi, Delhi.
            </p>
            <span className="inline-flex w-fit items-center space-x-1.5 bg-brand-blue/15 border border-brand-blue/40 text-white px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider">
              <span>Authorized Distributor · LyondellBasell</span>
            </span>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center hover:bg-brand-blue transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://facebook.com" className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center hover:bg-brand-blue transition-colors duration-200" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center hover:bg-brand-blue transition-colors duration-200" aria-label="Instagram">
                <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Materials & Corporate Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-5">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-l-2 border-brand-blue pl-3">
                Corporate Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chemical-types" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link href="/applications" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>Applications</span>
                  </Link>
                </li>
                <li>
                  <Link href="/responsibility" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>Responsibility & Impact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>Contact & RFQ</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-5">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-l-2 border-brand-blue pl-3">
                Materials Portfolio
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/chemical-types/pvc" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>PVC Resins</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chemical-types/pe" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>PE Resins</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chemical-types/eva" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>EVA Granules</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chemical-types/chemicals" className="hover:text-brand-blue transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-5 group-hover:ml-0" />
                    <span>Chemicals</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-l-2 border-brand-blue pl-3">
              New Delhi Office
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                <span className="leading-normal text-xs">
                  Unit 302, Crown Heights, Plot 3B1, Twin District Centre, Sector-10, Rohini, New Delhi 110085
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="mailto:office@royaleind.in" className="hover:text-brand-blue transition-colors">office@royaleind.in</a>
              </div>

              {/* Mini Map Placeholder */}
              <div className="w-full h-28 bg-charcoal-light border border-gray-800 rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <MapPin className="w-6 h-6 text-brand-blue mb-1 group-hover:bounce transition-all duration-300" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">View Map Directions</span>
                  <span className="text-[9px] text-gray-500 mt-0.5">Delhi Warehouse & Office</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-10 bg-black/40 transition-opacity"
                  aria-label="Google Maps location"
                ></a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal-dark border-t border-charcoal-light py-6 px-4 sm:px-6 lg:px-12 xl:px-16 text-xs text-gray-500">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span>© 2026 Royale Industries. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-brand-blue transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
