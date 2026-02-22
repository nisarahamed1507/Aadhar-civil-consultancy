import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalPath?: string;
    keywords?: string;
    ogImage?: string;
}

const SITE_URL = 'https://www.aadharccspl.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpg`;
const SITE_NAME = 'Aadhar Civil Consultancy Services Pvt. Ltd.';

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonicalPath = '/',
    keywords = 'civil engineering, consultancy, geotechnical investigation, NDT, construction material testing, structural engineering, highway engineering, Raipur, Chhattisgarh, India',
    ogImage = DEFAULT_OG_IMAGE,
}) => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={SITE_NAME} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
