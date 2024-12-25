'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react'; // We only need the X icon now

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is opened/closed
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/blog', label: 'UPDATES' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/resume', label: 'RESUME' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand/Logo */}
            <div className="text-2xl font-bold text-red-600">
              a.Ilyas Abukar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-white hover:text-red-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-red-600 transition-colors duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : (
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 p-2 text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl font-light tracking-wider hover:text-red-500 transition-colors duration-200"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
