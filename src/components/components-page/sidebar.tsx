import React, { Dispatch } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ComponentConfigs } from '@/core/configs/component-configs'
import { useComponents } from '@/hooks/components-context'
import { cn } from '@/lib/cn'

interface SidebarProps {
  hoveredIndex: number | null
  setHoveredIndex: Dispatch<React.SetStateAction<number | null>>
}

export const Sidebar = ({ hoveredIndex, setHoveredIndex }: SidebarProps) => {
  const { activeTab } = useComponents()

  return (
    <div className="flex h-fit w-full items-center justify-center px-4">
      <motion.div
        className="flex cursor-pointer flex-col"
        layout
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      >
        {Object.entries(ComponentConfigs).map(([_, { label, slug }], i) => {
          const isSelected = activeTab === slug
          const isHovered = hoveredIndex === i
          const isHovering = hoveredIndex !== null

          return (
            <Link
              key={label}
              className="relative flex items-center gap-2 py-1"
              href={`/components/${slug}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={cn(
                  'relative h-[2.5px] rounded',
                  isSelected || isHovered
                    ? 'bg-orange-600'
                    : 'bg-neutral-900 dark:bg-neutral-200'
                )}
                animate={{
                  width: isSelected ? 50 : isHovered ? 40 : 30,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                layout
              />

              <motion.div
                className="overflow-hidden"
                initial={{ maxWidth: 0, maxHeight: 0, opacity: 0 }}
                animate={{
                  maxWidth: isHovering ? 100 : 0,
                  maxHeight: isHovering ? 20 : 10,
                  opacity: isHovering ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <span
                  className={`block transition-colors duration-200 ${
                    isSelected
                      ? 'text-[13px] text-orange-600'
                      : 'text-xs text-neutral-600 dark:text-neutral-200'
                  } font-medium`}
                >
                  {label}
                </span>
              </motion.div>
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}
