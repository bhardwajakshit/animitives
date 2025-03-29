import { cn } from '@/lib/cn'

type ButtonUnderline1Props = {
  label?: string
  textColor?: string
  underlineColor?: string
  underlineHeight?: string
  animationDuration?: string
}

const DEFAULT_PROPS: ButtonUnderline1Props = {
  label: 'Hover Me',
  textColor: 'text-black dark:text-white',
  underlineColor: 'after:bg-black after:dark:bg-white',
  underlineHeight: 'after:h-[2px]',
  animationDuration: 'after:duration-300',
}
const BASE_CLASS = 'relative text-sm font-medium'
const AFTER_CLASS =
  'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100'

export const ButtonUnderline1 = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline1Props) => {
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

export const getButtonUnderline1Source = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
  underlineColor = DEFAULT_PROPS.underlineColor,
  underlineHeight = DEFAULT_PROPS.underlineHeight,
  animationDuration = DEFAULT_PROPS.animationDuration,
}: ButtonUnderline1Props) => {
  const btnClass = cn(
    BASE_CLASS,
    AFTER_CLASS,
    textColor,
    underlineColor,
    underlineHeight,
    animationDuration
  )

  return `
export const ButtonUnderline1 = () => {
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

export const ButtonUnderlineVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
    underlineColor: 'after:bg-black after:dark:bg-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
    underlineColor: 'after:bg-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    underlineColor: 'after:bg-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
    underlineColor: 'after:bg-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
    underlineColor: 'after:bg-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    underlineColor: 'after:bg-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    underlineColor: 'after:bg-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    underlineColor: 'after:bg-purple-600',
  },
]
