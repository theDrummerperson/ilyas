import './styles/tailwind.css'
import './styles/globals.css'

import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import { metadata, viewport } from './metadata'  // Import from metadata.ts

const inter = Inter({ subsets: ['latin'] })

// Export the imported metadata and viewport
export { metadata, viewport }

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}