'use client'

import { motion } from 'framer-motion'
import { Clock, Sparkles, Shield, Eye } from 'lucide-react'
import { serviceCategories } from '@/config/services'
import { getServiceImage, getServiceFallback } from '@/config/imageMapping'
import RibbonCard from '@/components/RibbonCard'

const getWhatsAppUrl = (serviceName: string) =>
    `https://wa.me/5491137017756?text=${encodeURIComponent(
        `Hola! Me gustaría obtener más información sobre ${serviceName}. ¿Podrían contarme más detalles y precios?`,
    )}`

const Services = () => {
    return (
        <section id="services" className="section-padding bg-background">
            <div className="container-custom">
                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                            Tratamientos
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos tratamientos de estética avanzada con tecnología de vanguardia:
                        Toxina Botulínica, Ácido Hialurónico, PRP y Mesoterapia para cuidar tu belleza y bienestar
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-12">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center">
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service, serviceIndex) => {
                                    const imageData = getServiceImage(service.name)
                                    const fallbackData = getServiceFallback(service.name)
                                    const FallbackIcon = fallbackData.icon

                                    return (
                                        <motion.div
                                            key={service.name}
                                            initial={false}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: serviceIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            className="group h-full"
                                        >
                                            <RibbonCard
                                                hoverable
                                                href={getWhatsAppUrl(service.name)}
                                                ribbonText={
                                                    service.popular
                                                        ? service.ribbonText ?? 'Más Popular'
                                                        : undefined
                                                }
                                                ribbonColor={service.ribbonColor ?? '#6A2226'}
                                                wrapperClassName="h-full"
                                                className="shadow-lg hover:shadow-2xl hover:shadow-secondary-200/50 transition-shadow duration-300"
                                                cover={
                                                    <div className="h-48 overflow-hidden">
                                                        {imageData?.src ? (
                                                            <img
                                                                src={imageData.src}
                                                                alt={imageData.alt}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div
                                                                className={`w-full h-full bg-gradient-to-br ${fallbackData.color} flex items-center justify-center`}
                                                            >
                                                                <div className="text-center">
                                                                    <FallbackIcon className="w-20 h-20 text-white mb-2" />
                                                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                                                        <category.icon className="w-8 h-8 text-white" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                            >
                                                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                                                    {service.name}
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                                    {service.description}
                                                </p>
                                                <div className="flex justify-between items-center pt-6 border-t-2 border-secondary-100 group-hover:border-secondary-300 transition-colors duration-300">
                                                    <div className="flex items-center bg-secondary-50 px-3 py-2 rounded-full group-hover:bg-secondary-100 transition-colors duration-300">
                                                        <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                                                        <span className="font-medium text-sm text-secondary-700">
                                                            {service.duration}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm text-white font-semibold bg-secondary-500 px-4 py-2 rounded-full group-hover:bg-secondary-600 transition-all duration-300">
                                                        Consultar →
                                                    </span>
                                                </div>
                                            </RibbonCard>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12"
                >
                    <div className="flex justify-center mb-6">
                        <div className="flex space-x-2">
                            <Sparkles className="w-8 h-8 text-primary-500" />
                            <Shield className="w-8 h-8 text-secondary-500" />
                            <Eye className="w-8 h-8 text-primary-500" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        ¿Interesado en cirugías plásticas?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nuestras cirujanas especialistas te van a asesorar sobre el tratamiento más adecuado para vos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita%20para%20conocer%20m%C3%A1s%20sobre%20los%20tratamientos."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Consulta Gratuita por WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
