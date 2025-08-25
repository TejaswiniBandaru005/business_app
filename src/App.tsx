import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessTypeSelector from './components/BusinessTypeSelector';
import LocationSearch from './components/LocationSearch';
import AnalysisDashboard from './components/AnalysisDashboard';
import UserSuggestions from './components/UserSuggestions';

function App() {
  const [currentStep, setCurrentStep] = useState<'home' | 'selector' | 'search' | 'analysis' | 'suggestions'>('home');
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleBusinessTypeSelect = (type: string) => {
    setSelectedBusinessType(type);
    setCurrentStep('search');
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setCurrentStep('analysis');
  };

  const handleStartAnalysis = () => {
    setCurrentStep('selector');
  };

  const handleViewSuggestions = () => {
    setCurrentStep('suggestions');
  };

  const handleBackToHome = () => {
    setCurrentStep('home');
    setSelectedBusinessType('');
    setSelectedLocation('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        onBackToHome={handleBackToHome}
        currentStep={currentStep}
        onViewSuggestions={handleViewSuggestions}
      />
      
      {currentStep === 'home' && (
        <Hero onStartAnalysis={handleStartAnalysis} />
      )}
      
      {currentStep === 'selector' && (
        <BusinessTypeSelector onSelectType={handleBusinessTypeSelect} />
      )}
      
      {currentStep === 'search' && (
        <LocationSearch 
          businessType={selectedBusinessType}
          onLocationSelect={handleLocationSelect}
        />
      )}
      
      {currentStep === 'analysis' && (
        <AnalysisDashboard 
          businessType={selectedBusinessType}
          location={selectedLocation}
        />
      )}
      
      {currentStep === 'suggestions' && (
        <UserSuggestions />
      )}
    </div>
  );
}

export default App;