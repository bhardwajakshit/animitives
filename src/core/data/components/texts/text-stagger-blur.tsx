'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TextBlurProps = {
  text: string
  delay?: number
  duration?: number
  staggerDelay?: number
}

export const TextStaggerBlur = ({
  text,
  delay = 0.2,
  duration = 0.8,
  staggerDelay = 0.05,
}: TextBlurProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: false,
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="inline-flex flex-wrap"
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={child}
          style={{
            willChange: 'transform, opacity, filter',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Example usage
export const TextStaggerBlurDemo = () => {
  return (
    <motion.div className="my-32">
      <TextStaggerBlur
        text="Animitives"
        delay={0.3}
        duration={0.4}
        staggerDelay={0.04}
      />
    </motion.div>
  )
}
