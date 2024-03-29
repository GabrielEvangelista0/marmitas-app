/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        //domains: ['firebasestorage.googleapis.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/marmitas-d6fc1.appspot.com/o/**',
          },
        ],
      },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
}

module.exports = nextConfig
