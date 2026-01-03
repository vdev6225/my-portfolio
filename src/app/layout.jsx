import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import BackToTop from '@/components/UI/BackToTop'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

// --- 1. GLOBAL SEO CONFIGURATION ---
const title = 'Vishnu | Senior Web Designer & Frontend Developer'
const description =
  'Portfolio of Vishnu, a Senior Web Designer turned Frontend Developer based in New Delhi. Specializing in pixel-perfect React, Next.js, and high-performance web interfaces.'
const siteUrl = 'https://heyvishnu.netlify.app' // Your live URL

export const metadata = {
  // Base URL for resolving relative image paths (important for OG images)
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: `%s | Vishnu`, // This allows pages to have titles like "Projects | Vishnu"
  },
  description,

  keywords: [
    'Frontend Developer',
    'Web Designer',
    'React Developer',
    'Next.js',
    'Tailwind CSS',
    'New Delhi',
    'Portfolio',
    'UI/UX Specialist',
  ],

  authors: [{ name: 'Vishnu', url: siteUrl }],
  creator: 'Vishnu',

  // Canonical URL prevents duplicate content issues
  alternates: {
    canonical: '/',
  },

  // --- OPEN GRAPH (Facebook, LinkedIn, WhatsApp) ---
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Vishnu Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-home.png', // Ensure this file exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Vishnu - Senior Web Designer & Frontend Developer',
      },
    ],
  },

  // --- TWITTER CARD ---
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    // creator: '@yourtwitterhandle', // Add this if you have one, otherwise remove
    images: ['/og-image-home.png'],
  },

  // --- ICONS (Favicon) ---
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon in /public
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={`${firaCode.className} bg-[#0a192f] text-slate-300 antialiased`}>
        <header>
          <Navbar />
        </header>

        {children}

        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
