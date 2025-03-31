'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type AnimatedTextProps = {
  text: string
  className?: string
  delay?: number
  duration?: number
}

const StaggerText = ({
  text,
  className = '',
  delay = 0.2,
  duration = 0.5,
}: AnimatedTextProps) => {
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
        staggerChildren: 0.035,
        delay: 0,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.4,
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{
            willChange: 'transform, opacity',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Example usage
export const TextStaggerDemo = () => {
  return (
    <div className="my-32">
      <StaggerText
        text="Animitives"
        className="text-lg font-medium text-black dark:text-white"
        delay={0.1}
        duration={0.4}
      />
    </div>
  )
}
