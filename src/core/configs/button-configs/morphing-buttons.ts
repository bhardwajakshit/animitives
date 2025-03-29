import {
  ButtonArrowMorphing,
  ButtonArrowMorphingVariants,
  getButtonArrowMorphingSource,
} from '@/core/data/buttons/morphing-buttons/button-arrow-morhing'
import {
  ButtonBB,
  getButtonBBSource,
  ButtonBBVariants,
} from '@/core/data/buttons/morphing-buttons/button-bb'
import {
  ButtonBlurText,
  getButtonBlurTextSource,
  ButtonBlurTextVariants,
} from '@/core/data/buttons/morphing-buttons/button-blur-text'
import {
  ButtonExpanding,
  getButtonExpandingSource,
  ButtonExpandingVariants,
} from '@/core/data/buttons/morphing-buttons/button-expanding'
import {
  ButtonFlipside,
  getButtonFlipsideSource,
  ButtonFlipsideVariants,
} from '@/core/data/buttons/morphing-buttons/button-flipside'
import {
  ButtonRing,
  getButtonRingSource,
  ButtonRingVariants,
} from '@/core/data/buttons/morphing-buttons/button-ring'
import {
  ButtonText,
  ButtonTextVariants,
  getButtonTextSource,
} from '@/core/data/buttons/morphing-buttons/button-text'
import { ButtonProps } from '.'

export const morphingButtons: ButtonProps[] = [
  {
    id: 'expanding',
    label: 'Expanding Button',
    ButtonComponent: ButtonExpanding,
    getSource: getButtonExpandingSource,
    variants: ButtonExpandingVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'button-flipside',
    label: 'Flipside Button',
    ButtonComponent: ButtonFlipside,
    getSource: getButtonFlipsideSource,
    variants: ButtonFlipsideVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'blur-reveal',
    label: 'Blur Reveal Button',
    ButtonComponent: ButtonBlurText,
    getSource: getButtonBlurTextSource,
    variants: ButtonBlurTextVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'button-arrow-morphing',
    label: 'Button Arrow Morphing',
    ButtonComponent: ButtonArrowMorphing,
    getSource: getButtonArrowMorphingSource,
    variants: ButtonArrowMorphingVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'button-text',
    label: 'Button Text',
    ButtonComponent: ButtonText,
    getSource: getButtonTextSource,
    variants: ButtonTextVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: false,
    },
  },
  {
    id: 'button-bb',
    label: 'Button BB',
    ButtonComponent: ButtonBB,
    getSource: getButtonBBSource,
    variants: ButtonBBVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'ring-1',
    label: 'Ring Button 1',
    ButtonComponent: ButtonRing,
    getSource: getButtonRingSource,
    variants: ButtonRingVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
]
