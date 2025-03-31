import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export type GlowingButtonProps = {
  label?: string
  borderRadius?: string
}

const DEFAULT_PROPS = {
  label: 'Get Started',
  borderRadius: 'rounded-xl',
}
const BUTTON_BASE_CLASS =
  'relative z-10 inline-flex items-center justify-center bg-black px-6 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-transform duration-300'

export function ButtonOuterGlow({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: GlowingButtonProps) {
  const transition = {
    repeat: Infinity,
    duration: 8,
    ease: 'linear',
  }

  const animationProps = {
    background: [
      'conic-gradient(from 0deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
      'conic-gradient(from 360deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
    ],
    transition,
  }

  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-1"
        style={{
          filter: `blur(14px)`,
          backgroundSize: 'cover',
        }}
        animate={animationProps}
      />
      <button className={cn(BUTTON_BASE_CLASS, borderRadius)}>{label}</button>
    </div>
  )
}

export const getButtonOuterGlowSource = ({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: GlowingButtonProps) => {
  const btnClass = cn(BUTTON_BASE_CLASS, borderRadius)

  return `
import { motion } from 'framer-motion'

export const ButtonOuterGlow = () => {
   const transition = {
    repeat: Infinity,
    duration: 8,
    ease: 'linear',
  }

  const animationProps = {
    background: [
      'conic-gradient(from 0deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
      'conic-gradient(from 360deg at 50% 50%, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)',
    ],
    transition,
  }

  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-1"
        style={{
          filter: \`blur(14px)\`,
          backgroundSize: 'cover',
        }}
        animate={animationProps}
      />
      <button
        className="${btnClass}"
      >
        ${label}  
      </button>
    </div>
  )
};`.trim()
}
