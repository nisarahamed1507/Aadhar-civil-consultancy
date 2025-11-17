
import React from 'react';
import { VALUES } from '../constants';
import type { Value } from '../types';

const ValueCard: React.FC<{ value: Value }> = ({ value }) => (
  <div className="text-center p-4">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg mx-auto mb-4">
      <value.icon className="h-10 w-10 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
    <p className="mt-2 text-gray-600">{value.description}</p>
  </div>
);

const Values: React.FC = () => {
  return (
    <section id="values" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
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
