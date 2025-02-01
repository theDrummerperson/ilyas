'use client';

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, Instagram, ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const HomeClientComponent = () => {
  // Hero Banner State
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

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

        {/* Project Carousel for Mobile View */}
        {isMobile ? (
          <div className="relative flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 p-2 z-10 bg-gray-200 rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-full overflow-hidden">
              <Link href={projects[currentIndex].link} className="block">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].heading} className="rounded-lg w-full" />
                <p className="text-center text-lg font-semibold mt-2">{projects[currentIndex].heading}</p>
              </Link>
            </div>
            <button onClick={nextSlide} className="absolute right-0 p-2 z-10 bg-gray-200 rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="block">
                <img src={project.image} alt={project.heading} className="rounded-lg w-full" />
                <p className="text-center text-lg font-semibold mt-2">{project.heading}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default HomeClientComponent;

