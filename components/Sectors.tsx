
import React from 'react';
import { SECTORS } from '../constants';
import type { Sector } from '../types';

const SectorCard: React.FC<{ sector: Sector }> = ({ sector }) => (
  <div className="brand-card rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center h-full">
    <div className="brand-icon-chip mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full">
      <sector.icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-semibold text-[#263646]">{sector.title}</h3>
  </div>
);

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="section-surface py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-kicker mb-3 text-sm font-semibold">Sectors</p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold">Sectors We Serve</h2>
          <div className="brand-divider mx-auto mt-4"></div>
          <p className="body-copy mt-4 text-lg max-w-3xl mx-auto">
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
