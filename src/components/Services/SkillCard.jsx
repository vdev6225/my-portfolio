import Image from 'next/image'
import React from 'react'

const SkillCard = ({ name, icon }) => {
  return (
    <div className="group flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-secondary p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#18f2e5]/50">
      {/* Icon Wrapper with Glow Effect */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 transition-colors duration-300 group-hover:bg-[#18f2e5]/10">
        <Image
          src={icon}
          alt={name}
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Skill Name */}
      <h5 className="mt-4 font-mono text-base font-semibold text-slate-300 transition-colors group-hover:text-[#18f2e5]">
        {name}
      </h5>
    </div>
  )
}

export default SkillCard
