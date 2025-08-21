import { Sparkles, Syringe, Droplets, Zap, Star, Heart, Scissors, Eye, Shield, Clock, MessageCircle } from 'lucide-react'

export interface Service {
    name: string
    duration: string
    description?: string
    popular?: boolean
}

export interface ServiceCategory {
    title: string
    icon: any // Lucide icon component
    description: string
    services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
    {
        title: 'Tratamientos Inyectables',
        icon: Syringe,
        description: 'Procedimientos mínimamente invasivos para rejuvenecimiento facial',
        services: [
            {
                name: 'Toxina Botulínica',
                duration: '30-45 min',
                description: 'Reducción de arrugas dinámicas, líneas de expresión y rejuvenecimiento facial',
                popular: true
            },
            {
                name: 'Rellenos con Ácido Hialurónico',
                duration: '45-60 min',
                description: 'Volumización facial, relleno de arrugas y definición de labios',
                popular: true
            },
            {
                name: 'Bioestimuladores Faciales',
                duration: '60 min',
                description: 'Estimulación natural de colágeno para rejuvenecimiento profundo'
            }
        ]
    },
    {
        title: 'Tratamientos Regenerativos',
        icon: Heart,
        description: 'Terapias naturales que activan la regeneración celular',
        services: [
            {
                name: 'Plasma Rico en Plaquetas (PRP)',
                duration: '60 min',
                description: 'Tratamiento regenerativo con plasma autólogo para rejuvenecimiento facial',
                popular: true
            },
            {
                name: 'Bioestimuladores Corporales',
                duration: '60-90 min',
                description: 'Estimulación de colágeno para mejorar la calidad de la piel corporal'
            }
        ]
    },
    {
        title: 'Tratamientos Capilares',
        icon: Sparkles,
        description: 'Soluciones especializadas para la salud y belleza del cabello',
        services: [
            {
                name: 'PRP Capilar',
                duration: '60 min',
                description: 'Tratamiento regenerativo para fortalecer el cabello y estimular su crecimiento'
            },
            {
                name: 'Mesoterapia Capilar',
                duration: '45 min',
                description: 'Nutrición directa del cuero cabelludo con vitaminas y minerales'
            }
        ]
    },
    {
        title: 'Mesoterapia Especializada',
        icon: Droplets,
        description: 'Tratamientos personalizados con microinyecciones de principios activos',
        services: [
            {
                name: 'Mesoterapia Facial',
                duration: '45 min',
                description: 'Hidratación profunda, luminosidad y rejuvenecimiento facial'
            },
            {
                name: 'Mesoterapia Corporal',
                duration: '60 min',
                description: 'Reducción de grasa localizada, celulitis y tonificación muscular'
            }
        ]
    }
]

// Función helper para obtener todos los servicios en una lista plana
export const getAllServices = (): Service[] => {
    return serviceCategories.flatMap(category => category.services)
}

// Función helper para buscar un servicio por nombre
export const findServiceByName = (name: string): Service | undefined => {
    return getAllServices().find(service => service.name === name)
}

// Función helper para obtener servicios populares
export const getPopularServices = (): Service[] => {
    return getAllServices().filter(service => service.popular)
}
