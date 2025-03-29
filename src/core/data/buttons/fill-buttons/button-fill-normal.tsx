import { cn } from '@/lib/cn'

type ButtonFillNormalProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillNormalProps = {
  label: 'Hover Me',
  textColor:
    'text-black hover:text-white dark:text-white dark:hover:text-black',
  bgColor:
    'bg-neutral-200 hover:bg-black dark:bg-neutral-700 dark:hover:bg-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'inline-flex items-center px-6 py-2 text-sm font-medium transition-colors duration-300'

export const ButtonFillNormal = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillNormalProps) => {
  return (
    <button className={cn(BASE_CLASS, textColor, bgColor, borderRadius)}>
      {label}
    </button>
  )
}

export const getButtonFillNormalSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillNormalProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderRadius)

  return `
export const ButtonFillNormal = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    </button>
  );
};`.trim()
}

export const ButtonFillNormalVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor:
      'text-black hover:text-white dark:text-white dark:hover:text-black',
    bgColor:
      'bg-neutral-200 hover:bg-black dark:bg-neutral-700 dark:hover:bg-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600 hover:text-white',
    bgColor: 'bg-red-200 hover:bg-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600 hover:text-white',
    bgColor: 'bg-emerald-200 hover:bg-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600 hover:text-white',
    bgColor: 'bg-orange-200 hover:bg-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600 hover:text-white',
    bgColor: 'bg-rose-200 hover:bg-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600 hover:text-white',
    bgColor: 'bg-indigo-200 hover:bg-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600 hover:text-white',
    bgColor: 'bg-blue-200 hover:bg-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600 hover:text-white',
    bgColor: 'bg-purple-200 hover:bg-purple-600',
  },
]
