import { ComponentProps } from '.'
import { FannedCardsDemo } from '@/core/data/components/cards/fanned-cards'
import { StackedCardsDemo } from '@/core/data/components/cards/stacked-cards'
import { GhostCardDemo } from '@/core/data/components/cards/ghost-card'
import { FlowCardsDemo } from '@/core/data/components/cards/flow-cards'
import { OrbitingCardsDemo } from '@/core/data/components/cards/orbiting-cards'
import { REQUIREMENT } from '@/lib/constants'

export const cards: ComponentProps[] = [
  {
    id: 'fanned',
    label: 'Fanned Cards',
    ComponentComponent: FannedCardsDemo,
    path: 'src/core/data/components/cards/fanned-cards.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
    reloadable: true,
  },
  {
    id: 'stacked',
    label: 'Stacked Cards',
    ComponentComponent: StackedCardsDemo,
    path: 'src/core/data/components/cards/stacked-cards.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'ghost',
    label: 'Ghost Card',
    ComponentComponent: GhostCardDemo,
    path: 'src/core/data/components/cards/ghost-card.tsx',
    requirements: [REQUIREMENT.TAILWINDCSS, REQUIREMENT.LUCIDE_ICONS],
  },
  {
    id: 'flow',
    label: 'Flow Cards',
    ComponentComponent: FlowCardsDemo,
    path: 'src/core/data/components/cards/flow-cards.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'orbiting',
    label: 'Orbiting Cards',
    ComponentComponent: OrbitingCardsDemo,
    path: 'src/core/data/components/cards/orbiting-cards.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
    reloadable: true,
  },
]
