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
  
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white font-sans py-12">
      {/* Gradient Top Border */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
      
      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 md:px-8 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Column: Logo and Social Links */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block text-2xl font-bold tracking-wide">
            <span className="text-red-500">a.</span>
            <span className="text-white">Ilyas Abukar</span>
          </Link>
          <p className="text-md font-medium text-gray-400">Researcher, Theorist, & Artist</p>
          <div className="flex space-x-4"><SocialLinks /></div>
        </motion.div>

        {/* Right Column: Portfolio Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className={`rounded-lg p-4 transition-all duration-300 hover:bg-gray-800/50`}
          >
            <h3 className="text-sm font-medium tracking-wide text-white uppercase">Portfolio</h3>
            <div className="mt-4 space-y-3 flex flex-col">
              {portfolioLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center space-x-3 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <link.icon className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="flex-1">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-8 max-w-6xl mx-auto">
          <p className="text-sm font-medium text-gray-400">© {new Date().getFullYear()} a.Ilyas Abukar. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
          >
            <span>Back to top</span>
            <ChevronUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
