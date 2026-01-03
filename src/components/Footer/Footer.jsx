import { footerLinks } from '@/appData'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Logo from '../../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-secondary flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all hover:-translate-y-1 hover:border-[#18f2e5] hover:text-[#18f2e5]">
      {icon}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[420px] flex-col justify-between gap-10 overflow-hidden px-4 py-14 md:p-14">
      {/* Top Section */}
      <div className="relative z-20 grid grid-cols-1 items-start md:grid-cols-2 gap-12">
        <div>
          <Link href={'/'}>
            <h5 className="mb-5 flex items-center gap-2">
              <Image src={Logo} alt="Logo" width="50" />
              <span className="text-neutral text-lg font-medium">Vishnu</span>
            </h5>
          </Link>

          <p className="text-tertiary-content max-w-sm">
            Senior Web Designer & Frontend Developer. Building pixel-perfect, responsive, and
            accessible digital experiences for the modern web.
          </p>
          <ul className="mt-5 md:mt-6 flex gap-4">
            <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
            {/* <SocialLink href="mailto:pv7451@gmail.com" icon={<Mail className="h-5 w-5" />} /> */}
          </ul>
        </div>

        <div className="flex flex-wrap gap-8 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300">
              {link.title}
            </Link>
          ))}
          <div className="mt-5 space-y-10 md:text-right w-full">
            <div>
              <h5 className="text-neutral mb-4 text-lg font-medium">Contact Me</h5>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:pv7451@gmail.com"
                  className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                  pv7451@gmail.com
                </a>
                <a
                  href="tel:+919711623916"
                  className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                  +91 9711623916
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
              <address className="text-tertiary-content flex flex-col text-sm font-light not-italic">
                <span>New Delhi, India</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="relative z-20 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-1 gap-4"> */}
      {/* Social Icons */}
      {/* <ul className="flex gap-4">
            <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
          </ul>
        </div> */}

      {/* Contact Info */}
      {/* <div className="flex flex-col justify-between md:flex-row md:justify-end md:gap-8 md:self-end">
          <div className="space-y-10 md:text-right">
            <div>
              <h5 className="text-neutral mb-4 text-lg font-medium">Contact Me</h5>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:pv7451@gmail.com"
                  className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                  pv7451@gmail.com
                </a>
                <a
                  href="tel:+919711623916"
                  className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                  +91 9711623916
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
              <address className="text-tertiary-content flex flex-col text-sm font-light not-italic">
                <span>New Delhi, India</span>
              </address>
            </div>
          </div>
        </div> */}
      {/* // </div> */}

      {/* Background Circles */}
      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
      {/* Copyright & Designed By Section */}
      <div className="relative z-20 text-tertiary-content flex w-full justify-center gap-1 self-end text-right text-xs md:text-center">
        {/* Added "Designed by" text with slightly lower opacity */}
        <span className="text-neutral/50 mt-2 md:mt-0">
          Design and Developed by <span className="text-neutral font-medium">Vishnu🤍.</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
