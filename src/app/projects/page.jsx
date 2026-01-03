'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, ArrowLeft, ExternalLink } from 'lucide-react'

// --- 1. IMPORT IMAGES ---
import grubDigestCover from '../../assets/images/projects/e-com-dynamic/grubdigest.png'
import floralHutCover from '../../assets/images/projects/e-com-dynamic/floralhut.png'
import nabDelhiCover from '../../assets/images/projects/e-com-dynamic/nabDelhi.png'
import blessingsCover from '../../assets/images/projects/e-com-dynamic/blessings.png'
import masalaCover from '../../assets/images/projects/e-com-dynamic/masala.png'

import nabCmsCover from '../../assets/images/projects/crm-admin/nabCms.png'
import grubAdminCover from '../../assets/images/projects/crm-admin/grubAdmin.png'
import dclutterCrmCover from '../../assets/images/projects/crm-admin/dclutterCrm.png'
import vahaniAdminCover from '../../assets/images/projects/crm-admin/vahaniAdmin.png'

import dclutterAppCover from '../../assets/images/projects/pwa/dclutterApp.png'
import shivaayCover from '../../assets/images/projects/pwa/shivaay.png'
import vahaniCover from '../../assets/images/projects/pwa/vahani.png'
import bechofyCover from '../../assets/images/projects/pwa/bechofy.png'

import odrCover from '../../assets/images/projects/static/odr.png'
import globalTrendzCover from '../../assets/images/projects/static/globalTrendz.png'
import passageCover from '../../assets/images/projects/static/passage.png'
import manzilCover from '../../assets/images/projects/static/manzil.png'

import seiplCover from '../../assets/images/projects/personal/seipl.png'
import brandisticCover from '../../assets/images/projects/personal/brandistic.png'
import webpCover from '../../assets/images/projects/personal/webp.png'
import qrCover from '../../assets/images/projects/personal/qr.png'
import SectionHeading from '@/components/SectionHeading/SectionHeading'

// --- 2. DATA OBJECT ---
const allProjects = {
  'E-commerce/ Dynamic': [
    {
      title: 'Grub Digest',
      longDescription:
        'Comprehensive platform to discover restaurants, cuisines, and dining experiences.',
      cover: grubDigestCover,
      livePreview: 'https://grubdigest.com/',
    },
    {
      title: 'Floral Hut',
      longDescription:
        'Premier online florist offering fresh bouquets, cakes, and personalized gifts.',
      cover: floralHutCover,
      livePreview: 'https://floralhut.in/',
    },
    {
      title: 'NAB Delhi',
      longDescription:
        'Dedicated platform empowering visually impaired individuals through education and technology.',
      cover: nabDelhiCover,
      livePreview: 'https://nabdelhi.in/',
    },
    {
      title: 'Masala Of India',
      longDescription:
        'Restaurant website featuring online ordering, catering services, and menu showcases.',
      cover: masalaCover,
      livePreview: 'https://www.masalaofindia.com/',
    },
    {
      title: 'Blessings Astrology',
      longDescription:
        'Expert consultation platform for astrology, Vastu, and spiritual healing services.',
      cover: blessingsCover,
      livePreview: 'https://blessingsastrology.com/',
    },
  ],

  'CRM & Admin Panel': [
    {
      title: 'Restaurant Management Portal',
      longDescription:
        'Comprehensive dashboard for managing restaurant listings, menus, and order analytics.',
      cover: grubAdminCover,
    },
    {
      title: 'Scholarship Admin System',
      longDescription:
        'Centralized portal for managing student applications, selection workflows, and records.',
      cover: vahaniAdminCover,
    },
    {
      title: 'Service Operations CRM',
      longDescription:
        'Custom CRM for tracking leads, scheduling services, and client interactions.',
      cover: dclutterCrmCover,
    },
    {
      title: 'Institutional CMS',
      longDescription: 'Tailored content management system for updating NGO events and resources.',
      cover: nabCmsCover,
    },
  ],

  'Web Applications': [
    {
      title: 'Scholarship Mgmt System',
      longDescription:
        'Centralized system for processing applications and managing scholar records efficiently.',
      cover: vahaniCover,
    },
    {
      title: 'B2B Partner Dashboard',
      longDescription:
        'Vendor-facing dashboard for managing business partnerships and transaction data.',
      cover: bechofyCover,
    },
    {
      title: 'Service Booking App',
      longDescription:
        'Interactive web application for scheduling and managing home organization services.',
      cover: dclutterAppCover,
    },
    {
      title: 'Corporate Service Portal',
      longDescription:
        'Professional web platform showcasing international business services and corporate solutions.',
      cover: shivaayCover,
    },
  ],

  'Static Websites': [
    {
      title: 'On De Roof',
      longDescription:
        'Rooftop restaurant website showcasing authentic cuisine, ambiance, and reservations.',
      cover: odrCover,
      livePreview: 'https://odrrestaurant.com/',
    },
    {
      title: 'Global Trendz',
      longDescription:
        'Corporate agency portfolio highlighting digital marketing and software services.',
      cover: globalTrendzCover,
      livePreview: 'https://globaltrendz.com/',
    },
    {
      title: 'The Passage',
      longDescription:
        'Immersive travel agency platform featuring curated tours and holiday packages.',
      cover: passageCover,
      livePreview: 'https://thepassage.travel/',
    },
    {
      title: 'Manzil',
      longDescription:
        'Educational organization website dedicated to skill development and occupational training.',
      cover: manzilCover,
      livePreview: 'https://manzil.ae/',
    },
  ],

  'Personal & Utility': [
    {
      title: 'SEIPL Minerals',
      longDescription:
        'Corporate website for a leading mineral mining and export company in India.',
      cover: seiplCover,
      livePreview: 'https://seipl.in/',
    },
    {
      title: 'Brandistic Agency',
      longDescription: 'Modern digital agency portfolio template showcasing branding services.',
      cover: brandisticCover,
      livePreview: 'https://brandistic.netlify.app/',
    },
    {
      title: 'WebP Converter',
      longDescription: 'React-based utility tool for converting images to optimized WebP format.',
      cover: webpCover,
      livePreview: 'https://webpe-converter.netlify.app/',
    },
    {
      title: 'QR Code Generator',
      longDescription: 'Instant QR code generation tool for URLs and text inputs.',
      cover: qrCover,
      livePreview: 'https://qr-img-generator.netlify.app/',
    },
  ],
}

