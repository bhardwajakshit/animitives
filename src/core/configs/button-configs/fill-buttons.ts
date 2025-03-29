import {
  ButtonFill,
  ButtonFillVariants,
  getButtonFillSource,
} from '@/core/data/buttons/fill-buttons/button-fill'
import {
  ButtonFillBT,
  getButtonFillBTSource,
} from '@/core/data/buttons/fill-buttons/button-fill-bt'
import {
  ButtonFillLight,
  ButtonFillLightVariants,
  getButtonFillLightSource,
} from '@/core/data/buttons/fill-buttons/button-fill-light'
import {
  ButtonFillAnimatedVariants,
  ButtonFillLR,
  getButtonFillLRSource,
} from '@/core/data/buttons/fill-buttons/button-fill-lr'
import {
  ButtonFillNormal,
  ButtonFillNormalVariants,
  getButtonFillNormalSource,
} from '@/core/data/buttons/fill-buttons/button-fill-normal'
import {
  ButtonFillRL,
  getButtonFillRLSource,
} from '@/core/data/buttons/fill-buttons/button-fill-rl'
import {
  ButtonFillTB,
  getButtonFillTBSource,
} from '@/core/data/buttons/fill-buttons/button-fill-tb'
import {
  ButtonFillHover,
  ButtonFillHoverVariants,
  getButtonFillHoverSource,
} from '@/core/data/buttons/fill-buttons/button-hover'
import { ButtonProps } from '.'

export const fillButtons: ButtonProps[] = [
  {
    id: 'fill-1',
    label: 'Fill Button 1',
    ButtonComponent: ButtonFillHover,
    getSource: getButtonFillHoverSource,
    variants: ButtonFillHoverVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'fill-2',
    label: 'Fill Button 2',
    ButtonComponent: ButtonFillLight,
    getSource: getButtonFillLightSource,
    variants: ButtonFillLightVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'fill-3',
    label: 'Fill Button 3',
    ButtonComponent: ButtonFillNormal,
    getSource: getButtonFillNormalSource,
    variants: ButtonFillNormalVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },

  {
    id: 'fill-4',
    label: 'Fill Button 4',
    ButtonComponent: ButtonFill,
    getSource: getButtonFillSource,
    variants: ButtonFillVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },

  {
    id: 'fill-5',
    label: 'Fill Button 5',
    ButtonComponent: ButtonFillLR,
    getSource: getButtonFillLRSource,
    variants: ButtonFillAnimatedVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'fill-6',
    label: 'Fill Button 6',
    ButtonComponent: ButtonFillRL,
    getSource: getButtonFillRLSource,
    variants: ButtonFillAnimatedVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'fill-7',
    label: 'Fill Button 7',
    ButtonComponent: ButtonFillBT,
    getSource: getButtonFillBTSource,
    variants: ButtonFillAnimatedVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'fill-8',
    label: 'Fill Button 8',
    ButtonComponent: ButtonFillTB,
    getSource: getButtonFillTBSource,
    variants: ButtonFillAnimatedVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
]
