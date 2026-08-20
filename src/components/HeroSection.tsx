'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lightbulb } from 'lucide-react';

type QuoteData = { text: string; author: string };

const FALLBACK_QUOTES: QuoteData[] = [
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Great things in business are never done by one person.", author: "Steve Jobs" },
  { text: "If you don't drive your business, you will be driven out of business.", author: "B.C. Forbes" },
  { text: "Don't find customers for your products, find products for your customers.", author: "Seth Godin" },
  { text: "A satisfied customer is the best business strategy of all.", author: "Michael LeBoeuf" },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
];

export default function HeroSection() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const today = new Date().toDateString();
        const cachedQuoteStr = localStorage.getItem('dailyQuoteData');
        const cachedDate = localStorage.getItem('dailyQuoteDate');

        if (cachedQuoteStr && cachedDate === today) {
          try {
            const parsed = JSON.parse(cachedQuoteStr);
            setQuote(parsed);
            setIsLoading(false);
            return;
          } catch(e) {}
        }

        let quoteFound = false;

        // 1. Try ZenQuotes via our internal API proxy to bypass CORS
        try {
          const res = await fetch('/api/quote');
          if (res.ok) {
            const data = await res.json();
            if (data && data.length > 0) {
              const newQuote = { text: data[0].q, author: data[0].a };
              localStorage.setItem('dailyQuoteData', JSON.stringify(newQuote));
              localStorage.setItem('dailyQuoteDate', today);
              setQuote(newQuote);
              quoteFound = true;
            }
          }
        } catch (e) {
          console.warn("ZenQuotes API failed", e);
        }

        // 2. Try Quotable API fallback
        if (!quoteFound) {
          try {
            const res2 = await fetch('https://api.quotable.io/random?tags=business|success');
            if (res2.ok) {
              const data2 = await res2.json();
              if (data2 && data2.content) {
                const newQuote = { text: data2.content, author: data2.author };
                localStorage.setItem('dailyQuoteData', JSON.stringify(newQuote));
                localStorage.setItem('dailyQuoteDate', today);
                setQuote(newQuote);
                quoteFound = true;
              }
            }
          } catch (e) {
            console.warn("Quotable API failed", e);
          }
        }

        // 3. Local Array Fallback
        if (!quoteFound) {
          const randomQuote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
          localStorage.setItem('dailyQuoteData', JSON.stringify(randomQuote));
          localStorage.setItem('dailyQuoteDate', today);
          setQuote(randomQuote);
        }
      } catch (err) {
        setQuote(FALLBACK_QUOTES[0]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#061a33] flex flex-col justify-center min-h-[calc(100vh-110px)] py-4 sm:py-6 lg:py-8 snap-align-start">

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
      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center flex-grow justify-center mt-[-20px] sm:mt-0">
        
        {/* Thought of the Day Banner */}
        <div className="w-full mx-auto mt-[-30px] lg:mt-[-50px] mb-2 flex flex-col items-center justify-center transition-all duration-250 animate-fade-in-up group cursor-default">
          {isLoading ? (
            <span className="text-white/70 text-[13px] sm:text-sm font-sans tracking-wide">Loading today's thought...</span>
          ) : (
            <div className="inline-flex flex-col w-auto max-w-3xl text-center">
              <span className="text-sm sm:text-base leading-relaxed tracking-wide text-white font-medium">
                "{quote?.text}"
              </span>
              <span className="text-right text-[13px] sm:text-sm italic text-gray-300 mt-1">
                {quote?.author}
              </span>
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-1 justify-items-start">

          {/* Left Column: B2B Sourcing Narrative */}
          <div className="w-full max-w-3xl lg:max-w-5xl mx-0 flex flex-col text-left items-start animate-fade-in-up mt-4 sm:mt-6 lg:mt-8">

            {/* Main Heading */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] tracking-tight leading-[1.15]">
              <span className="block whitespace-nowrap">Two Decades of</span>
              <span className="block whitespace-nowrap">Reliable <span className="text-brand-interactive">Polymer Supply</span>.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-3 font-sans font-semibold text-lg sm:text-xl text-white max-w-2xl leading-relaxed">
              Identifying the ideal polymer grade for your needs.
            </p>

            {/* Stats Highlights Grid */}
            <div className="grid grid-cols-3 gap-6 mt-6 font-sans w-full">
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">21+ Yrs</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Sourcing Depth</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">40k MT+</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Annual Delivery</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-3xl sm:text-4xl text-[#F8FAFC]">PAN India</span>
                <span className="block text-xs sm:text-sm uppercase font-bold text-slate-300/80 tracking-wider">Supply Logistics</span>
              </div>
            </div>

            {/* Action Buttons & Banner Row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-stretch gap-4 font-sans mt-6 w-full sm:max-w-2xl lg:max-w-3xl">
              {/* Authorized Distributor Banner */}
              <div className="flex-1 bg-white/8 border border-brand-interactive/50 backdrop-blur-sm rounded-sm px-6 py-3 flex items-center justify-center gap-4 shadow-lg min-h-[72px] md:min-h-[64px]">
                <span className="bg-white rounded-sm px-3 py-1.5 flex-shrink-0 inline-flex items-center">
                  <Image
                    src="/images/logo_lyb_small.png"
                    alt="LyondellBasell"
                    width={40}
                    height={40}
                    unoptimized
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </span>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-extrabold uppercase tracking-widest leading-tight">Authorized Distributor</span>
                  <span className="text-brand-interactive text-xs sm:text-sm font-semibold">LyondellBasell Polymer Grades</span>
                </div>
              </div>

              <Link
                href="/#rfq"
                className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest min-h-[72px] md:min-h-[64px] py-3 px-6 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg rounded-sm cursor-pointer whitespace-nowrap"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

