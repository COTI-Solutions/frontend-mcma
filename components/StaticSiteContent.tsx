/**
 * Contenido semántico siempre presente en el HTML del servidor.
 * Visible para crawlers, agentes de IA y usuarios sin JavaScript.
 * Con JS activo se oculta visualmente (sigue en el DOM para accesibilidad/SEO).
 */
import { serviceCategories } from '@/config/services'

const StaticSiteContent = () => {
    return (
        <aside
            id="contenido-estatico"
            className="static-site-content"
            aria-label="Resumen del sitio para lectores y agentes"
        >
            <div className="container-custom section-padding space-y-10">
                <header>
                    <h2 className="text-2xl font-display font-bold text-primary-600 mb-3">
                        Estética MCMA — Dra. Macarena Covián
                    </h2>
                    <p className="text-gray-700 leading-relaxed max-w-3xl">
                        Centro de cirugía plástica y medicina estética en Villa Ballester, Buenos Aires.
                        Especialistas en toxina botulínica, ácido hialurónico, plasma rico en plaquetas (PRP),
                        mesoterapia y cirugías estéticas. Más de 5 años de experiencia y consulta gratuita.
                    </p>
                </header>

                <section aria-labelledby="static-servicios">
                    <h3 id="static-servicios" className="text-xl font-semibold text-secondary-600 mb-4">
                        Tratamientos disponibles
                    </h3>
                    <div className="space-y-6">
                        {serviceCategories.map((category) => (
                            <div key={category.title}>
                                <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                                <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {category.services.map((service) => (
                                        <li key={service.name}>
                                            <strong>{service.name}</strong>
                                            {service.description ? ` — ${service.description}` : ''}
                                            {service.duration ? ` (${service.duration})` : ''}
                                            {service.popular ? ' · Más popular' : ''}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="static-contacto">
                    <h3 id="static-contacto" className="text-xl font-semibold text-secondary-600 mb-4">
                        Contacto y ubicación
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            Teléfono / WhatsApp:{' '}
                            <a href="https://wa.me/5491137017756" className="text-primary-600 underline">
                                +54 11 3701 7756
                            </a>
                        </li>
                        <li>
                            Email:{' '}
                            <a href="mailto:esteticamcma@gmail.com" className="text-primary-600 underline">
                                esteticamcma@gmail.com
                            </a>
                        </li>
                        <li>
                            Dirección: 11 de Septiembre 4896, Timbre 3F, Villa Ballester, Buenos Aires, Argentina
                        </li>
                        <li>Horarios: Lun–Vie 9:00–18:00 · Sáb 9:00–12:00 · Dom cerrado</li>
                        <li>
                            <a href="/contact" className="text-secondary-600 underline">
                                Ir a la página de contacto
                            </a>
                        </li>
                        <li>
                            <a href="/#booking" className="text-secondary-600 underline">
                                Reservar cita
                            </a>
                        </li>
                    </ul>
                </section>

                <section aria-labelledby="static-faq">
                    <h3 id="static-faq" className="text-xl font-semibold text-secondary-600 mb-4">
                        Preguntas frecuentes
                    </h3>
                    <dl className="space-y-4 text-gray-700">
                        <div>
                            <dt className="font-semibold">¿Cuánto tiempo dura la consulta?</dt>
                            <dd>
                                La primera consulta incluye una evaluación completa y suele durar entre 30-45 minutos.
                            </dd>
                        </div>
                        <div>
                            <dt className="font-semibold">¿Qué necesito llevar?</dt>
                            <dd>Solo ropa cómoda. Proporcionamos el material necesario para el tratamiento.</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">¿Puedo cancelar mi cita?</dt>
                            <dd>Sí, hasta 24 horas antes sin cargo.</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">¿Aceptan seguros médicos?</dt>
                            <dd>No. Todos los tratamientos son de pago particular.</dd>
                        </div>
                    </dl>
                </section>
            </div>
        </aside>
    )
}

export default StaticSiteContent
