import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  reactStrictMode: false,
}

export default nextConfig
