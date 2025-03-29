import {
  ButtonArrow1,
  getButtonArrow1Source,
  ButtonArrowVariants,
} from '@/core/data/buttons/text-only-buttons/button-arrow-1'
import {
  ButtonArrow2,
  getButtonArrow2Source,
} from '@/core/data/buttons/text-only-buttons/button-arrow-2'
import {
  ButtonArrow3,
  getButtonArrow3Source,
} from '@/core/data/buttons/text-only-buttons/button-arrow-3'
import {
  ButtonArrow4,
  getButtonArrow4Source,
} from '@/core/data/buttons/text-only-buttons/button-arrow-4'
import {
  ButtonArrow5,
  getButtonArrow5Source,
} from '@/core/data/buttons/text-only-buttons/button-arrow-5'
import {
  ButtonArrow6,
  getButtonArrow6Source,
} from '@/core/data/buttons/text-only-buttons/button-arrow-6'
import {
  ButtonUnderline1,
  getButtonUnderline1Source,
  ButtonUnderlineVariants,
} from '@/core/data/buttons/text-only-buttons/button-underline-1'
import {
  ButtonUnderline2,
  getButtonUnderline2Source,
} from '@/core/data/buttons/text-only-buttons/button-underline-2'
import {
  ButtonUnderline3,
  getButtonUnderline3Source,
} from '@/core/data/buttons/text-only-buttons/button-underline-3'
import {
  ButtonUnderline4,
  getButtonUnderline4Source,
} from '@/core/data/buttons/text-only-buttons/button-underline-4'
import {
  ButtonUnderline5,
  getButtonUnderline5Source,
} from '@/core/data/buttons/text-only-buttons/button-underline-5'
import { ButtonProps } from '.'

export const textOnlyButtons: ButtonProps[] = [
  {
    id: 'underline-1',
    label: 'Underlined Button 1',
    ButtonComponent: ButtonUnderline1,
    getSource: getButtonUnderline1Source,
    variants: ButtonUnderlineVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'underline-2',
    label: 'Underlined Button 2',
    ButtonComponent: ButtonUnderline2,
    getSource: getButtonUnderline2Source,
    variants: ButtonUnderlineVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'underline-3',
    label: 'Underlined Button 3',
    ButtonComponent: ButtonUnderline3,
    getSource: getButtonUnderline3Source,
    variants: ButtonUnderlineVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'underline-4',
    label: 'Underlined Button 4',
    ButtonComponent: ButtonUnderline4,
    getSource: getButtonUnderline4Source,
    variants: ButtonUnderlineVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'underline-5',
    label: 'Underlined Button 5',
    ButtonComponent: ButtonUnderline5,
    getSource: getButtonUnderline5Source,
    variants: ButtonUnderlineVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-1',
    label: 'Arrow Button 1',
    ButtonComponent: ButtonArrow1,
    getSource: getButtonArrow1Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-2',
    label: 'Arrow Button 2',
    ButtonComponent: ButtonArrow2,
    getSource: getButtonArrow2Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-3',
    label: 'Arrow Button 3',
    ButtonComponent: ButtonArrow3,
    getSource: getButtonArrow3Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-4',
    label: 'Arrow Button 4',
    ButtonComponent: ButtonArrow4,
    getSource: getButtonArrow4Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-5',
    label: 'Arrow Button 5',
    ButtonComponent: ButtonArrow5,
    getSource: getButtonArrow5Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'arrow-6',
    label: 'Arrow Button 6',
    ButtonComponent: ButtonArrow6,
    getSource: getButtonArrow6Source,
    variants: ButtonArrowVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
]
