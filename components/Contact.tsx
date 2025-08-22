'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import ContactBanner from '@/components/ContactBanner'

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
            content: '+54 11 3701 7756',
            href: 'https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20consultar%20sobre%20tratamientos.',
            description: 'Consulta directa por WhatsApp',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'esteticamcma@gmail.com',
            href: 'mailto:esteticamcma@gmail.com',
            description: 'Envíanos un mensaje detallado',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: MapPin,
            title: 'Dirección',
            content: '11 de Septiembre 4896, Timbre 3F, Villa Ballester',
            href: '#',
            description: 'Visítanos en nuestro centro',
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: Clock,
            title: 'Horarios',
            content: 'Lun-Vie: 9:00-18:00\nSáb: 9:00-12:00',
            href: '#',
            description: 'Cerrado los domingos',
            color: 'from-orange-500 to-red-600'
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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Banner Promocional */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <ContactBanner />
                </motion.div>



                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30"></div>
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                        Envíanos un Mensaje
                                    </h3>
                                    <p className="text-gray-600">
                                        Estamos aquí para ayudarte con cualquier consulta
                                    </p>
                                </div>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl"
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
                                        <div className="group">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                                                placeholder="+54 11 1234 5678"
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                                                Servicio de interés
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:bg-white"
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

                                    <div className="group">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:bg-white resize-none"
                                            placeholder="Contanos en qué podemos ayudarte..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
                                    >
                                        <Send className="w-6 h-6" />
                                        <span>Enviar Mensaje</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 order-1 lg:order-2"
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
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                        <div className="flex items-start space-x-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                                                <info.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-700 mb-2 whitespace-pre-line font-medium">
                                                    {info.content}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {info.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <div className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600">
                                <h4 className="text-white font-semibold text-lg text-center">
                                    📍 Nuestra Ubicación
                                </h4>
                            </div>
                            <div className="h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.891619805164!2d-58.562677699999995!3d-34.5562994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb935aa7fe31f%3A0x7acb9feb0040a07d!2sEst%C3%A9tica%20MCMA!5e0!3m2!1ses-419!2sar!4v1755527060826!5m2!1ses-419!2sar"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Estética MCMA"
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative elements */}
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4">
                                    ¿Necesitas ayuda inmediata?
                                </h4>
                                <p className="text-primary-100 mb-6 text-lg">
                                    Para consultas urgentes, contactanos directamente por WhatsApp
                                </p>
                                <a
                                    href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Escribinos</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
