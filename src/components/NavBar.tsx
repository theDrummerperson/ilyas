'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';

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

  const navLinks = [
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
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand/Logo as Link */}
            <Link 
              href="http://www.ilyasabukar.com" 
              className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors duration-200"
            >
              a.Ilyas Abukar
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
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
                    <div className={`absolute left-0 mt-2 w-48 bg-black shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out ${isDropdownOpen ? 'block' : 'hidden'}`}>
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
                    href={link.href}
                    className="text-white hover:text-red-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
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
                    href={link.href}
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
    </>
  );
};

export default NavBar;
