'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const maxScroll = 100
            const progress = Math.min(scrollY / maxScroll, 1)

            setScrollProgress(progress)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const sectionId = window.location.hash.substring(1)
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    const offsetTop = (element as HTMLElement).offsetTop - 100
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                }
            }, 100)
        }
    }, [pathname])

    const navItems = [
        { name: 'Inicio', href: '/#hero' },
        { name: 'Nosotros', href: '/#about' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Reservas', href: '/#booking' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Contacto', href: '/contact' },
    ]

    const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (!href.startsWith('/#')) {
            setIsOpen(false)
            return
        }

        if (pathname === '/') {
            event.preventDefault()
            const sectionId = href.substring(2)
            const element = document.getElementById(sectionId)
            if (element) {
                const offsetTop = (element as HTMLElement).offsetTop - 100
                window.scrollTo({ top: offsetTop, behavior: 'smooth' })
            }
        }

        setIsOpen(false)
    }

    const isScrolled = scrollProgress > 0.1 || pathname !== '/'

    return (
        <nav
            className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out transform-gpu"
            data-scrolled={isScrolled}
            style={{
                backgroundColor: isScrolled
                    ? `rgba(255, 255, 255, ${pathname === '/' ? 0.2 + scrollProgress * 0.78 : 0.98})`
                    : 'transparent',
                backdropFilter: isScrolled ? `blur(${6 + scrollProgress * 6}px)` : 'none',
                boxShadow: isScrolled
                    ? '0 4px 20px -2px rgba(43, 24, 16, 0.08), 0 2px 6px -1px rgba(43, 24, 16, 0.04)'
                    : 'none',
            }}
        >
            <div className="w-full px-4 md:px-0 md:container-custom md:mx-auto">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <a href="/" aria-label="Ir al inicio - Estética MCMA">
                            <img
                                src="/images/logo/LogoDRAMacarenaCovian.png"
                                alt="Dra. Macarena Covián - Cirugía Plástica y Medicina Estética"
                                className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 ease-out ${
                                    !isScrolled ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' : ''
                                }`}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(event) => handleNavClick(event, item.href)}
                                className={`group font-medium transition-all duration-300 ease-out text-sm lg:text-base relative ${
                                    isScrolled
                                        ? 'text-text-main hover:text-secondary-500'
                                        : 'text-white hover:text-secondary-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
                                }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                                    isScrolled ? 'bg-secondary-500' : 'bg-secondary-300'
                                }`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <a
                            href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2 text-xs xl:text-sm transition-colors duration-200 ${
                                isScrolled
                                    ? 'text-text-muted hover:text-secondary-500'
                                    : 'text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                            }`}
                        >
                            <Phone className={`w-3.5 h-3.5 transition-colors duration-200 ${
                                isScrolled ? 'text-secondary-500' : 'text-secondary-300'
                            }`} />
                            <span className="hidden xl:inline">+54 11 3701 7756</span>
                            <span className="xl:hidden">+54 11 3701 7756</span>
                        </a>
                        <div className={`flex items-center space-x-2 text-xs xl:text-sm transition-colors duration-200 ${
                            isScrolled
                                ? 'text-text-muted'
                                : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                        }`}>
                            <MapPin className={`w-3.5 h-3.5 transition-colors duration-200 ${
                                isScrolled ? 'text-secondary-500' : 'text-secondary-300'
                            }`} />
                            <span className="hidden xl:inline">Buenos Aires, Argentina</span>
                            <span className="xl:hidden">BA, Argentina</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                            isScrolled
                                ? 'hover:bg-surface-soft bg-surface/40 text-text-main'
                                : 'hover:bg-white/20 bg-black/20 text-white backdrop-blur-sm'
                        }`}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
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
                                className="md:hidden fixed inset-0 bg-text-main/20 backdrop-blur-sm z-40"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="md:hidden bg-surface/98 backdrop-blur-md border-t border-surface-soft shadow-xl relative z-50 rounded-b-xl"
                            >
                                <div className="py-6 px-4 space-y-1">
                                    {/* Navigation Items */}
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(event) => handleNavClick(event, item.href)}
                                            className="block w-full text-left px-4 py-3 text-text-main hover:text-secondary-600 hover:bg-surface-soft rounded-lg transition-all duration-200 font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    ))}

                                    {/* Contact Section */}
                                    <div className="pt-4 mt-4 border-t border-surface-soft space-y-3">
                                        <h4 className="px-4 text-xs font-semibold text-secondary-600 uppercase tracking-wider mb-2">
                                            Contacto Rápido
                                        </h4>

                                        {/* WhatsApp Button */}
                                        <a
                                            href="https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20de%20est%C3%A9tica."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 px-4 py-3 bg-secondary-500/10 hover:bg-secondary-500/20 text-secondary-700 rounded-lg transition-all duration-200 group border border-secondary-500/30"
                                        >
                                            <Phone className="w-5 h-5 text-secondary-600 group-hover:scale-110 transition-transform duration-200" />
                                            <div className="flex-1 text-left">
                                                <span className="font-semibold text-sm">WhatsApp Directo</span>
                                                <p className="text-xs text-text-muted">+54 11 3701 7756</p>
                                            </div>
                                        </a>

                                        {/* Location Info */}
                                        <div className="flex items-start space-x-3 px-4 py-3 bg-surface-soft rounded-lg">
                                            <MapPin className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1">
                                                <span className="font-semibold text-sm text-text-main">Ubicación</span>
                                                <p className="text-xs text-text-muted">Villa Ballester, Buenos Aires</p>
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
