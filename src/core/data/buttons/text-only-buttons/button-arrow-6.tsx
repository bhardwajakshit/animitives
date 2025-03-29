import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

type ButtonArrow6Props = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonArrow6Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
}
const BTN_BASE_CLASS =
  'group relative inline-flex items-center justify-center px-4 text-sm font-medium'

export const ButtonArrow6 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow6Props) => {
  return (
    <button className={cn(BTN_BASE_CLASS, textColor)} aria-label={label}>
      <div className="absolute left-0 -translate-x-full transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight size={20} className={textColor} />
      </div>

      <span className="-translate-x-2 transition-transform duration-300 group-hover:translate-x-2">
        {label}
      </span>

      <div className="absolute right-0 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
        <ArrowRight size={20} className={textColor} />
      </div>
    </button>
  )
}

export const getButtonArrow6Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonArrow6Props) => {
  const btnClass = cn(BTN_BASE_CLASS, textColor)

  return `
import { ArrowUpRight } from 'lucide-react'

export const ButtonArrow6 = () => {
  return (
    <button 
    className="${btnClass}" 
    >
     <div className="absolute left-0 -translate-x-full transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight size={20} className="${textColor}" />
      </div>

      <span className="-translate-x-2 transition-transform duration-300 group-hover:translate-x-2">
        ${label}
      </span>

      <div className="absolute right-0 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
        <ArrowRight size={20} className="${textColor}" />
      </div>
    </button>
  );
};
  `.trim()
}
