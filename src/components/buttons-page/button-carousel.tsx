import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ButtonCarousel = ({
  ButtonComponent,
  variants,
}: {
  ButtonComponent: any
  variants?: { [key: string]: any }
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (!variants || variants.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % variants.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [variants])

  if (!ButtonComponent) return null
  if (!variants || variants.length === 0) return <ButtonComponent />

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 50, scale: 0.8, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -50, scale: 0.8, filter: 'blur(4px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <ButtonComponent
          bgColor={variants[currentIndex].bgColor}
          textColor={variants[currentIndex].textColor}
          shadowColor={variants[currentIndex].shadowColor}
          borderColor={variants[currentIndex].borderColor}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ButtonCarousel
