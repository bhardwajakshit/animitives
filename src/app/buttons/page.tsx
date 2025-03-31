'use client'

import { useCallback, useEffect, useState } from 'react'
import { ButtonComponent, ButtonConfigs } from '@/core/configs/button-configs'
import ButtonModal from '@/components/buttons-page/button-modal'
import { AnimatedCustomizable } from '@/components/buttons-page/animated-text'
import { ButtonGroup } from '@/components/buttons-page/button-group'

export interface SelectedButtonProps {
  id: string
  ButtonComponent: ButtonComponent
  getSource: (props: any) => string
  variants?: { [key: string]: any }
  carousel: boolean
  customizationOptions?: { [key: string]: any }
}

export default function ButtonsPage() {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const [selectedButton, setSelectedButton] =
    useState<SelectedButtonProps | null>(null)

  const handleOpenModal = useCallback((button: SelectedButtonProps) => {
    document.body.style.overflow = 'hidden'
    setSelectedButton(button)
  }, [])
  const handleCloseModal = useCallback(() => setSelectedButton(null), [])

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      const isBottom = scrollHeight - scrollTop - clientHeight < 50
      if (isBottom === isAtBottom) {
        setIsAtBottom(!isBottom)
      }
    })
  }, [isAtBottom])

  useEffect(() => {
    handleScroll()

    const throttledScroll = () => {
      requestAnimationFrame(() => handleScroll())
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('resize', throttledScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', throttledScroll)
    }
  }, [handleScroll])

  const renderModal = () =>
    selectedButton && (
      <ButtonModal
        key={selectedButton.id}
        ButtonComponent={selectedButton.ButtonComponent}
        getSource={selectedButton.getSource}
        onClose={handleCloseModal}
        variants={selectedButton.variants}
        customizationOptions={selectedButton.customizationOptions}
      />
    )

  return (
    <div className="h-full w-full">
      <div className="px-24 pt-20">
        <h1 className="mb-8 py-24 text-center text-lg font-normal">
          A complete set of 50+ <AnimatedCustomizable text="customizable" />{' '}
          buttons designed to elevate your UI effortlessly.
        </h1>

        <div className="relative">
          {ButtonConfigs.map(({ groupName, label, buttons }) => (
            <ButtonGroup
              key={groupName}
              label={label}
              buttons={buttons}
              onOpenModal={handleOpenModal}
            />
          ))}

          {isAtBottom && (
            <div className="pointer-events-none fixed bottom-0 right-0 z-10 h-36 w-full bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-950" />
          )}
        </div>
      </div>

      {renderModal()}
    </div>
  )
}
