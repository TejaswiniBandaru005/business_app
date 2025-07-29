import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MaterialButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function MaterialButton({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  disabled = false,
  fullWidth = false,
  className = ''
}: MaterialButtonProps) {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:shadow-xl',
    outlined: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50',
    text: 'text-blue-600 hover:bg-blue-50'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </button>
  );
}