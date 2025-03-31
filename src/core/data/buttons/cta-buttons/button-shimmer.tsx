import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonShimmerProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonShimmerProps = {
  label: 'Get Started',
  textColor: 'text-white',
  bgColor: 'bg-black',
  borderRadius: 'rounded-full',
}
const BASE_CLASS = 'relative overflow-hidden px-6 py-2 text-sm font-medium'

export function ButtonShimmer({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonShimmerProps) {
  const maskGradient = `linear-gradient(
    -75deg,
    white calc(var(--x) + 20%),
    transparent calc(var(--x) + 30%),
    white calc(var(--x) + 100%)
  )`

  return (
    <motion.button
      initial={{ '--x': '100%' }}
      animate={{ '--x': '-100%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1.5,
        duration: 1.5,
        ease: 'linear',
      }}
      className={cn(BASE_CLASS, textColor, bgColor, borderRadius)}
    >
      <span
        className="relative block"
        style={{
          WebkitMaskImage: maskGradient,
          maskImage: maskGradient,
        }}
      >
        {label}
      </span>
    </motion.button>
  )
}

export const getButtonShimmerSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonShimmerProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderRadius)

  return `
export const ButtonShimmer = () => {
  const maskGradient = \`linear-gradient(
    -75deg,
    white calc(var(--x) + 20%),
    transparent calc(var(--x) + 30%),
    white calc(var(--x) + 100%)
  )\`;

  return (
    <motion.button
      initial={{ '--x': '100%' }}
      animate={{ '--x': '-100%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1.5,
        duration: 1.5,
        ease: 'linear',
      }}
      className="${btnClass}"
    >
      <span
        className="relative block"
        style={{
          WebkitMaskImage: maskGradient,
          maskImage: maskGradient,
        }}
      > 
        ${label}
      </span>
    </motion.button>
  )
};`.trim()
}

export const ButtonShimmerVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-white',
    bgColor: 'bg-black',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white',
    bgColor: 'bg-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-white',
    bgColor: 'bg-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-white',
    bgColor: 'bg-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-white',
    bgColor: 'bg-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-white',
    bgColor: 'bg-purple-600',
  },
]
