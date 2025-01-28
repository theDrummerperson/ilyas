'use client';

// components/MobileMenu.tsx


import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

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

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30"
            onClick={onClose}
          />

          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-xs bg-white shadow-lg dark:bg-gray-900"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
              <button onClick={onClose} className="p-2">
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <nav className="p-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.isDropdown ? (
                    <>
                      <button
                        className="flex justify-between w-full text-left text-gray-700 dark:text-gray-300"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="mt-2 pl-4 space-y-2">
                          {link.subLinks?.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                              onClick={onClose}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="block text-gray-700 dark:text-gray-300 hover:text-red-500"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
