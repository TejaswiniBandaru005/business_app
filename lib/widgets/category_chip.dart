import 'package:flutter/material.dart';
import '../core/models/business_idea_model.dart';

class CategoryChip extends StatelessWidget {
  final BusinessCategory category;
  final bool isSelected;
  final VoidCallback onTap;

  const CategoryChip({
    Key? key,
    required this.category,
    required this.isSelected,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          gradient: isSelected
              ? const LinearGradient(
                  colors: [Color(0xFF8B5CF6), Color(0xFFEC4899)],
                )
              : null,
          color: isSelected ? null : Colors.white.withOpacity(0.1),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isSelected
                ? Colors.transparent
                : Colors.white.withOpacity(0.3),
          ),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              _getCategoryIcon(category),
              color: isSelected ? Colors.white : Colors.white70,
              size: 16,
            ),
            const SizedBox(width: 6),
            Text(
              _getCategoryName(category),
              style: TextStyle(
                color: isSelected ? Colors.white : Colors.white70,
                fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }

  IconData _getCategoryIcon(BusinessCategory category) {
    switch (category) {
      case BusinessCategory.tech:
        return Icons.computer;
      case BusinessCategory.food:
        return Icons.restaurant;
      case BusinessCategory.retail:
        return Icons.shopping_bag;
      case BusinessCategory.health:
        return Icons.health_and_safety;
      case BusinessCategory.education:
        return Icons.school;
      case BusinessCategory.finance:
        return Icons.account_balance;
      case BusinessCategory.entertainment:
        return Icons.movie;
      case BusinessCategory.other:
        return Icons.category;
    }
  }

  String _getCategoryName(BusinessCategory category) {
    switch (category) {
      case BusinessCategory.tech:
        return 'Tech';
      case BusinessCategory.food:
        return 'Food';
      case BusinessCategory.retail:
        return 'Retail';
      case BusinessCategory.health:
        return 'Health';
      case BusinessCategory.education:
        return 'Education';
      case BusinessCategory.finance:
        return 'Finance';
      case BusinessCategory.entertainment:
        return 'Entertainment';
      case BusinessCategory.other:
        return 'Other';
    }
  }
}