import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import MainLayout from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'a.Ilyas Abukar',
  description: 'Portfolio website of a.Ilyas Abukar',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}