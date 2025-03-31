'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DEFAULT_HEIGHT = 20
const DEFAULT_FONT_CLASS = 'text-lg font-mono font-normal'

type DigitProps = {
  digit: number
  height?: number
  className?: string
  direction?: 'up' | 'down'
}

const Digit = ({
  digit,
  height = DEFAULT_HEIGHT,
  className = DEFAULT_FONT_CLASS,
  direction = 'up',
}: DigitProps) => {
  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{ height, width: '1ch' }}
    >
      <motion.div
        className="absolute inset-0 flex flex-col"
        animate={{ y: direction === 'up' ? -digit * height : digit * height }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.2 }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`flex h-full items-center justify-center ${className}`}
          >
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

type SlidingNumberProps = {
  value: number
  className?: string
  height?: number
}

export const SlidingNumber: React.FC<SlidingNumberProps> = ({
  value,
  className = DEFAULT_FONT_CLASS,
  height = DEFAULT_HEIGHT,
}) => {
  const [prevValue, setPrevValue] = useState<number>(value)

  useEffect(() => {
    setPrevValue(value)
  }, [value])

  const formattedValue = new Intl.NumberFormat('en-US').format(value)

  return (
    <div className="flex items-center" role="text">
      {formattedValue.split('').map((char, i) => {
        if (char === ',') {
          return (
            <span key={`comma-${i}`} className="mx-1">
              ,
            </span>
          )
        }

        const digit = parseInt(char)
        const prevDigit = parseInt(prevValue.toString()[i] || '0')
        const direction = digit >= prevDigit ? 'up' : 'down'

        return (
          <Digit
            key={i}
            digit={digit}
            height={height}
            className={className}
            direction={direction}
          />
        )
      })}
    </div>
  )
}

// Example Usage
export const SlidingNumberDemo = () => {
  const [count, setCount] = useState<number>(199)
  const [liked, setLiked] = useState<boolean>(false)

  const toggleLike = () => {
    setLiked(!liked)
    setCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <div className="flex h-72 flex-col items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 cursor-pointer"
          animate={{
            fill: liked ? 'red' : 'none',
            scale: liked ? [1.2, 1] : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          onClick={toggleLike}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </motion.svg>
        <SlidingNumber value={count} />
      </div>
    </div>
  )
}
