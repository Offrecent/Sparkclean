
import React, { useState } from 'react';
import { BUSINESS_NAME, ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <ICONS.Sparkles />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {BUSINESS_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</a>
            <a href="#why-us" className="text-slate-600 hover:text-blue-600 font-medium transition">Why Choose Us</a>
            <a href="#area" className="text-slate-600 hover:text-blue-600 font-medium transition">Service Area</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Services</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Why Choose Us</a>
            <a href="#area" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Service Area</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
