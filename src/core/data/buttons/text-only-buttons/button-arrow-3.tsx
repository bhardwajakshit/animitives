import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

type ButtonArrow3Props = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonArrow3Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
}
const BTN_BASE_CLASS =
  'group inline-flex items-center gap-1.5 text-sm font-medium'
const ARROW_BASE_CLASS =
  '-rotate-45 transition-all duration-300 group-hover:rotate-0'

export const ButtonArrow3 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow3Props) => {
  return (
    <button className={cn(BTN_BASE_CLASS, textColor)}>
      {label}
      <ArrowRight className={cn(ARROW_BASE_CLASS, textColor)} size={20} />
    </button>
  )
}

export const getButtonArrow3Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow3Props) => {
  const btnClass = cn(BTN_BASE_CLASS, textColor)
  const arrowClass = cn(ARROW_BASE_CLASS, textColor)

  return `
import { ArrowRight } from 'lucide-react'

export const ButtonArrow3 = () => {
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
