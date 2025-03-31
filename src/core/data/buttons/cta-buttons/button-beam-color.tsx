'use client'

import { cn } from '@/lib/cn'

type ButtonBeamColorProps = {
  label?: string
  borderRadius?: string
}

const DEFAULT_PROPS = {
  label: 'Get Started',
  borderRadius: 'rounded-full',
}
const DIV_BASE_CLASS =
  'group relative overflow-hidden p-[1px] shadow transition-all duration-300 dark:drop-shadow-[0_0_20px_#452324]'
const BUTTON_BASE_CLASS =
  'relative flex w-full transform-gpu items-center justify-center gap-1 bg-white px-5 py-2 text-sm font-medium text-black shadow-[inset_0_-8px_10px_#FF5A001f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#FF5A003f] group-active:shadow-[inset_0_-10px_10px_#FF5A003f] dark:bg-black dark:text-white'

export const ButtonBeamColor = ({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBeamColorProps) => {
  return (
    <div className={cn(DIV_BASE_CLASS, borderRadius)}>
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg,#fff_0_340deg,#FF5A00_360deg)] dark:bg-[conic-gradient(from_90deg,#452324_0_340deg,#eca5a7_360deg)]"></span>

      <button className={cn(BUTTON_BASE_CLASS, borderRadius)}>
        {label}
        <ArrowIcon />
      </button>
    </div>
  )
}

const ArrowIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
      className="fill-black/80 transition-all duration-300 group-hover:translate-x-[5.2px] group-hover:fill-black dark:fill-white/80 dark:group-hover:fill-white"
    ></path>
    <path
      d="M1.75 8H11"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="translate-x-[-5px] stroke-transparent transition-all duration-300 group-hover:translate-x-[4px] group-hover:stroke-black dark:group-hover:stroke-white"
    ></path>
  </svg>
)

export const getButtonBeamColorSource = ({
  label = DEFAULT_PROPS.label,
  borderRadius = DEFAULT_PROPS.borderRadius,
}: ButtonBeamColorProps) => {
  const divClass = cn(DIV_BASE_CLASS, borderRadius)
  const btnClass = cn(BUTTON_BASE_CLASS, borderRadius)

  return `
export const ButtonBeamColor = () => {
  return (
    <div className="${divClass}">
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg,#fff_0_340deg,#FF5A00_360deg)] dark:bg-[conic-gradient(from_90deg,#452324_0_340deg,#eca5a7_360deg)]"></span>

      <button className="${btnClass}">
        ${label}
        <ArrowIcon />
      </button>
    </div>
  )
}

const ArrowIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
      className="fill-black/80 transition-all duration-300 group-hover:translate-x-[5.2px] group-hover:fill-black dark:fill-white/80 dark:group-hover:fill-white"
    ></path>
    <path
      d="M1.75 8H11"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="translate-x-[-5px] stroke-transparent transition-all duration-300 group-hover:translate-x-[4px] group-hover:stroke-black dark:group-hover:stroke-white"
    ></path>
  </svg>
)
`.trim()
}
