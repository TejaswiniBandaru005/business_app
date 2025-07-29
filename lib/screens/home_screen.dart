import 'package:flutter/material.dart';
import '../widgets/gradient_background.dart';
import '../widgets/feature_card.dart';
import '../widgets/stats_row.dart';
import 'business_type_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GradientBackground(
        child: SafeArea(
          child: SingleChildScrollView(
            padding: EdgeInsets.all(20),
            child: Column(
              children: [
                SizedBox(height: 40),
                // App Logo and Title
                Container(
                  width: 100,
                  height: 100,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(24),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black26,
                        blurRadius: 12,
                        offset: Offset(0, 6),
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.location_on,
                    size: 50,
                    color: Colors.white,
                  ),
                ),
                SizedBox(height: 24),
                
                // Title
                Text(
                  'Find Your Perfect',
                  style: Theme.of(context).textTheme.headline1,
                  textAlign: TextAlign.center,
                ),
                ShaderMask(
                  shaderCallback: (bounds) => LinearGradient(
                    colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                  ).createShader(bounds),
                  child: Text(
                    'Business Location',
                    style: Theme.of(context).textTheme.headline1?.copyWith(
                      color: Colors.white,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                SizedBox(height: 16),
                
                // Subtitle
                Text(
                  'Discover the best spots for your business with AI-powered location analysis and competitor insights.',
                  style: Theme.of(context).textTheme.bodyText1?.copyWith(
                    fontSize: 18,
                    height: 1.5,
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 32),
                
                // Start Analysis Button
                Container(
                  width: double.infinity,
                  height: 60,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                    ),
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      BoxShadow(
                        color: Color(0xFF3B82F6).withOpacity(0.3),
                        blurRadius: 12,
                        offset: Offset(0, 6),
                      ),
                    ],
                  ),
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => BusinessTypeScreen(),
                        ),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      primary: Colors.transparent,
                      shadowColor: Colors.transparent,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                      ),
                    ),
                    child: Text(
                      'Start Location Analysis',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 48),
                
                // Features
                FeatureCard(
                  icon: Icons.trending_up,
                  title: 'Profit Analysis',
                  description: 'Get insights on potential revenue and market opportunities',
                  color: Colors.green,
                ),
                SizedBox(height: 16),
                FeatureCard(
                  icon: Icons.people,
                  title: 'Competitor Mapping',
                  description: 'Analyze competition density and market saturation',
                  color: Colors.orange,
                ),
                SizedBox(height: 16),
                FeatureCard(
                  icon: Icons.search,
                  title: 'Property Search',
                  description: 'Find vacant shops and rental opportunities nearby',
                  color: Colors.purple,
                ),
                SizedBox(height: 48),
                
                // Stats
                StatsRow(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}