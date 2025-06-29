/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: false // Explicitly disable App Router
    }
}

export default nextConfig;
