import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, MapPin, DollarSign, Building, Truck, AlertTriangle, CheckCircle, Star } from 'lucide-react';

interface AnalysisDashboardProps {
  businessType: string;
  location: string;
}

export default function AnalysisDashboard({ businessType, location }: AnalysisDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'competitors' | 'properties' | 'suppliers'>('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyzing {location}</h3>
          <p className="text-gray-600">Processing market data for your {getBusinessTypeDisplay().toLowerCase()}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full mb-2">
            <span className="text-blue-800 text-sm font-medium">{getBusinessTypeDisplay()}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{location}</h2>
          <p className="text-gray-600 text-sm">Location Analysis Report</p>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke={profitabilityScore >= 70 ? "#10B981" : profitabilityScore >= 50 ? "#F59E0B" : "#EF4444"}
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${profitabilityScore * 2.51} 251`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">{profitabilityScore}</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Viability Score</h3>
            <p className="text-sm text-gray-600">
              {profitabilityScore >= 70 ? "Excellent location!" : profitabilityScore >= 50 ? "Good potential" : "Consider alternatives"}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
            <Users className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-800">{competitorCount}</div>
            <div className="text-xs text-gray-600">Competitors</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
            <Building className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-800">{vacantProperties}</div>
            <div className="text-xs text-gray-600">Vacant Shops</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
            <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-800">$2.8K</div>
            <div className="text-xs text-gray-600">Avg. Rent</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
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
                className={`flex-1 flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-md text-blue-600' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'overview' && (
            <>
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Strengths
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">High foot traffic during peak hours (2,500+ daily)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">Strong demographic match for target customers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">Good public transportation accessibility</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                  Considerations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">Moderate competition density in 500m radius</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">Parking availability limited during weekends</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'competitors' && (
            <div className="space-y-3">
              {[
                { name: "Joe's Coffee Corner", distance: "120m", rating: 4.2, type: "Direct" },
                { name: "Urban Bistro", distance: "250m", rating: 4.5, type: "Indirect" },
                { name: "Quick Bites", distance: "180m", rating: 3.8, type: "Direct" },
                { name: "The Local Spot", distance: "320m", rating: 4.1, type: "Indirect" }
              ].map((competitor, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{competitor.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      competitor.type === 'Direct' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {competitor.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{competitor.distance} away</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{competitor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="space-y-3">
              {[
                { address: "123 Main Street", size: "1,200 sq ft", rent: "$2,800/month", status: "Available" },
                { address: "456 Commerce Ave", size: "800 sq ft", rent: "$2,200/month", status: "Available" },
                { address: "789 Business Blvd", size: "1,500 sq ft", rent: "$3,200/month", status: "Coming Soon" }
              ].map((property, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{property.address}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{property.size}</span>
                    <span className="text-sm font-medium text-gray-800">{property.rent}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suppliers' && (
            <div className="space-y-3">
              {[
                { name: "Metro Food Distributors", category: "Food Supplies", distance: "2.1 km", rating: 4.6 },
                { name: "Office Plus", category: "Equipment", distance: "1.8 km", rating: 4.3 },
                { name: "City Logistics", category: "Delivery Service", distance: "3.2 km", rating: 4.4 }
              ].map((supplier, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{supplier.name}</h4>
                      <p className="text-sm text-gray-600">{supplier.category}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{supplier.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{supplier.distance} away</span>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
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