'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from 'framer-motion'

interface TickNumberProps {
  target: number
  initialValue?: number
  decimals?: number
  className?: string
}

export const TickNumber: React.FC<TickNumberProps> = ({
  target,
  initialValue = 0,
  decimals = 0,
  className = 'text-xl font-normal text-neutral-700',
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
export const TickNumberDemo = () => (
  <div className="flex h-72 flex-col items-center justify-center">
    <TickNumber target={10000} className="text-xl font-normal" />
  </div>
)
