'use client' // <--- ADD THIS AT THE VERY TOP

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  // We use this key to force-reset the ContactForm component
  const [formKey, setFormKey] = useState(0)

  return (
    <section id="contact" className="my-14 scroll-mt-24">
      <div className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* LEFT COLUMN (Same as before) */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-100">Let&apos;s Talk</h3>
            <h4 className="mt-2 text-xl font-bold text-[#18f2e5] md:text-2xl">
              I&apos;d love to help
            </h4>
            <p className="mt-6 max-w-md leading-relaxed text-slate-400">
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Contact Information
            </p>
            {/* Email */}
            <a
              href="mailto:pv7451@gmail.com"
              className="group flex items-center gap-4 text-slate-300 transition-colors duration-300 hover:text-[#18f2e5]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-colors group-hover:border-[#18f2e5]/50 group-hover:shadow-[0_0_10px_rgba(24,242,229,0.1)]">
                <Mail className="h-5 w-5" />
              </div>
              <span className="font-mono text-sm md:text-base">pv7451@gmail.com</span>
            </a>
            {/* Phone */}
            <a
              href="tel:+919711623916"
              className="group flex items-center gap-4 text-slate-300 transition-colors duration-300 hover:text-[#18f2e5]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition-colors group-hover:border-[#18f2e5]/50 group-hover:shadow-[0_0_10px_rgba(24,242,229,0.1)]">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-mono text-sm md:text-base">+91 9711623916</span>
            </a>
            {/* Location */}
            <div className="group flex items-center gap-4 text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900">
                <MapPin className="h-5 w-5 text-[#18f2e5]" />
              </div>
              <span className="font-mono text-sm md:text-base">New Delhi, India</span>
            </div>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex gap-4">{/* Add your social links here */}</div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="relative rounded-xl border border-slate-800/50 bg-slate-950/50 p-6 md:p-8">
          {/* Pass the unique key and the reset function.
             When setFormKey changes, React will destroy the old form (with the success message)
             and mount a brand new blank form.
          */}
          <ContactForm key={formKey} onReset={() => setFormKey((prev) => prev + 1)} />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
