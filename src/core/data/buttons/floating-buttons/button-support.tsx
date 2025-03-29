import { LucideBadgeHelp } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonSupportProps = {
  bgColor?: string
  textColor?: string
}

const DEFAULT_PROPS: ButtonSupportProps = {
  bgColor: 'bg-black hover:bg-black/60 dark:bg-white dark:hover:bg-white/60',
  textColor: 'text-white dark:text-black',
}
const BASE_CLASS =
  'inline-flex items-center justify-center rounded-t-full rounded-br-full p-2 transition-colors duration-200'

export const ButtonSupport = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonSupportProps) => {
  return (
    <button className={cn(BASE_CLASS, bgColor, textColor)}>
      <LucideBadgeHelp />
    </button>
  )
}

export const getButtonSupportSource = ({
  bgColor = DEFAULT_PROPS.bgColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonSupportProps) => {
  const btnClass = cn(BASE_CLASS, bgColor, textColor)

  return `
import { LucideBadgeHelp } from 'lucide-react'

export const ButtonSupport = () => {
  return (
    <button
      className="${btnClass}"
    >
      <LucideBadgeHelp />
    </button>
  )
};`.trim()
}

export const ButtonSupportVariants = [
  {
    color: 'bg-black dark:bg-white',
    bgColor: 'bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80',
    textColor: 'text-white dark:text-black',
  },
  {
    color: 'bg-red-600',
    bgColor: 'bg-red-600 hover:bg-red-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-emerald-600',
    bgColor: 'bg-emerald-600 hover:bg-emerald-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-orange-600',
    bgColor: 'bg-orange-600 hover:bg-orange-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-rose-600',
    bgColor: 'bg-rose-600 hover:bg-rose-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-600 hover:bg-indigo-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-blue-600',
    bgColor: 'bg-blue-600 hover:bg-blue-600/80',
    textColor: 'text-white',
  },
  {
    color: 'bg-purple-600',
    bgColor: 'bg-purple-600 hover:bg-purple-600/80',
    textColor: 'text-white',
  },
]
