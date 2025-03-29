import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonMorphingProps = {
  label?: string
  textColor?: string
  bgColor?: string
}

const DEFAULT_PROPS: ButtonMorphingProps = {
  label: 'Hover Me',
  textColor: 'text-white dark:text-black',
  bgColor: 'bg-black dark:bg-white',
}
const BASE_CLASS =
  'group relative flex items-center justify-center gap-3 rounded-full py-2 font-medium transition-all duration-300 ease-in-out hover:-translate-x-4'
const ARROW_BASE_CLASS =
  'absolute right-0 flex translate-x-0 items-center justify-center rounded-full p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-10'

export const ButtonArrowMorphing = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
}: ButtonMorphingProps) => {
  return (
    <button
      className={cn(BASE_CLASS, textColor, bgColor)}
      style={{ filter: 'url(#blurFilter)' }}
    >
      <svg
        width="0"
        height="0"
        className="absolute"
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -12"
              result="blurFilter"
            />
            <feComposite in="SourceGraphic" in2="blurFilter" operator="atop" />
            <feBlend in="SourceGraphic" in2="buttonFilter" />
          </filter>
        </defs>
      </svg>

      <span className="relative z-10 pl-4 pr-8 text-sm font-medium transition-all duration-300 group-hover:pr-4">
        {label}
      </span>

      <div className={cn(ARROW_BASE_CLASS, bgColor)}>
        <ArrowRight size={20} />
      </div>
    </button>
  )
}

export const getButtonArrowMorphingSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
}: ButtonMorphingProps) => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor)
  const arrowClass = cn(ARROW_BASE_CLASS, bgColor)

  return `
export const ButtonArrowMorphing = () => {  
  return (
    <button
      className="${btnClass}"
      style={{ filter: 'url(#blurFilter)' }}
    >
      <svg
        width="0"
        height="0"
        className="absolute"
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -12"
              result="blurFilter"
            />
            <feComposite in="SourceGraphic" in2="blurFilter" operator="atop" />
            <feBlend in="SourceGraphic" in2="buttonFilter" />
          </filter>
        </defs>
      </svg>

      <span className="relative z-10 pl-4 pr-8 text-sm font-medium transition-all duration-300 group-hover:pr-4">
        {label}
      </span>

      <div className="${arrowClass}">
        <ArrowRight size={20} />
      </div>
    </button>
  )
}`.trim()
}

export const ButtonArrowMorphingVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-black dark:bg-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-white dark:text-black',
    bgColor: 'bg-purple-600',
  },
]
