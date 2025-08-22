import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import OnboardingScreens from './components/OnboardingScreens';
import AuthScreen from './components/AuthScreen';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import AIAssistant from './components/AIAssistant';

type AppState = 'splash' | 'onboarding' | 'auth' | 'user' | 'admin';
type UserRole = 'user' | 'admin';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('splash');
  const [userRole, setUserRole] = useState<UserRole>('user');
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    // Simulate splash screen duration
    const timer = setTimeout(() => {
      setCurrentState('onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    setCurrentState('auth');
  };

  const handleAuthSuccess = (role: UserRole) => {
    setUserRole(role);
    setCurrentState(role);
  };

  const handleLogout = () => {
    setCurrentState('auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <AnimatePresence mode="wait">
        {currentState === 'splash' && (
          <SplashScreen key="splash" />
        )}
        
        {currentState === 'onboarding' && (
          <OnboardingScreens 
            key="onboarding" 
            onComplete={handleOnboardingComplete} 
          />
        )}
        
        {currentState === 'auth' && (
          <AuthScreen 
            key="auth" 
            onAuthSuccess={handleAuthSuccess} 
          />
        )}
        
        {currentState === 'user' && (
          <UserDashboard 
            key="user" 
            onLogout={handleLogout}
            onShowAI={() => setShowAI(true)}
          />
        )}
        
        {currentState === 'admin' && (
          <AdminDashboard 
            key="admin" 
            onLogout={handleLogout}
            onShowAI={() => setShowAI(true)}
          />
        )}
      </AnimatePresence>

      {/* AI Assistant Overlay */}
      <AIAssistant 
        isOpen={showAI} 
        onClose={() => setShowAI(false)} 
      />
    </div>
  );
}

export default App;