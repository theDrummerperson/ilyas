// src/app/about/page.tsx
import React from "react";
import type { Metadata } from "next";
import { sharedMetadata, sharedViewport } from "@/config/metadata";
import AboutClientComponent from "@/components/About/AboutClientComponent";


export const metadata: Metadata = {
  ...sharedMetadata,
  title: "About",
  description: "Learn more about Ilyas Abukar.",
};

export const viewport = sharedViewport;

export default function AboutPage() {
  return (
    <div id="about" className="relative bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AboutClientComponent />
      </div>
    </div>
  );
}
