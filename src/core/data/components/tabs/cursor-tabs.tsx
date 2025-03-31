'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TabItem {
  label: string
  href: string
}

interface CursorTabsProps {
  tabs: TabItem[]
  defaultActive?: TabItem
  onTabClick?: (tab: TabItem) => void
}

export const CursorTabs = ({
  tabs,
  defaultActive,
  onTabClick,
}: CursorTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultActive ?? tabs[0])
  const [hoveredTab, setHoveredTab] = useState<TabItem | null>(null)

  return (
    <div role="tablist" className="relative flex items-center justify-center">
      {tabs.map((tab) => {
        const isHovered = hoveredTab?.label === tab.label
        const isActive = activeTab.label === tab.label && !hoveredTab

        return (
          <motion.button
            key={tab.label}
            role="tab"
            aria-selected={isActive}
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={() => {
              setActiveTab(tab)
              onTabClick?.(tab)
            }}
            className="relative px-4 py-2 text-sm font-medium"
          >
            {(isHovered || isActive) && (
              <motion.div
                layoutId="activeTabIndicator1"
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-neutral-200"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <motion.span
              className={cn(
                'relative z-10 transition-colors duration-200',
                isHovered || isActive
                  ? 'text-white dark:text-black'
                  : 'text-black/60 dark:text-white/60'
              )}
              animate={{
                opacity: isHovered || isActive ? 1 : 0.75,
                y: isHovered || isActive ? 0 : 2,
              }}
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
export const CursorTabsDemo = () => {
  const onTabClick = (tab: TabItem) => {
    // Add your custom logic here. (Navigate to a different page, fetch data, etc.)
  }

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <CursorTabs tabs={tabs} onTabClick={onTabClick} />
    </div>
  )
}

const tabs: TabItem[] = [
  { label: 'Explore', href: '/' },
  { label: 'Animate', href: '/' },
  { label: 'Customize', href: '/' },
  { label: 'Docs', href: '/' },
]
