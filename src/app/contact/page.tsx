'use client';
import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

// Loading component
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[300px]">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 my-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          Something went wrong loading the contact form. Please refresh the page to try again.
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>
        <div className="mt-12">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <ContactForm />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}