/* ══════════════════════════════════════════════════════════
   CUSCO PATHWAYS ADVENTURES — script.js (V2 - 3 Tier Architecture)
   ══════════════════════════════════════════════════════════ */

'use strict';

// ─── Destinations Dataset ────────────────────────────────────
const destinationsData = {
  'salkantay': {
    title: 'Salkantay',
    image: 'dest_salkantay.png',
    tours: ['salkantay-premium', 'salkantay-classic', 'salkantay-short']
  },
  'cusco-city': {
    title: 'Cusco City',
    image: 'dest_cuscocity.png',
    tours: ['cusco-cultural']
  },
  'sacred-valley': {
    title: 'Sacred Valley',
    image: 'dest_sacredvalley.png',
    tours: ['valley-traditional', 'valley-super', 'valley-maras']
  },
  'rainbow-mountain': {
    title: 'Rainbow Mountain & Ausangate',
    image: 'tour_rainbow.png',
    tours: ['rainbow-classic', 'ausangate-7lakes']
  },
  'humantay': {
    title: 'Humantay Lake',
    image: 'dest_humantay.png',
    tours: ['humantay-classic']
  }
};

// ─── Tours Dataset ───────────────────────────────────────────
const toursData = {
  'salkantay-premium': {
    title: 'Salkantay Trek Premium',
    tagline: 'Glamping & Luxury',
    subtitle: 'Una Caminata de Múltiples Experiencias',
    route: 'Cusco → Soraypampa → Salkantay Pass → Chaullay → Lucmabamba → Machu Picchu',
    duration: '5 Días / 4 Noches',
    difficulty: 'Moderado a Exigente',
    altitude: '4,630 m / 15,190 ft',
    groupSize: 'Hasta 16 personas',
    rating: '4.9 (1,243 reseñas)',
    image: 'dest_salkantay.png',
    heroImage: 'dest_salkantay.png',
    description: `Tras aclimatarse en la ciudad del Cusco, capital del majestuoso Imperio Inca, únete a nosotros en la versión premium de la ruta definitiva a Machu Picchu: el Salkantay Trek de 5 Días. Esta increíble ruta te llevará a la gloriosa Laguna Humantay, a las imponentes nieves del Salkantay —reconocido por National Geographic como uno de los 25 Mejores Treks del Mundo—, por los misteriosos bosques nubosos y hasta las puertas de la Selva Peruana.<br><br>Cada noche descansarás en la comodidad de nuestros exclusivos alojamientos de glamping, disfrutando de los platos más deliciosos preparados en plena Cordillera Andina. Nuestro guía experto y profesional te acompañará durante toda la ruta, compartiendo todo lo que sabe sobre la región, la cultura y la historia. ¡Únete a nosotros en esta apasionante aventura premium!`,
    highlights: [
      'Camina por una de las 25 mejores rutas de trekking del mundo según National Geographic.',
      'Disfruta de la mejor ruta alternativa a Machu Picchu rodeado de buena compañía.',
      'Contempla vistas impresionantes: montañas nevadas, valles cristalinos, cascadas, bosques nubosos y flora andina única.',
      'Experimenta el drástico cambio de paisaje y clima: de las nieves eternas a la jungla, todo en un mismo día.',
      'Duerme cómodamente rodeado de los sonidos de la naturaleza en nuestros exclusivos domos de glamping.',
      'Explora el mágico y místico Machu Picchu de la mano de nuestro guía experto, quien te revelará la historia de los Incas.',
    ],
    inclusions: [
      'Transporte privado Cusco – Soraypampa – Cusco en van 4x4',
      'Guía profesional bilingüe (español/inglés) certificado por MINCETUR',
      '4 noches en alojamientos premium (Sky Camp, Mountain Sky View, Super Jungle Domes, Hotel 3★)',
      'Desayuno, almuerzo y cena durante los 5 días del trek',
      'Cocinero de montaña privado y equipo de soporte de campaña',
      'Caballos de carga para el equipo de acampada (hasta 6 kg por persona)',
      'Bastones de trekking telescópicos para préstamo',
      'Botiqïn de primeros auxilios y oxígeno portátil de emergencia',
      'Tren Hidroeléctrica – Aguas Calientes (Expedición turista)',
      'Bus de subida y bajada Aguas Calientes – Machu Picchu',
      'Entrada a la ciudadela de Machu Picchu (Circuito 2)',
      'Entrada a la Laguna Humantay (Día 1)',
      'Masaje de relajación de 30 minutos en el campamento Soraypampa',
      'Snacks energéticos diarios (frutas, chocolates, nueces)',
      'Agua hervida purificada durante todo el recorrido',
    ],
    exclusions: [
      'Vuelos a/desde Cusco (cotizar por separado)',
      'Seguro de viaje o de asistencia en viajes (obligatorio — cotizar antes de reservar)',
      'Tren de regreso Aguas Calientes – Ollantaytambo – Cusco (costo adicional ~USD 80–50)',
      'Propinas para guía, cocinero y arrieros (recomendado: USD 10–15/día por persona)',
      'Gastos personales, souvenirs y compras en comunidades',
      'Bebidas alcohólicas y gaseosas (disponibles en tiendas del camino)',
      'Ropa y calzado de trekking personal',
      'Medicación personal y para el soroche (mal de altura)',
    ],
    packingList: [
      // Ropa
      'Mochila de día 30–40 litros con cubierta impermeable',
      'Botas de trekking impermeables con suela de agarre (obligatorio)',
      'Calcetines de lana merina o trekking (3–4 pares)',
      'Camisetas técnicas de secado rápido (3–4 unidades)',
      'Capa térmica de lana merina o polar (para noches)',
      'Chaqueta cortavientos/lluvia impermeable',
      'Pantalones de trekking convertibles (zip-off)',
      'Shorts o mallas para tramos cálidos (Día 3)',
      'Sombrero de ala ancha o gorra con protección UV',
      'Buff / pasamontañas multiusos',
      'Guantes impermeables ligeros',
      // Equipamiento
      'Gafas de sol con protección UV400 y patillas anchas',
      'Protector solar FPS 50+ (cara y labios)',
      'Repelente de insectos (necesario a partir del Día 3)',
      'Linterna frontal LED con pilas de repuesto',
      'Botella de agua de 1.5–2L o sistema de hidratación tipo mochila',
      'Pastillas purificadoras de agua (Micropur o similares)',
      // Salud
      'Medicación para el soroche (Acetazolamida — consultar médico)',
      'Analgesia y antiinflamatorios personales',
      'Emplastos y venda elástica para ampollas',
      // Varios
      'Snacks energéticos extra (barritas, frutos secos, geles)',
    ],
    accommodation: [
      { day: 'Día 1', name: 'Sky Camp', type: 'Domos de Lujo', image: 'accom_sky_camp.png', desc: 'Espectaculares domos transparentes geodésicos ubicados a 3,900m de altitud con vista directa al nevado Salkantay y al cielo estrellado. Cada domo cuenta con camas matrimoniales de colchón premium, ropa de cama tipo hotel, iluminación cálida y baño privado con agua caliente. Al caer la noche, la bóveda celeste se convierte en tu techo de estrellas.' },
      { day: 'Día 2', name: 'Mountain Sky View Camp', type: 'Domos Panorámicos', image: 'accom_mountain_sky.png', desc: 'Ubicados en un mirador natural privilegiado a 3,800m, estos domos panorámicos ofrecen vistas de 180° a los nevados de la Cordillera Vilcabamba. El interior incluye calefacción, edredones de alta montaña y servicio de cena preparada por nuestro chef. Un lugar donde el silencio de los Andes se convierte en la mejor melodía para descansar.' },
      { day: 'Día 3', name: 'Super Jungle Domes', type: 'Domos Ecológicos', image: 'accom_jungle_domes.png', desc: 'Inmersos entre la exuberante vegetación de la ceja de selva, estos domos ecológicos fusionan diseño sostenible y confort selvático. Cada unidad tiene terraza privada con hamacas, ducha de agua caliente y ventilación natural. Por la noche, el canto de las aves tropicales y el murmullo de los ríos te acompañarán en un sueño profundo y reparador.' },
      { day: 'Día 4', name: 'Hotel 3★ Aguas Calientes', type: 'Hotel Boutique', image: 'accom_hotel_aguas.png', desc: 'Hotel boutique moderno en el corazón de Aguas Calientes (Machu Picchu Pueblo), a solo 5 minutos caminando de la parada del bus a la ciudadela. Habitación doble con baño privado, TV, wifi, textiles andinos decorativos y desayuno buffet incluido. Ideal para descansar y prepararse para la gran visita del último día.' },
    ],
    pricePrivate: 'USD 1,250.00',
    priceGroup: 'USD 850.00',
    offer: 'Incluye masaje de 30 min en el campamento Soraypampa y acceso prioritario a la Laguna Humantay.',
    relatedTours: ['salkantay-classic', 'salkantay-short', 'humantay-classic'],
    itinerary: [
      { day: 'Día 1', title: 'Cusco – Mollepata – Challacancha – Laguna Humantay – Soraypampa', accommodation: 'Sky Camp (Domos de Lujo)', desc: 'Salida temprana desde Cusco en transporte privado (aprox. 3h) hacia Mollepata y Challacancha. Comenzamos la caminata de aclimatación hacia la espectacular Laguna Humantay (4,200m), de aguas turquesas rodeadas de glaciares. Regresamos a Soraypampa para pernoctar en nuestros exclusivos domos Sky Camp con vista directa al nevado Salkantay.' },
      { day: 'Día 2', title: 'Soraypampa – Soyroccocha – Paso Salkantay – Huayracmachay – Chaullay', accommodation: 'Mountain Sky View Camp', desc: 'El día más desafiante e impresionante del trek. Ascenso gradual hacia el Abra Salkantay a 4,630m, el punto más alto de la ruta. Vistas panorámicas de glaciares eternos y paisajes altiplánicos. Comenzamos el descenso hacia la zona de vegetación subtropical de Chaullay, donde el clima cambia radicalmente.' },
      { day: 'Día 3', title: 'Chaullay – Collpapampa – La Playa – Lucmabamba', accommodation: 'Super Jungle Domes', desc: 'Caminata por los exuberantes bosques de la ceja de selva. Cruzamos pequeñas comunidades donde la gente cultiva café, frutas tropicales y cocoa. Degustación de café orgánico en Lucmabamba. Noche en domos ecológicos inmersos en la naturaleza selvática.' },
      { day: 'Día 4', title: 'Lucmabamba – Llactapata – Hidroeléctrica – Aguas Calientes', accommodation: 'Hotel 3★ Aguas Calientes', desc: 'Ascenso al mirador arqueológico de Llactapata, donde tendremos nuestra primera vista privilegiada de la ciudadela de Machu Picchu. Descendemos hacia la central Hidroeléctrica y caminamos por las vías del tren hasta Aguas Calientes. Noche de descanso en hotel 3 estrellas.' },
      { day: 'Día 5', title: 'Aguas Calientes – Machu Picchu (Circuito 2) – Ollantaytambo – Cusco', accommodation: 'Retorno a Cusco', desc: 'Madrugamos para tomar el primer bus a la ciudadela de Machu Picchu. Tour guiado de 2.5 horas por el Circuito 2, el más completo y fotogénico. Tiempo libre para explorar. Retorno a Aguas Calientes y tren de regreso a Ollantaytambo. Transporte privado hasta Cusco.' }
    ]
  },
  'salkantay-classic': {
    title: 'Salkantay Trek Clásico',
    tagline: 'La Ruta Alternativa',
    duration: '5 Días / 4 Noches',
    image: 'dest_salkantay.png',
    pricePrivate: 'USD 900.00',
    priceGroup: 'USD 550.00',
    offer: null,
    itinerary: [
      { day: 'Día 1-4', title: 'Trek por los Andes', desc: 'Ruta tradicional acampando en tiendas de alta montaña cruzando el Abra Salkantay hasta llegar a Aguas Calientes.' },
      { day: 'Día 5', title: 'Machu Picchu', desc: 'Visita guiada a la ciudadela.' }
    ]
  },
  'salkantay-short': {
    title: 'Salkantay Short Trek',
    tagline: 'Aventura Expreso',
    duration: '4 Días / 3 Noches',
    image: 'dest_salkantay.png',
    pricePrivate: 'USD 750.00',
    priceGroup: 'USD 480.00',
    offer: null,
    itinerary: [
      { day: 'Día 1-3', title: 'Trek Acelerado', desc: 'Cubrimos mayor distancia diaria para llegar a Aguas Calientes en el tercer día.' },
      { day: 'Día 4', title: 'Machu Picchu', desc: 'Visita y retorno a Cusco.' }
    ]
  },
  'cusco-cultural': {
    title: 'Cusco Cultural City Tour',
    tagline: 'Historia Imperial',
    duration: 'Medio Día (4 Horas)',
    image: 'dest_cuscocity.png',
    pricePrivate: 'USD 120.00',
    priceGroup: 'USD 60.00',
    offer: null,
    itinerary: [
      { day: 'Día 1', title: 'City Tour', desc: 'Visita guiada a la Catedral del Cusco, el Templo del Sol (Qoricancha) y los complejos arqueológicos de Sacsayhuamán, Qenqo, Puca Pucara y Tambomachay.' }
    ]
  },
  'valley-traditional': {
    title: 'Valle Sagrado Tradicional',
    tagline: 'Ruta de los Incas',
    duration: 'Full Day',
    image: 'dest_sacredvalley.png',
    pricePrivate: 'USD 150.00',
    priceGroup: 'USD 80.00',
    offer: 'Almuerzo buffet andino incluido.',
    itinerary: [
      { day: 'Día 1', title: 'Pisac y Ollantaytambo', desc: 'Visita al mercado artesanal y ruinas de Pisac. Almuerzo en Urubamba. Tour por la fortaleza de Ollantaytambo.' }
    ]
  },
  'valley-super': {
    title: 'Super Valle Sagrado VIP',
    tagline: 'La Experiencia Completa',
    duration: 'Full Day',
    image: 'dest_sacredvalley.png',
    pricePrivate: 'USD 190.00',
    priceGroup: 'USD 110.00',
    offer: 'Incluye Chinchero y centro textil artesanal.',
    itinerary: [
      { day: 'Día 1', title: 'Chinchero, Maras, Moray, Ollantaytambo, Pisac', desc: 'Recorrido extensivo por todos los puntos clave del Valle Sagrado en un solo día.' }
    ]
  },
  'valley-maras': {
    title: 'Maras y Moray en Cuatrimotos',
    tagline: 'Adrenalina y Cultura',
    duration: 'Medio Día',
    image: 'dest_sacredvalley.png',
    pricePrivate: 'USD 110.00',
    priceGroup: 'USD 65.00',
    offer: null,
    itinerary: [
      { day: 'Día 1', title: 'Aventura ATVs', desc: 'Recorrido en cuatrimotos hacia los andenes circulares de Moray y las salineras de Maras.' }
    ]
  },
  'rainbow-classic': {
    title: 'Montaña de Colores (Vinicunca)',
    tagline: 'La Montaña Arcoíris',
    duration: 'Full Day',
    image: 'tour_rainbow.png',
    pricePrivate: 'USD 160.00',
    priceGroup: 'USD 90.00',
    offer: 'Incluye bastones de trekking.',
    itinerary: [
      { day: 'Día 1', title: 'Cusco - Cusipata - Vinicunca', desc: 'Caminata de 2 horas a más de 5,000 msnm para contemplar la icónica Montaña de Colores.' }
    ]
  },
  'ausangate-7lakes': {
    title: 'Ausangate y las 7 Lagunas',
    tagline: 'Trek de Altura',
    duration: 'Full Day',
    image: 'tour_rainbow.png', // Fallback, would ideally use ausangate
    pricePrivate: 'USD 180.00',
    priceGroup: 'USD 95.00',
    offer: 'Relajación en aguas termales de Pacchanta al finalizar.',
    itinerary: [
      { day: 'Día 1', title: 'Circuito 7 Lagunas', desc: 'Caminata escénica bordeando el majestuoso nevado Ausangate y visitando lagunas turquesas.' }
    ]
  },
  'humantay-classic': {
    title: 'Laguna Humantay',
    tagline: 'La Joya Turquesa',
    duration: 'Full Day',
    image: 'dest_humantay.png',
    pricePrivate: 'USD 140.00',
    priceGroup: 'USD 75.00',
    offer: null,
    itinerary: [
      { day: 'Día 1', title: 'Cusco - Soraypampa - Laguna', desc: 'Caminata empinada hacia la hermosa laguna glaciar a las faldas del nevado Humantay.' }
    ]
  },
  'inca-trail': {
    title: 'Inca Trail Classic',
    tagline: 'The Royal Path',
    duration: '4 Días',
    image: 'tour_incatrail.png',
    pricePrivate: 'USD 1,200.00',
    priceGroup: 'USD 870.00',
    offer: 'Incluye colchoneta inflable y bolsa de dormir premium.',
    itinerary: [
      { day: 'Día 1', title: 'Cusco a Wayllabamba', desc: 'Partimos temprano hacia el Km 82. Caminata suave a lo largo del río Urubamba.' },
      { day: 'Día 2', title: 'Wayllabamba a Pacaymayo', desc: 'Día desafiante. Ascenso al Paso de la Mujer Muerta a 4,215m.' },
      { day: 'Día 3', title: 'Pacaymayo a Wiñay Wayna', desc: 'Recorremos un tramo espectacular lleno de historia y sitios arqueológicos.' },
      { day: 'Día 4', title: 'Machu Picchu', desc: 'Llegada al Inti Punku al amanecer y tour guiado de la ciudadela.' }
    ]
  },
  'short-inca': {
    title: 'Short Inca Trail',
    tagline: 'The Explorer Path',
    duration: '2 Días',
    image: 'tour_shortinca.png',
    pricePrivate: 'USD 750.00',
    priceGroup: 'USD 595.00',
    offer: null,
    itinerary: [
      { day: 'Día 1', title: 'Cusco a Aguas Calientes vía Wiñay Wayna', desc: 'Caminata desde el Km 104, visitando Wiñay Wayna y llegando a Inti Punku por la tarde.' },
      { day: 'Día 2', title: 'Machu Picchu a Cusco', desc: 'Tour completo en el santuario y retorno a Cusco.' }
    ]
  },
  'pallay-punchu': {
    title: 'Pallay Punchu Trek',
    tagline: 'The Woven Path',
    duration: 'Full Day',
    image: 'tour_pallaypunchu.png',
    pricePrivate: 'USD 190.00',
    priceGroup: 'USD 140.00',
    offer: 'Incluye bastones de trekking.',
    itinerary: [
      { day: 'Día 1', title: 'Apu Tacllo (Pallay Punchu)', desc: 'Caminata ascendente exigente hacia las cumbres de Pallay Punchu con vistas a la laguna Langui Layo.' }
    ]
  },
  'palcoyo': {
    title: 'Palcoyo Mountain',
    tagline: 'The Scenic Path',
    duration: 'Full Day',
    image: 'tour_palcoyo.png',
    pricePrivate: 'USD 180.00',
    priceGroup: 'USD 130.00',
    offer: null,
    itinerary: [
      { day: 'Día 1', title: 'Cordillera Palcoyo', desc: 'Caminata suave para observar tres montañas de colores y el bosque de piedras.' }
    ]
  }
};


