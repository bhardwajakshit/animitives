import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonElevatedProps = {
  label?: string
  bgColor?: string
  textColor?: string
  shadowColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonElevatedProps = {
  label: 'Click Me',
  bgColor: 'bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80',
  textColor: 'text-white dark:text-black',
  shadowColor: 'shadow-black/20 dark:shadow-white/50',
  borderRadius: 'rounded-lg',
}
const BASE_CLASS =
  'inline-flex items-center justify-center px-4 py-2 text-sm font-medium shadow-[0_2px_10px] transition-colors duration-200'

export const ButtonElevated = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonElevatedProps) => {
  return (
    <motion.button
      className={cn(BASE_CLASS, bgColor, textColor, shadowColor, borderRadius)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  )
}

export const getButtonElevatedSource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonElevatedProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, shadowColor, borderRadius)

  return `
import { motion } from 'framer-motion'

export const ButtonElevated = () => {
  return (
    <motion.button 
    className="${btnClass}" 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}>
      ${label}
    </motion.button>
  );
};
  `.trim()
}

export const ButtonElevatedVariants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'bg-black dark:bg-white',
    textColor: 'text-white dark:text-black',
    shadowColor: 'shadow-black dark:shadow-white',
  },
  {
    color: 'bg-red-600',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    shadowColor: 'shadow-red-600',
  },
  {
    color: 'bg-emerald-600',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
    shadowColor: 'shadow-emerald-600',
  },
  {
    color: 'bg-orange-600',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    shadowColor: 'shadow-orange-600',
  },
  {
    color: 'bg-rose-600',
    bgColor: 'bg-rose-600',
    textColor: 'text-white',
    shadowColor: 'shadow-rose-600',
  },
  {
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    shadowColor: 'shadow-indigo-600',
  },
  {
    color: 'bg-blue-600',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    shadowColor: 'shadow-blue-600',
  },
  {
    color: 'bg-purple-600',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    shadowColor: 'shadow-purple-600',
  },
]
