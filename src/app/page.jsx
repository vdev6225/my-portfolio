import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Education from '@/components/Education/Education'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/TechnicalProficiency'
import Skills from '@/components/Skills/Skills'
// import TestimonialSection from '@/components/Testimonials/TestimonialSection'
// import { getAllProjects, getAllTestimonials } from '@/services'
export const metadata = {
  title: 'Vishnu | Senior Web Designer & Frontend Developer',
  description: 'Portfolio of Vishnu, a Senior Web Designer turned Frontend Developer based in New Delhi. Specializing in pixel-perfect React, Next.js, and high-performance web interfaces.',
  keywords: ['Frontend Developer', 'Web Designer', 'React Developer', 'Next.js', 'New Delhi', 'UI/UX', 'Portfolio'],
  authors: [{ name: 'Vishnu' }],
  openGraph: {
    title: 'Vishnu | Senior Web Designer & Frontend Developer',
    description: 'Building the bridge between creative design and technical logic. Explore my high-performance web applications.',
    url: 'https://heyvishnu.netlify.app/',
    siteName: 'Vishnu Portfolio',
    images: [
      {
        url: 'https://heyvishnu.netlify.app/og-image-home.png', // *Make sure to create/upload this image
        width: 1200,
        height: 630,
        alt: 'Vishnu Portfolio Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu | Senior Web Designer & Frontend Developer',
    description: 'Building the bridge between creative design and technical logic.',
    images: ['https://heyvishnu.netlify.app/og-image-home.png'], // Same image as OG
  },
}
export default async function Home() {
  // const projects = await getAllProjects()
  // const testimonials = await getAllTestimonials()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection />
        <Experience />
        <Education />
        <ServiceSection />
        {/* <TestimonialSection testimonials={testimonials} /> */}
        <ContactSection />
      </div>
    </main>
  )
}