// ─── Navbar & UI Utilities ───────────────────────────────────
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 40;
        navbar.classList.toggle('scrolled', scrolled);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
})();

// ─── Destination Page Hydration (Vista 2) ────────────────────
(function hydrateDestinationPage() {
  const destList = document.getElementById('dest-tours-list');
  if (!destList) return; // Only run on destination.html

  const urlParams = new URLSearchParams(window.location.search);
  const destKey = urlParams.get('dest');
  const dest = destinationsData[destKey];

  if (!dest) {
    destList.innerHTML = '<p style="color:var(--gold);">Destino no encontrado.</p>';
    return;
  }

  // Update hero
  const banner = document.getElementById('dest-banner-img');
  if (banner) banner.src = dest.image;
  const title = document.getElementById('dest-title-display');
  if (title) title.textContent = dest.title;

  // Render horizontal tour cards
  destList.innerHTML = '';
  dest.tours.forEach(tourId => {
    const tour = toursData[tourId];
    if(!tour) return;
    
    destList.innerHTML += `
      <a href="tour-detail.html?tour=${tourId}&dest=${destKey}" class="featured-card reveal" style="text-decoration:none;">
        <div class="fc-image">
          <img src="${tour.image}" alt="${tour.title}" />
        </div>
        <div class="fc-content">
          <div class="fc-meta-top">
            <span>🕒 ${tour.duration}</span>
            <span>⛰️ ${tour.tagline}</span>
          </div>
          <h3 class="fc-title" style="margin-bottom: 12px;">${tour.title}</h3>
          <p class="fc-desc" style="flex: 1;">${tour.itinerary[0].desc}</p>
          <div class="fc-footer">
            <div class="fc-footer-left">
              <span>🏷️ ${tour.priceGroup}</span>
            </div>
            <div class="fc-footer-right">
              <span class="btn-gold-solid" style="padding: 10px 20px; font-size: 10px; border-radius: 4px;">Ver Itinerario</span>
            </div>
          </div>
        </div>
      </a>
    `;
  });
})();

