import type { Metadata } from 'next'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'

export const metadata: Metadata = {
    title: 'Centro de Belleza Profesional en Villa Ballester - Tratamientos de Estética',
    description: 'Descubre el centro de estética más profesional de Villa Ballester. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías. Más de 5 años de experiencia. Reserva tu consulta gratuita.',
    keywords: [
        'centro de belleza Villa Ballester',
        'tratamientos estéticos Buenos Aires',
        'medicina estética profesional',
        'toxina botulínica Villa Ballester',
        'ácido hialurónico Buenos Aires',
        'mesoterapia facial y corporal',
        'cirugías estéticas Villa Ballester',
        'tratamientos regenerativos',
        'rejuvenecimiento facial',
        'consulta estética gratuita',
        'spa Villa Ballester',
        'bienestar y belleza'
    ],
    openGraph: {
        title: 'Centro de Belleza Profesional en Villa Ballester - Tratamientos de Estética',
        description: 'Descubre el centro de estética más profesional de Villa Ballester. Especialistas en tratamientos faciales, corporales y medicina estética.',
        url: 'https://esteticamcma.com',
        siteName: 'Estética MCMA',
        images: [
            {
                url: '/images/hero/estetica-mcma-1058556.webp',
                width: 1200,
                height: 630,
                alt: 'Centro de Estética MCMA - Tratamientos Profesionales',
            }
        ],
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Centro de Belleza Profesional en Villa Ballester - Tratamientos de Estética',
        description: 'Descubre el centro de estética más profesional de Villa Ballester. Especialistas en tratamientos faciales, corporales y medicina estética.',
        images: ['/images/hero/estetica-mcma-1058556.webp'],
    },
    alternates: {
        canonical: 'https://esteticamcma.com',
    },
}

export default function Home() {
    return (
        <>
            {/* Structured Data - WebPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Estética MCMA - Centro de Belleza Profesional",
                        "description": "Centro de estética profesional en Villa Ballester, Buenos Aires. Especialistas en tratamientos faciales, corporales y medicina estética.",
                        "url": "https://esteticamcma.com",
                        "mainEntity": {
                            "@type": "MedicalBusiness",
                            "name": "Estética MCMA",
                            "description": "Centro de estética profesional especializado en tratamientos faciales, corporales y medicina estética",
                            "url": "https://esteticamcma.com",
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
                            "currenciesAccepted": "ARS"
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Inicio",
                                    "item": "https://esteticamcma.com"
                                }
                            ]
                        }
                    })
                }}
            />

            <main className="min-h-screen">
                <section id="hero" aria-label="Bienvenida a Estética MCMA">
                    <Hero />
                </section>

                <section id="about" aria-label="Sobre Nosotros">
                    <About />
                </section>

                <section id="services" aria-label="Nuestros Servicios">
                    <Services />
                </section>

                <section id="booking" aria-label="Reserva tu Cita">
                    <Booking />
                </section>

                <section id="faq" aria-label="Preguntas Frecuentes">
                    <FAQ />
                </section>
            </main>
        </>
    )
}
