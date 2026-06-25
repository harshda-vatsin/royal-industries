'use client';

import Link from 'next/link';
import { ArrowRight, MailCheck } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact_cta_bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70 z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-brand-red">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                Partner With Royale
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Need Bulk Plastic Raw Materials? <br />
              <span className="text-brand-red">Let's Connect Today.</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-light">
              Buy PVC granules, PE granules, and EVA granules in bulk from India Royale Industries for the best quality products, competitive wholesale pricing, and exceptional delivery service.
            </p>
          </div>

          {/* Action Column */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-4 w-full max-w-sm mx-auto lg:mx-0">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 text-center rounded-sm transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Contact Our Delhi Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#rfq"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 text-center rounded-sm transition-all flex items-center justify-center space-x-2"
            >
              <MailCheck className="w-4 h-4 text-gray-300" />
              <span>Request a Bulk Quote</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
    </section>
  );
}
