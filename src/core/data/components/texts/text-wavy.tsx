'use client'

import { motion } from 'framer-motion'

interface TextWavyProps {
  text: string
  className?: string
}

export const TextWavy = ({ text, className }: TextWavyProps) => {
  return (
    <div className={`flex ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

// Example usage
export const TextWavyDemo = () => {
  return (
    <div className="my-32">
      <TextWavy text="Animitives" className="text-lg font-normal" />
    </div>
  )
}
