import { cn } from '@/lib/cn'

type ButtonPulseGlowProps = {
  label?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
}

const DEFAULT_PROPS: ButtonPulseGlowProps = {
  label: 'Get Started',
  textColor: 'text-white',
  bgColor: 'bg-[#5d290b]',
  borderColor: 'border-[#8B4F2E] hover:border-[#b0633a]',
  borderRadius: 'rounded-full',
}
const BASE_CLASS =
  'inline-flex animate-pulseGlow items-center space-x-2 border px-6 py-2 transition-all duration-300 hover:shadow-[0_0_12px_#b0633a]'

export const ButtonPulseGlow = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonPulseGlowProps) => {
  return (
    <button
      className={cn(BASE_CLASS, textColor, bgColor, borderColor, borderRadius)}
    >
      <span className="text-sm font-medium [text-shadow:0_0_12px_#000,0_0_12px_#000,0_0_12px_#000]">
        {label}
      </span>
    </button>
  )
}

export const getButtonPulseGlowSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonPulseGlowProps): string => {
  const btnClass = cn(BASE_CLASS, textColor, bgColor, borderColor, borderRadius)

  return `
export const ButtonPulseGlow = () => {
  return (
    <button 
    className="${btnClass}" 
    >
      <span className="text-sm font-medium [text-shadow:0_0_12px_#000,0_0_12px_#000,0_0_12px_#000]">
        ${label}
      </span>
    </button>
  )
};`.trim()
}
