import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from './app'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Animitives',
  description:
    'A free and open-source collection of beautifully crafted animated UI components.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-neutral-50 antialiased dark:bg-neutral-950`}
      >
        <App>{children}</App>
      </body>
    </html>
  )
}
