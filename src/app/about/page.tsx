import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import SectionHeader from '@/components/SectionHeader';
import ScrollPop from '@/components/ScrollPop';
import { 
  Target, 
  Eye, 
  Warehouse, 
  Award, 
  Beaker, 
  Globe, 
  Truck, 
  ClipboardCheck, 
  Users, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  MapPin, 
  ArrowRight,
  FileText
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const TIMELINE = [
  {
    year: '2004',
    title: 'Company Foundation',
    description: 'Royale Industries was founded in May 2004 in New Delhi with the objective of providing focused polymer sourcing and supply services to industrial customers.',
  },
  {
    year: '2009',
    title: '₹100 Crore Scale Milestone',
    description: 'Crossed the ₹100 crore business scale milestone during the company\'s early growth years, establishing a growing presence in the B2B polymer supply market.',
  },
  {
    year: '2019',
    title: '₹400 Crore Scale Milestone',
    description: 'Expanded to approximately ₹400 crore in business scale through established supplier relationships, growing customer requirements, and bulk material supply coordination.',
  },
  {
    year: 'Approved',
    title: 'Approved B2B Supplier',
    description: 'Developed supply relationships and approved supplier credentials for major automotive organizations, with materials supplied to companies including Toyota, Maruti, BMW, and Mercedes.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="About Our Corporation"
        bgImage="/images/about_manufacturing_floor.png"
      />

      <main className="flex-grow">
        
        {/* Section 1: Corporate Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Narrative Content */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                    Corporate Profile
                  </span>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                    Two Decades of Polymer Sourcing & Supply Expertise
                  </h2>
                  
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Established in May 2004, Royale Industries Pvt. Ltd. is a New Delhi-based polymer trading, sourcing, and supply company serving manufacturers and industrial buyers across India.
                  </p>
                  
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    For more than two decades, we have supported businesses in sourcing polymer and plastic raw materials through an extensive network of domestic and international suppliers. Our experience in the polymer trade enables us to understand material grades, sourcing requirements, documentation, bulk procurement, and the supply expectations of industrial customers.
                  </p>
                  
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    We work closely with manufacturers across multiple industries, helping them access reliable material options based on their production and procurement requirements. From identifying suitable grades and coordinating bulk orders to documentation verification and dispatch management, our team remains directly involved throughout the supply process.
                  </p>
                  
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Built on long-standing supplier relationships and a practical understanding of the polymer market, Royale Industries continues to operate with a clear focus on material availability, responsive communication, and dependable B2B supply.
                  </p>
                </div>

                {/* Right Column: Key B2B Metrics Sidebar */}
                <div className="lg:col-span-5 bg-[#E1EDFA]/40 border border-[#C4DBF5] p-8 rounded-xl space-y-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,58,110,0.03),transparent_65%)] pointer-events-none" />
                  
                  <h3 className="font-heading font-extrabold text-xl text-charcoal tracking-tight">Royale At A Glance</h3>
                  <div className="w-12 h-1 bg-brand-blue"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                      <div className="text-brand-blue font-heading font-extrabold text-3xl">2004</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Foundation</div>
                      <div className="text-xs text-gray-500 mt-2 font-sans">Established in New Delhi, India.</div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                      <div className="text-brand-blue font-heading font-extrabold text-3xl">20+</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Years Experience</div>
                      <div className="text-xs text-gray-500 mt-2 font-sans">Expertise in polymer sourcing.</div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                      <div className="text-brand-blue font-heading font-extrabold text-3xl">₹400 Cr</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Business Scale</div>
                      <div className="text-xs text-gray-500 mt-2 font-sans">Bulk coordination volume.</div>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                      <div className="text-brand-blue font-heading font-extrabold text-3xl">~15</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Specialists</div>
                      <div className="text-xs text-gray-500 mt-2 font-sans">Focused, professional team.</div>
                    </div>
                  </div>

                  <div className="bg-[#14212B] text-white p-5 rounded-lg space-y-2 mt-4">
                    <div className="text-brand-interactive text-xs font-bold uppercase tracking-widest">Industry Credentials</div>
                    <div className="font-heading font-bold text-sm">Approved B2B Supplier</div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      Serving automotive manufacturers across India, supplying polymer grades for Toyota, Maruti, BMW, and Mercedes.
                    </p>
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>
        </section>

        {/* Section 2: Supply Chain Role */}
        <section className="py-20 bg-[#E1EDFA]/20 border-t border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            
            <ScrollPop>
              <div className="max-w-4xl mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5 block mb-3">
                  Our Role in the Polymer Supply Chain
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-6">
                  Connecting Global Polymer Supply with Indian Industry
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                  The polymer industry operates across a complex network of manufacturers, refineries, international suppliers, import channels, distributors, and industrial consumers. Royale Industries operates as a sourcing and supply partner within this network.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base mt-4">
                  We identify polymer sourcing opportunities, coordinate with established suppliers, evaluate material documentation, and manage the commercial and logistical processes required to supply materials to industrial customers across India. Our role extends beyond conventional trading. We help customers navigate material availability, grade requirements, bulk procurement, and changing market conditions through direct communication and industry experience.
                </p>
              </div>
            </ScrollPop>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Sourcing */}
              <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Polymer Sourcing</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Identifying suitable polymer grades and material options through established domestic and international supplier networks.
                  </p>
                </div>
              </div>

              {/* Coordination */}
              <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Bulk Supply Coordination</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Managing commercial requirements, order quantities, documentation, and dispatch coordination for industrial-scale material requirements.
                  </p>
                </div>
              </div>

              {/* Documentation */}
              <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Material Documentation</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Reviewing manufacturer documentation and Certificates of Analysis to support material verification and batch traceability.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Customer Support</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Understanding application, grade, and procurement requirements to help customers identify appropriate sourcing options.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Mission, Vision & Core Values */}
        <section className="py-20 bg-white animate-fade-in">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            
            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              
              {/* Mission */}
              <div className="bg-[#E1EDFA]/30 border border-[#C4DBF5] border-l-4 border-l-brand-blue p-8 sm:p-10 rounded-xl space-y-4 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-full">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-charcoal tracking-tight">Our Mission</h3>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                  To reliably connect Indian industries with high-quality polymer raw materials through expert sourcing, responsive service, and dependable supply.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#E1EDFA]/30 border border-[#C4DBF5] border-l-4 border-l-brand-blue p-8 sm:p-10 rounded-xl space-y-4 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-full">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-charcoal tracking-tight">Our Vision</h3>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                  To become one of India&apos;s most trusted polymer sourcing and supply partners, recognised for reliability, material availability, technical understanding, and long-term customer relationships.
                </p>
              </div>

            </div>

            {/* Core Values Section */}
            <div className="border-t border-gray-100 pt-20">
              <SectionHeader
                tag="Our Core Values"
                title="Principles That Guide Every Business Relationship"
                description="Royale Industries operates with a clear set of values to maintain trust, transparency, and reliable operations."
                lightBg={false}
                centered={true}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. Integrity in Sourcing */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Integrity in Sourcing</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    We believe transparency and responsible sourcing form the foundation of sustainable business relationships.
                  </p>
                </div>

                {/* 2. Supply Reliability */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Supply Reliability</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Industrial production depends on material availability. We work to maintain responsive sourcing and coordinated supply processes for our customers.
                  </p>
                </div>

                {/* 3. Documentation & Verification */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Beaker className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Documentation & Verification</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Material documentation and manufacturer Certificates of Analysis are carefully reviewed to support grade and batch verification.
                  </p>
                </div>

                {/* 4. Direct Communication */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Direct Communication</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Our focused organizational structure enables customers to communicate directly with experienced members of our team.
                  </p>
                </div>

                {/* 5. Long-Term Relationships */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Long-Term Relationships</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    We approach customers and suppliers as long-term business partners rather than individual transactions.
                  </p>
                </div>

                {/* 6. Market Understanding */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">Market Understanding</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    More than two decades in the polymer trade have developed our understanding of sourcing conditions, material requirements, and industrial procurement expectations.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Industry Experience & Sourcing Network */}
        <section className="py-20 bg-[#E1EDFA]/10 border-t border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Industry Experience Card */}
                <div className="bg-white p-8 sm:p-12 rounded-xl border border-gray-100 shadow-sm space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                      Our Industry Experience
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                      Understanding Polymer Trade Beyond the Transaction
                    </h3>
                    <p className="text-gray-600 font-sans leading-relaxed text-sm">
                      Polymer sourcing requires more than identifying a product and arranging delivery. Material grades, manufacturer specifications, batch documentation, availability, commercial quantities, logistics, and procurement timelines can significantly influence an industrial buyer's sourcing decisions.
                    </p>
                    <p className="text-gray-600 font-sans leading-relaxed text-sm">
                      Since 2004, Royale Industries has developed practical experience across these areas of the polymer trade. Our team works directly with customers to understand their material requirements and coordinate sourcing based on available grades and supply options. This experience allows us to respond efficiently to procurement enquiries and maintain clear communication throughout the sourcing process.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <p className="text-brand-blue font-heading font-bold text-sm sm:text-base italic leading-relaxed">
                      "Our objective is simple: make polymer procurement more dependable, transparent, and responsive for our customers."
                    </p>
                  </div>
                </div>

                {/* Sourcing Network Card */}
                <div className="bg-brand-blue text-white p-8 sm:p-12 rounded-xl space-y-6 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.1),transparent_65%)] pointer-events-none" />
                  
                  <div className="relative z-10 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-interactive border-l-2 border-brand-interactive pl-2.5">
                      Sourcing Capabilities
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                      Built on Established Supplier Relationships
                    </h3>
                    <p className="text-gray-300 font-sans leading-relaxed text-sm">
                      Reliable polymer trading depends heavily on access to material, supplier communication, and an understanding of international and domestic sourcing channels.
                    </p>
                    <p className="text-gray-300 font-sans leading-relaxed text-sm">
                      Over the years, Royale Industries has developed relationships across the polymer supply ecosystem, enabling us to explore material options from established manufacturers, refineries, and suppliers.
                    </p>
                    <p className="text-gray-300 font-sans leading-relaxed text-sm">
                      Our sourcing approach focuses on understanding customer requirements and identifying available grades, quantities, and supply options through our network. These relationships allow our team to remain closely connected with the market and respond to changing material requirements and availability.
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-white/10 pt-6 mt-6 flex items-center justify-between">
                    <div className="text-xs text-brand-interactive font-bold uppercase tracking-widest">
                      Global & Domestic Sourcing
                    </div>
                    <Globe className="w-6 h-6 text-brand-interactive" />
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>
        </section>

        {/* Section 5: Milestones & History Timeline */}
        <section className="py-24 bg-brand-blue border-t border-b border-brand-blue-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
            
            {/* Section Header for Dark Background */}
            <div className="mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-interactive mb-3 block border-l-2 border-brand-interactive pl-2.5">
                Milestones & History
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight text-white">
                Our Journey of Trust
              </h2>
              <div className="w-16 h-1 bg-brand-interactive my-5"></div>
              <p className="text-base text-gray-300 leading-relaxed font-sans mt-2">
                Since May 2004, Royale Industries has supplied specialized polymer raw materials to manufacturers in Delhi and across India. Our growth reflects more than two decades of supplier relationships, customer confidence, and experience in the Indian polymer market.
              </p>
            </div>

            <div className="relative border-l border-white/20 ml-4 md:ml-32 space-y-12 max-w-3xl md:mx-auto">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-brand-blue border-2 border-brand-interactive rounded-full group-hover:bg-brand-interactive transition-colors duration-200"></div>
                  
                  <div className="hidden md:block absolute -left-32 top-1 font-heading font-extrabold text-sm sm:text-base text-brand-interactive text-right w-24">
                    {item.year}
                  </div>

                  <div className="bg-white p-6 rounded-sm shadow-md border border-gray-100 hover:border-brand-interactive transition-all duration-300">
                    <span className="md:hidden block font-heading font-extrabold text-sm text-brand-interactive mb-1">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Markets & Team */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Markets We Support */}
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                    Markets & Industries We Support
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                    Polymer Materials for Diverse Manufacturing Requirements
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    The versatility of polymers makes them essential across a wide range of industrial applications.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Royale Industries supports material requirements for manufacturers and industrial buyers operating across sectors where polymer quality, grade consistency, and dependable sourcing are critical.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Our customer requirements may span automotive components, packaging applications, consumer products, industrial manufacturing, electrical applications, and other polymer-based production environments. Each sourcing enquiry is evaluated according to the customer's material, grade, quantity, and supply requirements.
                  </p>
                  
                  {/* Pills of Supported Sectors */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Automotive Components', 'Packaging Applications', 'Consumer Products', 'Industrial Manufacturing', 'Electrical Applications'].map((industry, index) => (
                      <div key={index} className="bg-[#E1EDFA]/50 border border-[#C4DBF5]/60 text-charcoal px-4 py-2.5 rounded text-xs font-bold font-heading hover:bg-brand-blue hover:text-white transition-all duration-200">
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Team */}
                <div className="bg-[#E1EDFA]/20 border border-[#C4DBF5]/40 p-8 sm:p-10 rounded-xl space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                    Our Team
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-charcoal tracking-tight leading-tight">
                    A Highly Specialized Team of ~15 Professionals
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm">
                    Royale Industries maintains a focused and experienced team of approximately 15 employees.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm">
                    Our compact organizational structure enables direct communication and faster coordination between customers, suppliers, and the people responsible for managing their requirements.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm">
                    Rather than operating through multiple administrative layers, our customers are able to communicate with team members who understand their enquiries and remain involved throughout the sourcing and supply process. This approach has helped us build long-term customer relationships based on accessibility, responsiveness, and personal attention.
                  </p>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-center space-x-4 shadow-sm">
                    <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-charcoal text-sm">Direct Customer Access</h4>
                      <p className="text-xs text-gray-500 font-sans mt-0.5">Communicate directly with experienced trade specialists.</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>
        </section>

        {/* Section 7: Operational Strength & Quality Documentation */}
        <section className="py-20 bg-[#E1EDFA]/20 border-t border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            
            {/* Operational Strength (Infrastructure) */}
            <div className="mb-20">
              <SectionHeader
                tag="Supply Infrastructure & Logistics"
                title="Our Operational Strength"
                description="Our supply operations are structured to support bulk polymer distribution and industrial procurement requirements. From sourcing coordination to storage and dispatch planning, our team works to maintain clear material handling."
                lightBg={true}
                centered={true}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Global Sourcing Network */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-charcoal tracking-tight">Global Sourcing Network</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Established procurement channels with international and domestic suppliers provide access to a range of polymer grades and sourcing opportunities.
                  </p>
                </div>

                {/* New Delhi Warehousing */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Warehouse className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-charcoal tracking-tight">New Delhi Warehousing</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Our Delhi-based storage infrastructure supports the secure handling and storage of polymer raw materials prior to dispatch.
                  </p>
                </div>

                {/* Bulk Dispatch Coordination */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-charcoal tracking-tight">Bulk Dispatch Coordination</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    We coordinate bulk material movement and logistics based on customer quantities, delivery requirements, and supply schedules.
                  </p>
                </div>

                {/* PAN India Supply Support */}
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-blue hover:shadow-sm transition-all duration-300 space-y-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-charcoal tracking-tight">PAN India Supply Support</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    Our logistics coordination enables us to serve industrial customers across multiple regions of India.
                  </p>
                </div>

              </div>
            </div>

            {/* Quality & Verification */}
            <div className="border-t border-gray-200 pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                    Confidence Through Verification
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                    Quality & Documentation
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Material documentation is an important part of industrial polymer procurement.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Our sourcing process includes the review of available manufacturer documentation and Certificates of Analysis to support grade identification and batch consistency.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Where applicable, our team coordinates material documentation with suppliers and customers to maintain clarity regarding the sourced product.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Certificate of Analysis Review */}
                  <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-3">
                    <div className="flex items-center space-x-3 text-brand-blue">
                      <ClipboardCheck className="w-5 h-5" />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">Certificate of Analysis Review</h4>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                      Manufacturer-provided Certificates of Analysis are reviewed as part of the material documentation process.
                    </p>
                  </div>

                  {/* Grade Verification */}
                  <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-3">
                    <div className="flex items-center space-x-3 text-brand-blue">
                      <ShieldCheck className="w-5 h-5" />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">Grade Verification</h4>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                      Material descriptions and available specifications are checked against sourcing requirements.
                    </p>
                  </div>

                  {/* Batch Documentation */}
                  <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-3">
                    <div className="flex items-center space-x-3 text-brand-blue">
                      <FileText className="w-5 h-5" />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">Batch Documentation</h4>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                      Relevant supplier and manufacturer documentation is maintained to support material traceability.
                    </p>
                  </div>

                  {/* Supplier Coordination */}
                  <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-3">
                    <div className="flex items-center space-x-3 text-brand-blue">
                      <Users className="w-5 h-5" />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">Supplier Coordination</h4>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                      Our team communicates directly with sourcing partners when documentation or material information requires clarification.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Section 8: Relationship-Driven Approach & Looking Ahead */}
        <section className="py-24 bg-[#14212B] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_65%)] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
            <ScrollPop>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Relationship Driven */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-interactive border-l-2 border-brand-interactive pl-2.5">
                    Business Built Over Decades, Not Transactions
                  </span>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    A Relationship-Driven Approach
                  </h3>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                    The polymer market changes continuously. Material availability, international supply conditions, logistics, and industrial demand can shift over time. What remains constant is the importance of dependable business relationships.
                  </p>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                    Royale Industries has grown through long-term relationships with customers and suppliers who value direct communication and consistent business support. Many of our relationships have developed over years of working together, understanding procurement requirements, and responding to changing material needs.
                  </p>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                    For us, polymer trading is not simply about completing an order. It is about becoming a reliable part of our customer's sourcing network.
                  </p>
                </div>

                {/* Looking Ahead & CTA */}
                <div className="lg:col-span-6 bg-brand-blue/30 border border-white/10 p-8 sm:p-10 rounded-xl space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-interactive border-l-2 border-brand-interactive pl-2.5">
                    Looking Ahead
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight leading-tight">
                    Building the Next Chapter of Royale Industries
                  </h3>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm">
                    As India's manufacturing and polymer consumption landscape continues to evolve, Royale Industries remains focused on strengthening its sourcing network, expanding material access, and improving the experience of industrial procurement.
                  </p>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm">
                    We continue to build on more than two decades of market experience while developing stronger supply relationships and more responsive sourcing processes. Our direction remains clear: to be a dependable polymer sourcing and supply partner for Indian industry.
                  </p>
                  
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-brand-interactive font-heading font-bold text-xs uppercase tracking-widest mb-4">
                      Two Decades of Experience. One Commitment to Reliable Supply.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold font-heading rounded bg-brand-blue hover:bg-brand-blue-light text-white transition-colors duration-200"
                    >
                      Contact Our Sourcing Team
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
