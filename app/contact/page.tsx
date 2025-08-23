import Contact from '@/components/Contact'
import AdvancedBreadcrumbs from '@/components/AdvancedBreadcrumbs'

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Breadcrumbs avanzados */}
            <AdvancedBreadcrumbs
                variant="contact"
                showDescription={true}
                customItems={[
                    {
                        label: 'Inicio',
                        href: '/',
                        icon: null,
                        description: 'Página principal de Estética MCMA'
                    },
                    {
                        label: 'Contacto',
                        href: '/contact',
                        icon: null,
                        description: 'Información de contacto y ubicación',
                        isCurrent: true
                    }
                ]}
            />

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
