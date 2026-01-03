
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from '@google/genai';

// --- CONSTANTS & TYPES ---
const BUSINESS_NAME = "SparkClean Services";
const PHONE_NUMBER = "(214) 555-0123";
const EMAIL_ADDRESS = "info@sparkcleanservices.com";
const SERVICE_AREAS = ["Dallas", "Irving", "Plano", "Garland"];

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const ICONS = {
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
  ),
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <ICONS.Sparkles />
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {BUSINESS_NAME}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</a>
            <a href="#why-us" className="text-slate-600 hover:text-blue-600 font-medium transition">Why Choose Us</a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium transition">Reviews</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">Get Quote</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block font-medium">Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="block font-medium">Why Us</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block font-medium">Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold">Get Quote</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Top Rated in Dallas, TX
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Professional Home & Office Cleaning in <span className="text-blue-600">Dallas, TX</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            Reliable, affordable, and trusted cleaning services for homes and businesses. We make your space sparkle so you can focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200">Call Now</a>
            <a href="#contact" className="px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition">Get a Free Quote</a>
          </div>
        </div>
        <div className="hidden lg:block relative group">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Home Interior" className="rounded-2xl shadow-2xl h-[550px] object-cover w-full" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Residential", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" },
          { title: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
          { title: "Move-In/Out", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600" },
          { title: "Deep Clean", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600" },
          { title: "Post-Construction", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600" }
        ].map((s, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition">
            <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-6 text-center font-bold text-lg text-slate-800">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">What Our Clients Say</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { name: "Sarah Jenkins", role: "Homeowner", quote: "SparkClean has been a lifesaver for our busy family. Their attention to detail is unmatched." },
          { name: "Michael Chen", role: "Manager", quote: "Consistent, professional, and reliable. They handle our office cleaning perfectly every week." }
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 italic text-slate-700">
            "{t.quote}"
            <div className="mt-6 flex items-center gap-4 not-italic">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{t.name[0]}</div>
              <div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-3xl font-extrabold text-center mb-8">Get a Free Quote</h2>
          {sent ? (
            <div className="text-center py-12"><div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><ICONS.Check /></div><h3 className="text-xl font-bold">Message Sent!</h3><p>We'll call you shortly.</p></div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
              <input required type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition" />
              <input required type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition" />
              <textarea required rows={4} placeholder="How can we help?" className="w-full px-5 py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition"></textarea>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">Send Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const QuoteAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'model', text: "Hi! I'm Sparky. Need a quick cleaning quote estimate?" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: msg }] }],
        config: { systemInstruction: "You are Sparky for SparkClean Services in Dallas. Estimate: $120-$250 home, $300-$500 deep. Be helpful and professional." }
      });
      setMessages(prev => [...prev, { role: 'model', text: res.text || "Contact us at (214) 555-0123 for details!" }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: "I'm offline. Call us at (214) 555-0123!" }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-[calc(100vw-2rem)] sm:w-96 flex flex-col overflow-hidden animate-in zoom-in duration-300">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center font-bold">
            <div className="flex items-center gap-2"><ICONS.Sparkles /> Sparky</div>
            <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border rounded-tl-none shadow-sm'}`}>{m.text}</div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Type message..." className="flex-grow px-4 py-2 bg-slate-100 rounded-xl outline-none" />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-xl">➤</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 font-bold hover:scale-105 transition">
          <ICONS.Sparkles /> Ask Sparky
        </button>
      )}
    </div>
  );
};

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-xl" />
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why Choose Us</h2>
          <div className="space-y-4">
            {["Experienced Cleaners", "Fast Scheduling", "Eco-friendly Products", "100% Satisfaction"].map((p, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="bg-blue-600 text-white rounded-full p-1"><ICONS.Check /></div>
                <span className="font-bold">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    <ContactSection />
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 text-white font-bold text-2xl">
          <ICONS.Sparkles /> {BUSINESS_NAME}
        </div>
        <p className="mb-8">Serving Dallas, Irving, Plano, and Garland.</p>
        <p className="text-sm border-t border-slate-800 pt-8">&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
      </div>
    </footer>
    <QuoteAI />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
