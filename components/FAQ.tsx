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
            className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50"
            aria-labelledby="faq-title"
        >
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Preguntas
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                            Frecuentes
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Resolvemos las dudas más comunes sobre nuestros tratamientos y servicios
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {faqItems.map((item) => (
                        <article
                            key={item.question}
                            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary-500"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            ¿No encontraste tu respuesta?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Si tenés alguna otra pregunta o necesitás más información, no dudes en
                            contactarnos directamente.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center space-x-2 btn-secondary px-8 py-4 text-lg"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            <span>Escribinos</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
