import { Syringe, Droplets, Heart, Sparkles, Eye, Zap, Shield, Star, Scissors, Clock, MessageCircle, Gem, TrendingUp } from 'lucide-react'

// Mapeo de imágenes para cada servicio
export const serviceImageMapping: { [key: string]: { src: string; alt: string; icon?: any; fallbackColor?: string } } = {
    'toxina botulínica': {
        src: '/images/gallery/toxina.webp',
        alt: 'Toxina Botulínica',
        icon: Syringe,
        fallbackColor: 'from-primary-400 to-secondary-400'
    },
    'rellenos con ácido hialurónico': {
        src: '/images/gallery/hialuronico2.webp',
        alt: 'Ácido Hialurónico',
        icon: Droplets,
        fallbackColor: 'from-blue-400 to-purple-400'
    },
    'bioestimuladores faciales': {
        src: '/images/gallery/hialuronico.webp',
        alt: 'Bioestimuladores Faciales',
        icon: Eye,
        fallbackColor: 'from-emerald-400 to-teal-400'
    },
    'plasma rico en plaquetas (prp)': {
        src: '',
        alt: 'Plasma Rico en Plaquetas',
        icon: Heart,
        fallbackColor: 'from-red-400 to-pink-400'
    },
    'bioestimuladores corporales': {
        src: '/images/gallery/mesocorporal.webp',
        alt: 'Bioestimuladores Corporales',
        icon: Zap,
        fallbackColor: 'from-yellow-400 to-orange-400'
    },
    'prp capilar': {
        src: '',
        alt: 'PRP Capilar',
        icon: Sparkles,
        fallbackColor: 'from-purple-400 to-indigo-400'
    },
    'mesoterapia capilar': {
        src: '/images/gallery/capilar.webp',
        alt: 'Mesoterapia Capilar',
        icon: Sparkles,
        fallbackColor: 'from-indigo-400 to-blue-400'
    },
    'mesoterapia facial': {
        src: '',
        alt: 'Mesoterapia Facial',
        icon: Eye,
        fallbackColor: 'from-rose-400 to-pink-400'
    },
    'mesoterapia corporal': {
        src: '/images/gallery/corporal.webp',
        alt: 'Mesoterapia Corporal',
        icon: Zap,
        fallbackColor: 'from-green-400 to-emerald-400'
    }
};

// Mapeo de iconos temáticos para servicios sin imagen
export const serviceIconMapping: { [key: string]: { icon: any; color: string } } = {
    'toxina botulínica': { icon: Syringe, color: 'from-primary-400 to-secondary-400' },
    'rellenos con ácido hialurónico': { icon: Droplets, color: 'from-blue-400 to-purple-400' },
    'bioestimuladores faciales': { icon: Eye, color: 'from-emerald-400 to-teal-400' },
    'plasma rico en plaquetas (prp)': { icon: Heart, color: 'from-red-400 to-pink-400' },
    'bioestimuladores corporales': { icon: Zap, color: 'from-yellow-400 to-orange-400' },
    'prp capilar': { icon: Sparkles, color: 'from-purple-400 to-indigo-400' },
    'mesoterapia capilar': { icon: Sparkles, color: 'from-indigo-400 to-blue-400' },
    'mesoterapia facial': { icon: Eye, color: 'from-rose-400 to-pink-400' },
    'mesoterapia corporal': { icon: Zap, color: 'from-green-400 to-emerald-400' },
    // Fallbacks genéricos para otros servicios
    'default': { icon: Star, color: 'from-gray-400 to-gray-500' }
};

// Función helper para obtener la imagen de un servicio
export const getServiceImage = (serviceName: string) => {
    const normalizedName = serviceName.toLowerCase();
    return serviceImageMapping[normalizedName] || null;
};

// Función helper para obtener el fallback (icono + color) de un servicio
export const getServiceFallback = (serviceName: string) => {
    const normalizedName = serviceName.toLowerCase();

    // Buscar en el mapeo de iconos temáticos
    if (serviceIconMapping[normalizedName]) {
        return serviceIconMapping[normalizedName];
    }

    // Fallback genérico
    return serviceIconMapping['default'];
};
