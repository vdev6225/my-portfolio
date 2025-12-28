import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'

const experiences = [
  {
    id: 1,
    role: 'Senior Web Designer',
    company: 'Global Trendz Pvt. Ltd.',
    date: 'May 2024 – Nov 2025',
    description:
      'Leading design and development initiatives to deliver pixel-perfect web solutions across diverse industries.',
    points: [
      'Leading a team of designers and developers to deliver pixel-perfect, responsive websites across diverse industries',
      'Managing multiple high-priority projects simultaneously, ensuring timely delivery and consistent brand alignment',
      'Guiding junior developers on UI/UX best practices and frontend performance optimization',
      'Coordinating closely with clients, translating business goals into functional, user-first digital experiences',
    ],
    skills: [
      'UI/UX Leadership',
      'Project Management',
      'React',
      'Next.js',
      'Frontend Performance',
      'Client Relations',
    ],
  },
  {
    id: 2,
    role: 'Web Designer',
    company: 'Global Trendz Pvt. Ltd.',
    date: 'Dec 2022 – May 2024',
    description:
      'Developed clean, responsive interfaces with a strong focus on modular component design and accessibility.',
    points: [
      'Developed clean, responsive interfaces using React.js and JavaScript with a strong focus on accessibility',
      'Converted Figma designs into modular front-end components, improving reusability and team workflow',
      'Worked collaboratively with cross-functional teams to troubleshoot, test, and deploy production-ready websites',
    ],
    skills: ['React.js', 'JavaScript', 'Figma', 'Accessibility', 'Component Design'],
  },
  {
    id: 3,
    role: 'Web Designer Intern',
    company: 'Global Trendz Pvt. Ltd.',
    date: 'Sep 2022 – Dec 2022',
    description: 'Supported the frontend team with UI implementation, QA.',
    points: [
      'Supported the frontend team by implementing basic UI elements using HTML, CSS, and React.js',
      'Participated in internal QA reviews and assisted in debugging and client feedback resolutions',
      'Gained practical exposure to version control, real-world deployment cycles, and project delivery under deadlines',
    ],
    skills: ['HTML', 'CSS', 'React.js', 'Git', 'QA Testing'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="mb-14 scroll-mt-20">
      <div>
        {/* Section Header */}
        <SectionHeading title="// Experience:" />

        {/* Experience List */}
        <div className="mt-8 space-y-0">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1

            return (
              // Added 'group' here so hovering the whole row highlights everything
              <div key={exp.id} className="group flex gap-3 md:gap-8">
                {/* TIMELINE COLUMN */}
                <div className="relative flex shrink-0 flex-col items-center">
                  {/* Icon Container 
                      MOBILE: w-8 h-8 (Smaller)
                      DESKTOP: w-12 h-12 (Original)
                  */}
                  <div className="z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-secondary text-slate-300 transition-colors duration-300 group-hover:border-[#18f2e5]/50 group-hover:text-[#18f2e5] md:h-12 md:w-12 md:rounded-xl">
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                  </div>

                  {/* Vertical Line 
                      Top position adjusted for mobile vs desktop icon size
                  */}
                  {/* <div
                    className={`absolute top-8 bottom-0 w-[2px] md:top-12 ${
                      isLast ? 'bg-gradient-to-b from-slate-700 to-transparent' : 'bg-slate-700'
                    } transition-colors duration-300 group-hover:from-[#18f2e5]/50 group-hover:to-slate-700/50`}></div> */}
                  <div
                    className={`absolute top-5 md:top-12 bottom-0 w-[2px] bg-gradient-to-b from-slate-700 to-transparent group-hover:from-[#18f2e36b]`}></div>
                </div>

                {/* CONTENT CARD WRAPPER */}
                <div className={`flex-1 ${isLast ? 'pb-2' : 'pb-8 md:pb-16'}`}>
                  {/* The Card */}
                  <div className="bg-secondary relative rounded-lg border border-transparent p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#18f2e5]/30 md:p-8">
                    {/* Triangle Pointer (Hidden on Mobile to save space) */}
                    <div className="bg-secondary absolute top-2 md:top-6 -left-1 md:-left-2 h-4 w-4 rotate-45 transform border-b border-l border-transparent transition-colors duration-300 group-hover:border-[#18f2e5]/30"></div>

                    {/* Header: Title & Company */}
                    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#18f2e5] md:text-2xl">{exp.role}</h3>
                        <p className="text-base font-medium text-slate-200 md:text-lg">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 md:text-sm">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        )}
                      </div>

                      {/* Date Badge */}
                      <div className="mt-1 flex w-fit items-center gap-2 rounded-md border border-[#18f2e5]/20 bg-[#18f2e5]/10 px-2 py-1 font-mono text-xs text-[#18f2e5] md:mt-0 md:px-3 md:text-sm">
                        <Calendar className="h-3 w-3" />
                        {exp.date}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-slate-400 md:mb-6 md:text-base">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mb-6 space-y-3 md:mb-8">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-300 md:text-base">
                          {/* Bullet dot */}
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#18f2e5]"></span>
                          <span className="leading-relaxed opacity-90">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-700/50 pt-4 md:pt-6">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="cursor-default rounded-md border border-[#18f2e5]/20 bg-[#18f2e5]/5 px-2.5 py-1 text-[11px] text-[#18f2e5] transition-colors hover:bg-[#18f2e5]/10 md:text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
