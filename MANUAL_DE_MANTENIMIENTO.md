# 📘 Manual de Mantenimiento y Edición — Cusco Pathways

Este manual contiene las instrucciones técnicas detalladas y paso a paso para realizar modificaciones de imágenes, textos de paquetes, itinerarios, inclusiones, enlaces de contacto y redes sociales en el sitio web de **Cusco Pathways**, así como el procedimiento para probar y desplegar los cambios localmente y en producción.

---

## 1. 📂 Estructura del Proyecto

El sitio web está desarrollado con tecnologías web estándar (HTML5, Vanilla CSS3 y JavaScript ES6 modular), sin frameworks pesados ni dependencias complejas de compilación:

```text
CuscoPathways/
├── index.html              # Página principal (Hero, Destinos, Tours Destacados, Testimonios, Footer)
├── destination.html        # Plantilla dinámica de categorías de destino (Salkantay, Camino Inca, etc.)
├── tour-detail.html        # Plantilla dinámica de detalle de cada tour (Itinerario, Galería, Inclusiones)
├── reclamaciones.html      # Libro de Reclamaciones legal (Normativa Peruana)
├── MANUAL_DE_MANTENIMIENTO.md # Este manual de instrucciones
├── assets/
│   ├── documents/          # Documentos PDF (Brochures de los paquetes)
│   └── images/             # Archivos de imagen organizados por subcarpetas
│       ├── brand/          # Logos de la empresa y marcas de certificación (TripAdvisor, etc.)
│       ├── destinations/   # Fotos para las portadas de regiones/destinos
│       ├── tours/          # Fotos generales de paquetes turísticos
│       ├── salkantay/      # Fotos específicas de los paquetes Salkantay
│       ├── inca-trail/     # Fotos de los paquetes de Camino Inca
│       ├── sacred-valley/  # Fotos de los paquetes del Valle Sagrado y Cusco
│       ├── day-treks/      # Fotos de caminatas de 1 día (Humantay, Rainbow Mountain, Ausangate)
│       ├── city/           # Fotos de Cusco Ciudad
│       └── hero/           # Fondos de banners principales
├── scripts/
│   ├── data.js             # ⚠️ NÚCLEO DE DATOS: Objeto con toda la información de tours y destinos
│   ├── app.js              # Lógica de hidratación dinámica, modales, menú móvil y formularios
│   └── carousel.js         # Controladores de los carruseles interactivos
└── styles/
    ├── main.css            # Archivo maestro de importación de estilos
    ├── base.css            # Variables de diseño (colores, tipografía, espacios)
    ├── components.css      # Estilos de botones, navbar, footer, tarjetas y modales
    └── pages/              # Estilos específicos por página (home, destination, tour-detail, reclamaciones)
```

---

## 2. 🖼️ Cómo Cambiar o Agregar Imágenes (Paso a Paso)

### Paso 2.1: Formato y Optimización
1. **Formato Recomendado:** `.webp` con calidad del 80% al 85%. Este formato ofrece alta calidad visual con un tamaño de archivo reducido (generalmente menos de 300 KB por imagen), optimizando la carga rápida en dispositivos móviles.
2. **Formatos Alternativos:** También se pueden utilizar imágenes en `.jpg` o `.png`.

### Paso 2.2: Ubicación del Archivo
Guarde siempre las nuevas imágenes dentro de la subcarpeta correspondiente en `assets/images/`:
- Ejemplo: Para una nueva foto del tour Humantay Lake, guárdela en `assets/images/day-treks/`.

### Paso 2.3: Sistema de Prefijos Automáticos (`resolveImagePath`)
El archivo `scripts/data.js` incluye la función inteligente `resolveImagePath()`. Si nombra su imagen utilizando uno de los siguientes prefijos en su nombre de archivo, el sistema detectará automáticamente la carpeta correcta sin necesidad de escribir la ruta completa:

| Prefijo de Archivo | Carpeta Asignada Automáticamente | Ejemplo de Nombre de Archivo |
| :--- | :--- | :--- |
| `dest_` | `assets/images/destinations/` | `dest_salkantay.webp` |
| `tour_`, `mapi1d_`, `mapi2d_` | `assets/images/tours/` | `mapi1d_hero.webp` |
| `salkantay_`, `sk5d_`, `sk4d_`, `accom_` | `assets/images/salkantay/` | `sk5d_d1_domos_valle.webp` |
| `incatrail_`, `it4d_`, `it2d_`, `machu_` | `assets/images/inca-trail/` | `it4d_machupicchu_view.webp` |
| `sv_`, `chinchero_`, `moray_`, `maras_` | `assets/images/sacred-valley/` | `sv_chinchero_mirador.webp` |
| `humantay_`, `rainbow_`, `ausangate_`, `palcoyo_`, `pallay_` | `assets/images/day-treks/` | `humantay_lake_view.webp` |
| `city_` | `assets/images/city/` | `city_san_blas.webp` |
| `hero_`, `modal_` | `assets/images/hero/` | `hero_machupicchu.png` |
| `logoweb`, `logo`, `sacred_` | `assets/images/brand/` | `logo_white.webp` |

