'use client'

import { motion } from 'framer-motion'
import { Stethoscope, GraduationCap, Gem, TrendingUp } from 'lucide-react'

const About = () => {
    const values = [
        {
            icon: Stethoscope,
            title: 'Cuidado Personalizado',
            description: 'Cada tratamiento se adapta a tus necesidades específicas y objetivos de belleza.'
        },
        {
            icon: GraduationCap,
            title: 'Profesionalidad',
            description: 'Equipo certificado con años de experiencia en estética y belleza.'
        },
        {
            icon: Gem,
            title: 'Calidad Premium',
            description: 'Utilizamos solo productos de la más alta calidad y tecnología avanzada.'
        },
        {
            icon: TrendingUp,
            title: 'Resultados Visibles',
            description: 'Tratamientos efectivos que transforman tu apariencia de forma natural.'
        }
    ]

    return (
        <section id="about" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sobre
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                                Estética MCMA
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Somos un centro de estética comprometido con tu belleza y bienestar.
                            Desde 2019, hemos estado ayudando a nuestros pacientes a sentirse
                            más seguros y radiantes con tratamientos personalizados y tecnología de vanguardia.
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nuestro equipo de profesionales certificados combina experiencia,
                            innovación y atención personalizada para ofrecerte los mejores
                            resultados en cada visita.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                                <div className="text-sm text-gray-600">Años de Experiencia</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-secondary-600 mb-1">1000+</div>
                                <div className="text-sm text-gray-600">Tratamientos Realizados</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="/images/about/doc.webp"
                                alt="Equipo de Estética MCMA"
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 -z-10"></div>
                    </motion.div>
                </div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Nuestros Valores
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Nos guiamos por principios que garantizan la excelencia en cada tratamiento
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
