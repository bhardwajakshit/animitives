import { cn } from '@/lib/cn'
import { ArrowUpRight } from 'lucide-react'

type ButtonArrow5Props = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonArrow5Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
}
const BTN_BASE_CLASS =
  'group inline-flex items-center gap-1.5 text-sm font-medium'
const ARROW_BASE_CLASS = '-translate-x-4'

export const ButtonArrow5 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow5Props) => {
  return (
    <button
      className={cn(
        'group inline-flex items-center gap-1.5 text-sm font-medium',
        textColor
      )}
    >
      {label}
      <div className="relative h-5 w-5 overflow-hidden">
        <div className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-4">
          <ArrowUpRight size={20} className={textColor} />
          <ArrowUpRight className={cn(ARROW_BASE_CLASS, textColor)} size={20} />
        </div>
      </div>
    </button>
  )
}

export const getButtonArrow5Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow5Props) => {
  const btnClass = cn(BTN_BASE_CLASS, textColor)
  const arrowClass = cn(ARROW_BASE_CLASS, textColor)

  return `
import { ArrowUpRight } from 'lucide-react'

export const ButtonArrow5 = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      ${label}
    <div className="relative h-5 w-5 overflow-hidden">
        <div className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-4">
          <ArrowUpRight size={20} className="${textColor}" />
          <ArrowUpRight className="${arrowClass}" size={20} />
        </div>
      </div>
    </button>
  );
};
  `.trim()
}
