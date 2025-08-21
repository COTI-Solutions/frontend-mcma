'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Star, Clock, Users } from 'lucide-react'

const Hero = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-none">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                <img
                    src="images/hero/estetica-mcma-1058556.webp"
                    alt="Tratamientos de Estética Avanzada - Plasma, Botox y Ácido Hialurónico"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Belleza y</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Bienestar
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
                    >
                        Tratamientos avanzados de estética: Plasma Rico en Plaquetas, Botox y Ácido Hialurónico.
                        <br className="hidden md:block" />
                        Reserva tu cita y transforma tu apariencia con tecnología de vanguardia.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <button
                            onClick={() => scrollToSection('#booking')}
                            className="btn-primary text-lg px-8 py-4"
                        >
                            Reservar Cita
                        </button>
                        <button
                            onClick={() => scrollToSection('#services')}
                            className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
                        >
                            Ver Tratamientos
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20 md:mb-16"
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                                <Star className="w-6 h-6 text-accent-400 mr-2" />
                                <span className="text-3xl font-bold">4.9</span>
                            </div>
                            <p className="text-gray-300">Valoración Media</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                                <Users className="w-6 h-6 text-primary-400 mr-2" />
                                <span className="text-3xl font-bold">500+</span>
                            </div>
                            <p className="text-gray-300">Pacientes Satisfechos</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                                <Clock className="w-6 h-6 text-secondary-400 mr-2" />
                                <span className="text-3xl font-bold">5</span>
                            </div>
                            <p className="text-gray-300">Años de Experiencia</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <button
                    onClick={() => scrollToSection('#about')}
                    className="flex flex-col items-center text-white hover:text-primary-400 transition-colors duration-300"
                >
                    <span className="text-sm mb-2">Descubre más</span>
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                </button>
            </motion.div>
        </section>
    )
}

export default Hero
