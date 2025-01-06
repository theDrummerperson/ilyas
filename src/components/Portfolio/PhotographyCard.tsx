"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, MapPin, Calendar, Info } from 'lucide-react';

interface PhotographyCardProps {
  image: {
    src: string;
    alt: string;
    location?: string;
    dateTaken?: string;
    camera?: string;
    story?: string;
  };
  priority?: boolean;
  lightTheme?: boolean;
}

const PhotographyCard: React.FC<PhotographyCardProps> = ({
  image,
  priority = false,
  lightTheme = true
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const metaData = {
    creator: "Ilyas O. Abukar",
    rights: "© 2024 Ilyas O. Abukar. All rights reserved.",
    usage: "Personal viewing only. No commercial use or reproduction without permission."
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${lightTheme ? 'bg-white' : 'bg-gray-800'}`}>
      {/* Main Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          priority={priority}
          onContextMenu={(e) => e.preventDefault()}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Info Button */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-white"
        >
          <Info className="w-5 h-5" />
        </button>

        {/* Image Details Overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transform ${showInfo ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300`}>
          <div className={`bg-white/95 backdrop-blur-sm rounded-xl p-4 text-gray-700 space-y-2 shadow-lg ${lightTheme ? 'text-gray-700' : 'text-gray-200'}`}>
            {image.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{image.location}</span>
              </div>
            )}
            {image.dateTaken && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{image.dateTaken}</span>
              </div>
            )}
            {image.camera && (
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{image.camera}</span>
              </div>
            )}
            {image.story && (
              <p className="text-sm text-gray-600 mt-2">{image.story}</p>
            )}
            <div className="text-xs text-gray-500 mt-3">
              {metaData.rights}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyCard;
