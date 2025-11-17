
import React from 'react';
import { SECTORS } from '../constants';
import type { Sector } from '../types';

const SectorCard: React.FC<{ sector: Sector }> = ({ sector }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
      <sector.icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{sector.title}</h3>
  </div>
);

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sectors We Serve</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across various sectors, delivering tailored solutions for diverse project needs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {SECTORS.map((sector) => (
            <SectorCard key={sector.title} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
