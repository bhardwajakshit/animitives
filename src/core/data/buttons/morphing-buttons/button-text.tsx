import { cn } from '@/lib/cn'

type ButtonTextProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonTextProps = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  bgColor: 'bg-white dark:bg-black',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'group relative inline-flex h-10 items-center justify-center overflow-hidden px-6 text-sm font-medium'

export const ButtonText = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonTextProps) => {
  return (
    <button className={cn(BASE_CLASS, textColor, bgColor, borderRadius)}>
      <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-[150%]">
        {label}
      </div>
      <div className="absolute translate-y-[150%] transition-transform duration-300 group-hover:translate-y-[0]">
        🦦
      </div>
    </button>
  )
}

export const getButtonTextSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonTextProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderRadius)

  return `
export const ButtonText = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-[150%]">${label}</div>
      <div className="absolute translate-y-[150%] transition-transform duration-300 group-hover:translate-y-[0]">🦦</div>
    </button>
  )
};`.trim()
}

export const ButtonTextVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-white dark:bg-black',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white',
    bgColor: 'bg-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-white',
    bgColor: 'bg-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-white',
    bgColor: 'bg-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-white',
    bgColor: 'bg-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-white',
    bgColor: 'bg-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-white',
    bgColor: 'bg-purple-600',
  },
]
