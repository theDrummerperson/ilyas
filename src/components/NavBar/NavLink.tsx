"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavLinkType } from "/Users/ilyasabukar/Development/my-project/src/components/NavBar/types.ts";

interface NavLinkProps extends NavLinkType {
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  subLinks?: { href: string; label: string }[];
}

const NavLink = ({
  href,
  label,
  isDropdown,
  subLinks,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavLinkProps) => {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={isDropdown ? "navigation" : undefined}
    >
      {href ? (
        <Link
          href={href}
          className={`text-gray-400 hover:text-red-600 transition-all duration-200
            flex items-center group ${isActive ? "text-red-600" : ""}`}
        >
          {label}
          {isDropdown && (
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform duration-200
                ${isActive ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          )}
        </Link>
      ) : (
        <button
          className={`text-gray-400 hover:text-red-600 transition-all duration-200
            flex items-center group ${isActive ? "text-red-600" : ""}`}
          aria-expanded={isActive}
          aria-haspopup="true"
        >
          {label}
          <ChevronDown
            className={`ml-1 w-4 h-4 transition-transform duration-200
              ${isActive ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}

      {isDropdown && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg
            transition-all duration-200 transform origin-top-left
            ${isActive
          ? "opacity-100 visible translate-y-0 scale-100"
          : "opacity-0 invisible -translate-y-2 scale-95"}`}
          role="menu"
        >
          {subLinks?.map((subLink) => (
            <Link
              key={subLink.href}
              href={subLink.href}
              className="block p-4 text-gray-400 hover:bg-red-600 hover:text-white
                transition-all duration-200 first:rounded-t-md last:rounded-b-md"
              role="menuitem"
              onClick={onMouseLeave}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
