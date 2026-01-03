
import React from 'react';
import { SERVICE_AREAS, ICONS } from '../constants';

const ServiceArea: React.FC = () => {
  return (
    <section id="area" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <ICONS.MapPin />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Service Area</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          We proudly serve Dallas and surrounding areas, providing quality cleaning services you can rely on.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SERVICE_AREAS.map((area, idx) => (
            <div key={idx} className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-blue-600 transition duration-300">
              <span className="text-xl font-bold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
