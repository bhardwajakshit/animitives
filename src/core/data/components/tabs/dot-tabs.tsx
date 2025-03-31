'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TabItem {
  label: string
  href: string
}

interface DotTabsProps {
  tabs: TabItem[]
  defaultActive?: TabItem
  onTabClick?: (tab: TabItem) => void
}

export const DotTabs = ({ tabs, defaultActive, onTabClick }: DotTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultActive ?? tabs[0])
  const [hoveredTab, setHoveredTab] = useState<TabItem | null>(null)

  return (
    <div className="relative flex items-center justify-center">
      {tabs.map((tab) => {
        const isHovered = hoveredTab?.label === tab.label
        const isActive = activeTab?.label === tab.label && hoveredTab === null

        return (
          <motion.button
            key={tab.label}
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
                layoutId="activeTab3"
                className="absolute bottom-0 left-1/2 z-10 size-[5px] translate-x-1/2 rounded-full bg-neutral-900 dark:bg-neutral-200"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <motion.span
              className={cn(
                'transition-color relative z-10 duration-150',
                isHovered || isActive
                  ? 'font-medium text-black dark:text-white'
                  : 'text-black dark:text-white'
              )}
              animate={{
                opacity: isHovered || isActive ? 1 : 0.6,
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
export const DotTabsDemo = () => {
  const onTabClick = (tab: TabItem) => {
    // Add your custom logic here. (Navigate to a different page, fetch data, etc.)
  }

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <DotTabs tabs={tabs} onTabClick={onTabClick} />
    </div>
  )
}

const tabs: TabItem[] = [
  { label: 'Explore', href: '/' },
  { label: 'Animate', href: '/' },
  { label: 'Customize', href: '/' },
  { label: 'Docs', href: '/' },
]
