import { cn } from '@/lib/cn'

type ButtonBBProps = {
  label?: string
  textColor?: string
  bgColor?: string
  shadowColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonBBProps = {
  label: 'Click Me',
  textColor: 'text-white dark:text-black',
  bgColor: 'bg-black dark:bg-white',
  shadowColor: 'bg-zinc-300 dark:bg-zinc-700',
  borderRadius: 'rounded-lg',
}
const BASE_CLASS =
  'inline-flex pb-1 shadow-sm transition-all duration-200 active:pb-0'
const BUTTON_CLASS =
  'inline-flex items-center px-6 py-2 text-sm font-medium transition-colors duration-300'

export const ButtonBB = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBBProps) => {
  return (
    <div className={cn(BASE_CLASS, shadowColor, borderRadius)}>
      <button className={cn(BUTTON_CLASS, textColor, bgColor, borderRadius)}>
        {label}
      </button>
    </div>
  )
}

export const getButtonBBSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBBProps) => {
  const baseClass = cn(BASE_CLASS, shadowColor, borderRadius)
  const btnClass = cn(BUTTON_CLASS, textColor, bgColor, borderRadius)

  return `
export const ButtonBB = () => {
  return (
    <div 
      className="${baseClass}"
    >
      <button 
      className="${btnClass}" 
      >
      ${label}
      </button>
    </div>
  );
};`.trim()
}

export const ButtonBBVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-white dark:bg-black',
    shadowColor: 'bg-zinc-300 dark:bg-zinc-700',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white',
    bgColor: 'bg-red-600',
    shadowColor: 'bg-red-800',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-white',
    bgColor: 'bg-emerald-600',
    shadowColor: 'bg-emerald-800',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-white',
    bgColor: 'bg-orange-600',
    shadowColor: 'bg-orange-800',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-white',
    bgColor: 'bg-rose-600',
    shadowColor: 'bg-rose-800',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    shadowColor: 'bg-indigo-800',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
    shadowColor: 'bg-blue-800',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-white',
    bgColor: 'bg-purple-600',
    shadowColor: 'bg-purple-800',
  },
]
