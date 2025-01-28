'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content for the hero banner
  const heroContent = {
    heading: "Knowledge. Culture. Technology.",
    subheading: "Hating from outside the club.",
    backgroundImage: "/hero5.jpg",
    link: "/about",
  };

  // Announcements or preview content
  const announcementContent = [
    {
      heading: "Can We Design for Black Love?",
      subheading: "Black love is a beautiful experience, but it is also complicated today.",
      backgroundImage: "/LoveJones.jpg",
      link: "/Portfolio/writing",
    },
    {
      heading: "African Arts and Culture on NYE 2024",
      subheading: "Erie African Arts Gallery brought African culture to downtown Erie!.",
      backgroundImage: "/kig-1.jpg",
      link: "/Portfolio/projects/kigoma-erie",
    },
    {
      heading: "My Life in Images",
      subheading: "See the world how I see it.",
      backgroundImage: "/binto.jpg",
      link: "/Portfolio/photography",
    },
  ];

  // Auto-switch slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === announcementContent.length ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [announcementContent]);

  // Get background image dynamically
  const getBackgroundImage = () => {
    return currentSlide === 0
      ? heroContent.backgroundImage
      : announcementContent[currentSlide - 1]?.backgroundImage;
  };

  // Get current content dynamically
  const content = currentSlide === 0 ? heroContent : announcementContent[currentSlide - 1];

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={getBackgroundImage()} // Triggers animation when image changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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

      {/* Gradient Overlay at the Bottom for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl px-6"
      >
        {/* Heading as a clickable link */}
        <Link href={content.link}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white shadow-black hover:underline hover:scale-105 transition-all duration-300">
            {content.heading}
          </h1>
        </Link>

        {/* Subheading - White Background, Black Text, and Reduced Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-6 bg-white/90 p-3 rounded-md shadow-md mx-auto max-w-md"
        >
          <p className="text-lg sm:text-xl text-black font-medium leading-relaxed tracking-wide opacity-90">
            {content.subheading}
          </p>
        </motion.div>
      </motion.div>

      {/* Navigation Dots - Lowered for Better Balance */}
      <div className="absolute bottom-16 flex items-center justify-center w-full space-x-4 z-10">
        {[...Array(announcementContent.length + 1)].map((_, index) => (
          <motion.button
            key={`dot-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-5 w-5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white shadow-lg transform scale-125"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
