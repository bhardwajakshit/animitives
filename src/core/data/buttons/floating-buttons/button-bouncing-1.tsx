import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonBouncing1Props = {
  label?: string
  bgColor?: string
  textColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonBouncing1Props = {
  label: 'Scroll Down',
  bgColor: 'bg-neutral-800 hover:bg-neutral-800/80',
  textColor: 'text-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'flex w-fit items-center justify-center gap-1 px-4 py-2 text-sm font-medium shadow-lg transition-colors duration-200'

export const ButtonBouncing1 = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBouncing1Props) => {
  return (
    <motion.button
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className={cn(BASE_CLASS, bgColor, textColor, borderRadius)}
    >
      {label}
      <ChevronDown className={textColor} size={20} />
    </motion.button>
  )
}

export const getButtonBouncing1Source = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBouncing1Props) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderRadius)

  return `
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ButtonBouncing1 = () => {
  return (
    <motion.button
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className="${btnClass}"
      >
      ${label}
      <ChevronDown className="${textColor}" size={20} />
    </motion.button>
  )
}`
}

export const ButtonBouncing1Variants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'bg-gray-500 hover:bg-gray-500/60',
    textColor: 'text-white',
  },
  {
    color: 'bg-red-600',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-emerald-600',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-orange-600',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-rose-600',
    bgColor: 'bg-rose-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-blue-600',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    color: 'bg-purple-600',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
  },
]
