
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are here to help you with your next project. Contact us today to discuss your requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-600">{COMPANY_INFO.address}</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">{COMPANY_INFO.email}</a>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:underline">{COMPANY_INFO.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
