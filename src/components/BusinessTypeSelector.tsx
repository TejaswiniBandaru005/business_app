import React, { useState } from 'react';
import { Coffee, ShoppingBag, Utensils, Scissors, Dumbbell, Book, Car, Heart, ArrowRight } from 'lucide-react';

interface BusinessTypeSelectorProps {
  onSelectType: (type: string) => void;
}

const businessTypes = [
  { id: 'restaurant', name: 'Restaurant', icon: Utensils, color: 'from-red-500 to-orange-500', description: 'Food & Dining' },
  { id: 'cafe', name: 'Café', icon: Coffee, color: 'from-amber-500 to-yellow-500', description: 'Coffee & Beverages' },
  { id: 'retail', name: 'Retail Store', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500', description: 'Shopping & Goods' },
  { id: 'salon', name: 'Beauty Salon', icon: Scissors, color: 'from-pink-500 to-rose-500', description: 'Beauty & Wellness' },
  { id: 'gym', name: 'Fitness Center', icon: Dumbbell, color: 'from-green-500 to-emerald-500', description: 'Health & Fitness' },
  { id: 'bookstore', name: 'Bookstore', icon: Book, color: 'from-purple-500 to-indigo-500', description: 'Books & Education' },
  { id: 'automotive', name: 'Auto Service', icon: Car, color: 'from-gray-500 to-slate-500', description: 'Vehicle Services' },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-teal-500 to-cyan-500', description: 'Medical Services' },
];

export default function BusinessTypeSelector({ onSelectType }: BusinessTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setTimeout(() => onSelectType(type), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Business Type</h2>
          <p className="text-gray-600">Select the type of business you want to start</p>
        </div>

        <div className="space-y-3">
          {businessTypes.map((business) => {
            const Icon = business.icon;
            const isSelected = selectedType === business.id;
            
            return (
              <button
                key={business.id}
                onClick={() => handleSelect(business.id)}
                className={`w-full bg-white rounded-2xl p-4 shadow-md border border-gray-100 transition-all duration-200 hover:shadow-lg active:scale-95 ${
                  isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-800 text-lg">{business.name}</h3>
                    <p className="text-gray-600 text-sm">{business.description}</p>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-400 transition-all duration-200 ${
                    isSelected ? 'text-blue-500 transform translate-x-1' : ''
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-blue-800 text-sm text-center">
            💡 <strong>Tip:</strong> Choose the category that best matches your business idea. We'll provide tailored insights for your industry.
          </p>
        </div>
      </div>
    </div>
  );
}