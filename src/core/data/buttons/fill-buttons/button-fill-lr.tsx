import { cn } from '@/lib/cn'

type ButtonFillLRProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillLRProps = {
  label: 'Hover Me',
  textColor:
    'text-black dark:text-white hover:text-white dark:hover:text-black',
  bgColor: 'bg-black dark:bg-white',
  borderColor: 'border-black dark:border-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'group relative inline-flex items-center justify-center overflow-hidden border px-6 py-2 text-sm font-medium'
const SPAN_BASE_CLASS =
  'absolute inset-0 -translate-x-full transition-all duration-300 ease-out group-hover:translate-x-0'

export const ButtonFillLR = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillLRProps) => {
  return (
    <button className={cn(BASE_CLASS, textColor, borderColor, borderRadius)}>
      <span className={cn(SPAN_BASE_CLASS, bgColor, borderRadius)}></span>
      <span className="relative transition-colors duration-300">{label}</span>
    </button>
  )
}

export const getButtonFillLRSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillLRProps) => {
  const btnClass = cn(BASE_CLASS, textColor, borderColor, borderRadius)
  const spanClass = cn(SPAN_BASE_CLASS, bgColor, borderRadius)

  return `
export const ButtonFillLR = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      <span className="${spanClass}"></span>
      <span className="relative transition-colors duration-300">${label}</span>
    </button>
  );
};`.trim()
}

export const ButtonFillAnimatedVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor:
      'text-black dark:text-white hover:text-white dark:hover:text-black',
    bgColor: 'bg-black dark:bg-white',
    borderColor: 'border-black dark:border-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600 hover:text-white',
    bgColor: 'bg-red-600',
    borderColor: 'border-red-600 hover:border-red-400',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600 hover:text-white',
    bgColor: 'bg-emerald-600',
    borderColor: 'border-emerald-600 hover:border-emerald-400',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600 hover:text-white',
    bgColor: 'bg-orange-600',
    borderColor: 'border-orange-600 hover:border-orange-400',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600 hover:text-white',
    bgColor: 'bg-rose-600',
    borderColor: 'border-rose-600 hover:border-rose-400',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600 hover:text-white',
    bgColor: 'bg-indigo-600',
    borderColor: 'border-indigo-600 hover:border-indigo-400',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600 hover:text-white',
    bgColor: 'bg-blue-600',
    borderColor: 'border-blue-600 hover:border-blue-400',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600 hover:text-white',
    bgColor: 'bg-purple-600',
    borderColor: 'border-purple-600 hover:border-purple-400',
  },
]
