import 'package:flutter/material.dart';
import '../models/user_suggestion.dart';

class SuggestionCard extends StatelessWidget {
  final UserSuggestion suggestion;

  const SuggestionCard({Key? key, required this.suggestion}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // User Info
            Row(
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                    ),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Center(
                    child: Text(
                      suggestion.avatar,
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ),
                SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            suggestion.user,
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF1F2937),
                            ),
                          ),
                          SizedBox(width: 8),
                          Row(
                            children: List.generate(
                              suggestion.rating,
                              (index) => Icon(
                                Icons.star,
                                color: Colors.amber,
                                size: 12,
                              ),
                            ),
                          ),
                        ],
                      ),
                      Text(
                        '${suggestion.businessType} • ${suggestion.timeAgo}',
                        style: TextStyle(
                          color: Color(0xFF6B7280),
                          fontSize: 12,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: 16),
            
            // Suggestion Content
            Text(
              suggestion.suggestion,
              style: TextStyle(
                color: Color(0xFF374151),
                fontSize: 14,
                height: 1.5,
              ),
            ),
            SizedBox(height: 16),
            
            // Actions
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Icon(
                      Icons.thumb_up_outlined,
                      color: Color(0xFF6B7280),
                      size: 16,
                    ),
                    SizedBox(width: 4),
                    Text(
                      '${suggestion.likes}',
                      style: TextStyle(
                        color: Color(0xFF6B7280),
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Icon(
                      Icons.chat_bubble_outline,
                      color: Color(0xFF6B7280),
                      size: 16,
                    ),
                    SizedBox(width: 4),
                    Text(
                      '${suggestion.replies} replies',
                      style: TextStyle(
                        color: Color(0xFF6B7280),
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}