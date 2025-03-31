import { motion } from 'framer-motion'

type ButtonSparkleProps = {
  label?: string
}

const DEFAULT_PROPS = {
  label: 'Hover Me',
}

const positions = [
  { top: 0, left: 12 },
  { top: 0, right: 12 },
  { bottom: 0, left: 12 },
  { bottom: 0, right: 12 },
  { top: '50%', left: 0 },
  { top: '50%', right: 0 },
  { bottom: '50%', left: 0 },
  { bottom: '50%', right: 0 },
  { top: '75%', left: 2 },
]

export const ButtonSparkle = ({
  label = DEFAULT_PROPS.label,
}: ButtonSparkleProps) => {
  return (
    <button className="relative flex items-center justify-center rounded-full border border-amber-500/20 bg-white px-6 py-2 text-sm font-medium text-amber-600 transition-all duration-300 ease-in-out hover:border-amber-500/30 dark:bg-black dark:text-amber-100">
      {label}

      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={pos}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180],
          }}
          transition={{
            duration: 0.8,
            delay: Math.random() * 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-[12px] w-[1px] bg-[linear-gradient(transparent,rgba(224,173,135,0.8),transparent)] opacity-80 blur-[0.2px]"></span>
            <span className="absolute h-[12px] w-[1px] rotate-90 bg-[linear-gradient(transparent,rgba(224,173,135,0.8),transparent)] opacity-80 blur-[0.2px]"></span>
          </div>
        </motion.div>
      ))}
    </button>
  )
}

export const getButtonSparkleSource = ({
  label = DEFAULT_PROPS.label,
}: ButtonSparkleProps) => {
  return `
import { motion } from 'framer-motion'

const positions = [
  { top: 0, left: 12 },
  { top: 0, right: 12 },
  { bottom: 0, left: 12 },
  { bottom: 0, right: 12 },
  { top: '50%', left: 0 },
  { top: '50%', right: 0 },
  { bottom: '50%', left: 0 },
  { bottom: '50%', right: 0 },
  { top: '75%', left: 2 },
]

export const ButtonSparkle = () => {
  return (  
    <button className="relative flex items-center justify-center rounded-full border border-amber-500/20 bg-white px-6 py-2 text-sm font-medium text-amber-600 transition-all duration-300 ease-in-out hover:border-amber-500/30 dark:bg-black dark:text-amber-100">
      ${label}

      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={pos}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180],
          }}
          transition={{
            duration: 0.8,
            delay: Math.random() * 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-[12px] w-[1px] bg-[linear-gradient(transparent,rgba(224,173,135,0.8),transparent)] opacity-80 blur-[0.2px]"></span>
            <span className="absolute h-[12px] w-[1px] rotate-90 bg-[linear-gradient(transparent,rgba(224,173,135,0.8),transparent)] opacity-80 blur-[0.2px]"></span>
          </div>
        </motion.div>
      ))}
    </button>
  )
}`.trim()
}
