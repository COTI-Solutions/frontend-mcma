'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { serviceCategories } from '@/config/services'

const Booking = () => {
    const [selectedService, setSelectedService] = useState('')

    // Transformar los servicios para incluir el campo 'price' que necesita Booking
    const bookingServiceCategories = serviceCategories.map(category => ({
        ...category,
        services: category.services.map(service => ({
            ...service,
            price: 'Consultar'
        }))
    }))

    const contactInfo = [
        { icon: Phone, text: '+54 11 3701 7756', href: 'https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.', isLink: true },
        { icon: Mail, text: 'esteticamcma@gmail.com', href: 'mailto:esteticamcma@gmail.com', isLink: true },
        { icon: MapPin, text: '11 de Septiembre 4896, Timbre 3F, Villa Ballester', href: '#', isLink: false },
        { icon: Clock, text: 'Lun-Vie: 9:00-18:00, Sáb: 9:00-12:00', href: '#', isLink: false }
    ]

    const handleServiceSelect = (serviceName: string) => {
        setSelectedService(serviceName)
        const message = encodeURIComponent(`Hola! Quisiera saber más sobre el tratamiento de ${serviceName}. ¿Cuándo podría agendar una cita?`)
        const whatsappUrl = `https://wa.me/5491137017756?text=${message}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <section id="booking" className="section-padding relative overflow-hidden bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/gallery/recepcion.webp"
                    alt="Recepción Estética MCMA"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]"></div>
            </div>

            {/* Content with relative positioning */}
            <div className="relative z-10">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Content */}
                        <motion.div
                            initial={false}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-6">
                                Agendá tu Cita por WhatsApp
                            </h2>

                            <p className="text-[15px] md:text-base text-text-main mb-8 leading-relaxed">
                                Seleccioná el tratamiento de tu interés y consultá directamente con nuestro equipo.
                                Te responderemos a la brevedad con la disponibilidad de turnos y asesoramiento personalizado.
                            </p>

                            {/* Benefits */}
                            <div className="mb-8">
                                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                                    ¿Por qué consultar por WhatsApp?
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.div
                                        initial={false}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                        <span className="text-[15px] text-text-main">Respuesta inmediata</span>
                                    </motion.div>
                                    <motion.div
                                        initial={false}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                        <span className="text-[15px] text-text-main">Consulta de disponibilidad</span>
                                    </motion.div>
                                    <motion.div
                                        initial={false}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                        <span className="text-[15px] text-text-main">Información personalizada</span>
                                    </motion.div>
                                    <motion.div
                                        initial={false}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                        <span className="text-[15px] text-text-main">Reserva directa</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-surface rounded-xl p-6 shadow-md border border-surface-soft">
                                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                                    Información de Contacto
                                </h3>
                                <div className="space-y-3">
                                    {contactInfo.map((info, index) => (
                                        info.isLink ? (
                                            <motion.a
                                                key={info.text}
                                                href={info.href}
                                                target={info.href.startsWith('https://wa.me') ? '_blank' : undefined}
                                                rel={info.href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                                                initial={false}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-center space-x-3 text-text-main hover:text-primary-500 transition-colors duration-200"
                                            >
                                                <info.icon className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                                <span className="text-[15px]">{info.text}</span>
                                            </motion.a>
                                        ) : (
                                            <motion.div
                                                key={info.text}
                                                initial={false}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-center space-x-3 text-text-main"
                                            >
                                                <info.icon className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                                <span className="text-[15px]">{info.text}</span>
                                            </motion.div>
                                        )
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-6 p-4 bg-surface rounded-lg border border-secondary-500/20">
                                <h4 className="font-semibold text-secondary-600 mb-1.5 flex items-center gap-1.5">
                                    <span>💡</span> Consejo Clínico
                                </h4>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Para una experiencia óptima, te recomendamos programar tu cita de valoración
                                    con al menos 24 horas de anticipación.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Selector */}
                        <motion.div
                            initial={false}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-surface rounded-2xl shadow-xl p-6 md:p-8 border border-surface-soft"
                        >
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <MessageCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-primary-500 mb-2">
                                    Seleccioná tu Tratamiento
                                </h3>
                                <p className="text-[15px] text-text-muted">
                                    Elegí el servicio que te interesa y consultá directamente por WhatsApp
                                </p>
                            </div>

                            {/* Service Categories */}
                            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                                {bookingServiceCategories.map((category, categoryIndex) => (
                                    <motion.div
                                        key={category.title}
                                        initial={false}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="border border-surface-soft rounded-xl p-4 bg-surface-soft/60"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                                                <category.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <h4 className="text-base font-semibold text-text-main">{category.title}</h4>
                                        </div>

                                        <div className="grid gap-2">
                                            {category.services.map((service, serviceIndex) => (
                                                <motion.button
                                                    key={service.name}
                                                    onClick={() => handleServiceSelect(service.name)}
                                                    initial={false}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                                                    viewport={{ once: true }}
                                                    className="text-left p-3 rounded-lg border border-surface-soft hover:border-primary-500/40 hover:bg-surface bg-surface transition-all duration-200 group shadow-sm"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-medium text-sm text-text-main group-hover:text-primary-500 transition-colors">
                                                                {service.name}
                                                            </h5>
                                                            <p className="text-xs text-text-muted mt-0.5">
                                                                {service.duration} • {service.price}
                                                            </p>
                                                        </div>
                                                        <MessageCircle className="w-4 h-4 text-secondary-500 group-hover:text-primary-500 transition-colors mt-0.5" />
                                                    </div>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Direct WhatsApp Button */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-text-muted mb-3">
                                    ¿No encontrás el tratamiento que buscás?
                                </p>
                                <a
                                    href="https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20otros%20tratamientos%20disponibles."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Consultar Otros Tratamientos</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking
