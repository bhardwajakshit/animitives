'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface OrbitingCardsProps {
  images: string[]
  radius?: number
  cardSize?: { width: number; height: number }
  rotationSpeed?: number
}

export const OrbitingCards: React.FC<OrbitingCardsProps> = ({
  images,
  radius = 170,
  cardSize = { width: 150, height: 150 },
  rotationSpeed = 0.015,
}) => {
  const [rotation, setRotation] = useState<number>(0)

  const updateRotation = useCallback(() => {
    setRotation((prev) => prev + rotationSpeed)
    requestAnimationFrame(updateRotation)
  }, [rotationSpeed])

  useEffect(() => {
    const frameId = requestAnimationFrame(updateRotation)
    return () => cancelAnimationFrame(frameId)
  }, [updateRotation])

  return (
    <div className="relative flex h-[550px] w-full items-center justify-center overflow-hidden">
      {images.map((src, index) => {
        const angle = (index * (2 * Math.PI)) / images.length + rotation
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        return (
          <motion.div
            key={index}
            animate={{ x, y }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.15 }}
            className="absolute flex items-center justify-center overflow-hidden rounded-lg shadow-lg"
            style={{ width: cardSize.width, height: cardSize.height }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

// Example Usage
export const OrbitingCardsDemo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <OrbitingCards
        images={[
          '/images/image1.jpg',
          '/images/image2.jpg',
          '/images/image3.jpg',
          '/images/image8.gif',
          '/images/image4.jpg',
          '/images/image5.jpg',
          '/images/image7.gif',
        ]}
      />
    </div>
  )
}
