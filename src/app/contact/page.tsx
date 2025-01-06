// src/app/contact/page.tsx
import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm/ContactForm";

const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[300px]">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
  </div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-12">
          <Suspense fallback={<LoadingFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}