import {
  ButtonPrimary,
  ButtonPrimaryVariants,
  getButtonPrimarySource,
} from '@/core/data/buttons/core-buttons/button-primary'
import {
  ButtonSecondary,
  ButtonSecondaryVariants,
  getButtonSecondarySource,
} from '@/core/data/buttons/core-buttons/button-secondary'
import {
  ButtonOutline,
  ButtonOutlineVariants,
  getButtonOutlineSource,
} from '@/core/data/buttons/core-buttons/button-outline'
import {
  ButtonElevated,
  ButtonElevatedVariants,
  getButtonElevatedSource,
} from '@/core/data/buttons/core-buttons/button-elevated'
import { ButtonProps } from '.'

export const coreButtons: ButtonProps[] = [
  {
    id: 'primary',
    label: 'Primary Button',
    ButtonComponent: ButtonPrimary,
    getSource: getButtonPrimarySource,
    variants: ButtonPrimaryVariants,
    carousel: true,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'secondary',
    label: 'Secondary Button',
    ButtonComponent: ButtonSecondary,
    getSource: getButtonSecondarySource,
    variants: ButtonSecondaryVariants,
    carousel: true,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'outline',
    label: 'Outline Button',
    ButtonComponent: ButtonOutline,
    getSource: getButtonOutlineSource,
    variants: ButtonOutlineVariants,
    carousel: true,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'elevated',
    label: 'Elevated Button',
    ButtonComponent: ButtonElevated,
    getSource: getButtonElevatedSource,
    variants: ButtonElevatedVariants,
    carousel: true,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
]
