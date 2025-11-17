import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/civil-eng/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-down">
          {COMPANY_INFO.name}
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {COMPANY_INFO.tagline}
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
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