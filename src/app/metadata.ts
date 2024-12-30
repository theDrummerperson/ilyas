import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ilyasabukar.com'),
  title: 'a.llyas Abukar',
  description: 'Portfolio website of a.Ilyas Abukar, showcasing works in writing, photography, and more.',
  openGraph: {
    title: 'a.llyas Abukar',
    description: 'Portfolio website of a.Ilyas Abukar',
    images: [{
      url: '/azores.jpg',
      width: 1200,
      height: 1200,
      alt: 'Background photograph',
    }],
    type: 'website',
  },
  authors: [
    {
      name: 'a.llyas Abukar',
      url: 'https://www.ilyasabukar.com'
    }
  ],
  creator: 'a.llyas Abukar',
  publisher: 'a.llyas Abukar',
  alternates: {
    canonical: 'https://www.ilyasabukar.com'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}