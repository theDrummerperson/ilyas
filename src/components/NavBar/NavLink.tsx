"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavLinkType } from "../types"; // CORRECT - Relative import (parent directory)

interface LinkItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label, isActive }) => (
  <Link
    href={href}
    className={`text-gray-400 hover:text-red-600 transition-all duration-200 flex items-center group ${isActive ? "text-red-600" : ""}`}
  >
    {label}
  </Link>
);

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  subLinks: { href: string; label: string }[];
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ label, isOpen, onToggle, subLinks }) => (
  <div className="relative">
    <button
      className={`text-gray-400 hover:text-red-600 transition-all duration-200 flex items-center group ${isOpen ? "text-red-600" : ""}`}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={onToggle}
    >
      {label}
      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg transition-all duration-200 transform origin-top-left opacity-100 translate-y-0 scale-100" role="menu">
        {subLinks.map((subLink) => (
          <Link
            key={subLink.href}
            href={subLink.href}
            className="block p-4 text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200 first:rounded-t-md last:rounded-b-md"
            role="menuitem"
          >
            {subLink.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export { LinkItem, DropdownTrigger };


