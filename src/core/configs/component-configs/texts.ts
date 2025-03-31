import { ComponentProps } from '.'
import { TextShimmerDemo } from '@/core/data/components/texts/text-shimmer'
import { TextStaggerBlurDemo } from '@/core/data/components/texts/text-stagger-blur'
import { TextWavyDemo } from '@/core/data/components/texts/text-wavy'
import { TextStaggerDemo } from '@/core/data/components/texts/text-stagger'
import { TextScatterDemo } from '@/core/data/components/texts/text-scatter'
import { TextTypewriterDemo } from '@/core/data/components/texts/text-typewriter'
import { REQUIREMENT } from '@/lib/constants'

export const texts: ComponentProps[] = [
  {
    id: 'text-shimmer',
    label: 'Text Shimmer',
    ComponentComponent: TextShimmerDemo,
    path: 'src/core/data/components/texts/text-shimmer.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'text-stagger-blur',
    label: 'Text Stagger Blur',
    ComponentComponent: TextStaggerBlurDemo,
    path: 'src/core/data/components/texts/text-stagger-blur.tsx',
    reloadable: true,
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'text-wavy',
    label: 'Text Wavy',
    ComponentComponent: TextWavyDemo,
    path: 'src/core/data/components/texts/text-wavy.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'text-stagger',
    label: 'Text Stagger',
    ComponentComponent: TextStaggerDemo,
    path: 'src/core/data/components/texts/text-stagger.tsx',
    reloadable: true,
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'text-scatter',
    label: 'Text Scatter',
    ComponentComponent: TextScatterDemo,
    path: 'src/core/data/components/texts/text-scatter.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'text-typewriter',
    label: 'Text Typewriter',
    ComponentComponent: TextTypewriterDemo,
    path: 'src/core/data/components/texts/text-typewriter.tsx',
    reloadable: true,
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
]
