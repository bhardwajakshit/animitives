import { motion } from 'framer-motion'
import { CTAButton } from '../../common/cta-button'
import { HeroText } from './hero-text'
import { HeroShowcase } from './hero-showcase'

export const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <HeroText />
        <CTAButton label="Explore" href="/components" />
      </motion.div>

      <div className="pointer-events-auto absolute inset-0 z-0">
        <HeroShowcase />
      </div>
    </div>
  )
}
