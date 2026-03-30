import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3')" }}
    >
      <div className="absolute inset-0 bg-[#263646]/78"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,102,48,0.25),transparent_28%)]"></div>
      <div className="relative z-10 mx-4 w-full max-w-5xl px-6 py-14 text-center text-white">
        <div className="brand-panel-dark rounded-[2rem] px-6 py-12 md:px-12 md:py-16">
        <p className="section-kicker mb-5 text-sm font-semibold">Civil Engineering Consultancy</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 animate-fade-in-down">
          {COMPANY_INFO.name}
        </h1>
        <p className="mx-auto max-w-3xl text-lg md:text-2xl font-light text-white/80 mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {COMPANY_INFO.tagline}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="#services"
            onClick={handleScrollClick}
            className="brand-button rounded-full px-8 py-3 font-bold transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            onClick={handleScrollClick}
            className="brand-button-secondary rounded-full px-8 py-3 font-bold transition-all duration-300"
          >
            Talk To Our Team
          </a>
        </div>
        </div>
      </div>
      {/* FIX: The 'jsx' prop is not a valid attribute for the style tag in standard React, causing a type error. Removing it resolves the issue. */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
