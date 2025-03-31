import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonArrowProps = {
  label?: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonArrowProps = {
  label: 'Get Started',
  bgColor: 'bg-black dark:bg-white',
  textColor: 'text-white dark:text-black',
  borderColor: 'border-white/80 hover:border-white/60',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'group inline-flex items-center justify-center space-x-1 border px-4 transition-colors duration-300'

export const ButtonArrow = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonArrowProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderColor, borderRadius)

  return (
    <button className={btnClass}>
      <span className="py-2 text-sm font-medium">{label}</span>
      <ArrowUpRight
        className={cn(
          'transition-all duration-300 group-hover:rotate-45',
          textColor
        )}
        size={18}
      />
    </button>
  )
}

export const getButtonArrowSource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonArrowProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor, borderColor, borderRadius)

  return `
export const ButtonArrow = () => {
  return (
    <button className="${btnClass}">
      <span className="py-2 text-sm font-medium">
        ${label}
      </span>
      <ArrowUpRight
        className={cn(
          'transition-all duration-300 group-hover:rotate-45',
          ${textColor}
        )}
        size={18}
      />
    </button>
  )
};`.trim()
}

export const ButtonArrowVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-black dark:bg-white',
    borderColor: 'border-white/80 hover:border-white/60',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white',
    bgColor: 'bg-red-600',
    borderColor: 'border-red-500 hover:border-red-400',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-white',
    bgColor: 'bg-emerald-600',
    borderColor: 'border-emerald-500 hover:border-emerald-400',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-white',
    bgColor: 'bg-orange-600',
    borderColor: 'border-orange-500 hover:border-orange-400',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-white',
    bgColor: 'bg-rose-600',
    borderColor: 'border-rose-500 hover:border-rose-400',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    borderColor: 'border-indigo-500 hover:border-indigo-400',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
    borderColor: 'border-blue-500 hover:border-blue-400',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-white',
    bgColor: 'bg-purple-600',
    borderColor: 'border-purple-500 hover:border-purple-400',
  },
]
