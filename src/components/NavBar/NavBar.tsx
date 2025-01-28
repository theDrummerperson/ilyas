"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null); // Timeout to debounce dropdown close

  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/Portfolio/projects", label: "PROJECTS" },
    { href: "/Portfolio/photography", label: "PHOTOGRAPHY" },
    { href: "/Portfolio/writing", label: "WRITING" },
    { href: "/contact", label: "CONTACT" },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay to allow the user to move between the trigger and submenu
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md dark:bg-gray-900">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
            aria-label="Homepage"
          >
            <span className="text-red-500">a.</span>
            Ilyas Abukar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <Link
              key={link.label}
              href={link.href || "#"}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-500"
              >
              {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="block md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navLinks={navLinks}
        />
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

export default NavBar;
