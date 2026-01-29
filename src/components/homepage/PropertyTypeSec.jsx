'use client';

import { useState } from 'react';
import { Home, Building2, Factory, Trees, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// interface PropertyType {
//   id: string;
//   name: string;
//   count: string;
//   icon: React.ReactNode;
//   description: string;
//   image: string;
//   experience: string;
//   features: string[];
// }

const propertyTypes = [
  {
    id: 'residential',
    name: 'Residential',
    count: '467+',
    icon: <Home className="w-5 h-5" />,
    description: 'Premium apartments, villas, and independent houses in prime locations',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    experience: '15+',
    features: ['Gated Communities', 'Modern Amenities', 'Prime Locations', 'Legal Verified']
  },
  {
    id: 'commercial',
    name: 'Commercial',
    count: '285+',
    icon: <Building2 className="w-5 h-5" />,
    description: 'Modern office spaces and retail establishments for your business needs',
    image: 'https://images.pexels.com/photos/3881109/pexels-photo-3881109.jpeg?auto=compress&cs=tinysrgb&w=1600',
    experience: '12+',
    features: ['Strategic Locations', 'High ROI', 'Professional Setup', 'Verified Ownership']
  },
  {
    id: 'industrial',
    name: 'Industrial',
    count: '246+',
    icon: <Factory className="w-5 h-5" />,
    description: 'Warehouses and industrial plots with modern infrastructure',
    image: 'https://images.pexels.com/photos/3584965/pexels-photo-3584965.jpeg?auto=compress&cs=tinysrgb&w=1600',
    experience: '10+',
    features: ['Heavy Duty Infrastructure', 'Logistics Ready', 'Spacious Layout', 'Legal Compliance']
  },
  {
    id: 'plots',
    name: 'Plots & Land',
    count: '150+',
    icon: <Trees className="w-5 h-5" />,
    description: 'Strategic land parcels for development and investment opportunities',
    image: 'https://images.pexels.com/photos/2559592/pexels-photo-2559592.jpeg?auto=compress&cs=tinysrgb&w=1600',
    experience: '18+',
    features: ['Clear Titles', 'Prime Locations', 'Development Ready', 'Growth Potential']
  }
];

export default function PropertyTypesSection() {
  const [selectedType, setSelectedType] = useState('residential');
  const selected = propertyTypes.find(type => type.id === selectedType);

  return (
    <section className="w-full bg-white px-4 md:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-slate-900">Discover the Pinnacle of Property</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">in Every Segment</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Experience the best-in-class properties, where every detail is meticulously crafted to exceed your expectations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-20">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-full transition-all duration-300 font-semibold text-sm md:text-base ${
                selectedType === type.id
                  ? 'bg-purple-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 border-2 border-gray-300'
              }`}
            >
              <span className={selectedType === type.id ? 'text-white' : 'text-gray-600'}>
                {type.icon}
              </span>
              <span>{type.name}</span>
              <span className={`text-sm font-bold ${selectedType === type.id ? 'text-purple-200' : 'text-purple-600'}`}>
                {type.count}
              </span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="relative w-full h-72 md:h-full min-h-80 rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 md:bottom-8 inset-x-5 md:inset-x-8 flex justify-between items-center gap-3 md:gap-4">
                <div className="bg-white rounded-2xl px-5 md:px-7 py-4 md:py-5 shadow-xl">
                  <p className="text-2xl md:text-3xl font-bold text-purple-600">{selected.count}</p>
                  <p className="text-xs md:text-sm text-gray-700 font-medium">Properties Available</p>
                </div>
                <div className="bg-purple-600 rounded-2xl px-5 md:px-7 py-4 md:py-5 shadow-xl text-white">
                  <p className="text-2xl md:text-3xl font-bold">{selected.experience}</p>
                  <p className="text-xs md:text-sm font-medium">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start pt-4 md:pt-0">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  {selected.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">{selected.name} Properties</h3>
                  <p className="text-sm md:text-base text-purple-600 font-semibold">{selected.count} Available</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                {selected.description}
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-5 mb-8 md:mb-10">
                {selected.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm md:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
                <Link href="/properties">
              <button className="w-full cursor-pointer mt-20 md:w-auto inline-flex items-center justify-center gap-4 bg-purple-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-purple-700 hover:shadow-lg transition-all duration-300">
                Explore {selected.name} Properties
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
