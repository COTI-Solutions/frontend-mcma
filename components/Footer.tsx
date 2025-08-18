'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, ArrowUp, Heart, Sparkles, Syringe, Droplets } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const footerLinks = {
        servicios: [
            { name: 'Tratamientos Faciales', href: '#services' },
            { name: 'Tratamientos Corporales', href: '#services' },
            { name: 'Depilación Láser', href: '#services' },
            { name: 'Tratamientos Avanzados', href: '#services' },
            { name: 'Masajes Terapéuticos', href: '#services' }
        ],
        empresa: [
            { name: 'Sobre Nosotros', href: '#about' },
            { name: 'Nuestro Equipo', href: '#about' },
            { name: 'Instalaciones', href: '#about' },
            { name: 'Certificaciones', href: '#about' },
            { name: 'Valores', href: '#about' }
        ],
        contacto: [
            { name: 'Reservar Cita', href: '#booking' },
            { name: 'Consulta Gratuita', href: '#booking' },
            { name: 'Ubicación', href: '#contact' },
            { name: 'Horarios', href: '#contact' },
            { name: 'WhatsApp', href: 'https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.' }
        ],
        legal: [
            { name: 'Política de Privacidad', href: '#' },
            { name: 'Términos y Condiciones', href: '#' },
            { name: 'Política de Cookies', href: '#' },
            { name: 'Aviso Legal', href: '#' },
            { name: 'RGPD', href: '#' }
        ]
    }

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/estetica.mcma', label: 'Instagram' },
        { icon: Facebook, href: 'https://facebook.com/esteticamcma', label: 'Facebook' },
        { icon: MessageCircle, href: 'https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.', label: 'WhatsApp' }
    ]

    const contactInfo = [
        {
            icon: Phone,
            text: '+54 11 3701 7756',
            href: 'https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.',
            isLink: true
        },
        {
            icon: Mail,
            text: 'info@esteticamcma.com',
            href: 'mailto:info@esteticamcma.com',
            isLink: true
        },
        {
            icon: MapPin,
            text: '11 de Septiembre 4896, Timbre 3F, Villa Ballester',
            href: '#',
            isLink: false
        },
        {
            icon: Clock,
            text: 'Lun-Vie: 9:00-18:00, Sáb: 9:00-12:00',
            href: '#',
            isLink: false
        }
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
                            <img
                                src="/images/logo/logo.png"
                                alt="Estética MCMA Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-2xl font-bold">Estética MCMA</span>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Somos un centro de estética comprometido con tu belleza y bienestar.
                            Ofrecemos tratamientos profesionales con tecnología de vanguardia y
                            un equipo experto para cuidar de ti.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
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
                                        className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                                    >
                                        <info.icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                        <span>{info.text}</span>
                                    </motion.a>
                                ) : (
                                    <motion.div
                                        key={info.text}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 text-gray-300"
                                    >
                                        <info.icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                        <span>{info.text}</span>
                                    </motion.div>
                                )
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t border-gray-800 py-12"
            >
                <div className="container-custom">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="flex space-x-2">
                                <Heart className="w-6 h-6 text-primary-500" />
                                <Sparkles className="w-6 h-6 text-secondary-500" />
                                <Syringe className="w-6 h-6 text-primary-500" />
                                <Droplets className="w-6 h-6 text-secondary-500" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                            ¿Lista para transformar tu belleza?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Agenda tu consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de belleza
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#booking"
                                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Agendar Consulta</span>
                            </a>
                            <a
                                href="https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp Directo</span>
                            </a>
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
