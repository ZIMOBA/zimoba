import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const title = 'Zimoba · Le logiciel qui avance avec vous'
const description = 'Zimoba conçoit des produits SaaS, des logiciels sur mesure et des infrastructures de paiement pour les entreprises qui avancent.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'Zimoba',
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title,
    description,
    url: 'https://zimoba.com',
    siteName: 'Zimoba',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="dark" suppressHydrationWarning><body className="antialiased" suppressHydrationWarning>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
