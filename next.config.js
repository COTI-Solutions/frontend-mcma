/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración de imágenes optimizada para SEO
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Configuración de compresión y performance
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    swcMinify: true,

    // Configuración de trailing slash
    trailingSlash: false,

    // Configuración de directorio de build
    distDir: '.next',

    // Headers de seguridad y performance
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    }
                ]
            },
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/favicon/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ]
    },

    // Configuración de redirecciones para SEO
    async redirects() {
        return [
            {
                source: '/servicios',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/contacto',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/sobre-nosotros',
                destination: '/#about',
                permanent: true,
            },
            {
                source: '/reservar',
                destination: '/#booking',
                permanent: true,
            },
            {
                source: '/preguntas-frecuentes',
                destination: '/#faq',
                permanent: true,
            }
        ]
    },

    // Configuración de rewrites para URLs amigables
    async rewrites() {
        return [
            {
                source: '/tratamientos/:path*',
                destination: '/#services',
            },
            {
                source: '/estetica/:path*',
                destination: '/#services',
            }
        ]
    },

    // Configuración experimental simplificada
    experimental: {
        optimizeCss: false, // Deshabilitamos para evitar problemas con critters
    },

    // Configuración de webpack simplificada
    webpack: (config, { dev, isServer }) => {
        // Optimización para producción
        if (!dev && !isServer) {
            config.optimization.splitChunks.chunks = 'all';
            config.optimization.minimize = true;
        }

        return config;
    },
}

module.exports = nextConfig
