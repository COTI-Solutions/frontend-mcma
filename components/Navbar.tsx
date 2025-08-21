'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Reservas', href: '#booking' },
        { name: 'Contacto', href: '/contact' },
    ]

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            // Enlace interno
            if (pathname === '/contact') {
                // Si estamos en la página de contacto, ir a la página principal con hash
                window.location.href = `/${href}`
            } else {
                // Si estamos en la página principal, hacer scroll
                const element = document.querySelector(href)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }
        } else {
            // Enlace a página - navegar
            window.location.href = href
        }
        setIsOpen(false)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3"
                    >
                        <img
                            src="images/logo/logo.png"
                            alt="Estética MCMA Logo"
                            className="w-16 h-16"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-white-600 hover:text-primary-300 transition-colors duration-200"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+54 11 3701 7756</span>
                        </a>
                        <div className="flex items-center space-x-2 text-sm text-white-600">
                            <MapPin className="w-4 h-4" />
                            <span>Buenos Aires, Argentina</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-200"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="px-4 py-2 border-t border-gray-200">
                                    <a
                                        href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-sm text-gray-600 mb-2 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>+54 11 3701 7756</span>
                                    </a>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span>Buenos Aires, Argentina</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
