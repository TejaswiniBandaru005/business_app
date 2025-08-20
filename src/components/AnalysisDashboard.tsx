import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, MapPin, DollarSign, Building, Truck, AlertTriangle, CheckCircle, Star, Sparkles, Zap, Target } from 'lucide-react';

interface AnalysisDashboardProps {
  businessType: string;
  location: string;
}

export default function AnalysisDashboard({ businessType, location }: AnalysisDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'competitors' | 'properties' | 'suppliers'>('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [scoreAnimation, setScoreAnimation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const animationTimer = setTimeout(() => {
        setScoreAnimation(profitabilityScore);
      }, 500);
      return () => clearTimeout(animationTimer);
    }
  }, [isLoading]);

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

  const profitabilityScore = 78;
  const competitorCount = 12;
  const vacantProperties = 8;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="text-center relative z-10">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl mx-auto flex items-center justify-center animate-pulse shadow-2xl">
              <TrendingUp className="h-12 w-12 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">Analyzing {location}</h3>
          <p className="text-gray-300 mb-8">Processing market data for your {getBusinessTypeDisplay().toLowerCase()}...</p>
          
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-400/30 mb-4">
            <Target className="h-4 w-4 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-200 font-semibold text-sm">{getBusinessTypeDisplay()}</span>
            <Sparkles className="h-4 w-4 text-purple-400 ml-2 animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">{location}</h2>
          <p className="text-gray-300 text-sm">AI-Powered Location Analysis Report</p>
        </div>

        {/* Enhanced Score Card */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 mb-8 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-gradient-x"></div>
          
          <div className="text-center relative z-10">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke={scoreAnimation >= 70 ? "#10B981" : scoreAnimation >= 50 ? "#F59E0B" : "#EF4444"}
                  strokeWidth="6" 
                  fill="none"
                  strokeDasharray={`${scoreAnimation * 2.51} 251`}
                  className="transition-all duration-2000 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{scoreAnimation}</span>
              </div>
              
              {/* Floating elements around score */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Business Viability Score</h3>
            <p className="text-gray-300 text-sm">
              {profitabilityScore >= 70 ? "🎉 Excellent location!" : profitabilityScore >= 50 ? "👍 Good potential" : "⚠️ Consider alternatives"}
            </p>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Users, value: competitorCount.toString(), label: 'Competitors', color: 'from-orange-500 to-red-500' },
            { icon: Building, value: vacantProperties.toString(), label: 'Vacant Shops', color: 'from-blue-500 to-cyan-500' },
            { icon: DollarSign, value: '$2.8K', label: 'Avg. Rent', color: 'from-green-500 to-emerald-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-2 mb-8 border border-white/20">
          <div className="grid grid-cols-4 gap-1">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'competitors', label: 'Competition', icon: Users },
              { id: 'properties', label: 'Properties', icon: Building },
              { id: 'suppliers', label: 'Suppliers', icon: Truck }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex flex-col items-center py-3 px-2 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-xs font-medium">{tab.label}</span>
                  
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Tab Content */}
        <div className="space-y-4">
          {activeTab === 'overview' && (
            <>
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <h3 className="font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">Strengths</span>
                  <Sparkles className="h-4 w-4 text-yellow-400 ml-2 animate-pulse" />
                </h3>
                <div className="space-y-4">
                  {[
                    'High foot traffic during peak hours (2,500+ daily)',
                    'Strong demographic match for target customers',
                    'Good public transportation accessibility'
                  ].map((strength, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                <h3 className="font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-400 mr-3" />
                  <span className="text-lg">Considerations</span>
                  <Zap className="h-4 w-4 text-orange-400 ml-2 animate-bounce" />
                </h3>
                <div className="space-y-4">
                  {[
                    'Moderate competition density in 500m radius',
                    'Parking availability limited during weekends'
                  ].map((consideration, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{consideration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'competitors' && (
            <div className="space-y-4">
              {[
                { name: "Joe's Coffee Corner", distance: "120m", rating: 4.2, type: "Direct", color: "from-red-500 to-orange-500" },
                { name: "Urban Bistro", distance: "250m", rating: 4.5, type: "Indirect", color: "from-blue-500 to-cyan-500" },
                { name: "Quick Bites", distance: "180m", rating: 3.8, type: "Direct", color: "from-purple-500 to-pink-500" },
                { name: "The Local Spot", distance: "320m", rating: 4.1, type: "Indirect", color: "from-green-500 to-emerald-500" }
              ].map((competitor, index) => (
                <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${competitor.color} rounded-full animate-pulse`}></div>
                      <h4 className="font-bold text-white">{competitor.name}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      competitor.type === 'Direct' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {competitor.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{competitor.distance} away</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current animate-pulse" />
                      <span className="text-white font-semibold">{competitor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="space-y-4">
              {[
                { address: "123 Main Street", size: "1,200 sq ft", rent: "$2,800/month", status: "Available", color: "from-green-500 to-emerald-500" },
                { address: "456 Commerce Ave", size: "800 sq ft", rent: "$2,200/month", status: "Available", color: "from-green-500 to-emerald-500" },
                { address: "789 Business Blvd", size: "1,500 sq ft", rent: "$3,200/month", status: "Coming Soon", color: "from-blue-500 to-cyan-500" }
              ].map((property, index) => (
                <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-white flex-1">{property.address}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${property.color} text-white`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{property.size}</span>
                    <span className="text-white font-bold">{property.rent}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suppliers' && (
            <div className="space-y-4">
              {[
                { name: "Metro Food Distributors", category: "Food Supplies", distance: "2.1 km", rating: 4.6, color: "from-orange-500 to-red-500" },
                { name: "Office Plus", category: "Equipment", distance: "1.8 km", rating: 4.3, color: "from-blue-500 to-cyan-500" },
                { name: "City Logistics", category: "Delivery Service", distance: "3.2 km", rating: 4.4, color: "from-purple-500 to-pink-500" }
              ].map((supplier, index) => (
                <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${supplier.color} rounded-full animate-pulse`}></div>
                      <div>
                        <h4 className="font-bold text-white">{supplier.name}</h4>
                        <p className="text-gray-300 text-sm">{supplier.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current animate-pulse" />
                      <span className="text-white font-semibold">{supplier.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{supplier.distance} away</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 active:scale-95">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}