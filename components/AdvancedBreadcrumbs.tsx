'use client'

import { usePathname } from 'next/navigation'
import { ChevronRight, Home, MapPin, Phone, Calendar, Star } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href: string
    isCurrent?: boolean
    icon?: React.ReactNode
    description?: string
}

interface AdvancedBreadcrumbsProps {
    customItems?: BreadcrumbItem[]
    showDescription?: boolean
    variant?: 'default' | 'service' | 'location' | 'contact'
}

const AdvancedBreadcrumbs = ({
    customItems,
    showDescription = false,
    variant = 'default'
}: AdvancedBreadcrumbsProps) => {
    const pathname = usePathname()

    // Generar breadcrumbs avanzados
    const generateAdvancedBreadcrumbs = (): BreadcrumbItem[] => {
        if (customItems) {
            return customItems
        }

        const segments = pathname.split('/').filter(Boolean)
        const breadcrumbs: BreadcrumbItem[] = [
            {
                label: 'Inicio',
                href: '/',
                icon: <Home className="w-4 h-4" />,
                description: 'Página principal de Estética MCMA'
            }
        ]

        if (segments.length === 0) {
            return breadcrumbs
        }

        let currentPath = ''

        segments.forEach((segment, index) => {
            currentPath += `/${segment}`

            // Mapeo avanzado con iconos y descripciones
            let breadcrumbItem: BreadcrumbItem = {
                label: segment,
                href: currentPath
            }

            switch (segment) {
                case 'contact':
                    breadcrumbItem = {
                        label: 'Contacto',
                        href: currentPath,
                        icon: <Phone className="w-4 h-4" />,
                        description: 'Información de contacto y ubicación'
                    }
                    break

                case 'servicios':
                    breadcrumbItem = {
                        label: 'Servicios',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Nuestros tratamientos de estética'
                    }
                    break

                case 'about':
                    breadcrumbItem = {
                        label: 'Sobre Nosotros',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Conoce nuestro centro de estética'
                    }
                    break

                case 'booking':
                    breadcrumbItem = {
                        label: 'Reservas',
                        href: currentPath,
                        icon: <Calendar className="w-4 h-4" />,
                        description: 'Reserva tu cita online'
                    }
                    break

                case 'faq':
                    breadcrumbItem = {
                        label: 'Preguntas Frecuentes',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Respuestas a dudas comunes'
                    }
                    break

                // Servicios específicos
                case 'tratamientos-faciales':
                    breadcrumbItem = {
                        label: 'Tratamientos Faciales',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Rejuvenecimiento y cuidado facial'
                    }
                    break

                case 'tratamientos-corporales':
                    breadcrumbItem = {
                        label: 'Tratamientos Corporales',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Modelado y tonificación corporal'
                    }
                    break

                case 'medicina-estetica':
                    breadcrumbItem = {
                        label: 'Medicina Estética',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Procedimientos médicos estéticos'
                    }
                    break

                case 'toxina-botulinica':
                    breadcrumbItem = {
                        label: 'Toxina Botulínica',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Tratamiento para arrugas y líneas'
                    }
                    break

                case 'acido-hialuronico':
                    breadcrumbItem = {
                        label: 'Ácido Hialurónico',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Rellenos y hidratación facial'
                    }
                    break

                case 'mesoterapia':
                    breadcrumbItem = {
                        label: 'Mesoterapia',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Tratamientos regenerativos'
                    }
                    break

                case 'cirugias-esteticas':
                    breadcrumbItem = {
                        label: 'Cirugías Estéticas',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Procedimientos quirúrgicos'
                    }
                    break

                // Localización
                case 'villa-ballester':
                    breadcrumbItem = {
                        label: 'Villa Ballester',
                        href: currentPath,
                        icon: <MapPin className="w-4 h-4" />,
                        description: 'Ubicación en Villa Ballester'
                    }
                    break

                case 'buenos-aires':
                    breadcrumbItem = {
                        label: 'Buenos Aires',
                        href: currentPath,
                        icon: <MapPin className="w-4 h-4" />,
                        description: 'Provincia de Buenos Aires'
                    }
                    break

                // Otros
                case 'blog':
                    breadcrumbItem = {
                        label: 'Blog',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Artículos y consejos de belleza'
                    }
                    break

                case 'testimonios':
                    breadcrumbItem = {
                        label: 'Testimonios',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Experiencias de nuestros clientes'
                    }
                    break

                case 'precios':
                    breadcrumbItem = {
                        label: 'Precios',
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: 'Tarifas de nuestros servicios'
                    }
                    break

                case 'horarios':
                    breadcrumbItem = {
                        label: 'Horarios',
                        href: currentPath,
                        icon: <Calendar className="w-4 h-4" />,
                        description: 'Horarios de atención'
                    }
                    break

                default:
                    // Capitalizar y formatear automáticamente
                    breadcrumbItem = {
                        label: segment
                            .split('-')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' '),
                        href: currentPath,
                        icon: <Star className="w-4 h-4" />,
                        description: `Página de ${segment}`
                    }
            }

            const isLast = index === segments.length - 1
            breadcrumbItem.isCurrent = isLast

            breadcrumbs.push(breadcrumbItem)
        })

        return breadcrumbs
    }

    const breadcrumbs = generateAdvancedBreadcrumbs()

    // No mostrar breadcrumbs en la página principal
    if (breadcrumbs.length <= 1) {
        return null
    }

    // Estilos según la variante
    const getVariantStyles = () => {
        switch (variant) {
            case 'service':
                return 'bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200'
            case 'location':
                return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
            case 'contact':
                return 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
            default:
                return 'bg-white/80 border-gray-200'
        }
    }

    return (
        <>
            {/* Breadcrumbs avanzados */}
            <nav
                className={`${getVariantStyles()} backdrop-blur-sm border-b py-4 px-4 md:px-0`}
                aria-label="Breadcrumb"
            >
                <div className="container mx-auto px-4">
                    <ol className="flex flex-wrap items-center space-x-2 text-sm">
                        {breadcrumbs.map((item, index) => (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && (
                                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                                )}

                                {item.isCurrent ? (
                                    // Elemento actual
                                    <div className="flex items-center space-x-2">
                                        {item.icon && (
                                            <span className="text-primary-600">
                                                {item.icon}
                                            </span>
                                        )}
                                        <div>
                                            <span
                                                className="text-gray-900 font-semibold"
                                                aria-current="page"
                                            >
                                                {item.label}
                                            </span>
                                            {showDescription && item.description && (
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    // Elementos navegables
                                    <Link
                                        href={item.href}
                                        className={`flex items-center space-x-2 hover:text-primary-600 transition-all duration-200 group ${index === 0 ? 'text-primary-600' : 'text-gray-600'
                                            }`}
                                    >
                                        {item.icon && (
                                            <span className="group-hover:scale-110 transition-transform duration-200">
                                                {item.icon}
                                            </span>
                                        )}
                                        <div>
                                            <span className="group-hover:underline">
                                                {item.label}
                                            </span>
                                            {showDescription && item.description && (
                                                <p className="text-xs text-gray-500 group-hover:text-gray-600 mt-1">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>

            {/* Breadcrumbs estructurados para SEO avanzado */}
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
                            "item": `https://esteticamcma.com${item.href}`,
                            "description": item.description || `${item.label} en Estética MCMA`
                        }))
                    })
                }}
            />
        </>
    )
}

export default AdvancedBreadcrumbs
