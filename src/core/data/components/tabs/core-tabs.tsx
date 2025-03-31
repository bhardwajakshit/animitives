'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TabItem {
  label: string
  href: string
}

interface CoreTabsProps {
  tabs: TabItem[]
  defaultActive?: TabItem
  onTabClick?: (tab: TabItem) => void
}

export const CoreTabs = ({
  tabs,
  defaultActive,
  onTabClick,
}: CoreTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultActive ?? tabs[0])

  return (
    <div role="tablist" className="relative flex items-center justify-center">
      {tabs.map((tab) => {
        const isActive = activeTab.label === tab.label
        return (
          <motion.button
            key={tab.label}
            role="tab"
            aria-selected={isActive}
            onClick={() => {
              setActiveTab(tab)
              onTabClick?.(tab)
            }}
            className="relative px-4 py-2 text-sm font-medium outline-none"
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-neutral-200"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <motion.span
              className={cn(
                'relative z-10 transition-colors duration-200',
                isActive
                  ? 'text-white dark:text-black'
                  : 'text-black/60 dark:text-white/60'
              )}
              animate={{ opacity: isActive ? 1 : 0.75, y: isActive ? 0 : 2 }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.span>
          </motion.button>
        )
      })}
    </div>
  )
}

// Example usage
export const CoreTabsDemo = () => {
  const onTabClick = (tab: TabItem) => {
    // Add your custom logic here. (Navigate to a different page, fetch data, etc.)
  }

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <CoreTabs tabs={tabs} onTabClick={onTabClick} />
    </div>
  )
}

const tabs: TabItem[] = [
  { label: 'Explore', href: '/' },
  { label: 'Animate', href: '/' },
  { label: 'Customize', href: '/' },
  { label: 'Docs', href: '/' },
]
