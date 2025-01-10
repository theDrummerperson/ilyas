import React from 'react';
import WritingCard from '../../../components/Portfolio/WritingCard';

const WritingPage = () => {
  const essays = [
    {
      imageSrc: '/LoveJones.jpg',
      authorImageSrc: '/ilyas.jpeg',
      authorName: 'A.Ilyas Abukar',
      authorTitle: 'Writer',
      title: 'Can We Design for Black Love?',
      excerpt: 'Black love is a beautiful experience, but it is also complicated today.',
      link: 'https://ilyasabukar.substack.com/p/can-we-design-for-black-love?r=cxq07',
      readTime: '7 min read',
      date: 'May 2, 2024',
    },
    {
      imageSrc: '/hero3.svg',
      authorImageSrc: '/ilyas.jpeg',
      authorName: 'A.Ilyas',
      authorTitle: 'Writer',
      title: 'Black Design Will Save US!',
      excerpt: 'Designers debate in emails, tweets, medium posts, and videos: what is good design?',
      link: 'https://ilyasabukar.substack.com/p/black-design-will-save-us?r=cxq07',
      readTime: '5 min read',
      date: 'May 1, 2024',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="relative mb-6 inline-block text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Essays
            <div className="absolute -bottom-2 left-0 h-1 w-full -skew-x-12 transform bg-blue-500" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            On culture, identity, technology, design, and art.
          </p>
        </div>

        {/* Featured Essay (if exists) */}
        {essays.length > 0 && (
          <div className="mb-16">
            <WritingCard {...essays[0]} />
          </div>
        )}

        {/* Grid of Other Essays */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {essays.slice(1).map((essay, index) => (
            <WritingCard key={index} {...essay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingPage;
