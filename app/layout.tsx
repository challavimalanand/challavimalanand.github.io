import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advocate Challa Vimalanand - Legal Services in Hyderabad, Telangana',
  description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services. Licensed Patent Agent (IN/PA 6235) with 3+ years advocacy experience. Expert legal consultation in Hyderabad.',
  keywords: [
    'advocate',
    'lawyer',
    'legal services',
    'Hyderabad',
    'Telangana',
    'civil law',
    'land litigation',
    'marriage disputes',
    'patent agent',
    'intellectual property',
    'property disputes',
    'legal consultation',
    'family law',
    'patent filing',
    'trademark registration',
    'legal advice Hyderabad'
  ].join(', '),
  authors: [{ name: 'Advocate Challa Vimalanand' }],
  creator: 'Advocate Challa Vimalanand',
  publisher: 'Advocate Challa Vimalanand',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://challavimalanand.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://challavimalanand.github.io',
    title: 'Advocate Challa Vimalanand - Legal Services in Hyderabad, Telangana',
    description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services. Licensed Patent Agent with 3+ years advocacy experience.',
    siteName: 'Advocate Challa Vimalanand',
    images: [
      {
        url: '/images/Vimal_headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Advocate Challa Vimalanand - Professional Legal Services in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advocate Challa Vimalanand - Legal Services in Hyderabad, Telangana',
    description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, marriage disputes, and patent services.',
    images: ['/images/Vimal_headshot.jpg'],
    creator: '@challavimalanand',
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
    google: 'your-google-verification-code', // Replace with actual Google verification code
  },
  category: 'legal services',
  classification: 'legal',
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.4573;78.6562',
    'ICBM': '17.4573, 78.6562',
    'DC.title': 'Advocate Challa Vimalanand - Legal Services in Hyderabad',
    'DC.creator': 'Advocate Challa Vimalanand',
    'DC.subject': 'Legal Services, Civil Law, Land Litigation, Patent Agent',
    'DC.description': 'Professional legal services in Hyderabad, Telangana',
    'DC.publisher': 'Advocate Challa Vimalanand',
    'DC.contributor': 'Advocate Challa Vimalanand',
    'DC.date': '2025',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://challavimalanand.github.io',
    'DC.language': 'en',
    'DC.coverage': 'Hyderabad, Telangana, India',
    'DC.rights': '© 2025 Advocate Challa Vimalanand. All rights reserved.',
  },
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Advocate Challa Vimalanand" />
        <meta name="application-name" content="Advocate Challa Vimalanand" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
