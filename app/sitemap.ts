import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

// Genera solo URLs canónicas que existen y devuelven 200.
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://esteticamcma.com.ar'
    const currentDate = new Date()

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
            priority: 0.6,
        },
    ]
}
