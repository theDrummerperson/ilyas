'use client';

import { ContactForm } from '@/components/ContactForm'; // If using Option 1
// OR
// import { ContactForm } from '@/components/ContactForm/index';  // If using Option 2

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
