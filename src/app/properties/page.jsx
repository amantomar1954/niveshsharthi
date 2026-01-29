"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  MapPin, 
  Heart,
  Building2,
  Bed,
  Bath,
  ChevronDown,
  Grid3X3,
  X
} from "lucide-react";
import propertiesData from "@/data/properties.json";

// ============= PropertyCard Component =============
const PropertyCard = ({ 
  id,
  image, 
  type, 
  featured, 
  price, 
  title, 
  location, 
  area, 
  beds, 
  baths 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'residential':
        return 'bg-blue-600';
      case 'plot':
        return 'bg-amber-500';
      case 'industrial':
        return 'bg-orange-600';
      case 'commercial':
        return 'bg-green-600';
      default:
        return 'bg-purple-600';
    }
  };

  const handleCardClick = () => {
    router.push(`/properties/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Type & Featured Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`${getTypeColor(type)} text-white text-xs font-medium px-3 py-1 rounded-full capitalize`}>
            {type}
          </span>
          {featured && (
            <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-lg px-4 py-2 rounded-lg shadow-md">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1 text-purple-600" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          <div className="flex items-center text-gray-600">
            <Grid3X3 className="w-4 h-4 mr-1.5" />
            <span className="text-sm">{area}</span>
          </div>
          
          {beds > 0 && (
            <div className="flex items-center text-gray-600">
              <Bed className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{beds}</span>
            </div>
          )}
          
          {baths > 0 && (
            <div className="flex items-center text-gray-600">
              <Bath className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{baths}</span>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <button 
          onClick={handleCardClick}
          className="w-full mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// ============= FilterDropdown Component =============
const FilterDropdown = ({ icon, label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-purple-600 transition-colors text-sm font-medium text-gray-700"
      >
        {icon}
        <span>{value || label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-20 min-w-max">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-purple-50 text-gray-700 text-sm font-medium"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ============= PropertiesSection Component =============
const PropertiesSection = () => {
  const [filters, setFilters] = useState({
    type: 'All',
    location: 'All',
    beds: 'All',
    baths: 'All',
    searchTerm: ''
  });

  // Get properties from JSON
  const allProperties = propertiesData.properties;

  // Filter properties
  const filteredProperties = allProperties.filter(property => {
    const typeMatch = filters.type === 'All' || property.type.toLowerCase() === filters.type.toLowerCase();
    const locationMatch = filters.location === 'All' || property.location.includes(filters.location);
    const bedsMatch = filters.beds === 'All' || 
      (filters.beds === '5+' ? property.beds >= 5 : (property.beds === parseInt(filters.beds) || (filters.beds === '0' && property.beds === 0)));
    const bathsMatch = filters.baths === 'All' || 
      (filters.baths === '4+' ? property.baths >= 4 : (property.baths === parseInt(filters.baths) || (filters.baths === '0' && property.baths === 0)));
    const searchMatch = filters.searchTerm === '' || 
      property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(filters.searchTerm.toLowerCase());

    return typeMatch && locationMatch && bedsMatch && bathsMatch && searchMatch;
  });

  const handleFilterClear = () => {
    setFilters({ type: 'All', location: 'All', beds: 'All', baths: 'All', searchTerm: '' });
  };

  const isFiltered = filters.type !== 'All' || filters.location !== 'All' || filters.beds !== 'All' || filters.baths !== 'All' || filters.searchTerm;
  const propertyTypes = ['All', 'Residential', 'Commercial', 'Industrial', 'Plot'];
  const locations = ['All', 'Noida', 'Gurgaon', 'Faridabad', 'Delhi'];
  const bedOptions = ['All', '0', '1', '2', '3', '4', '5+'];
  const bathOptions = ['All', '0', '1', '2', '3', '4+'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-400 font-medium text-sm md:text-base tracking-wider uppercase mb-4 block">
              Our Properties
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Find Your Perfect Property
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              Explore our wide range of residential, commercial, and industrial properties in Faridabad and NCR.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl md:rounded-full p-2 max-w-2xl mx-auto shadow-xl flex flex-col md:flex-row gap-2 md:gap-0">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-600 mr-3" />
                <input 
                  type="text"
                  placeholder="Search by keyword, property name or location..."
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                  className="border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-600 w-full"
                />
              </div>
              <button className="rounded-lg md:rounded-full px-6 md:px-8 py-2 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="py-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <FilterDropdown 
              icon={<Building2 className="w-4 h-4" />} 
              label="Property Type"
              options={propertyTypes}
              value={filters.type === 'All' ? '' : filters.type}
              onChange={(val) => setFilters({ ...filters, type: val })}
            />
            <FilterDropdown 
              icon={<MapPin className="w-4 h-4" />} 
              label="Location"
              options={locations}
              value={filters.location === 'All' ? '' : filters.location}
              onChange={(val) => setFilters({ ...filters, location: val })}
            />
            <FilterDropdown 
              icon={<Bed className="w-4 h-4" />} 
              label="Bedrooms"
              options={bedOptions}
              value={filters.beds === 'All' ? '' : filters.beds}
              onChange={(val) => setFilters({ ...filters, beds: val })}
            />
            <FilterDropdown 
              icon={<Bath className="w-4 h-4" />} 
              label="Bathrooms"
              options={bathOptions}
              value={filters.baths === 'All' ? '' : filters.baths}
              onChange={(val) => setFilters({ ...filters, baths: val })}
            />
            {isFiltered && (
              <button
                onClick={handleFilterClear}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-red-50 text-sm font-medium text-gray-700"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>

          <p className="text-gray-600 text-sm">
            Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={handleFilterClear}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesSection;
