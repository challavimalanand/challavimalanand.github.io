
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advocate Challa Vimalanand - Legal Services in Hyderabad',
  description: 'Professional legal services in Hyderabad, Telangana. Specializing in Civil law, land litigations, and marriage dispute cases. Licensed Patent Agent with 3 years advocacy experience.',
  keywords: 'advocate, lawyer, legal services, Hyderabad, civil law, land litigation, marriage disputes, patent agent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
