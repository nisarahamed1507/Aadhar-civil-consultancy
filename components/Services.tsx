
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="brand-card rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
    <div className="brand-icon-chip mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full">
      <service.icon className="h-8 w-8" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-[#263646]">{service.title}</h3>
    <p className="body-copy text-sm">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="section-muted py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-kicker mb-3 text-sm font-semibold">Services</p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <div className="brand-divider mx-auto mt-4"></div>
          <p className="body-copy mt-4 text-lg max-w-3xl mx-auto">
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
