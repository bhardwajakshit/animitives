import React from 'react'
import { ButtonProps } from '@/core/configs/button-configs'
import { SelectedButtonProps } from '@/app/buttons/page'
import { ButtonCard } from './button-card'

type ButtonGroupProps = {
  label: string
  buttons: ButtonProps[]
  onOpenModal: ({
    id,
    ButtonComponent,
    getSource,
    variants,
    customizationOptions,
  }: SelectedButtonProps) => void
}

export const ButtonGroup = React.memo(
  ({ label, buttons, onOpenModal }: ButtonGroupProps) => {
    return (
      <div className="mb-20 flex flex-col items-center justify-center">
        <h1 className="mb-16 w-fit rounded-full bg-stone-200/60 px-6 py-2 text-xs font-medium text-stone-800 backdrop:blur-sm dark:bg-neutral-800/60 dark:text-neutral-300 2xl:text-sm">
          {label}
        </h1>
        <div className="flex max-w-7xl flex-wrap items-center justify-center gap-4">
          {buttons.map(
            ({
              id,
              ButtonComponent,
              getSource,
              variants,
              carousel,
              customizationOptions,
            }: SelectedButtonProps) => (
              <ButtonCard
                key={id}
                id={id}
                ButtonComponent={ButtonComponent}
                getSource={getSource}
                variants={variants}
                carousel={carousel}
                customizationOptions={customizationOptions}
                onOpenModal={onOpenModal}
              />
            )
          )}
        </div>
      </div>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'
