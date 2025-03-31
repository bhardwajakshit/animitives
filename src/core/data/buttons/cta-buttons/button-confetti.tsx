import { useRef } from 'react'
import confetti from 'canvas-confetti'
import { cn } from '@/lib/cn'

type ButtonConfettiProps = {
  label?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
  textGradient?: string
  confettiColors?: string[]
  particleCount?: number
  spread?: number
}

const DEFAULT_PROPS: ButtonConfettiProps = {
  label: 'Surprise!',
  bgColor: 'bg-gray-100 hover:bg-gray-200',
  borderColor: 'border-gray-300',
  borderRadius: 'rounded-full',
  textGradient: 'from-gray-600 to-gray-800',
  particleCount: 100,
  spread: 70,
}
const BASE_CLASS = `relative inline-flex items-center justify-center border px-6 py-2 text-sm font-medium transition-all duration-300`
const SPAN_BASE_CLASS = `relative inline-block bg-gradient-to-r bg-clip-text text-transparent`

export const ButtonConfetti = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
  textGradient = DEFAULT_PROPS.textGradient,
  confettiColors = DEFAULT_PROPS.confettiColors,
  particleCount = DEFAULT_PROPS.particleCount,
  spread = DEFAULT_PROPS.spread,
}: ButtonConfettiProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const x = (buttonRect.left + buttonRect.width / 2) / window.innerWidth
      const y = buttonRect.top / window.innerHeight

      confetti({
        particleCount,
        spread,
        origin: { x, y },
        ...(confettiColors && { colors: confettiColors }),
      })
    }
  }

  return (
    <button
      ref={buttonRef}
      className={cn(BASE_CLASS, bgColor, borderColor, borderRadius)}
      aria-label={label}
      onClick={handleClick}
    >
      <span className={cn(SPAN_BASE_CLASS, textGradient)}>{label}</span>
    </button>
  )
}

export const getButtonConfettiSource = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
  textGradient = DEFAULT_PROPS.textGradient,
  confettiColors = DEFAULT_PROPS.confettiColors,
  particleCount = DEFAULT_PROPS.particleCount,
  spread = DEFAULT_PROPS.spread,
}: ButtonConfettiProps) => {
  return `
import { useRef } from 'react'
import confetti from 'canvas-confetti'
import { cn } from '@/lib/cn'

type ButtonConfettiProps = {
  label?: string
  bgColor?: string
  borderColor?: string
  borderRadius?: string
  textGradient?: string
  confettiColors?: string[]
  particleCount?: number
  spread?: number
}

const DEFAULT_PROPS: ButtonConfettiProps = {
  label: '${label}',
  bgColor: '${bgColor}',
  borderColor: '${borderColor}',
  borderRadius: '${borderRadius}',
  textGradient: '${textGradient}',
  confettiColors: ${JSON.stringify(confettiColors)},
  particleCount: ${particleCount},
  spread: ${spread},
}
const BASE_CLASS = \`relative inline-flex items-center justify-center border px-6 py-2 text-sm font-medium transition-all duration-300\`
const SPAN_BASE_CLASS = \`relative inline-block bg-gradient-to-r bg-clip-text text-transparent\`

export const ButtonConfetti = ({
  label = DEFAULT_PROPS.label,
  bgColor = DEFAULT_PROPS.bgColor,
  borderColor = DEFAULT_PROPS.borderColor,
  borderRadius = DEFAULT_PROPS.borderRadius,
  textGradient = DEFAULT_PROPS.textGradient,
  confettiColors,
  particleCount = DEFAULT_PROPS.particleCount,
  spread = DEFAULT_PROPS.spread,
}: ButtonConfettiProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const x = (buttonRect.left + buttonRect.width / 2) / window.innerWidth
      const y = buttonRect.top / window.innerHeight

      confetti({
        particleCount,
        spread,
        origin: { x, y },
        colors: confettiColors,
      })
    }
  }

  return (
    <button
      ref={buttonRef}
      className={cn(BASE_CLASS, bgColor, borderColor, borderRadius)}
      aria-label={label}
      onClick={handleClick}
    >
      <span className={cn(SPAN_BASE_CLASS, textGradient)}>{label}</span>
    </button>
  )
};`.trim()
}

export const ButtonConfettiVariants = [
  {
    color:
      'bg-[linear-gradient(120deg,_rgb(110,182,242)_20%,_rgb(168,85,247),_rgb(234,88,12),_rgb(234,179,8)_80%)]',
    name: 'default',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    textGradient: 'from-gray-600 to-gray-800',
    confettiColors: undefined,
    particleCount: 100,
    spread: 70,
  },
  {
    color: 'bg-blue-100',
    name: 'blue',
    bgColor: 'bg-blue-100 hover:bg-blue-200',
    borderColor: 'border-blue-300',
    textGradient: 'from-blue-600 to-blue-800',
    confettiColors: ['#3B82F6', '#1D4ED8', '#93C5FD'],
    particleCount: 100,
    spread: 70,
  },
  {
    color: 'bg-purple-100',
    name: 'purple',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    textGradient: 'from-purple-600 to-purple-800',
    confettiColors: ['#8B5CF6', '#6D28D9', '#C4B5FD'],
    particleCount: 120,
    spread: 80,
  },
  {
    color: 'bg-green-100',
    name: 'green',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    textGradient: 'from-green-600 to-green-800',
    confettiColors: ['#10B981', '#047857', '#6EE7B7'],
    particleCount: 90,
    spread: 60,
  },
  {
    color: 'bg-pink-100',
    name: 'pink',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    textGradient: 'from-pink-600 to-pink-800',
    confettiColors: ['#EC4899', '#BE185D', '#FBCFE8'],
    particleCount: 150,
    spread: 90,
  },
  {
    color: 'bg-amber-100',
    name: 'amber',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-300',
    textGradient: 'from-amber-600 to-amber-800',
    confettiColors: ['#F59E0B', '#B45309', '#FCD34D'],
    particleCount: 110,
    spread: 75,
  },
  {
    color: 'bg-red-100',
    name: 'red',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
    textGradient: 'from-red-600 to-red-800',
    confettiColors: ['#EF4444', '#DC2626', '#F87171'],
    particleCount: 100,
    spread: 70,
  },
  {
    color: 'bg-cyan-100',
    name: 'cyan',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-300',
    textGradient: 'from-cyan-600 to-cyan-800',
    confettiColors: ['#06B6D4', '#0EA5E9', '#34D399'],
    particleCount: 120,
    spread: 80,
  },
]
