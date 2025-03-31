'use client'

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'

export const CodeBlock = ({ code }: { code: string }) => {
  const [html, setHtml] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    if (!code) {
      setHtml('<pre><code>Loading...</code></pre>')
      return
    }

    let isActive = true

    codeToHtml(code, { lang: 'typescript', theme: 'dark-plus' })
      .then((highlightedHtml) => {
        if (isActive) setHtml(highlightedHtml)
      })
      .catch(() => {
        if (isActive) setHtml('<pre><code>Error loading code</code></pre>')
      })

    return () => {
      isActive = false
    }
  }, [code])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }

  return (
    <div className="relative w-full">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="h-[470px] min-h-0 overflow-y-auto rounded-xl bg-code-background p-4 text-sm outline-none [&_code]:whitespace-pre-wrap [&_pre]:outline-none"
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute right-4 top-4"
      >
        {copied ? (
          <Check size={16} className="text-white" />
        ) : (
          <Copy size={16} className="text-white" />
        )}
      </motion.button>
    </div>
  )
}
