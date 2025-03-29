import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonExpandingProps = {
  bgColor?: string
  textColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonExpandingProps = {
  bgColor: 'bg-neutral-800',
  textColor: 'text-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'inline-flex w-fit items-center justify-between px-2 py-2 transition-all duration-300'
const ICON_BASE_CLASS = 'p-0.5 transition-all duration-300'

export const ButtonExpanding = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonExpandingProps) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <button
      className={cn(BASE_CLASS, bgColor, textColor, borderRadius)}
      onClick={() => setExpanded(!expanded)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={expanded ? 'collapse' : 'expand'}
          initial={{
            opacity: 0,
            filter: 'blur(4px)',
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            filter: 'blur(4px)',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="px-4 text-sm font-medium"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </motion.span>
      </AnimatePresence>
      <PlusIcon
        className={cn(
          ICON_BASE_CLASS,
          borderRadius,
          expanded && 'rotate-45',
          'bg-white/20'
        )}
      />
    </button>
  )
}

export const getButtonExpandingSource = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonExpandingProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderRadius)
  const iconClass = cn(ICON_BASE_CLASS, borderRadius)

  return `
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

  
export const ButtonExpanding = () => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <button
      className="${btnClass}"
      onClick={() => setExpanded(!expanded)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={expanded ? 'collapse' : 'expand'}
          initial={{
            opacity: 0,
            filter: 'blur(4px)',
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            filter: 'blur(4px)',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="px-4 text-sm font-medium"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </motion.span>
      </AnimatePresence>
      <PlusIcon
        className={cn(${iconClass}, expanded && 'rotate-45')}
      />
    </button>
  )
};`.trim()
}

export const ButtonExpandingVariants = [
  {
    color: 'bg-neutral-800',
    textColor: 'text-white',
    bgColor: 'bg-neutral-800',
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
