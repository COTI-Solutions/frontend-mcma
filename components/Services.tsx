'use client'

import { motion } from 'framer-motion'
import { Star, Clock, MessageCircle, Sparkles, Shield, Eye } from 'lucide-react'
import { serviceCategories } from '@/config/services'

const Services = () => {

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
                        Ofrecemos tratamientos de estética avanzada con tecnología de vanguardia:
                        Toxina Botulínica, Ácido Hialurónico, PRP y Mesoterapia para cuidar tu belleza y bienestar
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
                            <div className="text-center mb-12">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service, serviceIndex) => (
                                    <motion.a
                                        key={service.name}
                                        href={`https://wa.me/5491137017756?text=${encodeURIComponent(`Hola! Me gustaría obtener más información sobre ${service.name}. ¿Podrían contarme más detalles y precios?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-500 hover:transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden cursor-pointer block hover:border-primary-200"
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-secondary-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Popular Badge */}
                                        {service.popular && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                    <Star className="w-4 h-4 mr-2" />
                                                    Más Popular
                                                </div>
                                            </div>
                                        )}

                                        {/* Service Icon */}
                                        <div className="relative z-10 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <category.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">{service.name}</h4>
                                            <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="relative z-10 flex justify-between items-center pt-6 border-t-2 border-gray-100 group-hover:border-primary-200 transition-colors duration-300">
                                            <div className="text-sm text-gray-500">
                                                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full group-hover:bg-primary-100 transition-colors duration-300">
                                                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                                                    <span className="font-medium">{service.duration}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-primary-600 font-semibold bg-primary-50 px-4 py-2 rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-all duration-300">
                                                    Consultar →
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </motion.a>
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
                    <div className="flex justify-center mb-6">
                        <div className="flex space-x-2">
                            <Sparkles className="w-8 h-8 text-primary-500" />
                            <Shield className="w-8 h-8 text-secondary-500" />
                            <Eye className="w-8 h-8 text-primary-500" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        ¿Interesada en cirugías plásticas?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nuestras cirujanas especialistas te asesorarán sobre el tratamiento más adecuado para ti.
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