// ─── Tour Detail Hydration (Vista 3) ───────────────────────────────────
(function hydrateTourDetailPage() {
  const itineraryContainer = document.getElementById('itinerary-list-container');
  if (!itineraryContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tourKey = urlParams.get('tour');
  const destKey = urlParams.get('dest');
  const tour = toursData[tourKey];

  if (!tour) {
    itineraryContainer.innerHTML = '<p style="color:var(--gold);">Tour no encontrado.</p>';
    return;
  }

  // ── Page Title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) pageTitle.textContent = `${tour.title} — Cusco Pathways Adventures`;

  // ── Breadcrumb
  const destLink = document.getElementById('breadcrumb-dest-link');
  if (destLink && destKey) {
    destLink.href = `destination.html?dest=${destKey}`;
    destLink.textContent = destinationsData[destKey]?.title || 'Destino';
  }
  const breadcrumbName = document.getElementById('breadcrumb-tour-name');
  if (breadcrumbName) breadcrumbName.textContent = tour.title;

  // ── Back Button
  const backBtn = document.getElementById('back-to-dest');
  if (backBtn && destKey) {
    backBtn.href = `destination.html?dest=${destKey}`;
    backBtn.innerHTML = '&larr; Volver a ' + (destinationsData[destKey]?.title || 'Destino');
  }

  // ── Hero
  const banner = document.getElementById('tour-banner-img');
  if (banner) banner.src = tour.image;
  const titleEl = document.getElementById('tour-title-display');
  if (titleEl) titleEl.textContent = tour.title;
  const catEl = document.getElementById('tour-category-tag');
  if (catEl) catEl.textContent = tour.tagline;

  // ── Hero Meta Badges
  const metaDuration = document.getElementById('meta-duration');
  if (metaDuration) metaDuration.textContent = tour.duration || '';
  const metaAlt = document.getElementById('meta-altitude');
  if (metaAlt) metaAlt.textContent = tour.altitude || '';
  const metaGrp = document.getElementById('meta-group');
  if (metaGrp) metaGrp.textContent = tour.groupSize || '';
  const metaDiff = document.getElementById('meta-difficulty');
  if (metaDiff) metaDiff.textContent = tour.difficulty || '';
  const metaRat = document.getElementById('meta-rating');
  if (metaRat) metaRat.textContent = tour.rating || '';

  // ── Overview: Description
  const descSubtitle = document.getElementById('desc-subtitle');
  if (descSubtitle) descSubtitle.textContent = tour.subtitle || tour.title;
  const descRoute = document.getElementById('desc-route');
  if (descRoute) descRoute.textContent = tour.route || '';
  const descBody = document.getElementById('desc-body');
  if (descBody) descBody.innerHTML = tour.description || '';

  // ── Highlights
  const highlightsContainer = document.getElementById('highlights-container');
  if (highlightsContainer && tour.highlights) {
    highlightsContainer.innerHTML = tour.highlights.map(h => `
      <div class="highlight-item">
        <span class="highlight-star">★</span>
        <span class="highlight-text">${h}</span>
      </div>
    `).join('');
  }

  // ── Sidebar
  const priceDisplay = document.getElementById('booking-price-display');
  if (priceDisplay) priceDisplay.textContent = `Desde ${tour.priceGroup}`;
  const durDisplay = document.getElementById('booking-duration-display');
  if (durDisplay) durDisplay.textContent = tour.duration;
  const diffDisplay = document.getElementById('booking-difficulty-display');
  if (diffDisplay) diffDisplay.textContent = tour.difficulty || '';
  const altDisplay = document.getElementById('booking-altitude-display');
  if (altDisplay) altDisplay.textContent = tour.altitude || '';
  const grpDisplay = document.getElementById('booking-group-display');
  if (grpDisplay) grpDisplay.textContent = tour.groupSize || '';

  // Pricing table
  const tableBody = document.getElementById('pricing-table-body');
  if (tableBody) {
    tableBody.innerHTML = `
      <tr><td>Servicio Grupal</td><td>${tour.priceGroup}</td></tr>
      <tr><td>Servicio Privado</td><td>${tour.pricePrivate}</td></tr>
    `;
  }

  // Pricing section price displays
  const pgDisplay = document.getElementById('price-group-display');
  if (pgDisplay) pgDisplay.textContent = tour.priceGroup;
  const ppDisplay = document.getElementById('price-private-display');
  if (ppDisplay) ppDisplay.textContent = tour.pricePrivate;

  // ── Offers
  const offersBox = document.getElementById('offers-module-container');
  if (offersBox && tour.offer) {
    offersBox.innerHTML = `
      <div class="offers-box">
        <div class="offers-icon">🎁</div>
        <div class="offers-content">
          <h4>Beneficio Especial</h4>
          <p>${tour.offer}</p>
        </div>
      </div>
    `;
  }

  // ── WhatsApp Buttons
  const waText = encodeURIComponent(`Hola Cusco Pathways, deseo información y reservar el tour: ${tour.title}`);
  const waUrl = `https://wa.me/51984000000?text=${waText}`;
  ['book-tour-button', 'book-group-btn', 'book-private-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) { btn.href = waUrl; btn.target = '_blank'; }
  });

  // ── Itinerary (Day Blocks)
  itineraryContainer.innerHTML = '';
  tour.itinerary.forEach((item, index) => {
    const isGold = index % 2 !== 0;
    const block = document.createElement('div');
    block.className = 'itinerary-day-block reveal';
    block.innerHTML = `
      <div class="idb-label ${isGold ? 'gold' : ''}">${item.day}</div>
      <div class="idb-content">
        <div class="idb-title">${item.title}</div>
        ${item.accommodation ? `<div class="idb-accommodation">🏡 ${item.accommodation}</div>` : ''}
        <div class="idb-desc">${item.desc}</div>
      </div>
    `;
    itineraryContainer.appendChild(block);
  });

  // ── Inclusions
  const inclList = document.getElementById('inclusions-list');
  if (inclList && tour.inclusions) {
    inclList.innerHTML = tour.inclusions.map(i => `
      <div class="check-item" style="margin-bottom: 12px;">
        <div class="check-icon">✓</div>
        <span>${i}</span>
      </div>
    `).join('');
  }
  const exclList = document.getElementById('exclusions-list');
  if (exclList && tour.exclusions) {
    exclList.innerHTML = tour.exclusions.map(e => `
      <div class="check-item" style="margin-bottom: 12px;">
        <div class="cross-icon">×</div>
        <span>${e}</span>
      </div>
    `).join('');
  }

  // ── Packing List
  const packingContainer = document.getElementById('packing-list-container');
  if (packingContainer && tour.packingList) {
    const categories = [
      { label: 'Ropa e Indumentaria', icon: '👕', items: tour.packingList.slice(0, 11) },
      { label: 'Equipamiento Esencial', icon: '🔦', items: tour.packingList.slice(11, 17) },
      { label: 'Salud & Bienestar', icon: '💊', items: tour.packingList.slice(17, 20) },
      { label: 'Alimentación Extra', icon: '🍫', items: tour.packingList.slice(20) },
    ];
    packingContainer.style.display = 'block';
    packingContainer.innerHTML = categories.map(cat => `
      <div class="packing-category">
        <div class="packing-cat-header">
          <span class="packing-cat-icon">${cat.icon}</span>
          <span class="packing-cat-label">${cat.label}</span>
        </div>
        ${cat.items.map(item => `
          <div class="check-item" style="margin-bottom: 10px;">
            <div class="check-icon" style="background: var(--gold); flex-shrink:0;">✓</div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // ── Accommodation
  const accomContainer = document.getElementById('accommodation-container');
  if (accomContainer && tour.accommodation) {
    accomContainer.innerHTML = tour.accommodation.map(a => `
      <div class="accom-card reveal">
        ${a.image ? `<div class="accom-card-img"><img src="${a.image}" alt="${a.name}" /></div>` : ''}
        <div class="accom-card-header">
          <div>
            <div class="accom-day-label">${a.day}</div>
            <div class="accom-name">${a.name}</div>
          </div>
          <div class="accom-type">${a.type}</div>
        </div>
        <div class="accom-body">${a.desc}</div>
      </div>
    `).join('');
  }

  // ── Related Tours
  const relatedContainer = document.getElementById('related-tours-container');
  if (relatedContainer) {
    const related = tour.relatedTours || Object.keys(toursData).filter(k => k !== tourKey).slice(0, 3);
    relatedContainer.innerHTML = related.map(rId => {
      const r = toursData[rId];
      if (!r) return '';
      return `
        <a href="tour-detail.html?tour=${rId}" class="featured-card reveal" style="text-decoration:none;">
          <div class="fc-image">
            <img src="${r.image}" alt="${r.title}" />
          </div>
          <div class="fc-content">
            <div class="fc-meta-top">
              <span>🕒 ${r.duration}</span>
              <span>⛰️ ${r.tagline}</span>
            </div>
            <h3 class="fc-title" style="margin-bottom:10px;">${r.title}</h3>
            <p class="fc-desc" style="flex:1; font-size:0.88rem;">${r.itinerary[0].desc.substring(0, 100)}...</p>
            <div class="fc-footer">
              <div class="fc-footer-left"><span>🏷️ ${r.priceGroup}</span></div>
              <div class="fc-footer-right">
                <span class="btn-gold-solid" style="padding:8px 16px; font-size:10px; border-radius:4px;">Ver Detalles</span>
              </div>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

})();

// ─── Featured Tours Carousel (Interactive) ─────────────────────
(function initFeaturedCarousel() {
  const carousel = document.getElementById('featured-carousel');
  const btnPrev = document.getElementById('fc-prev');
  const btnNext = document.getElementById('fc-next');

  if (!carousel || !btnPrev || !btnNext) return;

  const scrollAmount = 350; // Approximated card width + gap

  btnPrev.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
})();

// ─── Reveal Animations ───────────────────────────────────────
(function initReveal() {
  document.querySelectorAll('.dest-card, .featured-card, .ds-card').forEach(el => el.classList.add('reveal'));

  const revealEls = document.querySelectorAll('.reveal, .card-reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -25px 0px' }
  );
  revealEls.forEach(el => observer.observe(el));

  document.querySelectorAll('.hero .reveal, .tour-hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 150);
  });
})();


// --- AUTO-FILL MISSING TOUR DATA ---
(function fillTourData() {
  const toursToUpdate = [
    'salkantay-classic', 'salkantay-short', 'valley-traditional', 
    'valley-super', 'valley-maras', 'cusco-cultural', 
    'rainbow-classic', 'ausangate-7lakes'
  ];
  
  const template = toursData['salkantay-premium'];
  
  toursToUpdate.forEach(key => {
    const tour = toursData[key];
    if (!tour) return;
    
    // Copy arrays to have the same format
    if (!tour.inclusions) tour.inclusions = [...template.inclusions];
    if (!tour.exclusions) tour.exclusions = [...template.exclusions];
    if (!tour.packingList) tour.packingList = [...template.packingList];
    if (!tour.accommodation) tour.accommodation = [...template.accommodation];
    
    // Generate intro fields if missing
    if (!tour.introTitle) tour.introTitle = tour.subtitle || 'Una Aventura Inolvidable';
    if (!tour.introRoute) tour.introRoute = tour.itinerary.map(i => i.title.split(' ')[0]).join(' – ');
    if (!tour.introBody) {
      tour.introBody = `<p>Únete a nosotros en esta espectacular experiencia: <strong>${tour.title}</strong>. Descubre paisajes asombrosos, sumérgete en la cultura andina y disfruta del mejor servicio de su clase. Cada detalle ha sido cuidadosamente planeado para ofrecerte confort y aventura en perfecta armonía.</p>
      <p>Nuestro equipo de profesionales te acompañará en cada paso, garantizando tu seguridad y compartiendo historias fascinantes sobre nuestra herencia milenaria. ¡Prepárate para llevarte recuerdos que durarán toda la vida!</p>`;
    }
  });
})();
