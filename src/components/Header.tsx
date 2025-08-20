import React from 'react';
import { MapPin, Users, ArrowLeft, Sparkles } from 'lucide-react';

interface HeaderProps {
  onBackToHome: () => void;
  currentStep: string;
  onViewSuggestions: () => void;
}

export default function Header({ onBackToHome, currentStep, onViewSuggestions }: HeaderProps) {
  const showBackButton = currentStep !== 'home';
  
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
      
      <div className="max-w-md mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          {showBackButton ? (
            <button 
              onClick={onBackToHome}
              className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
                {/* Floating sparkle */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">BizSpot</span>
                <div className="text-xs text-gray-300">AI-Powered Analysis</div>
              </div>
            </div>
          )}
          
          {currentStep === 'analysis' && (
            <button 
              onClick={onViewSuggestions}
              className="group relative flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-green-500/25"
            >
              <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Tips</span>
              <Sparkles className="h-4 w-4 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}