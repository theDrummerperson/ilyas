// src/app/page.tsx
import React from 'react';
import HomeClientComponent from '@/components/HomeClientComponent';

export default function HomePage() {
  return (
    <div className="relative w-full bg-white dark:bg-gray-900">
      <div className="container-width py-16">
        <HomeClientComponent />
      </div>
    </div>
  );
}

