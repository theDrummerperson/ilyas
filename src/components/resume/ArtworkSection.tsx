// src/components/resume/ArtworkSection.tsx
import React from 'react';

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
            className="group rounded-lg p-4 shadow-md transition-colors duration-300 hover:bg-gray-50 hover:shadow-lg"
          >
            <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-blue-600">
                  {artwork.title}
                  {artwork.type && (
                    <span className="ml-2 text-base text-gray-600">({artwork.type})</span>
                  )}
                </h3>
                <p className="text-gray-700">
                  {artwork.venue}, {artwork.location}
                </p>
              </div>
              <span className="text-gray-700 md:ml-4">{artwork.date}</span>
            </div>

            {artwork.description && (
              <p className="mt-2 leading-relaxed text-gray-800">{artwork.description}</p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="relative mb-16 overflow-hidden">
    <div className="absolute -left-4 top-0 h-12 w-2 animate-pulse rounded-r bg-gradient-to-b from-blue-500 to-purple-500" />
    <h2 className="animate-fadeInUp mb-8 border-b border-gray-300 pb-4 text-4xl font-extrabold">
      {title}
    </h2>
    <div className="animate-fadeInUp delay-200">{children}</div>
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
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}
