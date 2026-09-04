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
        <footer className="bg-primary-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-10 md:py-16 px-4 md:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                    {/* Company Info */}
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/images/logo/LogoDRAMacarenaCovian.png"
                                alt="Dra. Macarena Covián - Cirugía Plástica y Medicina Estética"
                                className="h-14 w-auto object-contain bg-white/90 p-1.5 rounded-lg"
                            />
                        </div>

                        <p className="text-surface-soft/90 mb-6 leading-relaxed text-[15px]">
                            Centro de medicina estética y cirugía plástica con más de 5 años de experiencia en Villa Ballester.
                            Especialistas en tratamientos faciales, corporales y procedimientos quirúrgicos de excelencia.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.map((info, index) => (
                                info.isLink ? (
                                    <motion.a
                                        key={info.text}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={false}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3 text-surface-soft/80 hover:text-secondary-300 transition-colors duration-200"
                                    >
                                        <info.icon className="w-4 h-4 text-secondary-400 flex-shrink-0 mt-1" />
                                        <span className="text-[15px] leading-relaxed">{info.text}</span>
                                    </motion.a>
                                ) : (
                                    <motion.div
                                        key={info.text}
                                        initial={false}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3 text-surface-soft/80"
                                    >
                                        <info.icon className="w-4 h-4 text-secondary-400 flex-shrink-0 mt-1" />
                                        <span className="text-[15px] leading-relaxed">{info.text}</span>
                                    </motion.div>
                                )
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={false}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 bg-primary-800 hover:bg-secondary-500 rounded-lg flex items-center justify-center transition-colors duration-200 group border border-primary-700"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-surface-soft group-hover:text-white transition-colors duration-200" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-heading text-lg font-bold mb-4 capitalize text-background">
                                {category === 'servicios' ? 'Servicios' :
                                    category === 'empresa' ? 'Institucional' :
                                        category === 'contacto' ? 'Contacto' : 'Legal'}
                            </h3>
                            <ul className="space-y-2.5">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={false}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={link.action}
                                            className="text-surface-soft/80 hover:text-secondary-300 transition-colors duration-200 text-[15px] text-left w-full bg-transparent border-none cursor-pointer"
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

            {/* CTA Section - Banner Full Borgoña de Alto Impacto */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t border-primary-800 bg-primary-950/40 py-10 md:py-14"
            >
                <div className="container-custom">
                    <div className="text-center px-4 md:px-0">
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="flex space-x-3">
                                <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-400" />
                                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-secondary-400" />
                                <Syringe className="w-5 h-5 md:w-6 md:h-6 text-primary-400" />
                                <Droplets className="w-5 h-5 md:w-6 md:h-6 text-secondary-400" />
                            </div>
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-background">
                            ¿Lista para tu consulta de valoración?
                        </h3>
                        <p className="text-surface-soft/90 mb-8 max-w-2xl mx-auto text-[15px] leading-relaxed">
                            Agendá tu evaluación personalizada con nuestras profesionales médicas y planificá tu tratamiento en un entorno seguro.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('#booking')}
                                className="btn-primary text-base px-8 py-3.5 shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Agendar consulta de valoración</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Footer */}
            <div className="border-t border-primary-800/80 py-6">
                <div className="container-custom px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                        <div className="text-surface-soft/70 text-xs md:text-sm">
                            © {currentYear} Estética MCMA. Todos los derechos reservados.
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs md:text-sm text-surface-soft/70">
                            <button
                                onClick={() => window.location.href = '/privacy'}
                                className="hover:text-secondary-300 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Política de Privacidad
                            </button>
                            <button
                                onClick={() => window.location.href = '/terms'}
                                className="hover:text-secondary-300 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Términos de Uso
                            </button>
                            <button
                                onClick={() => window.location.href = '/cookies'}
                                className="hover:text-secondary-300 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Cookies
                            </button>
                        </div>
                    </div>

                    {/* Developer Credit */}
                    <div className="flex flex-col items-center justify-center mt-4 pt-4 border-t border-primary-800/40">
                        <div className="flex items-center space-x-2 text-surface-soft/70 text-xs md:text-sm">
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
                                    className="h-6 w-auto transition-all duration-200 opacity-90 hover:opacity-100"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-11 h-11 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-40 group"
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
        </footer>
    )
}

export default Footer
