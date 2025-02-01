// src/app/layout.tsx
import React from 'react';
import './globals.css'
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutClientComponent from '@/components/RootLayoutClientComponent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://ilyasabukar.com'),
  title: 'a.Ilyas Abukar',
  description:
    'Portfolio website of a.Ilyas Abukar, showcasing works in writing, photography, and more.',
  keywords: ['portfolio', 'writer', 'photographer', 'artist', 'designer'],
  authors: [{ name: 'a.Ilyas Abukar' }],
  creator: 'a.Ilyas Abukar',
  publisher: 'a.Ilyas Abukar',
  openGraph: {
    type: 'website',
    title: 'a.Ilyas Abukar',
    description: 'Portfolio website of a.Ilyas Abukar',
    siteName: 'a.Ilyas Abukar',
    images: [
      {
        url: '/images/azores.jpg',
        width: 1200,
        height: 630,
        alt: 'a.Ilyas Abukar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'a.Ilyas Abukar',
    description: 'Portfolio website of a.Ilyas Abukar',
    images: ['/images/azores.jpg'],
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning={true}>
      <body
        className={`flex min-h-screen flex-col bg-white text-gray-900
          antialiased dark:bg-gray-900 dark:text-white
          ${inter.className}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100]
            focus:bg-white focus:p-4 focus:text-black"
        >
          Skip to main content
        </a>

        <RootLayoutClientComponent>{children}</RootLayoutClientComponent>
      </body>
    </html>
  );
}