> 💡 **Nota:** Si la imagen no utiliza prefijo o está en una carpeta personalizada, puede escribir la ruta relativa completa: `assets/images/mi-carpeta/mi-imagen.webp`.

---

## 3. 📝 Cómo Cambiar la Información de los Paquetes (`scripts/data.js`)

TODA la información referente a títulos, itinerarios, galerías, inclusiones y características de los tours se administra exclusivamente en el archivo `scripts/data.js`.

### Paso 3.1: Identificar la Clave del Tour
Abra `scripts/data.js` y busque la clave correspondiente dentro del objeto `toursData`:
- **Salkantay:** `'salkantay-premium'`, `'salkantay-classic'`, `'salkantay-short'`, `'salkantay-celestial-2d'`
- **Camino Inca:** `'incatrail-classic'`, `'incatrail-short'`
- **Valle Sagrado y Machu Picchu:** `'cusco-cultural'`, `'valley-traditional'`, `'valley-super'`, `'valley-maras'`, `'valley-machupicchu-2d'`, `'machupicchu-fullday'`
- **Caminatas de 1 Día (Day Treks):** `'humantay-classic'`, `'rainbow-classic'`, `'ausangate-7lakes'`, `'palcoyo'`, `'pallay-punchu'`

---

### Paso 3.2: Ejemplos Concretos de Edición en `scripts/data.js`

#### A. Cambiar Nombre, Subtítulo y Datos Principales
```javascript
'salkantay-premium': {
  title: 'SALKANTAY TREK: THE PREMIUM ANDEAN PATHWAY — 5 DAYS',
  tagline: 'Glamping & Luxury',
  subtitle: 'All the grandeur of the Classic, elevated',
  duration: '5 days / 4 nights',
  groupSize: 'Max. 12 passengers', // Cambiar tamaño máximo de grupo
  ...
}
```

#### B. Cambiar la Imagen de la Tarjeta y del Banner Superior (Hero)
- `image`: Es la imagen que se muestra en las tarjetas de listas y carruseles.
- `heroImage`: Es la imagen de fondo de gran tamaño que se muestra en el banner superior al ingresar a la página del tour.

```javascript
  image: 'sk5d_d1_domos_valle.webp',
  heroImage: 'sk5d_d1_domos_vialactea.webp',
```

#### C. Editar o Crear la Tarjeta de Galería (Filtrada por Ubicación o Día)
Cada elemento de la galería se define dentro del arreglo `gallery`. Puede asignarle una ubicación (`location`) para que el sistema genere automáticamente los botones de filtro interactivos:

```javascript
  gallery: [
    { url: 'sv_chinchero_mirador.webp', title: 'Mirador de Chinchero', location: 'Chinchero' },
    { url: 'sv_moray_terrazas.webp', title: 'Terrazas Agrícolas de Moray', location: 'Moray' },
    { url: 'sv_maras_salineras.webp', title: 'Salineras de Maras', location: 'Maras' }
  ],
```

#### D. Modificar el Itinerario Día por Día
El itinerario es un arreglo de objetos `itinerary`. Cada día contiene título, descripción y estadísticas de caminata (`stats`):

```javascript
  itinerary: [
    {
      day: 'DAY 1',
      title: 'Cusco – Mollepata – Soraypampa',
      desc: 'Salida temprano desde Cusco hacia Mollepata donde disfrutaremos de un desayuno andino...',
      stats: { distance: '12 km / 7.4 miles', time: '6 hours', altitude: '3,900 m / 12,795 ft' }
    },
    {
      day: 'DAY 2',
      title: 'Soraypampa – Salkantay Pass – Chaullay',
      desc: 'Ascenso hacia el punto más alto de la ruta...',
      stats: { distance: '22 km / 13.6 miles', time: '9 hours', altitude: '4,630 m / 15,190 ft' }
    }
  ],
```

#### E. Modificar Inclusiones, Exclusiones y Lista de Equipaje
Modifique los arreglos de texto `inclusions`, `exclusions` y `packingList`:

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
  ],
  packingList: [
    'Original passport',
    'Daypack (25 to 30L)',
    'Trekking boots'
  ]
