'use client'

import { motion } from 'framer-motion'

const ContactBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-8 bg-gradient-to-r from-primary-50 to-secondary-50"
        >
            <div className="container-custom">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src="/images/about/portada.webp"
                        alt="Estética MCMA - Transforma tu Belleza"
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain object-center"
                    />
                    {/* Sin overlay ni texto - imagen pura */}
                </div>
            </div>
        </motion.div>
    )
}

export default ContactBanner
