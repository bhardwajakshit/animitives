'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from 'framer-motion'
import confetti from 'canvas-confetti'

interface TickConfettiNumberProps {
  target: number
  initialValue?: number
  decimals?: number
  className?: string
}

export const TickConfettiNumber: React.FC<TickConfettiNumberProps> = ({
  target,
  initialValue = 0,
  decimals = 0,
  className = 'text-xl font-medium text-neutral-700',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const countValue = useMotionValue(initialValue)

  const animatedValue = useTransform(countValue, (value) => {
    return Number(value).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  })

  useEffect(() => {
    if (isInView) {
      animate(countValue, target, {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        onComplete: () => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const x = (rect.left + rect.width / 2) / window.innerWidth
            const y = (rect.top + rect.height / 2) / window.innerHeight

            confetti({
              particleCount: 100,
              spread: 70,
              origin: { x, y },
            })
          }
        },
      })
    }
  }, [isInView, countValue, target])

  return (
    <motion.span ref={ref} className={className}>
      {animatedValue}
    </motion.span>
  )
}

// Example Usage
export const TickConfettiNumberDemo = () => (
  <div className="flex h-72 flex-col items-center justify-center">
    <TickConfettiNumber target={5000} className="text-xl font-normal" />
  </div>
)
