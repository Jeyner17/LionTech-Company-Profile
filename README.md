# Personal Portfolio - Arquitectura Modular

> Portfolio personal profesional con estructura 100% modular, diseño responsive y código limpio y organizado.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ES6 Modules](https://img.shields.io/badge/ES6-Modules-green)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Arquitectura Modular](#-arquitectura-modular)
- [Personalización](#-personalización)
- [Tecnologías](#️-tecnologías)
- [Funcionalidades](#-funcionalidades)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## ✨ Características

- 🏗️ **Arquitectura 100% Modular** - Componentes HTML, CSS y JS separados
- 📱 **Responsive Design** - 6 breakpoints para todos los dispositivos
- 🎨 **CSS Modular** - 13 archivos organizados por función
- ⚡ **JavaScript ES6+** - Módulos independientes con import/export
- 🌐 **SPA Navigation** - Navegación sin recarga de página
- 🎭 **Animaciones Suaves** - Transiciones y efectos elegantes
- 🔍 **Sistema de Filtros** - Portfolio con filtrado por categorías
- 📝 **Formulario Validado** - Validación en tiempo real
- ♿ **Accesible** - Semántica HTML5 correcta
- 🚀 **Performance** - Código optimizado y ligero
- 📚 **Documentado al 100%** - Cada carpeta tiene su README

---

## 🎥 Demo

🔗 **[Ver Demo en Vivo](https://tu-usuario.github.io/portfolio)**

![Portfolio Preview](https://i.postimg.cc/screenshot.png)

---

## 📁 Estructura del Proyecto

```
📦 personal-portfolio/
│
├── 📄 index.html                     # Página principal (limpia, solo carga componentes)
├── 📘 README.md                      # Este archivo
├── 📗 INSTALACION.md                 # Guía de instalación paso a paso
├── 📙 ARQUITECTURA.md                # Explicación de arquitectura modular
├── 📝 COMANDOS.txt                   # Comandos útiles
├── 📊 RESUMEN.txt                    # Resumen visual del proyecto
│
├── 📁 css/                           # 🎨 Estilos Modulares
│   ├── 📁 base/
│   │   ├── variables.css             # Variables CSS globales (colores, fuentes)
│   │   ├── base.css                  # Reset CSS y estilos base
│   │   └── utilities.css             # Clases utilitarias reutilizables
│   │
│   ├── 📁 components/
│   │   ├── sidebar.css               # Estilos del sidebar
│   │   ├── navigation.css            # Estilos del menú de navegación
│   │   └── modal.css                 # Estilos del modal de testimonios
│   │
│   ├── 📁 pages/
│   │   ├── about.css                 # Estilos de la página About
│   │   ├── resume.css                # Estilos de la página Resume
│   │   ├── portfolio.css             # Estilos de la página Portfolio
│   │   ├── blog.css                  # Estilos de la página Blog
│   │   └── contact.css               # Estilos de la página Contact
│   │
│   ├── 📁 responsive/
│   │   └── responsive.css            # Media queries (6 breakpoints)
│   │
│   ├── style.css                     # ⭐ CSS Principal (importa todos los módulos)
│   └── README.md                     # Documentación CSS detallada
│
├── 📁 js/                            # ⚡ JavaScript Modular
│   ├── utils.js                      # Funciones utilitarias comunes
│   ├── sidebar.js                    # Módulo del sidebar (toggle)
│   ├── modal.js                      # Módulo del modal de testimonios
│   ├── filter.js                     # Módulo de filtros de portfolio
│   ├── form.js                       # Módulo del formulario de contacto
│   ├── navigation.js                 # Módulo de navegación SPA
│   ├── main.js                       # ⭐ Entry point (inicializa todo)
│   ├── app.js                        # Bundle opcional (sin módulos)
│   └── README.md                     # Documentación JavaScript
│
├── 📁 components/                    # Componentes HTML Reutilizables
│   ├── sidebar.html                  # Componente del sidebar
│   ├── navigation.html               # Componente de navegación
│   ├── modal.html                    # Componente del modal
│   ├── filter.html                   # Componente de filtros
│   ├── form.html                     # Componente del formulario
│   └── README.md                     # Documentación de componentes
│
└── 📁 pages/                         # Páginas HTML Independientes
    ├── about.html                    # Página About me
    ├── resume.html                   # Página Resume/CV
    ├── portfolio.html                # Página Portfolio
    ├── blog.html                     # Página Blog
    ├── contact.html                  # Página Contact
    └── README.md                     # Documentación de páginas
```

**📊 Totales:**
- 35+ archivos organizados
- 4 carpetas principales
- ~2700 líneas de código
- 100% documentado

---

## 🚀 Instalación

### Requisitos Previos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Python, Node.js, PHP, o extensión Live Server)

### Método 1: Servidor Local (Recomendado) ⭐

#### Con Python:
```bash
# Clonar o descargar el proyecto
cd personal-portfolio

# Iniciar servidor
python -m http.server 8000
# o
python3 -m http.server 8000

# Abrir en navegador
open http://localhost:8000
```

#### Con Node.js:
```bash
# Instalar http-server globalmente
npm install -g http-server

# Iniciar servidor
http-server -p 8000

# O usar npx (sin instalar)
npx http-server -p 8000
```

#### Con PHP:
```bash
php -S localhost:8000
```

#### Con VS Code:
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. Seleccionar "Open with Live Server"

### Método 2: Sin Servidor (Solo para pruebas)

1. Abre `index.html` en tu editor
2. Comenta la línea de módulos ES6:
```html
<!-- <script type="module" src="js/main.js"></script> -->
```
3. Descomenta la línea del bundle:
```html
<script src="js/app.js"></script>
```
4. Abre `index.html` directamente en el navegador

⚠️ **Nota:** El método 2 NO es modular y solo sirve para compatibilidad.

---

## 🎯 Uso

### Iniciar el Proyecto

```bash
# 1. Navegar al directorio
cd personal-portfolio

# 2. Iniciar servidor
python -m http.server 8000

# 3. Abrir navegador
# http://localhost:8000
```

### Estructura de Archivos

El proyecto usa **carga dinámica de componentes**:

```javascript
// index.html carga componentes automáticamente
loadComponent('sidebar-container', 'components/sidebar.html');
loadComponent('navigation-container', 'components/navigation.html');
loadPages(); // Carga todas las páginas
```

### Navegación

La aplicación usa **SPA (Single Page Application)**:
- ✅ Navegación sin recarga de página
- ✅ 5 secciones: About, Resume, Portfolio, Blog, Contact
- ✅ URL limpia sin hash routing

---

## 🏗️ Arquitectura Modular

### Concepto Principal

El proyecto está dividido en **componentes independientes**:

```
index.html (limpio)
    ↓
Carga → components/*.html
    ↓
Aplica → css/*.css
    ↓
Ejecuta → js/*.js
```

### Ventajas de la Modularidad

#### ✅ Separación de Responsabilidades
```
HTML  → Solo estructura
CSS   → Solo estilos
JS    → Solo funcionalidad
```

#### ✅ Reutilización
```javascript
// Usar el mismo componente en múltiples lugares
loadComponent('sidebar', 'components/sidebar.html');
```

#### ✅ Mantenimiento Simple
```
❌ Antes: index.html con 2000+ líneas
✅ Ahora: index.html con 80 líneas + componentes modulares
```

#### ✅ Trabajo en Equipo
```
Dev A → components/sidebar.html
Dev B → components/navigation.html
Dev C → pages/portfolio.html
Sin conflictos en Git ✅
```

### Flujo de Carga

```
1. Browser carga index.html
   ↓
2. index.html tiene contenedores vacíos
   <div id="sidebar-container"></div>
   ↓
3. JavaScript carga componentes
   fetch('components/sidebar.html')
   ↓
4. Componentes se insertan en el DOM
   sidebar-container.innerHTML = sidebarHTML
   ↓
5. CSS se aplica automáticamente
   Estilos de sidebar.css se activan
   ↓
6. JavaScript se inicializa
   initSidebar() ejecuta funcionalidades
   ↓
7. ✅ App lista y funcionando
```

📘 **Más detalles:** Lee [`ARQUITECTURA.md`](./ARQUITECTURA.md)

---

## 🎨 Personalización

### Cambiar Colores

Edita `css/base/variables.css`:

```css
:root {
    /* Color principal */
    --orange-yellow-crayola: hsl(45, 100%, 72%);
    
    /* Fondo */
    --smoky-black: hsl(0, 0%, 7%);
    
    /* Colores de texto */
    --white1: hsl(0, 0%, 100%);
    --light-gray: hsl(0, 0%, 84%);
}
```

### Modificar Información Personal

Edita `components/sidebar.html`:

```html
<!-- Nombre y profesión -->
<h1 class="name">Tu Nombre</h1>
<p class="title">Tu Profesión</p>

<!-- Email -->
<a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a>

<!-- Teléfono -->
<a href="tel:+1234567890">+1 (234) 567-890</a>

<!-- Ubicación -->
<address>Tu Ciudad, Tu País</address>
```

### Agregar Proyectos

Edita `pages/portfolio.html`:

```html
<li class="project-item active" data-filter-item data-category="web design">
    <a href="#">
        <figure class="project-img">
            <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="url-de-tu-proyecto.jpg" alt="Nombre Proyecto">
        </figure>
        <h3 class="project-title">Nombre Proyecto</h3>
        <p class="project-category">Web Design</p>
    </a>
</li>
```

### Modificar Contenido de About

Edita `pages/about.html`:

```html
<section class="about-text">
    <p>Tu biografía aquí...</p>
    <p>Más información sobre ti...</p>
</section>
```

### Agregar Nuevos Componentes

```bash
# 1. Crear componente HTML
touch components/nuevo-componente.html

# 2. Crear estilos
touch css/components/nuevo-componente.css

# 3. Importar CSS en style.css
echo "@import url('./components/nuevo-componente.css');" >> css/style.css

# 4. Cargar en index.html
# Agregar: loadComponent('nuevo-container', 'components/nuevo-componente.html');
```

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **HTML5** | - | Estructura semántica |
| **CSS3** | - | Estilos y diseño |
| **JavaScript** | ES6+ | Funcionalidades interactivas |
| **CSS Variables** | - | Theming dinámico |
| **CSS Grid** | - | Layouts complejos |
| **Flexbox** | - | Alineación y distribución |
| **ES6 Modules** | - | Organización del código |
| **Ionicons** | 7.1.0 | Sistema de iconos |
| **Google Fonts** | - | Tipografía Poppins |

---

## ⚙️ Funcionalidades

### 1. Sidebar Interactivo

```javascript
// Toggle show/hide en móvil
- Botón "Show Contacts"
- Animación suave de apertura/cierre
- Información de contacto
- Redes sociales
```

### 2. Navegación SPA

```javascript
// Cambio de página sin recarga
- 5 secciones navegables
- Estado activo visual
- Scroll to top automático
- URL limpia
```

### 3. Portfolio con Filtros

```javascript
// Sistema de filtrado dinámico
- 4 categorías: All, Web Design, Applications, Web Development
- Select dropdown (móvil)
- Botones de filtro (desktop)
- Animación fade-in de proyectos
- 9 proyectos de ejemplo
```

### 4. Modal de Testimonios

```javascript
// Modal interactivo
- 4 testimonios
- Carga dinámica de contenido
- Overlay oscuro con blur
- Botón cerrar + click en overlay
- Animación scale
```

### 5. Formulario de Contacto

```javascript
// Validación en tiempo real
- 3 campos: nombre, email, mensaje
- Botón enable/disable dinámico
- Validación HTML5
- Feedback visual
```

### 6. Mapa de Google

```javascript
// Integración de Google Maps
- Ubicación personalizable
- Estilo custom (grayscale + invert)
- Responsive
```

---

## 📱 Responsive Design

### Breakpoints

| Dispositivo | Ancho | Características |
|------------|-------|----------------|
| **Mobile** | < 450px | Layout vertical, sidebar colapsado |
| **Tablet S** | 450-579px | Grid 2 columnas para clientes |
| **Tablet** | 580-767px | Sidebar expandido, padding 30px |
| **Tablet L** | 768-1023px | Filtros desktop, grid 2 columnas |
| **Desktop** | 1024-1249px | Nav absoluta, grid 3 columnas |
| **Desktop L** | > 1250px | Layout 2 columnas, sidebar sticky |

### Mobile First

El proyecto está diseñado **mobile-first**:

```css
/* Estilos base para móvil */
.sidebar {
    max-height: 112px;
}

/* Estilos para tablet y superiores */
@media (min-width: 580px) {
    .sidebar {
        max-height: 180px;
    }
}
```

---

## 🌐 Deployment

### GitHub Pages

```bash
# 1. Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/portfolio.git
git push -u origin main

# 2. Activar GitHub Pages
# Settings → Pages → Source: main branch

# 3. Tu sitio estará en:
# https://tu-usuario.github.io/portfolio
```

### Netlify

```bash
# Opción 1: Drag & Drop
# 1. Ve a https://app.netlify.com/drop
# 2. Arrastra la carpeta del proyecto
# 3. ¡Listo!

# Opción 2: CLI
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -m 'Add: nueva funcionalidad increíble'
   ```
4. **Push** a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre** un Pull Request

### Guía de Contribución

- ✅ Sigue la estructura modular existente
- ✅ Documenta tu código
- ✅ Prueba en múltiples navegadores
- ✅ Mantén el código limpio y legible
- ✅ Actualiza el README si es necesario

---

## 📝 Roadmap

- [ ] Dark/Light mode toggle
- [ ] Internacionalización (i18n) - ES/EN
- [ ] Backend para formulario (Node.js/PHP)
- [ ] Lazy loading de imágenes
- [ ] Intersection Observer para animaciones
- [ ] PWA (Progressive Web App)
- [ ] Unit tests (Jest)
- [ ] E2E tests (Cypress)
- [ ] CI/CD con GitHub Actions
- [ ] Blog CMS integration

---

## 🐛 Problemas Conocidos

- Los módulos ES6 requieren servidor local
- En navegadores antiguos (IE11), usar `app.js` en lugar de `main.js`
- El modal puede tener problemas en iOS Safari < 13

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Richard Hanrick

Se concede permiso gratuito a cualquier persona que obtenga una copia
de este software para usar, copiar, modificar, fusionar, publicar,
distribuir, sublicenciar y/o vender copias del Software.
```

---

## 👤 Autor

**Richard Hanrick**  
*Web Developer & UI/UX Designer*

- 📧 Email: [richard@example.com](mailto:richard@example.com)
- 🌐 Portfolio: [tu-portfolio.com](https://tu-portfolio.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)
- 🐦 Twitter: [@tu-usuario](https://twitter.com/tu-usuario)

---

## 🙏 Agradecimientos

- **Diseño:** Inspirado en portfolios modernos de Dribbble y Behance
- **Iconos:** [Ionicons](https://ionic.io/ionicons) por Ionic Team
- **Fuentes:** [Google Fonts](https://fonts.google.com/) - Poppins
- **Hosting de Imágenes:** [PostImage](https://postimg.cc/)
- **Inspiración:** Comunidad de desarrolladores web

---

## 📚 Documentación Adicional

- 📘 [`INSTALACION.md`](./INSTALACION.md) - Guía de instalación detallada
- 📙 [`ARQUITECTURA.md`](./ARQUITECTURA.md) - Explicación de arquitectura modular
- 📗 [`NOTA-APP-JS.md`](./NOTA-APP-JS.md) - Sobre app.js opcional
- 📝 [`COMANDOS.txt`](./COMANDOS.txt) - Lista de comandos útiles
- 📊 [`RESUMEN.txt`](./RESUMEN.txt) - Resumen visual del proyecto
- 📋 [`INDICE.txt`](./INDICE.txt) - Índice completo de archivos

### Por Carpeta

- 📁 [`css/README.md`](./css/README.md) - Documentación CSS
- 📁 [`js/README.md`](./js/README.md) - Documentación JavaScript
- 📁 [`components/README.md`](./components/README.md) - Documentación de componentes
- 📁 [`pages/README.md`](./pages/README.md) - Documentación de páginas

---

## 📊 Estadísticas del Proyecto

```
📈 Métricas:
├─ Archivos Totales:      35+
├─ Líneas de Código:      ~2700
├─ HTML:                  ~800 líneas
├─ CSS:                   ~1500 líneas
├─ JavaScript:            ~400 líneas
├─ Componentes:           5
├─ Páginas:               5
├─ Módulos CSS:           13
├─ Módulos JS:            7
└─ Archivos de Docs:      10+
```

---

## 💡 Tips

- 🔥 Usa **servidor local** para desarrollo
- 📱 Prueba en **múltiples dispositivos**
- 🎨 Personaliza **variables.css** para cambiar tema
- 📝 Lee toda la **documentación** antes de empezar
- 🐛 Abre **DevTools** (F12) para debugging
- 🚀 Optimiza **imágenes** antes de deployment
- ✅ Valida **HTML/CSS** antes de publicar

---

## ❓ FAQ

**P: ¿Necesito app.js?**  
R: No, app.js es opcional. Solo úsalo si necesitas compatibilidad con navegadores antiguos.

**P: ¿Por qué necesito servidor local?**  
R: Los módulos ES6 no funcionan con `file://` por políticas de CORS.

**P: ¿Puedo usar sin servidor?**  
R: Sí, pero tendrás que usar `app.js` en lugar de módulos ES6.

**P: ¿Cómo agrego más páginas?**  
R: Crea el HTML en `pages/`, CSS en `css/pages/`, y carga en `index.html`.

**P: ¿Es mobile-first?**  
R: Sí, todos los estilos base son para móvil, con media queries para pantallas más grandes.

---

<div align="center">

## ⭐ Si te gustó este proyecto, ¡dale una estrella! ⭐

### 🚀 [Ver Demo](https://tu-usuario.github.io/portfolio) | 📖 [Documentación](./INSTALACION.md) | 🐛 [Reportar Bug](https://github.com/tu-usuario/portfolio/issues)

---

**Hecho con ❤️ por Richard Hanrick**

*Portfolio Personal - Arquitectura Modular © 2025*

[⬆ Volver arriba](#-personal-portfolio---arquitectura-modular)

</div>
