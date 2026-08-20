'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';

export default function RFQSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    address: '',
    designation: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ScrollPop>
    <section className="py-24 lg:py-16 bg-lightgrey-light border-t border-b border-gray-200 snap-align-start" id="rfq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <SectionHeader
          tag="Bulk Quotes & Sales"
          title="Request a Wholesale Price Quote"
          description="Our specialized sourcing team will review your requirements and respond with a bulk price quote within 24 business hours."
          lightBg={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mt-8">

          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Block */}
            <div className="bg-white border border-gray-200 p-8 rounded-sm space-y-6 shadow-sm h-full">
              <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-200 pb-3">
                New Delhi Corporate Office
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-500 font-sans">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Corporate Address</span>
                    <p className="leading-relaxed">302, Crown Heights, Hotel Crown Plaza, Sector-10, Rohini, New Delhi - 110 085 (INDIA)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Contact</span>
                    <p className="leading-relaxed">+91 98998 53399 (GSM) | +91 11 27055302 (TF)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Electronic Mail</span>
                    <p className="leading-relaxed">
                      <a href="mailto:office@royaleind.in" className="text-brand-blue hover:underline">office@royaleind.in</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5 border-t border-gray-200 pt-4 mt-4">
                  <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Business Hours</span>
                    <p className="leading-relaxed">Monday - Saturday: 09:30 AM - 06:30 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>



          </div>

          {/* Right: RFQ Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-200 pb-3 flex items-center justify-between">
              <span>Enterprise RFQ Form</span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase">fields marked with * are required</span>
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto border border-brand-blue/10 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-extrabold text-xl text-charcoal tracking-tight">Inquiry Received Successfully</h4>
                <p className="text-gray-500 text-sm max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for submitting your Request for Quote (RFQ). Our polymer sourcing team has received your details and will contact you with a wholesale quote within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center space-x-1 bg-charcoal hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors mt-2"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-6 font-sans text-xs sm:text-sm">
                
                {/* Row 1: Name of Employee & Name of Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-bold text-charcoal">Name of Employee *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-300 p-3 rounded-sm focus:border-brand-blue focus:outline-none bg-gray-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block font-bold text-charcoal">Name of Company *</label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g. Acme Plastics Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border border-gray-300 p-3 rounded-sm focus:border-brand-blue focus:outline-none bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Row 2: Designation & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="designation" className="block font-bold text-charcoal">Designation</label>
                    <input
                      type="text"
                      id="designation"
                      placeholder="e.g. Procurement Manager"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full border border-gray-300 p-3 rounded-sm focus:border-brand-blue focus:outline-none bg-gray-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-bold text-charcoal">Phone No. *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 p-3 rounded-sm focus:border-brand-blue focus:outline-none bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Row 3: Address */}
                <div className="space-y-1.5">
                  <label htmlFor="address" className="block font-bold text-charcoal">Address *</label>
                  <textarea
                    id="address"
                    rows={3}
                    required
                    placeholder="e.g. Plot 12, Sector 8, Noida, Uttar Pradesh"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full border border-gray-300 p-3 rounded-sm focus:border-brand-blue focus:outline-none bg-gray-50/50 resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 rounded-sm transition-colors duration-200 shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Bulk RFQ</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
    </ScrollPop>
  );
}
