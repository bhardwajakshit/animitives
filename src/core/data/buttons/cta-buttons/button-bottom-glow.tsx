import { cn } from '@/lib/cn'

type ButtonBottomGlowProps = {
  label?: string
  textColor?: string
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS = {
  label: 'Get Started',
  textColor: 'text-white',
  backgroundColor: 'bg-black',
  borderColor: 'border-white/20 hover:border-white/30',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  "relative inline-flex items-center justify-center border px-6 py-2 text-sm font-medium transition-colors duration-200 before:absolute before:bottom-[-1px] before:left-[10%] before:right-[10%] before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:blur-[2px] before:content-[''] after:absolute after:bottom-[-1px] after:left-1/2 after:h-[1px] after:w-[30%] after:-translate-x-1/2 after:transform after:bg-gradient-to-r after:from-transparent after:via-white/80 after:to-transparent after:content-['']"

export const ButtonBottomGlow = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  backgroundColor = DEFAULT_PROPS.backgroundColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBottomGlowProps) => {
  return (
    <button
      className={cn(
        BASE_CLASS,
        textColor,
        backgroundColor,
        borderColor,
        borderRadius
      )}
    >
      {label}
    </button>
  )
}

export const getButtonBottomGlowSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  backgroundColor = DEFAULT_PROPS.backgroundColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBottomGlowProps) => {
  const btnClass = cn(
    BASE_CLASS,
    textColor,
    backgroundColor,
    borderColor,
    borderRadius
  )

  return `
export const ButtonBottomGlow = () => {
  return (
    <button 
      className="${btnClass}">
      ${label}
    </button>
  );
};`.trim()
}

export const ButtonBottomGlowVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-white dark:text-black',
    backgroundColor: 'bg-black dark:bg-white',
    borderColor: 'border-white/20 hover:border-white/30',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-white',
    backgroundColor: 'bg-red-600',
    borderColor: 'border-white/20 hover:border-white/30',
  },
]
