// src/components/resume/ExperienceSection.tsx
import React from "react";

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
            className="group hover:bg-gray-50 p-4 rounded-lg transition-transform duration-300 shadow-md hover:shadow-lg hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            tabIndex={0}
            aria-label={`Experience details for ${experience.title} at ${experience.company}`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-gray-700">
                  {experience.company}, {experience.location}
                </p>
              </div>
              <span className="text-gray-700 md:ml-4 mt-2 md:mt-0">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  className="text-gray-800 flex items-start"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
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

const SectionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-16 relative overflow-hidden" aria-labelledby="section-title">
    <div className="absolute -left-4 top-0 w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r animate-pulse" />
    <h2 id="section-title" className="text-4xl font-extrabold mb-8 pb-4 border-b border-gray-300 animate-fadeInUp">
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
