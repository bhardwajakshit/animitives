import { useState } from 'react'
import { motion } from 'framer-motion'
import { CodeBlock } from './code-block'
import {
  BorderRadiusSelector,
  LabelInput,
  VariantsSelector,
} from './customizer'
import { ThemeChanger } from '../common/theme-switcher'

export type ButtonProps = {
  label?: string
  className?: string
  backgroundColor?: string
  textColor?: string
  color?: string
  borderRadius?: string
}

export type ButtonPreviewProps<P> = {
  ButtonComponent: React.ComponentType<P>
  getSource: (props: P) => string
  onClose: () => void
  variants?: { [key: string]: P }
  customizationOptions?: { [key: string]: any }
}

const modalBackdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

const modalContentAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export default function ButtonModal<P extends ButtonProps>({
  ButtonComponent,
  getSource,
  onClose,
  variants,
  customizationOptions,
}: ButtonPreviewProps<P>) {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({})
  const [selectedRadius, setSelectedRadius] = useState<string | null>(null)

  const code = getSource(buttonProps as P)

  // todo: to be added later
  // const handleLabelChange = (newLabel: string | undefined) => {
  //   setButtonProps({
  //     ...buttonProps,
  //     label: newLabel,
  //   })
  // }

  const handleRadiusChange = (radiusValue: string) => {
    setSelectedRadius(radiusValue)
    setButtonProps({
      ...buttonProps,
      borderRadius: radiusValue,
    })
  }

  const handleVariantSelect = (variant: P) => {
    const newButtonProps = { ...buttonProps, ...variant }
    setButtonProps(newButtonProps)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/50 backdrop-blur-lg"
      onClick={onClose}
      {...modalBackdropAnimation}
    >
      <motion.div
        className="relative flex h-[500px] w-[900px] gap-4 rounded-2xl bg-neutral-50 p-4 shadow-xl dark:bg-neutral-800"
        onClick={(e) => e.stopPropagation()}
        {...modalContentAnimation}
      >
        <div className="flex flex-1 flex-col items-center justify-between space-y-6">
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-code-background">
            <ButtonComponent {...(buttonProps as P)} />
            <div className="absolute right-4 top-4">
              <ThemeChanger />
            </div>
          </div>

          {/*
          todo: to be added later
          <div className="flex items-center gap-4">
            <LabelInput
              label={buttonProps.label}
              onLabelChange={handleLabelChange}
            />
          </div> */}

          {(customizationOptions?.borderRadius ||
            Object.keys(variants || {}).length > 0) && (
            <div className="flex w-full items-center justify-center gap-8">
              {customizationOptions?.borderRadius && (
                <BorderRadiusSelector
                  selectedRadius={selectedRadius}
                  onRadiusChange={handleRadiusChange}
                />
              )}

              {variants && Object.keys(variants).length > 0 && (
                <VariantsSelector
                  variants={variants}
                  currentProps={buttonProps}
                  onVariantSelect={handleVariantSelect}
                />
              )}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center">
          <CodeBlock code={code} />
        </div>
      </motion.div>
    </motion.div>
  )
}
