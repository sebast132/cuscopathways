/* ══════════════════════════════════════════════════════════
   CUSCO PATHWAYS ADVENTURES — data.js (Modular Data Layer)
   ══════════════════════════════════════════════════════════ */

'use strict';

// ─── Image Path Resolver ─────────────────────────────────────
function resolveImagePath(filename) {
  if (!filename) return '';
  // Already resolved (starts with assets/)
  if (filename.startsWith('assets/')) return filename;

  const prefixMap = {
    'dest_':      'assets/images/destinations/',
    'tour_':      'assets/images/tours/',
    'accom_':     'assets/images/salkantay/',
    'salkantay_': 'assets/images/salkantay/',
    'city_':      'assets/images/city/',
    'sv_':        'assets/images/sacred-valley/',
    'chinchero_': 'assets/images/sacred-valley/',
    'moray_':     'assets/images/sacred-valley/',
    'maras_':     'assets/images/sacred-valley/',
    'rainbow_':   'assets/images/day-treks/',
    'humantay_':  'assets/images/day-treks/',
    'ausangate_': 'assets/images/day-treks/',
    'palcoyo_':   'assets/images/day-treks/',
    'pallay_':    'assets/images/day-treks/',
    'hero_':      'assets/images/hero/',
    'logoweb':    'assets/images/brand/',
    'logo':       'assets/images/brand/',
    'machu_':     'assets/images/inca-trail/',
    'sacred_':    'assets/images/brand/',
    'modal_':     'assets/images/hero/',
  };

  for (const [prefix, path] of Object.entries(prefixMap)) {
    if (filename.startsWith(prefix)) return path + filename;
  }
  return 'assets/images/' + filename;
}

// ─── Destinations Dataset ────────────────────────────────────
const destinationsData = {
  'inca-trail': {
    title: 'Inca Trail',
    image: 'dest_incatrail.png',
    tours: ['incatrail-classic', 'incatrail-short']
  },
  'salkantay': {
    title: 'Salkantay',
    image: 'dest_salkantay.png',
    tours: ['salkantay-premium', 'salkantay-classic', 'salkantay-short']
  },
  'cusco-sacred-valley': {
    title: 'Cusco & Sacred Valley',
    image: 'dest_sacredvalley.png',
    tours: ['cusco-cultural', 'valley-traditional', 'valley-super', 'valley-maras']
  },
  'rainbow-mountain': {
    title: 'Day Treks',
    image: 'tour_rainbow.png',
    tours: ['rainbow-classic', 'humantay-classic', 'ausangate-7lakes', 'palcoyo', 'pallay-punchu']
  }
};

