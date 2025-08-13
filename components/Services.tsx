'use client'

import { motion } from 'framer-motion'
import { Sparkles, Scissors, Droplets, Zap, Star, Syringe } from 'lucide-react'

const Services = () => {
    const serviceCategories = [
        {
            title: 'Tratamientos Faciales',
            icon: Sparkles,
            services: [
                { name: 'Limpieza Profunda', price: '€45', duration: '60 min', description: 'Limpieza facial profesional con extracción de impurezas' },
                { name: 'Hidratación Intensa', price: '€55', duration: '75 min', description: 'Tratamiento hidratante con mascarillas personalizadas' },
                { name: 'Anti-aging Premium', price: '€75', duration: '90 min', description: 'Tratamiento anti-edad con productos de alta gama' },
                { name: 'Acné y Problemas', price: '€65', duration: '80 min', description: 'Tratamiento específico para pieles problemáticas' }
            ]
        },
        {
            title: 'Tratamientos Avanzados',
            icon: Syringe,
            services: [
                { name: 'Plasma Rico en Plaquetas', price: '€180', duration: '60 min', description: 'Tratamiento regenerativo con plasma autólogo' },
                { name: 'Botox Facial', price: '€250', duration: '45 min', description: 'Reducción de arrugas y líneas de expresión' },
                { name: 'Ácido Hialurónico', price: '€200', duration: '60 min', description: 'Relleno facial para volumen y definición' },
                { name: 'Hilos Tensores', price: '€350', duration: '90 min', description: 'Lifting no quirúrgico con hilos reabsorbibles' }
            ]
        },
        {
            title: 'Tratamientos Corporales',
            icon: Droplets,
            services: [
                { name: 'Masaje Relajante', price: '€60', duration: '60 min', description: 'Masaje terapéutico para aliviar tensiones' },
                { name: 'Drenaje Linfático', price: '€70', duration: '75 min', description: 'Tratamiento para mejorar la circulación' },
                { name: 'Reducción Localizada', price: '€80', duration: '90 min', description: 'Tratamiento para reducir grasa localizada' },
                { name: 'Firming Corporal', price: '€85', duration: '90 min', description: 'Tratamiento para tonificar y reafirmar' }
            ]
        },
        {
            title: 'Depilación y Belleza',
            icon: Scissors,
            services: [
                { name: 'Depilación Láser Piernas', price: '€120', duration: '45 min', description: 'Depilación definitiva con tecnología láser' },
                { name: 'Depilación Láser Axilas', price: '€45', duration: '20 min', description: 'Depilación definitiva de axilas' },
                { name: 'Depilación Cera Piernas', price: '€35', duration: '30 min', description: 'Depilación tradicional con cera' },
                { name: 'Depilación Cera Axilas', price: '€15', duration: '15 min', description: 'Depilación rápida y efectiva' }
            ]
        },
        {
            title: 'Tratamientos Especiales',
            icon: Zap,
            services: [
                { name: 'Radiofrecuencia Facial', price: '€95', duration: '60 min', description: 'Tratamiento para reafirmar y rejuvenecer' },
                { name: 'Ultrasonidos', price: '€85', duration: '75 min', description: 'Tratamiento para mejorar la textura de la piel' },
                { name: 'Peeling Químico', price: '€110', duration: '90 min', description: 'Renovación celular profunda' },
                { name: 'Mesoterapia', price: '€130', duration: '60 min', description: 'Tratamiento con vitaminas y minerales' }
            ]
        }
    ]

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Tratamientos
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos tratamientos de estética avanzada incluyendo Plasma Rico en Plaquetas,
                        Botox, Ácido Hialurónico y más para cuidar tu belleza y bienestar
                    </p>
                </motion.div>

                {/* Service Categories */}
                <div className="space-y-16">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.services.map((service, serviceIndex) => (
                                    <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                                                <div className="text-sm text-gray-500">{service.duration}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                                        {/* Popular Badge */}
                                        {service.name.includes('Premium') && (
                                            <div className="mt-3 inline-flex items-center px-2 py-1 bg-accent-100 text-accent-800 text-xs font-medium rounded-full">
                                                <Star className="w-3 h-3 mr-1" />
                                                Más Popular
                                            </div>
                                        )}

                                        {/* Advanced Treatment Badge */}
                                        {category.title === 'Tratamientos Avanzados' && (
                                            <div className="mt-3 inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                                                <Zap className="w-3 h-3 mr-1" />
                                                Tratamiento Avanzado
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        ¿Interesado en tratamientos avanzados?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nuestros especialistas te asesorarán sobre el tratamiento más adecuado para ti.
                        Consulta gratuita disponible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            Consulta Gratuita
                        </button>
                        <button className="btn-outline">
                            Ver Todos los Tratamientos
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
