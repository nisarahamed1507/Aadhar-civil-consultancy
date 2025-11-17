
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Engineering a Foundation of Trust
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Aadhar Civil Consultancy provides a one-stop solution for design, testing, supervision, and certification, built on expertise and scientific methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Eye size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">{COMPANY_INFO.vision}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  {COMPANY_INFO.mission.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/architecture/600/400" 
              alt="Engineering project" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
