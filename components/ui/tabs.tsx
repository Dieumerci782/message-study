'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  onChange?: (tabId: string) => void
}

export function Tabs({ tabs, defaultTab, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(
    defaultTab || tabs[0]?.id || ''
  )

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  return (
    <div className="space-y-4">
      {/* Tab List */}
      <div className="flex gap-2 border-b border-neutral-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'border-b-2 px-4 py-2 text-sm font-medium transition-all',
              activeTab === tab.id
                ? 'border-accent text-accent'
                : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id}>{tab.content}</div>
          )
        ))}
      </div>
    </div>
  )
}
