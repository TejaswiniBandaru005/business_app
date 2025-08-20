import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Star, Send, Plus, User, Sparkles, Zap, Heart } from 'lucide-react';

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
      timeAgo: "2 days ago",
      color: "from-pink-500 to-rose-500"
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
      timeAgo: "1 week ago",
      color: "from-blue-500 to-cyan-500"
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
      timeAgo: "3 days ago",
      color: "from-purple-500 to-indigo-500"
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
      timeAgo: "5 days ago",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleSubmitSuggestion = () => {
    if (newSuggestion.trim()) {
      setNewSuggestion('');
      setShowAddForm(false);
    }
  };

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
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
              <MessageCircle className="h-10 w-10 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-50"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-3 w-3 text-yellow-900" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">Community Tips</h2>
          <p className="text-gray-300 backdrop-blur-sm bg-white/5 rounded-2xl p-3 border border-white/10">
            Real insights from local business owners
          </p>
        </div>

        {/* Enhanced Add Suggestion Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="group relative w-full mb-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-5 px-8 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 active:scale-95 overflow-hidden"
        >
          {/* Button Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          
          <div className="relative flex items-center justify-center space-x-3">
            <Plus className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
            <span>Share Your Experience</span>
            <Heart className="h-5 w-5 animate-pulse" />
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
        </button>

        {/* Enhanced Add Suggestion Form */}
        {showAddForm && (
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 mb-8 animate-fadeIn">
            <h3 className="font-bold text-white mb-4 flex items-center">
              <Zap className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
              Share a tip for this location
            </h3>
            <textarea
              value={newSuggestion}
              onChange={(e) => setNewSuggestion(e.target.value)}
              placeholder="What would you like other entrepreneurs to know about this area?"
              className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl resize-none h-24 text-white placeholder-gray-400 outline-none focus:border-cyan-400/50 transition-all duration-300"
            />
            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleSubmitSuggestion}
                className="group flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-2xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
              >
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Post Tip</span>
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Suggestions List */}
        <div className="space-y-6">
          {suggestions.map((suggestion, index) => (
            <div 
              key={suggestion.id} 
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced User Info */}
              <div className="flex items-center space-x-4 mb-5">
                <div className={`relative w-12 h-12 bg-gradient-to-br ${suggestion.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold">{suggestion.avatar}</span>
                  <div className={`absolute inset-0 bg-gradient-to-br ${suggestion.color} rounded-2xl blur-lg opacity-50`}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-white">{suggestion.user}</h4>
                    <div className="flex items-center">
                      {[...Array(suggestion.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{suggestion.businessType} • {suggestion.timeAgo}</p>
                </div>
              </div>

              {/* Enhanced Suggestion Content */}
              <p className="text-gray-300 mb-5 leading-relaxed bg-white/5 rounded-2xl p-4 border border-white/10">
                {suggestion.suggestion}
              </p>

              {/* Enhanced Actions */}
              <div className="flex items-center justify-between">
                <button className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <div className="relative">
                    <ThumbsUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="font-semibold">{suggestion.likes}</span>
                </button>
                <button className="group flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300">
                  <div className="relative">
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="font-semibold">{suggestion.replies} replies</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Community Stats */}
        <div className="mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-gradient-x"></div>
          
          <h3 className="font-bold text-white mb-6 text-center text-xl flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
            Community Impact
          </h3>
          
          <div className="grid grid-cols-3 gap-6 text-center relative z-10">
            {[
              { value: '1.2K', label: 'Tips Shared', color: 'from-blue-400 to-cyan-400' },
              { value: '850', label: 'Business Owners', color: 'from-green-400 to-emerald-400' },
              { value: '95%', label: 'Found Helpful', color: 'from-purple-400 to-pink-400' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className={`absolute inset-0 text-3xl font-bold bg-gradient-to-r ${stat.color} blur-sm opacity-30`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}