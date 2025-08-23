'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, ArrowUp, Heart, Sparkles, Syringe, Droplets } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Footer = () => {
    const pathname = usePathname()
    const router = useRouter()

    const scrollToSection = (sectionId: string) => {
        if (sectionId.startsWith('#')) {
            // Enlace interno
            if (pathname === '/contact') {
                // Si estamos en la página de contacto, ir a la página principal con hash
                router.push('/' + sectionId)
            } else {
                // Si estamos en la página principal, hacer scroll con offset
                const element = document.getElementById(sectionId.substring(1))
                if (element) {
                    const offsetTop = (element as HTMLElement).offsetTop - 100
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                }
            }
        } else {
            // Enlace a página - navegar
            router.push(sectionId)
        }
    }

    // Efecto para hacer scroll a la sección cuando se carga la página principal con hash
    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const sectionId = window.location.hash.substring(1)
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    const offsetTop = (element as HTMLElement).offsetTop - 100
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                }
            }, 100) // Pequeño delay para asegurar que la página esté cargada
        }
    }, [pathname])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const footerLinks = {
        servicios: [
            { name: 'Tratamientos Regenerativos', href: '#services', action: () => scrollToSection('#services') },
            { name: 'Tratamientos Corporales', href: '#services', action: () => scrollToSection('#services') },
            { name: 'Mesoterapias', href: '#services', action: () => scrollToSection('#services') },
            { name: 'Toxina Botulínica', href: '#services', action: () => scrollToSection('#services') },
            { name: 'Ácido Hialurónico', href: '#services', action: () => scrollToSection('#services') },
            { name: 'Cirugías Estéticas', href: '#services', action: () => scrollToSection('#services') }
        ],
        empresa: [
            { name: 'Sobre Nosotros', href: '#about', action: () => scrollToSection('#about') },
            { name: 'Nuestros Valores', href: '#about', action: () => scrollToSection('#about') }
        ],
        contacto: [
            { name: 'Reservar Cita', href: '#booking', action: () => scrollToSection('#booking') },
            { name: 'Ubicación', href: 'contact', action: () => scrollToSection('contact') },
            { name: 'Horarios', href: 'contact', action: () => scrollToSection('contact') },
            { name: 'WhatsApp Directo', href: 'https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.', action: () => window.open('https://wa.me/5491137017756?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos.', '_blank') }
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
            text: 'esteticamcma@gmail.com',
            href: 'mailto:esteticamcma@gmail.com',
            isLink: true
        },
        {
            icon: MapPin,
            text: '11 de Septiembre 4896, Timbre 3F, Villa Ballester, Buenos Aires',
            href: 'https://maps.google.com/?q=11+de+Septiembre+4896,+Villa+Ballester,+Buenos+Aires',
            isLink: true
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
            <div className="container-custom py-8 md:py-16 px-4 md:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/images/logo/logo.png"
                                alt="Estética MCMA Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-2xl font-bold">Estética MCMA</span>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                            Centro de estética profesional con más de 5 años de experiencia en Villa Ballester.
                            Especialistas en tratamientos faciales, corporales y medicina estética.
                            Tecnología de vanguardia y resultados garantizados.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 md:space-y-3 mb-6">
                            {contactInfo.map((info, index) => (
                                info.isLink ? (
                                    <motion.a
                                        key={info.text}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                                    >
                                        <info.icon className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">{info.text}</span>
                                    </motion.a>
                                ) : (
                                    <motion.div
                                        key={info.text}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3 text-gray-300"
                                    >
                                        <info.icon className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">{info.text}</span>
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
                                {category === 'servicios' ? 'Servicios' :
                                    category === 'empresa' ? 'Empresa' :
                                        category === 'contacto' ? 'Contacto' : 'Legal'}
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
                                        <button
                                            onClick={link.action}
                                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm text-left w-full bg-transparent border-none cursor-pointer"
                                        >
                                            {link.name}
                                        </button>
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
                className="border-t border-gray-800 py-8 md:py-12"
            >
                <div className="container-custom">
                    <div className="text-center px-4 md:px-0">
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="flex space-x-2">
                                <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-secondary-500" />
                                <Syringe className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                                <Droplets className="w-5 h-5 md:w-6 md:h-6 text-secondary-500" />
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                            ¿Lista para transformar tu belleza?
                        </h3>
                        <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Agenda tu consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de belleza con tratamientos personalizados
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('#booking')}
                                className="inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Agendar Consulta</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 py-4 md:py-6">
                <div className="container-custom px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <div className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
                            © {currentYear} Estética MCMA. Todos los derechos reservados.
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs md:text-sm text-gray-400">
                            <button
                                onClick={() => window.location.href = '/privacy'}
                                className="hover:text-primary-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Política de Privacidad
                            </button>
                            <button
                                onClick={() => window.location.href = '/terms'}
                                className="hover:text-primary-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Términos de Uso
                            </button>
                            <button
                                onClick={() => window.location.href = '/cookies'}
                                className="hover:text-primary-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Cookies
                            </button>
                        </div>
                    </div>

                    {/* Developer Credit */}
                    <div className="flex flex-col items-center justify-center mt-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-2 text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
                            <span className="transition-colors duration-200">Desarrollado por</span>
                            <a
                                href="https://cotisolutions.com.ar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-200"
                            >
                                <img
                                    src="/images/logo/Coti_Solutions.webp"
                                    alt="Coti Solutions Logo"
                                    className="h-6 w-auto transition-all duration-200"
                                />
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
                className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-40 group"
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
        </footer>
    )
}

export default Footer
