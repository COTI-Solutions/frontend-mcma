import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Booking />
            <Contact />
            <Footer />
        </main>
    )
}
