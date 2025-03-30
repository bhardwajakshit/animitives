import { motion } from 'framer-motion'

const letterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
}

export const AnimatedCustomizable = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
