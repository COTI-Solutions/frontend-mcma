import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Estética MCMA - Belleza y Bienestar',
    description: 'Centro de estética profesional especializado en tratamientos faciales, corporales y de belleza. Reserva tu cita online.',
    keywords: 'estética, belleza, tratamientos faciales, corporales, spa, reservas online',
    authors: [{ name: 'Estética MCMA' }],
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className="antialiased overflow-x-hidden">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
