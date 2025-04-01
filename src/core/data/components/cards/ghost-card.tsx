'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type GhostCardProps = {
  onClick: () => void
}

export const GhostCard: React.FC<GhostCardProps> = ({ onClick }) => {
  return (
    <div
      className="group relative m-10 flex h-72 min-h-fit w-56 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
      onClick={onClick}
    >
      <Image
        src="/images/image4.jpg"
        width={100}
        height={100}
        alt="Demo Image"
        className="absolute inset-0 h-full w-full rounded-xl transition-all duration-300 group-hover:-translate-y-14"
      />

      <div className="mt-auto flex w-full items-center justify-between p-4">
        <h1 className="text-sm font-medium">Animitives</h1>

        <ArrowUpRight
          size={24}
          className="rounded-full bg-stone-500 p-1 text-stone-300 dark:bg-neutral-800 dark:text-stone-400"
        />
      </div>
    </div>
  )
}

// Example Usage
export const GhostCardDemo = () => {
  const handleOnClick = () => {
    // Add your custom logic here. (Navigate to a different page, fetch data, etc.)
  }

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center">
      <GhostCard onClick={handleOnClick} />
      <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal text-neutral-600 dark:text-neutral-300">
        Hover over the card
      </h1>
    </div>
  )
}
