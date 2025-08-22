class UserModel {
  final String id;
  final String name;
  final String email;
  final bool isAdmin;
  final String? profileImage;
  final String bio;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    required this.isAdmin,
    this.profileImage,
    required this.bio,
  });

  UserModel copyWith({
    String? id,
    String? name,
    String? email,
    bool? isAdmin,
    String? profileImage,
    String? bio,
  }) {
    return UserModel(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      isAdmin: isAdmin ?? this.isAdmin,
      profileImage: profileImage ?? this.profileImage,
      bio: bio ?? this.bio,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'isAdmin': isAdmin,
      'profileImage': profileImage,
      'bio': bio,
    };
  }

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'],
      name: json['name'],
      email: json['email'],
      isAdmin: json['isAdmin'] ?? false,
      profileImage: json['profileImage'],
      bio: json['bio'] ?? '',
    );
  }
}