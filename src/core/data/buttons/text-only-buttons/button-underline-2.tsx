import { cn } from '@/lib/cn'

type ButtonUnderline2Props = {
  label?: string
  textColor?: string
  underlineColor?: string
  underlineHeight?: string
  animationDuration?: string
}

const DEFAULT_PROPS: ButtonUnderline2Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  underlineColor: 'after:bg-black after:dark:bg-white',
  underlineHeight: 'after:h-[2px]',
  animationDuration: 'after:duration-300',
}
const BASE_CLASS = 'relative text-sm font-medium'
const AFTER_CLASS =
  'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100'

export const ButtonUnderline2 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline2Props) => {
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

export const getButtonUnderline2Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline2Props) => {
  const btnClass = cn(
    BASE_CLASS,
    AFTER_CLASS,
    textColor,
    underlineColor,
    underlineHeight,
    animationDuration
  )

  return `
export const ButtonUnderline2 = () => {
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
