import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../core/providers/auth_provider.dart';
import '../../core/providers/business_provider.dart';
import 'pages/home_page.dart';
import 'pages/submit_idea_page.dart';
import 'pages/my_ideas_page.dart';
import 'pages/profile_page.dart';
import '../../widgets/ai_assistant.dart';

class UserDashboard extends StatefulWidget {
  @override
  _UserDashboardState createState() => _UserDashboardState();
}

class _UserDashboardState extends State<UserDashboard> {
  int _currentIndex = 0;
  bool _showAI = false;

  final List<Widget> _pages = [
    HomePage(),
    SubmitIdeaPage(),
    MyIdeasPage(),
    ProfilePage(),
  ];

  @override
  void initState() {
    super.initState();
    // Load user ideas when dashboard opens
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final businessProvider = Provider.of<BusinessProvider>(context, listen: false);
    if (authProvider.user != null) {
      businessProvider.loadUserIdeas(authProvider.user!.id);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          IndexedStack(
            index: _currentIndex,
            children: _pages,
          ),
          
          // AI Assistant
          if (_showAI)
            AIAssistant(
              onClose: () => setState(() => _showAI = false),
            ),
        ],
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [
              Color(0xFF0F172A),
              Color(0xFF1E1B4B),
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
              offset: const Offset(0, -5),
            ),
          ],
        ),
        child: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) => setState(() => _currentIndex = index),
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.transparent,
          elevation: 0,
          selectedItemColor: const Color(0xFF8B5CF6),
          unselectedItemColor: Colors.white60,
          selectedLabelStyle: const TextStyle(fontWeight: FontWeight.bold),
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.add_circle),
              label: 'Submit',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.lightbulb),
              label: 'My Ideas',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: 'Profile',
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _showAI = true),
        backgroundColor: const Color(0xFF8B5CF6),
        child: const Icon(Icons.smart_toy, color: Colors.white),
      ),
    );
  }
}