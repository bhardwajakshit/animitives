import { FC } from 'react'

import { coreButtons } from './core-buttons'
import { ctaButtons } from './cta-buttons'
import { floatingButtons } from './floating-buttons'
import { morphingButtons } from './morphing-buttons'
import { fillButtons } from './fill-buttons'
import { textOnlyButtons } from './text-only-buttons'

export type ButtonComponent = FC

export interface ButtonProps {
  id: string
  label: string
  ButtonComponent: ButtonComponent
  getSource: (props: any) => string
  variants?: { [key: string]: any }
  carousel: boolean
  customizationOptions?: { [key: string]: any }
}

export interface Button {
  groupName: string
  label: string
  buttons: ButtonProps[]
}

export const ButtonConfigs: Button[] = [
  {
    groupName: 'coreButtons',
    label: 'Core Buttons',
    buttons: coreButtons,
  },
  {
    groupName: 'ctaButtons',
    label: 'Call To Action Buttons',
    buttons: ctaButtons,
  },
  {
    groupName: 'floatingButtons',
    label: 'Floating & Sticky Buttons',
    buttons: floatingButtons,
  },
  {
    groupName: 'morphingExpanding',
    label: 'Morphing & Animated Buttons',
    buttons: morphingButtons,
  },
  {
    groupName: 'fillButtons',
    label: 'Fill Buttons',
    buttons: fillButtons,
  },
  {
    groupName: 'textOnlyButtons',
    label: 'Text Only Buttons',
    buttons: textOnlyButtons,
  },
]
