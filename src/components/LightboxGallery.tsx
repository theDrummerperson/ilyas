"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";

// Dynamically import icons to reduce bundle size
const ChevronLeft = dynamic(() => import("lucide-react").then(mod => mod.ChevronLeft));
const ChevronRight = dynamic(() => import("lucide-react").then(mod => mod.ChevronRight));

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
   setCurrentIndex((prevIndex) =>
     prevIndex === 0 ? images.length - 1 : prevIndex - 1
   );
 }, [images.length]);

 // Thumbnail component to reduce complexity
 const Thumbnail = useCallback(({ image, index }: { image: ImageType; index: number }) => (
   <div
     className="relative group cursor-pointer"
     onClick={() => openLightbox(index)}
   >
     <Image
       src={image.src}
       alt={image.alt}
       width={image.width}
       height={image.height}
       className="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-105"
     />
     {image.caption && (
       <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <span className="text-white text-sm">{image.caption}</span>
       </div>
     )}
   </div>
 ), [openLightbox]);

 return (
   <div className={className}>
     {/* Thumbnail Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {images.map((image, index) => (
         <Thumbnail key={index} image={image} index={index} />
       ))}
     </div>

     {/* Lightbox Dialog */}
     <Transition show={isOpen} as={Fragment}>
       <Dialog 
         as="div" 
         className="fixed inset-0 z-50" 
         onClose={closeLightbox}
         static
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
             <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
               <button
                 onClick={closeLightbox}
                 className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                 aria-label="Close"
               >
                 <X className="w-6 h-6" />
               </button>

               <div className="relative w-full h-96">
                 <Image
                   src={images[currentIndex].src}
                   alt={images[currentIndex].alt}
                   width={images[currentIndex].width}
                   height={images[currentIndex].height}
                   className="object-contain w-full h-full"
                   priority
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

LightboxGallery.displayName = "LightboxGallery";

export default LightboxGallery;