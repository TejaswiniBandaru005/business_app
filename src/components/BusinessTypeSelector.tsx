import React, { useState } from 'react';
import { Coffee, ShoppingBag, Utensils, Scissors, Dumbbell, Book, Car, Heart, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface BusinessTypeSelectorProps {
  onSelectType: (type: string) => void;
}

const businessTypes = [
  { id: 'restaurant', name: 'Restaurant', icon: Utensils, color: 'from-red-500 via-orange-500 to-yellow-500', description: 'Food & Dining', accent: 'red' },
  { id: 'cafe', name: 'Café', icon: Coffee, color: 'from-amber-500 via-orange-500 to-yellow-500', description: 'Coffee & Beverages', accent: 'amber' },
  { id: 'retail', name: 'Retail Store', icon: ShoppingBag, color: 'from-blue-500 via-cyan-500 to-teal-500', description: 'Shopping & Goods', accent: 'blue' },
  { id: 'salon', name: 'Beauty Salon', icon: Scissors, color: 'from-pink-500 via-rose-500 to-red-500', description: 'Beauty & Wellness', accent: 'pink' },
  { id: 'gym', name: 'Fitness Center', icon: Dumbbell, color: 'from-green-500 via-emerald-500 to-teal-500', description: 'Health & Fitness', accent: 'green' },
  { id: 'bookstore', name: 'Bookstore', icon: Book, color: 'from-purple-500 via-violet-500 to-indigo-500', description: 'Books & Education', accent: 'purple' },
  { id: 'automotive', name: 'Auto Service', icon: Car, color: 'from-gray-500 via-slate-500 to-zinc-500', description: 'Vehicle Services', accent: 'gray' },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-teal-500 via-cyan-500 to-blue-500', description: 'Medical Services', accent: 'teal' },
];

export default function BusinessTypeSelector({ onSelectType }: BusinessTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>('');
  const [hoveredType, setHoveredType] = useState<string>('');

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setTimeout(() => onSelectType(type), 300);
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="text-white font-medium">Choose Your Path</span>
            <Zap className="h-4 w-4 text-cyan-400 animate-bounce" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">Choose Your Business Type</h2>
          <p className="text-gray-300 backdrop-blur-sm bg-white/5 rounded-2xl p-3 border border-white/10">
            Select the type of business you want to start
          </p>
        </div>

        <div className="space-y-4">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            const isSelected = selectedType === business.id;
            const isHovered = hoveredType === business.id;
            
            return (
              <button
                key={business.id}
                onClick={() => handleSelect(business.id)}
                onMouseEnter={() => setHoveredType(business.id)}
                onMouseLeave={() => setHoveredType('')}
                className={`group w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-5 border transition-all duration-500 hover:scale-105 active:scale-95 ${
                  isSelected 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : isHovered
                    ? 'border-white/30 shadow-xl'
                    : 'border-white/20 hover:border-white/30'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center space-x-5">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl`}>
                    <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${business.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    
                    {/* Floating particles around icon */}
                    {isHovered && (
                      <>
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-white text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {business.name}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {business.description}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <ArrowRight className={`h-6 w-6 text-gray-400 transition-all duration-300 ${
                      isSelected || isHovered
                        ? 'text-cyan-400 transform translate-x-2 scale-110' 
                        : 'group-hover:text-white group-hover:translate-x-1'
                    }`} />
                    
                    {(isSelected || isHovered) && (
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-blue-400/20">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
              <Sparkles className="h-4 w-4 text-yellow-900" />
            </div>
            <div>
              <p className="text-blue-200 text-sm leading-relaxed">
                <strong className="text-white">Pro Tip:</strong> Choose the category that best matches your business idea. Our AI will provide tailored insights and market analysis specific to your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}