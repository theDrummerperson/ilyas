// src/app/Portfolio/page.tsx
'use client';

import React from 'react';
import CustomCarousel from '@/components/Portfolio/CustomCarousel';

const PortfolioPage = () => {
  return (
    <main className="min-h-screen p-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">My Portfolio</h1>
        <CustomCarousel />
      </div>
    </main>
  );
};

export default PortfolioPage;
