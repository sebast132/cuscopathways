# 📘 Manual de Mantenimiento y Edición — Cusco Pathways

Este manual contiene las instrucciones detalladas para realizar modificaciones de imágenes, información de paquetes, precios, itinerarios y contactos en el sitio web de **Cusco Pathways**. Está diseñado tanto para desarrolladores como para editores que utilicen asistentes de código con Inteligencia Artificial (como Antigravity, Cursor, Copilot o ChatGPT).

---

## 1. 📂 Estructura del Proyecto

El sitio web está construido de forma modular y ligera (HTML5, Vanilla CSS3 y JavaScript ES6):

```text
CuscoPathways/
├── index.html              # Página de inicio (Hero, Destinos, Tours Destacados, Testimonios, Footer)
├── destination.html        # Plantilla dinámica de categorías de destino
├── tour-detail.html        # Plantilla dinámica de detalle de tour (Itinerario, Galería, Precios)
├── reclamaciones.html      # Libro de Reclamaciones legal (Normativa Peruana)
├── MANUAL_DE_MANTENIMIENTO.md # Este manual de instrucciones
├── assets/
│   └── images/             # Todas las imágenes organizadas por categoría
│       ├── brand/          # Logos y gráficos de marca
│       ├── destinations/   # Fotos de portadas de destinos
│       ├── tours/          # Fotos de paquetes turísticos
│       ├── salkantay/      # Fotos específicas de Salkantay
│       ├── inca-trail/     # Fotos de Camino Inca
│       ├── sacred-valley/  # Fotos del Valle Sagrado
│       ├── day-treks/      # Fotos de caminatas de 1 día (Humantay, Rainbow, Ausangate)
│       └── hero/           # Fondos de hero y banners
├── scripts/
│   ├── data.js             # ⚠️ NÚCLEO DE DATOS: Todos los tours, precios, galerías e itinerarios
│   ├── app.js              # Lógica de hidratación dinámica, modales y galerías
│   └── carousel.js         # Carruseles interactivos
└── styles/
    ├── main.css            # Archivo maestro de estilos
    ├── base.css            # Variables de diseño, fuentes y resets
    ├── components.css      # Estilos de botones, navbar, footer y modales
    └── pages/              # Estilos específicos por página (home, destination, tour-detail)
```

---

## 2. 🖼️ Cómo Cambiar o Agregar Imágenes

### Paso 1: Formato y Ubicación
1. **Formato recomendado:** `.webp` (Calidad 85%) para optimizar la velocidad de carga. También soporta `.jpg` y `.png`.
2. Guarde las nuevas imágenes en la carpeta adecuada dentro de `assets/images/` (ejemplo: `assets/images/day-treks/`).

### Paso 2: Sistema de Prefijos Automáticos (`resolveImagePath`)
El archivo `scripts/data.js` cuenta con un resolvedor inteligente de rutas. Si el nombre de la imagen tiene uno de estos prefijos, el sistema sabrá automáticamente en qué carpeta buscarla:

| Prefijo de archivo | Carpeta de origen asignada automáticamente |
| :--- | :--- |
| `dest_` | `assets/images/destinations/` |
| `tour_`, `mapi1d_`, `mapi2d_` | `assets/images/tours/` |
| `salkantay_`, `sk5d_`, `sk4d_`, `accom_` | `assets/images/salkantay/` |
| `incatrail_`, `it4d_`, `it2d_`, `machu_` | `assets/images/inca-trail/` |
| `sv_`, `chinchero_`, `moray_`, `maras_` | `assets/images/sacred-valley/` |
| `humantay_`, `rainbow_`, `ausangate_`, `palcoyo_`, `pallay_` | `assets/images/day-treks/` |
| `city_` | `assets/images/city/` |
| `hero_`, `modal_` | `assets/images/hero/` |
| `logoweb`, `logo`, `sacred_` | `assets/images/brand/` |

> 💡 **Nota:** Si la imagen no usa prefijo, simplemente puede escribir la ruta completa: `assets/images/mi-carpeta/imagen.webp`.

---

## 3. 📝 Cómo Cambiar Información de los Paquetes (Textos, Precios, Galerías)

TODA la información de los tours se edita exclusivamente en el archivo `scripts/data.js` dentro del objeto `toursData`.

### Buscar el Paquete a Modificar
Abra `scripts/data.js` y busque la clave del paquete. Las claves son:
- Salkantay: `'salkantay-premium'`, `'salkantay-classic-5d'`, `'salkantay-classic-4d'`
- Camino Inca: `'incatrail-classic'`, `'incatrail-short'`
- Valle Sagrado: `'valley-traditional'`, `'valley-super'`, `'valley-maras'`, `'valley-machupicchu-2d'`
- Tours Cusco & Full Days: `'cusco-citytour'`, `'machupicchu-fullday'`, `'humantay-classic'`, `'rainbow-classic'`, `'ausangate-7lakes'`, `'palcoyo'`, `'pallay-punchu'`

