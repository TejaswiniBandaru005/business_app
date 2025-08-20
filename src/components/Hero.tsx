import React from 'react';
import { MapPin, TrendingUp, Users, Search, Sparkles, Zap, Target } from 'lucide-react';

interface HeroProps {
  onStartAnalysis: () => void;
}

export default function Hero({ onStartAnalysis }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 relative overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              <MapPin className="h-16 w-16 text-white relative z-10" />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 scale-110"></div>
            </div>
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-4 w-4 text-yellow-900" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="h-4 w-4 text-green-900" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              Business Location
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8 backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
            Discover the best spots for your business with AI-powered location analysis and competitor insights.
          </p>
          
          <button
            onClick={onStartAnalysis}
            className="group relative w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center justify-center space-x-3">
              <Target className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              <span>Start Location Analysis</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
          </button>
        </div>

        {/* Enhanced Features Grid */}
        <div className="space-y-6">
          <div className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-2 text-lg">Profit Analysis</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Get insights on potential revenue and market opportunities with AI-powered predictions</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-2 text-lg">Competitor Mapping</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Analyze competition density and market saturation with real-time data</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <Search className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-2 text-lg">Property Search</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Find vacant shops and rental opportunities with advanced filtering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats with Animations */}
        <div className="mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse">10K+</div>
                <div className="absolute inset-0 text-3xl font-bold text-cyan-400 blur-sm opacity-50"></div>
              </div>
              <div className="text-sm text-gray-300 mt-2">Locations Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse">95%</div>
                <div className="absolute inset-0 text-3xl font-bold text-green-400 blur-sm opacity-50"></div>
              </div>
              <div className="text-sm text-gray-300 mt-2">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">500+</div>
                <div className="absolute inset-0 text-3xl font-bold text-purple-400 blur-sm opacity-50"></div>
              </div>
              <div className="text-sm text-gray-300 mt-2">Happy Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}