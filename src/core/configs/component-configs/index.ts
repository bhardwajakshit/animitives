import { FC } from 'react'
import { accordions } from './accordions'
import { tabs } from './tabs'
import { cards } from './cards'
import { carousels } from './carousels'
import { cursors } from './cursor'
import { texts } from './texts'
import { numbers } from './numbers'
import { perspective } from './perspective'
import { REQUIREMENT } from '@/lib/constants'

export type ComponentComponent = FC

export interface ComponentProps {
  id: string
  label: string
  ComponentComponent: ComponentComponent
  path: string
  reloadable?: boolean
  requirements: REQUIREMENT[]
}

export interface Component {
  [key: string]: {
    groupName: string
    label: string
    slug: string
    components: ComponentProps[]
  }
}

export const ComponentConfigs: Component = {
  accordions: {
    groupName: 'accordions',
    label: 'Accordions',
    slug: 'accordions',
    components: accordions,
  },
  tabs: {
    groupName: 'tabs',
    label: 'Tabs',
    slug: 'tabs',
    components: tabs,
  },
  cards: {
    groupName: 'cards',
    label: 'Cards',
    slug: 'cards',
    components: cards,
  },
  carousels: {
    groupName: 'carousels',
    label: 'Carousels',
    slug: 'carousels',
    components: carousels,
  },
  cursors: {
    groupName: 'cursors',
    label: 'Cursor',
    slug: 'cursors',
    components: cursors,
  },
  texts: {
    groupName: 'texts',
    label: 'Texts',
    slug: 'texts',
    components: texts,
  },
  numbers: {
    groupName: 'numbers',
    label: 'Numbers',
    slug: 'numbers',
    components: numbers,
  },
  perspective: {
    groupName: 'perspective',
    label: 'Perspective',
    slug: 'perspective',
    components: perspective,
  },
}
