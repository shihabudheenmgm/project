// next.config.js
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    devIndicators: false,
};

module.exports = nextConfig;
