'use client'

import { useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  index: number
  scrollYProgress: MotionValue<number>
  img: string
  totalCards: number
}

const Card: React.FC<CardProps> = ({
  index,
  scrollYProgress,
  img,
  totalCards,
}) => {
  const segmentSize = 1 / totalCards
  const startProgress = index * segmentSize
  const endProgress = startProgress + segmentSize

  const x = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, index % 2 === 0 ? -500 : 500]
  )
  const rotate = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [index % 3 === 0 ? -4 : index % 3 === 1 ? 0 : index % 3 === 2 ? 4 : 4, 0]
  )
  const rotateY = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, index % 2 === 0 ? 100 : -100]
  )
  const scale = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [1, 1.5]
  )

  return (
    <motion.div
      className="absolute top-0 flex h-[250px] w-[200px] flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-lg"
      style={{
        x,
        rotate,
        rotateY,
        scale,
        zIndex: totalCards - index,
        transformOrigin: 'center center',
        WebkitTransformStyle: 'preserve-3d',
        transformStyle: 'preserve-3d',
      }}
    >
      <Image src={img} fill alt={`Card ${index + 1}`} className="rounded-xl" />
    </motion.div>
  )
}

interface FlowCardsProps {
  cards: { id: number; img: string }[]
}

export const FlowCards: React.FC<FlowCardsProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full overflow-y-auto"
    >
      <div className="relative h-[200vh] w-full">
        <div className="sticky top-1/2 flex w-full -translate-y-1/2 items-center justify-center">
          <div
            className="relative flex h-[300px] w-[250px] flex-col items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                index={index}
                scrollYProgress={scrollYProgress}
                img={card.img}
                totalCards={cards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Example Usage
export const FlowCardsDemo = () => {
  const demoCards = [
    { id: 0, img: '/images/image1.jpg' },
    { id: 1, img: '/images/image2.jpg' },
    { id: 2, img: '/images/image3.jpg' },
    { id: 3, img: '/images/image4.jpg' },
    { id: 4, img: '/images/image5.jpg' },
    { id: 5, img: '/images/image6.jpg' },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <FlowCards cards={demoCards} />
      <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
        Scroll down
      </h1>
    </div>
  )
}
