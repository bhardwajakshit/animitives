'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type TextScatterProps = {
  text: string
  className?: string
}

const getRandomPosition = (width: number, height: number) => ({
  x: (Math.random() - 0.5) * width,
  y: (Math.random() - 0.5) * height,
})

export default function TextScatter({ text, className }: TextScatterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setPositions(text.split('').map(() => getRandomPosition(width, height)))
    }
  }, [text])

  useEffect(() => {
    if (hovered) {
      setPositions(text.split('').map(() => ({ x: 0, y: 0 })))
    } else if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setPositions(text.split('').map(() => getRandomPosition(width, height)))
    }
  }, [hovered, text])

  return (
    <div
      ref={containerRef}
      className={`relative flex h-64 w-full items-center justify-center overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{
            x: positions[i]?.x || 0,
            y: positions[i]?.y || 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 12,
            delay: i * 0.02,
          }}
          className="text-lg font-medium text-black dark:text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

// Example usage
export const TextScatterDemo = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <TextScatter className="text-lg text-white" text="Animitives" />
    </div>
  )
}
