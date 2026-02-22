import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage: React.FC = () => {
    return (
        <>
            <SEO
                title="About Us – Our Vision, Mission & Team"
                description="Learn about Aadhar Civil Consultancy Services Pvt. Ltd. – our vision to be a trusted civil engineering consultancy, our mission to deliver reliable engineering solutions, and the expert team behind every project."
                canonicalPath="/about"
                keywords="about Aadhar Civil Consultancy, civil engineering company Raipur, vision mission values, engineering experts Chhattisgarh"
            />
            <About />
        </>
    );
};

export default AboutPage;
