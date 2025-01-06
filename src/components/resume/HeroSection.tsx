// src/components/resume/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  subtitle?: string;
}

export default function HeroSection({
  name,
  title,
  subtitle
}: HeroSectionProps) {
  return (
    <section className="mb-16 text-center relative overflow-hidden">
      {/* Background accent with enhanced blur and color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-60 animate-pulse" />

      {/* Name with enhanced typography and animation */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-gray-900 tracking-tighter relative animate-fadeInUp">
        {name}
      </h1>

      {/* Title container with gradient underline and animation */}
      <div className="space-y-3 relative">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold inline-block animate-fadeInUp delay-200">
          {title}
          <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full transform scale-x-0 animate-expand delay-400" />
        </h2>

        {subtitle && (
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto animate-fadeInUp delay-600">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative elements with enhanced design */}
      <div className="mt-8 flex justify-center items-center space-x-4 animate-fadeInUp delay-800">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent to-blue-600" />
        <div className="w-3 h-3 rounded-full bg-blue-600" />
        <div className="w-20 h-1 bg-gradient-to-l from-transparent to-blue-600" />
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
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}