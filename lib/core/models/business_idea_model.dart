enum IdeaStatus { pending, approved, rejected }
enum BusinessCategory { tech, food, retail, health, education, finance, entertainment, other }

class BusinessIdeaModel {
  final String id;
  final String title;
  final String description;
  final BusinessCategory category;
  final String userId;
  final String userName;
  final DateTime createdAt;
  final IdeaStatus status;
  final int upvotes;
  final int downvotes;
  final List<String> images;
  final String? adminNote;

  BusinessIdeaModel({
    required this.id,
    required this.title,
    required this.description,
    required this.category,
    required this.userId,
    required this.userName,
    required this.createdAt,
    this.status = IdeaStatus.pending,
    this.upvotes = 0,
    this.downvotes = 0,
    this.images = const [],
    this.adminNote,
  });

  BusinessIdeaModel copyWith({
    String? id,
    String? title,
    String? description,
    BusinessCategory? category,
    String? userId,
    String? userName,
    DateTime? createdAt,
    IdeaStatus? status,
    int? upvotes,
    int? downvotes,
    List<String>? images,
    String? adminNote,
  }) {
    return BusinessIdeaModel(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      category: category ?? this.category,
      userId: userId ?? this.userId,
      userName: userName ?? this.userName,
      createdAt: createdAt ?? this.createdAt,
      status: status ?? this.status,
      upvotes: upvotes ?? this.upvotes,
      downvotes: downvotes ?? this.downvotes,
      images: images ?? this.images,
      adminNote: adminNote ?? this.adminNote,
    );
  }

  String get categoryName {
    switch (category) {
      case BusinessCategory.tech:
        return 'Technology';
      case BusinessCategory.food:
        return 'Food & Beverage';
      case BusinessCategory.retail:
        return 'Retail';
      case BusinessCategory.health:
        return 'Healthcare';
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

  Color get statusColor {
    switch (status) {
      case IdeaStatus.pending:
        return const Color(0xFFF59E0B);
      case IdeaStatus.approved:
        return const Color(0xFF10B981);
      case IdeaStatus.rejected:
        return const Color(0xFFEF4444);
    }
  }

  String get statusText {
    switch (status) {
      case IdeaStatus.pending:
        return 'Under Review';
      case IdeaStatus.approved:
        return 'Approved';
      case IdeaStatus.rejected:
        return 'Rejected';
    }
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'category': category.index,
      'userId': userId,
      'userName': userName,
      'createdAt': createdAt.toIso8601String(),
      'status': status.index,
      'upvotes': upvotes,
      'downvotes': downvotes,
      'images': images,
      'adminNote': adminNote,
    };
  }

  factory BusinessIdeaModel.fromJson(Map<String, dynamic> json) {
    return BusinessIdeaModel(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      category: BusinessCategory.values[json['category']],
      userId: json['userId'],
      userName: json['userName'],
      createdAt: DateTime.parse(json['createdAt']),
      status: IdeaStatus.values[json['status']],
      upvotes: json['upvotes'] ?? 0,
      downvotes: json['downvotes'] ?? 0,
      images: List<String>.from(json['images'] ?? []),
      adminNote: json['adminNote'],
    );
  }
}