import React from 'react';
import SEO from '../components/SEO';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Our Services – Civil Engineering & Testing"
                description="Explore the full range of civil engineering services offered by Aadhar Civil Consultancy: geotechnical investigation, NDT, construction material testing, structural engineering, highway engineering, surveying, DPR & estimations, project management, and quality assurance."
                canonicalPath="/services"
                keywords="civil engineering services, geotechnical investigation, NDT testing, construction material testing, structural engineering, highway engineering, surveying, DPR, quality assurance, Raipur"
            />
            <Services />
        </>
    );
};

export default ServicesPage;
