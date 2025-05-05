import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'A showcase of my engineering work and experience',
  metadataBase: new URL('https://jacobliberty.github.io/portfolio'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-light">
          {children}
        </main>
      </body>
    </html>
  )
} 