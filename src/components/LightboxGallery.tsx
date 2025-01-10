'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';

// Dynamically import icons to reduce bundle size
const ChevronLeft = dynamic(() => import('lucide-react').then((mod) => mod.ChevronLeft));
const ChevronRight = dynamic(() => import('lucide-react').then((mod) => mod.ChevronRight));

interface ImageType {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

interface LightboxGalleryProps {
  images: ImageType[];
  className?: string;
}

const LightboxGallery: React.FC<LightboxGalleryProps> = React.memo(({ images, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Thumbnail component to reduce complexity
  const Thumbnail = useCallback(
    ({ image, index }: { image: ImageType; index: number }) => (
      <div className="group relative cursor-pointer" onClick={() => openLightbox(index)}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-64 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {image.caption && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm text-white">{image.caption}</span>
          </div>
        )}
      </div>
    ),
    [openLightbox]
  );

  return (
    <div className={className}>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Thumbnail key={index} image={image} index={index} />
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={closeLightbox} static>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative h-96 w-full">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={images[currentIndex].width}
                    height={images[currentIndex].height}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {images[currentIndex].caption && (
                  <div className="mt-4 text-center text-gray-600">
                    {images[currentIndex].caption}
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

LightboxGallery.displayName = 'LightboxGallery';

export default LightboxGallery;
