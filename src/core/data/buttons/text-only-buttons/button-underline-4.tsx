import { cn } from '@/lib/cn'

type ButtonUnderline4Props = {
  label?: string
  textColor?: string
  underlineColor?: string
  underlineHeight?: string
  animationDuration?: string
}

const DEFAULT_PROPS: ButtonUnderline4Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  underlineColor: 'after:bg-black after:dark:bg-white',
  underlineHeight: 'after:h-[2px]',
  animationDuration: 'after:duration-300',
}
const BASE_CLASS = 'relative text-sm font-medium'
const AFTER_CLASS =
  'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left'

export const ButtonUnderline4 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline4Props) => {
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

export const getButtonUnderline4Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline4Props) => {
  const btnClass = cn(
    BASE_CLASS,
    AFTER_CLASS,
    textColor,
    underlineColor,
    underlineHeight,
    animationDuration
  )

  return `
export const ButtonUnderline4 = () => {
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
