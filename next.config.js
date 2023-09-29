/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    API_KEY: process.env.API_KEY
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '/photo/2023/09/23/04/14/boat-8270209_1280.jpg',
          },
        ],
      },
}

module.exports = nextConfig
