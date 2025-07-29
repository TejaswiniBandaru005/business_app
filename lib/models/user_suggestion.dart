class UserSuggestion {
  final int id;
  final String user;
  final String avatar;
  final String suggestion;
  final int likes;
  final int replies;
  final int rating;
  final String businessType;
  final String timeAgo;

  UserSuggestion({
    required this.id,
    required this.user,
    required this.avatar,
    required this.suggestion,
    required this.likes,
    required this.replies,
    required this.rating,
    required this.businessType,
    required this.timeAgo,
  });
}