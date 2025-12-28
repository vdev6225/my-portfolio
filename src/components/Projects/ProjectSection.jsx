'use client'

import { useMemo, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectTabs from './ProjectTabs'
import ProjectSlider from './ProjectSlider'
import Link from 'next/link'
import cardImage from '../../assets/images/cardimg.jpg'

const ProjectSection = () => {
  const projectsByType = {
    'E-commerce': [
      {
        priority: 1,
        title: 'E-commerce Platform',
        shortDescription: 'Full-featured e-commerce platform.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 2,
        title: 'Shop Admin Dashboard',
        shortDescription: 'Admin panel for managing orders.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 3,
        title: 'Product Marketplace',
        shortDescription: 'Multi-vendor product marketplace.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 4,
        title: 'Product Marketplace',
        shortDescription: 'Multi-vendor product marketplace.',
        cover: cardImage,
        livePreview: '#',
      },
    ],

    'CRM & Admin Panel': [
      {
        priority: 4,
        title: 'CRM Dashboard',
        shortDescription: 'Internal CRM with analytics.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 5,
        title: 'User Management System',
        shortDescription: 'Role-based access system.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 6,
        title: 'Admin Analytics',
        shortDescription: 'Advanced admin analytics panel.',
        cover: cardImage,
        livePreview: '#',
      },
    ],

    'Web-App': [
      {
        priority: 7,
        title: 'SaaS Web App',
        shortDescription: 'Modern SaaS platform.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 8,
        title: 'Task Management App',
        shortDescription: 'Productivity-focused app.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 9,
        title: 'Realtime Dashboard',
        shortDescription: 'Live data dashboard.',
        cover: cardImage,
        livePreview: '#',
      },
    ],

    'Static': [
      {
        priority: 10,
        title: 'Landing Page',
        shortDescription: 'High-converting landing page.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 11,
        title: 'Marketing Website',
        shortDescription: 'SEO-friendly marketing site.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 12,
        title: 'Company Website',
        shortDescription: 'Corporate static website.',
        cover: cardImage,
        livePreview: '#',
      },
    ],

    'Personal': [
      {
        priority: 13,
        title: 'Personal Portfolio',
        shortDescription: 'Developer portfolio website.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 14,
        title: 'Resume Website',
        shortDescription: 'Online resume & profile.',
        cover: cardImage,
        livePreview: '#',
      },
      {
        priority: 15,
        title: 'Blog Website',
        shortDescription: 'Personal blog platform.',
        cover: cardImage,
        livePreview: '#',
      },
    ],
  }

  // Tabs from object keys
  const tabs = useMemo(() => Object.keys(projectsByType), [])

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section id="projects">
      {/* Header */}
      <div className="flex items-center justify-between">
        <SectionHeading title="// Projects" />
        <Link
          href="#"
          className="bg-accent hidden rounded-lg px-4 py-2 text-sm font-medium text-[#00071E] md:block">
          View All
        </Link>
      </div>

      {/* Tabs */}
      <ProjectTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Slider per active tab */}
      <ProjectSlider projects={projectsByType[activeTab]} />
      <div className="md:hidden flex justify-center mt-6">
        <Link
          href="#"
          className="bg-accent rounded-lg px-4 py-2 text-sm font-medium text-[#00071E]">
          View All
        </Link>
      </div>
    </section>
  )
}

export default ProjectSection
