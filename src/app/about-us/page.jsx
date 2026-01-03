import AboutContent from './AboutContent'

export const metadata = {
  title: 'About Me | Vishnu - The Bridge Between Design & Code',
  description:
    'I am a Frontend Developer with a background in Senior Web Design. Based in New Delhi, I bridge the gap between Figma prototypes and functional React code.',
  keywords: [
    'About Vishnu',
    'Frontend Developer Bio',
    'Web Design Experience',
    'Resume',
    'New Delhi Developer',
  ],
  openGraph: {
    title: 'About Me | Vishnu - The Bridge Between Design & Code',
    description:
      'From Senior Web Designer to Frontend Developer. Read my journey and download my resume.',
    url: 'https://heyvishnu.netlify.app/about-us',
    images: [
      {
        url: '/og-image-about.png', // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: 'About Vishnu',
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
