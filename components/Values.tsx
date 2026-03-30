
import React from 'react';
import { VALUES } from '../constants';
import type { Value } from '../types';

const ValueCard: React.FC<{ value: Value }> = ({ value }) => (
  <div className="brand-card-muted rounded-[1.75rem] p-6 text-center">
    <div className="brand-icon-chip mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
      <value.icon className="h-10 w-10 text-[#EC6630]" />
    </div>
    <h3 className="text-xl font-semibold text-[#263646]">{value.title}</h3>
    <p className="body-copy mt-2">{value.description}</p>
  </div>
);

const Values: React.FC = () => {
  return (
    <section id="values" className="section-muted py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3 text-sm font-semibold">Principles</p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <div className="brand-divider mx-auto mt-4"></div>
          <p className="body-copy mt-4 text-lg max-w-3xl mx-auto">
            The principles that guide our work, define our culture, and drive our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {VALUES.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
