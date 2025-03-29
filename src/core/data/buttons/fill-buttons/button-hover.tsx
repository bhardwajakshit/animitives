import { cn } from '@/lib/cn'

type ButtonFillHoverProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillHoverProps = {
  label: 'Hover Me',
  textColor:
    'text-zinc-700 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300',
  bgColor: 'bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-800',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300'

export const ButtonFillHover = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillHoverProps) => {
  return (
    <button className={cn(BASE_CLASS, textColor, bgColor, borderRadius)}>
      {label}
    </button>
  )
}

export const getButtonFillHoverSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillHoverProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderRadius)

  return `
export const ButtonFillHover = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    </button>
  );
};`.trim()
}

export const ButtonFillHoverVariants = [
  {
    color: 'bg-zinc-700 dark:bg-zinc-800',
    textColor:
      'text-zinc-700 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300',
    bgColor: 'hover:bg-zinc-300 dark:hover:bg-zinc-900',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
    bgColor: 'hover:bg-red-300',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    bgColor: 'hover:bg-emerald-300',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
    bgColor: 'hover:bg-orange-300',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
    bgColor: 'hover:bg-rose-300',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    bgColor: 'hover:bg-indigo-300',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'hover:bg-blue-300',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    bgColor: 'hover:bg-purple-300',
  },
]
