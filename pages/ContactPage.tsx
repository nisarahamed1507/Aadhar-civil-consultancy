import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Contact Us – Get In Touch"
                description="Contact Aadhar Civil Consultancy Services Pvt. Ltd. in Raipur, Chhattisgarh. Call us at +91 98066 60555, email aadharccspl@gmail.com, or fill in our contact form to discuss your project requirements."
                canonicalPath="/contact"
                keywords="contact civil engineering consultancy, Aadhar Civil Consultancy contact, Raipur engineering firm phone email, civil engineering enquiry"
            />
            <Contact />
        </>
    );
};

export default ContactPage;
