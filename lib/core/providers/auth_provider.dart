import 'package:flutter/foundation.dart';
import '../models/user_model.dart';

class AuthProvider with ChangeNotifier {
  UserModel? _user;
  bool _isLoading = false;

  UserModel? get user => _user;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _user != null;

  Future<void> signIn(String email, String password) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 2));
      
      // Mock user data - in real app, this would come from your backend
      if (email == 'admin@bizsuggest.com') {
        _user = UserModel(
          id: '1',
          name: 'Admin User',
          email: email,
          isAdmin: true,
          profileImage: null,
          bio: 'System Administrator',
        );
      } else {
        _user = UserModel(
          id: '2',
          name: 'John Doe',
          email: email,
          isAdmin: false,
          profileImage: null,
          bio: 'Entrepreneur and innovator',
        );
      }
      
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to sign in: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> signUp(String email, String password, String name) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate API call
      await Future.delayed(const Duration(seconds: 2));
      
      _user = UserModel(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        name: name,
        email: email,
        isAdmin: false,
        profileImage: null,
        bio: 'New entrepreneur',
      );
      
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to sign up: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> socialLogin(String provider) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Simulate social login
      await Future.delayed(const Duration(seconds: 1));
      
      _user = UserModel(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        name: '$provider User',
        email: 'user@$provider.com',
        isAdmin: false,
        profileImage: null,
        bio: 'Signed up with $provider',
      );
      
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to sign in with $provider: ${e.toString()}');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> signOut() async {
    _user = null;
    notifyListeners();
  }

  Future<void> updateProfile(String name, String bio) async {
    if (_user != null) {
      _user = _user!.copyWith(name: name, bio: bio);
      notifyListeners();
    }
  }
}