import { MetadataRoute } from 'next'
import { getAllServices } from '@/config/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://esteticamcma.com.ar'
    const currentDate = new Date()

    // Obtener todos los servicios para crear URLs específicas
    const allServices = getAllServices()

    // Páginas principales
    const mainPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // URLs de servicios específicos
    const servicePages = allServices.map(service => ({
        url: `${baseUrl}/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[áéíóúñ]/g, (match) => {
            const accents: { [key: string]: string } = {
                'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'
            }
            return accents[match] || match
        })}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // URLs de categorías de servicios
    const categoryPages = [
        {
            url: `${baseUrl}/services/tratamientos-inyectables`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/tratamientos-regenerativos`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/tratamientos-capilares`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/mesoterapia-especializada`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // URLs de tratamientos populares
    const popularServices = [
        'toxina-botulinica',
        'acido-hialuronico',
        'prp-facial',
        'mesoterapia-facial',
        'mesoterapia-corporal',
        'prp-capilar'
    ]

    const popularServicePages = popularServices.map(service => ({
        url: `${baseUrl}/tratamientos/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // URLs de información y recursos
    const infoPages = [
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/booking`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]

    // Combinar todas las URLs
    const allUrls = [
        ...mainPages,
        ...categoryPages,
        ...popularServicePages,
        ...infoPages,
        ...servicePages
    ]

    return allUrls
}
