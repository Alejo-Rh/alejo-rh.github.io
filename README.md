# 🚀 Alejandro Rodriguez - Portfolio

Portfolio personal de **Alejandro Rodriguez**, Desarrollador Frontend especializado en **React**.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Activo-success)](https://alejo-rh.github.io)

---

## ✨ Características

- 🎨 **Diseño moderno** con tema oscuro y gradientes
- 💫 **Animaciones suaves** y efectos interactivos
- 📱 **100% Responsive** - Se adapta a cualquier dispositivo
- ⚡ **Rendimiento optimizado** - Carga rápida
- 🎯 **SEO friendly** - Optimizado para motores de búsqueda
- ♿ **Accesible** - Diseño inclusivo

---

## 📁 Estructura del Proyecto

```
alejo-rh.github.io/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos completos
├── js/
│   └── main.js            # JavaScript e interacciones
├── assets/
│   └── img/
│       └── Alejo.jpg      # Foto de perfil
└── README.md              # Documentación
```

---

## 🎯 Secciones

1. **Hero** - Presentación principal con foto y llamada a la acción
2. **Sobre mí** - Breve introducción profesional
3. **Conocimientos** - Skills y tecnologías
4. **Proyectos** - Portafolio de trabajos realizados
5. **Contacto** - Formas de comunicación

---

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript vanilla (ES6+)
- GitHub Pages para hosting

---

## 🎨 Personalización

### 1. **Información Personal**

Edita `index.html` y actualiza:

- Nombre y título profesional
- Descripción en la sección Hero
- Texto "Sobre mí"
- Email, GitHub, LinkedIn en Contacto

### 2. **Foto de Perfil**

Reemplaza `assets/img/Alejo.jpg` con tu foto:
- Formato: JPG o PNG
- Tamaño recomendado: 400x400px (cuadrada)
- Peso máximo: 500KB

### 3. **Proyectos**

Para cada proyecto en `index.html`:

```html
<div class="proyecto-card">
    <h3>Nombre del Proyecto</h3>
    <p>Descripción breve</p>
    <div class="proyecto-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
    </div>
    <div class="proyecto-links">
        <a href="URL_DEMO">Ver demo</a>
        <a href="URL_GITHUB">Código</a>
    </div>
</div>
```

### 4. **Imágenes de Proyectos** (Opcional)

Si quieres agregar capturas de pantalla:

1. Guarda las imágenes en `assets/img/`
2. Reemplaza el `proyecto-placeholder` con:

```html
<div class="proyecto-img">
    <img src="assets/img/proyecto1.jpg" alt="Proyecto 1">
</div>
```

### 5. **Colores del Tema**

Edita las variables en `css/style.css`:

```css
:root {
    --primary-color: #9d4edd;      /* Color principal (morado) */
    --secondary-color: #3a86ff;    /* Color secundario (azul) */
    --text-muted: #cbd5e1;         /* Texto secundario */
}
```

### 6. **CV (Currículum)**

1. Sube tu CV en PDF a la raíz del proyecto: `cv.pdf`
2. En `index.html` actualiza el botón:

```html
<button class="btn-nav" onclick="window.open('cv.pdf', '_blank')">Mi CV</button>
```

---

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear el Repositorio

1. Ve a [github.com](https://github.com) y haz login
2. Click en "**New repository**" (botón verde)
3. **Nombre del repositorio**: `alejo-rh.github.io` (exactamente así, con tu usuario)
4. **Descripción**: "Mi portfolio personal"
5. Marca como "**Public**"
6. **NO** marques "Add a README file"
7. Click en "**Create repository**"

### Paso 2: Subir los Archivos

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Portfolio inicial - Alejandro Rodriguez"

# Cambiar a la rama main
git branch -M main

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git

# Subir los archivos
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en "**Settings**" (arriba a la derecha)
3. En el menú lateral, click en "**Pages**"
4. En "**Source**", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en "**Save**"
6. Espera 1-2 minutos

### Paso 4: ¡Visita tu Página!

Tu portfolio estará disponible en:
```
https://TU-USUARIO.github.io
```

Por ejemplo: `https://alejo-rh.github.io`

---

## 🔄 Actualizar el Portfolio

Cuando hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios se verán en 1-2 minutos en tu página.

---

## 📝 Checklist Antes de Publicar

- [ ] Actualicé mi nombre y título profesional
- [ ] Cambié la foto por la mía
- [ ] Actualicé la sección "Sobre mí"
- [ ] Agregué mis proyectos reales
- [ ] Actualicé los enlaces de contacto (email, GitHub, LinkedIn)
- [ ] Subí mi CV
- [ ] Probé todos los enlaces
- [ ] Revisé en mobile (responsive)

---

## 💡 Tips

- **SEO**: Cambia el `<title>` en `index.html` con tu nombre
- **Performance**: Comprime las imágenes antes de subirlas
- **Analytics**: Agrega Google Analytics si quieres ver visitas
- **Custom Domain**: Puedes usar un dominio personalizado en GitHub Pages

---

## 📱 Responsive

El portfolio está optimizado para:
- 📱 Móviles (320px - 768px)
- 📋 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

---

## 🤝 Contribuir

Si encuentras algún bug o tienes sugerencias:

1. Abre un **Issue**
2. O envíame un mensaje directo

---

## 📄 Licencia

Este proyecto está bajo licencia libre. Puedes usarlo, modificarlo y compartirlo.

---

## 🎉 Créditos

**Diseñado y desarrollado por Alejandro Rodriguez**

- 🌐 [GitHub](https://github.com/alejo-rh)
- 💼 [LinkedIn](https://linkedin.com/in/tu-perfil)
- 📧 Email: tu-email@ejemplo.com

---

**¡Éxito con tu portfolio! 🚀💜**
