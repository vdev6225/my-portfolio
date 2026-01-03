import ProjectsContent from './ProjectsContent'

// --- SEO METADATA (Server Side) ---
export const metadata = {
  title: 'Projects | Vishnu - Web Applications & Case Studies',
  description:
    'Explore my portfolio of projects including Dynamic E-commerce platforms, CRM Dashboards, SaaS Web Apps, and Creative Static Websites built with Next.js and Tailwind.',
  keywords: [
    'Web Projects',
    'Case Studies',
    'E-commerce Development',
    'React Dashboards',
    'Admin Panels',
    'Next.js Portfolio',
  ],
  openGraph: {
    title: 'Projects | Vishnu - Web Applications & Case Studies',
    description: 'A complete archive of my work: E-commerce, CRM Panels, and SaaS Applications.',
    url: 'https://heyvishnu.netlify.app/projects',
    images: [
      {
        url: '/og-image-projects.png', // Make sure this image is in your public folder
        width: 1200,
        height: 630,
        alt: 'Vishnu Projects Archive',
      },
    ],
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
