'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TabItem {
  label: string
  href: string
}

interface GlowTabsProps {
  tabs: TabItem[]
  defaultActive?: TabItem
  onTabClick?: (tab: TabItem) => void
}

const tabVariants = [
  { bg: 'bg-orange-600', text: 'text-orange-500' },
  { bg: 'bg-blue-600', text: 'text-blue-500' },
  { bg: 'bg-green-600', text: 'text-green-500' },
  { bg: 'bg-red-600', text: 'text-red-500' },
]

export const GlowTabs = ({
  tabs,
  defaultActive,
  onTabClick,
}: GlowTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultActive ?? tabs[0])
  const activeIndex = tabs.findIndex((tab) => tab.label === activeTab.label)
  const color = tabVariants[activeIndex % tabVariants.length]

  return (
    <div className="relative my-10">
      <motion.div
        layoutId="glowEffect"
        className={cn(
          'absolute inset-0 h-[50px] rounded-full blur-lg',
          color.bg
        )}
        style={{ width: `calc(100% / ${tabs.length})` }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 35,
        }}
        animate={{
          left: `${activeIndex * 100}px`,
        }}
      />

      <div className="relative flex items-center justify-center rounded-full bg-white p-1 shadow-md dark:bg-neutral-800">
        {tabs.map((tab) => (
          <motion.button
            key={tab.label}
            onClick={() => {
              setActiveTab(tab)
              onTabClick?.(tab)
            }}
            className="relative px-6 py-2.5 text-sm font-medium"
          >
            {activeTab.label === tab.label && (
              <motion.div
                layoutId="activeTab"
                className={cn(
                  'absolute inset-0 rounded-full shadow-md',
                  color.bg,
                  color.text
                )}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 35,
                }}
              />
            )}
            <motion.span
              className={cn(
                'transition-color relative z-10 text-black duration-150 dark:text-white',
                activeTab.label === tab.label && 'text-white'
              )}
              animate={{
                opacity: activeTab.label === tab.label ? 1 : 0.6,
                y: activeTab.label === tab.label ? 0 : 2,
              }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// Example usage
export const GlowTabsDemo = () => {
  const onTabClick = (tab: TabItem) => {
    // Add your custom logic here. (Navigate to a different page, fetch data, etc.)
  }

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <GlowTabs tabs={tabs} onTabClick={onTabClick} />
    </div>
  )
}

const tabs: TabItem[] = [
  { label: 'Explore', href: '/' },
  { label: 'Animate', href: '/' },
  { label: 'Customize', href: '/' },
  { label: 'Docs', href: '/' },
]
