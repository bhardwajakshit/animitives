'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  toggleOpen: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="overflow-hidden">
      <AccordionHeader title={title} isOpen={isOpen} toggleOpen={toggleOpen} />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  )
}

interface AccordionHeaderProps {
  title: string
  isOpen: boolean
  toggleOpen: () => void
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  title,
  isOpen,
  toggleOpen,
}) => (
  <button
    className="flex w-full items-center gap-2 px-4 py-2 text-left focus:outline-none"
    onClick={toggleOpen}
    aria-expanded={isOpen}
  >
    <AccordionIcon isOpen={isOpen} />
    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
      {title}
    </span>
  </button>
)

const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <rect
        className="origin-center transform fill-neutral-900 transition-transform duration-300 ease-in-out dark:fill-neutral-100"
        x="6"
        y="11"
        width="12"
        height="2"
        rx="1"
      />
      <rect
        className={cn(
          'origin-center transform fill-neutral-900 transition-all duration-300 ease-in-out dark:fill-neutral-100',
          isOpen ? 'rotate-90' : 'rotate-0'
        )}
        x="11"
        y="6"
        width="2"
        height="12"
        rx="1"
      />
    </svg>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  isOpen: boolean
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
}) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="ml-12 pb-2 text-sm text-neutral-500 dark:text-neutral-400">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

interface AccordionItemType {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemType[]
  defaultOpen?: string
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openId === item.id}
          toggleOpen={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

// Example usage
export const CoreAccordionDemo = () => {
  return (
    <div className="my-16 w-full">
      <Accordion items={faqItems} />
    </div>
  )
}

const faqItems: AccordionItemType[] = [
  {
    id: 'animitives-what',
    title: 'What is Animitives?',
    content: (
      <p>
        Animitives is an open-source collection of ready-to-use animated UI
        components, designed for developers who want smooth, motion-enhanced
        elements in their projects. Built with Tailwind CSS and Framer Motion.
      </p>
    ),
  },
  {
    id: 'animitives-customization',
    title: 'Can I customize the components?',
    content: (
      <p>
        Absolutely! Since Animitives is open-source, you have full control over
        the components. You can tweak the animations, styles, and layouts to fit
        your design requirements using Tailwind CSS and Framer Motion.
      </p>
    ),
  },
  {
    id: 'animitives-install',
    title: 'How do I install and use Animitives?',
    content: (
      <p>
        You can copy-paste components directly from the website, or install them
        via NPM once the package is available.
      </p>
    ),
  },
  {
    id: 'animitives-future',
    title: 'Will there be more components in the future?',
    content: (
      <p>
        Yes! Animitives is constantly evolving. More unique and interactive
        components will be released over time.
      </p>
    ),
  },
]
