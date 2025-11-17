
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
      <service.icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
    <p className="text-gray-600 text-sm">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Expertise</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of services to meet the diverse needs of modern construction and infrastructure projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
