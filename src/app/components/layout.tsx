'use client'

import { Dispatch, useState } from 'react'
import { ComponentsProvider, useComponents } from '@/hooks/components-context'
import { Sidebar } from '@/components/components-page/sidebar'
import { motion } from 'framer-motion'

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const hovering = hoveredIndex != null

  return (
    <ComponentsProvider>
      <div className="relative h-full w-full">
        <RenderSidebar
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />

        {children}

        <motion.div
          className="pointer-events-none fixed inset-0 z-50 bg-white/30 dark:bg-black/30"
          animate={{
            opacity: hovering ? 1 : 0,
            backdropFilter: hovering ? 'blur(8px)' : 'blur(0px)',
            WebkitBackdropFilter: hovering ? 'blur(8px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </ComponentsProvider>
  )
}

const RenderSidebar = ({
  hoveredIndex,
  setHoveredIndex,
}: {
  hoveredIndex: number | null
  setHoveredIndex: Dispatch<React.SetStateAction<number | null>>
}) => {
  const { isMobile } = useComponents()

  if (isMobile) return null

  return (
    <div className="fixed left-4 top-1/2 z-[100] -translate-y-1/2">
      <Sidebar hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
    </div>
  )
}
