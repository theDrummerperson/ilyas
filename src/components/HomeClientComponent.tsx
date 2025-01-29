'use client';


import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, Instagram, ArrowUpRight } from "lucide-react";

const HomeClientComponent = () => {
  // Hero Banner State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Content definitions
  const heroContent = {
    heading: "Knowledge. Culture. Technology.",
    subheading: "",
    backgroundImage: "/hero5.jpg",
    link: "/about",
    ariaLabel: "Main hero section about Knowledge, Culture, and Technology",
  };

  const announcementContent = [
    {
      heading: "Can We Design for Black Love?",
      subheading: "Black love is a beautiful experience, but it is also complicated today.",
      backgroundImage: "/LoveJones.jpg",
      link: "/Portfolio/writing",
      ariaLabel: "Article about designing for Black love",
    },
    {
      heading: "African Arts and Culture on NYE 2024",
      subheading: "Erie African Arts Gallery brought African culture to downtown Erie!",
      backgroundImage: "/kig-1.jpg",
      link: "/Portfolio/projects/kigoma-erie",
      ariaLabel: "News about African Arts and Culture event",
    },
    {
      heading: "My Life in Images",
      subheading: "See the world how I see it.",
      backgroundImage: "/binto.jpg",
      link: "/Portfolio/photography",
      ariaLabel: "Photography portfolio section",
    },
  ];

  // Navigation logic
  const navigateSlide = useCallback((direction: string) => {
    setCurrentSlide((prev) => {
      const totalSlides = announcementContent.length + 1;
      if (direction === 'next') {
        return prev === totalSlides - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? totalSlides - 1 : prev - 1;
    });
  }, [announcementContent.length]);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      navigateSlide('next');
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, navigateSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateSlide('prev');
      if (e.key === 'ArrowRight') navigateSlide('next');
      if (e.key === 'Space') setIsPaused(p => !p);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateSlide]);

  const getBackgroundImage = () => {
    return currentSlide === 0
      ? heroContent.backgroundImage
      : announcementContent[currentSlide - 1]?.backgroundImage;
  };

  const content = currentSlide === 0 ? heroContent : announcementContent[currentSlide - 1];

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
            key={getBackgroundImage()}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${getBackgroundImage()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Navigation Arrows */}
        <AnimatePresence>
          {isHovering && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute left-4 z-20 text-white p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
                onClick={() => navigateSlide('prev')}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-4 z-20 text-white p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
                onClick={() => navigateSlide('next')}
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
          <Link 
            href={content.link}
            className="group block"
            aria-label={content.ariaLabel}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white shadow-black 
                       group-hover:scale-105 transition-all duration-300"
              layoutId="heading"
            >
              {content.heading}
            </motion.h1>
          </Link>

          {/* Subheading */}
          {content.subheading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative mt-6 bg-white/90 p-3 rounded-md shadow-md mx-auto max-w-md 
                       backdrop-blur-sm hover:bg-white/95 transition-all"
            >
              <p className="text-lg sm:text-xl text-black font-medium leading-relaxed tracking-wide">
                {content.subheading}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation Controls */}
        <div className="absolute bottom-16 flex items-center justify-center w-full space-x-4 z-10">
          <motion.button
            onClick={() => setIsPaused(!isPaused)}
            className="mr-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <Play className="w-4 h-4 text-white" />
            ) : (
              <Pause className="w-4 h-4 text-white" />
            )}
          </motion.button>
          
          {[...Array(announcementContent.length + 1)].map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
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
              href="https://instagram.com/yourusername"
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
          {announcementContent.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={post.link}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100">
                  <img
                    src={post.backgroundImage}
                    alt={post.heading}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {post.heading}
                      </p>
                      <span className="text-white/70 text-xs mt-1 block">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeClientComponent;