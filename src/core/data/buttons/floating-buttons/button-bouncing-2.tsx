import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonBouncing2Props = {
  textColor?: string
  bgColor?: string
}

const DEFAULT_PROPS: ButtonBouncing2Props = {
  textColor: 'text-black dark:text-white',
  bgColor: 'bg-black dark:bg-white text-white dark:text-black',
}
const BASE_CLASS =
  'flex w-fit items-center justify-center px-6 py-2 text-sm font-medium'

export const ButtonBouncing2 = ({
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
}: ButtonBouncing2Props) => {
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
      className={cn(BASE_CLASS, textColor)}
    >
      Press{' '}
      <span className={cn('mx-1.5 rounded-md px-1.5 py-0.5 text-xs', bgColor)}>
        C
      </span>{' '}
      to continue
    </motion.button>
  )
}

export const getButtonBouncing2Source = ({
  textColor = DEFAULT_PROPS.textColor,
}: ButtonBouncing2Props) => {
  const btnClass = cn(BASE_CLASS, textColor)

  return `
import { motion } from 'framer-motion'

export const ButtonBouncing2 = () => {
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
      Press{' '}
      <span className="mx-1.5 rounded-md border border-black/40 px-2">C</span>{' '}
      to continue
    </motion.button>
  )
};`.trim()
}

export const ButtonBouncing2Variants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black dark:bg-white text-white dark:text-black',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
    bgColor: 'bg-red-600 text-white',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-600 text-white',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-600 text-white',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
    bgColor: 'bg-rose-600 text-white',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    bgColor: 'bg-indigo-600 text-white',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-600 text-white',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-600 text-white',
  },
]
