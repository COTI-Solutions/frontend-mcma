import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from './analytics'
import Breadcrumbs from '@/components/Breadcrumbs'

// Configuración SEO hiper profesional
export const metadata: Metadata = {
    metadataBase: new URL('https://esteticamcma.com'),
    title: {
        default: 'Estética MCMA - Centro de Belleza Profesional en Villa Ballester',
        template: '%s | Estética MCMA'
    },
    description: 'Centro de estética profesional con más de 5 años de experiencia en Villa Ballester. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías. Tecnología de vanguardia y resultados garantizados. Reserva tu consulta gratuita.',
    keywords: [
        'estética',
        'belleza',
        'tratamientos faciales',
        'tratamientos corporales',
        'medicina estética',
        'toxina botulínica',
        'ácido hialurónico',
        'mesoterapia',
        'cirugías estéticas',
        'Villa Ballester',
        'Buenos Aires',
        'spa',
        'bienestar',
        'reservas online',
        'consulta gratuita',
        'tratamientos regenerativos',
        'rinoplastia',
        'lifting facial',
        'rejuvenecimiento'
    ],
    authors: [{ name: 'Estética MCMA', url: 'https://esteticamcma.com' }],
    creator: 'Estética MCMA',
    publisher: 'Estética MCMA',
    category: 'Salud y Belleza',
    classification: 'Centro de Estética Profesional',
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
    alternates: {
        canonical: 'https://esteticamcma.com',
        languages: {
            'es-AR': 'https://esteticamcma.com',
            'es': 'https://esteticamcma.com',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://esteticamcma.com',
        siteName: 'Estética MCMA',
        title: 'Estética MCMA - Centro de Belleza Profesional en Villa Ballester',
        description: 'Centro de estética profesional con más de 5 años de experiencia. Especialistas en tratamientos faciales, corporales y medicina estética. Reserva tu consulta gratuita.',
        images: [
            {
                url: '/images/logo/logo.png',
                width: 1200,
                height: 630,
                alt: 'Estética MCMA - Centro de Belleza Profesional',
                type: 'image/png',
            },
            {
                url: '/images/about/portada.webp',
                width: 1200,
                height: 630,
                alt: 'Centro de Estética MCMA - Instalaciones',
                type: 'image/webp',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Estética MCMA - Centro de Belleza Profesional en Villa Ballester',
        description: 'Centro de estética profesional con más de 5 años de experiencia. Especialistas en tratamientos faciales, corporales y medicina estética.',
        images: ['/images/logo/logo.png'],
        creator: '@esteticamcma',
        site: '@esteticamcma',
    },
    verification: {
        google: 'tu-codigo-verificacion-google',
        yandex: 'tu-codigo-verificacion-yandex',
        yahoo: 'tu-codigo-verificacion-yahoo',
    },
    other: {
        'geo.region': 'AR-B',
        'geo.placename': 'Villa Ballester',
        'geo.position': '-34.5451;-58.5546',
        'ICBM': '-34.5451, -58.5546',
        'DC.title': 'Estética MCMA - Centro de Belleza Profesional',
        'DC.description': 'Centro de estética profesional en Villa Ballester',
        'DC.subject': 'Estética, Belleza, Tratamientos Faciales, Tratamientos Corporales',
        'DC.creator': 'Estética MCMA',
        'DC.publisher': 'Estética MCMA',
        'DC.contributor': 'Estética MCMA',
        'DC.date': '2024',
        'DC.type': 'Service',
        'DC.format': 'text/html',
        'DC.identifier': 'https://esteticamcma.com',
        'DC.language': 'es-AR',
        'DC.coverage': 'Villa Ballester, Buenos Aires, Argentina',
        'DC.rights': '© 2024 Estética MCMA. Todos los derechos reservados.',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1f2937' }
    ],
    colorScheme: 'light',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es-AR">
            <head>
                {/* Preload critical resources */}
                <link rel="preload" href="/images/logo/logo.png" as="image" />
                <link rel="preload" href="/images/hero/estetica-mcma-1058556.webp" as="image" />

                {/* DNS Prefetch for external domains */}
                <link rel="dns-prefetch" href="//wa.me" />
                <link rel="dns-prefetch" href="//instagram.com" />
                <link rel="dns-prefetch" href="//facebook.com" />

                {/* Preconnect for external resources */}
                <link rel="preconnect" href="https://wa.me" />
                <link rel="preconnect" href="https://instagram.com" />
                <link rel="preconnect" href="https://facebook.com" />

                {/* Structured Data - Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalBusiness",
                            "name": "Estética MCMA",
                            "alternateName": "MCMA Estética",
                            "description": "Centro de estética profesional especializado en tratamientos faciales, corporales y medicina estética",
                            "url": "https://esteticamcma.com",
                            "logo": "https://esteticamcma.com/images/logo/logo.png",
                            "image": [
                                "https://esteticamcma.com/images/about/portada.webp",
                                "https://esteticamcma.com/images/about/estetica-mcma-1058558.webp"
                            ],
                            "telephone": "+54-11-3701-7756",
                            "email": "esteticamcma@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "11 de Septiembre 4896, Timbre 3F",
                                "addressLocality": "Villa Ballester",
                                "addressRegion": "Buenos Aires",
                                "postalCode": "1653",
                                "addressCountry": "AR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -34.5451,
                                "longitude": -58.5546
                            },
                            "openingHours": [
                                "Mo-Fr 09:00-18:00",
                                "Sa 09:00-12:00"
                            ],
                            "priceRange": "$$",
                            "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
                            "currenciesAccepted": "ARS",
                            "sameAs": [
                                "https://instagram.com/estetica.mcma",
                                "https://facebook.com/esteticamcma"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Tratamientos de Estética",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Tratamientos Regenerativos",
                                            "description": "Tratamientos avanzados para regeneración celular y rejuvenecimiento"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Tratamientos Corporales",
                                            "description": "Procedimientos para modelado y tonificación corporal"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Mesoterapias",
                                            "description": "Tratamientos de mesoterapia para diversas áreas del cuerpo"
                                        }
                                    }
                                ]
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Villa Ballester",
                                "containedInPlace": {
                                    "@type": "State",
                                    "name": "Buenos Aires",
                                    "containedInPlace": {
                                        "@type": "Country",
                                        "name": "Argentina"
                                    }
                                }
                            },
                            "foundingDate": "2019",
                            "numberOfEmployees": "5-10",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "reviewCount": "127",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "review": [
                                {
                                    "@type": "Review",
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": "5",
                                        "bestRating": "5"
                                    },
                                    "author": {
                                        "@type": "Person",
                                        "name": "María González"
                                    },
                                    "reviewBody": "Excelente atención y resultados increíbles. Muy profesionales y dedicados."
                                }
                            ]
                        })
                    }}
                />

                {/* Structured Data - Local Business */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Estética MCMA",
                            "description": "Centro de estética profesional en Villa Ballester",
                            "url": "https://esteticamcma.com",
                            "telephone": "+54-11-3701-7756",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "11 de Septiembre 4896, Timbre 3F",
                                "addressLocality": "Villa Ballester",
                                "addressRegion": "Buenos Aires",
                                "postalCode": "1653",
                                "addressCountry": "AR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -34.5451,
                                "longitude": -58.5546
                            },
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": "Saturday",
                                    "opens": "09:00",
                                    "closes": "12:00"
                                }
                            ]
                        })
                    }}
                />

                {/* Structured Data - FAQ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "¿Qué tratamientos ofrecen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ofrecemos tratamientos faciales, corporales, medicina estética, mesoterapias, toxina botulínica, ácido hialurónico y cirugías estéticas."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿Cómo puedo reservar mi cita?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Puedes reservar tu cita a través de nuestro formulario online, por WhatsApp al +54 11 3701 7756, o por teléfono."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿Dónde están ubicados?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Estamos ubicados en 11 de Septiembre 4896, Timbre 3F, Villa Ballester, Buenos Aires, Argentina."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </head>
            <body className="antialiased overflow-x-hidden">
                <Navbar />
                <Breadcrumbs />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
