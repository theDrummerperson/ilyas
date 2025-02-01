'use client';

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, Instagram, ArrowUpRight } from "lucide-react";

const HomeClientComponent = () => {
  // Hero Banner State
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Content definition
  const heroContent = {
    heading: "Knowledge. Culture. Technology.",
    subheading: "",
    backgroundImage: "/saiilyas2.jpg",
    link: "/about",
    ariaLabel: "Main hero section about Knowledge, Culture, and Technology",
  };

  const projects = [
    {
      heading: "Can We Design for Black Love?",
      image: "/LoveJones.jpg",
      link: "https://ilyasabukar.substack.com/p/can-we-design-for-black-love?r=cxq07",
    },
    {
      heading: "Night of African Arts and Culture",
      image: "/kig-header2.JPG",
      link: "/Portfolio/projects/kigoma-erie",
    },
    {
      heading: "Photography",
      image: "/binto.jpg",
      link: "/Portfolio/photography",
    },
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        role="region"
        aria-label="Hero banner slideshow"
      >
        {/* Background Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroContent.backgroundImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${heroContent.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
          <Link 
            href={heroContent.link}
            className="group block"
            aria-label={heroContent.ariaLabel}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white shadow-black 
                       group-hover:scale-105 transition-all duration-300"
              layoutId="heading"
            >
              {heroContent.heading}
            </motion.h1>
          </Link>
        </motion.div>
      </section>

      {/* Project Feed Section */}
      <section className="w-full max-w-4xl mx-auto px-4 pb-16">
        {/* Header with gradient line */}
        <div className="relative pb-8">
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
          <div className="flex items-center justify-between pt-8">
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-gray-900">
                <span className="text-red-500">a.</span>Recent Updates
              </h2>
            </div>
            <Link 
              href="/Portfolio"
              className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={project.link} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-lg font-semibold text-gray-900">{project.heading}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeClientComponent;
