'use client'

import { motion } from 'framer-motion'
import {
    ShieldCheck,
    Building2,
    HeartHandshake,
    Award,
} from 'lucide-react'

const Hero = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop - 85
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
    }

    return (
        <section
            id="hero"
            className="relative min-h-[92dvh] flex items-center justify-center bg-gradient-to-b from-surface-soft via-background/60 to-background pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full"
            aria-labelledby="hero-title"
        >
            <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Left Column: Medical Authority Hierarchy */}
                    <motion.div
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col justify-center text-left order-1"
                    >
                        {/* Kicker / Pre-encabezado */}
                        <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
                            <span className="h-px w-4 sm:w-5 bg-secondary-500/70 flex-shrink-0" aria-hidden="true" />
                            <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-secondary-700 leading-tight">
                                Cirugía Plástica, Estética y Reparadora · Dra. Macarena Covián
                            </span>
                        </div>

                        {/* H1 - Título Principal */}
                        <h1
                            id="hero-title"
                            className="font-heading text-primary-500 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-bold leading-[1.18] sm:leading-[1.16] mb-4 sm:mb-6 tracking-tight"
                        >
                            La armonía que buscás, con la seguridad y el respaldo médico que merecés.
                        </h1>

                        {/* Bajada / Subtítulo */}
                        <p className="font-body text-text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[56ch]">
                            Planificación personalizada, tecnología de vanguardia y procedimientos realizados en sanatorios y centros quirúrgicos de máxima complejidad. Da el primer paso hacia tu cambio.
                        </p>

                        {/* CTAs (Llamados a la Acción) */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <a
                                href="/#booking"
                                onClick={(e) => scrollToSection(e, 'booking')}
                                className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-md hover:shadow-lg justify-center font-medium transition-all duration-200 active:scale-[0.98] text-center"
                            >
                                <span>Agendar consulta de evaluación</span>
                            </a>
                            <a
                                href="/#services"
                                onClick={(e) => scrollToSection(e, 'services')}
                                className="btn-outline-primary text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 justify-center font-medium transition-all duration-200 active:scale-[0.98] text-center"
                            >
                                <span>Ver procedimientos quirúrgicos</span>
                                <span className="text-sm font-sans ml-1" aria-hidden="true">↓</span>
                            </a>
                        </div>

                        {/* Micro-sellos de Confianza (Editorial Trust Strip) */}
                        <div className="pt-5 sm:pt-6 border-t border-secondary-500/20">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2">
                                <div className="flex items-center gap-2 sm:gap-2.5">
                                    <ShieldCheck className="w-4 h-4 text-secondary-600 flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
                                    <span className="text-[11px] sm:text-xs font-medium text-text-main leading-snug">
                                        Médica Especialista Certificada (MN / MP)
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-2.5 sm:border-l sm:border-secondary-500/25 sm:pl-3">
                                    <Building2 className="w-4 h-4 text-secondary-600 flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
                                    <span className="text-[11px] sm:text-xs font-medium text-text-main leading-snug">
                                        Sanatorios y Quirófanos Habilitados
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-2.5 sm:border-l sm:border-secondary-500/25 sm:pl-3">
                                    <HeartHandshake className="w-4 h-4 text-secondary-600 flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
                                    <span className="text-[11px] sm:text-xs font-medium text-text-main leading-snug">
                                        Seguimiento Postoperatorio Personalizado
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Doctor Portrait Presentation */}
                    <motion.div
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative flex justify-center items-center order-2 w-full"
                    >
                        <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            {/* Portrait Frame */}
                            <div className="relative bg-surface p-2 sm:p-2.5 rounded-2xl shadow-xl border border-secondary-500/25">
                                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-soft">
                                    <img
                                        src="/images/about/doc.webp"
                                        alt="Dra. Macarena Covián - Especialista en Cirugía Plástica, Estética y Reparadora"
                                        className="w-full h-full object-cover object-center"
                                        loading="eager"
                                    />
                                </div>

                                {/* Clean Doctor Accreditation Plaque */}
                                <div className="pt-3 pb-1 px-1.5 sm:px-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="min-w-0">
                                            <h2 className="font-heading font-bold text-sm sm:text-base text-primary-500 leading-tight truncate">
                                                Dra. Macarena Covián
                                            </h2>
                                            <p className="text-[11px] sm:text-xs text-text-muted font-medium mt-0.5 truncate">
                                                Cirugía Plástica, Estética y Reparadora
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-secondary-500/10 border border-secondary-500/20 text-secondary-700 text-[10px] sm:text-[11px] font-semibold flex-shrink-0">
                                            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary-600" strokeWidth={1.8} />
                                            <span>MN / MP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
