'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface LinkItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label, isActive = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={href}
      className="group relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`relative text-gray-400 transition-all duration-200 hover:text-red-600
        ${isActive ? 'text-red-600' : ''}`}
      >
        {label}
        <span 
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400
          transition-all duration-200 ${isHovered || isActive ? 'w-full' : 'w-0'}`}
        />
      </span>
    </Link>
  );
};

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  subLinks: Array<{
    href: string;
    label: string;
  }>;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ 
  label, 
  isOpen, 
  onToggle, 
  subLinks 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="group flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <span 
          className={`relative text-gray-400 transition-all duration-200 hover:text-red-600
          ${isOpen || isHovered ? 'text-red-600' : ''}`}
        >
          {label}
          <span 
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400
            transition-all duration-200 ${isHovered || isOpen ? 'w-full' : 'w-0'}`}
          />
        </span>
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200
          ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && subLinks && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-lg bg-white/90 dark:bg-gray-900/90 
          backdrop-blur-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5"
          role="menu"
        >
          <div className="absolute left-4 -top-2 h-2 w-2 rotate-45 bg-white dark:bg-gray-900" />
          
          <div className="relative z-10 py-1">
            {subLinks.map((subLink, index) => (
              <div
                key={subLink.href}
                className="opacity-0 animate-fadeIn"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <Link
                  href={subLink.href}
                  className="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 
                  transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  role="menuitem"
                >
                  <span className="relative">
                    {subLink.label}
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r 
                    from-red-600 to-red-400 transition-all duration-200 group-hover:w-full" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LinkItem, DropdownTrigger };