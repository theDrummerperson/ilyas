'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

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

  const navLinks: NavLinkType[] = [
    {
      href: '/about',
      label: 'ABOUT',
    },
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
        { href: '/updates', label: 'UPDATES' },
        { href: '/resume', label: 'RESUME' },
        { href: '/contact', label: 'CONTACT' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const NavLink = ({ href, label, isDropdown, subLinks }: NavLinkType) => {
    const isHovered = hoveredItem === label;

    return (
      <div
        className="relative"
        onMouseEnter={() => setHoveredItem(label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {isDropdown ? (
          <button className="group flex items-center gap-1 py-2 text-sm font-medium text-gray-800">
            <span className="relative">
              {label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 group-hover:w-full"
                initial={false}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.2 }}
              />
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <Link
            href={href || '#'}
            className="group relative py-2 text-sm font-medium text-gray-800"
          >
            <span className="relative">
              {label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 group-hover:w-full"
                initial={false}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </Link>
        )}

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdown && isHovered && subLinks && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-full -translate-x-1/2 transform pt-2"
            >
              <div className="min-w-[200px] rounded-lg bg-white p-2 shadow-xl">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="h-3 w-3 rotate-45 transform bg-white" />
                </div>
                {subLinks.map((subLink) => (
                  <Link
                    key={subLink.label}
                    href={subLink.href}
                    className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50"
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

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="text-xl font-bold text-gray-900">
                <span className="text-red-500">a.</span>
                <span>Ilyas Abukar</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Animated Border Line */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = 'unset';
        }}
        navLinks={navLinks}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

export default NavBar;