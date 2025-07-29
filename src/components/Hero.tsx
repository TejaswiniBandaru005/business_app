import React from 'react';
import { MapPin, TrendingUp, Users, Search } from 'lucide-react';

interface HeroProps {
  onStartAnalysis: () => void;
}

export default function Hero({ onStartAnalysis }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Business Location</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Discover the best spots for your business with AI-powered location analysis and competitor insights.
          </p>
          
          <button
            onClick={onStartAnalysis}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            Start Location Analysis
          </button>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Profit Analysis</h3>
                <p className="text-gray-600 text-sm">Get insights on potential revenue and market opportunities</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Competitor Mapping</h3>
                <p className="text-gray-600 text-sm">Analyze competition density and market saturation</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Property Search</h3>
                <p className="text-gray-600 text-sm">Find vacant shops and rental opportunities nearby</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">10K+</div>
            <div className="text-sm text-gray-600">Locations Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-gray-600">Happy Businesses</div>
          </div>
        </div>
      </div>
    </div>
  );
}