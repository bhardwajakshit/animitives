'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type GradientOption =
  | 'rainbow'
  | 'neon'
  | 'pastel'
  | 'sunset'
  | 'nature'
  | 'ocean'
  | 'lava'
  | 'aurora'

type ButtonGlassmorphismProps = {
  label?: string
  speed?: number
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonGlassmorphismProps = {
  label: 'Try this out!',
  speed: 4,
  borderRadius: 'rounded-xl',
}

export const ButtonGlassmorphism = ({
  label = DEFAULT_PROPS.label,
  speed = DEFAULT_PROPS.speed,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonGlassmorphismProps) => {
  const gradients: Record<GradientOption, string> = {
    rainbow:
      'conic-gradient(from 0deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
    neon: 'conic-gradient(from 0deg at 50% 50%, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96, #ff71ce)',
    pastel:
      'conic-gradient(from 0deg at 50% 50%, #FFD1DC, #FFB6C1, #FFC0CB, #FFD700, #FFFACD, #E6E6FA, #FFD1DC)',
    sunset:
      'conic-gradient(from 0deg at 50% 50%, #FF5733, #FF9933, #FFCC33, #9966CC, #663399, #FF5733)',
    nature:
      'conic-gradient(from 0deg at 50% 50%, #80FF00, #00FFD9, #00CAFF, #8B00FF, #FF00BB, #80FF00)',
    ocean:
      'conic-gradient(from 0deg at 50% 50%, #0033FF, #0099FF, #00FFFF, #00FF99, #00FF33, #0033FF)',
    lava: 'conic-gradient(from 0deg at 50% 50%, #FF4500, #FF6347, #FF8C00, #800080, #4B0082, #FF4500)',
    aurora:
      'conic-gradient(from 0deg at 50% 50%, #6A0DAD, #4B0082, #00FF00, #00FFFF, #FF00FF, #6A0DAD)',
  }

  return (
    <div className={cn('relative overflow-hidden', borderRadius)}>
      <motion.div
        className="absolute -inset-[125%] h-[350%] w-[350%] origin-center"
        style={{
          backgroundImage: gradients['rainbow'],
          backgroundSize: 'cover',
        }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
          scale: 1,
        }}
        transition={{
          rotate: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      <button
        className={cn(
          'relative border border-white/20 bg-white/15 px-6 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-lg transition-all duration-200',
          borderRadius
        )}
      >
        {label}
      </button>
    </div>
  )
}

export const getButtonGlassmorphismSource = ({
  label = DEFAULT_PROPS.label,
  speed = DEFAULT_PROPS.speed,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonGlassmorphismProps) => {
  return `
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type GradientOption = 'rainbow' | 'neon' | 'pastel' | 'sunset' | 'nature' | 'ocean' | 'lava' | 'aurora'

type ButtonGlassmorphismProps = {
  label?: string
  gradient: GradientOption
  speed?: number
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonGlassmorphismProps = {
  label: '${label}',
  gradient: 'rainbow',
  speed: ${speed},
  borderRadius: '${borderRadius}',
}

export const ButtonGlassmorphism = ({
  label = DEFAULT_PROPS.label,
  gradient = DEFAULT_PROPS.gradient,
  speed = DEFAULT_PROPS.speed,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonGlassmorphismProps) => {
  const gradients: Record<GradientOption, string> = {
    rainbow:
      'conic-gradient(from 0deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
    neon: 'conic-gradient(from 0deg at 50% 50%, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96, #ff71ce)',
    pastel:
      'conic-gradient(from 0deg at 50% 50%, #FFD1DC, #FFB6C1, #FFC0CB, #FFD700, #FFFACD, #E6E6FA, #FFD1DC)',
    sunset:
      'conic-gradient(from 0deg at 50% 50%, #FF5733, #FF9933, #FFCC33, #9966CC, #663399, #FF5733)',
    nature:
      'conic-gradient(from 0deg at 50% 50%, #80FF00, #00FFD9, #00CAFF, #8B00FF, #FF00BB, #80FF00)',
    ocean:
      'conic-gradient(from 0deg at 50% 50%, #0033FF, #0099FF, #00FFFF, #00FF99, #00FF33, #0033FF)',
    lava: 'conic-gradient(from 0deg at 50% 50%, #FF4500, #FF6347, #FF8C00, #800080, #4B0082, #FF4500)',
    aurora:
      'conic-gradient(from 0deg at 50% 50%, #6A0DAD, #4B0082, #00FF00, #00FFFF, #FF00FF, #6A0DAD)',
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <motion.div
        className="absolute -inset-[125%] h-[350%] w-[350%] origin-center"
        style={{
          backgroundImage: gradients[gradient],
          backgroundSize: 'cover',
        }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
          scale: 1,
        }}
        transition={{
          rotate: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      <button   
        className={cn(
          'relative border border-white/20 bg-white/15 px-6 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-lg transition-all duration-200',
          borderRadius
        )}
      >
        {label}
      </button>
    </div>
  )
};`.trim()
}

export const ButtonGlassmorphismVariants = [
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#FF0000,#FF7F00,#FFFF00,#00FF00,#0000FF,#4B0082,#9400D3,#FF0000)]',
    gradient: 'rainbow',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#ff71ce,#01cdfe,#05ffa1,#b967ff,#fffb96,#ff71ce)]',
    gradient: 'neon',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#FFD1DC,#FFB6C1,#FFC0CB,#FFD700,#FFFACD,#E6E6FA,#FFD1DC)]',
    gradient: 'pastel',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#FF5733,#FF9933,#FFCC33,#9966CC,#663399,#FF5733)]',
    gradient: 'sunset',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#80FF00,#00FFD9,#00CAFF,#8B00FF,#FF00BB,#80FF00)]',
    gradient: 'nature',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#0033FF,#0099FF,#00FFFF,#00FF99,#00FF33,#0033FF)]',
    gradient: 'ocean',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#FF4500,#FF6347,#FF8C00,#800080,#4B0082,#FF4500)]',
    gradient: 'lava',
  },
  {
    color:
      'bg-[conic-gradient(from_0deg_at_50%_50%,#6A0DAD,#4B0082,#00FF00,#00FFFF,#FF00FF,#6A0DAD)]',
    gradient: 'aurora',
  },
]
