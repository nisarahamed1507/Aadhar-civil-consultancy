import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Values from '../components/Values';
import Team from '../components/Team';
import Brochure from '../components/Brochure';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Civil Engineering Consultancy in Raipur"
                description="Aadhar Civil Consultancy Services Pvt. Ltd. – Expert civil engineering consultancy in Raipur, Chhattisgarh. Services include geotechnical investigation, NDT, structural engineering, highway design, and quality assurance."
                canonicalPath="/"
                keywords="civil engineering consultancy Raipur, geotechnical investigation Chhattisgarh, NDT testing, construction material testing, structural engineering, highway engineering India"
            />
            <Hero />
            <About showVideo={true} />
            <Services />
            <Sectors />
            <Values />
            <Team />
            <Brochure />
            <Contact />
        </>
    );
};

export default Home;
