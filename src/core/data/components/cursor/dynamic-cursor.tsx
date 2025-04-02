'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion'

type DynamicCursorProps = {
  children: React.ReactNode
  defaultSize?: number
  textHoverWidth?: number
  cursorColor?: string
}

export const DynamicCursor = ({
  children,
  defaultSize = 20,
  textHoverWidth = 2,
  cursorColor = 'bg-indigo-800/60',
}: DynamicCursorProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<
    'hidden' | 'default' | 'text' | 'button'
  >('hidden')
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const smoothX = useSpring(cursorX, { stiffness: 400, damping: 30 })
  const smoothY = useSpring(cursorY, { stiffness: 400, damping: 30 })
  const [dynamicTextHeight, setDynamicTextHeight] = useState<number>(0)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const { left, top } = ref.current.getBoundingClientRect()
      cursorX.set(e.clientX - left)
      cursorY.set(e.clientY - top)
    },
    [cursorX, cursorY]
  )

  const handleMouseEnter = useCallback(() => setCursorState('default'), [])
  const handleMouseLeave = useCallback(() => setCursorState('hidden'), [])
  const handleButtonEnter = useCallback(() => setCursorState('button'), [])
  const handleButtonLeave = useCallback(() => setCursorState('default'), [])
  const handleTextEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement
    const computedHeight = target.getBoundingClientRect().height
    setDynamicTextHeight(computedHeight)
    setCursorState('text')
  }, [])
  const handleTextLeave = useCallback(() => setCursorState('default'), [])

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const textElements = container.querySelectorAll(
      'p, a, h1, h2, h3, h4, h5, h6, span, input, textarea, [data-cursor-interactive]'
    )
    const buttonElements = container.querySelectorAll('button')

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleTextEnter)
      el.addEventListener('mouseleave', handleTextLeave)
    })

    buttonElements.forEach((el) => {
      el.addEventListener('mouseenter', handleButtonEnter)
      el.addEventListener('mouseleave', handleButtonLeave)
    })

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleTextEnter)
        el.removeEventListener('mouseleave', handleTextLeave)
      })
      buttonElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleButtonEnter)
        el.removeEventListener('mouseleave', handleButtonLeave)
      })
    }
  }, [
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleTextEnter,
    handleTextLeave,
    handleButtonEnter,
    handleButtonLeave,
  ])

  return (
    <div
      ref={ref}
      className="relative h-full w-full"
      style={{ cursor: 'none' }}
    >
      {children}
      <motion.div
        className={`pointer-events-none absolute left-0 top-0 z-50 rounded-full ${cursorColor} flex items-center justify-center`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorState === 'text'
              ? textHoverWidth
              : cursorState === 'default'
                ? defaultSize
                : cursorState === 'button'
                  ? 34
                  : 0,
          height:
            cursorState === 'text'
              ? dynamicTextHeight
              : cursorState === 'default'
                ? defaultSize
                : cursorState === 'button'
                  ? 34
                  : 0,
          opacity: cursorState === 'hidden' ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.5,
        }}
      >
        <AnimatePresence>
          {cursorState === 'text' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              className="whitespace-nowrap px-2 text-sm font-semibold text-white"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// Example Usage
export const DynamicCursorDemo = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <DynamicCursor defaultSize={20}>
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <h1 className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 bg-clip-text text-xs font-normal text-transparent dark:from-white dark:to-gray-300">
            Animitives
          </h1>
          <h1 className="text-medium bg-gradient-to-r from-pink-500 via-indigo-500 to-teal-400 bg-clip-text font-normal text-transparent dark:from-white dark:to-gray-300">
            Animitives
          </h1>
          <h1 className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 bg-clip-text text-2xl font-normal text-transparent dark:from-white dark:to-gray-300">
            Animitives
          </h1>
          <button className="rounded-full bg-gradient-to-r from-red-500 via-violet-500 to-cyan-500 px-4 py-2 text-base text-white shadow-lg">
            Hover Me
          </button>
        </div>
      </DynamicCursor>
    </div>
  )
}