---

### Ejemplos de Edición Frecuentes en `scripts/data.js`

#### A. Cambiar Imagen de Portada y Banner Principal
```javascript
'salkantay-premium': {
  title: 'SALKANTAY TREK PREMIUM 5 DAYS: THE CELESTIAL PATHWAY',
  image: 'sk5d_hero_celestial.webp',      // Imagen en tarjetas de listas
  heroImage: 'sk5d_hero_celestial.webp',  // Imagen del banner superior del tour
  ...
}
```

#### B. Cambiar Precios (En Grupo y Privado)
```javascript
  priceGroup: 'USD 650.00',    // Precio visible como "desde"
  pricePrivate: 'USD 850.00',  // Precio base privado
  
  // Tabla comparativa de precios privados según tamaño de grupo:
  privatePricing: [
    { size: '2 - 3 People', price: 'USD 850.00' },
    { size: '4 - 5 People', price: 'USD 750.00' },
    { size: '6+ People', price: 'USD 650.00' }
  ],
```

#### C. Cambiar la Galería de Fotos (Indexada por Ubicación o Día)
```javascript
  gallery: [
    { url: 'sv_chinchero_mirador.webp', title: 'Mirador de Chinchero', location: 'Chinchero' },
    { url: 'sv_moray_terrazas.webp', title: 'Terrazas Agrícolas de Moray', location: 'Moray' },
    { url: 'sv_maras_salineras.webp', title: 'Salineras de Maras', location: 'Maras' }
  ],
```

#### D. Editar el Itinerario Día por Día
```javascript
  itinerary: [
    {
      day: 'DAY 1',
      title: 'Cusco – Mollepata – Soraypampa',
      desc: 'Escriba aquí la descripción completa de las actividades del día...',
      stats: { distance: '12 km / 7.4 miles', time: '6 hours', altitude: '3,900 m / 12,795 ft' }
    },
    ...
  ]
```

#### E. Cambiar Inclusiones y Exclusiones
```javascript
  inclusions: [
    'Certified English/Spanish speaking guide',
    'Transport from hotel in Cusco to trailhead',
    'Entrance ticket to Machu Picchu'
  ],
  exclusions: [
    'First day breakfast and last day lunch',
    'Sleeping bag (available for rent)',
    'Tips for guide and porters'
  ]
```

---

## 4. 🤖 Guía para Realizar Cambios Usando un Editor con IA

Si la agencia utiliza un editor con Inteligencia Artificial (como **Antigravity**, **Cursor**, **VS Code + GitHub Copilot**, etc.), **no es necesario buscar manualmente las líneas de código**. Basta con pegar indicaciones simples en lenguaje natural en el chat de la IA.

### Prompts de Ejemplo Recomendados

#### 📸 Para Agregar o Reemplazar Imágenes:
> *"Tengo una nueva foto llamada `assets/images/tours/mapi1d_nueva_vista.webp`. Agrégala a la galería del paquete 'machupicchu-fullday' en `scripts/data.js` con el título 'Vista Panorámica de Machu Picchu' y ubicación 'Machu Picchu Citadel'."*

#### 💰 Para Actualizar Precios:
> *"En `scripts/data.js`, cambia el precio en grupo del paquete 'salkantay-premium' a USD 680.00 y actualiza la tabla de precios privados para 2-3 personas a USD 890.00."*

#### 🗺️ Para Cambiar un Itinerario:
> *"En el archivo `scripts/data.js`, actualiza la descripción del día 2 del tour 'rainbow-classic' para indicar que la caminata inicia a las 4:00 am en lugar de las 4:30 am."*

#### 📞 Para Cambiar Teléfonos, WhatsApp o Correos:
> *"Actualiza el número de teléfono y WhatsApp a +51 967 573 231 y el correo a info@cuscopathways.com en todas las páginas HTML y en el modal de contacto en `scripts/app.js`."*

---

## 5. 💻 Cómo Ejecutar y Probar el Proyecto Localmente

Para visualizar los cambios en vivo en una computadora local:

1. Abra una terminal en la carpeta raíz del proyecto.
2. Ejecute uno de los siguientes comandos:
   - Con **Python**:
     ```bash
     python -m http.server 8080
     ```
   - Con **Node.js / npx**:
     ```bash
     npx http-server -p 8080
     ```
3. Abra su navegador e ingrese a: `http://localhost:8080`

---

## 6. 🚀 Publicación y Despliegue (Git)

Una vez verificados los cambios en local, guarde y publique en el repositorio de GitHub:

```bash
git add .
git commit -m "Actualización de imágenes y precios del paquete Salkantay"
git push origin main
```

---
*Manual elaborado para la entrega del proyecto Cusco Pathways.*
