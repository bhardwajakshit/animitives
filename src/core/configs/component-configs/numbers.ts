import { ComponentProps } from '.'
import { TickNumberDemo } from '@/core/data/components/numbers/tick-number'
import { TickConfettiNumberDemo } from '@/core/data/components/numbers/tick-confetti-number'
import { SlidingNumberDemo } from '@/core/data/components/numbers/sliding-number'
import { REQUIREMENT } from '@/lib/constants'

export const numbers: ComponentProps[] = [
  {
    id: 'tick',
    label: 'Tick Number',
    ComponentComponent: TickNumberDemo,
    path: 'src/core/data/components/numbers/tick-number.tsx',
    reloadable: true,
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'tick-confetti',
    label: 'Tick Confetti Number',
    ComponentComponent: TickConfettiNumberDemo,
    path: 'src/core/data/components/numbers/tick-confetti-number.tsx',
    reloadable: true,
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CONFETTI,
    ],
  },
  {
    id: 'slide',
    label: 'Sliding Number',
    ComponentComponent: SlidingNumberDemo,
    path: 'src/core/data/components/numbers/sliding-number.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
]