// ─── Tours Dataset ───────────────────────────────────────────
const toursData = {
  'salkantay-premium': {
    title: 'SALKANTAY TREK: EL CAMINO ANDINO PREMIUM — 5 DÍAS',
    tagline: 'Glamping & Luxury',
    subtitle: 'Toda la grandeza del Clásico, elevada',
    route: 'Cusco → Soraypampa → Salkantay Pass → Chaullay → Lucmabamba → Machu Picchu',
    duration: '5 días/4 noches',
    difficulty: 'Moderado a Desafiante',
    altitude: '4,630m — Salkantay Pass',
    groupSize: 'Max. 16 pasajeros',
    distance: '~61.1 km / 38 mi',
    season: 'Abril-Octubre. Todo el año.',
    level: 'Tour grupal Premium',
    acclimatization: 'Mín. 2 días en Cusco',
    rating: '4.9 (1,243 reseñas)',
    image: 'dest_salkantay.png',
    heroImage: 'dest_salkantay.png',
    brochure: 'assets/documents/CuscoPathways_PremiumSalkantayTrek_5Days_ENG.pdf',
    map: 'assets/images/salkantay/premium_salkantay_map.webp',
    description: `Toda la grandeza del Clásico, elevada. Cada comodidad está mejorada: sleeping bag y bastones incluidos, caballo de emergencia Día 2, aguas termales Cocalmayo Día 3, tren privado Día 4, Vistadome Observatory de regreso, hotel 3 estrellas en Aguas Calientes, duffle 10kg, traslados aeropuerto.<br><br><strong>¿Por qué elegirnos?</strong><br>El Salkantay Premium es para quienes lo quieren todo: la belleza salvaje de los Andes, el logro del Paso Salkantay y el lujo de saber que cada comodidad está arreglada. Desde la llegada al aeropuerto hasta el tren Vistadome Observatory de regreso, cada detalle está cuidado.`,
    highlights: [
      'Todos los atractivos del Clásico',
      'Caballo de emergencia Día 2',
      'Aguas Termales Cocalmayo Día 3',
      'Sacred Jungle Lodge Noche 3',
      'Tren privado Día 4',
      'Tren Vistadome Observatory de regreso',
      'Hotel superior 3 estrellas',
      'Sleeping bag + bastones incluidos',
      'Duffle 10kg - el doble del Clásico',
      'Traslados aeropuerto incluidos'
    ],
    inclusions: [
      'Traslados aeropuerto llegada y salida',
      'Transporte Día 1',
      'Tren privado Día 4',
      'PeruRail Vistadome Observatory Day 5',
      'Bus Aguas Calientes-Machu Picchu solo ida',
      '4 noches (Sky Camp / Mountain Sky View / Sacred Jungle Lodge / 3-star Hotel)',
      '5 desayunos / 5 almuerzos / 4 cenas',
      'Entrada Aguas Termales Cocalmayo Día 3',
      'Caballo de emergencia Día 2',
      'Sleeping bag + bastones incluidos',
      'Bolsa duffle 10kg',
      'Entradas (Humantay Lake, Salkantay Trek, Machu Picchu Circuit 2)',
      'Guía bilingüe certificado',
      'botiquín + oxígeno',
      'briefing 5pm'
    ],
    exclusions: [
      'Entradas Huayna Picchu / Machu Picchu Montaña (pre-book)',
      'Bus regreso Machu Picchu-Aguas Calientes (~USD $12)',
      'Almuerzo Aguas Calientes y cena Cusco Día 5',
      'Seguro de viaje',
      'Equipo personal',
      'Propinas'
    ],
    packingList: [
      'Pasaporte vigente',
      'Botas impermeables',
      'Chaqueta impermeable y poncho',
      'Capas abrigadas, ropa interior térmica',
      'Sombrero, gafas UV, protector solar SPF50+',
      'Repelente, botella 2L',
      'Medicación personal, cámara, power bank, soles cash',
      'Traje de baño para Aguas Termales'
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
    importantNote: 'Información Importante: Briefing 5:00pm la noche anterior. Pago completo 2 días antes. Pasaporte original obligatorio. Reservar Machu Picchu 3 meses antes. Tren Vistadome Observatory disponible para reservas 2026.',
    relatedTours: ['salkantay-classic', 'salkantay-short', 'humantay-classic'],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Cusco > Challacancha > Laguna Humantay > Sky Camp',
        desc: 'Igual que Clásico Día 1. Recojo 4:30am, desayuno Mollepata, almuerzo Sky Camp, Laguna Humantay (4,200m).',
        accommodation: 'Dist: 10km | Alt: 4,200m | Alojamiento: Sky Camp igloos (3,900m)'
      },
      {
        day: 'Día 2',
        title: 'Soraypampa > Paso Salkantay > Mountain Sky View (Caballo emergencia)',
        desc: 'Ascenso al Paso Salkantay (4,630m) con caballo de emergencia desde Soraypampa. Panorama extraordinario. Descenso al Mountain Sky View.',
        accommodation: 'Dist: 23.5km | Alt: 4,630m | Alojamiento: Mountain Sky View (2,950m)'
      },
      {
        day: 'Día 3',
        title: 'Finca de Café > Aguas Termales > Sacred Jungle Lodge',
        desc: 'Experiencia cafetalera y luego Aguas Termales Cocalmayo — piscinas termales naturales en la selva. Noche en Sacred Jungle Lodge.',
        accommodation: 'Dist: 10.3km | Alojamiento: Sacred Jungle Lodge (1,900m)'
      },
      {
        day: 'Día 4',
        title: 'Llactapata > Hidroeléctrica > Tren Privado > Aguas Calientes',
        desc: 'Ruinas Llactapata, desciende a Hidroeléctrica. Tren privado a Aguas Calientes. Hotel 3 estrellas te espera.',
        accommodation: 'Dist: 14km | Alojamiento: Hotel superior 3 estrellas, Aguas Calientes'
      },
      {
        day: 'Día 5',
        title: 'Machu Picchu > Vistadome Observatory > Cusco',
        desc: 'Explora Machu Picchu al amanecer. Regreso en PeruRail Vistadome Observatory — techo de vidrio panorámico. Traslado aeropuerto incluido.',
        accommodation: 'Dificultad: Fácil | Machu Picchu: 2,430m'
      }
    ]
  },
  'salkantay-classic': {
    title: 'SALKANTAY TREK: EL CAMINO ANDINO CLÁSICO — 5 DÍAS',
    tagline: 'El Camino Andino Clásico',
    subtitle: 'Una Aventura de Múltiples Experiencias',
    route: 'Cusco → Challacancha → Laguna Humantay → Salkantay Pass → Llactapata → Machu Picchu',
    duration: '5 Días / 4 Noches',
    difficulty: 'Moderado a Desafiante',
    altitude: '4,630 m',
    groupSize: 'Max. 16 pasajeros',
    rating: '4.9 (1,243 reseñas)',
    image: 'dest_salkantay.png',
    heroImage: 'dest_salkantay.png',
    brochure: 'assets/documents/CuscoPathways_ClassicSalkantayTrek_5Days.pdf',
    map: 'assets/images/salkantay/classic_salkantay_map.webp',
    description: `En 5 días, cruza el Paso Salkantay a 4,630m, camina de cumbres glaciares por el bosque nublado hasta la selva peruana, duerme en campamentos exclusivos y párate ante Machu Picchu. Clasificado entre las 25 mejores rutas de trekking del mundo por National Geographic.<br><br><strong>¿Por qué elegirnos?</strong><br>El Salkantay Clásico es el referente frente al cual se miden todos los demás treks andinos. Ofrece un sendero abierto con variedad extraordinaria — de paisajes glaciales a selva tropical. Con Cusco Pathways Adventure vives esta ruta con campamentos privados exclusivos, cocina gourmet de montaña y guías certificados. Esto no es simplemente un trek a Machu Picchu. Es una inmersión total en el alma de los Andes.`,
    highlights: [
      'Una de las 25 mejores rutas de trekking del mundo',
      'Laguna Humantay turquesa (4,200m) Día 1',
      'Paso Salkantay a 4,630m',
      'Cumbres andinas a selva nublada amazónica',
      'Llactapata con vistas panorámicas a Machu Picchu',
      'Finca cafetalera auténtica en zona de selva',
      '4 noches en campamentos exclusivos',
      'Machu Picchu con guía bilingüe experto'
    ],
    inclusions: [
      'Transporte incluido',
      'Transporte privado Día 3',
      'Tren Aguas Calientes-Ollantaytambo',
      'Bus Aguas Calientes-Machu Picchu solo ida',
      '4 noches de alojamiento (Sky Camp / Mountain Sky View / Super Jungle Domes / Hotel)',
      '5 desayunos / 4 almuerzos / 4 cenas',
      'Té de coca y snacks diarios',
      'Entradas incluidas',
      'Guía bilingüe certificado',
      'Briefing 5pm noche anterior',
      'Bolsa duffle + mulas Días 1-3',
      'Botiquín + oxígeno'
    ],
    exclusions: [
      'Alquiler sleeping bag (USD $25)',
      'Alquiler bastones (USD $25)',
      'Entrada Huayna Picchu',
      'Bus regreso',
      'Almuerzo en Aguas Calientes y cena en Cusco (Día 5)',
      'Seguro de viaje',
      'Equipo personal',
      'Propinas'
    ],
    packingList: [
      'Pasaporte vigente ORIGINAL obligatorio',
      'Botas impermeables',
      'Chaqueta impermeable y poncho',
      'Capas abrigadas',
      'Ropa interior térmica',
      'Sombrero / gorro de lana / buff',
      'Gafas UV',
      'Protector solar FPS50+',
      'Repelente',
      'botella de agua 2L',
      'Medicación y remedios para la altura',
      'Cámara / power bank / efectivo en soles',
      'Mochila pequeña 15-25L'
    ],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Cusco > Challacancha > Laguna Humantay > Sky Camp',
        desc: 'Recojo 4:30am. Desayuno opcional Mollepata. Trek 10km a Soraypampa (3,900m), almuerzo Sky Camp, ida y vuelta Laguna Humantay (4,200m). Cena y estrellas.',
        accommodation: 'Distancia: 10km | Altitud: 4,200m | Dificultad: Moderado-Desafiante | Alojamiento: Sky Camp igloos (3,900m)'
      },
      {
        day: 'Día 2',
        title: 'Soraypampa > Paso Salkantay (4,630m) > Mountain Sky View',
        desc: 'Ascenso 7km al Paso Salkantay (4,630m) — vistas del Salkantay (6,271m). Descenso 9.5km bosque nublado a Collpapampa. Cabañas privadas, ducha caliente.',
        accommodation: 'Distancia: 23.5km | Altitud: 4,630m | Dificultad: Desafiante | Alojamiento: Mountain Sky View (2,950m)'
      },
      {
        day: 'Día 3',
        title: 'Collpapampa > Finca de Café > Super Jungle Domes',
        desc: 'Día tranquilo por el Valle de Santa Teresa. Vehículo privado a La Playa para finca de café — recorre la plantación, cosecha, tuesta, muele y prepara tu taza.',
        accommodation: 'Distancia: 10.3km | Altitud: 2,950m | Dificultad: Moderado | Alojamiento: Super Jungle Domes (2,000m)'
      },
      {
        day: 'Día 4',
        title: 'Lucmabamba > Llactapata > Hidroeléctrica > Aguas Calientes',
        desc: 'Ruinas Llactapata con vista directa a Machu Picchu. Caminata a Hidroeléctrica, sendero ribereño, tren de tarde a Aguas Calientes.',
        accommodation: 'Distancia: 25km | Altitud: 2,800m | Dificultad: Desafiante | Alojamiento: Hotel Aguas Calientes (2,040m)'
      },
      {
        day: 'Día 5',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Bus al amanecer a Machu Picchu. Tour guiado 2 horas: templos, terrazas, Intihuatana. Huayna Picchu opcional. Tren de tarde, transporte privado a Cusco ~8pm.',
        accommodation: 'Dificultad: Fácil | Altitud Machu Picchu: 2,430m'
      }
    ],
    pricePrivate: 'USD 1,650.00',
    priceGroup: 'USD 695.00',
    privatePricing: [
      { size: '1 Persona', price: 'USD 1,650.00' },
      { size: '2 – 3 Personas', price: 'USD 1,300.00' },
      { size: '4 – 5 Personas', price: 'USD 950.00' },
      { size: '6 – 9 Personas', price: 'USD 850.00' },
      { size: '10 o más Personas', price: 'USD 750.00' }
    ],
    offer: '<b>Super Combo (group service only) – USD 820.00 per person:</b><br>• Airport transfer to your hotel upon arrival in Cusco<br>• Salkantay Trek Classic 5 Days<br>• Sleeping bag + trekking poles<br>• Rainbow Mountain Full Day tour',
    importantNote: 'Información Importante: Briefing 5:00pm en la oficina de Salkantay Trekking (Triunfo 392, Oficina 212, Cusco) — obligatorio. Pago completo 2 días antes. Pasaporte original obligatorio. Reservar Machu Picchu 3 meses antes. Llactapata Día 4 puede no garantizarse en temporada de lluvias. Almacenamiento de equipaje sin cargo.'
  },
  'salkantay-short': {
    title: 'SALKANTAY TREK: EL CAMINO EXPLORADOR ANDINO CORTO — 4 DÍAS',
    tagline: 'Aventura Expreso',
    subtitle: 'Menos tiempo, cero compromisos',
    route: 'Cusco → Challacancha → Laguna Humantay → Salkantay Pass → Machu Picchu',
    duration: '4 Días / 3 Noches',
    difficulty: 'Moderado a Desafiante',
    altitude: '4,630m / 15,190ft — Salkantay Pass',
    groupSize: 'Max. 16 pasajeros',
    rating: '4.9 (1,243 reseñas)',
    image: 'dest_salkantay.png',
    heroImage: 'dest_salkantay.png',
    brochure: 'assets/documents/CuscoPathways_ShortSalkantayTrek_4Days_ENG.pdf',
    map: 'assets/images/salkantay/short_salkantay_map.webp',
    description: `El Salkantay Corto ofrece las experiencias más icónicas — Laguna Humantay, Paso Salkantay, bosque nublado y Machu Picchu — en un ajustado itinerario de 4 días. Al eliminar el desvío a Llactapata e incorporar traslado privado el Día 3, mantiene el desafío altitudinal completo.<br><br><strong>¿Por qué elegirnos?</strong><br>Menos tiempo, cero compromisos. Cuatro días son suficientes para vivir el arco emocional completo — el lago turquesa, el imponente paso, el descenso a la selva y la maravilla de Machu Picchu.`,
    highlights: [
      'Laguna Humantay (4,200m)',
      'Paso Salkantay a 4,630m',
      'Cumbres andinas a bosque nublado en un día',
      'Experiencia en finca cafetalera',
      '2 noches exclusivas',
      'Machu Picchu con guía bilingüe experto'
    ],
    inclusions: [
      'Transporte Día 1',
      'Transporte privado Día 3',
      'Transporte privado Ollantaytambo-Cusco hotel Día 4',
      'Tren Aguas Calientes-Ollantaytambo (PeruRail Expedition o Inca Rail Voyager)',
      'Bus Aguas Calientes-Machu Picchu solo ida',
      '3 noches de alojamiento (Sky Camp / Mountain Sky View / Hotel Aguas Calientes)',
      '4 desayunos / 3 almuerzos / 3 cenas',
      'Entradas: Humantay Lake, Salkantay Trek, Machu Picchu Circuit 2',
      'Guía bilingüe',
      'duffle bag max 5kg',
      'mulas Días 1-2',
      'botiquín',
      'briefing'
    ],
    exclusions: [
      'Alquiler sleeping bag (USD $20)',
      'Alquiler bastones (USD $20)',
      'Tren Hidroeléctrica-Aguas Calientes si se necesita (USD $41)',
      'Bus regreso Machu Picchu-Aguas Calientes (~USD $12)',
      'Entrada Huayna Picchu / Machu Picchu Montaña',
      'Almuerzo Aguas Calientes y cena Cusco Día 4',
      'Seguro de viaje',
      'equipo personal',
      'propinas'
    ],
    packingList: [
      'Pasaporte original',
      'Botas impermeables',
      'Chaqueta y poncho',
      'Capas abrigadas',
      'Sombrero, protector solar, gafas de sol',
      'Repelente, botella 2L',
      'Medicación personal, cámara, power bank, efectivo en soles'
    ],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Cusco > Challacancha > Laguna Humantay > Sky Camp',
        desc: 'Recojo 4:30am. Desayuno opcional Mollepata, Challacancha. Caminata 7km a Soraypampa, almuerzo Sky Camp, Laguna Humantay (4,200m).',
        accommodation: 'Distancia: 10km | Altitud: 4,200m | Alojamiento: Sky Camp (3,900m).'
      },
      {
        day: 'Día 2',
        title: 'Soraypampa > Paso Salkantay (4,630m) > Mountain Sky View',
        desc: 'Ascenso al Paso Salkantay (4,630m), descenso bosque nublado a Collpapampa. Cabañas privadas, ducha caliente.',
        accommodation: 'Distancia: 23.5km | Altitud: 4,630m | Alojamiento: Mountain Sky View (2,950m).'
      },
      {
        day: 'Día 3',
        title: 'Finca de Café > Hidroeléctrica > Aguas Calientes',
        desc: 'Descenso Valle de Santa Teresa a La Playa para finca de café. Transporte privado a Hidroeléctrica, caminata vía del tren a Aguas Calientes.',
        accommodation: 'Distancia: 19.5km | Alojamiento: Hotel Aguas Calientes (2,040m).'
      },
      {
        day: 'Día 4',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Bus temprano Machu Picchu. Tour guiado 2 horas. Montañas opcionales. Tren de tarde, transporte privado a Cusco.',
        accommodation: 'Dificultad: Fácil | Altitud Machu Picchu: 2,430m.'
      }
    ],
    pricePrivate: 'USD 1,520.00',
    priceGroup: 'USD 620.00',
    privatePricing: [
      { size: '1 Persona', price: 'USD 1,520.00' },
      { size: '2 – 3 Personas', price: 'USD 1,200.00' },
      { size: '4 – 5 Personas', price: 'USD 900.00' },
      { size: '6 – 9 Personas', price: 'USD 800.00' },
      { size: '10 o más Personas', price: 'USD 700.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 730.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Salkantay Trek Short 4 Days<br>• Sleeping Bag + Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Información Importante: Briefing 5:00pm la noche anterior. Pago completo 2 días antes. Pasaporte original obligatorio. Reservar Machu Picchu 3 meses antes. Esta ruta NO incluye las ruinas de Llactapata.'
  },
  'incatrail-classic': {
    title: 'CAMINO INCA CLÁSICO 4 DÍAS: EL CAMINO REAL',
    tagline: 'Camino Inca Original',
    subtitle: 'La ruta más famosa hacia Machu Picchu',
    route: 'Km 82 → Wayllabamba → Pacaymayo → Wiñay Wayna → Machu Picchu',
    duration: '4 días/3 noches',
    difficulty: 'Moderado a Desafiante',
    altitude: '4,215m — Paso Mujer Muerta',
    groupSize: 'Max. 16 pasajeros',
    distance: '~44 km / 27.3 mi',
    season: 'Mayo-Septiembre. Cerrado febrero.',
    start: 'KM 82 Piscacucho, 2,700m',
    acclimatization: 'Mín. 2 días en Cusco',
    rating: '4.9 (8,193 reseñas)',
    image: 'tour_incatrail.png',
    heroImage: 'dest_incatrail.png',
    brochure: 'assets/documents/CuscoPathways_ClassicIncaTrail_4Days_ENG.pdf',
    brochureBgImage: 'tour_incatrail.png',
    map: 'assets/images/inca-trail/classic_inca_trail_map.webp',
    description: `El Camino Inca Clásico — una antigua calzada de 44km construida por manos incas, atravesando bosque nublado, tundra alpina y pasos impresionantes para llegar a Machu Picchu a través de la Puerta del Sol al amanecer. Con permisos diarios estrictamente limitados, cada paso lleva el peso del privilegio. Este es el trek que define una vida.<br><br><strong>¿Por qué elegirnos?</strong><br>Existen treks, y luego está el Camino Inca. Caminar estas piedras es unirse a un linaje de peregrinos de cinco siglos. Llegar a Machu Picchu a través de la Puerta del Sol — no en bus, sino a pie — distingue este viaje de cualquier otro en el mundo. Reserva con anticipación. Los cupos son preciados.`,
    highlights: [
      'Camina 44km de senderos incas originales',
      'Cruza el Paso de la Mujer Muerta a 4,215m',
      'Visita 7 sitios arqueológicos incas',
      'Wiñay Wayna — el complejo de ruinas más espectacular',
      'Llega por la Puerta del Sol al amanecer',
      'Tiendas de calidad con colchonetas inflables',
      'Teléfono satelital con tu guía'
    ],
    inclusions: [
      'Transporte Cusco-Ollantaytambo-KM 82 Día 1',
      'Tren Aguas Calientes-Ollantaytambo Día 4',
      'Transporte privado Ollantaytambo-Cusco hotel Día 4',
      'Bus Aguas Calientes-Machu Picchu solo ida',
      '3 noches de camping (tiendas de calidad, colchonetas inflables y de espuma)',
      'Tienda baño portátil',
      'Tienda comedor completa',
      '4 desayunos / 3 almuerzos / 3 cenas',
      'Té de coca',
      'Hora del té/Happy Hour, snacks',
      'Permisos Camino Inca y Machu Picchu (Circuito 1 + Circuito 3)',
      'Guía bilingüe certificado',
      'Equipo de porteadores (Kallpa Team)',
      'Teléfono satelital',
      'Botiquín de primeros auxilios + oxígeno',
      'briefing 5pm',
      'bolsa duffle máx 5kg'
    ],
    exclusions: [
      'Alquiler sleeping bag (USD $20)',
      'Alquiler bastones (USD $20)',
      'Almuerzo en Aguas Calientes y cena en Cusco Día 4',
      'Entradas Huayna Picchu / Montaña Machu Picchu (pre-book)',
      'Seguro de viaje',
      'Equipo personal',
      'propinas'
    ],
    packingList: [
      'Pasaporte original obligatorio (NO copias)',
      'Botas impermeables (usadas previamente)',
      'Capas abrigadas, chaqueta y poncho',
      'Bastones (alquilables)',
      'Sleeping bag (alquilable)',
      'Linterna frontal + pilas extra',
      'Protector solar FPS50+, gafas de sol, repelente, botella 2L',
      'Medicación personal, cámara, power bank, efectivo en soles'
    ],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Cusco > KM 82 Piscacucho > Llactapata > Ayapata Camp',
        desc: 'Recojo 4:30-5:00am. Viaje a Ollantaytambo para desayuno, luego KM 82 — presenta pasaporte original. Cruza puente colgante. Visita Llactapata. Continúa a campamento Ayapata.',
        accommodation: 'Dist: 14km | Alt: 3,300m | Dificultad: Moderado | Campamento: Ayapata (3,300m)'
      },
      {
        day: 'Día 2',
        title: 'Ayapata > Paso Mujer Muerta > Chaquicocha Camp',
        desc: 'Día más exigente. Ascenso al Paso de la Mujer Muerta (Warmiwañusca) a 4,215m. Ruinas Runkurakay. Descenso bosque nublado a Sayaqmarka, luego campamento.',
        accommodation: 'Dist: 16km | Alt: 4,215m | Dificultad: Desafiante | Campamento: Chaquicocha (3,600m)'
      },
      {
        day: 'Día 3',
        title: 'Chaquicocha > Phuyupatamarka > Intipata > Wiñay Wayna',
        desc: 'Día paisajístico. Visita Phuyupatamarka \'pueblo sobre las nubes\' (3,650m) con fuentes rituales. Terrazas Intipata. Llega a Wiñay Wayna — el complejo de ruinas más espectacular. Última noche en el sendero.',
        accommodation: 'Dist: 9km | Alt: 3,650m | Campamento: Wiñay Wayna (2,650m)'
      },
      {
        day: 'Día 4',
        title: 'Wiñay Wayna > Puerta del Sol > Machu Picchu > Cusco',
        desc: 'Despierta 3:30am, camina con linterna a la Puerta del Sol. Ve aparecer Machu Picchu entre la neblina matutina. Tour guiado 2 horas. Montañas opcionales. Tren de tarde, transporte privado a Cusco.',
        accommodation: 'Puerta del Sol: 2,720m | Machu Picchu: 2,430m'
      }
    ],
    priceGroup: 'USD 870.00',
    privatePricing: [
      { size: '1 Persona', price: 'USD 2,800.00' },
      { size: '2 – 3 Personas', price: 'USD 1,600.00' },
      { size: '4 – 5 Personas', price: 'USD 1,500.00' },
      { size: '6 – 9 Personas', price: 'USD 1,300.00' },
      { size: '10 o más Personas', price: 'USD 1,000.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 970.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Inca Trail Classic 4 Days<br>• Sleeping Bag + Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Información Importante: Permisos del Camino Inca estrictamente limitados — reserva con 4-6 meses de anticipación. Los permisos son intransferibles e inalterables. El nombre debe coincidir exactamente con el pasaporte. Pasaporte original obligatorio en KM 82. Pago completo 2 días antes. Mejor temporada: mayo-septiembre. Camino cerrado cada febrero.'
  },
  'incatrail-short': {
    title: 'CAMINO INCA CORTO 2 DÍAS: EL CAMINO EXPLORADOR',
    tagline: 'Camino Inca Corto',
    subtitle: 'La esencia del Camino Inca en 2 días',
    route: 'Km 104 → Chachabamba → Wiñay Wayna → Machu Picchu',
    duration: '2 días/1 noche',
    difficulty: 'Moderado',
    altitude: '2,720m — Puerta del Sol',
    groupSize: 'Max. 16 pasajeros',
    distance: '9 km (solo Día 1)',
    season: 'Mayo-Septiembre. Cerrado febrero.',
    start: 'KM 104, 2,100m',
    acclimatization: '1-2 días en Cusco recomendado',
    rating: '4.8 (5,237 reseñas)',
    image: 'tour_shortinca.png',
    heroImage: 'dest_incatrail.png',
    brochure: 'assets/documents/CuscoPathways_ShortIncaTrail_2Days_ENG.pdf',
    map: 'assets/images/inca-trail/short_inca_trail_map.webp',
    description: `El Camino Inca Corto destila la sección más dramática en una poderosa experiencia de 2 días — caminando desde el KM 104 por el bosque nublado hasta Wiñay Wayna y la Puerta del Sol, para luego entrar a Machu Picchu al amanecer. Una noche en Aguas Calientes. Dos circuitos de Machu Picchu. En 48 horas.<br><br><strong>¿Por qué elegirnos?</strong><br>Para quienes han soñado con caminar el Camino Inca pero no pueden dedicar cuatro días, el Camino Inca Corto ofrece la experiencia esencial: piedra antigua bajo tus pies, el silencio del bosque nublado, Wiñay Wayna y la Puerta del Sol. Llegar a Machu Picchu a pie transforma el encuentro completamente.`,
    highlights: [
      'Sección más espectacular',
      'Chachabamba y Wiñay Wayna',
      'Primera vista desde la Puerta del Sol',
      'Noche en hotel Aguas Calientes',
      'Dos circuitos Machu Picchu',
      'Grupo más pequeño, más íntimo'
    ],
    inclusions: [
      'Transporte Cusco-Ollantaytambo Día 1',
      'Tren Ollantaytambo-KM 104 Día 1',
      'Tren Aguas Calientes-Ollantaytambo Día 2',
      'Transporte privado Ollantaytambo-Cusco hotel Día 2',
      'Bus Aguas Calientes-Machu Picchu una dirección',
      'Hotel Aguas Calientes (baño privado, ducha caliente, WiFi, desayuno)',
      'Entrada Machu Picchu Circuito 1 Día 1 (vía Camino Inca) + Circuito 3 Día 2',
      'Box lunch y snacks Día 1',
      'Cena Aguas Calientes Día 1',
      'Guía bilingüe',
      'botiquín + oxígeno',
      'briefing 5pm noche anterior'
    ],
    exclusions: [
      'Desayuno Día 1 antes del tren',
      'Almuerzo y cena Día 2',
      'Bus regreso Machu Picchu-Aguas Calientes (~USD $12)',
      'Entradas Huayna Picchu / Huchuy Picchu (pre-book)',
      'Seguro de viaje',
      'equipo personal',
      'propinas'
    ],
    packingList: [
      'Pasaporte original obligatorio',
      'Botas impermeables',
      'Chaqueta impermeable',
      'Capa abrigada para la madrugada',
      'Bastones opcionales',
      'Linterna frontal para madrugada Día 1',
      'Protector solar, gafas de sol, botella de agua 2L',
      'Medicación personal, cámara'
    ],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Cusco > KM 104 > Chachabamba > Wiñay Wayna > Puerta del Sol > Aguas Calientes',
        desc: 'Recojo 4:00am. Tren Ollantaytambo al KM 104 — presenta pasaporte original. Caminata 9km bosque nublado pasando Chachabamba. Ascenso 3 horas a Wiñay Wayna. Continúa 45 min a la Puerta del Sol (Inti Punku, 2,720m) para vista al atardecer de Machu Picchu. Bus a Aguas Calientes, check-in, cena.',
        accommodation: 'Caminata: 9km | Altitud: 2,720m | Dificultad: Moderado | Alojamiento: Hotel Aguas Calientes'
      },
      {
        day: 'Día 2',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Levántate antes del amanecer, bus a Machu Picchu — entre los primeros visitantes. Tour guiado 2 horas Circuito 3: Templo del Sol, Templo del Cóndor, Doce Nichos, terrazas. Opcional Huayna Picchu o Huchuy Picchu. Tren tarde, transporte privado a Cusco ~6pm.',
        accommodation: 'Dificultad: Fácil | Altitud Machu Picchu: 2,430m'
      }
    ],
    priceGroup: 'USD 595.00',
    privatePricing: [
      { size: '1 Persona', price: 'USD 1,500.00' },
      { size: '2 – 3 Personas', price: 'USD 1,200.00' },
      { size: '4 – 5 Personas', price: 'USD 1,000.00' },
      { size: '6 – 9 Personas', price: 'USD 800.00' },
      { size: '10 o más Personas', price: 'USD 700.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 670.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Short Inca Trail 2 Days<br>• Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Información Importante: Los permisos del Camino Inca Corto también son estrictamente limitados — reserva lo antes posible. Pasaporte original requerido en KM 104. El nombre debe coincidir exactamente. Briefing 5pm noche anterior. Sin camping — experiencia 100% en hotel.'
  },
  'cusco-cultural': {
    title: 'CITY TOUR CUSCO: EL CAMINO CULTURAL',
    tagline: 'Historia Imperial',
    subtitle: 'El primer capítulo esencial',
    route: 'Cusco → Sacsayhuamán → Qenqo → Puca Pucara → Tambomachay',
    duration: '~5 horas (medio día)',
    difficulty: 'Fácil',
    altitude: '~3,700m / 12,140ft — Sacsayhuamán',
    groupSize: 'Max. 12 pasajeros',
    distance: '-',
    season: 'Todo el año',
    start: 'Cusco City',
    acclimatization: '1-2 días en Cusco recomendado',
    rating: '4.8 (3,124 reseñas)',
    image: 'city_plaza_cusco.png',
    heroImage: 'city_plaza_cusco.png',
    brochure: 'assets/documents/CuscoPathways_CityTour_CulturalPath.pdf',
    map: 'assets/images/city/cusco_city_tour_map.webp',
    description: `Cusco no es simplemente una ciudad — es un museo viviente construido sobre cimientos incas. Este city tour de medio día te lleva a los seis sitios más significativos: Sacsayhuamán, Qenqo, Puca Pucara, Tambomachay, la Catedral del Cusco y el Qoricancha — el templo más sagrado del Imperio Inca.<br><br><strong>¿Por qué elegirnos?</strong><br>Antes de aventurarte en las montañas, deja que Cusco revele su historia completa. La ciudad que los españoles encontraron en 1533 era una metrópolis de piedra perfectamente encajada, templos dorados y sistemas de agua que rivalizaban con Roma. El City Tour es el primer capítulo esencial de cualquier itinerario en Cusco.`,
    highlights: [
      'city_sacsayhuaman.png',
      'city_qenqo.png',
      'city_puca_pucara.png',
      'city_tambomachay.png',
      'city_plaza_cusco.png',
      'city_qoricancha.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Botiquín',
      'Servicio al cliente 24/7'
    ],
    exclusions: [
      'Boleto Turístico — requerido, aprox. PEN 70-130 / USD $20-40',
      'Comidas',
      'Seguro de viaje',
      'Propinas'
    ],
    packingList: [
      'Zapatos cómodos',
      'Capa abrigada',
      'Sombrero y protector solar',
      'Botella de agua, cámara',
      'Efectivo para el Boleto Turístico y souvenirs'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Sacsayhuamán',
        desc: 'La fortaleza colosal con muros en zigzag construidos con piedras que pesan más de 20 toneladas, encajadas con una precisión asombrosa.',
        accommodation: 'Altitud: ~3,700m',
        image: 'city_sacsayhuaman.png'
      },
      {
        day: 'Parada 2',
        title: 'Qenqo',
        desc: 'Cámaras subterráneas talladas en piedra caliza que revelan la comprensión inca de la astronomía y servían para rituales de momificación.',
        image: 'city_qenqo.png'
      },
      {
        day: 'Parada 3',
        title: 'Puca Pucara',
        desc: 'Conocida como la "Fortaleza Roja", esta construcción militar controlaba el acceso a la capital imperial y ofrece hermosas vistas del valle.',
        image: 'city_puca_pucara.png'
      },
      {
        day: 'Parada 4',
        title: 'Tambomachay',
        desc: 'El lugar de descanso del Inca, con fuentes de agua cristalina y acueductos que fluyen ininterrumpidamente desde hace más de 500 años.',
        image: 'city_tambomachay.png'
      },
      {
        day: 'Parada 5',
        title: 'Plaza de Armas y Catedral',
        desc: 'Visitamos la icónica Plaza de Armas del Cusco y la Catedral, una obra maestra del barroco andino construida sobre el antiguo palacio del Inca Viracocha.',
        image: 'city_plaza_cusco.png'
      },
      {
        day: 'Parada 6',
        title: 'Qoricancha (Templo del Sol)',
        desc: 'El Recinto Dorado, el templo inca más importante dedicado al Dios Sol, sobre cuyas paredes finamente labradas se construyó el convento de Santo Domingo.',
        image: 'city_qoricancha.png'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Boleto Turístico NO incluido — necesario para ingresar a la mayoría de sitios. Hay diferentes circuitos a diferentes precios — tu guía te asesorará. Cusco está a 3,400m; Sacsayhuamán a ~3,700m. Recomendamos 1-2 días de aclimatación. El horario de recojo será confirmado el día anterior.'
  },
  'valley-traditional': {
    title: 'TOUR VALLE SAGRADO: EL CAMINO TRADICIONAL',
    tagline: 'Ruta de los Incas',
    subtitle: 'El corazón del Imperio Inca',
    route: 'Cusco → Chinchero → Moray → Maras → Urubamba → Ollantaytambo → Pisac',
    duration: '~11 horas (día completo)',
    difficulty: 'Fácil',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 pasajeros',
    distance: '-',
    season: 'Todo el año',
    start: 'Cusco, 7:00 a.m.',
    acclimatization: 'Opcional (bueno para el 1er día)',
    rating: '4.7 (4,521 reseñas)',
    image: 'sv_ollantaytambo_principal.png',
    heroImage: 'sv_ollantaytambo_principal.png',
    brochure: 'assets/documents/CuscoPathways_SacredValley_TraditionalPath.pdf',
    map: 'assets/images/sacred-valley/sacred_valley_map.webp',
    description: `El Valle Sagrado de los Incas — Willcamayu en quechua, 'Río Sagrado' — es el corazón del Imperio Inca. El Camino Tradicional te lleva por sus sitios más icónicos: Chinchero, Moray, las Salineras de Maras, Ollantaytambo y el complejo de Pisac con su famoso mercado artesanal.<br><br><strong>¿Por qué elegirnos?</strong><br>El Valle Sagrado no es un telón de fondo para Machu Picchu — es un destino por mérito propio. Ollantaytambo es el único centro urbano inca en el mundo todavía habitado en su forma original. Las terrazas de Moray siguen siendo uno de los mayores misterios arqueológicos sin resolver. Un día completo aquí es el contexto esencial que hace que Machu Picchu tenga sentido.`,
    highlights: [
      'sv_chinchero_campanario.png',
      'sv_chinchero_plaza.png',
      'sv_mantas.png',
      'sv_mercado_pisac.png',
      'sv_ollantaytambo_principal.png',
      'sv_ollantaytambo_panoramica.png',
      'sv_ollantaytambo_hombre.png',
      'sv_pisac_ruinas.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Almuerzo buffet en Urubamba',
      'Botiquín'
    ],
    exclusions: [
      'Boleto Turístico (requerido)',
      'Desayuno y cena',
      'Entrada Salineras de Maras',
      'Seguro de viaje',
      'souvenirs',
      'propinas'
    ],
    packingList: [
      'Zapatos cómodos',
      'Capa abrigada',
      'Chaqueta impermeable',
      'Protector solar, sombrero, cámara',
      'Efectivo (soles)'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Chinchero',
        desc: 'Visitamos las ruinas incas y la hermosa plaza con su iglesia colonial. Luego participamos en una demostración textil donde aprenderemos sobre el antiguo arte del teñido y tejido en los Andes.',
        image: 'sv_chinchero_plaza.png',
        accommodation: 'Altitud: 3,762m'
      },
      {
        day: 'Parada 2',
        title: 'Moray y Salineras de Maras',
        desc: 'Exploramos las misteriosas terrazas circulares de Moray, consideradas un laboratorio agrícola inca, y luego las Salineras de Maras: más de 3,000 piscinas en terrazas donde familias locales aún extraen sal con técnicas ancestrales.'
      },
      {
        day: 'Parada 3',
        title: 'Urubamba',
        desc: 'Nos detenemos en el corazón del Valle Sagrado para disfrutar de un delicioso almuerzo buffet con lo mejor de la cocina peruana.'
      },
      {
        day: 'Parada 4',
        title: 'Ollantaytambo',
        desc: 'Conocida como la única ciudad inca viva, recorreremos sus impresionantes terrazas y el complejo arqueológico con bloques monolíticos que sirvieron como templo y fortaleza.',
        image: 'sv_ollantaytambo_principal.png'
      },
      {
        day: 'Parada 5',
        title: 'Pisac Ruinas',
        desc: 'Recorreremos el complejo arqueológico de Pisac, conocido por sus amplias terrazas agrícolas y por albergar el mayor cementerio inca descubierto.',
        image: 'sv_pisac_ruinas.png'
      },
      {
        day: 'Parada 6',
        title: 'Mercado de Pisac',
        desc: 'Finalizaremos el día sumergiéndonos en el colorido mercado artesanal de Pisac, famoso por su platería, textiles y cerámica.',
        image: 'sv_mercado_pisac.png'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Boleto Turístico NO incluido. Recojo a las 7:00am. Regreso aproximadamente 6:00-7:00pm. La entrada a las Salineras de Maras es independiente del Boleto Turístico. Vístete en capas — temperaturas varían entre Chinchero (frío) y Urubamba (cálido).'
  },
  'valley-super': {
    title: 'SUPER TOUR VALLE SAGRADO: EL CAMINO EXTENDIDO',
    tagline: 'La Experiencia Completa',
    subtitle: 'El viaje definitivo por el Imperio',
    route: 'Cusco → Chinchero → Moray → Maras → Urubamba → Ollantaytambo → Pisac',
    duration: '~12 horas (día completo extendido)',
    difficulty: 'Fácil',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 pasajeros',
    distance: '-',
    season: 'Todo el año',
    start: 'Cusco, 7:00 a.m.',
    acclimatization: 'Opcional',
    rating: '4.9 (2,104 reseñas)',
    image: 'sv_ollantaytambo_panoramica.png',
    heroImage: 'sv_ollantaytambo_panoramica.png',
    brochure: 'assets/documents/CuscoPathways_SuperSacredValley_ExtendedPath.pdf',
    map: 'assets/images/sacred-valley/super_sacred_valley_map.webp',
    description: `Todo lo del Tour Valle Sagrado Tradicional — y más. El Camino Extendido incluye todos los sitios icónicos (Chinchero, Moray, Maras, Urubamba, Ollantaytambo, Pisac) con tiempo y profundidad adicionales en cada destino. Para viajeros que quieren ir más allá de la superficie.<br><br><strong>¿Por qué elegirnos?</strong><br>Algunos lugares merecen más que una mirada apresurada. El Super Tour Valle Sagrado es para el viajero que sabe que la profundidad de la experiencia importa más que la velocidad de cobertura. Con tiempo sin prisa en cada sitio y guía experto, esta es la manera definitiva de experimentar el Valle Sagrado.`,
    highlights: [
      'sv_chinchero_plaza.png',
      'sv_chinchero_campanario.png',
      'sv_ollantaytambo_panoramica.png',
      'sv_ollantaytambo_hombre.png',
      'sv_pisac_ruinas.png',
      'sv_mantas.png',
      'sv_mercado_pisac.png',
      'sv_ollantaytambo_principal.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Almuerzo buffet en Urubamba',
      'Botiquín'
    ],
    exclusions: [
      'Boleto Turístico (requerido)',
      'Desayuno y cena',
      'Entrada Salineras de Maras',
      'Seguro de viaje',
      'propinas'
    ],
    packingList: [
      'Zapatos cómodos',
      'Capas para temperaturas variables',
      'Chaqueta impermeable',
      'Protector solar y sombrero',
      'Cámara con batería extra',
      'Efectivo en soles'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Chinchero: Tiempo Extendido',
        desc: 'Recorrido sin prisa por las ruinas incas y la iglesia colonial. Participación activa en una demostración textil extendida, donde incluso podrás intentar tejer tú mismo con las maestras locales.',
        image: 'sv_chinchero_campanario.png',
        accommodation: 'Altitud: 3,762m'
      },
      {
        day: 'Parada 2',
        title: 'Moray y Salineras de Maras',
        desc: 'La explicación del guía profundiza en la ciencia agrícola inca en los anillos de Moray. Luego, bajaremos hacia las deslumbrantes piscinas de sal de Maras para fotografías sin límite de tiempo.'
      },
      {
        day: 'Parada 3',
        title: 'Urubamba',
        desc: 'Almuerzo buffet andino premium, disfrutando con calma de la gastronomía del Valle Sagrado.'
      },
      {
        day: 'Parada 4',
        title: 'Ollantaytambo: Recorrido Profundo',
        desc: 'Además de la fortaleza, caminaremos por los cuarteles residenciales incas originales (\'canchas\') y veremos el agua fluir por canales construidos antes de la llegada de Colón.',
        image: 'sv_ollantaytambo_panoramica.png'
      },
      {
        day: 'Parada 5',
        title: 'Pisac: Complejo Completo',
        desc: 'Exploración minuciosa de todo el complejo arqueológico: el Intihuatana (reloj solar), el Templo del Sol y el extenso cementerio inca en la ladera de la montaña.',
        image: 'sv_pisac_ruinas.png'
      },
      {
        day: 'Parada 6',
        title: 'Mercado de Pisac',
        desc: 'Tiempo abundante para caminar por el famoso mercado artesanal, conversar con los vendedores y conseguir los mejores textiles y platería antes del regreso a Cusco.',
        image: 'sv_mercado_pisac.png'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Boleto Turístico NO incluido. Salida 7:00am. Regreso ~7:00pm. Diferencia clave frente al tour Tradicional: tiempo extendido en cada sitio. Recomendado para clientes con genuino interés en la cultura e historia inca.'
  },
  'valley-maras': {
    title: 'TOUR MARAS Y MORAY: EL CAMINO DE LA SAL Y LO SAGRADO',
    tagline: 'Laboratorio Inca y Salineras',
    subtitle: 'El Valle Sagrado Inexplorado',
    route: 'Cusco → Chinchero → Moray → Salineras de Maras → Laguna Huaypo → Urubamba → Ollantaytambo',
    duration: '~9 horas (día completo)',
    difficulty: 'Fácil',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 pasajeros',
    distance: '-',
    season: 'Todo el año',
    start: 'Cusco',
    acclimatization: 'Opcional',
    rating: '4.8 (1,842 reseñas)',
    image: 'moray_panoramico.png',
    heroImage: 'moray_panoramico.png',
    brochure: 'assets/documents/CuscoPathways_MarasMoray_SaltSacredPath.pdf',
    description: `Dos de los sitios más inusuales y fotogénicos de todo el Valle Sagrado combinados en un tour de día completo. Las Salineras de Maras — más de 3,000 destellantes piscinas de sal blanca cosechadas desde antes de los incas — y Moray — las misteriosas terrazas circulares consideradas el primer laboratorio de investigación agrícola del mundo. Añade Chinchero, almuerzo buffet, Laguna Huaypo y Ollantaytambo.<br><br><strong>¿Por qué elegirnos?</strong><br>Moray y Maras son dos de los sitios visualmente más impactantes de toda América del Sur — y sin embargo permanecen fuera del circuito turístico principal. Las terrazas circulares de Moray parecen sacadas de otro mundo. Las piscinas de sal de Maras, fotografiadas al amanecer, no tienen comparación en la Tierra.`,
    highlights: [
      'moray_panoramico.png',
      'maras_mirador.png',
      'chinchero_tejedora.png',
      'moray_vista.png',
      'maras_viajera.png',
      'chinchero_tintes.png',
      'moray_1.png',
      'maras_2.png',
      'maras_1.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Almuerzo buffet en Urubamba',
      'Botiquín'
    ],
    exclusions: [
      'Boleto Turístico (requerido para Chinchero & Ollantaytambo — PEN 70-130)',
      'Entrada Salineras de Maras',
      'Desayuno y cena',
      'Seguro de viaje',
      'propinas'
    ],
    packingList: [
      'Zapatos cómodos',
      'Capas para cambios de temperatura',
      'Chaqueta impermeable',
      'Protector solar, sombrero, cámara',
      'Efectivo en soles'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Chinchero',
        desc: 'Visitamos las ruinas incas y la demostración textil, donde maestras tejedoras nos mostrarán el uso de tintes naturales y técnicas ancestrales.',
        image: 'chinchero_tejedora.png',
        accommodation: 'Altitud: 3,762m'
      },
      {
        day: 'Parada 2',
        title: 'Laboratorio de Moray',
        desc: 'El guía nos explicará cómo los incas diseñaron hasta 15°C de diferencia de temperatura entre los anillos de estas impresionantes terrazas circulares concéntricas.',
        image: 'moray_vista.png'
      },
      {
        day: 'Parada 3',
        title: 'Salineras de Maras',
        desc: 'Caminaremos entre miles de brillantes piscinas blancas donde las familias locales siguen cosechando sal de un manantial subterráneo utilizando técnicas pre-incas.',
        image: 'maras_mirador.png'
      },
      {
        day: 'Parada 4',
        title: 'Laguna Huaypo y Urubamba',
        desc: 'Haremos una parada fotográfica en la hermosa Laguna Huaypo antes de descender a Urubamba para disfrutar de un almuerzo buffet de cocina peruana.'
      },
      {
        day: 'Parada 5',
        title: 'Ollantaytambo',
        desc: 'Finalizaremos la tarde explorando el impresionante sitio arqueológico de Ollantaytambo, la única ciudad inca que sigue siendo habitada en sus manzanas originales, antes de regresar a Cusco.'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Boleto Turístico NO incluido. Entrada Salineras de Maras se paga por separado. Recojo por la mañana (horario confirmado el día anterior). Excelente opción independiente o complemento a cualquier itinerario de trek.'
  },
  'rainbow-classic': {
    title: 'TOUR MONTAÑA DE COLORES: EL CAMINO COLORIDO',
    tagline: 'El Milagro de Vinicunca',
    subtitle: 'La montaña más fotografiada de los Andes',
    route: 'Cusco → Cusipata → Fulawasipata → Montaña de Colores',
    duration: 'Día completo ~12-13hrs',
    difficulty: 'Moderado a Desafiante',
    altitude: '5,200m — Cima Vinicunca',
    groupSize: 'Max. 12 pasajeros',
    distance: '7 km / 4.35 mi',
    season: 'Todo el año',
    start: 'Cusco, 3:30-4:00am',
    acclimatization: 'MÍNIMO 3 días en Cusco ENCARECIDAMENTE',
    rating: '4.8 (5,120 reseñas)',
    image: 'rainbow_trekkers.png',
    heroImage: 'rainbow_trekkers.png',
    brochure: 'assets/documents/CuscoPathways_RainbowMountain_ColorfulPath.pdf',
    map: 'assets/images/day-treks/rainbow_mountain_map.webp',
    description: `Oculta para el mundo hasta que un glaciar se retiró alrededor de 2015, Vinicunca — la Montaña de Colores — se ha convertido en uno de los paisajes más fotografiados de la Tierra. Sus sedimentos minerales en capas pintan la ladera en vívidas franjas de rojo, rosa, turquesa y amarillo. A 5,200m, llegar a la cima es un logro físico genuino.<br><br><strong>¿Por qué elegirnos?</strong><br>Vinicunca es el sitio natural más buscado de América del Sur. La combinación de color de otro mundo, altitud extrema y el vasto panorama andino crea una experiencia genuinamente diferente a cualquier otra en la Tierra. Con Cusco Pathways Adventure llegas con un guía experto que sitúa la montaña en su contexto geológico y cultural.`,
    highlights: [
      'rainbow_trekkers.png',
      'rainbow_llamas.png',
      'rainbow_viajero.png',
      'rainbow_caminata.png',
      'rainbow_mujer_poncho.png',
      'rainbow_vinicunca_llama.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Entrada a Montaña Vinicunca',
      'Desayuno en restaurante de Cusipata',
      'Almuerzo después del trek',
      'Snacks y agua en el sendero',
      'Botiquín + oxígeno',
      'Briefing previo 6:00pm noche anterior'
    ],
    exclusions: [
      'Bastones muy recomendados',
      'Botella de agua personal',
      'Snacks extra',
      'Seguro de viaje',
      'Propinas'
    ],
    packingList: [
      'Capas muy abrigadas — frío y ventoso a 5,200m',
      'Chaqueta impermeable',
      'Pantalones impermeables (temporada de lluvias)',
      'Ropa interior térmica',
      'Gorro de lana y guantes',
      'Botas impermeables',
      'Bastones muy recomendados',
      'Protector solar FPS70+, gafas UV',
      'Botella 2L o bolsa de hidratación',
      'Snacks personales, cámara'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Viaje a Cusipata',
        desc: 'Recojo entre 3:30 y 4:00 am. Viajaremos por aproximadamente 1.5 horas hacia el sur hasta el poblado de Cusipata (3,310m) para disfrutar de un abundante desayuno energético.'
      },
      {
        day: 'Parada 2',
        title: 'Inicio en Fulawasipata',
        desc: 'Continuaremos 1 hora en transporte hasta Fulawasipata (4,660m), el punto de inicio del sendero al pie del sagrado nevado Ausangate. Aquí recibiremos una breve orientación.'
      },
      {
        day: 'Parada 3',
        title: 'Ascenso por la Puna Andina',
        desc: 'Ascenderemos durante unas 2 horas a través de la puna alta, un camino desafiante pero hermoso rodeado de imponentes montañas nevadas.',
        image: 'rainbow_caminata.png'
      },
      {
        day: 'Parada 4',
        title: 'Fauna y Paisajes',
        desc: 'Durante el recorrido estaremos acompañados por pastizales habitados por rebaños de alpacas y llamas que pastan libremente en su hábitat natural.',
        image: 'rainbow_llamas.png'
      },
      {
        day: 'Parada 5',
        title: 'La Cima de Vinicunca',
        desc: 'Llegada a la asombrosa Montaña de Colores (5,200m). Tendremos tiempo suficiente para recuperar el aliento, escuchar la explicación geológica y tomar fotografías memorables.',
        image: 'rainbow_viajero.png',
        accommodation: 'Altitud máx: 5,200m'
      },
      {
        day: 'Parada 6',
        title: 'Retorno a Cusco',
        desc: 'Descenderemos durante 1 hora de regreso a Fulawasipata. Viajaremos de regreso para un merecido almuerzo reconfortante y estaremos llegando a Cusco entre las 4:30 y 5:00 pm.'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Briefing 6:00pm la noche anterior. Recojo 3:30-4:00am. Este tour alcanza los 5,200m — MAYOR altitud de todo el portafolio de Cusco Pathways Adventure. Se recomienda ENCARECIDAMENTE mínimo 3 días completos de aclimatación en Cusco. Temporada de lluvias (nov-mar) para colores más vibrantes. Temporada seca (abr-oct) para cielos más despejados.'
  },
  'ausangate-7lakes': {
    title: 'TOUR AUSANGATE 7 LAGUNAS: EL CAMINO DE LAS LAGUNAS SAGRADAS',
    tagline: 'El Secreto del Altiplano',
    subtitle: 'Belleza natural e inmersión cultural genuina',
    route: 'Cusco → Pacchanta → 7 Lagunas → Aguas Termales → Cusco',
    duration: 'Día completo',
    difficulty: 'Moderado',
    altitude: '4,800m',
    groupSize: 'Max. 12 pasajeros',
    distance: '16 km / 9.94 mi',
    season: 'Abril-Octubre (Temporada Seca)',
    start: 'Cusco',
    acclimatization: '2-3 días en Cusco recomendados',
    rating: '4.8 (1,530 reseñas)',
    image: 'ausangate_luna.png',
    heroImage: 'ausangate_luna.png',
    brochure: 'assets/documents/CuscoPathways_Ausangate7Lakes_SacredLakesPath.pdf',
    map: 'assets/images/day-treks/ausangate_7_lakes_map.webp',
    description: `El macizo del Ausangate — la montaña más alta y sagrada de la región de Cusco a 6,384m — guarda un mundo de extraordinarias lagunas de colores. El sendero de las 7 Lagunas te lleva por uno de los paisajes más dramáticos del altiplano peruano: lagunas turquesas, verdes y cobalto bajo las faldas del glaciar, comunidades quechuas tradicionales, alpacas y llamas a 4,800m, y las fuentes termales naturales de Pacchanta. Desayuno y almuerzo con familias andinas locales.<br><br><strong>¿Por qué elegirnos?</strong><br>Mientras la Montaña de Colores se ha vuelto famosa, las 7 Lagunas del Ausangate siguen siendo un secreto. La combinación de extraordinaria belleza natural con inmersión cultural genuina — desayuno y almuerzo con familias quechuas, aguas termales compartidas con locales — hace de esta una de las experiencias de un día más completas y auténticas de todo el portafolio.`,
    highlights: [
      'ausangate_luna.png',
      'ausangate_andina.png',
      'ausangate_otorongo.png',
      'ausangate_hatun.png',
      'ausangate_apachetas.png',
      'ausangate_alpacas.png',
      'ausangate_panel.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Entrada al circuito Ausangate 7 Lagunas',
      'Desayuno con familia local Pacchanta',
      'Almuerzo con familia local Pacchanta',
      'Snacks y agua en el sendero',
      'Bastones de trekking incluidos',
      'Bolsa de tela para snacks',
      'Botiquín + oxígeno',
      'briefing 5pm'
    ],
    exclusions: [
      'Entrada Aguas Termales Pacchanta (opcional pero recomendada)',
      'Cena',
      'Seguro de viaje',
      'equipo personal',
      'propinas'
    ],
    packingList: [
      'Botas impermeables',
      'Capas muy abrigadas — 4,800m es extremadamente frío',
      'Ropa interior térmica',
      'Chaqueta y pantalones impermeables',
      'Gorro de lana y guantes',
      'Protector solar FPS70+, gafas UV',
      'Botella 2L, traje de baño para aguas termales',
      'Medicación, cámara, soles'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Llegada a Pacchanta',
        desc: 'Recojo muy temprano. Conducción a la comunidad de Pacchanta (4,100m) al pie del glaciar del Ausangate para disfrutar de un nutritivo desayuno con una familia local.'
      },
      {
        day: 'Parada 2',
        title: 'Ascenso Glaciar',
        desc: 'El sendero asciende por un espectacular terreno glaciar donde observaremos la vida cotidiana de comunidades que se ha mantenido sin cambios por siglos.',
        image: 'ausangate_andina.png'
      },
      {
        day: 'Parada 3',
        title: 'Las 7 Lagunas de Ausangate',
        desc: 'Visitaremos las extraordinarias lagunas turquesas, verdes y cobalto, incluyendo Otorongo y Hatun Puka Qocha, alcanzando un punto máximo de 4,800m.',
        image: 'ausangate_hatun.png'
      },
      {
        day: 'Parada 4',
        title: 'Fauna y Montañas',
        desc: 'Caminaremos rodeados del impresionante macizo del Ausangate y observaremos llamas y alpacas en su hábitat natural.',
        image: 'ausangate_alpacas.png'
      },
      {
        day: 'Parada 5',
        title: 'Aguas Termales',
        desc: 'Almuerzo tradicional preparado por una familia local (genuino intercambio cultural) y opción de relajarse en las fuentes termales de Pacchanta.',
        image: 'ausangate_luna.png',
        accommodation: 'Altitud máx: 4,800m'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Se recomiendan mínimo 2-3 días de aclimatación en Cusco. Esta caminata llega a 4,800m. Recojo temprano — confirmar hora exacta en briefing 5pm. Entrada Aguas Termales Pacchanta NO incluida — llevar PEN 15/USD $5. Las comidas con familias locales NO son un espectáculo — son un genuino intercambio cultural.'
  },
  'humantay-classic': {
    title: 'TOUR LAGUNA HUMANTAY: EL CAMINO TURQUESA',
    tagline: 'La Joya de los Andes',
    subtitle: 'Belleza natural y poder espiritual',
    route: 'Cusco → Mollepata → Soraypampa → Laguna Humantay',
    duration: 'Día completo ~13hrs (ida y vuelta)',
    difficulty: 'Moderado',
    altitude: '4,200m — Laguna Humantay',
    groupSize: 'Max. 12 pasajeros',
    distance: '5 km ida y vuelta',
    season: 'Todo el año',
    start: 'Cusco, 4:00am',
    acclimatization: '1-2 días en Cusco recomendados',
    rating: '4.9 (4,032 reseñas)',
    image: 'humantay_main.png',
    heroImage: 'humantay_main.png',
    brochure: 'assets/documents/CuscoPathways_HumantayLake_TurquoisePath.pdf',
    description: `Anidada bajo los glaciares de las montañas Humantay y Salkantay, la Laguna Humantay es uno de los paisajes más perfectamente compuestos de la naturaleza. Sus aguas esmeralda-turquesas brillan contra nieve perpetua a más de 4,200m. Considerada sagrada por las comunidades andinas locales como sitio de ofrendas a los Apus. Una caminata de 5km y un almuerzo preparado por un chef en el exclusivo Sky Camp.<br><br><strong>¿Por qué elegirnos?</strong><br>Algunos lugares existen en la intersección de la belleza natural y el poder espiritual. La Laguna Humantay es uno de ellos. El color de sus aguas — un turquesa-esmeralda imposible que cambia con la luz — no tiene igual en la región de Cusco. Con menos de 4 horas de caminata con guía profesional y almuerzo preparado por un chef en un exclusivo campamento de montaña, es una de las experiencias extraordinarias más accesibles de los Andes.`,
    highlights: [
      'humantay_main.png',
      'humantay_sendero.png',
      'humantay_trekkers.png',
      'humantay_pareja.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Entrada Laguna Humantay',
      'Desayuno en ruta',
      'Almuerzo preparado por chef en Sky Camp',
      'Snacks y agua en el sendero',
      'Botiquín + oxígeno'
    ],
    exclusions: [
      'Cena',
      'Equipo personal',
      'Seguro de viaje',
      'Propinas'
    ],
    packingList: [
      'Botas impermeables',
      'Capas abrigadas',
      'Chaqueta impermeable',
      'Protector solar, sombrero, gafas',
      'Botella 2L',
      'Medicación, cámara, soles'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Viaje a Mollepata',
        desc: 'Recojo a las 4:00am. Conducción por las llanuras de Anta hacia Mollepata para disfrutar de un buen desayuno andino antes de la caminata.'
      },
      {
        day: 'Parada 2',
        title: 'Llegada a Soraypampa',
        desc: 'Continuamos en transporte hasta Soraypampa (3,900m) — campamento base del Trek Salkantay y hogar de nuestro exclusivo Sky Camp, donde iniciaremos la caminata.'
      },
      {
        day: 'Parada 3',
        title: 'Ascenso a la Laguna',
        desc: 'Caminata de ascenso de 2.5km (aproximadamente 1.5 horas) por terreno andino de alta altitud con vistas espectaculares del entorno montañoso.',
        image: 'humantay_sendero.png'
      },
      {
        day: 'Parada 4',
        title: 'La Laguna Humantay',
        desc: 'Llegada a la asombrosa laguna turquesa (4,200m). Tiempo libre para tomar fotografías inolvidables, absorber el profundo silencio y conectar con la naturaleza.',
        image: 'humantay_pareja.png',
        accommodation: 'Altitud máx: 4,200m'
      },
      {
        day: 'Parada 5',
        title: 'Almuerzo en Sky Camp',
        desc: 'Descenso a Soraypampa para disfrutar de un merecido y delicioso almuerzo preparado por nuestro chef en el exclusivo Sky Camp. Regreso a Cusco llegando aproximadamente a las 6:30pm.',
        image: 'humantay_trekkers.png'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Recojo 4:00am. Regreso aproximadamente 6:30pm. Se recomiendan mínimo 1-2 días de aclimatación en Cusco. Este tour es también la preparación perfecta del Día 0 antes del Trek Salkantay Clásico o Premium — visitarás las mismas instalaciones del Sky Camp del Día 1 del trek.'
  },
  'pallay-punchu': {
    title: 'TREK PALLAY PUNCHU: EL CAMINO TEJIDO',
    tagline: 'La Corona Andina',
    subtitle: 'La montaña que parece tejida a mano',
    route: 'Cusco → Cusipata → Layo → Pallay Punchu',
    duration: 'Día completo ~12hrs',
    difficulty: 'Moderado',
    altitude: '4,730m — Pallay Punchu',
    groupSize: 'Max. 12 pasajeros',
    distance: '3 km / 1.86 mi',
    season: 'Todo el año',
    start: 'Cusco, 4:00am',
    acclimatization: '2+ días en Cusco recomendados',
    rating: '4.9 (420 reseñas)',
    image: 'pallay_cresta.png',
    heroImage: 'pallay_cresta.png',
    brochure: 'assets/documents/CuscoPathways_PallayPunchu_WovenPath.pdf',
    map: 'assets/images/day-treks/pallay_punchu_map.webp',
    description: `Pallay Punchu — quechua para 'poncho tejido' — es la tercera y menos visitada de las Montañas Arcoíris de Cusco. Descubierta durante el confinamiento por Covid-19 en 2020 y todavía prácticamente desconocida para el turismo masivo, ofrece el recorrido de cresta más dramático de las tres experiencias: bordes dentados que se elevan como una corona natural, en tonos de cian, marrón y magenta, con el azul profundo de la Laguna de Langui muy abajo.<br><br><strong>¿Por qué elegirnos?</strong><br>Hay una montaña en los Andes que parece tejida a mano — construida de bandas minerales alternas tan precisas como el textil de un maestro tejedor. Pallay Punchu es esa montaña. Descubierta solo durante el confinamiento global de 2020, sigue siendo prácticamente desconocida, genuinamente sin multitudes y absolutamente extraordinaria. En una región donde algunos de los sitios más famosos del mundo están saturados de visitantes, Pallay Punchu es todavía un lugar donde puedes estar solo en una montaña pintada de cian y magenta y escuchar solo el viento.`,
    highlights: [
      'pallay_cresta.png',
      'pallay_mirador.png',
      'pallay_mujer.png',
      'pallay_roca.png',
      'pallay_trekker.png',
      'pallay_vacio.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Entrada a Montaña Pallay Punchu',
      'Desayuno en restaurante de Cusipata',
      'Box lunch y snacks en el sendero',
      'Agua en el sendero',
      'Bolsa de tela para snacks',
      'Cubierta impermeable para mochila',
      'Botiquín + oxígeno',
      'briefing 5pm noche anterior'
    ],
    exclusions: [
      'Cena',
      'Equipo personal',
      'Seguro de viaje',
      'Propinas'
    ],
    packingList: [
      'Pasaporte vigente',
      'Botas impermeables',
      'Capas muy abrigadas',
      'Chaqueta impermeable y poncho',
      'Ropa interior térmica',
      'Gorro de lana y guantes impermeables',
      'Protector solar FPS70+, gafas UV',
      'Botella 2L o bolsa de hidratación',
      'Medicación, cámara, batería extra/power bank, soles cash',
      'Poncho andino para fotos en cima — pedir al guía'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Rumbo a Cusipata',
        desc: 'Recojo a las 4:00am. Conducción al sureste hacia Cusipata (3,310m) para disfrutar de un desayuno abundante antes de la caminata.'
      },
      {
        day: 'Parada 2',
        title: 'Layo y Laguna Langui',
        desc: 'Viajaremos pasando por Marangani y la hermosa Laguna de Langui hasta el inicio del sendero en Layo. Caminaremos cuesta arriba por pastizales.'
      },
      {
        day: 'Parada 3',
        title: 'Montaña Pallay Punchu',
        desc: 'La cresta multicolor dentada de Pallay Punchu se eleva ante ti — capas de cian, marrón y magenta formando picos agudos.',
        image: 'pallay_roca.png'
      },
      {
        day: 'Parada 4',
        title: 'Cresta Multicolor',
        desc: 'Caminaremos por la cresta dentada maravillándonos con su único rango de colores.',
        image: 'pallay_cresta.png'
      },
      {
        day: 'Parada 5',
        title: 'Descenso y Retorno',
        desc: 'Momento para la foto icónica con un poncho andino. Descenso y retorno con un box lunch en el sendero.',
        image: 'pallay_mujer.png',
        accommodation: 'Altitud máx: 4,730m'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Briefing 5:00pm la noche anterior. Recojo 4:00am. El Valle Rojo es más vívido en temporada de lluvias (nov-mar). Temporada seca (abr-oct) para condiciones más claras. Recomendamos 2+ días de aclimatación en Cusco. Pallay Punchu sigue sin multitudes — una de las últimas joyas no descubiertas. El viaje de 4 horas pasa por impresionantes paisajes andinos.'
  },
  'palcoyo': {
    title: 'TOUR MONTAÑA PALCOYO: EL CAMINO ESCÉNICO',
    tagline: 'El Hermano Tranquilo',
    subtitle: 'Tres montañas coloridas y el Valle Rojo',
    route: 'Cusco → Cusipata → Layo → Cordillera Palcoyo',
    duration: 'Día completo',
    difficulty: 'Moderado',
    altitude: '4,730m — Palcoyo',
    groupSize: 'Max. 12 pasajeros',
    distance: '3 km / 1.86 mi',
    season: 'Todo el año',
    start: 'Cusco, 4:00am',
    acclimatization: '2+ días en Cusco recomendados',
    rating: '4.9 (2,104 reseñas)',
    image: 'palcoyo_panoramica.png',
    heroImage: 'palcoyo_panoramica.png',
    brochure: 'assets/documents/CuscoPathways_Palccoyo_ScenicPath.pdf',
    map: 'assets/images/day-treks/palcoyo_map.webp',
    description: `Palcoyo es el hermano más tranquilo y accesible de la Montaña de Colores — y para muchos viajeros que conocen ambas, la experiencia más gratificante. Donde Vinicunca ofrece una única cima dramática, Palcoyo presenta toda una cordillera: tres montañas coloridas visibles simultáneamente, un bosque de piedra de extraordinarias formaciones geológicas y un vistazo al río carmesí del Valle Rojo. Menos concurrido, caminata más corta, igual de impresionante.<br><br><strong>¿Por qué elegirnos?</strong><br>Palcoyo es lo que la Montaña de Colores habría sido antes de que el mundo la descubriera: tres extraordinarias montañas coloridas visibles a la vez, un bosque de piedra que desafía la descripción, un río del Valle Rojo del color del óxido y casi sin colas. La parada en Checacupe — puentes de tres eras, el sitio donde cayó Túpac Amaru II — añade una profundidad histórica que la Montaña de Colores no puede ofrecer.`,
    highlights: [
      'palcoyo_panoramica.png',
      'palcoyo_cumbre.png',
      'palcoyo_alpacas.png',
      'palcoyo_mujer.png',
      'palcoyo_mirador.png',
      'palcoyo_bosque.png',
      'palcoyo_sendero.png'
    ],
    inclusions: [
      'Transporte privado ida y vuelta',
      'Guía bilingüe certificado',
      'Entrada Montaña Palcoyo',
      'Desayuno en restaurante de Cusipata',
      'Almuerzo buffet después de la caminata',
      'Snacks y agua en el sendero',
      'Cubierta impermeable para mochila',
      'Botiquín + oxígeno'
    ],
    exclusions: [
      'Cena',
      'Equipo personal',
      'Seguro de viaje',
      'Propinas'
    ],
    packingList: [
      'Capas abrigadas — 4,730m frío y ventoso',
      'Chaqueta impermeable',
      'Botas de trekking',
      'Protector solar FPS70+, gafas UV, gorro y guantes',
      'Botella 2L',
      'Medicación, cámara, soles'
    ],
    itinerary: [
      {
        day: 'Parada 1',
        title: 'Viaje a Layo',
        desc: 'Desayuno en Cusipata y viaje pasando por la Laguna de Langui hasta el punto de partida en Layo.'
      },
      {
        day: 'Parada 2',
        title: 'Mirador de Palcoyo',
        desc: 'Caminata de 20 minutos por pastizales andinos hasta llegar al primer mirador de Palcoyo.',
        image: 'palcoyo_sendero.png'
      },
      {
        day: 'Parada 3',
        title: 'Montañas Coloridas',
        desc: 'Continuamos 25 minutos hasta la montaña principal. Aquí se abre el panorama completo con tres montañas coloridas visibles juntas.',
        image: 'palcoyo_panoramica.png'
      },
      {
        day: 'Parada 4',
        title: 'Alpacas y Bosque',
        desc: 'Fotografía junto a alpacas decoradas localmente y ascenso al Bosque de Piedra para ver formaciones geológicas de otro mundo.',
        image: 'palcoyo_alpacas.png'
      },
      {
        day: 'Parada 5',
        title: 'Checacupe y Retorno',
        desc: 'Vistazo al río carmesí del Valle Rojo. En el regreso, paramos en Checacupe para visitar sus puentes históricos antes del almuerzo buffet.',
        image: 'palcoyo_bosque.png',
        accommodation: 'Altitud máx: 4,730m'
      }
    ],
    priceGroup: 'USD 00.00',
    privatePricing: [
      { size: '2 Personas', price: 'USD 250.00' },
      { size: '3 – 5 Personas', price: 'USD 200.00' },
      { size: '6 – 8 Personas', price: 'USD 150.00' },
      { size: '9 o más Personas', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Información Importante: Recojo 4:00am. El río carmesí del Valle Rojo es más vívido en la temporada de lluvias (nov-mar). La temporada seca (abr-oct) ofrece cielos más despejados. Se recomiendan 2+ días de aclimatación en Cusco. Menos concurrido que la Montaña de Colores — condiciones fotográficas significativamente mejores.'
  }
};
