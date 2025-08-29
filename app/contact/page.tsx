import type { Metadata } from 'next'
import Contact from '../../components/Contact'

export const metadata: Metadata = {
    title: 'Contacto - Estética MCMA Villa Ballester | Consulta Gratuita',
    description: 'Contacta con Estética MCMA en Villa Ballester, Buenos Aires. Consulta gratuita, horarios de atención, ubicación y reserva tu cita. Especialistas en medicina estética y tratamientos de belleza.',
    keywords: [
        'contacto estética MCMA Villa Ballester',
        'consulta gratuita estética Villa Ballester',
        'reserva cita estética Buenos Aires',
        'horarios estética MCMA Villa Ballester',
        'ubicación centro estético Villa Ballester',
        'teléfono estética MCMA',
        'WhatsApp estética Villa Ballester',
        'dirección estética MCMA Villa Ballester',
        'agendar consulta estética',
        'información tratamientos estéticos',
        'especialistas estéticos Villa Ballester',
        'centro de belleza Villa Ballester contacto'
    ],
    openGraph: {
        title: 'Contacto - Estética MCMA Villa Ballester | Consulta Gratuita',
        description: 'Contacta con Estética MCMA en Villa Ballester, Buenos Aires. Consulta gratuita, horarios de atención y reserva tu cita.',
        url: 'https://esteticamcma.com.ar/contact',
        siteName: 'Estética MCMA',
        images: [
            {
                url: '/images/logo/Logo.webp',
                width: 1200,
                height: 630,
                alt: 'Contacto Estética MCMA - Villa Ballester, Buenos Aires',
            }
        ],
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto - Estética MCMA Villa Ballester | Consulta Gratuita',
        description: 'Contacta con Estética MCMA en Villa Ballester, Buenos Aires. Consulta gratuita, horarios de atención y reserva tu cita.',
        images: ['/images/logo/Logo.webp'],
    },
    alternates: {
        canonical: 'https://esteticamcma.com.ar/contact',
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Header de la página */}
            <div className="bg-white shadow-sm border-b pt-20">
                <div className="container-custom py-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Contacto
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                        Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestros tratamientos.
                    </p>
                </div>
            </div>

            {/* Componente de Contacto */}
            <Contact />
        </main>
    )
}
