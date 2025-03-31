import { ComponentProps } from '.'
import { CoreAccordionDemo } from '@/core/data/components/accordions/core-accordion'
import { DotAccordionDemo } from '@/core/data/components/accordions/dot-accordion'
import { CrossAccordionDemo } from '@/core/data/components/accordions/cross-accordion'
import { REQUIREMENT } from '@/lib/constants'

export const accordions: ComponentProps[] = [
  {
    id: 'core',
    label: 'Core Accordion',
    ComponentComponent: CoreAccordionDemo,
    path: 'src/core/data/components/accordions/core-accordion.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'dot',
    label: 'Dot Accordion',
    ComponentComponent: DotAccordionDemo,
    path: 'src/core/data/components/accordions/dot-accordion.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'cross',
    label: 'Cross Accordion',
    ComponentComponent: CrossAccordionDemo,
    path: 'src/core/data/components/accordions/cross-accordion.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.LUCIDE_ICONS,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
]
