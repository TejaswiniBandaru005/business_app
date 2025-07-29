import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Star, Send, Plus, User } from 'lucide-react';

export default function UserSuggestions() {
  const [newSuggestion, setNewSuggestion] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const suggestions = [
    {
      id: 1,
      user: "Sarah M.",
      avatar: "SM",
      suggestion: "Consider the morning rush hour traffic when choosing this location. I opened my café here and the 7-9 AM crowd is amazing!",
      likes: 24,
      replies: 3,
      rating: 5,
      businessType: "Café Owner",
      timeAgo: "2 days ago"
    },
    {
      id: 2,
      user: "Mike Chen",
      avatar: "MC",
      suggestion: "Parking can be tricky on weekends. I'd recommend negotiating with the nearby lot for customer parking deals.",
      likes: 18,
      replies: 7,
      rating: 4,
      businessType: "Restaurant Owner",
      timeAgo: "1 week ago"
    },
    {
      id: 3,
      user: "Lisa K.",
      avatar: "LK",
      suggestion: "The foot traffic picks up significantly after 11 AM. Perfect for retail businesses targeting lunch-break shoppers.",
      likes: 31,
      replies: 5,
      rating: 5,
      businessType: "Retail Store",
      timeAgo: "3 days ago"
    },
    {
      id: 4,
      user: "David R.",
      avatar: "DR",
      suggestion: "Local suppliers are very reliable here. I've been working with Metro Distributors for 2 years - highly recommend!",
      likes: 15,
      replies: 2,
      rating: 4,
      businessType: "Gym Owner",
      timeAgo: "5 days ago"
    }
  ];

  const handleSubmitSuggestion = () => {
    if (newSuggestion.trim()) {
      // In a real app, this would submit to a backend
      setNewSuggestion('');
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Community Tips</h2>
          <p className="text-gray-600">Real insights from local business owners</p>
        </div>

        {/* Add Suggestion Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Share Your Experience</span>
        </button>

        {/* Add Suggestion Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Share a tip for this location</h3>
            <textarea
              value={newSuggestion}
              onChange={(e) => setNewSuggestion(e.target.value)}
              placeholder="What would you like other entrepreneurs to know about this area?"
              className="w-full p-4 border border-gray-200 rounded-xl resize-none h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            />
            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleSubmitSuggestion}
                className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Post Tip</span>
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Suggestions List */}
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{suggestion.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-800">{suggestion.user}</h4>
                    <div className="flex items-center">
                      {[...Array(suggestion.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{suggestion.businessType} • {suggestion.timeAgo}</p>
                </div>
              </div>

              {/* Suggestion Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">{suggestion.suggestion}</p>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{suggestion.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{suggestion.replies} replies</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">Community Impact</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">1.2K</div>
              <div className="text-sm text-gray-600">Tips Shared</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">850</div>
              <div className="text-sm text-gray-600">Business Owners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600">Found Helpful</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}