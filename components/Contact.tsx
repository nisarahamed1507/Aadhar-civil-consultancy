
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are here to help you with your next project. Contact us today to discuss your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.No.+3316-W61-Z6,+Ratwat+pura+colony+phase-1,+Raipur,+Chhattisgarh,+India+492013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <Mail className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <div className="space-y-1">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="block text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone2}`}
                      className="block text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {COMPANY_INFO.phone2}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone3}`}
                      className="block text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {COMPANY_INFO.phone3}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white p-4 rounded-lg shadow-md h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54862266356!2d81.5625499!3d21.2513844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23c8d0659%3A0x49f4f3d0c800018d!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1732218000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
