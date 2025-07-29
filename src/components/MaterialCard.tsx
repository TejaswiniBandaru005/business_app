import React from 'react';

interface MaterialCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: 'low' | 'medium' | 'high';
}

export default function MaterialCard({ children, className = '', onClick, elevation = 'medium' }: MaterialCardProps) {
  const elevationClasses = {
    low: 'shadow-sm',
    medium: 'shadow-md hover:shadow-lg',
    high: 'shadow-lg hover:shadow-xl'
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 transition-all duration-300 ${elevationClasses[elevation]} ${onClick ? 'cursor-pointer active:scale-95' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}