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
                        <Title level={5} className="!mb-1 !font-display !text-primary-500">
                            {item.title}
                        </Title>
                        <Text strong className="block text-text-main">
                            {item.content}
                        </Text>
                        <Paragraph className="!mb-0 !mt-1 text-sm !text-text-muted">
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
                            className="!mb-0 !font-display !text-4xl md:!text-5xl !text-primary-500"
                        >
                            Contacto
                        </Title>
                        <Paragraph className="!mb-0 !text-[15px] md:!text-base !text-text-main !leading-relaxed">
                            Estamos para acompañarte en cada paso de tu valoración estética. Escribinos, llamanos o visitanos en nuestro centro en Villa Ballester.
                        </Paragraph>
                        <Space wrap size={[8, 8]}>
                            <span className="badge-clinical">Quirófano Habilitado</span>
                            <span className="badge-clinical">Matrícula Nacional</span>
                            <span className="badge-clinical">Consulta de Valoración</span>
                        </Space>
                    </Space>
                </div>
            </section>

            <section className="section-padding relative overflow-hidden bg-background">
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
                                <Card className="border border-surface-soft shadow-md bg-surface" title={null}>
                                    <Space direction="vertical" size={8} className="mb-6 w-full">
                                        <Title level={3} className="!mb-0 !font-display !text-primary-500">
                                            Envianos un mensaje
                                        </Title>
                                        <Paragraph className="!mb-0 !text-text-muted text-[15px]">
                                            Completá el formulario y te derivamos a WhatsApp con tu consulta médica lista para enviar.
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
                                                    label={<span className="text-text-main font-medium">Nombre completo</span>}
                                                    rules={[
                                                        { required: true, message: 'Ingresá tu nombre' },
                                                        { min: 2, message: 'Mínimo 2 caracteres' },
                                                    ]}
                                                >
                                                    <Input placeholder="Tu nombre" className="!rounded-lg" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Form.Item
                                                    name="email"
                                                    label={<span className="text-text-main font-medium">Email</span>}
                                                    rules={[
                                                        { required: true, message: 'Ingresá tu email' },
                                                        { type: 'email', message: 'Email inválido' },
                                                    ]}
                                                >
                                                    <Input placeholder="tu@email.com" className="!rounded-lg" />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row gutter={16}>
                                            <Col xs={24} md={12}>
                                                <Form.Item name="phone" label={<span className="text-text-main font-medium">Teléfono</span>}>
                                                    <Input placeholder="+54 11 3701 7756" className="!rounded-lg" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Form.Item name="service" label={<span className="text-text-main font-medium">Procedimiento o servicio</span>}>
                                                    <Select
                                                        allowClear
                                                        placeholder="Seleccioná un tratamiento"
                                                        options={serviceOptions}
                                                        className="!rounded-lg"
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Form.Item
                                            name="message"
                                            label={<span className="text-text-main font-medium">Consulta</span>}
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
                                                className="!rounded-lg"
                                            />
                                        </Form.Item>

                                        <Space direction="vertical" size={12} className="w-full">
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                icon={<SendOutlined />}
                                                block
                                                size="large"
                                                className="!h-12 !bg-primary-500 hover:!bg-primary-600 !font-semibold !rounded-lg shadow-md"
                                            >
                                                Agendar consulta de valoración
                                            </Button>
                                            <Text className="text-center text-xs text-text-muted">
                                                Al enviar, se abrirá WhatsApp con tu consulta prearmada para atención inmediata.
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
                                        <Title level={4} className="!mb-1 !font-display !text-primary-500">
                                            Canales de atención
                                        </Title>
                                        <Paragraph className="!mb-0 !text-text-muted text-[15px]">
                                            Elegí la vía de contacto más conveniente para coordinar tu cita.
                                        </Paragraph>
                                    </div>

                                    <Space direction="vertical" size={16} className="w-full">
                                        {contactCards.map((item) => (
                                            <div key={item.key}>{renderContactCard(item)}</div>
                                        ))}
                                    </Space>

                                    <Card
                                        className="overflow-hidden border border-surface-soft shadow-md bg-surface"
                                        styles={{ body: { padding: 0 } }}
                                        title={
                                            <div className="bg-secondary-500 px-4 py-3 text-center">
                                                <Text className="!text-white !font-semibold">
                                                    Ubicación de nuestro consultorio
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

                                    {/* Banner full borgoña de alto impacto */}
                                    <Badge.Ribbon text="Atención Inmediata" color="#848058">
                                        <Card className="border-none !bg-primary-500 text-center text-white shadow-xl rounded-xl">
                                            <Space direction="vertical" size={16} className="w-full py-3">
                                                <Title level={4} className="!mb-0 !font-display !text-background">
                                                    ¿Preferís WhatsApp?
                                                </Title>
                                                <Paragraph className="!mb-0 !text-surface-soft/90 text-[15px] leading-relaxed">
                                                    Resolvemos tus dudas en el momento con atención personalizada y confidencial.
                                                </Paragraph>
                                                <Button
                                                    type="default"
                                                    size="large"
                                                    icon={<WhatsAppOutlined />}
                                                    href={WHATSAPP_URL}
                                                    target="_blank"
                                                    className="!inline-flex !h-12 !items-center !border-none !bg-secondary-500 hover:!bg-secondary-600 !px-8 !font-semibold !text-white shadow-md !rounded-lg"
                                                >
                                                    Escribinos por WhatsApp
                                                </Button>
                                            </Space>
                                        </Card>
                                    </Badge.Ribbon>
                                </Space>
                            </motion.div>
                        </Col>
                    </Row>

                    <Divider className="!my-16 !border-secondary-500/20" />

                    <Row gutter={[24, 24]} justify="center">
                        {[
                            { label: 'Primera consulta', value: 'Valoración Profesional' },
                            { label: 'Tiempo de respuesta', value: 'Menos de 24 hs' },
                            { label: 'Modalidad', value: 'Presencial y Segura' },
                        ].map((item) => (
                            <Col xs={24} sm={8} key={item.label}>
                                <Card className="border border-surface-soft shadow-sm bg-surface text-center rounded-xl">
                                    <Text className="block text-xs uppercase tracking-wider text-secondary-600 font-semibold">
                                        {item.label}
                                    </Text>
                                    <Title level={4} className="!mb-0 !mt-2 !font-display !text-primary-500">
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
