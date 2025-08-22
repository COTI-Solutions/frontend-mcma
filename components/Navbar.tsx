'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const maxScroll = 100 // Máximo scroll para considerar "completamente scrolled"
            const progress = Math.min(scrollY / maxScroll, 1)

            setScrollProgress(progress)
            setScrolled(scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        setIsOpen(false)
    }

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Reservas', href: '#booking' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contacto', href: '/contact' },
    ]

    return (
        <nav
            className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out transform-gpu"
            data-scrolled={scrollProgress > 0.1}
            style={{
                backgroundColor: scrollProgress > 0.1 ? `rgba(255, 255, 255, ${0.05 + scrollProgress * 0.9})` : 'transparent',
                backdropFilter: scrollProgress > 0.1 ? `blur(${4 + scrollProgress * 8}px)` : 'none',
                boxShadow: scrollProgress > 0.1 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
            }}
        >
            <div className="w-full px-4 md:px-0 md:container-custom md:mx-auto">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center space-x-2 md:space-x-3"
                    >
                        <img
                            src="images/logo/logo.png"
                            alt="Estética MCMA Logo"
                            className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 ease-out"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 ease-out text-sm lg:text-base relative"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <a
                            href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-xs xl:text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                            <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
                            <span className="hidden xl:inline">+54 11 3701 7756</span>
                            <span className="xl:hidden">+54 11 3701 7756</span>
                        </a>
                        <div className="flex items-center space-x-2 text-xs xl:text-sm text-gray-600">
                            <MapPin className="w-3 h-3 xl:w-4 xl:h-4" />
                            <span className="hidden xl:inline">Buenos Aires, Argentina</span>
                            <span className="xl:hidden">BA, Argentina</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 bg-white/20 backdrop-blur-sm"
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-white" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg relative z-50"
                            >
                                <div className="py-6 px-4 space-y-1">
                                    {/* Navigation Items */}
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.href)}
                                            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}

                                    {/* Contact Section */}
                                    <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                                        <h4 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                            Contacto Rápido
                                        </h4>

                                        {/* WhatsApp Button */}
                                        <a
                                            href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 px-4 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-all duration-200 group"
                                        >
                                            <Phone className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                                            <div className="flex-1 text-left">
                                                <span className="font-medium">WhatsApp Directo</span>
                                                <p className="text-sm text-green-600">+54 11 3701 7756</p>
                                            </div>
                                        </a>

                                        {/* Location Info */}
                                        <div className="flex items-start space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
                                            <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1">
                                                <span className="font-medium text-gray-700">Ubicación</span>
                                                <p className="text-sm text-gray-600">Villa Ballester, Buenos Aires</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
