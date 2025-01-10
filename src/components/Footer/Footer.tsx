'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Code, Newspaper, Camera, ArrowUpRight, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const portfolioLinks = [
    { href: '/Portfolio/projects', label: 'PROJECTS', icon: Code },
    { href: '/Portfolio/writing', label: 'WRITING', icon: Newspaper },
    { href: '/Portfolio/photography', label: 'PHOTOGRAPHY', icon: Camera },
    { href: '/resume', label: 'RESUME', icon: Newspaper },
  ];

  const connectLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full bg-gradient-to-b from-black to-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <div className="pb-12 pt-16">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <motion.div
              className="col-span-12 space-y-6 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <Link href="/" className="inline-block text-2xl font-bold">
                  <span className="text-red-500">a.</span>
                  <span className="text-white">Ilyas Abukar</span>
                </Link>
                <p className="text-lg text-gray-400">Designer, Writer, & Artist</p>
                <div className="pt-4">
                  <SocialLinks />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-span-6 space-y-6 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className={`space-y-4 rounded-lg p-4 transition-colors duration-300 ${
                  hoveredSection === 'portfolio' ? 'bg-gray-800/50' : ''
                }`}
                onMouseEnter={() => setHoveredSection('portfolio')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <h3 className="text-lg font-semibold tracking-wider text-white">PORTFOLIO</h3>
                <div className="space-y-3">
                  {portfolioLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-span-6 space-y-6 md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className={`space-y-4 rounded-lg p-4 transition-colors duration-300 ${
                  hoveredSection === 'connect' ? 'bg-gray-800/50' : ''
                }`}
                onMouseEnter={() => setHoveredSection('connect')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <h3 className="text-lg font-semibold tracking-wider text-white">CONNECT</h3>
                <div className="space-y-3">
                  {connectLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} a.Ilyas Abukar. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 transition-colors duration-200 hover:text-white"
            >
              <span className="text-sm">Back to top</span>
              <ChevronUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
