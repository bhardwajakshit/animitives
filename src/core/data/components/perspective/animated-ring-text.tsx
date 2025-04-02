'use client'

import { motion } from 'framer-motion'

interface AnimatedRingTextProps {
  text?: string
  radius?: number
}

export const AnimatedRingText: React.FC<AnimatedRingTextProps> = ({
  text = 'Animated Ring Text ',
  radius = 80,
}) => {
  const letters = text.split('')

  return (
    <div className="flex h-96 w-full items-center justify-center">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{
          rotateX: -110,
        }}
        animate={{
          rotateZ: 360,
        }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
      >
        {letters.map((letter, index) => {
          const angle = (index / letters.length) * 360
          const transform = `rotate(${angle}deg) translateY(-${radius}px) rotateX(90deg)`

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform,
              }}
            >
              <span className="text-3xl font-bold uppercase text-black">
                {letter}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
