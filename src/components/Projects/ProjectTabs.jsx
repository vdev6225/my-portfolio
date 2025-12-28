"use client"

const ProjectTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium
              transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "bg-accent text-[#00071E] border border-accent"
                  : "text-neutral hover:text-accent border border-border"
              }
            `}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectTabs
