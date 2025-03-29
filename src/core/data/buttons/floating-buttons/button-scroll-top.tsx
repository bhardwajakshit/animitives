import { ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonScrollTopProps = {
  label?: string
  bgColor?: string
  textColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonScrollTopProps = {
  label: 'Scroll to Top',
  bgColor: 'bg-black hover:bg-black/60 dark:bg-white dark:hover:bg-white/60',
  textColor: 'text-white dark:text-black',
  borderRadius: 'rounded-xl',
}
const BASE_CLASS =
  'inline-flex items-center justify-center gap-2 overflow-hidden px-5 py-2 text-sm font-medium transition-colors duration-300'

export const ButtonScrollTop = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonScrollTopProps) => {
  return (
    <button className={cn(BASE_CLASS, bgColor, textColor, borderRadius)}>
      {label}
      <motion.div
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['100%', '0%', '-100%'],
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronUp className={textColor} />
      </motion.div>
    </button>
  )
}

export const getButtonScrollTopSource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonScrollTopProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderRadius)

  return `
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export const ButtonScrollTop = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
      <motion.div 
      initial={{
        y: '-100%',
      }}
      animate={{
        y: ['100%', '0%', '-100%'],
        opacity: [0.5, 1, 0.5],
        scale: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 1.5,
        times: [0, 0.5, 1],
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      >
        <ChevronUp className="${textColor}" />
      </motion.div>
    </button>
  )
};`.trim()
}

export const ButtonScrollTopVariants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'bg-black hover:bg-black/60 dark:bg-white dark:hover:bg-white/60',
    textColor: 'text-white dark:text-black',
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
