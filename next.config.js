/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/',
        port: '3000',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/',
      },
    ],
  },
}
