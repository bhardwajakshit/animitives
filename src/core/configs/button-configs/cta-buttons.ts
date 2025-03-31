import { ButtonProps } from '.'
import {
  ButtonBeamColor,
  getButtonBeamColorSource,
} from '@/core/data/buttons/cta-buttons/button-beam-color'
import {
  ButtonTilt,
  getButtonTiltSource,
} from '@/core/data/buttons/cta-buttons/button-tilt'
import {
  ButtonGlassmorphism,
  ButtonGlassmorphismVariants,
  getButtonGlassmorphismSource,
} from '@/core/data/buttons/cta-buttons/button-glassmorphism'
import {
  ButtonSparkle,
  getButtonSparkleSource,
} from '@/core/data/buttons/cta-buttons/button-sparkle'
import {
  ButtonOuterGlow,
  getButtonOuterGlowSource,
} from '@/core/data/buttons/cta-buttons/button-outer-glow'
import {
  ButtonShimmer,
  ButtonShimmerVariants,
  getButtonShimmerSource,
} from '@/core/data/buttons/cta-buttons/button-shimmer'
import {
  ButtonClouds,
  getButtonCloudsSource,
} from '@/core/data/buttons/cta-buttons/button-clouds'
import {
  ButtonConfetti,
  ButtonConfettiVariants,
  getButtonConfettiSource,
} from '@/core/data/buttons/cta-buttons/button-confetti'
import {
  ButtonPulseGlow,
  getButtonPulseGlowSource,
} from '@/core/data/buttons/cta-buttons/button-pulse-glow'
import {
  ButtonArrow,
  ButtonArrowVariants,
  getButtonArrowSource,
} from '@/core/data/buttons/cta-buttons/button-arrow'
import {
  ButtonBottomGlow,
  ButtonBottomGlowVariants,
  getButtonBottomGlowSource,
} from '@/core/data/buttons/cta-buttons/button-bottom-glow'
import {
  ButtonBeamBW,
  getButtonBeamBWSource,
} from '@/core/data/buttons/cta-buttons/button-beam-bw'
import {
  ButtonHoverBottomGlow,
  getButtonHoverBottomGlowSource,
} from '@/core/data/buttons/cta-buttons/button-hover-bottom-glow'

export const ctaButtons: ButtonProps[] = [
  {
    id: 'button-beam-color',
    label: 'Color Beam Button',
    ButtonComponent: ButtonBeamColor,
    getSource: getButtonBeamColorSource,
    variants: [],
    carousel: false,
    customizationOptions: {
      color: false,
      borderRadius: true,
    },
  },
  {
    id: 'button-tilt',
    label: 'Tilt Button',
    ButtonComponent: ButtonTilt,
    getSource: getButtonTiltSource,
    variants: [],
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-glassmorphism',
    label: 'Glassmorphism Button',
    ButtonComponent: ButtonGlassmorphism,
    getSource: getButtonGlassmorphismSource,
    variants: ButtonGlassmorphismVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-sparkle',
    label: 'Sparkle Button',
    ButtonComponent: ButtonSparkle,
    getSource: getButtonSparkleSource,
    variants: [],
    carousel: false,
    customizationOptions: {
      color: false,
      borderRadius: false,
    },
  },
  {
    id: 'button-outer-glow',
    label: 'Outer Glow Button',
    ButtonComponent: ButtonOuterGlow,
    getSource: getButtonOuterGlowSource,
    variants: [],
    carousel: false,
    customizationOptions: {
      color: false,
      borderRadius: true,
    },
  },
  {
    id: 'button-shimmer',
    label: 'Shimmer Button',
    ButtonComponent: ButtonShimmer,
    getSource: getButtonShimmerSource,
    variants: ButtonShimmerVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-clouds',
    label: 'Clouds Button',
    ButtonComponent: ButtonClouds,
    getSource: getButtonCloudsSource,
    carousel: false,
    customizationOptions: {
      color: false,
      borderRadius: false,
    },
  },
  {
    id: 'button-confetti',
    label: 'Confetti Button',
    ButtonComponent: ButtonConfetti,
    getSource: getButtonConfettiSource,
    variants: ButtonConfettiVariants,
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-pulse-glow',
    label: 'Pulse Glow Button',
    ButtonComponent: ButtonPulseGlow,
    getSource: getButtonPulseGlowSource,
    variants: [],
    carousel: false,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-arrow',
    label: 'Arrow Button',
    ButtonComponent: ButtonArrow,
    getSource: getButtonArrowSource,
    carousel: false,
    variants: ButtonArrowVariants,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-bottom-glow',
    label: 'Bottom Glow Button',
    ButtonComponent: ButtonBottomGlow,
    getSource: getButtonBottomGlowSource,
    carousel: false,
    variants: ButtonBottomGlowVariants,
    customizationOptions: {
      color: true,
      borderRadius: true,
    },
  },
  {
    id: 'button-beam-bw',
    label: 'BW Beam Button',
    ButtonComponent: ButtonBeamBW,
    getSource: getButtonBeamBWSource,
    carousel: false,
    variants: [],
    customizationOptions: {
      color: false,
      borderRadius: false,
    },
  },
  {
    id: 'button-bottom-glow-hover',
    label: 'Hover Bottom Glow Button',
    ButtonComponent: ButtonHoverBottomGlow,
    getSource: getButtonHoverBottomGlowSource,
    carousel: false,
    variants: [],
    customizationOptions: {
      color: false,
      borderRadius: false,
    },
  },
]
