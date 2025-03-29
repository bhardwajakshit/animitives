import {
  ButtonBouncing1,
  ButtonBouncing1Variants,
  getButtonBouncing1Source,
} from '@/core/data/buttons/floating-buttons/button-bouncing-1'
import {
  ButtonBouncing2,
  ButtonBouncing2Variants,
  getButtonBouncing2Source,
} from '@/core/data/buttons/floating-buttons/button-bouncing-2'
import {
  ButtonFloating,
  getButtonFloatingSource,
  ButtonFloatingVariants,
} from '@/core/data/buttons/floating-buttons/button-floating.'
import {
  ButtonScrollTop,
  getButtonScrollTopSource,
  ButtonScrollTopVariants,
} from '@/core/data/buttons/floating-buttons/button-scroll-top'
import {
  ButtonSupport,
  getButtonSupportSource,
  ButtonSupportVariants,
} from '@/core/data/buttons/floating-buttons/button-support'
import { ButtonProps } from '.'

export const floatingButtons: ButtonProps[] = [
  {
    id: 'bouncing-button-1',
    label: 'Bouncing Button 1',
    ButtonComponent: ButtonBouncing1,
    getSource: getButtonBouncing1Source,
    variants: ButtonBouncing1Variants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'bouncing-button-2',
    label: 'Bouncing Button 2',
    ButtonComponent: ButtonBouncing2,
    getSource: getButtonBouncing2Source,
    variants: ButtonBouncing2Variants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'scroll-top',
    label: 'Scroll-to-Top Button',
    ButtonComponent: ButtonScrollTop,
    getSource: getButtonScrollTopSource,
    variants: ButtonScrollTopVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'floating-button',
    label: 'Floating Button',
    ButtonComponent: ButtonFloating,
    getSource: getButtonFloatingSource,
    variants: ButtonFloatingVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'support-button',
    label: 'Support Button',
    ButtonComponent: ButtonSupport,
    getSource: getButtonSupportSource,
    variants: ButtonSupportVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
]
