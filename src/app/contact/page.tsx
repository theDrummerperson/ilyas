"use client";

import { ContactForm } from '@/components/ContactForm';  // If using Option 1
// OR
// import { ContactForm } from '@/components/ContactForm/index';  // If using Option 2

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
          Contact Me
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}