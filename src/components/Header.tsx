import React from 'react';
import { MapPin, Users, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onBackToHome: () => void;
  currentStep: string;
  onViewSuggestions: () => void;
}

export default function Header({ onBackToHome, currentStep, onViewSuggestions }: HeaderProps) {
  const showBackButton = currentStep !== 'home';
  
  return (
    <header className="bg-white shadow-md relative z-10">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {showBackButton ? (
            <button 
              onClick={onBackToHome}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">BizSpot</span>
            </div>
          )}
          
          {currentStep === 'analysis' && (
            <button 
              onClick={onViewSuggestions}
              className="flex items-center space-x-1 px-3 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-all duration-200 active:scale-95"
            >
              <Users className="h-4 w-4" />
              <span>Tips</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}