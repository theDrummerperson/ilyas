// src/components/resume/ArtworkSection.tsx
import React from "react";

interface Artwork {
  title: string;
  type?: string;
  venue: string;
  location: string;
  date: string;
  description?: string;
}

interface ArtworkSectionProps {
  artworks: Artwork[];
}

export default function ArtworkSection({ artworks }: ArtworkSectionProps) {
  return (
    <SectionWrapper title="Artistic Work">
      <div className="space-y-6">
        {artworks.map((artwork, index) => (
          <div
            key={index}
            className="group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                  {artwork.title}
                  {artwork.type && (
                    <span className="text-gray-600 text-base ml-2">
                      ({artwork.type})
                    </span>
                  )}
                </h3>
                <p className="text-gray-700">
                  {artwork.venue}, {artwork.location}
                </p>
              </div>
              <span className="text-gray-700 md:ml-4">{artwork.date}</span>
            </div>

            {artwork.description && (
              <p className="text-gray-800 mt-2 leading-relaxed">
                {artwork.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-16 relative overflow-hidden">
    <div className="absolute -left-4 top-0 w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r animate-pulse" />
    <h2 className="text-4xl font-extrabold mb-8 pb-4 border-b border-gray-300 animate-fadeInUp">
      {title}
    </h2>
    <div className="animate-fadeInUp delay-200">
      {children}
    </div>
  </section>
);

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
`;

// Adding the keyframes to the document's head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}
