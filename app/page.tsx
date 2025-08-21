import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Booking from '../components/Booking'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <Booking />
        </main>
    )
}
