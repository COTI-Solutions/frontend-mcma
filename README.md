# Estética MCMA - Landing Page

Una landing page moderna y profesional para un centro de estética, construida con React, Next.js y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Integración con Calendly**: Sistema de reservas online embebido
- **SEO Optimizado**: Metadatos y estructura semántica
- **Componentes Modulares**: Arquitectura limpia y mantenible
- **Tipografía Personalizada**: Fuentes Google Fonts integradas

## 📱 Secciones Incluidas

1. **Hero Section**: Banner principal con llamadas a la acción
2. **Sobre Nosotros**: Información de la empresa y valores
3. **Servicios**: Catálogo completo de tratamientos
4. **Reservas**: Sistema de citas online con Calendly
5. **Contacto**: Formulario de contacto y información
6. **Footer**: Enlaces, redes sociales y newsletter

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS utilitario
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconos modernos y ligeros
- **React Calendly**: Integración con sistema de reservas

## 📦 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd estetica-mcma
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar Calendly** (Opcional)
   - Crear una cuenta en [Calendly](https://calendly.com)
   - Obtener tu URL de calendario
   - Reemplazar `https://calendly.com/your-calendly-url` en `components/Booking.tsx`

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🔧 Configuración

### Personalización de Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ec4899', // Color principal
    600: '#db2777',
  },
  secondary: {
    500: '#0ea5e9', // Color secundario
    600: '#0284c7',
  }
}
```

### Configuración de Calendly

Para integrar tu calendario de Calendly:

1. Ve a tu cuenta de Calendly
2. Crea un nuevo tipo de evento o usa uno existente
3. Copia la URL del evento
4. Reemplaza la URL en el componente `Booking.tsx`

### Imágenes

Las imágenes de ejemplo están en Unsplash. Para usar tus propias imágenes:

1. Reemplaza las URLs en los componentes
2. Asegúrate de que las imágenes estén optimizadas
3. Considera usar Next.js Image component para mejor rendimiento

## 📁 Estructura del Proyecto

```
estetica-mcma/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Navbar.tsx           # Navegación
│   ├── Hero.tsx             # Sección hero
│   ├── About.tsx            # Sobre nosotros
│   ├── Services.tsx         # Servicios
│   ├── Booking.tsx          # Reservas
│   ├── Contact.tsx          # Contacto
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos
├── package.json             # Dependencias
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

## 🚀 Scripts Disponibles

- `npm run dev`: Ejecuta el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Ejecuta la aplicación construida
- `npm run lint`: Ejecuta el linter

## 📱 Responsive Design

La landing page está optimizada para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Personalización

### Cambiar Logo

1. Reemplaza el componente de logo en `Navbar.tsx`
2. Actualiza la imagen en `Footer.tsx`

### Modificar Servicios

1. Edita el array `serviceCategories` en `Services.tsx`
2. Ajusta precios, descripciones y categorías

### Cambiar Información de Contacto

1. Actualiza los datos en `Contact.tsx`
2. Modifica la información en `Footer.tsx`
3. Ajusta el número de teléfono en `Navbar.tsx`

## 🔒 Variables de Entorno

Crea un archivo `.env.local` para configuraciones sensibles:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-url
NEXT_PUBLIC_CONTACT_EMAIL=info@tuempresa.com
NEXT_PUBLIC_PHONE_NUMBER=+34 123 456 789
```

## 📈 Optimización

### Performance

- Imágenes optimizadas con Next.js Image
- Lazy loading de componentes
- Animaciones optimizadas con Framer Motion

### SEO

- Metadatos completos en `layout.tsx`
- Estructura semántica HTML
- URLs amigables para SEO

## 🐛 Solución de Problemas

### Error de Calendly

Si Calendly no se carga:
1. Verifica que la URL sea correcta
2. Asegúrate de que tu cuenta esté activa
3. Revisa la consola del navegador para errores

### Problemas de Estilos

Si los estilos no se aplican:
1. Verifica que Tailwind CSS esté instalado
2. Ejecuta `npm run build` para regenerar estilos
3. Limpia la caché del navegador

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:

- Email: info@esteticamcma.com
- Teléfono: +34 123 456 789
- Website: [esteticamcma.com](https://esteticamcma.com)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide](https://lucide.dev/) - Iconos
- [Calendly](https://calendly.com/) - Sistema de reservas
- [Unsplash](https://unsplash.com/) - Imágenes de stock

---

**Desarrollado con ❤️ para Estética MCMA**
