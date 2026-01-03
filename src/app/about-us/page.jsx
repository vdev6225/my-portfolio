'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Code2, Palette, Zap, Coffee } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading/SectionHeading' // Assuming you have this
// import yourProfileImage from '../../public/your-photo.jpg' // <--- UNCOMMENT THIS
import Logo from '../../assets/images/logo.png';
const AboutPage = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left: Text Narrative */}
          <div className="space-y-8">
            <div>
              <h5 className="font-mono text-sm text-[#18f2e5]">Hi, I&apos;m Vishnu</h5>
              <h1 className="mt-2 text-4xl leading-tight font-bold text-slate-100 md:text-5xl">
                I build things for the web. <br />
                <span className="text-slate-400">Beautifully.</span>
              </h1>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-slate-400">
              <p>
                I am a <strong>Frontend Developer</strong> with a twist—I started my career as a{' '}
                <strong>Senior Web Designer</strong>.
              </p>
              <p>
                This background gives me a unique advantage: I don&apos;t just write code; I
                understand the <em>intent</em> behind every pixel. I bridge the gap between Figma
                designs and functional React components, ensuring that the final product looks
                exactly as intended while running at lightning speed.
              </p>
              <p>
                Currently based in <strong>New Delhi</strong>, I&apos;ve spent the last 3+ years
                building accessible, pixel-perfect web applications for clients worldwide.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#18f2e5] px-6 py-3 text-sm font-bold tracking-widest text-[#0a192f] uppercase transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,242,229,0.4)]">
                Let&apos;s Talk
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-lg border border-[#18f2e5] px-6 py-3 text-sm font-bold tracking-widest text-[#18f2e5] uppercase transition-all hover:bg-[#18f2e5]/10">
                Resume
              </a>
            </div>
          </div>

          {/* Right: Image / Visual */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Decorative Borders */}
            <div className="absolute top-4 left-4 h-full w-full rounded-2xl border-2 border-[#18f2e5] opacity-50 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2"></div>

            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-secondary">
              {/* REPLACE THIS WITH YOUR REAL IMAGE */}
              <Image src={Logo} alt="Vishnu" fill className="object-cover p-5" />

              {/* Placeholder for now */}
              {/* <div className="flex h-full flex-col items-center justify-center text-slate-600">
                <div className="text-6xl">👨‍💻</div>
                <p className="mt-4 font-mono text-sm">Add Your Photo Here</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="mt-24 border-y border-slate-800 bg-secondary/50 py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 text-center md:grid-cols-3 md:px-12">
          <StatItem number="03+" label="Years of Experience" />
          <StatItem number="50+" label="Projects Completed" />
          {/* <StatItem number="10+" label="Happy Clients" /> */}
          <StatItem number="100%" label="Commitment" />
        </div>
      </section>

      {/* --- WHAT I DO SECTION --- */}
      <section className="container mx-auto mt-24 px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100">
             What I Bring to the Table
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Palette className="h-8 w-8 text-[#18f2e5]" />}
            title="Design-First Approach"
            desc="My design background allows me to spot UI/UX issues before they reach production. I care about whitespace, typography, and visual hierarchy."
          />
          <FeatureCard
            icon={<Code2 className="h-8 w-8 text-[#18f2e5]" />}
            title="Clean, Modular Code"
            desc="I write scalable React & Next.js code. I believe in reusable components, clean folder structures, and semantic HTML."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-[#18f2e5]" />}
            title="Performance Obsessed"
            desc="A beautiful site is useless if it's slow. I optimize images, minimize bundles, and ensure 90+ Lighthouse scores."
          />
        </div>
      </section>

      {/* --- "A DAY IN THE LIFE" / FUN SECTION --- */}
      <section className="container mx-auto mt-24 px-6 md:px-12">
        <div className="rounded-2xl border border-slate-800 bg-secondary p-8 md:p-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-100">Beyond the Code</h3>
              <p className="mb-4 leading-relaxed text-slate-400">
                When I&apos;m not debugging in VS Code or aligning pixels in Figma, you can find me
                new technologies.
              </p>
              <p className="mb-4 leading-relaxed text-slate-400">
                Currently, I&apos;m deep-diving into <strong>AI Integration</strong> (exploring
                Gemini & OpenAI) to see how artificial intelligence can reshape web interfaces.
              </p>
              <p className="leading-relaxed text-slate-400">
                I believe that the best developers never stop learning. Every project is a new
                puzzle, and I love solving them.
              </p>
            </div>

            {/* Tech Badge Cloud */}
            <div className="flex flex-wrap content-center gap-3">
              {[
                'React',
                'Next.js',
                'Tailwind',
                'Figma',
                'Git',
                // 'Node.js',
                'Vercel',
                'Netlify',
                'Accessibility',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#0a192f] px-4 py-2 font-mono text-sm text-[#18f2e5] shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// --- HELPER COMPONENTS ---

const StatItem = ({ number, label }) => (
  <div>
    <h4 className="text-3xl font-bold text-[#18f2e5] md:text-4xl">{number}</h4>
    <p className="mt-2 font-mono text-xs tracking-wider text-slate-400 uppercase">{label}</p>
  </div>
)

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group rounded-xl border border-slate-800 bg-secondary p-8 transition-all hover:-translate-y-2 hover:border-[#18f2e5]/50 hover:shadow-lg">
    <div className="mb-6 inline-block rounded-lg bg-[#0a192f] p-3 transition-colors group-hover:bg-[#18f2e5]/10">
      {icon}
    </div>
    <h3 className="mb-4 text-xl font-bold text-slate-100 group-hover:text-[#18f2e5]">{title}</h3>
    <p className="leading-relaxed text-slate-400">{desc}</p>
  </div>
)

export default AboutPage
