import { ComponentProps } from '.'
import { CoreTabsDemo } from '@/core/data/components/tabs/core-tabs'
import { CursorTabsDemo } from '@/core/data/components/tabs/cursor-tabs'
import { DotTabsDemo } from '@/core/data/components/tabs/dot-tabs'
import { GlowTabsDemo } from '@/core/data/components/tabs/glow-tabs'
import { REQUIREMENT } from '@/lib/constants'

export const tabs: ComponentProps[] = [
  {
    id: 'core',
    label: 'Core Tabs',
    ComponentComponent: CoreTabsDemo,
    path: 'src/core/data/components/tabs/core-tabs.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'cursor',
    label: 'Cursor Tabs',
    ComponentComponent: CursorTabsDemo,
    path: 'src/core/data/components/tabs/cursor-tabs.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'dot',
    label: 'Dot Tabs',
    ComponentComponent: DotTabsDemo,
    path: 'src/core/data/components/tabs/dot-tabs.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
  {
    id: 'glow',
    label: 'Glow Tabs',
    ComponentComponent: GlowTabsDemo,
    path: 'src/core/data/components/tabs/glow-tabs.tsx',
    requirements: [
      REQUIREMENT.FRAMER_MOTION,
      REQUIREMENT.TAILWINDCSS,
      REQUIREMENT.CLSX_TWM,
    ],
  },
]