// --- 3. MAIN COMPONENT ---
const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-10 md:pt-20 pb-20">
      {/* PAGE HEADER */}
      <div className="container mx-auto mb-16 px-6 md:px-12">
        <h1 className="text-4xl font-bold text-slate-100 md:text-5xl">
          All <span className="text-[#18f2e5]">Projects</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          A complete archive of my work, categorized by technology and purpose.
        </p>
      </div>

      {/* SECTIONS LOOP */}
      <div className="container mx-auto space-y-15 px-6 md:px-12">
        {Object.entries(allProjects).map(([category, projects]) => (
          <section key={category}>
            {/* SECTION HEADING */}
            <SectionHeading title={`// ${category}`} />

            {/* CARD GRID */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {projects.map((project, index) => (
                <div key={index} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-secondary p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#18f2e5]/40">
                  {/* 1. IMAGE CONTAINER */}
                  <div className="relative h-52 w-full overflow-hidden rounded-xl border border-slate-800/50 bg-[#112240]">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay (Optional but nice) */}
                    <div className="absolute inset-0 bg-[#0a192f]/20 transition-colors duration-300 group-hover:bg-transparent"></div>
                  </div>

                  {/* 2. CONTENT */}
                  <div className="mt-5 flex flex-grow flex-col">
                    <h3 className="text-xl font-bold text-[#18f2e5]">{project.title}</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">
                      {project.longDescription}
                    </p>

                    {/* 3. LIVE PREVIEW LINK */}
                    {project.livePreview ? (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 flex items-center gap-2 font-medium text-[#18f2e5] underline decoration-[#18f2e5]/30 underline-offset-4 transition-all hover:decoration-[#18f2e5]">
                        <PlayCircle className="h-5 w-5 fill-[#18f2e5]/10" />
                        Live Preview
                      </a>
                    ) : (
                      // Fallback for Admin Panels without live links
                      <div className="mt-5 flex cursor-not-allowed items-center gap-2 font-medium text-slate-500 opacity-70">
                        <PlayCircle className="h-5 w-5" />
                        Internal Application
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage
