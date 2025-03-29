import { cn } from '@/lib/cn'

type ButtonFillProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillProps = {
  label: 'Hover Me',
  textColor:
    'text-black hover:text-white dark:text-white dark:hover:text-black',
  bgColor: 'hover:bg-black dark:hover:bg-white',
  borderColor: 'border-black dark:border-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'inline-flex items-center justify-center border px-6 py-2 text-sm font-medium transition-colors duration-200'

export const ButtonFill = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillProps) => {
  return (
    <button
      className={cn(BASE_CLASS, textColor, bgColor, borderColor, borderRadius)}
    >
      {label}
    </button>
  )
}

export const getButtonFillSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderColor, borderRadius)

  return `
export const ButtonFill = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    </button>
  );
};`.trim()
}

export const ButtonFillVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor:
      'text-black hover:text-white dark:text-white dark:hover:text-black',
    bgColor: 'hover:bg-black dark:hover:bg-white',
    borderColor: 'border-black dark:border-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600 hover:text-white',
    bgColor: 'hover:bg-red-600',
    borderColor: 'border-red-600 hover:border-red-400',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600 hover:text-white',
    bgColor: 'hover:bg-emerald-600',
    borderColor: 'border-emerald-600 hover:border-emerald-400',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600 hover:text-white',
    bgColor: 'hover:bg-orange-600',
    borderColor: 'border-orange-600 hover:border-orange-400',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600 hover:text-white',
    bgColor: 'hover:bg-rose-600',
    borderColor: 'border-rose-600 hover:border-rose-400',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600 hover:text-white',
    bgColor: 'hover:bg-indigo-600',
    borderColor: 'border-indigo-600 hover:border-indigo-400',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600 hover:text-white',
    bgColor: 'hover:bg-blue-600',
    borderColor: 'border-blue-600 hover:border-blue-400',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600 hover:text-white',
    bgColor: 'hover:bg-purple-600',
    borderColor: 'border-purple-600 hover:border-purple-400',
  },
]
