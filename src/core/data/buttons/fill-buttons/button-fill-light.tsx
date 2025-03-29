import { cn } from '@/lib/cn'

type ButtonFillLightProps = {
  label?: string
  textColor?: string
  borderColor?: string
  bgColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillLightProps = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  borderColor: 'border-zinc-300',
  bgColor: 'hover:bg-zinc-300 dark:hover:bg-zinc-600',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'inline-flex items-center border px-6 py-2 text-sm font-medium transition-colors duration-300'

export const ButtonFillLight = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillLightProps) => {
  return (
    <button
      className={cn(BASE_CLASS, textColor, borderColor, bgColor, borderRadius)}
    >
      {label}
    </button>
  )
}

export const getButtonFillLightSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  borderColor = DEFAULT_PROPS.borderColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillLightProps) => {
  const btnClass = cn(BASE_CLASS, textColor, borderColor, bgColor, borderRadius)

  return `
export const ButtonFillLight = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    </button>
  );
};`.trim()
}

export const ButtonFillLightVariants = [
  {
    color: 'bg-zinc-600 dark:bg-white',
    textColor: 'text-black dark:text-white',
    borderColor: 'border-zinc-300',
    bgColor: 'hover:bg-zinc-300 dark:hover:bg-zinc-600',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
    borderColor: 'border-red-500 hover:border-red-600',
    bgColor: 'hover:bg-red-100',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-500 hover:border-emerald-600',
    bgColor: 'hover:bg-emerald-100',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-500 hover:border-orange-600',
    bgColor: 'hover:bg-orange-100',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-500 hover:border-rose-600',
    bgColor: 'hover:bg-rose-100',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-500 hover:border-indigo-600',
    bgColor: 'hover:bg-indigo-100',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-500 hover:border-blue-600',
    bgColor: 'hover:bg-blue-100',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-500 hover:border-purple-600',
    bgColor: 'hover:bg-purple-100',
  },
]
