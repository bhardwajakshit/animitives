'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ICON_COUNT = 4
const INTERVAL = 2000

interface AnimatedCarouselProps {
  icons: string[]
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  icons,
}) => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, INTERVAL)

    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <div className="flex items-center space-x-4">
      {Array.from({ length: ICON_COUNT }).map((_, i) => (
        <div
          key={'icon-' + i}
          className="relative flex h-24 w-24 items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={`${icons[(index + i) % icons.length]}-${i}`}
              src={icons[(index + i) % icons.length]}
              alt={`Icon ${i + 1}`}
              className="absolute h-full w-full px-2"
              initial={{ y: '100%', opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: i * 0.15 }}
            />
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// Example Usage
export const AnimatedCarouselDemo = () => {
  const { theme, resolvedTheme } = useTheme()
  const darkTheme = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <div className="my-16">
      <AnimatedCarousel
        icons={[
          '/logos/google.svg',
          '/logos/spotify.svg',
          '/logos/stripe.svg',
          '/logos/airbnb.svg',
          darkTheme ? '/logos/supabase-dark.svg' : '/logos/supabase-light.svg',
        ]}
      />

      <h1 className="absolute bottom-0 left-1/2 my-4 -translate-x-1/2 -translate-y-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
        Logos are for demonstration purposes only.
      </h1>
    </div>
  )
}
