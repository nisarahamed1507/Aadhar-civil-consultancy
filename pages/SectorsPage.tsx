import React from 'react';
import SEO from '../components/SEO';
import Sectors from '../components/Sectors';

const SectorsPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Sectors We Serve – Residential, Commercial & More"
                description="Aadhar Civil Consultancy provides expert civil engineering services across residential, commercial, industrial, infrastructure, and government project sectors in Chhattisgarh, India."
                canonicalPath="/sectors"
                keywords="civil engineering sectors, residential engineering, commercial construction, industrial projects, infrastructure development, government projects, Chhattisgarh"
            />
            <Sectors />
        </>
    );
};

export default SectorsPage;
