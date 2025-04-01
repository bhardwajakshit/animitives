'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/cn'

type Card = {
  id: number
  title: string
  subtitle: string
  color: string
}

type FannedCardsProps = {
  cards: Card[]
  cardHeight?: string
  cardWidth?: string
  yOffset?: number
  rotationFactor?: number
  xOffsetFactor?: number
  transitionDuration?: number
  delayFactor?: number
}

export const FannedCards: React.FC<FannedCardsProps> = ({
  cards,
  cardHeight = 'h-64',
  cardWidth = 'w-48',
  yOffset = 400,
  rotationFactor = 4,
  xOffsetFactor = 50,
  transitionDuration = 0.4,
  delayFactor = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className="relative flex h-96 w-full items-center justify-center overflow-hidden"
    >
      {cards.map((card, index) => {
        const mid = (cards.length - 1) / 2
        const offset = index - mid
        const rotation = offset * rotationFactor
        const xOffset = offset * xOffsetFactor

        return (
          <motion.div
            key={card.id}
            initial={{
              y: yOffset,
              rotate: rotation,
              x: xOffset,
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    y: 0,
                    rotate: rotation,
                    x: xOffset,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: transitionDuration,
              delay: index * delayFactor,
              ease: 'easeInOut',
            }}
            className={cn(
              'absolute flex flex-col items-center justify-center rounded-xl bg-opacity-40 text-white backdrop-blur-lg',
              card.color,
              cardHeight,
              cardWidth
            )}
            style={{
              zIndex: cards.length + index,
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), ${card.color})`,
            }}
          >
            <h1 className="text-lg font-semibold tracking-wide">
              {card.title}
            </h1>
            <p className="text-xs font-normal opacity-70">{card.subtitle}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

// Example Usage
export const FannedCardsDemo = () => {
  const demoCards: Card[] = [
    { id: 1, title: 'Animitives', subtitle: 'Pink', color: '#ff007a' },
    { id: 2, title: 'Animitives', subtitle: 'Deep Purple', color: '#4a00e0' },
    { id: 3, title: 'Animitives', subtitle: 'Sky Blue', color: '#0099ff' },
    { id: 4, title: 'Animitives', subtitle: 'Dark Gray', color: '#222222' },
    { id: 5, title: 'Animitives', subtitle: 'Golden Yellow', color: '#ffcc00' },
    { id: 6, title: 'Animitives', subtitle: 'Mint Green', color: '#00ff99' },
  ]

  return <FannedCards cards={demoCards} cardHeight="h-48" cardWidth="w-36" />
}
