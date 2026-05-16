# Aplaka - Reformas Integrales

Web sencilla y moderna para una empresa de reformas integrales especializada en:
- Placa de yeso laminado
- Tabiques
- Trasdosados
- Techos continuos
- Techos registrables
- Insonorización

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

## Cómo cambiar las fotos

Las fotos se encuentran en el archivo `src/App.jsx`. Busca las etiquetas `<img>` y cambia el atributo `src` por la ruta de tus propias fotos.

### Ubicaciones de las fotos:

1. **Hero Section** (imagen de fondo principal):
   - Línea ~45: `src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"`

2. **Servicio - Placa de Yeso Laminado**:
   - Línea ~73: `src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80"`

3. **Servicio - Tabiques**:
   - Línea ~87: `src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"`

4. **Servicio - Trasdosados**:
   - Línea ~101: `src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"`

5. **Servicio - Techos Continuos**:
   - Línea ~115: `src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"`

6. **Servicio - Techos Registrables**:
   - Línea ~129: `src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80"`

7. **Servicio - Insonorización**:
   - Línea ~143: `src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80"`

8. **Sección Nosotros**:
   - Línea ~176: `src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"`

### Cómo añadir tus propias fotos:

1. Crea una carpeta `public/images` en la raíz del proyecto
2. Añade tus fotos allí
3. Cambia las rutas en `src/App.jsx` de:
   ```
   src="https://images.unsplash.com/..."
   ```
   a:
   ```
   src="/images/tu-foto.jpg"
   ```

## Personalización

- **Colores**: Editar `tailwind.config.js` para cambiar la paleta de colores
- **Contacto**: Editar el teléfono, email y ubicación en `src/App.jsx` (sección contacto)
- **Texto**: Todo el contenido está en `src/App.jsx` y es fácil de modificar

## Tecnologías

- React 18
- Vite
- TailwindCSS
- Lucide React (iconos)
