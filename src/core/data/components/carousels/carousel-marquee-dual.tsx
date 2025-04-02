'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface MarqueeItemProps {
  src: string
  imageHeight: number
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, imageHeight }) => (
  <Image
    src={src}
    width={100}
    height={imageHeight}
    alt={`Marquee Image - ${src}`}
    className="mx-6 w-auto object-contain"
    style={{
      height: imageHeight,
    }}
  />
)

interface ShowcaseMarqueeProps {
  id: string
  images: string[]
  speed?: number
  imageHeight?: number
  direction?: 'left' | 'right'
}

export const MarqueeCoreCarousel: React.FC<ShowcaseMarqueeProps> = ({
  id,
  images,
  speed = 10,
  imageHeight = 24,
  direction = 'left',
}) => {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-100 to-transparent dark:from-neutral-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-100 to-transparent dark:from-neutral-900" />

      <motion.div
        className="flex min-w-max shrink-0"
        animate={{
          translateX: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
          repeatDelay: 0,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <MarqueeItem
            key={'marquee-item-' + id + '-' + index}
            src={src}
            imageHeight={imageHeight}
          />
        ))}
      </motion.div>
    </div>
  )
}

export const MarqueeDualCarouselDemo = () => {
  const { theme, resolvedTheme } = useTheme()
  const darkTheme = theme === 'dark' || resolvedTheme === 'dark'
  const images = [
    '/logos/google.svg',
    '/logos/spotify.svg',
    '/logos/stripe.svg',
    '/logos/airbnb.svg',
    darkTheme ? '/logos/supabase-dark.svg' : '/logos/supabase-light.svg',
  ]
  const speed = 8
  const imageHeight = 24

  return (
    <div className="relative flex h-64 w-full flex-col justify-center">
      <MarqueeCoreCarousel
        id="marquee1"
        images={images}
        speed={speed}
        imageHeight={imageHeight}
        direction="left"
      />
      <MarqueeCoreCarousel
        id="marquee2"
        images={images}
        speed={speed}
        imageHeight={imageHeight}
        direction="right"
      />
      <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
        Logos are for demonstration purposes only.
      </h1>
    </div>
  )
}
