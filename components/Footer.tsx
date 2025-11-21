
import React from 'react';
import { COMPANY_INFO } from '../constants';
import Logo from './icons/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="h-12 w-auto" light />
              <span className="text-xl font-bold text-white">AADHAR</span>
            </div>
            <p className="text-sm text-gray-400">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <div className="space-y-1">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="block hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="block hover:text-white transition-colors">{COMPANY_INFO.phone2}</a>
                  <a href={`tel:${COMPANY_INFO.phone3}`} className="block hover:text-white transition-colors">{COMPANY_INFO.phone3}</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><strong>CIN:</strong> {COMPANY_INFO.cin}</li>
              <li><strong>GSTIN:</strong> {COMPANY_INFO.gst}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
