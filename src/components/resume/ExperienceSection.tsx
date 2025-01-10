// src/components/resume/ExperienceSection.tsx
import React from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <SectionWrapper title="Professional Experience">
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="hover:scale-102 group rounded-lg p-4 shadow-md transition-transform duration-300 hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            tabIndex={0}
            aria-label={`Experience details for ${experience.title} at ${experience.company}`}
          >
            <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-blue-600">
                  {experience.title}
                </h3>
                <p className="text-gray-700">
                  {experience.company}, {experience.location}
                </p>
              </div>
              <span className="mt-2 text-gray-700 md:ml-4 md:mt-0">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start text-gray-800">
                  <span className="mr-2 mt-2 h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
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
  <section className="relative mb-16 overflow-hidden" aria-labelledby="section-title">
    <div className="absolute -left-4 top-0 h-12 w-2 animate-pulse rounded-r bg-gradient-to-b from-blue-500 to-purple-500" />
    <h2
      id="section-title"
      className="animate-fadeInUp mb-8 border-b border-gray-300 pb-4 text-4xl font-extrabold"
    >
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
