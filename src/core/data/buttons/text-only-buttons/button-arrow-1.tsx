import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

type ButtonArrow1Props = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonArrow1Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
}
const BTN_BASE_CLASS =
  'group inline-flex items-center gap-1.5 text-sm font-medium'
const ARROW_BASE_CLASS = 'transition-all duration-300 group-hover:translate-x-1'

export const ButtonArrow1 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow1Props) => {
  return (
    <button className={cn(BTN_BASE_CLASS, textColor)}>
      {label}
      <ArrowRight className={cn(ARROW_BASE_CLASS, textColor)} size={20} />
    </button>
  )
}

export const getButtonArrow1Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow1Props) => {
  const btnClass = cn(BTN_BASE_CLASS, textColor)
  const arrowClass = cn(ARROW_BASE_CLASS, textColor)

  return `
import { ArrowRight } from 'lucide-react'

export const ButtonArrow1 = () => {
  return (
    <button 
    className="${btnClass}"
    >
      ${label}
    <ArrowRight
        className="${arrowClass}"
        size={20}
      />
    </button>
  );
};
  `.trim()
}

export const ButtonArrowVariants = [
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
