'use client'

import { Card } from 'antd'
import { motion } from 'framer-motion'

const ContactBanner = () => {
    return (
        <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Card
                className="overflow-hidden border-none shadow-lg"
                styles={{ body: { padding: 0 } }}
                cover={
                    <img
                        src="/images/about/portada.webp"
                        alt="Dra. Macarena Covián - Cirugía Plástica y Medicina Estética"
                        className="h-48 w-full object-contain object-center bg-gradient-to-r from-primary-50 to-secondary-50 sm:h-56 md:h-64 lg:h-72"
                    />
                }
            />
        </motion.div>
    )
}

export default ContactBanner
