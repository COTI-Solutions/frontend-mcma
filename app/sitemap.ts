import { MetadataRoute } from 'next'

// Configuración estática para mejor rendimiento y SEO
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidar cada 24 horas

// Genera URLs canónicas optimizadas para SEO
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://esteticamcma.com.ar'
    const currentDate = new Date().toISOString()

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}
