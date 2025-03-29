import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonFlipsideProps = {
  label?: string
  textColor?: string
}

const DEFAULT_PROPS = {
  label: 'animitives',
  textColor: 'text-black dark:text-white',
}
const BASE_CLASS = 'group relative bg-transparent'

export const ButtonFlipside = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonFlipsideProps) => {
  const characters = Array.from(label, (char, index) =>
    char === ' ' ? (
      <span key={`space-${index}`}>&nbsp;</span>
    ) : (
      <span key={index}>{char}</span>
    )
  )

  const topContainer = {
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const bottomContainer = {
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const topVariants = {
    initial: {
      y: 0,
      skewY: 0,
      rotateX: 180,
      rotateY: 180,
    },
    hover: {
      y: '100%',
      skewY: -24,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  const bottomVariants = {
    initial: {
      y: '-100%',
      skewY: -24,
    },
    hover: {
      y: '0%',
      skewY: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.button
      className={cn(BASE_CLASS, textColor)}
      whileHover="hover"
      initial="initial"
    >
      <span className="relative inline-flex overflow-hidden">
        <motion.div variants={topContainer}>
          {[...characters].reverse().map((char, index) => (
            <motion.span
              key={`top-${index}`}
              variants={topVariants}
              className="inline-block text-lg font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className="absolute" variants={bottomContainer}>
          {characters.map((char, index) => (
            <motion.span
              key={`bottom-${index}`}
              variants={bottomVariants}
              className="inline-block text-lg font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </span>
    </motion.button>
  )
}

export const getButtonFlipsideSource = ({
  label = DEFAULT_PROPS.label,
  textColor = DEFAULT_PROPS.textColor,
}: ButtonFlipsideProps) => {
  const btnClass = cn(BASE_CLASS, textColor)

  return `
import { motion } from 'framer-motion'

export const ButtonFlipside = ({ label = "${label}" }: { label: string }) => {
const characters = Array.from(label, (char, index) =>
    char === ' ' ? (
     <span key={\`space-\${index}\`}>&nbsp;</span>
    ) : (
      <span key={index}>{char}</span>
    )
  )

  const topContainer = {
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const bottomContainer = {
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const topVariants = {
    initial: {
      y: 0,
      skewY: 0,
      rotateX: 180,
      rotateY: 180,
    },
    hover: {
      y: '100%',
      skewY: -24,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  const bottomVariants = {
    initial: {
      y: '-100%',
      skewY: -24,
    },
    hover: {
      y: '0%',
      skewY: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.button
      className="${btnClass}"
      whileHover="hover"
      initial="initial"
    >
      <span className="relative inline-flex overflow-hidden">
        <motion.div variants={topContainer}>
          {[...characters].reverse().map((char, index) => (
            <motion.span
              key={\`top-\${index}\`}
              variants={topVariants}
              className="inline-block text-lg font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className="absolute" variants={bottomContainer}>
          {characters.map((char, index) => (
            <motion.span
              key={\`bottom-\${index}\`}
              variants={bottomVariants}
              className="inline-block text-lg font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </span>
    </motion.button>
  )
};`.trim()
}

export const ButtonFlipsideVariants = [
  {
    color: 'bg-black dark:bg-white',
    textColor: 'text-black dark:text-white',
  },
  {
    color: 'bg-red-600',
    textColor: 'text-red-600',
  },
  {
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
  },
  {
    color: 'bg-orange-600',
    textColor: 'text-orange-600',
  },
  {
    color: 'bg-rose-600',
    textColor: 'text-rose-600',
  },
  {
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
  },
  {
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
  },
  {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
]
