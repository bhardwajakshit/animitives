import Link from 'next/link'
import { Arrow } from '@/components/common/arrow'

export const CTAButton = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="group z-10 flex cursor-pointer items-center gap-1 rounded-md bg-neutral-900 px-3.5 py-1.5 text-md font-medium text-neutral-100 transition-colors duration-300 hover:bg-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-600"
      aria-label={label}
    >
      {label}
      <Arrow />
    </Link>
  )
}
