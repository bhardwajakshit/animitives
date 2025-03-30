'use client'

import { Theme } from '@/lib/types'
import { SunMedium, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const { setTheme, resolvedTheme } = useTheme()

  if (!resolvedTheme) return null

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === Theme.Dark ? Theme.Light : Theme.Dark)
      }
      aria-label="Toggle Theme"
    >
      {resolvedTheme === Theme.Dark ? (
        <SunMedium size={20} />
      ) : (
        <SunMoon size={20} />
      )}
    </button>
  )
}
