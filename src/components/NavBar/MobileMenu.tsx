'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Search, Sun, Moon } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{
    href?: string;
    label: string;
    isDropdown?: boolean;
    subLinks?: Array<{
      href: string;
      label: string;
    }>;
  }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
      },
    },
  };

  const linkVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const dropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Menu Panel with Glass Effect */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-md flex-col bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-2xl"
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 p-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="text-xl font-bold" onClick={onClose}>
                  <span className="text-red-500">a.</span>
                  <span className="text-gray-900 dark:text-white">Ilyas Abukar</span>
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Search Bar */}
            <AnimatePresence>
              {isSearchVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 border-b border-gray-100 dark:border-gray-800"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                    />
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Links with Enhanced Styling */}
            <motion.nav className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-6">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.isDropdown ? (
                      <>
                        <motion.button
                          variants={linkVariants}
                          className="group flex w-full items-center justify-between rounded-lg p-3 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                        >
                          <span className="font-medium">{link.label}</span>
                          <motion.div
                            animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="ml-3 border-l-2 border-red-500/20 dark:border-red-500/10 pl-3"
                            >
                              {link.subLinks?.map((subLink) => (
                                <motion.div
                                  key={subLink.label}
                                  whileHover={{ x: 4 }}
                                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                >
                                  <Link
                                    href={subLink.href}
                                    className="block rounded-lg p-3 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                                    onClick={onClose}
                                  >
                                    {subLink.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.div
                        variants={linkVariants}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <Link
                          href={link.href || '#'}
                          className="block rounded-lg p-3 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-500 dark:hover:text-red-400"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>

            {/* Enhanced Footer with Quick Actions */}
            <div className="border-t border-gray-100 dark:border-gray-800 p-6 space-y-4">
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchVisible(!isSearchVisible)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </motion.button>
              </div>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Ilyas O. Abukar
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;