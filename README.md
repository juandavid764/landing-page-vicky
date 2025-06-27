# Landing Page - Vicky | WeKall

Una landing page moderna y profesional para presentar a **Vicky**, el asistente conversacional inteligente de WeKall.

## 🚀 Características

- **React 19** con Vite como bundler
- **Tailwind CSS** para estilos modernos y responsivos
- **Componentes modulares** siguiendo buenas prácticas
- **Diseño responsive** optimizado para todos los dispositivos
- **Paleta de colores corporativa** de WeKall
- **Animaciones suaves** y efectos hover
- **Formulario de contacto** funcional
- **SEO optimizado** y accesible

## 🎨 Paleta de Colores

La landing page utiliza una paleta de colores cuidadosamente seleccionada para transmitir profesionalismo y modernidad:

- **`#E1DEE9`** - Color claro (fondos suaves, secciones claras)
- **`#461F9C`** - Color primario (encabezados, botones principales)
- **`#55D39E`** - Color acento (detalles, iconos, highlights)
- **`#816CAF`** - Color secundario (fondos secundarios, secciones alternas)
- **`#393939`** - Color para textos fuertes o contrastes
- **`#9882CC`** - Color complementario (elementos decorativos, hover, etc.)

## 📝 Prompt de Creación

Esta landing page fue creada utilizando el siguiente prompt:

```
Tengo un proyecto React creado con Vite y Tailwind CSS ya instalado.

Quiero que generes el código de una landing page para presentar a Vicky, el asistente conversacional de voz de WeKall.

**Requisitos:**

✅ Crear los componentes en React (pueden estar todos en un solo archivo o separados).

✅ Incluir las siguientes secciones en la página:

1. Qué es Vicky y cómo funciona:
   - Breve explicación de Vicky y su funcionamiento.

2. Casos de uso:
   - Ventas
   - Cobranzas
   - Servicio al cliente

3. Beneficios y diferenciadores:
   - Qué hace único a Vicky frente a otras soluciones.

4. Llamado a la acción (CTA):
   - Botón o formulario para solicitar demo o dejar datos de contacto.

✅ Texto de contexto para redactar el contenido de la landing page:

- Soporte al cliente: automatiza respuestas a preguntas frecuentes, reduciendo la carga de trabajo.
- Gestión de citas y reservas: automatiza la programación de citas, mejora eficiencia.
- Encuestas y feedback: realiza encuestas post-interacción para retroalimentación.
- Asistencia en procesos de compra: ayuda en navegación y facilita la compra.
- Gestión de emergencias: ofrece respuestas rápidas en situaciones críticas.
- Automatización de tareas administrativas: libera al personal de tareas rutinarias.

✅ Diseño:

- Usar Tailwind CSS para el estilo.
- Diseño limpio, profesional y moderno.
- Orientado a conversión (copy breve, claro y persuasivo).
- Debe ser responsive.
- Aplicar la siguiente paleta de colores en el diseño:

    - #E1DEE9 → color claro (fondos suaves, secciones claras)
    - #461F9C → color primario (encabezados, botones principales)
    - #55D39E → color acento (detalles, iconos, highlights)
    - #816CAF → color secundario (fondos secundarios, secciones alternas)
    - #393939 → color para textos fuertes o contrastes
    - #9882CC → color complementario (elementos decorativos, hover, etc.)

Genera el código para integrarlo directamente en mi proyecto Vite.
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero con CTA principal
│   ├── WhatIsVicky.jsx # Explicación de Vicky y funcionamiento
│   ├── UseCases.jsx    # Casos de uso (Ventas, Cobranzas, Servicio)
│   ├── Benefits.jsx    # Beneficios y diferenciadores
│   ├── CTA.jsx         # Llamado a la acción con formulario
│   └── Footer.jsx      # Footer con información de contacto
├── App.jsx             # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales y Tailwind
```

## 🏗️ Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Vista previa de la build:**
   ```bash
   npm run preview
   ```

## 📱 Secciones de la Landing Page

### 1. **Header**
- Navegación con enlaces de anclaje
- Botón CTA para solicitar demo
- Responsive con menú móvil

### 2. **Hero**
- Presentación impactante de Vicky
- Simulación de chat conversacional
- Doble CTA (Demo + Ver cómo funciona)

### 3. **¿Qué es Vicky?**
- Explicación detallada del funcionamiento
- Características técnicas principales
- Visualización interactiva

### 4. **Casos de Uso**
- **Ventas**: Automatización del proceso comercial
- **Cobranzas**: Gestión eficiente de pagos
- **Servicio al Cliente**: Soporte 24/7
- Capacidades adicionales (citas, encuestas, etc.)

### 5. **Beneficios**
- Disponibilidad 24/7
- Reducción de costos operativos
- Escalabilidad infinita
- Comparativa con soluciones tradicionales
- Estadísticas de rendimiento

### 6. **CTA Final**
- Formulario de contacto completo
- Descripción de lo que incluye la demo
- Confirmación de envío exitoso

### 7. **Footer**
- Información de contacto
- Enlaces rápidos
- Redes sociales
- Botón flotante de Vicky

## 🎯 Optimizaciones Implementadas

- **Performance**: Componentes optimizados y lazy loading
- **SEO**: Meta tags y estructura semántica
- **Accesibilidad**: ARIA labels y navegación por teclado
- **UX**: Animaciones suaves y feedback visual
- **Mobile-first**: Diseño responsivo completo

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript ES6+** - Funcionalidades modernas

