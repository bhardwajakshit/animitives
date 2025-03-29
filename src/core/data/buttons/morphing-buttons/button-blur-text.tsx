import { cn } from '@/lib/cn'

type ButtonBlurTextProps = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonBlurTextProps = {
  label: 'Shhh...',
  textColor: 'text-black dark:text-white',
}
const BASE_CLASS =
  'transition-blur w-fit blur-sm duration-150 ease-out hover:blur-0'

export const ButtonBlurText = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonBlurTextProps) => {
  return <button className={cn(BASE_CLASS, textColor)}>{label}</button>
}

export const getButtonBlurTextSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonBlurTextProps) => {
  const btnClass = cn(BASE_CLASS, textColor)

  return `
export const ButtonBlurText = () => {
  return (
    <button
      className="${btnClass}"
    >
      ${label}
    </button>
  )
};`.trim()
}

export const ButtonBlurTextVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
]
