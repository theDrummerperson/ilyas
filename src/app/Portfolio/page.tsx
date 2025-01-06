// src/app/Portfolio/page.tsx
"use client";

import React from "react";
import CustomCarousel from "@/components/Portfolio/CustomCarousel";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
        <CustomCarousel />
      </div>
    </main>
  );
};

export default PortfolioPage;