'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ComponentsContext = createContext<{
  activeTab: string
  setActiveTab: (tab: string) => void
  isMobile: boolean | null
} | null>(null)

export function ComponentsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState<string>('')
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <ComponentsContext.Provider value={{ activeTab, setActiveTab, isMobile }}>
      {children}
    </ComponentsContext.Provider>
  )
}

export function useComponents() {
  const context = useContext(ComponentsContext)
  if (!context) {
    throw new Error('useComponents must be used within a ComponentsProvider')
  }
  return context
}
