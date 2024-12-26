'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';

interface NavLink {
  href?: string;
  label: string;
  isDropdown?: boolean;
  subLinks?: { href: string; label: string; }[];
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  const navLinks: NavLink[] = [
    { href: '/about', label: 'ABOUT' },
    { href: '/blog', label: 'UPDATES' },
    { 
      label: 'PORTFOLIO',
      isDropdown: true,
      subLinks: [
        { href: '/portfolio/writing', label: 'WRITING' },
        { href: '/portfolio/photography', label: 'PHOTOGRAPHY' }
      ]
    },
    { href: '/resume', label: 'RESUME' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand/Logo */}
            <Link 
              href="/"
              className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors duration-200"
            >
              a.Ilyas Abukar
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                link.isDropdown ? (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center text-white hover:text-red-600 transition-colors duration-200">
                      {link.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors duration-200"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={link.href}
                    href={link.href!}
                    className="text-white hover:text-red-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white hover:text-red-600 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden">
            <div className="flex flex-col items-center justify-center h-full">
              <button
                onClick={toggleMenu}
                className="absolute top-5 right-5 p-2 text-white hover:text-red-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  link.isDropdown ? (
                    <div key={index} className="flex flex-col items-center space-y-4">
                      <span className="text-white text-2xl font-light tracking-wider">
                        {link.label}
                      </span>
                      <div className="flex flex-col items-center space-y-4">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="text-white text-xl font-light tracking-wider hover:text-red-500 transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href!}
                      className="text-white text-2xl font-light tracking-wider hover:text-red-500 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Add padding to account for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default NavBar;