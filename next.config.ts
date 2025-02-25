import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: {
    appIsrStatus: false,
  },
  reactStrictMode: false,
}

export default nextConfig
