import 'package:flutter/material.dart';

class StatsRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        _buildStat('10K+', 'Locations Analyzed', Color(0xFF3B82F6)),
        _buildStat('95%', 'Success Rate', Color(0xFF10B981)),
        _buildStat('500+', 'Happy Businesses', Color(0xFF8B5CF6)),
      ],
    );
  }

  Widget _buildStat(String value, String label, Color color) {
    return Column(
      children: [
        Text(
          value,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
        SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            color: Color(0xFF6B7280),
            fontSize: 12,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}