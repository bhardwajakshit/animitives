import { cn } from '@/lib/cn'

type ButtonHoverBottomGlowProps = {
  label?: string
  bgColor?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonHoverBottomGlowProps = {
  label: 'Get Started',
  bgColor: 'bg-black',
  textColor: 'text-white',
}
const BASE_CLASS =
  "relative inline-flex items-center rounded-full px-6 py-2 text-sm font-medium after:absolute after:inset-0 after:rounded-full after:content-[''] after:bg-[radial-gradient(85%_120%_at_50%_120%,rgba(255,255,255,0.24),transparent)] after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out hover:after:opacity-100"

export const ButtonHoverBottomGlow = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonHoverBottomGlowProps) => {
  return <button className={cn(BASE_CLASS, bgColor, textColor)}>{label}</button>
}

export const getButtonHoverBottomGlowSource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonHoverBottomGlowProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor)

  return `
export const ButtonGlowBottom = () => {
  return (
    <button 
      className="${btnClass}"
    >
      ${label}
    </button>
  )
};`.trim()
}
