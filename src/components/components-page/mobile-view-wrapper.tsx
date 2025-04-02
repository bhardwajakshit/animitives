'use client'

import { useComponents } from '@/hooks/components-context'
import { ComponentsShowcase } from './components-showcase'

const MobileViewWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useComponents()

  if (isMobile === null) return null
  if (isMobile) {
    return (
      <div className="my-20 flex h-full w-full flex-col items-center justify-center gap-20">
        <ComponentsShowcase />
        <h1 className="py-4 text-center text-sm font-normal">
          Switch to a desktop to view the full collection.
        </h1>
      </div>
    )
  }

  return <>{children}</>
}

export default MobileViewWrapper
