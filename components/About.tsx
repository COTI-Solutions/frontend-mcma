'use client'

import { motion } from 'framer-motion'
import { Stethoscope, GraduationCap, Gem, TrendingUp } from 'lucide-react'
import AnimatedStat from '@/components/AnimatedStat'

const values = [
    {
        icon: Stethoscope,
        title: 'Cuidado Personalizado',
        description:
            'Cada tratamiento se adapta a tus necesidades específicas y objetivos de belleza.',
    },
    {
        icon: GraduationCap,
        title: 'Profesionalidad',
        description: 'Equipo certificado con años de experiencia en estética y belleza.',
    },
    {
        icon: Gem,
        title: 'Calidad Premium',
        description: 'Utilizamos solo productos de la más alta calidad y tecnología avanzada.',
    },
    {
        icon: TrendingUp,
        title: 'Resultados Visibles',
        description: 'Tratamientos efectivos que transforman tu apariencia de forma natural.',
    },
]

const About = () => {
    return (
        <section
            id="about"
            className="section-padding bg-surface-soft"
            aria-labelledby="about-title"
        >
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2
                            id="about-title"
                            className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-6"
                        >
                            Sobre Estética MCMA
                        </h2>

                        <p className="text-[15px] md:text-base text-text-main mb-6 leading-relaxed">
                            Somos un centro de estética y medicina médica comprometido con tu belleza y bienestar.
                            Desde 2019, acompañamos a nuestros pacientes a sentirse más seguros y radiantes con
                            tratamientos personalizados y tecnología de vanguardia.
                        </p>

                        <p className="text-[15px] md:text-base text-text-main mb-8 leading-relaxed">
                            Nuestro equipo médico y profesional certificado combina experiencia clínica, innovación y
                            atención personalizada para ofrecerte los mejores resultados en un entorno seguro y confiable.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-5 bg-surface rounded-xl shadow-sm border border-surface-soft">
                                <AnimatedStat
                                    value={5}
                                    suffix="+"
                                    label="Años de Experiencia"
                                    valueClassName="text-3xl font-bold text-primary-500"
                                    labelClassName="text-sm text-text-muted mt-1"
                                    delay={0.1}
                                />
                            </div>
                            <div className="text-center p-5 bg-surface rounded-xl shadow-sm border border-surface-soft">
                                <AnimatedStat
                                    value={1000}
                                    suffix="+"
                                    label="Tratamientos Realizados"
                                    valueClassName="text-3xl font-bold text-secondary-500"
                                    labelClassName="text-sm text-text-muted mt-1"
                                    delay={0.2}
                                    duration={2500}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/images/about/doc.webp"
                                alt="Equipo profesional de Estética MCMA en Villa Ballester"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500/20 rounded-full opacity-30 -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/20 rounded-full opacity-30 -z-10" />
                    </div>
                </div>

                <div className="mt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-3">Nuestros Valores</h3>
                        <p className="text-[15px] md:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
                            Nos guiamos por principios que garantizan la excelencia médica y estética en cada tratamiento.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.article
                                key={value.title}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-surface rounded-xl shadow-md border border-surface-soft hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-secondary-500/20 shadow-md">
                                    <value.icon className="w-8 h-8 text-white" aria-hidden="true" />
                                </div>
                                <h4 className="text-lg font-heading font-bold text-text-main mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-[15px] text-text-main leading-relaxed">{value.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
