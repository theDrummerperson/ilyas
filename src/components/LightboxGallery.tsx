"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Import icons for navigation and close button

interface Image {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface LightboxGalleryProps {
  images: Image[];
}

const LightboxGallery: React.FC<LightboxGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  const handleOpen = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    // Initialize imageRefs array with the correct number of elements
    imageRefs.current = Array(images.length).fill(null);
  }, [images]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleOpen(index)}
              style={{ cursor: "pointer" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleClose}
        >
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
              <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
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
              <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative w-full h-96">
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    width={images[currentImageIndex].width}
                    height={images[currentImageIndex].height}
                    className="object-contain"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-4 text-center text-gray-600">
                  {images[currentImageIndex].caption}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default LightboxGallery;
