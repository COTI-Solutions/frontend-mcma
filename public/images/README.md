# 📁 Organización de Imágenes - Estética MCMA

## 🎯 **Estructura de Carpetas:**

```
public/images/
├── hero/           # Imágenes del banner principal
├── about/          # Imágenes de la sección "Sobre Nosotros"
├── services/       # Imágenes de tratamientos y servicios
├── gallery/        # Galería de antes y después
└── logo/           # Logos y elementos de marca
```

## 📸 **Tipos de Imágenes por Carpeta:**

### **hero/**
- Imagen de fondo principal (1920x1080px recomendado)
- Imágenes relacionadas con tratamientos avanzados
- Formato: JPG, WebP

### **about/**
- Fotos del equipo médico
- Instalaciones del centro
- Equipos y tecnología
- Formato: JPG, PNG

### **services/**
- Fotos de tratamientos específicos
- Antes y después de tratamientos
- Equipos médicos
- Formato: JPG, PNG

### **gallery/**
- Galería de resultados
- Casos de éxito
- Comparativas antes/después
- Formato: JPG, PNG

### **logo/**
- Logo principal (PNG con transparencia)
- Logo en blanco para fondos oscuros
- Iconos de la marca
- Formato: PNG, SVG

## 🚀 **Cómo Usar en el Código:**

### **Con Next.js Image (Recomendado):**
```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-bg.jpg"
  alt="Descripción de la imagen"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
  priority
/>
```

### **Con HTML img:**
```tsx
<img
  src="/images/hero/hero-bg.jpg"
  alt="Descripción de la imagen"
  className="w-full h-full object-cover"
/>
```

## 📏 **Especificaciones Técnicas:**

- **Hero**: 1920x1080px (16:9)
- **Cards**: 800x600px (4:3)
- **Thumbnails**: 400x300px (4:3)
- **Logos**: 200x200px (1:1)

## 🔧 **Optimización:**

1. **Comprimir** antes de subir (TinyPNG, ImageOptim)
2. **Usar WebP** cuando sea posible
3. **Mantener** tamaños razonables
4. **Incluir** atributos alt descriptivos

## 📝 **Nomenclatura:**

- Usar **minúsculas**
- Separar palabras con **guiones**
- Ser **descriptivo**
- Ejemplo: `plasma-treatment-before.jpg`

---

**Nota**: Todas las imágenes deben ser de alta calidad y representar profesionalmente los servicios del centro de estética.
