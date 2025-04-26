'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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
    id: 'tinystage',
    title: 'TinyStage @ FEED.ART',
    description: 'A platform that promotes diversity in the Arts by curating programs by local performers from diverse backgrounds.',
    image: '/Main_Logo.png',
    year: '2025',
    location: 'FEED.Art',
  },
  {
    id: 'feed-residency',
    title: 'Residency @ FEED Media Arts',
    description: 'Artist residency program exploring digital media and contemporary art practices.',
    image: '/feed.jpg',
    year: '2024',
    location: 'FEED Media Arts',
  },
  {
    id: 'kigoma-erie',
    title: 'KIGOMA @ Erie African Arts',
    description:
      'Cultural exhibition and artistic exploration of African heritage and contemporary expression.',
    image: '/africanarts.png',
    year: '2024',
    location: 'Erie African Arts',
  },
  {
    id: 'ghost-in-machine',
    title: 'Ghost In the Machine: Art and Urban Renewal in Northwest PA',
    description:
      'A study documenting the role of the arts, local artists, and narratives of revitalization in Erie post-industrial life.',
    image: '/logo.jpg',
    year: '2025',
    location: 'Northwest PA',
  },
];

interface ArrowButtonProps {
  direction: 'left' | 'right';
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
        direction === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4'
      } group z-30 rounded-full border 
      border-gray-50 bg-white/95 p-2 shadow-xl transition-all duration-300 hover:bg-white md:p-3
      ${isHovered ? 'opacity-100' : 'opacity-0'} backdrop-blur-sm`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-4 w-4 text-black transition-transform duration-200 group-hover:scale-110 md:h-6 md:w-6" />
      ) : (
        <ChevronRight className="h-4 w-4 text-black transition-transform duration-200 group-hover:scale-110 md:h-6 md:w-6" />
      )}
    </button>
  );

  return (
    <div className="mx-auto max-w-4xl bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      <div className="mb-6 text-center md:mb-12">
        <h1 className="relative inline-block bg-gradient-to-r from-gray-900 to-black bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Featured Work
          <div className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 md:-bottom-3 md:w-24" />
        </h1>
      </div>

      <div
        className="relative h-[36rem] bg-gradient-to-br from-gray-50 to-white md:h-[28rem]"
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
        <div className="absolute left-0 top-0 z-20 h-0.5 w-full bg-gradient-to-r from-gray-100 to-gray-200">
          <div
            className="duration-[2000] h-full bg-gradient-to-r from-red-600 to-red-500 transition-all ease-linear"
            style={{
              width: isAutoPlaying && !isHovered ? '100%' : '0%',
              transitionProperty: 'width',
            }}
          />
        </div>

        {/* Main Content Area */}
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative flex h-full w-full flex-shrink-0 items-center justify-center px-4 md:px-16"
              >
                <div className="mx-auto w-full max-w-3xl rounded-xl border border-gray-100/50 bg-white p-6 shadow-xl backdrop-blur-sm">
                  <div className="flex flex-col items-center md:flex-row md:gap-8">
                    {/* Image Section */}
                    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-white to-gray-50 md:mb-0 md:w-1/2">
                      <div className="group absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="duration-[2000] p-4 transition-transform ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full space-y-4 md:w-1/2">
                      <div className="transform rounded-lg border border-gray-800 bg-gradient-to-br from-black to-gray-900 p-4 shadow-lg transition-all duration-500 hover:shadow-xl md:p-6">
                        <h2 className="mb-2 text-xl font-bold text-white md:mb-3 md:text-2xl">
                          {project.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-300">
                          {project.description}
                        </p>

                        <div className="mt-3 flex items-center justify-between md:mt-4">
                          <div className="flex items-center gap-3 text-sm">
                            <span className="font-medium text-red-400">{project.year}</span>
                            <span className="h-1 w-1 rounded-full bg-red-500/30" />
                            <span className="font-medium text-gray-400">{project.location}</span>
                          </div>

                          <Link
                            href={`/Portfolio/projects/${project.id}`}
                            className="group inline-flex items-center gap-2 text-sm text-red-400 transition-colors hover:text-red-300"
                          >
                            View Details
                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
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
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2 md:bottom-8 md:space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 md:h-2 md:w-2 
                ${
                  currentSlide === index
                    ? 'w-6 bg-gradient-to-r from-red-600 to-red-500 md:w-8'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