```

---

## 4. 📞 Cómo Modificar Teléfonos, Redes Sociales y Correos

Para actualizar los datos de contacto corporativos a nivel global:

### 4.1. Enlaces en Archivos HTML (`index.html`, `destination.html`, `tour-detail.html`, `reclamaciones.html`)
Busque y actualice las siguientes referencias en la barra superior (topbar) y en el pie de página (footer):

- **Facebook:** `https://www.facebook.com/cuscopathwaysadventures/`
- **Instagram:** `https://www.instagram.com/cuscopathways`
- **WhatsApp:** `https://wa.me/51967573231`
- **Teléfono directo:** `+51 967 573 231` (enlace `<a href="tel:+51967573231">`)
- **Correo Electrónico:** `info@cuscopathways.com` (enlace `<a href="mailto:info@cuscopathways.com">`)

### 4.2. Lógica del Formulario *Enquire Now* (`scripts/app.js`)
El formulario del modal de reservas procesa los campos completados por el cliente y genera un enlace directo `mailto:` hacia el correo corporativo. Para modificar la plantilla de correo o el destinatario, revise la función `initContactModal()` en `scripts/app.js`:

```javascript
const recipientEmail = 'info@cuscopathways.com';
const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

---

## 5. 💻 Guía de Pruebas y Verificación Local (Paso a Paso)

Antes de publicar cualquier cambio en internet, es indispensable realizar una verificación local para asegurar que no existan enlaces rotos o errores visuales.

### Paso 5.1: Iniciar el Servidor de Pruebas Local

1. Abra una consola de comandos (Terminal, PowerShell o CMD) en la carpeta del proyecto (`c:\Users\SEBASTIAN\Desktop\CuscoPathways`).
2. Ejecute el comando según su entorno:

   - **Opción A (Python - Recomendado):**
     ```bash
     python -m http.server 8080
     ```
   - **Opción B (Node.js):**
     ```bash
     npx http-server -p 8080
     ```

3. El servidor iniciará e indicará que está escuchando en el puerto `8080`.

---

### Paso 5.2: Verificación en el Navegador Web

1. Abra su navegador (Chrome, Edge, Firefox, Safari) e ingrese a la dirección:
   `http://localhost:8080`

2. ⚠️ **MUY IMPORTANTE — Forzar Recarga Limpia (Limpieza de Caché):**
   Los navegadores suelen guardar versiones antiguas de archivos JS, CSS e imágenes en caché. Para asegurarse de estar viendo los cambios más recientes:
   - En Windows / Linux: Presione **`Ctrl` + `F5`** (o `Ctrl` + `Shift` + `R`).
   - En Mac: Presione **`Cmd` + `Shift` + `R`.

---

### Paso 5.3: Lista de Verificación (Checklist de Pruebas)

Al revisar las páginas localmente, verifique los siguientes puntos:

- [ ] **Imágenes:** Navegue por la portada, galerías e itinerarios. Verifique que todas las fotos carguen correctamente y no aparezca el ícono de imagen rota.
- [ ] **Consola de Errores (F12):** Presione `F12` en su navegador para abrir las Herramientas de Desarrollo y seleccione la pestaña **Console**. Verifique que no existan errores en rojo (como errores `404 Not Found` de imágenes faltantes o sintaxis JavaScript).
- [ ] **Pestañas del Tour:** Ingrese a un tour en `tour-detail.html?tour=salkantay-premium` y haga clic en las pestañas (*Overview*, *Itinerary*, *Inclusions*, *Before You Go*, *Packing List*, *Accommodation*). Verifique que el contenido cambie suavemente.
- [ ] **Modal de Consulta (*Enquire Now*):** Haga clic en el botón *Enquire Now*, llene el formulario de prueba y haga clic en *Send Inquiry*. Verifique que abra su aplicación de correo con los datos redactados correctamente hacia `info@cuscopathways.com`.
- [ ] **Prueba Responsiva (Móviles):** En la ventana del navegador o en F12 (modo dispositivo), reduzca el ancho a pantalla de celular (< 768px). Verifique que el menú hamburguesa abra correctamente y la navegación sea fluida.

---

## 6. 🚀 Publicación y Despliegue en Producción (Git & GitHub)

Una vez completadas y aprobadas las pruebas locales, guarde y publique los cambios en el repositorio oficial de GitHub:

1. Abra la terminal en la carpeta del proyecto.
2. Agregue los archivos modificados:
   ```bash
   git add .
   ```
3. Registre un mensaje descriptivo del cambio realizado:
   ```bash
   git commit -m "Actualización de fotos e itinerarios de los paquetes"
   ```
4. Suba los cambios a la rama principal de GitHub:
   ```bash
   git push origin main
   ```

---
*Manual técnico elaborado para la entrega del proyecto Cusco Pathways.*
