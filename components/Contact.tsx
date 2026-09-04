'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Alert,
    Badge,
    Breadcrumb,
    Button,
    Card,
    Col,
    Divider,
    Form,
    Input,
    Row,
    Select,
    Space,
    Typography,
} from 'antd'
import type { FormProps } from 'antd'
import {
    ClockCircleOutlined,
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
    SendOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons'
import ContactBanner from '@/components/ContactBanner'
import { getAllServices } from '@/config/services'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

type ContactFormValues = {
    name: string
    email: string
    phone?: string
    service?: string
    message: string
}

const WHATSAPP_URL =
    'https://wa.me/5491137017756?text=Hola%21%20Me%20gustar%C3%ADa%20consultar%20sobre%20tratamientos.'
const MAPS_URL =
    'https://maps.google.com/?q=11+de+Septiembre+4896,+Villa+Ballester,+Buenos+Aires'

const serviceOptions = [
    { value: 'Consulta General', label: 'Consulta General' },
    ...getAllServices().map((service) => ({
        value: service.name,
        label: service.name,
    })),
    { value: 'Otros', label: 'Otros' },
]

const contactCards = [
    {
        key: 'phone',
        ribbon: 'Respuesta rápida',
        ribbonColor: '#848058',
        icon: <PhoneOutlined />,
        iconBg: '#848058',
        title: 'Teléfono / WhatsApp',
        content: '+54 11 3701 7756',
        description: 'Consultá directamente con nuestro equipo',
        href: WHATSAPP_URL,
        external: true,
    },
    {
        key: 'email',
        icon: <MailOutlined />,
        iconBg: '#6A2226',
        title: 'Email',
        content: 'esteticamcma@gmail.com',
        description: 'Envianos tu consulta por correo',
        href: 'mailto:esteticamcma@gmail.com',
        external: false,
    },
    {
        key: 'address',
        icon: <EnvironmentOutlined />,
        iconBg: '#848058',
        title: 'Dirección',
        content: '11 de Septiembre 4896, Timbre 3F',
        description: 'Villa Ballester, Buenos Aires',
        href: MAPS_URL,
        external: true,
    },
    {
        key: 'hours',
        icon: <ClockCircleOutlined />,
        iconBg: '#6A2226',
        title: 'Horarios',
        content: 'Lun-Vie: 9:00 - 18:00',
        description: 'Sáb: 9:00 - 12:00 · Dom: cerrado',
        href: undefined,
        external: false,
    },
]

const Contact = () => {
    const [form] = Form.useForm<ContactFormValues>()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleFinish: FormProps<ContactFormValues>['onFinish'] = (values) => {
        const whatsappMessage = encodeURIComponent(
            `Hola! Soy ${values.name}.\n` +
                `Email: ${values.email}\n` +
                `${values.phone ? `Teléfono: ${values.phone}\n` : ''}` +
                `${values.service ? `Servicio: ${values.service}\n` : ''}` +
                `Mensaje: ${values.message}`,
        )

        window.open(`https://wa.me/5491137017756?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer')

        setIsSubmitted(true)
        form.resetFields()
        window.setTimeout(() => setIsSubmitted(false), 6000)
    }

    const renderContactCard = (item: (typeof contactCards)[number]) => {
        const card = (
            <Card
                hoverable={Boolean(item.href)}
                className="h-full border-none"
                styles={{ body: { padding: 20 } }}
            >
                <Space align="start" size={16}>
                    <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg text-white"
                        style={{ backgroundColor: item.iconBg }}
                    >
                        {item.icon}
                    </div>
                    <div>
                        <Title level={5} className="!mb-1 !font-display !text-gray-900">
                            {item.title}
                        </Title>
                        <Text strong className="block text-gray-800">
                            {item.content}
                        </Text>
                        <Paragraph type="secondary" className="!mb-0 !mt-1 text-sm">
                            {item.description}
                        </Paragraph>
                    </div>
                </Space>
            </Card>
        )

        const wrappedCard = item.ribbon ? (
            <Badge.Ribbon text={item.ribbon} color={item.ribbonColor}>
                {card}
            </Badge.Ribbon>
        ) : (
            card
        )

        if (!item.href) {
            return wrappedCard
        }

        return (
            <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block h-full no-underline text-inherit"
            >
                {wrappedCard}
            </a>
        )
    }

    return (
        <>
            <section className="border-b border-background-dark bg-background pt-24 pb-10">
                <div className="container-custom px-4 md:px-0">
                    <Breadcrumb
                        className="mb-6"
                        items={[
                            { title: <a href="/">Inicio</a> },
                            { title: 'Contacto' },
                        ]}
                    />
                    <Space direction="vertical" size={12} className="max-w-3xl">
                        <Title
                            level={1}
                            className="!mb-0 !font-display !text-4xl md:!text-5xl"
                        >
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                                Contacto
                            </span>
                        </Title>
                        <Paragraph className="!mb-0 !text-lg !text-gray-600">
                            Estamos para acompañarte en cada paso. Escribinos, llamanos o visitanos en Villa Ballester.
                        </Paragraph>
                        <Space wrap>
                            <Badge color="#848058" text="Consulta gratuita" />
                            <Badge color="#6A2226" text="Atención personalizada" />
                        </Space>
                    </Space>
                </div>
            </section>

            <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background to-background-light">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-secondary-100 opacity-40 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-100 opacity-40 blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <ContactBanner />
                    </motion.div>

                    <Row gutter={[32, 32]}>
                        <Col xs={24} lg={14}>
                            <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-none shadow-lg" title={null}>
                                    <Space direction="vertical" size={8} className="mb-6 w-full">
                                        <Title level={3} className="!mb-0 !font-display">
                                            Envianos un mensaje
                                        </Title>
                                        <Paragraph type="secondary" className="!mb-0">
                                            Completá el formulario y te derivamos a WhatsApp con tu consulta lista para enviar.
                                        </Paragraph>
                                    </Space>

                                    {isSubmitted && (
                                        <Alert
                                            type="success"
                                            showIcon
                                            className="mb-6"
                                            message="Consulta preparada"
                                            description="Abrimos WhatsApp con tu mensaje. Si no se abrió, podés escribirnos directamente."
                                        />
                                    )}

                                    <Form<ContactFormValues>
                                        form={form}
                                        layout="vertical"
                                        requiredMark="optional"
                                        onFinish={handleFinish}
                                        size="large"
                                    >
                                        <Row gutter={16}>
                                            <Col xs={24} md={12}>
                                                <Form.Item
                                                    name="name"
                                                    label="Nombre completo"
                                                    rules={[
                                                        { required: true, message: 'Ingresá tu nombre' },
                                                        { min: 2, message: 'Mínimo 2 caracteres' },
                                                    ]}
                                                >
                                                    <Input placeholder="Tu nombre" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Form.Item
                                                    name="email"
                                                    label="Email"
                                                    rules={[
                                                        { required: true, message: 'Ingresá tu email' },
                                                        { type: 'email', message: 'Email inválido' },
                                                    ]}
                                                >
                                                    <Input placeholder="tu@email.com" />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row gutter={16}>
                                            <Col xs={24} md={12}>
                                                <Form.Item name="phone" label="Teléfono">
                                                    <Input placeholder="+54 11 3701 7756" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Form.Item name="service" label="Servicio de interés">
                                                    <Select
                                                        allowClear
                                                        placeholder="Seleccioná un servicio"
                                                        options={serviceOptions}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Form.Item
                                            name="message"
                                            label="Mensaje"
                                            rules={[
                                                { required: true, message: 'Contanos tu consulta' },
                                                { min: 10, message: 'Mínimo 10 caracteres' },
                                            ]}
                                        >
                                            <TextArea
                                                rows={5}
                                                placeholder="Contanos qué tratamiento te interesa o qué dudas tenés..."
                                                showCount
                                                maxLength={500}
                                            />
                                        </Form.Item>

                                        <Space direction="vertical" size={12} className="w-full">
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                icon={<SendOutlined />}
                                                block
                                                size="large"
                                                className="!h-12"
                                            >
                                                Enviar por WhatsApp
                                            </Button>
                                            <Text type="secondary" className="text-center text-sm">
                                                Al enviar, se abrirá WhatsApp con tu mensaje prearmado.
                                            </Text>
                                        </Space>
                                    </Form>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col xs={24} lg={10}>
                            <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Space direction="vertical" size={24} className="w-full">
                                    <div>
                                        <Title level={4} className="!mb-2 !font-display">
                                            Datos de contacto
                                        </Title>
                                        <Paragraph type="secondary" className="!mb-0">
                                            Elegí el canal que prefieras para comunicarte con nosotros.
                                        </Paragraph>
                                    </div>

                                    <Space direction="vertical" size={16} className="w-full">
                                        {contactCards.map((item) => (
                                            <div key={item.key}>{renderContactCard(item)}</div>
                                        ))}
                                    </Space>

                                    <Card
                                        className="overflow-hidden border-none p-0"
                                        styles={{ body: { padding: 0 } }}
                                        title={
                                            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 px-4 py-3 text-center">
                                                <Text className="!text-white !font-semibold">
                                                    Nuestra ubicación
                                                </Text>
                                            </div>
                                        }
                                    >
                                        <div className="h-72 md:h-80">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.891619805164!2d-58.562677699999995!3d-34.5562994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb935aa7fe31f%3A0x7acb9feb0040a07d!2sEst%C3%A9tica%20MCMA!5e0!3m2!1ses-419!2sar!4v1755527060826!5m2!1ses-419!2sar"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Ubicación Estética MCMA"
                                            />
                                        </div>
                                    </Card>

                                    <Badge.Ribbon text="Atención inmediata" color="#6A2226">
                                        <Card className="border-none bg-gradient-to-br from-primary-600 to-secondary-500 text-center text-white">
                                            <Space direction="vertical" size={16} className="w-full py-2">
                                                <Title level={4} className="!mb-0 !font-display !text-white">
                                                    ¿Preferís WhatsApp?
                                                </Title>
                                                <Paragraph className="!mb-0 !text-white/90">
                                                    Resolvemos tus dudas en el momento con atención personalizada.
                                                </Paragraph>
                                                <Button
                                                    type="default"
                                                    size="large"
                                                    icon={<WhatsAppOutlined />}
                                                    href={WHATSAPP_URL}
                                                    target="_blank"
                                                    className="!inline-flex !h-12 !items-center !border-none !bg-white !px-8 !font-semibold !text-primary-600 hover:!bg-background hover:!text-primary-700"
                                                >
                                                    Escribinos ahora
                                                </Button>
                                            </Space>
                                        </Card>
                                    </Badge.Ribbon>
                                </Space>
                            </motion.div>
                        </Col>
                    </Row>

                    <Divider className="!my-16" />

                    <Row gutter={[24, 24]} justify="center">
                        {[
                            { label: 'Primera consulta', value: 'Sin cargo' },
                            { label: 'Tiempo de respuesta', value: '24 hs' },
                            { label: 'Modalidad', value: 'Presencial' },
                        ].map((item) => (
                            <Col xs={24} sm={8} key={item.label}>
                                <Card className="border-none text-center">
                                    <Text type="secondary" className="block text-sm uppercase tracking-wide">
                                        {item.label}
                                    </Text>
                                    <Title level={4} className="!mb-0 !mt-2 !font-display !text-secondary-600">
                                        {item.value}
                                    </Title>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Contact
