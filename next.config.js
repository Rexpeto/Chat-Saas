/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: require.resolve("canvas"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
