import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonPrimaryProps = {
  label?: string
  bgColor?: string
  textColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonPrimaryProps = {
  label: 'Click Me',
  bgColor: 'bg-black dark:bg-white',
  textColor: 'text-white dark:text-black',
  borderRadius: 'rounded-lg',
}
const BASE_CLASS =
  'inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200'

export const ButtonPrimary = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonPrimaryProps) => {
  return (
    <motion.button
      className={cn(BASE_CLASS, bgColor, textColor, borderRadius)}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  )
}

export const getButtonPrimarySource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonPrimaryProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderRadius)

  return `
import { motion } from 'framer-motion'
  
export const ButtonPrimary = () => {
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

export const ButtonPrimaryVariants = [
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
