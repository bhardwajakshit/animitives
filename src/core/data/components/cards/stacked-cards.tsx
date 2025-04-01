'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  index: number
  src: string
  cardWidth: number
  cardHeight: number
  scrollYProgress: any
  spread: number
}

const Card: React.FC<CardProps> = ({
  index,
  src,
  cardWidth,
  cardHeight,
  scrollYProgress,
  spread,
}) => {
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 3 === 0 ? -8 : index % 3 === 1 ? 0 : index % 3 === 2 ? 8 : 4, 0]
  )
  const x = useTransform(scrollYProgress, [0, 1], [0, index * spread - spread])
  const y = useTransform(scrollYProgress, [0, 1], [index * -10, 0])

  return (
    <motion.div
      key={src}
      className="absolute overflow-hidden rounded-xl shadow-xl"
      style={{
        x,
        y,
        rotate,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
      }}
    >
      <Image
        src={src}
        alt={`Card ${index + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </motion.div>
  )
}

interface StackedCardsProps {
  images: string[]
  cardWidth?: number
  cardHeight?: number
  spread?: number
  containerHeight?: number
}

export const StackedCards: React.FC<StackedCardsProps> = ({
  images,
  cardWidth = 160,
  cardHeight = 220,
  spread = 170,
  containerHeight,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-y-auto"
      style={{ height: containerHeight || cardHeight * 2 }}
    >
      <div
        className="sticky top-0 flex items-center justify-center"
        style={{ height: cardHeight * 2 }}
      >
        <div className="relative flex h-[200vh] w-full items-center justify-center">
          {images.map((src, index) => (
            <Card
              key={src}
              index={index}
              src={src}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              scrollYProgress={scrollYProgress}
              spread={spread}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Example Usage
export const StackedCardsDemo = () => (
  <div className="relative h-[500px] w-full">
    <StackedCards
      images={[
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
      ]}
    />
    <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
      Scroll down
    </h1>
  </div>
)
