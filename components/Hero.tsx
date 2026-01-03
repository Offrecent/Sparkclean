
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Top Rated in Dallas, TX
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-6">
              Professional Home & Office Cleaning in <span className="text-blue-600">Dallas, TX</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed px-2 lg:px-0">
              Reliable, affordable, and trusted cleaning services for homes and businesses. We make your space sparkle so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600 text-white font-bold text-base sm:text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 active:scale-95"
              >
                ✅ Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-base sm:text-lg hover:border-blue-600 hover:text-blue-600 transition active:scale-95"
              >
                ✅ Get a Free Quote
              </a>
            </div>
          </div>
          <div className="relative group hidden md:block mt-12 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              alt="Hyper-realistic modern home interior Dallas"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[550px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?u=10" className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
                  <img src="https://i.pravatar.cc/40?u=11" className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
                  <img src="https://i.pravatar.cc/40?u=12" className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
                </div>
                <span className="text-sm font-bold text-slate-800">500+ Happy Clients</span>
              </div>
              <p className="text-xs text-slate-500">Trusted by families and businesses across DFW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
