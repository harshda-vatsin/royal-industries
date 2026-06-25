'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, FileUp } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function RFQSection() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    email: '',
    phone: '',
    polymerCategory: 'pvc-granules',
    volume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-lightgrey-light border-t border-b border-gray-200" id="rfq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Bulk Quotes & Sales"
          title="Request a Wholesale Price Quote"
          description="Our specialized sourcing team will review your raw material specifications and respond with a bulk price quote within 24 business hours."
          lightBg={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left: Contact Info & Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Block */}
            <div className="bg-white border border-gray-200 p-8 rounded-sm space-y-6 shadow-sm">
              <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-200 pb-3">
                Delhi Sourcing & Warehousing
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-500 font-sans">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Corporate Address</span>
                    <p className="leading-relaxed">Delhi, Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Telephone Coordinates</span>
                    <p className="leading-relaxed">+91-11-46200000 | +91-11-46200001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Electronic Mail</span>
                    <p className="leading-relaxed">
                      Sales: <a href="mailto:sales@indiaroyale.com" className="text-brand-red hover:underline">sales@indiaroyale.com</a> <br />
                      General: <a href="mailto:info@indiaroyale.com" className="text-brand-red hover:underline">info@indiaroyale.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5 border-t border-gray-200 pt-4 mt-4">
                  <Clock className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-charcoal mb-0.5">Business Hours</span>
                    <p className="leading-relaxed">Monday - Saturday: 09:30 AM - 06:30 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-72 bg-white border border-gray-200 rounded-sm overflow-hidden relative group shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-brand-red mb-2 group-hover:bounce transition-all duration-300" />
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal">India Royale Industries</span>
                <span className="text-xs text-gray-400 mt-1">Delhi, Delhi, India</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center space-x-1.5 bg-charcoal hover:bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm transition-colors"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: RFQ Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-200 pb-3 flex items-center justify-between">
              <span>Enterprise RFQ Form</span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase">fields marked with * are required</span>
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto border border-brand-red/10 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-extrabold text-xl text-charcoal tracking-tight">Inquiry Received Successfully</h4>
                <p className="text-gray-500 text-sm max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for submitting your Request for Quote (RFQ). Our team has received your raw material requirements and will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center space-x-1 bg-charcoal hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors mt-2"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-6 font-sans text-xs sm:text-sm">
                
                {/* Row 1: Name & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-bold text-charcoal">Contact Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="designation" className="block font-bold text-charcoal">Designation / Role *</label>
                    <input
                      type="text"
                      id="designation"
                      required
                      placeholder="e.g. Procurement Manager"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block font-bold text-charcoal">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="e.g. Noida Cable Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-bold text-charcoal">Corporate Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john.doe@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                {/* Row 3: Phone & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-bold text-charcoal">Telephone / Mobile *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91-XXXXX-XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="polymerCategory" className="block font-bold text-charcoal">Material Category *</label>
                    <select
                      id="polymerCategory"
                      value={formData.polymerCategory}
                      onChange={(e) => setFormData({ ...formData, polymerCategory: e.target.value })}
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red cursor-pointer"
                    >
                      <option value="pvc-granules">PVC Granules</option>
                      <option value="pe-granules">PE Granules (LDPE/LLDPE/HDPE)</option>
                      <option value="eva-granules">EVA Granules</option>
                      <option value="other">Other plastic raw materials</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Volume */}
                <div className="space-y-1.5">
                  <label htmlFor="volume" className="block font-bold text-charcoal">Estimated Bulk Volume Requirement (Metric Tons) *</label>
                  <input
                    type="text"
                    id="volume"
                    required
                    placeholder="e.g. 20 MT"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red"
                  />
                </div>

                {/* Row 5: Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block font-bold text-charcoal">Detailed Technical Specifications / Application Requirements *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Please state your required Melt Flow Index (MFI) ranges, density ranges, K-values (for PVC), or VA percentage (for EVA), and your final application description."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-charcoal focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="border border-dashed border-gray-200 p-4 rounded-sm bg-gray-50 flex items-center justify-between cursor-pointer hover:border-brand-red transition-all">
                  <div className="flex items-center space-x-2.5">
                    <FileUp className="w-5 h-5 text-brand-red" />
                    <div>
                      <span className="block font-bold text-charcoal text-xs">Upload Technical Drawings or Specifications</span>
                      <span className="block text-[10px] text-gray-400">PDF, JPG, PNG up to 10MB</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 border border-gray-200 bg-white px-2 py-1 rounded-sm">Select File</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 rounded-sm transition-colors duration-200 shadow-md flex items-center justify-center space-x-2"
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
  );
}
