import React from 'react';
import SEO from '../components/SEO';
import Values from '../components/Values';

const ValuesPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Our Core Values – Trust, Precision & Quality"
                description="Discover the core values that drive Aadhar Civil Consultancy: Trust, Precision, Quality, Professionalism, Innovation, and Ethical Engineering. Our principles ensure every project meets the highest standards."
                canonicalPath="/values"
                keywords="civil engineering values, trust precision quality, ethical engineering, professional consultancy, innovation in civil engineering"
            />
            <Values />
        </>
    );
};

export default ValuesPage;
