'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Star, Clock, Users } from 'lucide-react'
import AnimatedStat from '@/components/AnimatedStat'

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-none"
            aria-labelledby="hero-title"
        >
            <div className="absolute inset-0 z-0 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                <img
                    src="/images/hero/estetica-mcma-1058556.webp"
                    alt="Tratamientos de Estética Avanzada - Plasma, Botox y Ácido Hialurónico"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1
                        id="hero-title"
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Belleza y
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Bienestar
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                        Tratamientos avanzados de estética: Plasma Rico en Plaquetas, Botox y Ácido
                        Hialurónico.
                        <br className="hidden md:block" />
                        Reservá tu cita y transformá tu apariencia con tecnología de vanguardia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="/#booking" className="btn-primary text-base md:text-lg px-8 py-4">
                            Agendar consulta de valoración
                        </a>
                        <a
                            href="/#services"
                            className="btn-outline text-base md:text-lg px-8 py-4 !border-white !text-white hover:!bg-secondary-500 hover:!border-secondary-500"
                        >
                            Ver Tratamientos
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20 md:mb-16">
                        <AnimatedStat
                            value={4.9}
                            decimals={1}
                            label="Valoración Media"
                            icon={Star}
                            iconClassName="w-6 h-6 text-accent-400"
                            valueClassName="text-3xl font-bold text-white"
                            labelClassName="text-gray-300"
                            delay={0.2}
                        />
                        <AnimatedStat
                            value={500}
                            suffix="+"
                            label="Pacientes Satisfechos"
                            icon={Users}
                            iconClassName="w-6 h-6 text-primary-400"
                            valueClassName="text-3xl font-bold text-white"
                            labelClassName="text-gray-300"
                            delay={0.35}
                        />
                        <AnimatedStat
                            value={5}
                            label="Años de Experiencia"
                            icon={Clock}
                            iconClassName="w-6 h-6 text-secondary-500"
                            valueClassName="text-3xl font-bold text-white"
                            labelClassName="text-gray-300"
                            delay={0.5}
                        />
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <a
                    href="/#about"
                    className="flex flex-col items-center text-white hover:text-secondary-400 transition-colors duration-300"
                >
                    <span className="text-sm mb-2">Descubre más</span>
                    <ArrowDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
                </a>
            </div>
        </section>
    )
}

export default Hero
