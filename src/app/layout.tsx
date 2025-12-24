import type { Metadata, Viewport } from 'next';

// Root layout metadata - applies to all pages
export const metadata: Metadata = {
  metadataBase: new URL('https://fitworldgym.ro'),
  title: {
    default: 'FitWorld Gym Salonta - Sală de Fitness',
    template: '%s | FitWorld Gym Salonta',
  },
  description:
    'La FitWorld Gym Salonta, ne angajăm să vă oferim o experiență completă de fitness, într-un mediu prietenos și motivant. Antrenori profesioniști, echipamente moderne.',
  keywords: [
    'fitness',
    'gym',
    'sala fitness',
    'Salonta',
    'antrenament',
    'personal trainer',
    'bodybuilding',
    'cardio',
    'FitWorld',
    'abonament sala',
    'edzőterem',
    'fitnesz',
  ],
  authors: [{ name: 'FitWorld Gym Salonta' }],
  creator: 'FitWorld Gym Salonta',
  publisher: 'FitWorld Gym Salonta',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    alternateLocale: ['hu_HU', 'en_US'],
    url: 'https://fitworldgym.ro',
    siteName: 'FitWorld Gym Salonta',
    title: 'FitWorld Gym Salonta - Sală de Fitness',
    description:
      'La FitWorld Gym Salonta, ne angajăm să vă oferim o experiență completă de fitness, într-un mediu prietenos și motivant.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FitWorld Gym Salonta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitWorld Gym Salonta - Sală de Fitness',
    description:
      'La FitWorld Gym Salonta, ne angajăm să vă oferim o experiență completă de fitness, într-un mediu prietenos și motivant.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://fitworldgym.ro',
    languages: {
      'ro-RO': 'https://fitworldgym.ro/ro',
      'hu-HU': 'https://fitworldgym.ro/hu',
      'en-US': 'https://fitworldgym.ro/en',
    },
  },
  category: 'fitness',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff6b00' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

