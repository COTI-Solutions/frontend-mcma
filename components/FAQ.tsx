import { MessageCircle } from 'lucide-react'

const faqItems = [
    {
        question: '¿Cuánto tiempo dura la consulta?',
        answer:
            'La primera consulta incluye una evaluación completa y suele durar entre 30-45 minutos, dependiendo del servicio.',
    },
    {
        question: '¿Qué necesito llevar?',
        answer:
            'Solo necesitás venir con ropa cómoda. Nosotros te proporcionamos todo el material necesario para tu tratamiento.',
    },
    {
        question: '¿Puedo cancelar mi cita?',
        answer:
            'Sí, podés cancelar tu cita hasta 24 horas antes sin ningún cargo. Después de ese tiempo, se aplicará una tarifa de cancelación.',
    },
    {
        question: '¿Aceptan seguros médicos?',
        answer: 'No trabajamos con seguros médicos. Todos nuestros tratamientos son de pago particular.',
    },
]

const FAQ = () => {
    return (
        <section
            id="faq"
            className="section-padding bg-background"
            aria-labelledby="faq-title"
        >
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 id="faq-title" className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-6">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-[15px] md:text-base text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Resolvemos las consultas médicas y operativas más frecuentes sobre nuestros procedimientos y tratamientos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {faqItems.map((item) => (
                        <article
                            key={item.question}
                            className="bg-surface rounded-xl p-6 shadow-md border-l-4 border-secondary-500 border-y border-r border-surface-soft transition-all duration-300 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-heading font-bold text-primary-500 mb-3">{item.question}</h3>
                            <p className="text-[15px] text-text-main leading-relaxed">{item.answer}</p>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <div className="bg-surface rounded-xl p-8 shadow-md border border-surface-soft max-w-2xl mx-auto">
                        <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                            ¿Tenés dudas específicas sobre tu caso?
                        </h3>
                        <p className="text-[15px] text-text-main mb-6 leading-relaxed">
                            Si tenés alguna consulta médica puntual o necesitás información detallada, estamos para orientarte.
                        </p>
                        <a
                            href="/contact"
                            className="btn-secondary text-base px-8 py-3.5"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            <span>Escribinos tu Consulta</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
