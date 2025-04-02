'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/components/common/theme-provider'
import { Header } from '@/components/common/header'

export default function App({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence>
        <Header key="header" />
        {children}
      </AnimatePresence>
    </ThemeProvider>
  )
}
