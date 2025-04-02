import { ComponentProps } from '.'
import { AnimatedRingText } from '@/core/data/components/perspective/animated-ring-text'
import { REQUIREMENT } from '@/lib/constants'

export const perspective: ComponentProps[] = [
  {
    id: 'animated-ring-text',
    label: 'Animated Ring Text',
    ComponentComponent: AnimatedRingText,
    path: 'src/core/data/components/perspective/animated-ring-text.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
]
