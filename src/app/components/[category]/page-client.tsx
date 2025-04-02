'use client'

import { useCallback, useEffect, useState } from 'react'
import { useComponents } from '@/hooks/components-context'

const ComponentsPageClient = ({ category }: { category: string }) => {
  const { setActiveTab } = useComponents()
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  useEffect(() => {
    setActiveTab(category)
  }, [category, setActiveTab])

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

  return (
    isAtBottom && (
      <div className="pointer-events-none fixed bottom-0 right-0 z-10 h-36 w-full bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-950" />
    )
  )
}

export default ComponentsPageClient
