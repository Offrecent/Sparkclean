
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import ContactSection from './components/ContactSection';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import QuoteAI from './components/QuoteAI';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <ContactSection />
        <GoogleMap />
      </main>
      <Footer />
      {/* AI Assistant for Quote Estimation */}
      <QuoteAI />
    </div>
  );
};

export default App;
