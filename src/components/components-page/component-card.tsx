'use client'

import { useState } from 'react'
import { Check, Code2, Copy, RefreshCcw } from 'lucide-react'
import { CodeBlock } from '../buttons-page/code-block'
import { motion } from 'framer-motion'
import { REQUIREMENTS } from '@/lib/constants'

export const ComponentCard = ({
  Component,
  reloadable,
  code,
  clsxCode,
  requirements,
}: {
  Component: React.FC
  reloadable: boolean | undefined
  code: string
  clsxCode: string
  requirements?: string[]
}) => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [key, setKey] = useState<number>(0)

  const onOpen = () => {
    document.body.style.overflow = 'hidden'
    setShowCode(true)
  }

  const onClose = () => {
    document.body.style.overflow = ''
    setShowCode(false)
  }

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <>
      <div className="group/button-div relative flex h-full max-h-[600px] min-h-0 w-full max-w-2xl justify-center overflow-y-auto rounded-xl border border-stone-200 bg-stone-100 transition-colors duration-300 hover:border-stone-300/80 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700/80">
        {reloadable && (
          <span className="absolute right-9 top-1 z-10 opacity-0 transition-opacity duration-300 group-hover/button-div:opacity-100">
            <RefreshCcw
              size={24}
              className="-translate-x-0.5 translate-y-0.5 cursor-pointer rounded-full bg-stone-200 p-1 text-stone-500 opacity-0 transition-all duration-300 group-hover/button-div:translate-x-0 group-hover/button-div:translate-y-0 group-hover/button-div:opacity-100 dark:bg-neutral-800 dark:text-stone-400"
              onClick={reloadComponent}
              aria-label="Reload Animation"
            />
          </span>
        )}
        <span className="absolute right-1 top-1 z-10 opacity-0 transition-opacity duration-300 group-hover/button-div:opacity-100">
          <Code2
            size={24}
            className="-translate-x-0.5 translate-y-0.5 cursor-pointer rounded-full bg-stone-200 p-1 text-stone-500 opacity-0 transition-all duration-300 group-hover/button-div:translate-x-0 group-hover/button-div:translate-y-0 group-hover/button-div:opacity-100 dark:bg-neutral-800 dark:text-stone-400"
            onClick={onOpen}
            aria-label="Show Code"
          />
        </span>
        <Component key={key} />
      </div>

      {showCode && (
        <CodeModal
          code={code}
          onClose={onClose}
          requirements={requirements}
          clsxCode={clsxCode}
        />
      )}
    </>
  )
}

const CodeModal = ({
  code,
  onClose,
  requirements,
  clsxCode,
}: {
  code: string
  onClose: () => void
  requirements?: string[]
  clsxCode: string
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/50 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-fit w-[900px] flex-col gap-4 rounded-2xl bg-neutral-100 p-4 shadow-xl dark:bg-neutral-900"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {requirements && requirements.length > 0 && (
          <div className="flex flex-col space-y-2">
            <div>
              <h1 className="text-sm font-medium">Requirements</h1>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                To use this component, install the required packages:
              </p>
            </div>

            <RequirementsList requirements={requirements} clsxCode={clsxCode} />
          </div>
        )}

        <div className="flex flex-col space-y-2">
          <h1 className="text-sm font-medium">Code</h1>
          <CodeBlock code={code} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export const RequirementsList = ({
  requirements = [],
  clsxCode,
}: {
  requirements?: string[]
  clsxCode: string
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (requirements.length === 0) return null

  const activeRequirement =
    REQUIREMENTS[requirements[activeIndex] as keyof typeof REQUIREMENTS]

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2">
        {requirements.map((requirement, index) => {
          const req = REQUIREMENTS[requirement as keyof typeof REQUIREMENTS]
          if (!req) return null

          return (
            <button
              key={req.name}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeIndex === index
                  ? 'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800'
                  : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
              }`}
            >
              {req.name}
            </button>
          )
        })}
      </div>

      {activeRequirement && (
        <>
          <h1 className="text-sm font-normal">
            {activeRequirement.link && (
              <a
                href={activeRequirement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1.5 text-sm text-blue-600 underline transition hover:text-blue-500"
              >
                {activeRequirement.name}
              </a>
            )}
            {activeRequirement.desc}
          </h1>

          {activeRequirement.name === 'CLSX & Tailwind Merge' ? (
            <CodeBlock code={clsxCode} />
          ) : (
            <div className="flex items-center justify-between rounded-xl bg-code-background px-4 py-3 text-xs text-white shadow-sm">
              <span className="flex-1 truncate">{activeRequirement.cmd}</span>

              <button
                onClick={() => handleCopy(activeRequirement.cmd ?? '')}
                className="ml-2 flex items-center text-white"
                aria-label="Copy command"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
