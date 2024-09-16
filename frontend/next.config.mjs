/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode for development
    swcMinify: true, // Enables the SWC compiler for faster minification
    env: {
      // Define your environment variables here
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    async headers() {
      return [
        {
          // Add custom headers for security, caching, etc.
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
          ],
        },
      ];
    },
    experimental: {
      // Enable experimental features
      concurrentFeatures: true,
      serverComponentsExternalPackages: ['package'],
    },
    images: {
      // Configure image domains and other settings
      domains: ['uploadcare.com'], // Replace with your domains
      formats: ['image/avif', 'image/webp'],
    },
  };
  
  export default nextConfig;
  