"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  location: string;
}

const projects: Project[] = [
  { 
    id: "feed-residency", 
    title: "Residency @ FEED Media Arts",
    description: "Artist residency program exploring digital media and contemporary art practices.",
    image: "/feed.jpg",
    year: "2024",
    location: "FEED Media Arts"
  },
  { 
    id: "kigoma-erie", 
    title: "KIGOMA @ Erie African Arts",
    description: "Cultural exhibition and artistic exploration of African heritage and contemporary expression.",
    image: "/africanarts.png",
    year: "2024",
    location: "Erie African Arts"
  },
  { 
    id: "ghost-in-machine", 
    title: "Ghost In the Machine: Art and Urban Renewal in Northwest PA",
    description: "A study documenting the role of the arts, local artists, and narratives of revitalization in Erie post-industrial life.",
    image: "/logo.jpg",
    year: "2025",
    location: "Northwest PA"
  }
];

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  setIsAutoPlaying: (isPlaying: boolean) => void;
}

const CustomCarousel: React.FC = () => {
  // Initialize all state variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(nextSlide, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextSlide, isHovered]);

  const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, setIsAutoPlaying }) => (
    <button
      onClick={() => {
        onClick();
        setIsAutoPlaying(false);
      }}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-2 md:left-4" : "right-2 md:right-4"
      } bg-white/95 hover:bg-white transition-all duration-300 
      rounded-full p-2 md:p-3 z-30 group shadow-xl border border-gray-50
      ${isHovered ? "opacity-100" : "opacity-0"} backdrop-blur-sm`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform duration-200" />
      ) : (
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform duration-200" />
      )}
    </button>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white p-4 md:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent relative inline-block">
          Featured Work
          <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-red-600 to-red-500" />
        </h1>
      </div>

      <div 
        className="relative h-[36rem] md:h-[28rem] bg-gradient-to-br from-gray-50 to-white"
        onMouseEnter={() => {
          setIsHovered(true);
          setIsAutoPlaying(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsAutoPlaying(true);
        }}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-100 to-gray-200 z-20">
          <div 
            className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-[2000] ease-linear"
            style={{ 
              width: isAutoPlaying && !isHovered ? "100%" : "0%",
              transitionProperty: "width",
            }}
          />
        </div>

        {/* Main Content Area */}
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="w-full h-full flex-shrink-0 relative flex items-center justify-center px-4 md:px-16"
              >
                <div className="w-full max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-xl border border-gray-100/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:gap-8 items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden mb-4 md:mb-0 bg-gradient-to-br from-white to-gray-50">
                      <div className="absolute inset-0 group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-[2000] ease-out group-hover:scale-110 p-4"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <div className="bg-gradient-to-br from-black to-gray-900 p-4 md:p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl border border-gray-800">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                          {project.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mt-3 md:mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm">
                            <span className="font-medium text-red-400">{project.year}</span>
                            <span className="w-1 h-1 bg-red-500/30 rounded-full" />
                            <span className="font-medium text-gray-400">{project.location}</span>
                          </div>
                          
                          <Link 
                            href={`/Portfolio/projects/${project.id}`}
                            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm group"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ArrowButton direction="left" onClick={prevSlide} setIsAutoPlaying={setIsAutoPlaying} />
        <ArrowButton direction="right" onClick={nextSlide} setIsAutoPlaying={setIsAutoPlaying} />

        {/* Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 
                ${currentSlide === index 
                ? "w-6 md:w-8 bg-gradient-to-r from-red-600 to-red-500" 
                : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;