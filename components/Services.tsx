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
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-6">
                        Nuestros Tratamientos
                    </h2>
                    <p className="text-[15px] md:text-base text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Ofrecemos tratamientos de estética avanzada con tecnología de vanguardia:
                        Toxina Botulínica, Ácido Hialurónico, PRP y Mesoterapia para cuidar tu belleza y bienestar.
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
                                    <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-md">
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-3">{category.title}</h3>
                                <p className="text-[15px] md:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">{category.description}</p>
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
                                                className="bg-surface shadow-md hover:shadow-xl transition-all duration-300 border border-surface-soft rounded-xl"
                                                cover={
                                                    <div className="h-48 overflow-hidden">
                                                        {imageData?.src ? (
                                                            <img
                                                                src={imageData.src}
                                                                alt={imageData.alt}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                                                <h4 className="text-xl font-heading font-bold text-text-main mb-3 group-hover:text-primary-500 transition-colors duration-300">
                                                    {service.name}
                                                </h4>
                                                <p className="text-text-main leading-relaxed text-[15px] mb-6">
                                                    {service.description}
                                                </p>
                                                <div className="flex justify-between items-center pt-5 border-t border-surface-soft">
                                                    <div className="badge-clinical">
                                                        <Clock className="w-3.5 h-3.5 mr-1.5 text-secondary-500" />
                                                        <span>{service.duration}</span>
                                                    </div>
                                                    <span className="btn-secondary text-xs px-3.5 py-1.5 !rounded-md">
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
                    className="mt-20 text-center bg-surface border border-surface-soft shadow-lg rounded-2xl p-8 md:p-12"
                >
                    <div className="flex justify-center mb-6">
                        <div className="flex space-x-3">
                            <Sparkles className="w-7 h-7 text-primary-500" />
                            <Shield className="w-7 h-7 text-secondary-500" />
                            <Eye className="w-7 h-7 text-primary-500" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-4">
                        ¿Interesado en cirugías plásticas?
                    </h3>
                    <p className="text-[15px] md:text-base text-text-main mb-8 max-w-2xl mx-auto leading-relaxed">
                        Nuestras cirujanas especialistas te van a asesorar sobre el procedimiento quirúrgico más adecuado para vos.
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
