import 'package:flutter/material.dart';

class BusinessType {
  final String id;
  final String name;
  final String description;
  final IconData icon;
  final List<Color> colors;

  BusinessType({
    required this.id,
    required this.name,
    required this.description,
    required this.icon,
    required this.colors,
  });
}