import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

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
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "UPDATES" },
    {
      label: "PORTFOLIO",
      isDropdown: true,
      subLinks: [
        { href: "/Portfolio/projects", label: "PROJECTS" },
        { href: "/Portfolio/writing", label: "WRITING" },
        { href: "/Portfolio/photography", label: "PHOTOGRAPHY" },
      ],
    },
    { href: "/resume", label: "RESUME" },
    { href: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
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
                className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full"
                initial={false}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.2 }}
              />
            </span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <Link href={href || '#'} className="group relative py-2 text-sm font-medium text-gray-800">
            <span className="relative">
              {label}
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full"
                initial={false}
                animate={{ width: isHovered ? "100%" : "0%" }}
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
              className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2"
            >
              <div className="bg-white rounded-lg shadow-xl p-2 min-w-[200px]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-white transform rotate-45" />
                </div>
                {subLinks.map((subLink) => (
                  <Link
                    key={subLink.label}
                    href={subLink.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/80 shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="text-xl font-bold text-gray-900">
                <span className="text-red-500">a.</span>
                <span>Ilyas Abukar</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
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
          document.body.style.overflow = "unset";
        }} 
        navLinks={navLinks}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

export default NavBar;