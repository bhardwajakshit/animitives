import { cn } from '@/lib/cn'

type ButtonRingProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
  ringColor?: string
}

const DEFAULT_PROPS: ButtonRingProps = {
  label: 'Hover Me',
  textColor: 'text-gray-600 hover:text-gray-800',
  bgColor: 'bg-white',
  borderColor: 'border-gray-300 hover:border-gray-400',
  borderRadius: 'rounded-full',
  ringColor: 'hover:ring-4 hover:ring-gray-300',
}
const BASE_CLASS = `mx-auto max-w-fit border px-6 py-2 text-sm font-semibold shadow transition-all hover:ring-4 disabled:cursor-not-allowed disabled:hover:ring-0`

export const ButtonRing = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
  ringColor = DEFAULT_PROPS.ringColor,
}: ButtonRingProps) => {
  return (
    <button
      className={cn(
        BASE_CLASS,
        bgColor,
        textColor,
        borderColor,
        borderRadius,
        ringColor
      )}
    >
      {label}
    </button>
  )
}

export const getButtonRingSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
  ringColor = DEFAULT_PROPS.ringColor,
}: ButtonRingProps) => {
  const btnClass = cn(
    BASE_CLASS,
    bgColor,
    textColor,
    borderColor,
    borderRadius,
    ringColor
  )

  return `
export const ButtonRing = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    </button>
  )
}:`.trim()
}

export const ButtonRingVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-gray-600 hover:text-gray-800',
    bgColor: 'bg-white',
    borderColor: 'border-gray-300 hover:border-gray-400',
    ringColor: 'hover:ring-4 hover:ring-gray-300',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600 hover:text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300 hover:border-red-400',
    ringColor: 'hover:ring-4 hover:ring-red-300',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600 hover:text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-300 hover:border-emerald-400',
    ringColor: 'hover:ring-4 hover:ring-emerald-300',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600 hover:text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300 hover:border-orange-400',
    ringColor: 'hover:ring-4 hover:ring-orange-300',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600 hover:text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-300 hover:border-rose-400',
    ringColor: 'hover:ring-4 hover:ring-rose-300',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600 hover:text-indigo-700',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-300 hover:border-indigo-400',
    ringColor: 'hover:ring-4 hover:ring-indigo-300',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600 hover:text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300 hover:border-blue-400',
    ringColor: 'hover:ring-4 hover:ring-blue-300',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600 hover:text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300 hover:border-purple-400',
    ringColor: 'hover:ring-4 hover:ring-purple-300',
  },
]
