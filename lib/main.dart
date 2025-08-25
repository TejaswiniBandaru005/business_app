import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(BusinessLocationApp());
}

class BusinessLocationApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Business Location Analyzer',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: Color(0xFF3B82F6),
        accentColor: Color(0xFF8B5CF6),
        scaffoldBackgroundColor: Color(0xFFF8FAFC),
        fontFamily: 'Roboto',
        textTheme: TextTheme(
          headline1: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Color(0xFF1F2937),
          ),
          headline2: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Color(0xFF1F2937),
          ),
          bodyText1: TextStyle(
            fontSize: 16,
            color: Color(0xFF6B7280),
          ),
          bodyText2: TextStyle(
            fontSize: 14,
            color: Color(0xFF6B7280),
          ),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            elevation: 8,
            shadowColor: Colors.black26,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
          ),
        ),
        cardTheme: CardTheme(
          elevation: 4,
          shadowColor: Colors.black12,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
        ),
      ),
      home: HomeScreen(),
    );
  }
}