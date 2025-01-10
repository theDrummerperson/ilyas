// src/components/resume/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  subtitle?: string;
}

export default function HeroSection({ name, title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative mb-16 overflow-hidden text-center">
      {/* Background accent with enhanced blur and color */}
      <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 animate-pulse rounded-full bg-blue-200 opacity-60 blur-3xl" />

      {/* Name with enhanced typography and animation */}
      <h1 className="animate-fadeInUp relative mb-6 text-6xl font-extrabold tracking-tighter text-gray-900 md:text-7xl">
        {name}
      </h1>

      {/* Title container with gradient underline and animation */}
      <div className="relative space-y-3">
        <h2 className="animate-fadeInUp inline-block text-3xl font-semibold text-gray-800 delay-200 md:text-4xl">
          {title}
          <div className="animate-expand delay-400 mt-2 h-2 w-full scale-x-0 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </h2>

        {subtitle && (
          <p className="animate-fadeInUp delay-600 mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative elements with enhanced design */}
      <div className="animate-fadeInUp delay-800 mt-8 flex items-center justify-center space-x-4">
        <div className="h-1 w-20 bg-gradient-to-r from-transparent to-blue-600" />
        <div className="h-3 w-3 rounded-full bg-blue-600" />
        <div className="h-1 w-20 bg-gradient-to-l from-transparent to-blue-600" />
      </div>
    </section>
  );
}

// Adding keyframes for animations
const keyframes = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expand {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

// Adding the keyframes to the document's head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}
