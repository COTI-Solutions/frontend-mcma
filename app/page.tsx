import type { Metadata } from 'next'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'

export const metadata: Metadata = {
    title: 'Centro de Belleza Profesional en Villa Ballester, Buenos Aires - Tratamientos de Estética, Medicina Estética y Cirugías Plásticas',
    description: 'Descubre el centro de estética más profesional de Villa Ballester, Buenos Aires, Argentina. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia. Consulta gratuita. Toxina botulínica, ácido hialurónico, PRP, mesoterapia, rinoplastia, blefaroplastia, liposucción.',
    keywords: [
        // Keywords principales de estética
        'centro de belleza Villa Ballester',
        'tratamientos estéticos Buenos Aires',
        'medicina estética profesional',
        'estética MCMA Villa Ballester',
        'spa Villa Ballester',
        'belleza y bienestar Buenos Aires',

        // Localización específica
        'estética Villa Ballester Buenos Aires Argentina',
        'centro estético Villa Ballester San Martín',
        'medicina estética Villa Ballester Zona Norte',
        'estética San Martín Buenos Aires',
        'centro de belleza San Martín',
        'estética Zona Norte Buenos Aires',
        'centro estético Zona Norte',
        'estética Gran Buenos Aires',
        'centro de belleza GBA',
        'estética cerca de Villa Ballester',
        'centro de belleza cerca de mí',

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

        // Cirugías plásticas - Facial
        'cirugías plásticas Villa Ballester',
        'cirugía estética Villa Ballester',
        'cirugía plástica Buenos Aires',
        'cirugía estética Buenos Aires',
        'cirugía plástica Zona Norte',
        'cirugía estética Zona Norte',
        'cirugía plástica San Martín',
        'cirugía estética San Martín',
        'rinoplastia Villa Ballester',
        'cirugía de nariz Villa Ballester',
        'blefaroplastia Villa Ballester',
        'cirugía de párpados Villa Ballester',
        'lifting facial Villa Ballester',
        'ritidectomía Villa Ballester',
        'mentoplastia Villa Ballester',
        'cirugía de mentón Villa Ballester',
        'otoplastia Villa Ballester',
        'cirugía de orejas Villa Ballester',

        // Cirugías plásticas - Corporales
        'liposucción Villa Ballester',
        'liposucción Buenos Aires',
        'abdominoplastia Villa Ballester',
        'abdominoplastia Buenos Aires',
        'mastopexia Villa Ballester',
        'aumento mamario Villa Ballester',
        'reducción mamaria Villa Ballester',
        'cirugía mamaria Villa Ballester',
        'cirugía de mamas Villa Ballester',

        // Especialistas y consultas
        'cirujano plástico Villa Ballester',
        'especialista cirugía plástica Villa Ballester',
        'consulta cirugía plástica Villa Ballester',
        'consulta estética gratuita Villa Ballester',
        'especialistas estéticos Villa Ballester',
        'médicos estéticos Villa Ballester',

        // Ubicación y servicios
        'estética Villa Ballester Buenos Aires',
        'centro estético San Martín',
        'tratamientos personalizados Villa Ballester',
        'medicina estética avanzada Villa Ballester',
        'estética de confianza Villa Ballester',
        'mejor estética Villa Ballester',
        'estética recomendada Villa Ballester',

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
        'estética cerca de Villa Ballester',
        'cirugía plástica cerca de Villa Ballester',
        'medicina estética cerca de Villa Ballester',
        'centro de belleza cerca de Villa Ballester',
        'estética en Villa Ballester',
        'cirugía plástica en Villa Ballester',
        'medicina estética en Villa Ballester'
    ],
    openGraph: {
        title: 'Centro de Belleza Profesional en Villa Ballester, Buenos Aires - Tratamientos de Estética, Medicina Estética y Cirugías Plásticas',
        description: 'Descubre el centro de estética más profesional de Villa Ballester, Buenos Aires, Argentina. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas. Más de 5 años de experiencia. Consulta gratuita.',
        url: 'https://esteticamcma.com.ar',
        siteName: 'Estética MCMA',
        images: [
            {
                url: '/images/hero/estetica-mcma-1058556.webp',
                width: 1200,
                height: 630,
                alt: 'Centro de Estética MCMA - Tratamientos Profesionales y Cirugías Plásticas en Villa Ballester, Buenos Aires, Argentina',
            }
        ],
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Centro de Belleza Profesional en Villa Ballester, Buenos Aires - Tratamientos de Estética, Medicina Estética y Cirugías Plásticas',
        description: 'Descubre el centro de estética más profesional de Villa Ballester, Buenos Aires, Argentina. Especialistas en tratamientos faciales, corporales, medicina estética y cirugías plásticas.',
        images: ['/images/hero/estetica-mcma-1058556.webp'],
    },
    alternates: {
        canonical: 'https://esteticamcma.com.ar',
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
                        "url": "https://esteticamcma.com.ar",
                        "mainEntity": {
                            "@type": "MedicalBusiness",
                            "name": "Estética MCMA",
                            "description": "Centro de estética profesional especializado en tratamientos faciales, corporales y medicina estética",
                            "url": "https://esteticamcma.com.ar",
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
                                    "item": "https://esteticamcma.com.ar"
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
