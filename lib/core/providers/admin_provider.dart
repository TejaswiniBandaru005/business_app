import 'package:flutter/foundation.dart';
import '../models/business_idea_model.dart';
import '../models/user_model.dart';

class AdminProvider with ChangeNotifier {
  List<BusinessIdeaModel> _pendingIdeas = [];
  List<UserModel> _users = [];
  Map<String, int> _categoryStats = {};
  bool _isLoading = false;

  List<BusinessIdeaModel> get pendingIdeas => _pendingIdeas;
  List<UserModel> get users => _users;
  Map<String, int> get categoryStats => _categoryStats;
  bool get isLoading => _isLoading;

  int get totalSubmissions => _pendingIdeas.length + 15; // Mock approved/rejected
  int get pendingReviews => _pendingIdeas.length;
  int get approvedIdeas => 8; // Mock data
  int get rejectedIdeas => 3; // Mock data

  AdminProvider() {
    _loadMockData();
  }

  void _loadMockData() {
    _pendingIdeas = [
      BusinessIdeaModel(
        id: '2',
        title: 'Sustainable Food Delivery Service',
        description: 'A food delivery platform that focuses on eco-friendly packaging and locally sourced ingredients, reducing carbon footprint.',
        category: BusinessCategory.food,
        userId: '3',
        userName: 'Jane Smith',
        createdAt: DateTime.now().subtract(const Duration(days: 1)),
        status: IdeaStatus.pending,
        upvotes: 32,
        downvotes: 1,
      ),
      BusinessIdeaModel(
        id: '4',
        title: 'Smart Home Energy Management',
        description: 'An IoT solution that optimizes home energy consumption by learning usage patterns and automatically adjusting devices.',
        category: BusinessCategory.tech,
        userId: '5',
        userName: 'Sarah Wilson',
        createdAt: DateTime.now().subtract(const Duration(hours: 6)),
        status: IdeaStatus.pending,
        upvotes: 19,
        downvotes: 0,
      ),
    ];

    _users = [
      UserModel(
        id: '2',
        name: 'John Doe',
        email: 'john@example.com',
        isAdmin: false,
        bio: 'Entrepreneur and innovator',
      ),
      UserModel(
        id: '3',
        name: 'Jane Smith',
        email: 'jane@example.com',
        isAdmin: false,
        bio: 'Sustainability advocate',
      ),
      UserModel(
        id: '4',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        isAdmin: false,
        bio: 'Fitness enthusiast',
      ),
    ];

    _categoryStats = {
      'Technology': 5,
      'Food & Beverage': 3,
      'Healthcare': 2,
      'Education': 2,
      'Finance': 1,
      'Retail': 1,
      'Entertainment': 1,
    };

    notifyListeners();
  }

  Future<void> reviewIdea(String ideaId, IdeaStatus status, String? note) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 1));

      final ideaIndex = _pendingIdeas.indexWhere((idea) => idea.id == ideaId);
      if (ideaIndex != -1) {
        final idea = _pendingIdeas[ideaIndex];
        final updatedIdea = idea.copyWith(
          status: status,
          adminNote: note,
        );
        
        _pendingIdeas.removeAt(ideaIndex);
        // In a real app, you'd move this to approved/rejected lists
      }

      notifyListeners();
    } catch (e) {
      throw Exception('Failed to review idea: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> banUser(String userId) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 1));

      // In a real app, you'd update the user's status
      final userIndex = _users.indexWhere((user) => user.id == userId);
      if (userIndex != -1) {
        // Update user status or remove from active users
      }

      notifyListeners();
    } catch (e) {
      throw Exception('Failed to ban user: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> promoteToAdmin(String userId) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 1));

      final userIndex = _users.indexWhere((user) => user.id == userId);
      if (userIndex != -1) {
        _users[userIndex] = _users[userIndex].copyWith(isAdmin: true);
      }

      notifyListeners();
    } catch (e) {
      throw Exception('Failed to promote user: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  List<Map<String, dynamic>> getSubmissionTrends() {
    // Mock data for chart
    return [
      {'day': 'Mon', 'submissions': 5},
      {'day': 'Tue', 'submissions': 8},
      {'day': 'Wed', 'submissions': 12},
      {'day': 'Thu', 'submissions': 7},
      {'day': 'Fri', 'submissions': 15},
      {'day': 'Sat', 'submissions': 10},
      {'day': 'Sun', 'submissions': 6},
    ];
  }
}