import type { Metadata, Viewport } from 'next';

const baseUrl = 'https://ilyasabukar.com';

export const sharedMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | a.Ilyas Abukar',
    default: 'a.Ilyas Abukar',
  },
  description:
    'Portfolio website of a.Ilyas Abukar, showcasing works in writing, photography, and more.',
  authors: [{ name: 'a.Ilyas Abukar' }],
  creator: 'a.Ilyas Abukar',
  publisher: 'a.Ilyas Abukar',
  openGraph: {
    type: 'website',
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
    images: ['/images/azores.jpg'],
  },
};

export const sharedViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};
