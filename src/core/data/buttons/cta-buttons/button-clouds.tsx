import { motion } from 'framer-motion'
import { ChevronRight, Cloud } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonCloudsProps = {
  label?: string
  backgroundColor?: string
  shadowColor?: string
  textColor?: string
}

const DEFAULT_PROPS = {
  label: 'Get Started',
  backgroundColor: 'bg-sky-400',
  shadowColor: 'shadow-sky-400/50 hover:shadow-sky-400/70',
  textColor: 'text-white',
}

const cloudPositions = [
  { top: -10, left: 20 },
  { top: -10, right: -10 },
  { bottom: 10, left: -20 },
  { bottom: 10, right: 20 },
  { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
]

const cloudVariants = {
  initial: { opacity: 1 },
  animate: {
    y: [0, -5, 5, 0],
    transition: { repeat: Infinity, duration: 2 },
  },
  hover: (i: number) => ({
    x: i === 0 || i === 2 ? -50 : 50,
    y: i === 0 || i === 1 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
}

export const ButtonClouds = ({
  label = DEFAULT_PROPS.label,
  backgroundColor = DEFAULT_PROPS.backgroundColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonCloudsProps) => {
  return (
    <motion.button
      className={cn(
        'relative flex h-10 w-36 items-center justify-center rounded-full shadow-lg transition-all duration-300',
        backgroundColor,
        shadowColor,
        textColor
      )}
      whileHover="hover"
    >
      <motion.span
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        className="absolute inline-flex items-center gap-1 text-sm font-medium"
      >
        {label}
        <ChevronRight size={20} className={textColor} />
      </motion.span>

      <div className="absolute inset-0 overflow-hidden rounded-full">
        {cloudPositions.map((pos, i) => (
          <motion.div
            key={i}
            variants={cloudVariants}
            custom={i}
            className="absolute"
            style={pos}
          >
            <Cloud size={32} fill="white" />
          </motion.div>
        ))}
      </div>
    </motion.button>
  )
}

export const getButtonCloudsSource = ({
  label = DEFAULT_PROPS.label,
  backgroundColor = DEFAULT_PROPS.backgroundColor,
  shadowColor = DEFAULT_PROPS.shadowColor,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonCloudsProps) => {
  const btnClass = cn(
    'relative flex h-10 w-36 items-center justify-center rounded-full shadow-lg transition-all duration-300',
    backgroundColor,
    shadowColor,
    textColor
  )

  return `
import { motion } from 'framer-motion'
import { ChevronRight, Cloud } from 'lucide-react'
  
export const ButtonCloud = () => {
  return (
    <motion.button
      className="${btnClass}"
      whileHover="hover"
    >
      <motion.span
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        className="absolute inline-flex items-center gap-1 text-sm font-medium"
      >
        ${label}
        <ChevronRight size={20} className="${textColor}" />
      </motion.span>

      <div className="absolute inset-0 overflow-hidden rounded-full">
        {cloudPositions.map((pos, i) => (
          <motion.div
            key={i}
            variants={cloudVariants}
            custom={i}
            className="absolute"
            style={pos}
          >
            <Cloud size={32} fill="white" />
          </motion.div>
        ))}
      </div>
    </motion.button>
  )
}`.trim()
}
