import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        relative overflow-hidden 
        rounded-lg border border-gray-200 
        bg-white/50 dark:bg-gray-900/50 
        backdrop-blur-sm 
        shadow-lg 
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};