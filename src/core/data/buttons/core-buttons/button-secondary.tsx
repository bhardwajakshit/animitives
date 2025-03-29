import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonSecondaryProps = {
  label?: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonSecondaryProps = {
  label: 'Hover Me',
  bgColor: 'hover:bg-black/20 dark:hover:bg-white/20',
  textColor: 'text-black dark:text-white',
  borderColor: 'border-black dark:border-white',
  borderRadius: 'rounded-lg',
}
const BASE_CLASS =
  'inline-flex items-center justify-center border px-4 py-2 text-sm font-medium transition-colors duration-200'

export const ButtonSecondary = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonSecondaryProps) => {
  return (
    <motion.button
      className={cn(BASE_CLASS, bgColor, textColor, borderColor, borderRadius)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  )
}

export const getButtonSecondarySource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonSecondaryProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderColor, borderRadius)

  return `
import { motion } from 'framer-motion'

export const ButtonSecondary = () => {
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

export const ButtonSecondaryVariants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'hover:bg-black/20 dark:hover:bg-white/20',
    textColor: 'text-black dark:text-white',
    borderColor: 'border-black dark:border-white',
  },
  {
    color: 'bg-red-600',
    bgColor: 'hover:bg-red-600/20',
    textColor: 'text-red-600',
    borderColor: 'border-red-600',
  },
  {
    color: 'bg-emerald-600',
    bgColor: 'hover:bg-emerald-600/20',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-600',
  },
  {
    color: 'bg-orange-600',
    bgColor: 'hover:bg-orange-600/20',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-600',
  },
  {
    color: 'bg-rose-600',
    bgColor: 'hover:bg-rose-600/20',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-600',
  },
  {
    color: 'bg-indigo-600',
    bgColor: 'hover:bg-indigo-600/20',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-600',
  },
  {
    color: 'bg-blue-600',
    bgColor: 'hover:bg-blue-600/20',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-600',
  },
  {
    color: 'bg-purple-600',
    bgColor: 'hover:bg-purple-600/20',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-600',
  },
]
