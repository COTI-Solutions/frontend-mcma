import type { Metadata } from 'next'
import Script from 'next/script'
import { Libre_Baskerville, Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AntdProvider from '@/components/AntdProvider'
import StaticSiteContent from '@/components/StaticSiteContent'

const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-libre-baskerville',
    display: 'swap',
})

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-work-sans',
    display: 'swap',
})

const LOGO_PATH = '/images/logo/LogoDRAMacarenaCovian.png'

export const metadata: Metadata = {
    title: {
        default: 'Estética MCMA - Centro de Belleza Profesional en Villa Ballester, Buenos Aires',
        template: '%s | Estética MCMA Villa Ballester'
    },
    description: 'Centro de estética profesional en Villa Ballester, Buenos Aires, Argentina. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia. Consulta gratuita.',
    keywords: [
        // Keywords principales de estética
        'estética MCMA',
        'centro de belleza Villa Ballester',
        'medicina estética Buenos Aires',
        'tratamientos estéticos profesionales',
        'spa Villa Ballester',
        'belleza y bienestar',

        // Localización específica
        'estética Villa Ballester Buenos Aires',
        'centro estético Villa Ballester Argentina',
        'medicina estética Villa Ballester',
        'tratamientos estéticos Villa Ballester',
        'cirugías plásticas Villa Ballester',
        'estética San Martín Buenos Aires',
        'centro de belleza San Martín',
        'medicina estética San Martín',
        'estética Zona Norte Buenos Aires',
        'centro estético Zona Norte',
        'estética Gran Buenos Aires',
        'centro de belleza GBA',

        // Tratamientos específicos - Facial
        'toxina botulínica Villa Ballester',
        'botox Villa Ballester Buenos Aires',
        'ácido hialurónico Villa Ballester',
        'rellenos faciales Villa Ballester',
        'rejuvenecimiento facial Villa Ballester',
        'tratamientos antiaging Villa Ballester',
        'mesoterapia facial Villa Ballester',
        'PRP facial Villa Ballester',
        'plasma rico en plaquetas facial Villa Ballester',
        'bioestimuladores faciales Villa Ballester',

        // Tratamientos corporales
        'mesoterapia corporal Villa Ballester',
        'tratamientos corporales Villa Ballester',
        'reducción de grasa localizada Villa Ballester',
        'celulitis Villa Ballester',
        'tonificación muscular Villa Ballester',
        'bioestimuladores corporales Villa Ballester',

        // Tratamientos capilares
        'PRP capilar Villa Ballester',
        'mesoterapia capilar Villa Ballester',
        'tratamientos capilares Villa Ballester',
        'caída del cabello Villa Ballester',
        'fortalecimiento capilar Villa Ballester',

        // Cirugías plásticas
        'cirugías plásticas Villa Ballester',
        'cirugía estética Villa Ballester',
        'cirugía plástica Buenos Aires',
        'cirugía estética Buenos Aires',
        'cirugía plástica Zona Norte',
        'cirugía estética Zona Norte',
        'cirugía plástica San Martín',
        'cirugía estética San Martín',
        'cirugía de nariz Villa Ballester',
        'rinoplastia Villa Ballester',
        'cirugía de párpados Villa Ballester',
        'blefaroplastia Villa Ballester',
        'lifting facial Villa Ballester',
        'ritidectomía Villa Ballester',
        'cirugía de mentón Villa Ballester',
        'mentoplastia Villa Ballester',
        'cirugía de orejas Villa Ballester',
        'otoplastia Villa Ballester',
        'liposucción Villa Ballester',
        'abdominoplastia Villa Ballester',
        'mastopexia Villa Ballester',
        'aumento mamario Villa Ballester',
        'reducción mamaria Villa Ballester',

        // Ubicación y servicios
        'estética Villa Ballester Buenos Aires',
        'centro estético San Martín',
        'consulta estética gratuita Villa Ballester',
        'especialistas estéticos Villa Ballester',
        'tratamientos personalizados Villa Ballester',
        'medicina estética avanzada Villa Ballester',
        'cirujano plástico Villa Ballester',
        'especialista cirugía plástica Villa Ballester',
        'consulta cirugía plástica Villa Ballester',

        // Palabras relacionadas
        'belleza natural Villa Ballester',
        'cuidado de la piel Villa Ballester',
        'dermatología estética Villa Ballester',
        'cosmiatría Villa Ballester',
        'tratamientos mínimamente invasivos Villa Ballester',
        'rejuvenecimiento no quirúrgico Villa Ballester',
        'estética médica Villa Ballester',
        'belleza integral Villa Ballester',
        'bienestar estético Villa Ballester',

        // Términos de búsqueda local
        'cerca de Villa Ballester',
        'estética cerca de mí',
        'centro de belleza cerca de Villa Ballester',
        'medicina estética cerca de Villa Ballester',
        'cirugía plástica cerca de Villa Ballester',
        'mejor estética Villa Ballester',
        'estética recomendada Villa Ballester',
        'estética de confianza Villa Ballester'
    ],
    authors: [
        { name: 'Estética MCMA' },
        { name: 'Coti Solutions', url: 'https://cotisolutions.com.ar' }
    ],
    creator: 'Coti Solutions',
    publisher: 'Estética MCMA',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://esteticamcma.com.ar'),
    alternates: {
        canonical: '/',
        languages: {
            'es-AR': '/',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://esteticamcma.com.ar',
        title: 'Estética MCMA - Centro de Estética',
        description: 'Centro de Estética Profesional en Villa Ballester, Buenos Aires. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia.',
        siteName: 'Estética MCMA',
        images: [
            {
                url: LOGO_PATH,
                width: 1200,
                height: 630,
                alt: 'Centro de Estética MCMA - Tratamientos Profesionales en Villa Ballester, Buenos Aires, Argentina',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Estética MCMA - Centro de Estética',
        description: 'Centro de Estética Profesional en Villa Ballester, Buenos Aires. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia.',
        images: [LOGO_PATH],
        creator: '@esteticamcma',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: '59ioqQja7JTrlKMG3hjrEM3j7PkWmJJbJcrrJi7Li2U',
        yandex: 'tu-codigo-verificacion-yandex',
        yahoo: 'tu-codigo-verificacion-yahoo',
    },
    category: 'health',
    classification: 'medical',
    other: {
        'geo.region': 'AR-B',
        'geo.placename': 'Villa Ballester',
        'geo.position': '-34.5451;-58.5546',
        'ICBM': '-34.5451, -58.5546',
        'DC.title': 'Estética MCMA - Centro de Estética',
        'DC.creator': 'Estética MCMA',
        'DC.subject': 'Estética, Belleza, Medicina Estética, Cirugías Plásticas, Villa Ballester, Buenos Aires, Argentina',
        'DC.description': 'Centro de Estética Profesional en Villa Ballester, Buenos Aires. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia.',
        'DC.publisher': 'Estética MCMA',
        'DC.contributor': 'Estética MCMA',
        'DC.date': '2024',
        'DC.type': 'Service',
        'DC.format': 'text/html',
        'DC.identifier': 'https://esteticamcma.com.ar',
        'DC.language': 'es-AR',
        'DC.coverage': 'Villa Ballester, Buenos Aires, Argentina',
        'DC.rights': 'Copyright © 2024 Estética MCMA',
        'DC.relation': 'Villa Ballester, San Martín, Zona Norte, Gran Buenos Aires',
        'DC.spatial': 'Villa Ballester, Buenos Aires, Argentina',
        'DC.temporal': '2024-present',
        'DC.audience': 'Pacientes interesados en estética y cirugías plásticas',
        'DC.educationalLevel': 'Profesional',
        'DC.instructionalMethod': 'Consulta médica y tratamientos estéticos',
        'DC.developer': 'Coti Solutions',
        'DC.website': 'https://cotisolutions.com.ar',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es-AR" className={`no-js ${libreBaskerville.variable} ${workSans.variable}`}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.documentElement.classList.replace('no-js','js')`,
                    }}
                />
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-C2LNFYWTB4"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-C2LNFYWTB4');
                    `}
                </Script>

                {/* Favicons and App Icons - Optimizado para Google */}
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/favicon/web-app-manifest-192x192.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/favicon/web-app-manifest-512x512.png" />
                <meta name="apple-mobile-web-app-title" content="MCMA" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="manifest" href="/favicon/site.webmanifest" />

                {/* Meta tags adicionales para favicon */}
                <meta name="msapplication-TileImage" content="/favicon/web-app-manifest-192x192.png" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

                {/* SEO Meta Tags Adicionales */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#6A2226" />
                <meta name="msapplication-TileColor" content="#6A2226" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

                {/* Preconnect para performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
            </head>
            <body className={`${workSans.className} antialiased overflow-x-hidden bg-background`}>
                <AntdProvider>
                    <a
                        href="#contenido-principal"
                        className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white focus:[clip:auto]"
                    >
                        Saltar al contenido principal
                    </a>
                    <Navbar />
                    <div id="contenido-principal">{children}</div>
                    <StaticSiteContent />
                    <Footer />
                    <noscript>
                        <div className="container-custom py-8 text-center text-sm text-gray-700 border-t border-background-dark bg-background">
                            Este sitio funciona sin JavaScript. Consultá también{' '}
                            <a href="/llms.txt" className="text-primary-600 underline">
                                /llms.txt
                            </a>{' '}
                            para un resumen del negocio orientado a agentes de IA.
                        </div>
                    </noscript>
                </AntdProvider>
            </body>
        </html>
    )
}
