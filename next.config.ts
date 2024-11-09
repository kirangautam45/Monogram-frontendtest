import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/:path*',
      destination: 'https://monogram-frontend-test.vercel.app/:path*',
      permanent: true,
    },
  ],
}

export default nextConfig
