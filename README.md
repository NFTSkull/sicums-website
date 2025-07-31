# SICUMS - Sitio Web Profesional

Sitio web moderno, responsive y visualmente impactante para **SICUMS** (Servicios Integrales de Construcción, Urbanización, Mantenimiento y Suministros).

## 🚀 Características

### ✨ Diseño y UX
- **Diseño moderno y minimalista** con paleta de colores premium
- **100% responsive** para móvil, tablet y desktop
- **Animaciones suaves** con ScrollReveal
- **Navegación fluida** con scroll suave
- **Header fijo** con efecto de transparencia
- **Botón flotante WhatsApp** con enlace directo

### 🎨 Paleta de Colores
- **Naranja principal (CTA)**: #FF6B35
- **Naranja claro (fondos)**: #FFB98A
- **Gris oscuro (texto)**: #2B2B2B
- **Gris medio (fondos secundarios)**: #E5E5E5
- **Blanco puro**: #FFFFFF
- **Azul profundo (detalle premium)**: #003459

### 📱 Funcionalidades
- **Formulario de contacto** funcional
- **Modales interactivos** para proyectos
- **Menú móvil** con animaciones
- **Efectos hover** en tarjetas y botones
- **ScrollReveal** para animaciones de entrada
- **Optimización de rendimiento**

## 📁 Estructura del Proyecto

```
BORDERLESS/
├── index.html          # Página principal
├── style.css           # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **TailwindCSS** - Framework de CSS utility-first
- **JavaScript ES6+** - Funcionalidades interactivas
- **ScrollReveal** - Animaciones de scroll
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografías (Montserrat + Open Sans)

## 🚀 Instalación y Uso

### 1. Clonar o Descargar
```bash
# Si tienes Git
git clone [url-del-repositorio]

# O simplemente descarga los archivos
```

### 2. Abrir en el Navegador
```bash
# Abre index.html en tu navegador preferido
open index.html
```

### 3. Servidor Local (Opcional)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables de color en `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'orange-primary': '#FF6B35',    // Color principal
                'orange-light': '#FFB98A',      // Color claro
                'gray-dark': '#2B2B2B',         // Texto principal
                'gray-medium': '#E5E5E5',       // Fondos secundarios
                'blue-deep': '#003459'          // Color de acento
            }
        }
    }
}
```

### Cambiar Información de Contacto
En `index.html`, busca y modifica:

```html
<!-- Teléfono -->
<p class="text-gray-600">2291144509</p>

<!-- Email -->
<p class="text-gray-600">contacto@sicums.com.mx</p>

<!-- Dirección -->
<p class="text-gray-600">Veracruz, México</p>
```

### Cambiar WhatsApp
Modifica el enlace en el botón flotante:

```html
<a href="https://wa.me/522291144509" target="_blank">
```

### Agregar Proyectos
En `script.js`, edita el objeto `projects`:

```javascript
const projects = {
    'Nombre del Proyecto': {
        title: 'Título del Proyecto',
        description: 'Descripción detallada...',
        details: [
            'Característica 1',
            'Característica 2',
            // ...
        ],
        services: ['Servicio 1', 'Servicio 2'],
        duration: 'X meses',
        client: 'Nombre del Cliente'
    }
};
```

## 📱 Secciones del Sitio

### 1. **Header Global**
- Logo SICUMS
- Menú de navegación
- Botón CTA "Solicitar Cotización"
- Menú móvil responsive

### 2. **Página de Inicio**
- **Hero Principal**: Título impactante con CTA
- **Servicios Destacados**: 3 tarjetas con hover
- **Quiénes Somos**: Información de la empresa
- **Resumen de Servicios**: 3 bloques con gradientes
- **Testimonios**: Opiniones de clientes
- **CTA Final**: Llamada a la acción

### 3. **Sección Servicios**
- Mantenimiento Integral
- Suministros Eficientes
- Construcción y Urbanización

### 4. **Sección Proyectos**
- Categorías destacadas
- Galería interactiva
- Modales con detalles

### 5. **Sección Contacto**
- Formulario funcional
- Información de contacto
- Mapa placeholder

## 🔧 Funcionalidades JavaScript

### ScrollReveal
```javascript
// Configuración personalizada
const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    reset: false
});
```

### Formulario de Contacto
- Validación de campos
- Estado de carga
- Mensaje de éxito
- Reset automático

### Modales de Proyectos
- Datos dinámicos
- Animaciones suaves
- Cierre con Escape
- Click fuera para cerrar

## 📊 Optimizaciones

### Rendimiento
- **Lazy loading** de imágenes
- **Debounce/throttle** para eventos
- **Intersection Observer** para animaciones
- **CSS optimizado** con Tailwind

### Accesibilidad
- **Navegación por teclado**
- **Focus visible**
- **Contraste adecuado**
- **Reduced motion support**

### SEO
- **Meta tags** optimizados
- **Estructura semántica**
- **Open Graph** tags
- **Schema markup** (pendiente)

## 🎯 Próximas Mejoras

- [ ] **Integración con CMS** (WordPress, Strapi)
- [ ] **Blog de proyectos**
- [ ] **Galería de imágenes** con lightbox
- [ ] **Chat en vivo**
- [ ] **Analytics** (Google Analytics)
- [ ] **PWA** (Progressive Web App)
- [ ] **Multiidioma** (ES/EN)

## 📞 Contacto

**SICUMS**
- **Teléfono**: 2291144509
- **Email**: contacto@sicums.com.mx
- **Ubicación**: Veracruz, México

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para fines comerciales y personales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para SICUMS**

*Sitio web moderno, profesional y funcional para servicios de construcción y urbanización.* 