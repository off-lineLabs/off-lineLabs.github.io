import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Offline Labs - Free, Open Source, Ad-Free Alternatives',
  description: 'Offline Labs creates free, open source, ad-free alternatives for everyday apps. No trackers, no data collection, everything working smoothly on airplane mode.',
  keywords: ['offline', 'open source', 'privacy', 'free software', 'ad-free', 'nutcracker'],
  authors: [{ name: 'Jonas Coelho' }],
  creator: 'Jonas Coelho',
  publisher: 'Offline Labs',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://off-lineLabs.github.io'),
  openGraph: {
    title: 'Offline Labs - Free, Open Source, Ad-Free Alternatives',
    description: 'Offline Labs creates free, open source, ad-free alternatives for everyday apps. No trackers, no data collection, everything working smoothly on airplane mode.',
    url: 'https://off-lineLabs.github.io',
    siteName: 'Offline Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline Labs - Free, Open Source, Ad-Free Alternatives',
    description: 'Offline Labs creates free, open source, ad-free alternatives for everyday apps. No trackers, no data collection, everything working smoothly on airplane mode.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
