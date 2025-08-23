'use client'

import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href: string
    isCurrent?: boolean
}

const Breadcrumbs = () => {
    const pathname = usePathname()

    // Generar breadcrumbs basados en la ruta actual
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const segments = pathname.split('/').filter(Boolean)
        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Inicio', href: '/' }
        ]

        if (segments.length === 0) {
            return breadcrumbs
        }

        let currentPath = ''

        segments.forEach((segment, index) => {
            currentPath += `/${segment}`

            // Mapear segmentos a etiquetas legibles
            let label = segment
            switch (segment) {
                case 'contact':
                    label = 'Contacto'
                    break
                case 'servicios':
                    label = 'Servicios'
                    break
                case 'about':
                    label = 'Sobre Nosotros'
                    break
                case 'booking':
                    label = 'Reservas'
                    break
                case 'faq':
                    label = 'Preguntas Frecuentes'
                    break
                case 'tratamientos-faciales':
                    label = 'Tratamientos Faciales'
                    break
                case 'tratamientos-corporales':
                    label = 'Tratamientos Corporales'
                    break
                case 'medicina-estetica':
                    label = 'Medicina Estética'
                    break
                case 'toxina-botulinica':
                    label = 'Toxina Botulínica'
                    break
                case 'acido-hialuronico':
                    label = 'Ácido Hialurónico'
                    break
                case 'mesoterapia':
                    label = 'Mesoterapia'
                    break
                case 'cirugias-esteticas':
                    label = 'Cirugías Estéticas'
                    break
                case 'villa-ballester':
                    label = 'Villa Ballester'
                    break
                case 'buenos-aires':
                    label = 'Buenos Aires'
                    break
                case 'blog':
                    label = 'Blog'
                    break
                case 'testimonios':
                    label = 'Testimonios'
                    break
                case 'precios':
                    label = 'Precios'
                    break
                case 'horarios':
                    label = 'Horarios'
                    break
                default:
                    // Capitalizar primera letra y reemplazar guiones
                    label = segment
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
            }

            const isLast = index === segments.length - 1
            breadcrumbs.push({
                label,
                href: currentPath,
                isCurrent: isLast
            })
        })

        return breadcrumbs
    }

    const breadcrumbs = generateBreadcrumbs()

    // No mostrar breadcrumbs en la página principal
    if (breadcrumbs.length <= 1) {
        return null
    }

    return (
        <>
            {/* Breadcrumbs visuales */}
            <nav
                className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-3 px-4 md:px-0"
                aria-label="Breadcrumb"
            >
                <div className="container mx-auto px-4">
                    <ol className="flex items-center space-x-2 text-sm">
                        {breadcrumbs.map((item, index) => (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && (
                                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                                )}

                                {item.isCurrent ? (
                                    // Elemento actual (no clickeable)
                                    <span
                                        className="text-gray-900 font-medium"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    // Elementos navegables
                                    <Link
                                        href={item.href}
                                        className={`flex items-center space-x-1 hover:text-primary-600 transition-colors duration-200 ${index === 0 ? 'text-primary-600' : 'text-gray-600'
                                            }`}
                                    >
                                        {index === 0 && <Home className="w-4 h-4" />}
                                        <span>{item.label}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>

            {/* Breadcrumbs estructurados para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((item, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": item.label,
                            "item": `https://esteticamcma.com${item.href}`
                        }))
                    })
                }}
            />
        </>
    )
}

export default Breadcrumbs
