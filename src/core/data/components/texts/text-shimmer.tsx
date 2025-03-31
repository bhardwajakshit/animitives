'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export type TextShimmerProps = {
  text: string
  className?: string
  duration?: number
  spread?: number
  variant?: 'bw' | 'color'
  textColor?: string
  shimmerColor?: string
  shimmerColors?: string[]
}

export const TextShimmer = ({
  text,
  className,
  duration = 1,
  spread = 2,
  variant = 'color',
  textColor = '#a1a1aa',
  shimmerColor = '#000',
  shimmerColors = ['#ff6b6b', '#4ecdc4'],
}: TextShimmerProps) => {
  const dynamicSpread = useMemo(() => text.length * spread, [text, spread])

  const backgroundImage =
    variant === 'bw'
      ? `
        linear-gradient(
          90deg,
          transparent calc(50% - ${dynamicSpread}px),
          ${shimmerColor},
          transparent calc(50% + ${dynamicSpread}px)
        ),
        linear-gradient(${textColor}, ${textColor})
      `
      : `
        linear-gradient(
          90deg,
          transparent calc(50% - ${dynamicSpread}px),
          ${shimmerColors.join(', ')},
          transparent calc(50% + ${dynamicSpread}px)
        ),
        linear-gradient(${textColor}, ${textColor})
      `

  return (
    <motion.span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={{
        backgroundImage,
        backgroundSize: '250% 100%, auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {text}
    </motion.span>
  )
}

// Example usage
export const TextShimmerDemo = () => {
  return (
    <div className="my-32 flex flex-col gap-4">
      <TextShimmer
        text="Animitives"
        className="text-lg font-normal"
        variant="bw"
        textColor="lightgray"
        shimmerColor="#000"
      />
    </div>
  )
}
