import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home - Monogram Design',
  description:
    'This is the home page designed for Monogram as part of the Front-end Development Exercise III.',
  keywords: 'Monogram, Front-end Development, Next.js, Tailwind CSS',
  authors: {
    name: 'Kiran Gautam',
    url: 'https://www.kirangtm.com.np/',
  },
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
