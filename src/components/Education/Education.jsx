import React from 'react'
import { GraduationCap, Landmark, Calendar } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'

const educationData = [
  {
    id: 1,
    institution: 'M. Computer Academy',
    degree: 'Diploma in Web Designing',
    date: 'Aug 2021 – Aug 2022',
    // UPDATED: Combines "Web Designing" (the course) with "UI/UX" (the value)
    description:
      'Comprehensive training in Web Designing fundamentals, with a strong focus on UI/UX principles, visual hierarchy, and responsive development.',
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: 'University of Delhi',
    degree: 'Bachelor of Arts',
    date: 'Jul 2018 – Jul 2021',
    description:
      'Completed undergraduate studies with a focus on humanities, developing strong analytical, communication, and research skills.',
    icon: Landmark,
  },
]

const Education = () => {
  return (
    <section id="education" className="my-14 scroll-mt-24">
      <SectionHeading title="// Education:" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#18f2e5]/50  md:p-8">
            {/* Background Decorative Icon (Faded) */}
            {/* <item.icon className="absolute -top-6 -right-6 h-32 w-32 rotate-12 text-slate-800 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#18f2e5]" /> */}
            <item.icon className="absolute -top-6 -right-6 h-32 w-32 rotate-12 text-slate-800 opacity-20" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Header: Date & Icon */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-2 rounded-md border border-[#18f2e5]/20 bg-[#18f2e5]/5 px-3 py-1 font-mono text-xs text-[#18f2e5]">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>

                {/* Small visible icon for mobile clarity */}
                {/* <div className="rounded-full bg-slate-900 p-2 text-[#18f2e5] transition-colors duration-300 group-hover:bg-[#18f2e5] group-hover:text-[#0a192f]">
                  <item.icon className="h-5 w-5" />
                </div> */}
              </div>

              {/* Main Content */}
              <div className="mt-auto">
                <h3 className="mb-1 text-xl font-bold text-[#18f2e5] md:text-2xl">
                  {item.degree}
                </h3>
                <p className="font-mono text-sm ">@ {item.institution}</p>

                <div className="mt-6 h-px w-full bg-slate-800 transition-colors group-hover:bg-[#18f2e5]/30" />

                <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
