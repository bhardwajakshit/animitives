import { cn } from '@/lib/cn'

type ButtonUnderline5Props = {
  label?: string
  textColor?: string
  underlineColor?: string
  underlineHeight?: string
  animationDuration?: string
}

const DEFAULT_PROPS: ButtonUnderline5Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  underlineColor: 'after:bg-black after:dark:bg-white',
  underlineHeight: 'after:h-[2px]',
  animationDuration: 'after:duration-300',
}
const BASE_CLASS = 'relative text-sm font-medium'
const AFTER_CLASS =
  'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:opacity-0 after:transition-opacity hover:after:opacity-100'

export const ButtonUnderline5 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline5Props) => {
  return (
    <button
      className={cn(
        BASE_CLASS,
        AFTER_CLASS,
        textColor,
        underlineColor,
        underlineHeight,
        animationDuration
      )}
    >
      {label}
    </button>
  )
}

export const getButtonUnderline5Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline5Props) => {
  const btnClass = cn(
    BASE_CLASS,
    AFTER_CLASS,
    textColor,
    underlineColor,
    underlineHeight,
    animationDuration
  )

  return `
  export const ButtonUnderline5 = () => {
    return (
      <button 
      className="${btnClass}" 
      >
        ${label}
      </button>
    );
  };
    `.trim()
}
