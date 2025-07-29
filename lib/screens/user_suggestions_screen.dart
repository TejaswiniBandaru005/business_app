import 'package:flutter/material.dart';
import '../widgets/gradient_background.dart';
import '../widgets/suggestion_card.dart';
import '../models/user_suggestion.dart';

class UserSuggestionsScreen extends StatefulWidget {
  @override
  _UserSuggestionsScreenState createState() => _UserSuggestionsScreenState();
}

class _UserSuggestionsScreenState extends State<UserSuggestionsScreen> {
  final TextEditingController _suggestionController = TextEditingController();
  bool _showAddForm = false;

  final List<UserSuggestion> suggestions = [
    UserSuggestion(
      id: 1,
      user: "Sarah M.",
      avatar: "SM",
      suggestion: "Consider the morning rush hour traffic when choosing this location. I opened my café here and the 7-9 AM crowd is amazing!",
      likes: 24,
      replies: 3,
      rating: 5,
      businessType: "Café Owner",
      timeAgo: "2 days ago",
    ),
    UserSuggestion(
      id: 2,
      user: "Mike Chen",
      avatar: "MC",
      suggestion: "Parking can be tricky on weekends. I'd recommend negotiating with the nearby lot for customer parking deals.",
      likes: 18,
      replies: 7,
      rating: 4,
      businessType: "Restaurant Owner",
      timeAgo: "1 week ago",
    ),
    UserSuggestion(
      id: 3,
      user: "Lisa K.",
      avatar: "LK",
      suggestion: "The foot traffic picks up significantly after 11 AM. Perfect for retail businesses targeting lunch-break shoppers.",
      likes: 31,
      replies: 5,
      rating: 5,
      businessType: "Retail Store",
      timeAgo: "3 days ago",
    ),
    UserSuggestion(
      id: 4,
      user: "David R.",
      avatar: "DR",
      suggestion: "Local suppliers are very reliable here. I've been working with Metro Distributors for 2 years - highly recommend!",
      likes: 15,
      replies: 2,
      rating: 4,
      businessType: "Gym Owner",
      timeAgo: "5 days ago",
    ),
  ];

  void _submitSuggestion() {
    if (_suggestionController.text.trim().isNotEmpty) {
      // In a real app, this would submit to a backend
      _suggestionController.clear();
      setState(() {
        _showAddForm = false;
      });
      
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Thank you for sharing your experience!'),
          backgroundColor: Colors.green,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 2,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Color(0xFF1F2937)),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Community Tips',
          style: TextStyle(
            color: Color(0xFF1F2937),
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: GradientBackground(
        child: Column(
          children: [
            // Header
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                children: [
                  Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Color(0xFF10B981), Color(0xFF3B82F6)],
                      ),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Icon(
                      Icons.chat_bubble,
                      size: 40,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 16),
                  Text(
                    'Community Tips',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF1F2937),
                    ),
                  ),
                  SizedBox(height: 4),
                  Text(
                    'Real insights from local business owners',
                    style: TextStyle(
                      color: Color(0xFF6B7280),
                    ),
                  ),
                ],
              ),
            ),
            
            // Add Suggestion Button
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                width: double.infinity,
                height: 60,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF10B981), Color(0xFF3B82F6)],
                  ),
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Color(0xFF10B981).withOpacity(0.3),
                      blurRadius: 12,
                      offset: Offset(0, 6),
                    ),
                  ],
                ),
                child: ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _showAddForm = !_showAddForm;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    primary: Colors.transparent,
                    shadowColor: Colors.transparent,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.add, color: Colors.white),
                      SizedBox(width: 8),
                      Text(
                        'Share Your Experience',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            
            // Add Suggestion Form
            if (_showAddForm)
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Card(
                  child: Padding(
                    padding: EdgeInsets.all(20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Share a tip for this location',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                        SizedBox(height: 16),
                        TextField(
                          controller: _suggestionController,
                          maxLines: 4,
                          decoration: InputDecoration(
                            hintText: 'What would you like other entrepreneurs to know about this area?',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                          ),
                        ),
                        SizedBox(height: 16),
                        Row(
                          children: [
                            Expanded(
                              child: ElevatedButton(
                                onPressed: _submitSuggestion,
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Icon(Icons.send, size: 16),
                                    SizedBox(width: 8),
                                    Text('Post Tip'),
                                  ],
                                ),
                              ),
                            ),
                            SizedBox(width: 12),
                            OutlinedButton(
                              onPressed: () {
                                setState(() {
                                  _showAddForm = false;
                                });
                              },
                              child: Text('Cancel'),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            
            // Suggestions List
            Expanded(
              child: ListView.builder(
                padding: EdgeInsets.all(20),
                itemCount: suggestions.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: EdgeInsets.only(bottom: 16),
                    child: SuggestionCard(suggestion: suggestions[index]),
                  );
                },
              ),
            ),
            
            // Community Stats
            Padding(
              padding: EdgeInsets.all(20),
              child: Card(
                child: Padding(
                  padding: EdgeInsets.all(20),
                  child: Column(
                    children: [
                      Text(
                        'Community Impact',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                      SizedBox(height: 16),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            children: [
                              Text(
                                '1.2K',
                                style: TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFF3B82F6),
                                ),
                              ),
                              Text(
                                'Tips Shared',
                                style: TextStyle(
                                  color: Color(0xFF6B7280),
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                          Column(
                            children: [
                              Text(
                                '850',
                                style: TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFF10B981),
                                ),
                              ),
                              Text(
                                'Business Owners',
                                style: TextStyle(
                                  color: Color(0xFF6B7280),
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                          Column(
                            children: [
                              Text(
                                '95%',
                                style: TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFF8B5CF6),
                                ),
                              ),
                              Text(
                                'Found Helpful',
                                style: TextStyle(
                                  color: Color(0xFF6B7280),
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}