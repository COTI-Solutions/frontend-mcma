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
        { icon: Mail, text: 'info@esteticamcma.com', href: 'mailto:info@esteticamcma.com', isLink: true },
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
        <section id="booking" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Agenda tu
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                                Cita por WhatsApp
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Selecciona el tratamiento que te interesa y consulta directamente por WhatsApp.
                            Te responderemos rápidamente con la disponibilidad y toda la información que necesites.
                        </p>

                        {/* Benefits */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                ¿Por qué consultar por WhatsApp?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span className="text-gray-700">Respuesta inmediata</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span className="text-gray-700">Consulta de disponibilidad</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span className="text-gray-700">Información personalizada</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span className="text-gray-700">Reserva directa</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                        >
                                            <info.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                            <span>{info.text}</span>
                                        </motion.a>
                                    ) : (
                                        <motion.div
                                            key={info.text}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3 text-gray-600"
                                        >
                                            <info.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                            <span>{info.text}</span>
                                        </motion.div>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                            <h4 className="font-semibold text-accent-800 mb-2">
                                💡 Consejo
                            </h4>
                            <p className="text-accent-700 text-sm">
                                Para obtener los mejores resultados, te recomendamos programar tu cita
                                con al menos 24 horas de anticipación. Esto nos permite preparar
                                todo para tu tratamiento.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service Selector */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-2xl p-6"
                    >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Selecciona tu Tratamiento
                            </h3>
                            <p className="text-gray-600">
                                Elige el servicio que te interesa y consulta por WhatsApp
                            </p>
                        </div>

                        {/* Service Categories */}
                        <div className="space-y-6 max-h-96 overflow-y-auto">
                            {bookingServiceCategories.map((category, categoryIndex) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border border-gray-200 rounded-xl p-4"
                                >
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                                            <category.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                                    </div>

                                    <div className="grid gap-2">
                                        {category.services.map((service, serviceIndex) => (
                                            <motion.button
                                                key={service.name}
                                                onClick={() => handleServiceSelect(service.name)}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                                                viewport={{ once: true }}
                                                className="text-left p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                                                            {service.name}
                                                        </h5>
                                                        <p className="text-sm text-gray-500">
                                                            {service.duration} • {service.price}
                                                        </p>
                                                    </div>
                                                    <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Direct WhatsApp Button */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500 mb-3">
                                ¿No encuentras el tratamiento que buscas?
                            </p>
                            <a
                                href="https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20otros%20tratamientos%20disponibles."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Consultar Otros Tratamientos</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Preguntas Frecuentes
                        </h3>
                        <p className="text-lg text-gray-600">
                            Resolvemos las dudas más comunes sobre nuestros tratamientos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Cuánto tiempo dura la consulta?
                            </h4>
                            <p className="text-gray-600">
                                La primera consulta incluye una evaluación completa y suele durar
                                entre 30-45 minutos, dependiendo del servicio.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Qué necesito llevar?
                            </h4>
                            <p className="text-gray-600">
                                Solo necesitas venir con ropa cómoda. Nosotros te proporcionamos
                                todo el material necesario para tu tratamiento.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Puedo cancelar mi cita?
                            </h4>
                            <p className="text-gray-600">
                                Sí, puedes cancelar tu cita hasta 24 horas antes sin ningún cargo.
                                Después de ese tiempo, se aplicará una tarifa de cancelación.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Aceptan seguros médicos?
                            </h4>
                            <p className="text-gray-600">
                                No trabajamos con seguros médicos. Todos nuestros tratamientos
                                son de pago particular.
                            </p>
                        </div>
                    </div>

                    {/* Contacto adicional separado */}
                    <div className="mt-12 text-center">
                        <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                ¿No encontraste tu respuesta?
                            </h4>
                            <p className="text-gray-600 mb-6">
                                Si tenes alguna otra pregunta o necesitas más información,
                                no dudes en contactarnos directamente.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Escribinos</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Booking
