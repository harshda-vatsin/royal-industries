'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#061a33] flex items-center min-h-[calc(100vh-110px)] py-8 sm:py-10 lg:py-14 snap-align-start">

      {/* Background Video - kept sharp and photographic */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover object-top scale-[1.05]"
          src="/videos/hero-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle dark navy neutral overlay for baseline readability */}
        <div className="absolute inset-0 bg-[rgba(6,26,51,0.24)] pointer-events-none" />
        {/* Left-side directional gradient for content contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,51,0.75)_0%,rgba(6,26,51,0.58)_35%,rgba(6,26,51,0.22)_65%,rgba(6,26,51,0.05)_100%)] pointer-events-none" />
        {/* Local radial readability zone behind headline and cards */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(6,26,51,0.25),transparent_65%)] pointer-events-none" />
        {/* Geometric texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay pointer-events-none bg-repeat"
          style={{
            backgroundImage: "url('/images/blue_textured_bg.png')",
            backgroundSize: "240px 240px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 justify-items-start">

          {/* Left Column: B2B Sourcing Narrative */}
          <div className="w-full max-w-3xl lg:max-w-5xl mx-0 flex flex-col text-left items-start animate-fade-in-up">

            {/* Main Heading */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-6xl text-[#F8FAFC] tracking-tight leading-[1.15]">
              <span className="block whitespace-nowrap">More Than Two Decades of</span>
              <span className="block whitespace-nowrap">Reliable <span className="text-brand-interactive">Polymer Supply</span>.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 font-sans font-semibold text-lg sm:text-xl text-white max-w-2xl leading-relaxed">
              Identifying the right polymer grade according to your product and application needs.
            </p>

            {/* Stats Highlights Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12 font-sans w-full">
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">21+ Yrs</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Sourcing Depth</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">35k MT+</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Annual Delivery</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">PAN India</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Supply Logistics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 font-sans mt-8 w-full sm:max-w-[760px]">
              <Link
                href="/#rfq"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm sm:text-base font-bold uppercase tracking-widest flex-1 min-h-[72px] py-3 px-6 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg rounded-sm cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="bg-white/5 border border-white/25 backdrop-blur-sm text-white text-sm sm:text-base font-bold flex-1 px-4 sm:px-6 py-3 min-h-[72px] flex items-center justify-center space-x-3 rounded-sm">
                <span className="bg-white rounded-sm px-3 py-2 flex-shrink-0 inline-flex items-center">
                  <Image
                    src="/images/logo_lyondellbasell.png"
                    alt="LyondellBasell"
                    width={262}
                    height={80}
                    unoptimized
                    className="h-8 w-auto object-contain"
                  />
                </span>
                <span className="uppercase tracking-widest leading-tight">Authorized Distributor</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
