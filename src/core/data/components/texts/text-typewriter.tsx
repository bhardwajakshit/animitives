'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  typingSpeed?: number
  initialDelay?: number
  cursorChar?: string
  onComplete?: () => void
}

export const TypewriterText = ({
  text = 'Animitives',
  className = '',
  typingSpeed = 80,
  initialDelay = 1000,
  cursorChar = '|',
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)

  const startTyping = useCallback(() => {
    setIsTyping(true)
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText(text.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        setIsDone(true)
        if (onComplete) onComplete()
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [text, typingSpeed, onComplete])

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(false)
    setIsDone(false)

    const initialPause = setTimeout(startTyping, initialDelay)
    return () => clearTimeout(initialPause)
  }, [text, initialDelay, startTyping])

  return (
    <motion.div className={`${className} flex items-center`}>
      <span>{displayedText}</span>
      {!isDone && (
        <motion.span
          animate={{
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="ml-1 font-medium"
        >
          {cursorChar}
        </motion.span>
      )}
    </motion.div>
  )
}

// Example usage
export const TextTypewriterDemo = () => {
  return (
    <div className="my-32 flex w-full items-center justify-center">
      <TypewriterText
        className="text-lg text-black dark:text-white"
        text="Animitives"
      />
    </div>
  )
}
