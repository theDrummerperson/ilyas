"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default function RootLayoutClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-grow min-h-screen">
        {children}
      </main>
      <Footer />
  
    </>
  );
}