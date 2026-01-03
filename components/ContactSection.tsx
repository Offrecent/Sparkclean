
import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, ICONS } from '../constants';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6">Get A Free Quote</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed">
              Ready to experience a cleaner space? Fill out the form or reach out directly via phone or email.
            </p>
            
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300 flex-shrink-0">
                  <ICONS.Phone />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">Call Us Today</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900">{PHONE_NUMBER}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300 flex-shrink-0">
                  <ICONS.Mail />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 break-all">{EMAIL_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mt-8 lg:mt-0">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-green-50 rounded-2xl border border-green-100 min-h-[400px]">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                  <ICONS.Check />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We'll get back to you with a quote very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Tell us about your cleaning needs..." 
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3.5 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 active:scale-[0.98] text-base sm:text-lg"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
