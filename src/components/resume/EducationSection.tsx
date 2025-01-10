// src/components/resume/EducationSection.tsx
import React from 'react';

interface Education {
  degree: string;
  school: string;
  location: string;
  graduationDate: string;
  concentration?: string;
  honors?: string[];
}

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  return (
    <SectionWrapper title="Education">
      <div className="space-y-6">
        {educations.map((education, index) => (
          <div
            key={index}
            className="hover:scale-102 group rounded-lg p-4 shadow-md transition-transform duration-300 hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            tabIndex={0}
            aria-label={`Education details for ${education.degree} from ${education.school}`}
          >
            <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-blue-600">
                  {education.degree}
                </h3>
                <p className="text-gray-700">
                  {education.school}, {education.location}
                </p>
                {education.concentration && (
                  <p className="mt-1 text-gray-800">Concentration: {education.concentration}</p>
                )}
              </div>
              <span className="mt-2 text-gray-700 md:ml-4 md:mt-0">{education.graduationDate}</span>
            </div>

            {education.honors && education.honors.length > 0 && (
              <div className="mt-2">
                <h4 className="text-lg font-medium text-gray-800">Honors & Awards:</h4>
                <ul className="mt-1 space-y-1">
                  {education.honors.map((honor, honorIndex) => (
                    <li key={honorIndex} className="flex items-center text-gray-700">
                      <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

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

export default EducationSection;
