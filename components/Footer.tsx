
import React from 'react';
import { BUSINESS_NAME, PHONE_NUMBER, EMAIL_ADDRESS, ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <ICONS.Sparkles />
              <span className="text-xl font-bold text-slate-900">{BUSINESS_NAME}</span>
            </div>
            <p className="text-slate-600 max-w-xs mx-auto sm:mx-0">
              Professional cleaning services for a healthier, happier environment.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">{PHONE_NUMBER}</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer break-all">{EMAIL_ADDRESS}</li>
              <li>Dallas, Texas</li>
            </ul>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-slate-600 hover:text-blue-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Get Quote</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-xs sm:text-sm font-medium mb-6 inline-block max-w-2xl">
            ⚠️ This website is a sample demo created to showcase a possible online presence for a cleaning business.
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
