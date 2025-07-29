import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function FloatingActionButton({ 
  icon: Icon, 
  onClick, 
  className = '',
  size = 'medium' 
}: FloatingActionButtonProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-14 h-14',
    large: 'w-16 h-16'
  };

  const iconSizes = {
    small: 'h-5 w-5',
    medium: 'h-6 w-6',
    large: 'h-7 w-7'
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center ${className}`}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
}