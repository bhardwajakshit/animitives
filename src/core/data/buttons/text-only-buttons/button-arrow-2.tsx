import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

type ButtonArrow2Props = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonArrow2Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
}
const BTN_BASE_CLASS =
  'group inline-flex items-center gap-1.5 text-sm font-medium'
const ARROW_BASE_CLASS =
  '-rotate-45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'

export const ButtonArrow2 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow2Props) => {
  return (
    <button className={cn(BTN_BASE_CLASS, textColor)}>
      {label}
      <ArrowRight className={cn(ARROW_BASE_CLASS, textColor)} size={20} />
    </button>
  )
}

export const getButtonArrow2Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow2Props) => {
  const btnClass = cn(BTN_BASE_CLASS, textColor)
  const arrowClass = cn(ARROW_BASE_CLASS, textColor)

  return `
import { ArrowRight } from 'lucide-react'

export const ButtonArrow2 = () => {
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
