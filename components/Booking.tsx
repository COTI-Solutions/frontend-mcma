'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import { InlineWidget } from 'react-calendly'

const Booking = () => {
    const benefits = [
        'Reserva online 24/7',
        'Confirmación inmediata',
        'Recordatorios automáticos',
        'Cancelación gratuita hasta 24h antes',
        'Múltiples métodos de pago',
        'Historial de citas'
    ]

    const contactInfo = [
        { icon: Phone, text: '+34 123 456 789', href: 'tel:+34123456789' },
        { icon: Mail, text: 'info@esteticamcma.com', href: 'mailto:info@esteticamcma.com' },
        { icon: MapPin, text: 'Calle Principal 123, Madrid', href: '#' },
        { icon: Clock, text: 'Lun-Vie: 9:00-20:00, Sáb: 9:00-18:00', href: '#' }
    ]

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
                            Reserva tu
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                                Cita Online
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Reserva tu cita de forma rápida y sencilla. Elige el servicio que deseas,
                            selecciona la fecha y hora que mejor te convenga, y confirma tu reserva en segundos.
                        </p>

                        {/* Benefits */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Ventajas de reservar online:
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Información de Contacto
                            </h3>
                            <div className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.text}
                                        href={info.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <info.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                        <span>{info.text}</span>
                                    </motion.a>
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

                    {/* Calendly Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-2xl p-6"
                    >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Selecciona tu Cita
                            </h3>
                            <p className="text-gray-600">
                                Elige el servicio y horario que prefieras
                            </p>
                        </div>

                        {/* Calendly Inline Widget */}
                        <div className="calendly-inline-widget" data-url="https://calendly.com/your-calendly-url" style={{ minWidth: '320px', height: '700px' }}>
                            <InlineWidget
                                url="https://calendly.com/your-calendly-url"
                                styles={{
                                    height: '700px',
                                    width: '100%',
                                }}
                                pageSettings={{
                                    backgroundColor: 'ffffff',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: 'ec4899',
                                    textColor: '1f2937'
                                }}
                                prefill={{
                                    email: '',
                                    firstName: '',
                                    lastName: '',
                                    name: '',
                                }}
                            />
                        </div>

                        {/* Alternative Booking */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500 mb-3">
                                ¿Prefieres reservar por teléfono?
                            </p>
                            <a
                                href="tel:+34123456789"
                                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Llamar Ahora</span>
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
                            Resolvemos las dudas más comunes sobre nuestras reservas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                                ¿Qué necesito llevar?
                            </h4>
                            <p className="text-gray-600">
                                Solo necesitas venir con ropa cómoda. Nosotros te proporcionamos
                                todo el material necesario para tu tratamiento.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Cuánto dura la primera consulta?
                            </h4>
                            <p className="text-gray-600">
                                La primera consulta incluye una evaluación completa y suele durar
                                entre 30-45 minutos, dependiendo del servicio.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Aceptan seguros médicos?
                            </h4>
                            <p className="text-gray-600">
                                Trabajamos con varios seguros médicos. Contacta con nosotros
                                para verificar la cobertura de tu póliza.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Booking
