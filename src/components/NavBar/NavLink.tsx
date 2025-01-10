'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { NavLinkType } from './types';

interface LinkItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label, isActive = false }) => (
  <Link
    href={href}
    className={`group flex items-center text-gray-400 transition-all duration-200 hover:text-red-600 ${
      isActive ? 'text-red-600' : ''
    }`}
  >
    {label}
  </Link>
);

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  subLinks: NavLinkType['subLinks']; // Use the type directly
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ label, isOpen, onToggle, subLinks }) => {
  const [isHovered, setIsHovered] = React.useState(false); // New state variable to track hover state

  return (
    <div className="relative">
      <button
        className={`group flex items-center text-gray-400 transition-all duration-200 hover:text-red-600 ${
          isOpen || isHovered ? 'text-red-600' : '' // Apply hover style when hovered
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)} // Update state on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Update state on mouse leave
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {isOpen &&
        subLinks && ( // Check if subLinks exist before mapping
          <div
            className="absolute left-0 mt-2 w-48 origin-top-left translate-y-0 scale-100 transform rounded-md bg-black opacity-100 shadow-lg transition-all duration-200"
            role="menu"
          >
            {subLinks.map((subLink) => (
              <Link
                key={subLink.href}
                href={subLink.href}
                className="block p-4 text-gray-400 transition-all duration-200 first:rounded-t-md last:rounded-b-md hover:bg-red-600 hover:text-white"
                role="menuitem"
              >
                {subLink.label}
              </Link>
            ))}
          </div>
        )}
    </div>
  );
};

export { LinkItem, DropdownTrigger };
