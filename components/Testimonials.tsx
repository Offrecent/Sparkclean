
import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Plano",
    quote: "SparkClean has been a lifesaver for our busy family. Their attention to detail in the kitchen and bathrooms is unmatched. I've tried other services in Dallas, but nothing beats that 'sparkle' they leave behind.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    quote: "We use SparkClean for all our move-out cleanings across our Irving properties. They are incredibly reliable, professional, and they consistently help us get our units back on the market faster.",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    role: "Tech Office Manager",
    quote: "Maintaining a clean office is vital for our team's morale. SparkClean handles our daily maintenance with such discretion and efficiency. Our workspace has never looked more professional.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Residential Client",
    quote: "I scheduled a deep clean before hosting a large event. The team was punctual, thorough, and used eco-friendly products that didn't leave any harsh chemical smells. Highly recommend their deep cleaning package!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. We take pride in the relationships we've built with families and businesses across Dallas.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017C12.4647 13 12.017 12.5523 12.017 12V9C12.017 6.79086 13.8079 5 16.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 6.79086 0.773858 5 3.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 text-lg italic leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 font-medium hover:text-blue-600 hover:border-blue-200 transition-all cursor-default">
            <span className="flex items-center gap-1 text-blue-600 font-bold">4.9/5</span>
            Average rating based on 200+ local reviews
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
