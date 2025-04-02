import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { Logo } from '../../../public/icons/logo'
import { headerCommonLinks } from '@/lib/constants'
import { ThemeChanger } from './theme-switcher'
import { GithubIcon } from '../../../public/icons/github-mark'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{
        y: isHomePage ? -50 : 0,
        opacity: isHomePage ? 0 : 1,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-[100] mx-auto flex items-center justify-between gap-4 px-4 py-3.5 transition-all duration-300 sm:px-6',
        isScrolled
          ? 'mt-4 max-w-5xl rounded-xl bg-neutral-100/80 shadow backdrop-blur-sm dark:bg-neutral-900/80'
          : 'max-w-6xl'
      )}
    >
      <div className="flex items-center space-x-4 sm:space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <h1 className="text-base font-medium">Animitives</h1>
        </Link>

        {headerCommonLinks.map((item) => (
          <Link key={item.id} href={item.url}>
            <span
              className={`relative text-xs font-medium transition-colors duration-300 after:absolute after:bottom-[-3.5px] after:left-0 after:h-[2px] after:w-full after:bg-neutral-900 after:transition-transform after:duration-300 dark:after:bg-neutral-100 md:text-sm ${
                pathname.includes(item.url)
                  ? 'text-neutral-900 after:scale-x-100 dark:text-neutral-100'
                  : 'after:scale-x-0'
              } hover:after:scale-x-100`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <ThemeChanger />
        <a
          href="https://github.com/bhardwajakshit/animitives"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
      </div>
    </motion.header>
  )
}
