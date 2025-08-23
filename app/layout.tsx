import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Estética MCMA',
    description: 'Centro de estética profesional en Villa Ballester',
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
