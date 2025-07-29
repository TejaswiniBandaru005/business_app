import React, { useState } from 'react';
import { Search, MapPin, Navigation, Loader } from 'lucide-react';

interface LocationSearchProps {
  businessType: string;
  onLocationSelect: (location: string) => void;
}

const popularLocations = [
  { name: 'Downtown District', type: 'High Traffic', rating: 4.8 },
  { name: 'Shopping Mall Area', type: 'Retail Hub', rating: 4.6 },
  { name: 'University Quarter', type: 'Student Zone', rating: 4.5 },
  { name: 'Business Park', type: 'Corporate Area', rating: 4.3 },
  { name: 'Residential Complex', type: 'Local Community', rating: 4.2 },
];

export default function LocationSearch({ businessType, onLocationSelect }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        onLocationSelect(searchQuery);
      }, 1500);
    }
  };

  const handleLocationSelect = (location: string) => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      onLocationSelect(location);
    }, 1000);
  };

  const getBusinessTypeDisplay = () => {
    const types: { [key: string]: string } = {
      restaurant: 'Restaurant',
      cafe: 'Café',
      retail: 'Retail Store',
      salon: 'Beauty Salon',
      gym: 'Fitness Center',
      bookstore: 'Bookstore',
      automotive: 'Auto Service',
      healthcare: 'Healthcare'
    };
    return types[businessType] || businessType;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-800 font-medium">{getBusinessTypeDisplay()}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Where do you want to open?</h2>
          <p className="text-gray-600">Search for a location or choose from popular areas</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city, neighborhood, or address..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            onClick={handleSearch}
            disabled={!searchQuery.trim() || isSearching}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSearching ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Analyzing Location...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Analyze This Location</span>
              </>
            )}
          </button>
        </div>

        {/* Current Location */}
        <button className="w-full mb-8 bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200 active:scale-95">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Navigation className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-800">Use Current Location</h3>
              <p className="text-gray-600 text-sm">Analyze areas near you</p>
            </div>
          </div>
        </button>

        {/* Popular Locations */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Business Areas</h3>
          <div className="space-y-3">
            {popularLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationSelect(location.name)}
                className="w-full bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-800">{location.name}</h4>
                    <p className="text-gray-600 text-sm">{location.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium text-gray-700">{location.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {isSearching && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 mx-4 text-center">
              <Loader className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Analyzing Location</h3>
              <p className="text-gray-600">Gathering market data and competitor insights...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}