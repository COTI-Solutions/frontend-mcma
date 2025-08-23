/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración de imágenes optimizada para SEO
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Configuración de compresión y optimización
    compress: true,
    poweredByHeader: false,
    generateEtags: true,

    // Configuración de headers para SEO y seguridad
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
            {
                source: '/fonts/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/api/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, no-store, must-revalidate',
                    },
                ],
            },
        ]
    },

    // Configuración de redirecciones para SEO
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/inicio',
                destination: '/',
                permanent: true,
            },
            {
                source: '/estetica',
                destination: '/',
                permanent: true,
            },
            {
                source: '/belleza',
                destination: '/',
                permanent: true,
            },
            {
                source: '/spa',
                destination: '/',
                permanent: true,
            },
            {
                source: '/tratamientos',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/contacto',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/reservas',
                destination: '/#booking',
                permanent: true,
            },
            {
                source: '/sobre-nosotros',
                destination: '/#about',
                permanent: true,
            },
            {
                source: '/preguntas-frecuentes',
                destination: '/#faq',
                permanent: true,
            },
            // Redirecciones para servicios específicos
            {
                source: '/toxina-botulinica',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/acido-hialuronico',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/mesoterapia',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/rinoplastia',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/lifting-facial',
                destination: '/#services',
                permanent: true,
            },
            // Redirecciones para localización
            {
                source: '/villa-ballester',
                destination: '/#about',
                permanent: true,
            },
            {
                source: '/buenos-aires',
                destination: '/#about',
                permanent: true,
            },
            {
                source: '/argentina',
                destination: '/#about',
                permanent: true,
            },
        ]
    },

    // Configuración de rewrites para URLs amigables
    async rewrites() {
        return [
            {
                source: '/servicios/:path*',
                destination: '/#services',
            },
            {
                source: '/ubicacion/:path*',
                destination: '/#about',
            },
            {
                source: '/blog/:path*',
                destination: '/#services',
            },
            {
                source: '/testimonios',
                destination: '/#about',
            },
            {
                source: '/experiencia',
                destination: '/#about',
            },
            {
                source: '/tecnologia',
                destination: '/#about',
            },
            {
                source: '/precios',
                destination: '/#services',
            },
            {
                source: '/horarios',
                destination: '/#about',
            },
        ]
    },

    // Configuración de experimental features para SEO
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react', 'framer-motion'],
        scrollRestoration: true,
    },

    // Configuración de webpack para optimización
    webpack: (config, { dev, isServer }) => {
        // Optimización para producción
        if (!dev && !isServer) {
            config.optimization.splitChunks.chunks = 'all'
            config.optimization.minimize = true
        }

        // Configuración para imágenes
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: 'file-loader',
                        publicPath: '/_next/static/images/',
                        outputPath: 'static/images/',
                    },
                },
            ],
        })

        return config
    },

    // Configuración de i18n para SEO internacional
    i18n: {
        locales: ['es-AR', 'es'],
        defaultLocale: 'es-AR',
        localeDetection: false,
    },

    // Configuración de trailing slash para SEO
    trailingSlash: false,

    // Configuración de base path
    basePath: '',

    // Configuración de asset prefix
    assetPrefix: '',

    // Configuración de output
    output: 'standalone',

    // Configuración de distDir
    distDir: '.next',

    // Configuración de generateBuildId
    generateBuildId: async () => {
        return 'estetica-mcma-' + Date.now()
    },

    // Configuración de onDemandEntries
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },

    // Configuración de compiler
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
        styledComponents: true,
    },

    // Configuración de swcMinify
    swcMinify: true,

    // Configuración de typescript
    typescript: {
        ignoreBuildErrors: false,
    },

    // Configuración de eslint
    eslint: {
        ignoreDuringBuilds: false,
    },

    // Configuración de env
    env: {
        CUSTOM_KEY: 'estetica-mcma-2024',
    },

    // Configuración de publicRuntimeConfig
    publicRuntimeConfig: {
        staticFolder: '/static',
    },

    // Configuración de serverRuntimeConfig
    serverRuntimeConfig: {
        projectRoot: __dirname,
    },
}

module.exports = nextConfig
