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
    desc: 'for Animations.',
  },
  lucide_icons: {
    name: 'Lucide React',
    link: 'https://lucide.dev/',
    cmd: 'npm install lucide-react',
    desc: 'for Icons.',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    cmd: 'npm install tailwindcss postcss autoprefixer',
    desc: 'for Styling.',
  },
  clsx_twm: {
    name: 'CLSX & Tailwind Merge',
    code: 'src/lib/cn.ts',
    desc: 'Create a lib/cn.ts file and add the following code for managing Tailwind Classes',
  },
  confetti: {
    name: 'Canvas Confetti',
    link: 'https://www.npmjs.com/package/canvas-confetti',
    cmd: 'npm install canvas-confetti',
    desc: 'for Confetti.',
  },
}

export enum REQUIREMENT {
  FRAMER_MOTION = 'framer_motion',
  LUCIDE_ICONS = 'lucide_icons',
  TAILWINDCSS = 'tailwindcss',
  CLSX_TWM = 'clsx_twm',
  CONFETTI = 'confetti',
}
