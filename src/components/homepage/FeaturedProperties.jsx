'use client';

import { MapPin, Bed, Bath, Ruler, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import propertiesData from '@/data/properties.json';

const getTypeColor = (type) => {
  const colors = {
    'residential': 'bg-blue-500',
    'commercial': 'bg-green-600',
    'industrial': 'bg-orange-600',
    'plot': 'bg-purple-500'
  };
  return colors[type?.toLowerCase()] || 'bg-gray-500';
};

export default function FeaturedPropertiesSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const router = useRouter();

  // Get all properties from JSON
  const allProperties = propertiesData.properties;

  const handlePropertyClick = (id) => {
    router.push(`/properties/${id}`);
  };

  const handleViewAllClick = () => {
    router.push('/properties');
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 md:mb-16">
          <div className="flex-1">
            <p className="text-purple-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              Featured Listings
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="block text-gray-900">Premium Properties</span>
              <span className="block text-purple-600 mt-1">For Sale & Lease</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4 max-w-md leading-relaxed">
              Handpicked properties that offer the best value and location advantages in premium regions
            </p>
          </div>

          <button 
            onClick={handleViewAllClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-7 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg whitespace-nowrap text-sm sm:text-base"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {allProperties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handlePropertyClick(property.id)}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Type Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`${getTypeColor(property.type)} text-white text-xs font-bold px-2.5 sm:px-3 py-1 rounded-lg capitalize`}>
                    {property.type}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-gray-900/90 text-white font-bold text-sm sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm">
                  {property.price}
                </div>

                {/* Favorite Button */}
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-md"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-red-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="bg-white p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-purple-600 transition-colors">
                  {property.title}
                </h3>

                <div className="flex items-start gap-1.5 mb-3 sm:mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-xs sm:text-sm">{property.location}</p>
                </div>

                {/* Property Details */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5 text-xs sm:text-sm text-gray-600 border-t border-b border-gray-100 py-3 sm:py-4">
                  {property.area && (
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      <span>{property.area}</span>
                    </div>
                  )}
                  {property.beds > 0 && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {property.amenities.slice(0, 4).map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button 
                  onClick={() => handlePropertyClick(property.id)}
                  className="w-full cursor-pointer bg-gray-900 hover:bg-violet-500 text-white font-bold py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
