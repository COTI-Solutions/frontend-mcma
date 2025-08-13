'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    const contactInfo = [
        {
            icon: Phone,
            title: 'Teléfono',
            content: '+34 123 456 789',
            href: 'tel:+34123456789',
            description: 'Llámanos para consultas urgentes'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@esteticamcma.com',
            href: 'mailto:info@esteticamcma.com',
            description: 'Envíanos un mensaje'
        },
        {
            icon: MapPin,
            title: 'Dirección',
            content: 'Calle Principal 123, Madrid',
            href: '#',
            description: 'Visítanos en nuestro centro'
        },
        {
            icon: Clock,
            title: 'Horarios',
            content: 'Lun-Vie: 9:00-20:00\nSáb: 9:00-18:00',
            href: '#',
            description: 'Cerrado los domingos'
        }
    ]

    const services = [
        'Consulta General',
        'Tratamiento Facial',
        'Tratamiento Corporal',
        'Depilación',
        'Otros'
    ]

    return (
        <section id="contact" className="section-padding bg-white">
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
                        Ponte en
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Contacto
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Estamos aquí para ayudarte. Contáctanos para cualquier consulta,
                        reserva o información sobre nuestros servicios.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Envíanos un Mensaje
                            </h3>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                                >
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-green-800 font-medium">
                                            ¡Mensaje enviado con éxito! Te responderemos pronto.
                                        </span>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="+34 123 456 789"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Servicio de interés
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                                        placeholder="Cuéntanos en qué podemos ayudarte..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Enviar Mensaje</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600 mb-1 whitespace-pre-line">
                                            {info.content}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {info.description}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                                <p className="font-medium">Mapa de Ubicación</p>
                                <p className="text-sm">Integrar con Google Maps</p>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                ¿Necesitas ayuda urgente?
                            </h4>
                            <p className="text-gray-600 mb-4">
                                Para consultas urgentes o emergencias, puedes contactarnos directamente por teléfono.
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
            </div>
        </section>
    )
}

export default Contact
