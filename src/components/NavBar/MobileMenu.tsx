'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <Link href="/" className="text-xl font-bold" onClick={onClose}>
                <span className="text-red-500">a.</span>
                <span className="text-gray-900">Ilyas Abukar</span>
              </Link>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Navigation Links */}
            <motion.nav className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-6">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.isDropdown ? (
                      <>
                        <motion.button
                          variants={linkVariants}
                          className="group flex w-full items-center justify-between rounded-lg p-3 text-left text-gray-700 hover:bg-gray-50"
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                        >
                          <span className="font-medium">{link.label}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                              openDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        </motion.button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="ml-3 border-l-2 border-gray-100 pl-3"
                            >
                              {link.subLinks?.map((subLink) => (
                                <Link
                                  key={subLink.label}
                                  href={subLink.href}
                                  className="block rounded-lg p-3 text-gray-600 hover:bg-gray-50"
                                  onClick={onClose}
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.div variants={linkVariants}>
                        <Link
                          href={link.href || '#'}
                          className="block rounded-lg p-3 font-medium text-gray-700 hover:bg-gray-50"
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

            {/* Footer */}
            <div className="border-t border-gray-100 p-6">
              <div className="text-center text-sm text-gray-500">
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
