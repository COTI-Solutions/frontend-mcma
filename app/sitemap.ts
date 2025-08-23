import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://esteticamcma.com'
    const currentDate = new Date()

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#booking`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas de servicios específicos (para SEO de long-tail)
        {
            url: `${baseUrl}/servicios/tratamientos-faciales`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/tratamientos-corporales`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/medicina-estetica`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/toxina-botulinica`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/acido-hialuronico`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/mesoterapia`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/servicios/cirugias-esteticas`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Páginas de localización
        {
            url: `${baseUrl}/ubicacion/villa-ballester`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/ubicacion/buenos-aires`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas de información
        {
            url: `${baseUrl}/sobre-nosotros`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/experiencia`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/tecnologia`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas de reservas
        {
            url: `${baseUrl}/reservar-cita`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/consulta-gratuita`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Páginas de contacto
        {
            url: `${baseUrl}/contacto/whatsapp`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacto/telefono`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacto/email`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Páginas de horarios
        {
            url: `${baseUrl}/horarios`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas de precios
        {
            url: `${baseUrl}/precios`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas de testimonios
        {
            url: `${baseUrl}/testimonios`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        // Páginas de blog/artículos (para SEO de contenido)
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/tratamientos-esteticos`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/consejos-belleza`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/medicina-estetica`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        // Páginas legales
        {
            url: `${baseUrl}/politica-privacidad`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos-uso`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookies`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
