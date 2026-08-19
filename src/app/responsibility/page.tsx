import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import ScrollPop from '@/components/ScrollPop';
import ContactCTA from '@/components/ContactCTA';
import { 
  HeartHandshake, 
  Sprout, 
  ShieldCheck, 
  Recycle,
  Factory,
  Droplet,
  Users,
  Activity,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
import Link from 'next/link';

const TESTIMONIALS = [
  {
    company: 'Apex Auto Components',
    industry: 'Automotive',
    feedback: 'Royale has been our trusted polymer supplier for over a decade. Their commitment to grade consistency is unmatched.'
  },
  {
    company: 'CareMed Plastics',
    industry: 'Healthcare',
    feedback: 'When we needed certified medical-grade polymers during a crunch, Royale delivered on time with perfect documentation.'
  },
  {
    company: 'Prime Packaging Solutions',
    industry: 'Packaging',
    feedback: 'Their understanding of the polymer trade and direct communication makes procurement entirely stress-free for our team.'
  }
];

const CSR_PARTNERS = [
  'Aggarwal Sabha Trust',
  'LIONS BLOOD BANK, Shalimar Marg'
];

export default function ResponsibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <SubpageHero
        title="Responsibility & Impact"
        subtitle="Building a sustainable future through responsible manufacturing, community development, and long-term customer partnerships."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Responsibility & Impact', href: '/responsibility' }
        ]}
      />

      <main className="flex-grow">

        {/* Introduction Section: Our Approach to Impact */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-r-2 border-brand-blue px-4">
                  Corporate Philosophy
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                  Driving Industrial Growth with Integrity
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-base sm:text-lg">
                  At Royale, our definition of success extends beyond business metrics and supply volumes. We believe that true industry leadership is defined by the positive impact we create for our people, our partners, and the communities we operate in.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed text-base sm:text-lg">
                  For over two decades, our approach has been rooted in a deep sense of responsibility. Whether it's ensuring ethical sourcing, maintaining a safe workplace, or actively investing in social welfare, we are committed to building a legacy of trust and sustainable progress.
                </p>
              </div>
            </ScrollPop>
          </div>
        </section>
        
        {/* Section 1: Community Initiatives */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Illustration Placeholder */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-soft-bg flex items-center justify-center border border-gray-100 shadow-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_70%)]" />
                  <HeartHandshake className="w-32 h-32 text-brand-blue-light/40" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-white">
                    <p className="text-sm font-bold text-brand-blue text-center">Community Development Initiatives</p>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                    Giving Back to Society
                  </span>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                    Aggarwal Sabha Trust
                  </h2>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    At Royale, we believe that true industrial growth must be accompanied by social responsibility. Through our CSR initiatives with the <strong>Aggarwal Sabha Trust</strong> and <strong>Lions Blood Bank, Shalimar Marg</strong>, we actively contribute to the welfare of local communities.
                  </p>
                  <ul className="space-y-4 pt-2">
                    {[
                      'Education and social development for underprivileged children.',
                      'Healthcare initiatives providing medical support to vulnerable groups.',
                      'Long-term commitment to community infrastructure and welfare.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="mt-1 bg-brand-green/10 p-1 rounded-full text-brand-green">
                          <HeartHandshake className="w-4 h-4" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                      Our CSR Partners & Beneficiaries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CSR_PARTNERS.map((partner, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 text-xs font-semibold text-charcoal rounded-full shadow-sm"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/contact" className="inline-flex items-center space-x-2 text-brand-blue font-bold text-sm uppercase tracking-wider hover:text-brand-blue-light transition-colors group">
                      <span>Learn More About Our CSR</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollPop>
          </div>
        </section>

        {/* Section 2: Sustainability */}
        <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green border-l-2 border-brand-green pl-2.5">
                  Environmental Focus
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                  Sustainability & Environmental Responsibility
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                  Highlighting Royale's commitment to sustainable manufacturing and resource management.
                </p>
              </div>
            </ScrollPop>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Factory, title: 'Sustainable Manufacturing', desc: 'Promoting energy-efficient practices and reduced emissions in production.' },
                { icon: Sprout, title: 'Responsible Resources', desc: 'Optimizing polymer raw material usage to minimize industrial footprint.' },
                { icon: ShieldCheck, title: 'Safe Chemical Handling', desc: 'Ensuring rigorous safety protocols in the storage and transport of polymers.' },
                { icon: Recycle, title: 'Waste Reduction', desc: 'Advocating for circular economy principles and efficient process management.' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-green/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-lg flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* COVID-19 Highlight */}
            <div className="bg-[#14212B] rounded-2xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-[url('/images/blue_textured_bg.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-interactive/20 rounded-full blur-3xl" />
              <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    <Activity className="w-10 h-10 text-brand-interactive" />
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-4 text-center lg:text-left">
                  <div className="inline-block bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-light px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    Aggarwal Sabha Trust (Since 1982)
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">COVID-19 Response & Community Impact</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Driven by our long-standing commitment to social welfare through the Aggarwal Sabha Trust, we rapidly responded to the global pandemic. We ensured the free distribution of masks by setting up an in-house manufacturing line. To meet urgent demand, critical machinery was airlifted directly from China, enabling us to commence full-scale production in just 15 days to protect our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Customer Success */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue border-l-2 border-brand-blue pl-2.5">
                  Proven Value
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                  Customer Satisfaction
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                  Real-world feedback on how Royale drives manufacturing success for our customers.
                </p>
              </div>
            </ScrollPop>

            <h3 className="font-heading font-bold text-2xl text-charcoal mb-8 border-b border-gray-100 pb-4">Client Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="bg-brand-blue text-white rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Award className="w-24 h-24" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed italic border-l-2 border-brand-interactive pl-4">
                      "{testimonial.feedback}"
                    </p>
                    <div className="pt-4">
                      <p className="text-xs text-brand-interactive">{testimonial.company} • {testimonial.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Our Commitments */}
        <section className="py-24 bg-[#E1EDFA]/30 border-t border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <ScrollPop>
              <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                  Our Commitments
                </h2>
              </div>
            </ScrollPop>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quality Assurance', desc: 'Supplying certified, batch-tested polymers from trusted global producers.' },
                { title: 'Ethical Business', desc: 'Maintaining transparency, integrity, and fair practices in every transaction.' },
                { title: 'Sustainable Growth', desc: 'Focusing on environmentally conscious strategies and resource efficiency.' },
                { title: 'Long-Term Partnerships', desc: 'Building relationships based on reliability rather than mere transactions.' },
                { title: 'Timely Delivery', desc: 'Coordinating logistics to meet delivery windows customers can depend on.' },
                { title: 'Best Price', desc: 'Delivering competitive wholesale pricing through direct sourcing relationships.' },
                { title: 'Technical Review', desc: 'Reviewing material documentation and grade specifications with every order.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 text-center space-y-4 border border-[#C4DBF5] shadow-sm hover:border-brand-blue hover:shadow-md transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto bg-brand-blue/5 rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                    <ShieldCheck className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
}
