
import React from 'react';
import { COMPANY_INFO } from '../constants';
import Logo from './icons/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-white/95 px-3 py-2 shadow-sm ring-1 ring-white/20">
                <Logo className="h-12 w-auto" light />
              </div>
              <span className="text-xl font-bold tracking-[0.18em] text-white">AADHAR</span>
            </div>
            <p className="body-copy-light text-sm">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0 text-[#EC6630]" />
                <span className="body-copy-light">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0 text-[#EC6630]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="body-copy-light transition-colors hover:text-white">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 flex-shrink-0 text-[#EC6630]" />
                <div className="space-y-1">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="body-copy-light block transition-colors hover:text-white">{COMPANY_INFO.phone}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="body-copy-light block transition-colors hover:text-white">{COMPANY_INFO.phone2}</a>
                  <a href={`tel:${COMPANY_INFO.phone3}`} className="body-copy-light block transition-colors hover:text-white">{COMPANY_INFO.phone3}</a>
                  <a href={`tel:${COMPANY_INFO.phone4}`} className="body-copy-light block transition-colors hover:text-white">{COMPANY_INFO.phone4}</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal Information</h3>
            <ul className="body-copy-light space-y-2 text-sm">
              <li><strong>CIN:</strong> {COMPANY_INFO.cin}</li>
              <li><strong>GSTIN:</strong> {COMPANY_INFO.gst}</li>
            </ul>
          </div>
        </div>

        <div className="body-copy-light mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
