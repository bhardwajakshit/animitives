import { ComponentProps } from '.'
import { ImageTrailCursorDemo } from '@/core/data/components/cursor/image-trail-cursor'
import { TextRevealCursorDemo } from '@/core/data/components/cursor/text-reveal-cursor'
import { DynamicCursorDemo } from '@/core/data/components/cursor/dynamic-cursor'
import { REQUIREMENT } from '@/lib/constants'

export const cursors: ComponentProps[] = [
  {
    id: 'image-trail-cursor',
    label: 'Image Trail Cursor',
    ComponentComponent: ImageTrailCursorDemo,
    path: 'src/core/data/components/cursor/image-trail-cursor.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'text-reveal-cursor',
    label: 'Text Reveal Cursor',
    ComponentComponent: TextRevealCursorDemo,
    path: 'src/core/data/components/cursor/text-reveal-cursor.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
  {
    id: 'dynamic-cursor',
    label: 'Dynamic Cursor',
    ComponentComponent: DynamicCursorDemo,
    path: 'src/core/data/components/cursor/dynamic-cursor.tsx',
    requirements: [REQUIREMENT.FRAMER_MOTION, REQUIREMENT.TAILWINDCSS],
  },
]
