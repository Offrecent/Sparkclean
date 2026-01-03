
import React from 'react';

const GoogleMap: React.FC = () => {
  // Random Dallas cleaning business area iframe embed
  return (
    <section className="h-[400px] w-full bg-slate-200 overflow-hidden">
      <iframe
        title="Dallas Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107248.810577908!2d-96.8839075!3d32.8205865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9dc9ba930421070!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1715638219000!5m2!1sen!2sus"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
