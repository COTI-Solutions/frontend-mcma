'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const footerLinks = {
        servicios: [
            'Tratamientos Faciales',
            'Tratamientos Corporales',
            'Depilación Láser',
            'Masajes Terapéuticos',
            'Tratamientos Anti-aging'
        ],
        empresa: [
            'Sobre Nosotros',
            'Nuestro Equipo',
            'Instalaciones',
            'Certificaciones',
            'Trabaja con Nosotros'
        ],
        recursos: [
            'Blog de Belleza',
            'Consejos de Cuidado',
            'Preguntas Frecuentes',
            'Política de Privacidad',
            'Términos y Condiciones'
        ],
        contacto: [
            'Reservar Cita',
            'Consulta Gratuita',
            'Ubicación',
            'Horarios',
            'Contacto de Emergencia'
        ]
    }

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'Youtube' }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="text-2xl font-bold">Estética MCMA</span>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Somos un centro de estética comprometido con tu belleza y bienestar.
                            Ofrecemos tratamientos profesionales con tecnología de vanguardia y
                            un equipo experto para cuidar de ti.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone className="w-4 h-4 text-primary-400" />
                                <span>+34 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="w-4 h-4 text-primary-400" />
                                <span>info@esteticamcma.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="w-4 h-4 text-primary-400" />
                                <span>Calle Principal 123, Madrid</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Clock className="w-4 h-4 text-primary-400" />
                                <span>Lun-Vie: 9:00-20:00, Sáb: 9:00-18:00</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-4 capitalize">
                                {category}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                                        >
                                            {link}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t border-gray-800 py-8"
            >
                <div className="container-custom">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">
                            Suscríbete a nuestro Newsletter
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Recibe consejos de belleza, ofertas especiales y novedades sobre nuestros tratamientos
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 py-6">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Estética MCMA. Todos los derechos reservados.
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                                Política de Privacidad
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                                Términos de Uso
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-40 group"
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
        </footer>
    )
}

export default Footer
