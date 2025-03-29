import { cn } from '@/lib/cn'

type ButtonFillRLProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonFillRLProps = {
  label: 'Hover Me',
  textColor:
    'text-black dark:text-white hover:text-white dark:hover:text-black',
  bgColor: 'bg-black dark:bg-white',
  borderColor: 'border-black dark:border-white',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'group relative inline-flex items-center justify-center overflow-hidden border px-6 py-2 text-sm font-medium'
const SPAN_BASE_CLASS =
  'absolute inset-0 translate-x-full transition-all duration-300 ease-out group-hover:translate-x-0'

export const ButtonFillRL = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillRLProps) => {
  return (
    <button className={cn(BASE_CLASS, textColor, borderColor, borderRadius)}>
      <span className={cn(SPAN_BASE_CLASS, bgColor, borderRadius)}></span>
      <span className="relative transition-colors duration-300">{label}</span>
    </button>
  )
}

export const getButtonFillRLSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonFillRLProps) => {
  const btnClass = cn(BASE_CLASS, textColor, borderColor, borderRadius)
  const spanClass = cn(SPAN_BASE_CLASS, bgColor, borderRadius)

  return `
export const ButtonFillRL = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      <span className="${spanClass}"></span>
      <span className="relative transition-colors duration-300">${label}</span>
    </button>
  )
};`.trim()
}
