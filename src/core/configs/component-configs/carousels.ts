import { ComponentProps } from '.'
import { AnimatedCarouselDemo } from '@/core/data/components/carousels/carousel-animated'
import { MarqueeCoreCarouselDemo } from '@/core/data/components/carousels/carousel-marquee-core'
import { MarqueeDualCarouselDemo } from '@/core/data/components/carousels/carousel-marquee-dual'
import { REQUIREMENT } from '@/lib/constants'

export const carousels: ComponentProps[] = [
  {
    id: 'animated',
    label: 'Animated Carousel',
    ComponentComponent: AnimatedCarouselDemo,
    path: 'src/core/data/components/carousels/carousel-animated.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'core',
    label: 'Core Infinite Carousel',
    ComponentComponent: MarqueeCoreCarouselDemo,
    path: 'src/core/data/components/carousels/carousel-marquee-core.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'dual',
    label: 'Dual Infinite Carousel',
    ComponentComponent: MarqueeDualCarouselDemo,
    path: 'src/core/data/components/carousels/carousel-marquee-dual.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
]
