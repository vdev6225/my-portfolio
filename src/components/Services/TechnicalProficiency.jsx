import React from 'react'
import { skillList } from '../../appData' // Importing skillList instead of serviceData
import SectionHeading from '../SectionHeading/SectionHeading'
import SkillCard from './SkillCard'

const TechnicalProficiency = () => {
  return (
    <section id="skills" className="my-14 scroll-mt-24">
      <SectionHeading
        title="// Technical Proficiency:"
        // subtitle="A list of my favorite tools and technologies that I use to bring ideas to life."
      />

      {/* Grid Layout: 2 columns on mobile, 4 on desktop */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:mt-[3.75rem] md:grid-cols-4 md:gap-6">
        {skillList.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </div>
    </section>
  )
}

export default TechnicalProficiency