import './globals.css';
import { ReactNode } from 'react';
import { metadata } from './metadata';
import MainLayout from '@/components/layouts/MainLayout';
import Script from 'next/script';

interface RootLayoutProps {
  children: ReactNode;
}

export { metadata };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"
          strategy="afterInteractive"
        />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}