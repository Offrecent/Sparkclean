
import React from 'react';
import { ICONS } from '../constants';

const points = [
  "Experienced & trained cleaners",
  "Fast response & flexible scheduling",
  "Eco-friendly products",
  "100% customer satisfaction focus"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800" 
              alt="Professional cleaning equipment and staff environment" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why Choose Us</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At SparkClean Services, we treat your space as if it were our own. Our team is committed to excellence, safety, and reliability.
            </p>
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <ICONS.Check />
                  </div>
                  <span className="text-slate-800 font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
