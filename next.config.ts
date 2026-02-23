/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://raw.githubusercontent.com'),
    ],
  },
};

module.exports = nextConfig;
