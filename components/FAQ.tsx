'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FAQ = () => {
    const faqItems = [
        {
            question: '¿Cuánto tiempo dura la consulta?',
            answer: 'La primera consulta incluye una evaluación completa y suele durar entre 30-45 minutos, dependiendo del servicio.'
        },
        {
            question: '¿Qué necesito llevar?',
            answer: 'Solo necesitas venir con ropa cómoda. Nosotros te proporcionamos todo el material necesario para tu tratamiento.'
        },
        {
            question: '¿Puedo cancelar mi cita?',
            answer: 'Sí, podes cancelar tu cita hasta 24 horas antes sin ningún cargo. Después de ese tiempo, se aplicará una tarifa de cancelación.'
        },
        {
            question: '¿Aceptan seguros médicos?',
            answer: 'No trabajamos con seguros médicos. Todos nuestros tratamientos son de pago particular.'
        }
    ]

    return (
        <section id="faq" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
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
                        Preguntas
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Frecuentes
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Resolvemos las dudas más comunes sobre nuestros tratamientos y servicios
                    </p>
                </motion.div>

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                {item.question}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Contacto adicional separado */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            ¿No encontraste tu respuesta?
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Si tenés alguna otra pregunta o necesitas más información,
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
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
