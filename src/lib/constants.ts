export const headerCommonLinks = [
  {
    id: 1,
    name: 'Components',
    url: '/components',
  },
  {
    id: 2,
    name: 'Buttons',
    url: '/buttons',
  },
]

type Requirements = {
  name: string
  link?: string
  code?: string
  cmd?: string
  desc: string
}

export const REQUIREMENTS: { [key: string]: Requirements } = {
  framer_motion: {
    name: 'Framer Motion',
    link: 'https://www.npmjs.com/package/framer-motion',
    cmd: 'npm install framer-motion',
    desc: 'Used for animations',
  },
  lucide_icons: {
    name: 'Lucide React',
    link: 'https://lucide.dev/',
    cmd: 'npm install lucide-react',
    desc: 'Used for icons',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    cmd: 'npm install tailwindcss postcss autoprefixer',
    desc: 'Used for styling',
  },
  clsx_twm: {
    name: 'CLSX & Tailwind Merge',
    code: 'src/lib/cn.ts',
    desc: 'Create a lib/cn.ts file and add the following code for managing Tailwind Classes',
  },
  confetti: {
    name: 'Confetti',
    link: 'https://www.npmjs.com/package/canvas-confetti',
    cmd: 'npm install canvas-confetti',
    desc: 'Used for confetti',
  },
}

export enum REQUIREMENT {
  FRAMER_MOTION = 'framer_motion',
  LUCIDE_ICONS = 'lucide_icons',
  TAILWINDCSS = 'tailwindcss',
  CLSX_TWM = 'clsx_twm',
  CONFETTI = 'confetti',
}
