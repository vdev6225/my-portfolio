import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import BackToTop from '@/components/UI/BackToTop'
// import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const title = 'Vishnu | Full-Stack Web Developer in Chicago'

const description =
  "Skilled full-stack web developer in Chicago. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(url || 'http://localhost:3000'),
  alternates: {
    canonical: url || 'http://localhost:3000',
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Vishnu Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={firaCode.className}>
        <header>
          <Navbar />
        </header>

        {children}

        {/* <ThemeMenu /> */}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
