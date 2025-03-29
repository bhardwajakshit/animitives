'use client'

import { motion } from 'framer-motion'

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <svg viewBox="-8 -8 16 16" fill="none" className="h-10 w-10">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7E5F" />
            <stop offset="50%" stopColor="#FD3A84" />
            <stop offset="100%" stopColor="#6A11CB" />
          </linearGradient>
        </defs>

        <motion.path
          stroke="url(#gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="50 20"
          strokeDashoffset="50"
          strokeWidth={1}
          d="M 0 -3 C 3 -3 4 3 0 3 C -2 3 -2 0 0 0 H 2 C 5 0 5 5 0 5 C -5 5 -5 -3 0 -3"
          animate={{
            strokeDashoffset: [50, 32, 32],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            times: [0, 0.3, 0.5, 1],
            delay: 1.5,
          }}
        />
      </svg>
    </div>
  )
}
