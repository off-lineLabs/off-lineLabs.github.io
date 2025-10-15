import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NutCracker - Privacy-First Health Tracking | Offline Labs',
  description: 'Track your meals and exercises with complete privacy. No cloud sync, no data collection, just pure functionality that works offline.',
  keywords: ['nutcracker', 'health tracking', 'privacy', 'offline', 'meal tracking', 'exercise logging'],
  authors: [{ name: 'Offline Labs' }],
  creator: 'Offline Labs',
  publisher: 'Offline Labs',
  metadataBase: new URL('https://off-lineLabs.github.io'),
  openGraph: {
    title: 'NutCracker - Privacy-First Health Tracking',
    description: 'Track your meals and exercises with complete privacy. No cloud sync, no data collection, just pure functionality that works offline.',
    url: 'https://off-lineLabs.github.io/wemade/nutcracker',
    siteName: 'Offline Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutCracker - Privacy-First Health Tracking',
    description: 'Track your meals and exercises with complete privacy. No cloud sync, no data collection, just pure functionality that works offline.',
  },
}

export default function WemadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
