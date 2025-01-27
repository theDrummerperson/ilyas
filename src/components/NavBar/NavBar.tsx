"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinkType {
  href?: string;
  label: string;
  isDropdown?: boolean;
  subLinks?: Array<{
    href: string;
    label: string;
  }>;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Enhanced navigation items with badge support
  const navLinks: NavLinkType[] = [
 
    {
      href: '/Portfolio/projects',
      label: 'PROJECTS',
    },
    {
      href: '/Portfolio/photography',
      label: 'PHOTOGRAPHY',
    },
    {
      href: '/Portfolio/writing',
      label: 'WRITING',
    },
    {
      label: 'MORE',
      isDropdown: true,
      subLinks: [
        { href: '/resume', label: 'RESUME' },
        { href: '/contact', label: 'CONTACT' },
      ],
    },
  ];

  const NavLink = ({ href, label, isDropdown, subLinks }: NavLinkType) => {
    const isHovered = hoveredItem === label;

    return (
      <div
        className="relative group"
        onMouseEnter={() => setHoveredItem(label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {isDropdown ? (
          <button className="group flex items-center gap-1 py-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            <span className="relative">
              {label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500"
                initial={false}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.2 }}
              />
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-all duration-300 ${isHovered ? 'rotate-180 text-red-500' : ''}`}
            />
          </button>
        ) : (
          <Link
            href={href || '#'}
            className="group relative py-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            <span className="relative">
              {label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500"
                initial={false}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </Link>
        )}

        {/* Enhanced Dropdown with Blur Effect */}
        <AnimatePresence>
          {isDropdown && isHovered && subLinks && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-full -translate-x-1/2 transform pt-2 z-50"
            >
              <div className="min-w-[200px] rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-2 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="h-3 w-3 rotate-45 transform bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg ring-1 ring-gray-200 dark:ring-gray-800" />
                </div>
                {subLinks.map((subLink) => (
                  <Link
                    key={subLink.label}
                    href={subLink.href}
                    className="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-500 dark:hover:text-red-400"
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Search Component
  const SearchBar = () => (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: 'auto' }}
      exit={{ opacity: 0, width: 0 }}
      className="relative mx-4"
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </motion.div>
  );

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md' 
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with enhanced animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                <span className="text-red-500">a.</span>
                <span>Ilyas Abukar</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation with Search and Theme Toggle */}
            <div className="hidden items-center gap-6 md:flex">
              <AnimatePresence>
                {isSearchActive && <SearchBar />}
              </AnimatePresence>
              
              {navLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}

              <button
                onClick={() => setIsSearchActive(!isSearchActive)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Menu Button with enhanced animation */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Animated Border Line */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </nav>

      {/* Spacer */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

export default NavBar;