/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración básica de imágenes
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Configuración básica
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    swcMinify: true,

    // Configuración de trailing slash
    trailingSlash: false,

    // Configuración de distDir
    distDir: '.next',
}

module.exports = nextConfig
