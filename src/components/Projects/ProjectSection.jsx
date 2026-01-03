'use client'

import { useMemo, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectTabs from './ProjectTabs'
import ProjectSlider from './ProjectSlider'
import Link from 'next/link'
import cardImage from '../../assets/images/cardimg.jpg'
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
const ProjectSection = () => {
  const projectsByType = {
    'E-commerce/ Dynamic': [
      {
        priority: 1,
        title: 'Grub Digest',
        shortDescription:
          'Comprehensive platform to discover restaurants, cuisines, and dining experiences.',
        cover: grubDigestCover,
        livePreview: 'https://grubdigest.com/',
      },
      {
        priority: 2,
        title: 'Floral Hut',
        shortDescription:
          'Premier online florist offering fresh bouquets, cakes, and personalized gifts.',
        cover: floralHutCover,
        livePreview: 'https://floralhut.in/',
      },
      {
        priority: 3,
        title: 'NAB Delhi',
        shortDescription:
          'Dedicated platform empowering visually impaired individuals through education and technology.',
        cover: nabDelhiCover,
        livePreview: 'https://nabdelhi.in/',
      },
      {
        priority: 4,
        title: 'Masala Of India Cuisine',
        shortDescription:
          'Restaurant website featuring online ordering, catering services, and menu showcases.',
        cover: masalaCover,
        livePreview: 'https://www.masalaofindia.com/',
      },
      {
        priority: 5,
        title: 'Blessings Astrology',
        shortDescription:
          'Expert consultation platform for astrology, Vastu, and spiritual healing services.',
        cover: blessingsCover,
        livePreview: 'https://blessingsastrology.com/',
      },
      
    ],

    'CRM & Admin Panel': [
      {
        priority: 1,
        title: 'Restaurant Management Portal',
        shortDescription:
          'Comprehensive dashboard for managing restaurant listings, menus, and order analytics.',
        cover: grubAdminCover,
        // livePreview: 'https://manage.grubdigest.com/',
      },
      {
        priority: 2,
        title: 'Scholarship Admin System',
        shortDescription:
          'Centralized portal for managing student applications, selection workflows, and records.',
        cover: vahaniAdminCover,
        // livePreview: 'https://admin.vahanischolarship.in/',
      },
      {
        priority: 3,
        title: 'Service Operations CRM',
        shortDescription:
          'Custom CRM for tracking leads, scheduling services, and client interactions.',
        cover: dclutterCrmCover,
        // livePreview: 'https://crm.dclutter.in/',
      },
      {
        priority: 4,
        title: 'Institutional CMS',
        shortDescription:
          'Tailored content management system for updating NGO events and resources.',
        cover: nabCmsCover,
        // livePreview: 'https://cms.nabdelhi.in/',
      },
    ],

    'Web Applications': [
      {
        priority: 1,
        title: 'Scholarship Management System',
        shortDescription:
          'Centralized system for processing applications and managing scholar records efficiently.',
        cover: vahaniCover, // Screenshot of admin.vahanischolarship.in
        // livePreview: 'https://admin.vahanischolarship.in/',
      },
      {
        priority: 2,
        title: 'B2B Partner Dashboard',
        shortDescription:
          'Vendor-facing dashboard for managing business partnerships and transaction data.',
        cover: bechofyCover, // Screenshot of partner.bechofy.in
        // livePreview: 'https://partner.bechofy.in/',
      },
      {
        priority: 3,
        title: 'Service Booking App',
        shortDescription:
          'Interactive web application for scheduling and managing home organization services.',
        cover: dclutterAppCover, // Screenshot of app.dclutter.in
        // livePreview: 'https://app.dclutter.in/',
      },
      {
        priority: 4,
        title: 'Corporate Service Portal',
        shortDescription:
          'Professional web platform showcasing international business services and corporate solutions.',
        cover: shivaayCover, // Screenshot of shivaayintl.com
        // livePreview: 'https://shivaayintl.com/',
      },
    ],

    Static: [
      {
        priority: 10,
        title: 'On De Roof',
        shortDescription: 'Rooftop restaurant website showcasing authentic cuisine, ambiance.',
        cover: odrCover, // Screenshot of https://odrrestaurant.com/
        livePreview: 'https://odrrestaurant.com/',
      },
      {
        priority: 11,
        title: 'Global Trendz',
        shortDescription:
          'Corporate agency portfolio highlighting digital marketing and software services.',
        cover: globalTrendzCover, // Screenshot of https://globaltrendz.com/
        livePreview: 'https://globaltrendz.com/',
      },
      {
        priority: 12,
        title: 'The Passage',
        shortDescription:
          'Immersive travel agency platform featuring curated tours and holiday packages.',
        cover: passageCover, // Screenshot of https://thepassage.travel/
        livePreview: 'https://thepassage.travel/',
      },
      {
        priority: 13,
        title: 'Manzil',
        shortDescription:
          'Educational organization website dedicated to skill development and occupational training.',
        cover: manzilCover, // Screenshot of https://manzil.ae/
        livePreview: 'https://manzil.ae/',
      },
    ],

    Personal: [
      {
        priority: 13,
        title: 'SeIPL Minerals',
        shortDescription:
          'Corporate website for a leading mineral mining and export company in India.',
        cover: seiplCover, // Screenshot of https://seipl.in/
        livePreview: 'https://seipl.in/',
      },
      {
        priority: 14,
        title: 'Brandistic',
        shortDescription: 'Modern digital agency portfolio template showcasing branding services.',
        cover: brandisticCover, // Screenshot of https://brandistic.netlify.app/
        livePreview: 'https://brandistic.netlify.app/',
      },
      {
        priority: 15,
        title: 'WebP Image Converter',
        shortDescription:
          'React-based utility tool for converting images to optimized WebP format.',
        cover: webpCover, // Screenshot of https://webpe-converter.netlify.app/
        livePreview: 'https://webpe-converter.netlify.app/',
      },
      {
        priority: 16,
        title: 'QR Code Generator',
        shortDescription: 'Instant QR code generation tool for URLs and text inputs.',
        cover: qrCover, // Screenshot of https://qr-img-generator.netlify.app/
        livePreview: 'https://qr-img-generator.netlify.app/',
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
      <div className="mt-6 flex justify-center md:hidden">
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
