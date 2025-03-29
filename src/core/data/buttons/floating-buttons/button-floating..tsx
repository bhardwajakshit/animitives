import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonFloatingProps = {
  bgColor?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonFloatingProps = {
  bgColor: 'bg-neutral-900 dark:bg-neutral-800',
  textColor: 'text-white',
}
const BASE_CLASS =
  'relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl p-2.5'

export const ButtonFloating = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonFloatingProps) => {
  return (
    <motion.button
      className={cn(BASE_CLASS, bgColor)}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      aria-label="Scroll down"
    >
      <motion.div
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['-100%', '0%', '100%'],
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute"
      >
        <ChevronDown className={textColor} />
      </motion.div>
    </motion.button>
  )
}

export const getButtonFloatingSource = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonFloatingProps) => {
  const btnClass = cn(BASE_CLASS, bgColor)

  return `
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ButtonFloating = () => {
  return (
    <motion.button
      className="${btnClass}"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      aria-label='Scroll down'
    >
      <motion.div
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['-100%', '0%', '100%'],
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute"
      >
        <ChevronDown className="${textColor}" />
      </motion.div>
    </motion.button>
  )
};`.trim()
}

export const ButtonFloatingVariants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'bg-black dark:bg-white',
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
