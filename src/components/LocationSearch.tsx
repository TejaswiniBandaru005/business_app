import React, { useState } from 'react';
import { Search, MapPin, Navigation, Loader, Sparkles, Target, Zap } from 'lucide-react';

interface LocationSearchProps {
  businessType: string;
  onLocationSelect: (location: string) => void;
}

const popularLocations = [
  { name: 'Downtown District', type: 'High Traffic', rating: 4.8, color: 'from-red-500 to-orange-500' },
  { name: 'Shopping Mall Area', type: 'Retail Hub', rating: 4.6, color: 'from-blue-500 to-cyan-500' },
  { name: 'University Quarter', type: 'Student Zone', rating: 4.5, color: 'from-purple-500 to-pink-500' },
  { name: 'Business Park', type: 'Corporate Area', rating: 4.3, color: 'from-green-500 to-emerald-500' },
  { name: 'Residential Complex', type: 'Local Community', rating: 4.2, color: 'from-amber-500 to-yellow-500' },
];

export default function LocationSearch({ businessType, onLocationSelect }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<string>('');

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-400/30 mb-6">
            <Target className="h-5 w-5 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-200 font-semibold">{getBusinessTypeDisplay()}</span>
            <Sparkles className="h-4 w-4 text-purple-400 ml-2 animate-bounce" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">Where do you want to open?</h2>
          <p className="text-gray-300 backdrop-blur-sm bg-white/5 rounded-2xl p-3 border border-white/10">
            Search for a location or choose from popular areas
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter city, neighborhood, or address..."
                className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              
              {/* Search icon glow */}
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            disabled={!searchQuery.trim() || isSearching}
            className="group relative w-full mt-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-5 px-8 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-center space-x-3">
              {isSearching ? (
                <>
                  <Loader className="h-6 w-6 animate-spin" />
                  <span>Analyzing Location...</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </>
              ) : (
                <>
                  <Search className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Analyze This Location</span>
                  <Zap className="h-5 w-5 animate-pulse" />
                </>
              )}
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
          </button>
        </div>

        {/* Enhanced Current Location Button */}
        <button 
          onClick={() => handleLocationSelect('Current Location')}
          className="group w-full mb-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
        >
          <div className="flex items-center space-x-5">
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
              <Navigation className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Pulsing dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-white text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                Use Current Location
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                Analyze areas near you with GPS precision
              </p>
            </div>
          </div>
        </button>

        {/* Enhanced Popular Locations */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Sparkles className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
            Popular Business Areas
          </h3>
          
          <div className="space-y-4">
            {popularLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationSelect(location.name)}
                onMouseEnter={() => setHoveredLocation(location.name)}
                onMouseLeave={() => setHoveredLocation('')}
                className="group w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center space-x-5">
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl`}>
                    <MapPin className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${location.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    
                    {hoveredLocation === location.name && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-bounce"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-white text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {location.name}
                    </h4>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {location.type}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-lg animate-pulse">★</span>
                        <span className="text-white font-bold">{location.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Loading Modal */}
        {isSearching && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 mx-4 text-center border border-white/20 max-w-sm w-full">
              <div className="relative mb-6">
                <Loader className="h-16 w-16 animate-spin text-cyan-400 mx-auto" />
                <div className="absolute inset-0 h-16 w-16 bg-cyan-400 rounded-full blur-xl opacity-30 mx-auto animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Analyzing Location</h3>
              <p className="text-gray-300 mb-4">Gathering market data and competitor insights...</p>
              
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}