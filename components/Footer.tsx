
import React from 'react';
import { BUSINESS_NAME, PHONE_NUMBER, EMAIL_ADDRESS, ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ICONS.Sparkles />
              <span className="text-xl font-bold text-slate-900">{BUSINESS_NAME}</span>
            </div>
            <p className="text-slate-600">
              Professional cleaning services for a healthier, happier environment.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-600">
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL_ADDRESS}</li>
              <li>Dallas, Texas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-600 hover:text-blue-600">Services</a></li>
              <li><a href="#why-us" className="text-slate-600 hover:text-blue-600">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-blue-600">Get Quote</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-sm font-medium mb-6 inline-block">
            ⚠️ This website is a sample demo created to showcase a possible online presence for a cleaning business.
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
