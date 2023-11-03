/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@soulswap/cross-chain-widget"],
}


// Please declare withTM as your last plugin (the outermost one)
module.exports = nextConfig

