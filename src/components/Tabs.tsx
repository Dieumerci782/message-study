import React, { useState } from 'react'

interface TabsProps {
  tabs: Array<{ id: string; label: string; content: React.ReactNode }>
  defaultTab?: string
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = tabs[0]?.id }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-neutral-border gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-primary-800 border-accent'
                : 'text-neutral-text-secondary hover:text-neutral-text border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  )
}
