'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import Image from 'next/image'

type TextRevealCursorProps = {
  hovered: boolean
  children: React.ReactNode
  normalSize?: number
  hoveredWidth?: number
  hoveredHeight?: number
  bgColor?: string
  textColor?: string
  text?: string
}

export const TextRevealCursor = ({
  hovered,
  children,
  normalSize = 20,
  hoveredWidth = 80,
  hoveredHeight = 30,
  bgColor = 'bg-gray-300/60',
  textColor = 'text-white',
  text = 'Hello',
}: TextRevealCursorProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [cursorHidden, setCursorHidden] = useState<boolean>(true)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 25, mass: 0.5 })
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 25, mass: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cursorX.set(x)
      cursorY.set(y)
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    const handleMouseEnter = () => {
      setCursorHidden(false)
    }

    const container = ref.current
    if (!container) return

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY])

  return (
    <div
      ref={ref}
      className="relative h-full w-full"
      style={{ cursor: 'none' }}
    >
      <motion.div
        className={`absolute z-50 flex items-center justify-center rounded-full ${bgColor} ${textColor} pointer-events-none backdrop-blur-md`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: cursorHidden ? 0 : hovered ? hoveredWidth : normalSize,
          height: cursorHidden ? 0 : hovered ? hoveredHeight : normalSize,
          translateX: hovered ? -hoveredWidth / 2 : -normalSize / 2,
          translateY: hovered ? -hoveredHeight / 2 : -normalSize / 2,
          opacity: cursorHidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              className="whitespace-nowrap px-4 text-sm font-semibold"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      {children}
    </div>
  )
}

// Example Usage
export const TextRevealCursorDemo = () => {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <TextRevealCursor hovered={hovered}>
        <div className="relative flex h-full flex-col items-center justify-center gap-4">
          <Image
            src="/images/image7.gif"
            alt="Image"
            width={224}
            height={224}
            className="size-56 rounded-md"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            priority
          />
          <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
            Hover over the image
          </h1>
        </div>
      </TextRevealCursor>
    </div>
  )
}
