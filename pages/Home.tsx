import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Values from '../components/Values';
import Brochure from '../components/Brochure';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About showVideo={true} />
            <Services />
            <Sectors />
            <Values />
            <Brochure />
            <Contact />
        </>
    );
};

export default Home;
