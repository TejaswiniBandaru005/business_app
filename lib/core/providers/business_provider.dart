import 'package:flutter/foundation.dart';
import '../models/business_idea_model.dart';

class BusinessProvider with ChangeNotifier {
  List<BusinessIdeaModel> _ideas = [];
  List<BusinessIdeaModel> _userIdeas = [];
  bool _isLoading = false;

  List<BusinessIdeaModel> get ideas => _ideas;
  List<BusinessIdeaModel> get userIdeas => _userIdeas;
  bool get isLoading => _isLoading;

  List<BusinessIdeaModel> get trendingIdeas {
    final sorted = List<BusinessIdeaModel>.from(_ideas);
    sorted.sort((a, b) => (b.upvotes - b.downvotes).compareTo(a.upvotes - a.downvotes));
    return sorted.take(10).toList();
  }

  List<BusinessIdeaModel> get featuredIdeas {
    return _ideas.where((idea) => idea.status == IdeaStatus.approved).take(5).toList();
  }

  BusinessProvider() {
    _loadMockData();
  }

  void _loadMockData() {
    _ideas = [
      BusinessIdeaModel(
        id: '1',
        title: 'AI-Powered Personal Shopping Assistant',
        description: 'An AI assistant that learns your preferences and helps you shop online more efficiently, finding the best deals and products that match your style.',
        category: BusinessCategory.tech,
        userId: '2',
        userName: 'John Doe',
        createdAt: DateTime.now().subtract(const Duration(days: 2)),
        status: IdeaStatus.approved,
        upvotes: 45,
        downvotes: 3,
      ),
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
        id: '3',
        title: 'Virtual Reality Fitness Studio',
        description: 'A VR fitness experience that makes working out fun and engaging with immersive environments and gamification.',
        category: BusinessCategory.health,
        userId: '4',
        userName: 'Mike Johnson',
        createdAt: DateTime.now().subtract(const Duration(hours: 12)),
        status: IdeaStatus.approved,
        upvotes: 28,
        downvotes: 2,
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
      BusinessIdeaModel(
        id: '5',
        title: 'Personalized Learning Platform',
        description: 'An adaptive learning platform that creates personalized curricula based on individual learning styles and pace.',
        category: BusinessCategory.education,
        userId: '6',
        userName: 'David Brown',
        createdAt: DateTime.now().subtract(const Duration(hours: 3)),
        status: IdeaStatus.approved,
        upvotes: 41,
        downvotes: 4,
      ),
    ];
    notifyListeners();
  }

  Future<void> submitIdea(BusinessIdeaModel idea) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 2));
      
      _ideas.insert(0, idea);
      _userIdeas.insert(0, idea);
      
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to submit idea: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> voteIdea(String ideaId, bool isUpvote) async {
    final ideaIndex = _ideas.indexWhere((idea) => idea.id == ideaId);
    if (ideaIndex != -1) {
      final idea = _ideas[ideaIndex];
      _ideas[ideaIndex] = idea.copyWith(
        upvotes: isUpvote ? idea.upvotes + 1 : idea.upvotes,
        downvotes: !isUpvote ? idea.downvotes + 1 : idea.downvotes,
      );
      notifyListeners();
    }
  }

  Future<void> loadUserIdeas(String userId) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 1));
      
      _userIdeas = _ideas.where((idea) => idea.userId == userId).toList();
      
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to load user ideas: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  List<BusinessIdeaModel> getIdeasByCategory(BusinessCategory category) {
    return _ideas.where((idea) => idea.category == category).toList();
  }

  List<BusinessIdeaModel> searchIdeas(String query) {
    if (query.isEmpty) return _ideas;
    
    return _ideas.where((idea) =>
      idea.title.toLowerCase().contains(query.toLowerCase()) ||
      idea.description.toLowerCase().contains(query.toLowerCase())
    ).toList();
  }
}