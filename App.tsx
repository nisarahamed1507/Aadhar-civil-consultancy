
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;