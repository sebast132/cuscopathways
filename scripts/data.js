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
    'it4d_':      'assets/images/inca-trail/',
    'it2d_':      'assets/images/inca-trail/',
    'incatrail_': 'assets/images/inca-trail/',
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
    image: 'it4d_machupicchu_view.webp',
    tours: ['incatrail-classic', 'incatrail-short']
  },
  'salkantay': {
    title: 'Salkantay',
    image: 'dest_salkantay.webp',
    tours: ['salkantay-premium', 'salkantay-classic', 'salkantay-short', 'salkantay-celestial-2d']
  },
  'cusco-sacred-valley': {
    title: 'Cusco & Sacred Valley',
    image: 'dest_sacredvalley.webp',
    tours: ['cusco-cultural', 'valley-traditional', 'valley-super', 'valley-maras']
  },
  'rainbow-mountain': {
    title: 'Day Treks',
    image: 'tour_rainbow.webp',
    tours: ['rainbow-classic', 'humantay-classic', 'ausangate-7lakes']
  },
  'machu-picchu': {
    title: 'Machu Picchu',
    image: 'dest_machupicchu.png',
    tours: ['valley-machupicchu-2d', 'machupicchu-fullday']
  }
};

// ─── Tours Dataset ───────────────────────────────────────────
const toursData = {
  'salkantay-premium': {
    title: 'SALKANTAY TREK: THE PREMIUM ANDEAN PATHWAY — 5 DAYS',
    tagline: 'Glamping & Luxury',
    subtitle: 'All the grandeur of the Classic, elevated',
    route: 'Cusco → Soraypampa → Salkantay Pass → Chaullay → Lucmabamba → Machu Picchu',
    duration: '5 days / 4 nights',
    difficulty: 'Moderate to Challenging',
    altitude: '4,630m — Salkantay Pass',
    groupSize: 'Max. 16 passengers',
    distance: '~61.1 km / 38 mi',
    season: 'April–October. All year round.',
    level: 'Premium group tour',
    acclimatization: 'Min. 2 days in Cusco',
    rating: '4.9 (1,243 reviews)',
    image: 'dest_salkantay.webp',
    heroImage: 'dest_salkantay.webp',
    brochure: 'assets/documents/CuscoPathways_PremiumSalkantayTrek_5Days_ENG.pdf',
    map: 'assets/images/salkantay/premium_salkantay_map.webp',
    description: `All the grandeur of the Classic, elevated. Every comfort is enhanced: sleeping bag and walking poles included, emergency horse on Day 2, Cocalmayo hot springs on Day 3, private train on Day 4, Vistadome Observatory on the return, 3-star hotel in Aguas Calientes, 10kg duffle bag, airport transfers.<br><br><strong>Why choose us?</strong><br>Salkantay Premium is for those who want it all: the wild beauty of the Andes, the achievement of the Salkantay Pass, and the luxury of knowing that every comfort is arranged. From airport arrival to the return Vistadome Observatory train, every detail is cared for.`,
    highlights: [
      'All the attractions of the Classic trek',
      'Emergency horse on Day 2',
      'Cocalmayo Hot Springs on Day 3',
      'Sacred Jungle Lodge Night 3',
      'Private train on Day 4',
      'Vistadome Observatory return train',
      'Superior 3-star hotel',
      'Sleeping bag + walking poles included',
      '10kg duffle bag - twice the Classic limit',
      'Airport transfers included'
    ],
    inclusions: [
      'Arrival and departure airport transfers',
      'Transportation on Day 1',
      'Private train on Day 4',
      'PeruRail Vistadome Observatory on Day 5',
      'One-way bus Aguas Calientes to Machu Picchu',
      '4 nights (Sky Camp / Mountain Sky View / Sacred Jungle Lodge / 3-star Hotel)',
      '5 breakfasts / 5 lunches / 4 dinners',
      'Cocalmayo Hot Springs entrance on Day 3',
      'Emergency horse on Day 2',
      'Sleeping bag + walking poles included',
      '10kg duffle bag',
      'Entrance tickets (Humantay Lake, Salkantay Trek, Machu Picchu Circuit 2)',
      'Certified bilingual guide',
      'First-aid kit + oxygen',
      'Pre-departure briefing at 5pm'
    ],
    exclusions: [
      'Huayna Picchu / Machu Picchu Mountain tickets (pre-book)',
      'Return bus ticket from Machu Picchu (~USD $12)',
      'Lunch in Aguas Calientes and dinner in Cusco on Day 5',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Valid original passport',
      'Waterproof boots',
      'Waterproof jacket and poncho',
      'Warm layers, thermal underwear',
      'Hat, UV sunglasses, sunscreen SPF50+',
      'Insect repellent, 2L water bottle',
      'Personal medication, camera, power bank, cash in soles',
      'Swimwear for hot springs'
    ],
    accommodation: [
      { day: 'Day 1', name: 'Sky Camp', type: 'Luxury Domes', image: 'accom_sky_camp.webp', desc: 'Spectacular transparent geodesic domes located at 3,900m altitude with direct views of Salkantay peak and the starry sky. Each dome features premium double mattresses, hotel-quality bedding, warm lighting, and a private bathroom with hot water. At night, the celestial vault becomes your starry ceiling.' },
      { day: 'Day 2', name: 'Mountain Sky View Camp', type: 'Panoramic Domes', image: 'accom_mountain_sky.webp', desc: 'Located at a privileged natural viewpoint at 3,800m, these panoramic domes offer 180° views of the Vilcabamba Range peaks. The interior includes heating, high-mountain duvets, and a dinner service prepared by our chef. A place where the silence of the Andes becomes the best melody to rest.' },
      { day: 'Day 3', name: 'Super Jungle Domes', type: 'Ecological Domes', image: 'accom_jungle_domes.webp', desc: 'Immersed in the lush vegetation of the high jungle, these eco-domes merge sustainable design with jungle comfort. Each unit has a private terrace with hammocks, a hot shower, and natural ventilation. At night, the singing of tropical birds and the murmur of the rivers will accompany you into a deep, restful sleep.' },
      { day: 'Day 4', name: 'Hotel 3★ Aguas Calientes', type: 'Boutique Hotel', image: 'accom_hotel_aguas.webp', desc: 'Modern boutique hotel in the heart of Aguas Calientes (Machu Picchu Pueblo), just a 5-minute walk from the bus stop to the citadel. Double room with private bathroom, TV, Wi-Fi, decorative Andean textiles, and buffet breakfast included. Ideal for resting and preparing for the grand visit on the final day.' },
    ],
    pricePrivate: 'USD 1,250.00',
    priceGroup: 'USD 1,059.00',
    offer: 'Includes a 30-minute massage at Soraypampa camp and priority access to Humantay Lake.',
    importantNote: 'Important Information: Pre-departure briefing at 5:00pm the night before. Full payment due 2 days prior. Original passport mandatory. Book Machu Picchu tickets 3 months in advance. Vistadome Observatory train available for 2026 bookings.',
    relatedTours: ['salkantay-classic', 'salkantay-short', 'humantay-classic'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco > Challacancha > Humantay Lake > Sky Camp',
        desc: 'Same as Classic Day 1. Pickup at 4:30am, breakfast in Mollepata, lunch at Sky Camp, Humantay Lake (4,200m).',
        accommodation: 'Dist: 10km | Alt: 4,200m | Accommodation: Sky Camp igloos (3,900m)'
      },
      {
        day: 'Day 2',
        title: 'Soraypampa > Salkantay Pass > Mountain Sky View (Emergency Horse)',
        desc: 'Ascent to Salkantay Pass (4,630m) with emergency horse from Soraypampa. Extraordinary panorama. Descent to Mountain Sky View.',
        accommodation: 'Dist: 23.5km | Alt: 4,630m | Accommodation: Mountain Sky View (2,950m)'
      },
      {
        day: 'Day 3',
        title: 'Coffee Farm > Hot Springs > Sacred Jungle Lodge',
        desc: 'Coffee farm experience and then Cocalmayo Hot Springs — natural thermal pools in the jungle. Night at Sacred Jungle Lodge.',
        accommodation: 'Dist: 10.3km | Accommodation: Sacred Jungle Lodge (1,900m)'
      },
      {
        day: 'Day 4',
        title: 'Llactapata > Hydroelectric > Private Train > Aguas Calientes',
        desc: 'Llactapata ruins, descend to Hydroelectric. Private train to Aguas Calientes. 3-star hotel awaits you.',
        accommodation: 'Dist: 14km | Accommodation: Superior 3-star hotel, Aguas Calientes'
      },
      {
        day: 'Day 5',
        title: 'Machu Picchu > Vistadome Observatory > Cusco',
        desc: 'Explore Machu Picchu at sunrise. Return on PeruRail Vistadome Observatory — panoramic glass roof. Airport transfer included.',
        accommodation: 'Difficulty: Easy | Machu Picchu: 2,430m'
      }
    ]
  },
  'salkantay-classic': {
    title: 'SALKANTAY TREK: THE CLASSIC ANDEAN PATHWAY — 5 DAYS',
    tagline: 'The Classic Andean Pathway',
    subtitle: 'A Multi-Experience Adventure',
    route: 'Cusco → Challacancha → Humantay Lake → Salkantay Pass → Llactapata → Machu Picchu',
    duration: '5 Days / 4 Nights',
    difficulty: 'Moderate to Challenging',
    altitude: '4,630 m',
    groupSize: 'Max. 16 passengers',
    rating: '4.9 (1,243 reviews)',
    image: 'dest_salkantay.webp',
    heroImage: 'dest_salkantay.webp',
    brochure: 'assets/documents/CuscoPathways_ClassicSalkantayTrek_5Days.pdf',
    map: 'assets/images/salkantay/classic_salkantay_map.webp',
    description: `In 5 days, cross the Salkantay Pass at 4,630m, hike from glacial peaks through the cloud forest to the Peruvian jungle, sleep in exclusive campsites, and stand before Machu Picchu. Ranked among the world's top 25 trekking routes by National Geographic.<br><br><strong>Why choose us?</strong><br>The Classic Salkantay is the benchmark against which all other Andean treks are measured. It offers an open trail with extraordinary variety — from glacial landscapes to tropical rainforest. With Cusco Pathways Adventure, you experience this route with exclusive private campsites, gourmet mountain cuisine, and certified guides. This is not simply a trek to Machu Picchu. It is a full immersion into the soul of the Andes.`,
    highlights: [
      'One of the top 25 trekking routes in the world',
      'Turquoise Humantay Lake (4,200m) on Day 1',
      'Salkantay Pass at 4,630m',
      'Glacial Andean peaks to Amazonian cloud forest',
      'Llactapata with panoramic views of Machu Picchu',
      'Authentic coffee farm in the jungle zone',
      '4 nights in exclusive campsites',
      'Machu Picchu with an expert bilingual guide'
    ],
    inclusions: [
      'Transportation included',
      'Private transportation on Day 3',
      'Aguas Calientes to Ollantaytambo train',
      'One-way bus Aguas Calientes to Machu Picchu',
      '4 nights accommodation (Sky Camp / Mountain Sky View / Super Jungle Domes / Hotel)',
      '5 breakfasts / 4 lunches / 4 dinners',
      'Daily coca tea and snacks',
      'Entrance tickets included',
      'Certified bilingual guide',
      'Pre-departure briefing at 5pm the night before',
      'Duffle bag + pack mules on Days 1-3',
      'First-aid kit + oxygen'
    ],
    exclusions: [
      'Sleeping bag rental (USD $25)',
      'Trekking poles rental (USD $25)',
      'Huayna Picchu entrance',
      'Return bus ticket from Machu Picchu',
      'Lunch in Aguas Calientes and dinner in Cusco (Day 5)',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Original valid passport mandatory (no copies)',
      'Waterproof hiking boots (broken in)',
      'Waterproof jacket and poncho',
      'Warm layers',
      'Thermal underwear',
      'Hat / wool beanie / buff',
      'UV sunglasses',
      'Sunscreen SPF50+',
      'Insect repellent',
      '2L water bottle',
      'Personal medication and altitude remedies',
      'Camera / power bank / cash in soles',
      'Small daypack 15-25L'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco > Challacancha > Humantay Lake > Sky Camp',
        desc: 'Pickup at 4:30am. Optional breakfast in Mollepata. 10km hike to Soraypampa (3,900m), lunch at Sky Camp, roundtrip to Humantay Lake (4,200m). Dinner and stargazing.',
        accommodation: 'Distance: 10km | Altitude: 4,200m | Difficulty: Moderate-Challenging | Accommodation: Sky Camp igloos (3,900m)'
      },
      {
        day: 'Day 2',
        title: 'Soraypampa > Salkantay Pass (4,630m) > Mountain Sky View',
        desc: '7km ascent to Salkantay Pass (4,630m) — views of Salkantay peak (6,271m). 9.5km descent through cloud forest to Collpapampa. Private cabins, hot shower.',
        accommodation: 'Distance: 23.5km | Altitude: 4,630m | Difficulty: Challenging | Accommodation: Mountain Sky View (2,950m)'
      },
      {
        day: 'Day 3',
        title: 'Collpapampa > Coffee Farm > Super Jungle Domes',
        desc: 'Peaceful day through the Santa Teresa Valley. Private vehicle to La Playa for a coffee farm experience — tour the plantation, harvest, roast, grind, and brew your cup.',
        accommodation: 'Distance: 10.3km | Altitude: 2,950m | Difficulty: Moderate | Accommodation: Super Jungle Domes (2,000m)'
      },
      {
        day: 'Day 4',
        title: 'Lucmabamba > Llactapata > Hydroelectric > Aguas Calientes',
        desc: 'Llactapata ruins with a direct view of Machu Picchu. Hike to Hydroelectric, riverside trail, afternoon train to Aguas Calientes.',
        accommodation: 'Distance: 25km | Altitude: 2,800m | Difficulty: Challenging | Accommodation: Aguas Calientes Hotel (2,040m)'
      },
      {
        day: 'Day 5',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Sunrise bus to Machu Picchu. 2-hour guided tour: temples, terraces, Intihuatana. Optional Huayna Picchu. Afternoon train, private transfer to Cusco hotel ~8pm.',
        accommodation: 'Difficulty: Easy | Machu Picchu Alt: 2,430m'
      }
    ],
    pricePrivate: 'USD 1,650.00',
    priceGroup: 'USD 669.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 1,650.00' },
      { size: '2 – 3 People', price: 'USD 1,300.00' },
      { size: '4 – 5 People', price: 'USD 950.00' },
      { size: '6 – 9 People', price: 'USD 850.00' },
      { size: '10 People or More', price: 'USD 750.00' }
    ],
    offer: '<b>Super Combo (group service only) – USD 820.00 per person:</b><br>• Airport transfer to your hotel upon arrival in Cusco<br>• Salkantay Trek Classic 5 Days<br>• Sleeping bag + trekking poles<br>• Rainbow Mountain Full Day tour',
    importantNote: 'Important Information: Pre-departure briefing at 5:00pm at the office (mandatory). Full payment due 2 days prior. Original passport mandatory. Book Machu Picchu 3 months in advance. Llactapata Day 4 might not be guaranteed in the rainy season. Free luggage storage.'
  },
  'salkantay-short': {
    title: 'SALKANTAY TREK: THE SHORT ANDEAN EXPLORER — 4 DAYS',
    tagline: 'Express Adventure',
    subtitle: 'Less time, zero compromises',
    route: 'Cusco → Challacancha → Humantay Lake → Salkantay Pass → Machu Picchu',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate to Challenging',
    altitude: '4,630m / 15,190ft — Salkantay Pass',
    groupSize: 'Max. 16 passengers',
    rating: '4.9 (1,243 reviews)',
    image: 'dest_salkantay.webp',
    heroImage: 'dest_salkantay.webp',
    brochure: 'assets/documents/CuscoPathways_ShortSalkantayTrek_4Days_ENG.pdf',
    map: 'assets/images/salkantay/short_salkantay_map.webp',
    description: `The Short Salkantay offers the most iconic experiences — Humantay Lake, Salkantay Pass, cloud forest, and Machu Picchu — in a tight 4-day itinerary. By removing the detour to Llactapata and incorporating a private transfer on Day 3, it maintains the full high-altitude challenge.<br><br><strong>Why choose us?</strong><br>Less time, zero compromises. Four days are enough to experience the complete emotional arc — the turquoise lake, the imposing pass, the descent into the jungle, and the wonder of Machu Picchu.`,
    highlights: [
      'Humantay Lake (4,200m)',
      'Salkantay Pass at 4,630m',
      'Glacial peaks to cloud forest in one day',
      'Coffee farm experience',
      '2 exclusive camp nights',
      'Machu Picchu with an expert bilingual guide'
    ],
    inclusions: [
      'Day 1 transportation',
      'Private transportation on Day 3',
      'Private transportation from Ollantaytambo to Cusco hotel on Day 4',
      'Aguas Calientes to Ollantaytambo train (PeruRail Expedition or Inca Rail Voyager)',
      'One-way bus Aguas Calientes to Machu Picchu',
      '3 nights accommodation (Sky Camp / Mountain Sky View / Aguas Calientes Hotel)',
      '4 breakfasts / 3 lunches / 3 dinners',
      'Entrance tickets: Humantay Lake, Salkantay Trek, Machu Picchu Circuit 2',
      'Bilingual guide',
      'Duffle bag max 5kg',
      'Pack mules on Days 1-2',
      'First-aid kit',
      'Briefing'
    ],
    exclusions: [
      'Sleeping bag rental (USD $20)',
      'Trekking poles rental (USD $20)',
      'Hydroelectric to Aguas Calientes train if needed (USD $41)',
      'Return bus ticket from Machu Picchu (~USD $12)',
      'Huayna Picchu / Machu Picchu Mountain ticket',
      'Lunch in Aguas Calientes and dinner in Cusco on Day 4',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Original passport',
      'Waterproof boots',
      'Jacket and poncho',
      'Warm layers',
      'Hat, sunscreen, sunglasses',
      'Insect repellent, 2L bottle',
      'Personal medication, camera, power bank, cash in soles'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco > Challacancha > Humantay Lake > Sky Camp',
        desc: 'Pickup at 4:30am. Optional breakfast in Mollepata, Challacancha. 7km hike to Soraypampa, lunch at Sky Camp, Humantay Lake (4,200m).',
        accommodation: 'Distance: 10km | Altitude: 4,200m | Accommodation: Sky Camp (3,900m).'
      },
      {
        day: 'Day 2',
        title: 'Soraypampa > Salkantay Pass (4,630m) > Mountain Sky View',
        desc: 'Ascent to Salkantay Pass (4,630m), descent to cloud forest in Collpapampa. Private cabins, hot shower.',
        accommodation: 'Distance: 23.5km | Altitude: 4,630m | Accommodation: Mountain Sky View (2,950m).'
      },
      {
        day: 'Day 3',
        title: 'Coffee Farm > Hydroelectric > Aguas Calientes',
        desc: 'Descend Santa Teresa Valley to La Playa for a coffee farm. Private transfer to Hydroelectric, hike along train tracks to Aguas Calientes.',
        accommodation: 'Distance: 19.5km | Accommodation: Hotel Aguas Calientes (2,040m).'
      },
      {
        day: 'Day 4',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Early bus to Machu Picchu. 2-hour guided tour. Optional mountain climbs. Afternoon train, private transfer to Cusco.',
        accommodation: 'Difficulty: Easy | Altitude Machu Picchu: 2,430m.'
      }
    ],
    pricePrivate: 'USD 1,520.00',
    priceGroup: 'USD 600.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 1,520.00' },
      { size: '2 – 3 People', price: 'USD 1,200.00' },
      { size: '4 – 5 People', price: 'USD 900.00' },
      { size: '6 – 9 People', price: 'USD 800.00' },
      { size: '10 People or More', price: 'USD 700.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 730.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Salkantay Trek Short 4 Days<br>• Sleeping Bag + Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Important Information: Pre-departure briefing at 5:00pm the night before. Full payment due 2 days prior. Original passport mandatory. Book Machu Picchu 3 months in advance. This route does NOT include the Llactapata ruins.'
  },
  'incatrail-classic': {
    title: 'CLASSIC INCA TRAIL 4 DAYS: THE ROYAL PATHWAY',
    tagline: 'Original Inca Trail',
    subtitle: 'The most famous route to Machu Picchu',
    route: 'Km 82 → Wayllabamba → Pacaymayo → Wiñay Wayna → Machu Picchu',
    duration: '4 days / 3 nights',
    difficulty: 'Moderate to Challenging',
    altitude: '4,215m — Dead Woman\'s Pass',
    groupSize: 'Max. 16 passengers',
    distance: '~44 km / 27.3 mi',
    season: 'May–September. Closed in February.',
    start: 'KM 82 Piscacucho, 2,700m',
    acclimatization: 'Min. 2 days in Cusco',
    rating: '4.9 (8,193 reviews)',
    image: 'it4d_machupicchu_view.webp',
    heroImage: 'it4d_hero_hikers.webp',
    brochure: 'assets/documents/CuscoPathways_ClassicIncaTrail_4Days_ENG.pdf',
    brochureBgImage: 'it4d_machupicchu_view.webp',
    map: 'assets/images/inca-trail/classic_inca_trail_map.webp',
    description: `The Classic Inca Trail — an ancient 44km stone pathway built by Inca hands, crossing cloud forest, alpine tundra, and breath-taking passes to reach Machu Picchu through the Sun Gate at sunrise. With daily permits strictly limited, every step carries the weight of privilege. This is the trek that defines a lifetime.<br><br><strong>Why choose us?</strong><br>There are treks, and then there is the Inca Trail. Walking these stones is joining a five-century-old lineage of pilgrims. Arriving at Machu Picchu through the Sun Gate — not by bus, but on foot — sets this journey apart from any other in the world. Book in advance. Permits are highly prized.`,
    highlights: [
      'it4d_hero_hikers.webp',
      'it4d_machupicchu_view.webp',
      'it4d_paved_trail.webp',
      'it4d_moss_staircase.webp',
      'it4d_yellow_camp.webp',
      'it4d_mountain_camp.webp',
      'it4d_sayacmarca_ruins.webp',
      'it4d_golden_ruins.webp',
      'it4d_winaywayna_terraces.webp',
      'it4d_female_porter.webp',
      'it4d_ruins_sunset.webp',
      'it4d_ruins_scenic.webp',
      'it4d_incan_terraces.webp',
      'it4d_train_aguas_calientes.webp',
      'it4d_machupicchu_classic.webp'
    ],
    inclusions: [
      'Transportation Cusco-Ollantaytambo-KM 82 on Day 1',
      'Aguas Calientes-Ollantaytambo train on Day 4',
      'Private transportation from Ollantaytambo to Cusco hotel on Day 4',
      'One-way bus Aguas Calientes to Machu Picchu',
      '3 nights camping (high-quality tents, inflatable and foam mattresses)',
      'Portable toilet tent',
      'Fully equipped dining tent',
      '4 breakfasts / 3 lunches / 3 dinners',
      'Coca tea',
      'Afternoon tea/Happy Hour, daily snacks',
      'Inca Trail and Machu Picchu permits (Circuit 1 + Circuit 3)',
      'Certified bilingual guide',
      'Team of porters (Kallpa Team)',
      'Satellite phone',
      'First-aid kit + oxygen',
      'Pre-departure briefing at 5pm',
      '5kg max duffle bag'
    ],
    exclusions: [
      'Sleeping bag rental (USD $20)',
      'Trekking poles rental (USD $20)',
      'Lunch in Aguas Calientes and dinner in Cusco on Day 4',
      'Huayna Picchu / Machu Picchu Mountain tickets (pre-book)',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Original valid passport mandatory (no copies)',
      'Waterproof hiking boots (previously worn)',
      'Warm layers, jacket, and poncho',
      'Trekking poles (rentable)',
      'Sleeping bag (rentable)',
      'Headlamp + extra batteries',
      'Sunscreen SPF50+, sunglasses, repellent, 2L bottle',
      'Personal medication, camera, power bank, cash in soles'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco > KM 82 Piscacucho > Llactapata > Ayapata Camp',
        desc: 'Pickup 4:30-5:00am. Drive to Ollantaytambo for breakfast, then KM 82 — present original passport. Cross suspension bridge. Visit Llactapata. Continue to Ayapata camp.',
        image: 'it4d_paved_trail.webp',
        accommodation: 'Dist: 14km | Alt: 3,300m | Difficulty: Moderate | Campsite: Ayapata (3,300m)'
      },
      {
        day: 'Day 2',
        title: 'Ayapata > Dead Woman\'s Pass > Chaquicocha Camp',
        desc: 'Most challenging day. Ascent to Dead Woman\'s Pass (Warmiwañusca) at 4,215m. Runkurakay ruins. Descent through cloud forest to Sayaqmarka, then campsite.',
        image: 'it4d_yellow_camp.webp',
        accommodation: 'Dist: 16km | Alt: 4,215m | Difficulty: Challenging | Campsite: Chaquicocha (3,600m)'
      },
      {
        day: 'Day 3',
        title: 'Chaquicocha > Phuyupatamarka > Intipata > Wiñay Wayna',
        desc: 'Scenic day. Visit Phuyupatamarka \'town above the clouds\' (3,650m) with ritual fountains. Intipata terraces. Reach Wiñay Wayna — the most spectacular ruins. Last night on the trail.',
        image: 'it4d_winaywayna_terraces.webp',
        accommodation: 'Dist: 9km | Alt: 3,650m | Campsite: Wiñay Wayna (2,650m)'
      },
      {
        day: 'Day 4',
        title: 'Wiñay Wayna > Sun Gate > Machu Picchu > Cusco',
        desc: 'Wake up at 3:30am, hike with headlamp to the Sun Gate. See Machu Picchu appear through the morning mist. 2-hour guided tour. Optional mountain climbs. Afternoon train, private transfer to Cusco.',
        image: 'it4d_machupicchu_classic.webp',
        accommodation: 'Sun Gate: 2,720m | Machu Picchu: 2,430m'
      }
    ],
    priceGroup: 'USD 870.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 2,800.00' },
      { size: '2 – 3 People', price: 'USD 1,600.00' },
      { size: '4 – 5 People', price: 'USD 1,500.00' },
      { size: '6 – 9 People', price: 'USD 1,300.00' },
      { size: '10 People or More', price: 'USD 1,000.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 970.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Inca Trail Classic 4 Days<br>• Sleeping Bag + Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Important Information: Inca Trail permits are strictly limited — book 4-6 months in advance. Permits are non-transferable and non-changeable. Name must match passport exactly. Original passport required at KM 82. Full payment due 2 days prior. Best season: May-September. Trail closed every February.'
  },
  'incatrail-short': {
    title: 'SHORT INCA TRAIL 2 DAYS: THE EXPLORER PATHWAY',
    tagline: 'Short Inca Trail',
    subtitle: 'The essence of the Inca Trail in 2 days',
    route: 'Km 104 → Chachabamba → Wiñay Wayna → Machu Picchu',
    duration: '2 days / 1 night',
    difficulty: 'Moderate',
    altitude: '2,720m — Sun Gate',
    groupSize: 'Max. 16 passengers',
    distance: '9 km (Day 1 only)',
    season: 'May–September. Closed in February.',
    start: 'KM 104, 2,100m',
    acclimatization: '1-2 days in Cusco recommended',
    rating: '4.8 (5,237 reviews)',
    image: 'it2d_woman_machupicchu.webp',
    heroImage: 'it2d_woman_machupicchu.webp',
    brochure: 'assets/documents/CuscoPathways_ShortIncaTrail_2Days_ENG.pdf',
    brochureBgImage: 'it2d_machupicchu_view.webp',
    map: 'assets/images/inca-trail/short_inca_trail_map.webp',
    description: `The Short Inca Trail distills the most dramatic section into a powerful 2-day experience — hiking from KM 104 through the cloud forest to Wiñay Wayna and the Sun Gate, then entering Machu Picchu at sunrise. One night in Aguas Calientes. Two circuits of Machu Picchu. In 48 hours.<br><br><strong>Why choose us?</strong><br>For those who have dreamed of walking the Inca Trail but cannot dedicate four days, the Short Inca Trail offers the essential experience: ancient stone under your feet, the silence of the cloud forest, Wiñay Wayna, and the Sun Gate. Reaching Machu Picchu on foot transforms the encounter completely.`,
    highlights: [
      'it2d_woman_machupicchu.webp',
      'it2d_machupicchu_view.webp',
      'it2d_winaywayna.webp',
      'it2d_terraces.webp',
      'it2d_machupicchu_classic.webp',
      'it2d_train.webp'
    ],
    inclusions: [
      'Transportation Cusco-Ollantaytambo on Day 1',
      'Ollantaytambo-KM 104 train on Day 1',
      'Aguas Calientes-Ollantaytambo train on Day 2',
      'Private transportation from Ollantaytambo to Cusco hotel on Day 2',
      'One-way bus Aguas Calientes to Machu Picchu',
      'Aguas Calientes hotel (private bath, hot shower, Wi-Fi, breakfast)',
      'Machu Picchu entrance Circuit 1 on Day 1 (via Inca Trail) + Circuit 3 on Day 2',
      'Box lunch and snacks on Day 1',
      'Dinner in Aguas Calientes on Day 1',
      'Bilingual guide',
      'First-aid kit + oxygen',
      'Pre-departure briefing at 5pm the night before'
    ],
    exclusions: [
      'Breakfast on Day 1 before the train',
      'Lunch and dinner on Day 2',
      'Returning bus Machu Picchu to Aguas Calientes (~USD $12)',
      'Huayna Picchu / Huchuy Picchu entrance (pre-book)',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Original valid passport mandatory',
      'Waterproof boots',
      'Waterproof jacket',
      'Warm layer for the early morning',
      'Optional trekking poles',
      'Headlamp for the early morning of Day 1',
      'Sunscreen, sunglasses, 2L water bottle',
      'Personal medication, camera'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco > KM 104 > Chachabamba > Wiñay Wayna > Sun Gate > Aguas Calientes',
        desc: 'Pickup at 4:00am. Train from Ollantaytambo to KM 104 — present original passport. 9km cloud forest hike passing Chachabamba. 3-hour ascent to Wiñay Wayna. Continue 45 min to the Sun Gate (Inti Punku, 2,720m) for a sunset view of Machu Picchu. Bus to Aguas Calientes, check-in, dinner.',
        image: 'it2d_winaywayna.webp',
        accommodation: 'Hike: 9km | Altitude: 2,720m | Difficulty: Moderate | Accommodation: Aguas Calientes Hotel'
      },
      {
        day: 'Day 2',
        title: 'Machu Picchu > Ollantaytambo > Cusco',
        desc: 'Rise before dawn, bus to Machu Picchu — among the first visitors. 2-hour guided tour of Circuit 3: Temple of the Sun, Temple of the Condor, Twelve Niches, terraces. Optional Huayna Picchu or Huchuy Picchu climb. Train afternoon, private transfer to Cusco ~6pm.',
        image: 'it2d_machupicchu_classic.webp',
        accommodation: 'Difficulty: Easy | Altitude Machu Picchu: 2,430m'
      }
    ],
    priceGroup: 'USD 595.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 1,500.00' },
      { size: '2 – 3 People', price: 'USD 1,200.00' },
      { size: '4 – 5 People', price: 'USD 1,000.00' },
      { size: '6 – 9 People', price: 'USD 800.00' },
      { size: '10 People or More', price: 'USD 700.00' }
    ],
    offer: '<b>Super Combo (only for group service) – USD 670.00 per person:</b><br>• Transportation from the Airport to your Hotel once you arrive in Cusco<br>• Short Inca Trail 2 Days<br>• Walking Poles<br>• Rainbow Mountain Full Day<br><i>NOTE: The hotels in Cusco are NOT included.</i>',
    importantNote: 'Important Information: Short Inca Trail permits are also strictly limited — book as early as possible. Original passport required at KM 104. Name must match exactly. Briefing at 5pm the night before. No camping — 100% hotel experience.'
  },
  'cusco-cultural': {
    title: 'CUSCO CITY TOUR: THE CULTURAL PATHWAY',
    tagline: 'Imperial History',
    subtitle: 'The essential first chapter',
    route: 'Cusco → Sacsayhuamán → Qenqo → Puca Pucara → Tambomachay',
    duration: '~5 hours (half day)',
    difficulty: 'Easy',
    altitude: '~3,700m / 12,140ft — Sacsayhuamán',
    groupSize: 'Max. 12 passengers',
    distance: '-',
    season: 'Year round',
    start: 'Cusco City',
    acclimatization: '1-2 days in Cusco recommended',
    rating: '4.8 (3,124 reviews)',
    image: 'city_plaza_cusco.webp',
    heroImage: 'city_plaza_cusco.webp',
    brochure: 'assets/documents/CuscoPathways_CityTour_CulturalPath.pdf',
    map: 'assets/images/city/cusco_city_tour_map.webp',
    description: `Cusco is not simply a city — it is a living museum built upon Inca foundations. This half-day city tour takes you to the six most significant sites: Sacsayhuamán, Qenqo, Puca Pucara, Tambomachay, the Cusco Cathedral, and Qoricancha — the most sacred temple of the Inca Empire.<br><br><strong>Why choose us?</strong><br>Before venturing into the mountains, let Cusco reveal its full history. The city that the Spaniards encountered in 1533 was a metrópolis of perfectly fitted stone, gilded temples, and water systems that rivaled Rome. The City Tour is the essential first chapter of any Cusco itinerary.`,
    highlights: [
      'city_sacsayhuaman.webp',
      'city_qenqo.webp',
      'city_puca_pucara.webp',
      'city_tambomachay.webp',
      'city_plaza_cusco.webp',
      'city_qoricancha.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'First-aid kit',
      '24/7 customer service'
    ],
    exclusions: [
      'Tourist Ticket (Boleto Turístico) — required, approx. PEN 70-130 / USD $20-40',
      'Meals',
      'Travel insurance',
      'Tips'
    ],
    packingList: [
      'Comfortable walking shoes',
      'Warm layer',
      'Hat and sunscreen',
      'Water bottle, camera',
      'Cash for the Tourist Ticket and souvenirs'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Sacsayhuamán',
        desc: 'The colossal fortress with zigzag walls built of stones weighing over 20 tons, fitted together with astonishing precision.',
        accommodation: 'Altitude: ~3,700m',
        image: 'city_sacsayhuaman.webp'
      },
      {
        day: 'Stop 2',
        title: 'Qenqo',
        desc: 'Subterranean chambers carved into limestone that reveal the Inca understanding of astronomy and served for mummification rituals.',
        image: 'city_qenqo.webp'
      },
      {
        day: 'Stop 3',
        title: 'Puca Pucara',
        desc: 'Known as the "Red Fortress", this military construction controlled access to the imperial capital and offers beautiful views of the valley.',
        image: 'city_puca_pucara.webp'
      },
      {
        day: 'Stop 4',
        title: 'Tambomachay',
        desc: 'The resting place of the Inca, with crystalline water fountains and aqueducts that have flowed uninterruptedly for over 500 years.',
        image: 'city_tambomachay.webp'
      },
      {
        day: 'Stop 5',
        title: 'Plaza de Armas & Cathedral',
        desc: 'We visit Cusco\'s iconic main square and the Cathedral, an Andean Baroque masterpiece built over the former palace of Inca Viracocha.',
        image: 'city_plaza_cusco.webp'
      },
      {
        day: 'Stop 6',
        title: 'Qoricancha (Temple of the Sun)',
        desc: 'The Golden Enclosure, the most important Inca temple dedicated to the Sun God, upon whose finely dressed stone walls the Santo Domingo convent was built.',
        image: 'city_qoricancha.webp'
      }
    ],
    priceGroup: 'USD 55.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Information: Tourist Ticket (Boleto Turístico) NOT included — required to enter most sites. There are different circuits at different prices — your guide will advise you. Cusco is at 3,400m; Sacsayhuamán is at ~3,700m. We recommend 1-2 days of acclimatization. Pickup times will be confirmed the day before.'
  },
  'valley-traditional': {
    title: 'SACRED VALLEY TOUR: THE TRADITIONAL PATHWAY',
    tagline: 'Route of the Incas',
    subtitle: 'The heart of the Inca Empire',
    route: 'Cusco → Chinchero → Moray → Maras → Urubamba → Ollantaytambo → Pisac',
    duration: '~11 hours (full day)',
    difficulty: 'Easy',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 passengers',
    distance: '-',
    season: 'Year round',
    start: 'Cusco, 7:00 a.m.',
    acclimatization: 'Optional (good for Day 1)',
    rating: '4.7 (4,521 reviews)',
    image: 'sv_ollantaytambo_principal.webp',
    heroImage: 'sv_ollantaytambo_principal.webp',
    brochure: 'assets/documents/CuscoPathways_SacredValley_TraditionalPath.pdf',
    map: 'assets/images/sacred-valley/sacred_valley_map.webp',
    description: `The Sacred Valley of the Incas — Willcamayu in Quechua, meaning 'Sacred River' — is the heart of the Inca Empire. The Traditional Pathway takes you through its most iconic sites: Chinchero, Moray, the salt pans of Maras, Ollantaytambo, and the Pisac complex with its famous handicraft market.<br><br><strong>Why choose us?</strong><br>The Sacred Valley is not just a backdrop to Machu Picchu — it is a destination in its own right. Ollantaytambo is the only living Inca town in the world, still inhabited in its original layout. The terraces of Moray remain one of the greatest unsolved archaeological mysteries. A full day here is the essential context that makes sense of Machu Picchu.`,
    highlights: [
      'sv_chinchero_campanario.webp',
      'sv_chinchero_plaza.webp',
      'sv_mantas.webp',
      'sv_mercado_pisac.webp',
      'sv_ollantaytambo_principal.webp',
      'sv_ollantaytambo_panoramica.webp',
      'sv_ollantaytambo_hombre.webp',
      'sv_pisac_ruinas.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Buffet lunch in Urubamba',
      'First-aid kit'
    ],
    exclusions: [
      'Tourist Ticket (Boleto Turístico) — required',
      'Breakfast and dinner',
      'Maras Salt Pans entrance',
      'Travel insurance',
      'Souvenirs',
      'Tips'
    ],
    packingList: [
      'Comfortable walking shoes',
      'Warm layer',
      'Waterproof jacket',
      'Sunscreen, hat, camera',
      'Cash (soles)'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Chinchero',
        desc: 'We visit the Inca ruins and the beautiful colonial plaza. Then, we participate in a textile demonstration to learn about the ancient art of dyeing and weaving in the Andes.',
        image: 'sv_chinchero_plaza.webp',
        accommodation: 'Altitude: 3,762m'
      },
      {
        day: 'Stop 2',
        title: 'Moray & Maras Salt Pans',
        desc: 'We explore the mysterious circular terraces of Moray, considered an Inca agricultural laboratory, and then the Maras Salt Pans: over 3,000 terraced pools where local families still extract salt using ancestral techniques.'
      },
      {
        day: 'Stop 3',
        title: 'Urubamba',
        desc: 'We stop in the heart of the Sacred Valley to enjoy a delicious buffet lunch featuring the best of Peruvian cuisine.'
      },
      {
        day: 'Stop 4',
        title: 'Ollantaytambo',
        desc: 'Known as the only living Inca town, we will walk through its impressive terraces and the archaeological complex with monolithic blocks that served as a temple and fortress.',
        image: 'sv_ollantaytambo_principal.webp'
      },
      {
        day: 'Stop 5',
        title: 'Pisac Ruins',
        desc: 'We will explore the archaeological complex of Pisac, known for its extensive agricultural terraces and for hosting the largest Inca cemetery discovered.',
        image: 'sv_pisac_ruinas.webp'
      },
      {
        day: 'Stop 6',
        title: 'Pisac Market',
        desc: 'We end the day immersing ourselves in the colorful Pisac handicraft market, famous for its silverware, textiles, and ceramics.',
        image: 'sv_mercado_pisac.webp'
      }
    ],
    priceGroup: 'USD 60.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Information: Tourist Ticket (Boleto Turístico) NOT included. Departure at 7:00am. Return approximately 6:00-7:00pm. Maras Salt Pans entrance fee is separate. Dress in layers — temperatures vary between cold Chinchero and warm Urubamba.'
  },
  'valley-super': {
    title: 'SUPER SACRED VALLEY TOUR: THE EXTENDED PATHWAY',
    tagline: 'The Complete Experience',
    subtitle: 'The ultimate journey through the Empire',
    route: 'Cusco → Chinchero → Moray → Maras → Urubamba → Ollantaytambo → Pisac',
    duration: '~12 hours (extended full day)',
    difficulty: 'Easy',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 passengers',
    distance: '-',
    season: 'Year round',
    start: 'Cusco, 7:00 a.m.',
    acclimatization: 'Optional',
    rating: '4.9 (2,104 reviews)',
    image: 'sv_ollantaytambo_panoramica.webp',
    heroImage: 'sv_ollantaytambo_panoramica.webp',
    brochure: 'assets/documents/CuscoPathways_SuperSacredValley_ExtendedPath.pdf',
    map: 'assets/images/sacred-valley/super_sacred_valley_map.webp',
    description: `Everything in the Traditional Sacred Valley Tour — and more. The Extended Pathway includes all iconic sites (Chinchero, Moray, Maras, Urubamba, Ollantaytambo, Pisac) with additional time and depth at each destination. For travelers who want to go far beyond the surface.<br><br><strong>Why choose us?</strong><br>Some places deserve more than a hasty glance. The Super Sacred Valley Tour is for the traveler who knows that depth of experience matters more than speed of coverage. With unhurried time at each site and an expert guide, this is the definitive way to experience the Sacred Valley.`,
    highlights: [
      'sv_chinchero_plaza.webp',
      'sv_chinchero_campanario.webp',
      'sv_ollantaytambo_panoramica.webp',
      'sv_ollantaytambo_hombre.webp',
      'sv_pisac_ruinas.webp',
      'sv_mantas.webp',
      'sv_mercado_pisac.webp',
      'sv_ollantaytambo_principal.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Buffet lunch in Urubamba',
      'First-aid kit'
    ],
    exclusions: [
      'Tourist Ticket (Boleto Turístico) — required',
      'Breakfast and dinner',
      'Maras Salt Pans entrance fee',
      'Travel insurance',
      'Tips'
    ],
    packingList: [
      'Comfortable walking shoes',
      'Layers for variable temperatures',
      'Waterproof jacket',
      'Sunscreen and hat',
      'Camera with extra battery',
      'Cash in soles'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Chinchero: Extended Time',
        desc: 'An unhurried tour of the Inca ruins and the colonial church. Active participation in an extended textile demonstration, where you can even try weaving yourself with local master weavers.',
        image: 'sv_chinchero_campanario.webp',
        accommodation: 'Altitude: 3,762m'
      },
      {
        day: 'Stop 2',
        title: 'Moray & Maras Salt Pans',
        desc: 'The guide\'s explanation delves deep into Inca agricultural science at the Moray rings. Afterward, we head down to the dazzling salt pans of Maras for unlimited photography time.'
      },
      {
        day: 'Stop 3',
        title: 'Urubamba',
        desc: 'Premium Andean buffet lunch, enjoying the gastronomy of the Sacred Valley at a relaxed pace.'
      },
      {
        day: 'Stop 4',
        title: 'Ollantaytambo: In-depth Tour',
        desc: 'In addition to the fortress, we will walk through the original residential Inca blocks (\'canchas\') and see water flow through channels built before Columbus arrived.',
        image: 'sv_ollantaytambo_panoramica.webp'
      },
      {
        day: 'Stop 5',
        title: 'Pisac: Complete Complex',
        desc: 'Thorough exploration of the entire archaeological complex: the Intihuatana (solar clock), the Temple of the Sun, and the extensive Inca cemetery on the mountain slope.',
        image: 'sv_pisac_ruinas.webp'
      },
      {
        day: 'Stop 6',
        title: 'Pisac Market',
        desc: 'Abundant time to browse the famous handicraft market, talk with vendors, and acquire the best textiles and silverwork before returning to Cusco.',
        image: 'sv_mercado_pisac.webp'
      }
    ],
    priceGroup: 'USD 75.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Information: Tourist Ticket (Boleto Turístico) NOT included. Departure at 7:00am. Return ~7:00pm. Key difference from the Traditional tour: extended time at each site. Recommended for clients with a genuine interest in Inca culture and history.'
  },
  'valley-maras': {
    title: 'MARAS & MORAY TOUR: THE SALT & SACRED PATHWAY',
    tagline: 'Inca Laboratory & Salt Pans',
    subtitle: 'The Unexplored Sacred Valley',
    route: 'Cusco → Chinchero → Moray → Maras Salt Pans → Huaypo Lagoon → Urubamba → Ollantaytambo',
    duration: '~9 hours (full day)',
    difficulty: 'Easy',
    altitude: '3,762m — Chinchero',
    groupSize: 'Max. 12 passengers',
    distance: '-',
    season: 'Year round',
    start: 'Cusco',
    acclimatization: 'Optional',
    rating: '4.8 (1,842 reviews)',
    image: 'moray_panoramico.webp',
    heroImage: 'moray_panoramico.webp',
    brochure: 'assets/documents/CuscoPathways_MarasMoray_SaltSacredPath.pdf',
    description: `Two of the most unusual and photogenic sites in the entire Sacred Valley combined in a full-day tour. The Maras Salt Pans — over 3,000 glittering white salt pools harvested since pre-Inca times — and Moray — the mysterious circular terraces considered the world's first agricultural research laboratory. Includes Chinchero, buffet lunch, Huaypo Lagoon, and Ollantaytambo.<br><br><strong>Why choose us?</strong><br>Moray and Maras are two of the most visually striking sites in South America — yet they remain off the main tourist track. The concentric circles of Moray look out-of-this-world. The white salt pans of Maras, photographed at sunrise, are unmatched on Earth.`,
    highlights: [
      'moray_panoramico.webp',
      'maras_mirador.webp',
      'chinchero_tejedora.webp',
      'moray_vista.webp',
      'maras_viajera.webp',
      'chinchero_tintes.webp',
      'moray_1.webp',
      'maras_2.webp',
      'maras_1.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Buffet lunch in Urubamba',
      'First-aid kit'
    ],
    exclusions: [
      'Tourist Ticket (required for Chinchero & Ollantaytambo — PEN 70-130)',
      'Maras Salt Pans entrance fee',
      'Breakfast and dinner',
      'Travel insurance',
      'Tips'
    ],
    packingList: [
      'Comfortable shoes',
      'Layers for temperature shifts',
      'Waterproof jacket',
      'Sunscreen, hat, camera',
      'Cash in soles'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Chinchero',
        desc: 'We visit the Inca ruins and the textile demonstration, where master weavers show us the use of natural dyes and ancestral weaving techniques.',
        image: 'chinchero_tejedora.webp',
        accommodation: 'Altitude: 3,762m'
      },
      {
        day: 'Stop 2',
        title: 'Moray Laboratory',
        desc: 'The guide explains how the Incas engineered up to a 15°C temperature difference between the rings of these impressive concentric circular terraces.',
        image: 'moray_vista.webp'
      },
      {
        day: 'Stop 3',
        title: 'Maras Salt Pans',
        desc: 'We walk among thousands of brilliant white pools where local families still harvest salt from a subterranean warm spring using pre-Inca techniques.',
        image: 'maras_mirador.webp'
      },
      {
        day: 'Stop 4',
        title: 'Huaypo Lagoon & Urubamba',
        desc: 'We make a photo stop at the beautiful Huaypo Lagoon before descending to Urubamba to enjoy a buffet lunch of Peruvian cuisine.'
      },
      {
        day: 'Stop 5',
        title: 'Ollantaytambo',
        desc: 'We end the afternoon exploring the impressive archaeological site of Ollantaytambo, the only Inca town still inhabited in its original blocks, before returning to Cusco.'
      }
    ],
    priceGroup: 'USD 99.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Information: Tourist Ticket (Boleto Turístico) NOT included. Maras Salt Pans entrance fee is paid separately. Morning pickup (schedule confirmed the day before). Excellent standalone option or addition to any trekking itinerary.'
  },
  'rainbow-classic': {
    title: 'RAINBOW MOUNTAIN TOUR: THE COLORFUL PATHWAY',
    tagline: 'The Miracle of Vinicunca',
    subtitle: 'The most photographed mountain in the Andes',
    route: 'Cusco → Cusipata → Fulawasipata → Rainbow Mountain',
    duration: 'Full Day ~12-13hrs',
    difficulty: 'Moderate to Challenging',
    altitude: '5,200m — Vinicunca Summit',
    groupSize: 'Max. 12 passengers',
    distance: '7 km / 4.35 mi',
    season: 'Year round',
    start: 'Cusco, 3:30-4:00am',
    acclimatization: 'STRONGLY recommended minimum 3 days in Cusco',
    rating: '4.8 (5,120 reviews)',
    image: 'rainbow_llamas_mejorada.webp',
    heroImage: 'rainbow_llamas_mejorada.webp',
    brochure: 'assets/documents/CuscoPathways_RainbowMountain_ColorfulPath.pdf',
    map: 'assets/images/day-treks/rainbow_mountain_map.webp',
    description: `Hidden from the world until a glacier retreated around 2015, Vinicunca — Rainbow Mountain — has become one of the most photographed landscapes on Earth. Its layered mineral sediments paint the mountainside in vivid stripes of red, pink, turquoise, and yellow. At 5,200m, reaching the summit is a genuine physical achievement.<br><br><strong>Why choose us?</strong><br>Vinicunca is the most sought-after natural site in South America. The combination of otherworldly color, extreme altitude, and the vast Andean panorama creates an experience genuinely unlike any other on Earth. With Cusco Pathways Adventure, you arrive with an expert guide who places the mountain in its geological and cultural context.`,
    highlights: [
      'rainbow_llamas_mejorada.webp',
      'rainbow_trekkers.webp',
      'rainbow_llamas.webp',
      'rainbow_viajero.webp',
      'rainbow_caminata.webp',
      'rainbow_mujer_poncho.webp',
      'rainbow_vinicunca_llama.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Entrance fee to Vinicunca Mountain',
      'Breakfast in Cusipata restaurant',
      'Lunch after the trek',
      'Snacks and water on the trail',
      'First-aid kit + oxygen',
      'Pre-departure briefing at 6:00pm the night before'
    ],
    exclusions: [
      'Trekking poles (highly recommended)',
      'Personal water bottle',
      'Extra snacks',
      'Travel insurance',
      'Tips'
    ],
    packingList: [
      'Very warm layers — cold and windy at 5,200m',
      'Waterproof jacket',
      'Waterproof pants (rainy season)',
      'Thermal underwear',
      'Woolen hat and gloves',
      'Waterproof hiking boots',
      'Trekking poles (highly recommended)',
      'Sunscreen SPF70+, UV sunglasses',
      '2L bottle or hydration bladder',
      'Personal snacks, camera'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Drive to Cusipata',
        desc: 'Pickup between 3:30 and 4:00 am. We will travel for approximately 1.5 hours south to the town of Cusipata (3,310m) to enjoy a hearty, energizing breakfast.'
      },
      {
        day: 'Stop 2',
        title: 'Start at Fulawasipata',
        desc: 'We continue for 1 hour by transport to Fulawasipata (4,660m), the trailhead at the foot of the sacred Ausangate peak. Here we receive a brief orientation.'
      },
      {
        day: 'Stop 3',
        title: 'Ascent through the Andean Puna',
        desc: 'We ascend for about 2 hours through the high puna, a challenging but beautiful path surrounded by towering snow-capped mountains.',
        image: 'rainbow_caminata.webp'
      },
      {
        day: 'Stop 4',
        title: 'Wildlife and Landscapes',
        desc: 'During the hike, we are accompanied by grasslands inhabited by herds of alpacas and llamas grazing freely in their natural habitat.',
        image: 'rainbow_llamas_mejorada.webp'
      },
      {
        day: 'Stop 5',
        title: 'The Summit of Vinicunca',
        desc: 'Arrival at the astonishing Rainbow Mountain (5,200m). We will have enough time to catch our breath, listen to the geological explanation, and take memorable photographs.',
        image: 'rainbow_viajero.webp',
        accommodation: 'Max Altitude: 5,200m'
      },
      {
        day: 'Stop 6',
        title: 'Return to Cusco',
        desc: 'We descend for 1 hour back to Fulawasipata. We travel back for a well-deserved, comforting lunch and will arrive in Cusco between 4:30 and 5:00 pm.'
      }
    ],
    priceGroup: 'USD 48.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Note: Briefing at 6:00pm the night before. Pickup 3:30-4:00am. This tour reaches 5,200m — the HIGHEST altitude in all of Cusco Pathways Adventure\'s portfolio. Minimum 3 full days of acclimatization in Cusco is STRONGLY recommended. Rainy season (Nov-Mar) offers more vibrant colors. Dry season (Apr-Oct) yields clearer skies.'
  },
  'ausangate-7lakes': {
    title: 'AUSANGATE 7 LAKES TOUR: THE SACRED LAKES PATHWAY',
    tagline: 'The Secret of the Altiplano',
    subtitle: 'Natural beauty and genuine cultural immersion',
    route: 'Cusco → Pacchanta → 7 Lakes → Hot Springs → Cusco',
    duration: 'Full Day',
    difficulty: 'Moderate',
    altitude: '4,800m',
    groupSize: 'Max. 12 passengers',
    distance: '16 km / 9.94 mi',
    season: 'April–October (Dry Season)',
    start: 'Cusco',
    acclimatization: '2-3 days in Cusco recommended',
    rating: '4.8 (1,530 reviews)',
    image: 'ausangate_luna.webp',
    heroImage: 'ausangate_luna.webp',
    brochure: 'assets/documents/CuscoPathways_Ausangate7Lakes_SacredLakesPath.pdf',
    map: 'assets/images/day-treks/ausangate_7_lakes_map.webp',
    description: `The Ausangate massif — the highest and most sacred mountain in the Cusco region at 6,384m — guards a world of extraordinary colored lakes. The 7 Lakes trail takes you through one of the most dramatic landscapes of the Peruvian altiplano: turquoise, green, and cobalt lakes below the glacier slopes, traditional Quechua communities, alpacas and llamas at 4,800m, and the natural hot springs of Pacchanta. Breakfast and lunch with local Andean families.<br><br><strong>Why choose us?</strong><br>While Rainbow Mountain has become famous, the 7 Lakes of Ausangate remain a secret. The combination of extraordinary natural beauty with genuine cultural immersion — breakfast and lunch with Quechua families, hot springs shared with locals — makes this one of the most complete and authentic full-day experiences.`,
    highlights: [
      'ausangate_luna.webp',
      'ausangate_andina.webp',
      'ausangate_otorongo.webp',
      'ausangate_hatun.webp',
      'ausangate_apachetas.webp',
      'ausangate_alpacas.webp',
      'ausangate_panel.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Entrance to the Ausangate 7 Lakes circuit',
      'Breakfast with a Pacchanta local family',
      'Lunch with a Pacchanta local family',
      'Snacks and water on the trail',
      'Trekking poles included',
      'Cloth bag for snacks',
      'First-aid kit + oxygen',
      'Pre-departure briefing at 5pm'
    ],
    exclusions: [
      'Pacchanta Hot Springs entrance fee (optional but recommended)',
      'Dinner',
      'Travel insurance',
      'Personal gear',
      'Tips'
    ],
    packingList: [
      'Waterproof boots',
      'Very warm layers — 4,800m is extremely cold',
      'Thermal underwear',
      'Waterproof jacket and pants',
      'Woolen hat and gloves',
      'Sunscreen SPF70+, UV sunglasses',
      '2L bottle, swimwear for hot springs',
      'Medication, camera, soles'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Arrival in Pacchanta',
        desc: 'Very early pickup. Drive to the community of Pacchanta (4,100m) at the foot of the Ausangate glacier to enjoy a nutritious breakfast with a local family.'
      },
      {
        day: 'Stop 2',
        title: 'Glacial Ascent',
        desc: 'The trail climbs through spectacular glacial terrain where we will observe daily life in communities that has remained unchanged for centuries.',
        image: 'ausangate_andina.webp'
      },
      {
        day: 'Stop 3',
        title: 'The 7 Lakes of Ausangate',
        desc: 'We visit the extraordinary turquoise, green, and cobalt lakes, including Otorongo and Hatun Puka Qocha, reaching a high point of 4,800m.',
        image: 'ausangate_hatun.webp'
      },
      {
        day: 'Stop 4',
        title: 'Wildlife and Mountains',
        desc: 'We hike surrounded by the impressive Ausangate massif and observe llamas and alpacas in their natural habitat.',
        image: 'ausangate_alpacas.webp'
      },
      {
        day: 'Stop 5',
        title: 'Hot Springs',
        desc: 'Traditional lunch prepared by a local family (genuine cultural exchange) and the option to relax in the thermal springs of Pacchanta.',
        image: 'ausangate_luna.webp',
        accommodation: 'Max Altitude: 4,800m'
      }
    ],
    priceGroup: 'USD 52.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Note: Minimum 2-3 days of acclimatization in Cusco is recommended. This hike reaches 4,800m. Early pickup — confirm exact time at the 5pm briefing. Pacchanta Hot Springs entrance fee NOT included — bring PEN 15 / USD $5. Meals with local families are not a show — they are a genuine cultural exchange.'
  },
  'humantay-classic': {
    title: 'HUMANTAY LAKE TOUR: THE TURQUOISE PATHWAY',
    tagline: 'The Jewel of the Andes',
    subtitle: 'Natural beauty and spiritual power',
    route: 'Cusco → Mollepata → Soraypampa → Humantay Lake',
    duration: 'Full Day ~13hrs (round trip)',
    difficulty: 'Moderate',
    altitude: '4,200m — Humantay Lake',
    groupSize: 'Max. 12 passengers',
    distance: '5 km round trip',
    season: 'Year round',
    start: 'Cusco, 4:00am',
    acclimatization: '1-2 days in Cusco recommended',
    rating: '4.9 (4,032 reviews)',
    image: 'humantay_main.webp',
    heroImage: 'humantay_main.webp',
    brochure: 'assets/documents/CuscoPathways_HumantayLake_TurquoisePath.pdf',
    description: `Nestled beneath the glaciers of the Humantay and Salkantay mountains, Humantay Lake is one of nature's most perfectly composed landscapes. Its emerald-turquoise waters shimmer against perpetual snow at over 4,200m. Considered sacred by local Andean communities as a site of offerings to the Apus. Includes a 5km hike and a chef-prepared lunch at the exclusive Sky Camp.<br><br><strong>Why choose us?</strong><br>Some places exist at the intersection of natural beauty and spiritual power. Humantay Lake is one of them. The color of its water — an impossible turquoise-emerald that changes with the light — has no equal in the Cusco region. With less than 4 hours of hiking with a professional guide and a chef-prepared lunch in an exclusive mountain camp, it is one of the most accessible extraordinary experiences in the Andes.`,
    highlights: [
      'humantay_main.webp',
      'humantay_sendero.webp',
      'humantay_trekkers.webp',
      'humantay_pareja.webp'
    ],
    inclusions: [
      'Round-trip private transportation',
      'Certified bilingual guide',
      'Humantay Lake entrance fee',
      'Breakfast en route',
      'Chef-prepared lunch at Sky Camp',
      'Snacks and water on the trail',
      'First-aid kit + oxygen'
    ],
    exclusions: [
      'Dinner',
      'Personal gear',
      'Travel insurance',
      'Tips'
    ],
    packingList: [
      'Waterproof boots',
      'Warm layers',
      'Waterproof jacket',
      'Sunscreen, hat, sunglasses',
      '2L bottle',
      'Medication, camera, soles'
    ],
    itinerary: [
      {
        day: 'Stop 1',
        title: 'Drive to Mollepata',
        desc: 'Pickup at 4:00am. Drive through the Anta plains to Mollepata to enjoy a good Andean breakfast before the hike.'
      },
      {
        day: 'Stop 2',
        title: 'Arrival in Soraypampa',
        desc: 'We continue by transport to Soraypampa (3,900m) — base camp for the Salkantay Trek and home to our exclusive Sky Camp, where we will start the hike.'
      },
      {
        day: 'Stop 3',
        title: 'Ascent to the Lake',
        desc: 'A 2.5km uphill hike (approximately 1.5 hours) through high-altitude Andean terrain with spectacular views of the surrounding mountains.',
        image: 'humantay_sendero.webp'
      },
      {
        day: 'Stop 4',
        title: 'Humantay Lake',
        desc: 'Arrival at the astonishing turquoise lake (4,200m). Free time to take unforgettable photographs, absorb the deep silence, and connect with nature.',
        image: 'humantay_pareja.webp',
        accommodation: 'Max Altitude: 4,200m'
      },
      {
        day: 'Stop 5',
        title: 'Lunch at Sky Camp',
        desc: 'Descent to Soraypampa to enjoy a well-deserved and delicious lunch prepared by our chef at the exclusive Sky Camp. Return to Cusco, arriving around 6:30pm.',
        image: 'humantay_trekkers.webp'
      }
    ],
    priceGroup: 'USD 48.00',
    privatePricing: [
      { size: '2 People', price: 'USD 250.00' },
      { size: '3 – 5 People', price: 'USD 200.00' },
      { size: '6 – 8 People', price: 'USD 150.00' },
      { size: '9 People or More', price: 'USD 100.00' }
    ],
    offer: null,
    importantNote: 'Important Note: Pickup 4:00am. Return approximately 6:30pm. Minimum 1-2 days of acclimatization in Cusco recommended. This tour is also the perfect Day 0 preparation before the Classic or Premium Salkantay Trek — you will visit the same Sky Camp facilities used on Day 1 of the trek.'
  },
  'salkantay-celestial-2d': {
    title: 'HUMANTAY LAKE & SALKANTAY PASS TREK: THE CELESTIAL PATH — 2 DAYS',
    tagline: 'The Celestial Path',
    subtitle: 'Two days. Two summits.',
    route: 'Cusco → Challacancha → Humantay Lake → Salkantay Pass → Cusco',
    duration: '2 Days / 1 Night',
    difficulty: 'Moderate to Challenging',
    altitude: '4,630m / 15,190ft — Salkantay Pass',
    groupSize: 'Min. 2 / Max. 12 per guide',
    distance: '27 km / 16.8 mi',
    season: 'March to January (Closed February)',
    start: 'Cusco, 4:30–5:00am',
    acclimatization: '2+ days in Cusco recommended',
    rating: '4.9 (310 reviews)',
    image: 'salkantay_celestial.png',
    heroImage: 'salkantay_celestial.png',
    brochure: 'assets/documents/CuscoPathways_Salkantay_CelestialPath.pdf',
    map: 'assets/images/salkantay/short_salkantay_map.webp',
    description: `Two days. Two summits. One of the most memorable overnight adventures in the Cusco region. On Day 1, trek to the sacred Humantay Lake — a turquoise jewel at 4,200m nestled beneath the Salkantay and Humantay glaciers, considered one of the most sacred Apus offering sites in the Andes. Spend the night at the exclusive Sky Camp in Soraypampa (3,900m), where your guide leads a stargazing session beneath the Andean constellations that gave the Incas their calendar. On Day 2, conquer the legendary Salkantay Pass (4,630m) via the Trail of the Seven Snakes, with 360° views of Salkantay Mountain (6,271m) — the most revered Apu of the Inca world.<br><br><strong>Why choose us?</strong><br>Most high-altitude overnight treks in the Andes demand either a week-long commitment or a sacrifice in scenery. The Celestial Path is the exception. In two days you will visit not one but two of the most extraordinary natural landmarks in Peru — Humantay Lake and Salkantay Pass — spend a night under one of the clearest night skies on earth at exclusive Sky Camp, and stand at 4,630m beside the most sacred mountain in the Inca world. For travelers with limited time who refuse to compromise on experience, this is the answer. It is also the perfect gateway — and preparation — for those who will continue on the Classic or Premium Salkantay Trek.`,
    highlights: [
      'Humantay Lake (4,200m) — sacred glacial lake with iconic turquoise waters framed by Salkantay and Humantay glaciers',
      'Exclusive overnight at Sky Camp, Soraypampa (3,900m) — private campsite at the base of the glaciers',
      'Guided Inca stargazing session — Andean constellations and their sacred significance',
      'Salkantay Pass (4,630m) via the legendary Trail of the Seven Snakes — Day 2',
      '360° panoramic views of Salkantay Mountain (6,271m) — highest peak in Cusco region',
      'Small groups guaranteed — minimum 2 guests',
      'Operates daily March through January'
    ],
    inclusions: [
      'Private round-trip transport Cusco–Challacancha & Mollepata–Cusco',
      'Certified bilingual guide (English/Spanish) with first aid training',
      'All meals: breakfast Day 1, lunch Sky Camp, dinner Sky Camp, breakfast Sky Camp Day 2, lunch Mollepata Day 2',
      '1 night tent accommodation at Sky Camp, Soraypampa (3,900m)',
      'Sleeping bag, sleeping pad and camp pillow',
      'Cook and kitchen staff at Sky Camp / Chef y equipo de cocina en Sky Camp',
      'Muleteers and horses — equipment + up to 7kg personal luggage in provided duffle',
      'Guided Inca stargazing session at Sky Camp',
      'Oxygen and first aid kit'
    ],
    exclusions: [
      'Entrance fee Humantay Lake (~S/20 / approx. $5 USD — paid locally in cash)',
      'Travel insurance',
      'Trekking poles rental',
      'Extra horse for personal riding (+$30 USD — arrange in advance)',
      'Personal snacks and extra beverages',
      'Tips for guide, cook and muleteers'
    ],
    packingList: [
      'Valid passport ORIGINAL',
      'Waterproof hiking boots',
      'Warm jacket + thermal base layers — near freezing at camp and pass (below zero at camp and pass)',
      'Waterproof rain jacket and pants',
      'Warm hat, gloves, neck gaiter (woolen hat, gloves, buff)',
      'Sun hat, sunglasses UV, sunscreen SPF50+',
      '2L water bottle or hydration bladder',
      'Day pack 15–25L',
      'Personal medication + altitude remedies',
      'Camera, power bank, soles cash (~S/20 for entrance)',
      'Energy snacks: bars, chocolate, dried fruit'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco › Challacancha › Humantay Lake/Laguna Humantay › Sky Camp',
        desc: 'Pickup 4:30–5:00am from your hotel. Drive ~3 hours to Mollepata for a nourishing breakfast, then continue by vehicle to Challacancha (3,800m / 12,467ft) — the official trek starting point. Walk through open Andean terrain following a historic Inca irrigation canal to Soraypampa, where the crew welcomes you at Sky Camp with lunch. After a short rest, ascend 2.5km (~1.5 hours) to Humantay Lake (4,200m). The turquoise waters against white glaciers are unforgettable. Your guide shares the cultural and spiritual significance of this sacred Apu offering site. Descend to Sky Camp for dinner, then a guided Inca stargazing session beneath one of the clearest night skies on earth.',
        accommodation: 'Distance: ~15km / 9.3mi | Time: ~5hrs total | Start alt: 3,800m | Max alt: 4,200m | Difficulty: Moderate | Accommodation: Sky Camp, Soraypampa (3,900m)'
      },
      {
        day: 'Day 2',
        title: 'Sky Camp › Salkantay Pass (4,630m) › Mollepata › Cusco',
        desc: 'Wake up ~5:00am with coca tea as the glaciers glow in the first light. After breakfast at camp, ascend to Salkantay Pass (4,630m) via the Trail of the Seven Snakes — a 3–4 hour steady climb through high-altitude Andean terrain. At the summit: sweeping 360° views of Salkantay Mountain (6,271m), glacial rivers, and remote Andean ridges stretching in every direction. Your guide leads a brief Andean ceremony honoring the sacred Apus. Descend to Soraypampa, continue by vehicle to Mollepata for a well-deserved lunch, then return to Cusco. Hotel drop-off approximately 6:00–7:00pm.',
        accommodation: 'Distance: ~12km / 7.5mi | Time: ~4–5hrs | Start alt: 3,900m | Max alt: 4,630m | Difficulty: Challenging | Return: Hotel in Cusco (~6:00–7:00pm)'
      }
    ],
    accommodation: [
      { day: 'Day 1', name: 'Sky Camp', type: 'Luxury Domes', image: 'accom_sky_camp.webp', desc: 'Spectacular transparent geodesic domes located at 3,900m altitude with direct views of Salkantay peak and the starry sky. Each dome features premium double mattresses, hotel-quality bedding, warm lighting, and a private bathroom with hot water. At night, the celestial vault becomes your starry ceiling.' }
    ],
    priceGroup: 'USD 260.00',
    pricePrivate: 'USD 495.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 595.00' },
      { size: '2 – 3 People', price: 'USD 495.00' },
      { size: '4 – 5 People', price: 'USD 395.00' },
      { size: '6 – 8 People', price: 'USD 345.00' },
      { size: '9 People or More', price: 'USD 295.00' }
    ],
    offer: 'Includes a stargazing session with telescopes and warm cocoa.',
    importantNote: 'Important Info: Pickup 4:30–5:00am from your hotel. Return approximately 6:00–7:00pm Day 2. Mandatory briefing at Salkantay Trekking office (Triunfo 392, Office 212, Cusco) the evening before departure at 5:00pm. Full payment required 2 days before departure. Original passport required at all checkpoints. Minimum 2 full days acclimatization in Cusco (3,400m) strongly recommended — this trek reaches 4,630m. This tour does not operate in February (rainy season and trail maintenance). Luggage storage at Salkantay Trekking office free of charge. Maximum personal luggage transported by horses: 7kg in provided duffle bag.'
  },
  'valley-machupicchu-2d': {
    title: 'SACRED VALLEY & MACHU PICCHU: THE ULTIMATE PATH — 2 DAYS',
    tagline: 'The Ultimate Path',
    subtitle: 'The Ultimate Inca Tour',
    route: 'Cusco → Pisac (Sacred Valley) → Urubamba → Ollantaytambo → Aguas Calientes → Machu Picchu → Ollantaytambo → Cusco',
    duration: '2 Days / 1 Night',
    difficulty: 'Easy',
    altitude: '3,440m / 11,286ft (Pisac, Day 1) | Machu Picchu: 2,430m / 7,972ft',
    groupSize: 'Max. 12 passengers',
    distance: 'N/A (Train & Bus)',
    season: 'Year-round except February',
    start: 'Cusco, 7:00am pickup',
    acclimatization: '1-2 days in Cusco recommended',
    rating: '4.9 (512 reviews)',
    image: 'dest_machupicchu.png',
    heroImage: 'dest_machupicchu.png',
    brochure: 'assets/documents/CuscoPathways_SacredValley_MachuPicchu_UltimatePath.pdf',
    map: 'assets/images/sacred-valley/super_sacred_valley_map.webp',
    description: `The Ultimate Inca Tour combines the best of two worlds in just two days: the Sacred Valley of the Incas in all its glory, followed by the legendary citadel of Machu Picchu. Day 1 takes you through Pisac's archaeological complex and artisan market, a buffet lunch in Urubamba, and Ollantaytambo's living Inca city — then aboard the train to Aguas Calientes for a night of rest. Day 2 begins before dawn with a bus to Machu Picchu for a guided 2-hour tour of one of the New Seven Wonders of the World. No trekking required. Purely iconic experiences, back to back.<br><br><strong>Why choose us?</strong><br>The Sacred Valley & Machu Picchu 2-Day Tour is the most complete and efficient way to experience the two crowning jewels of Inca civilization without committing to a multi-day trek. Day 1 reveals the valley that sustained the empire — Pisac's engineering marvels, the salt-of-the-earth market, and Ollantaytambo's living city. Day 2 delivers the destination that defines a lifetime. Traveling by scenic Andean railway through cloud forest, staying overnight in Aguas Calientes, and entering Machu Picchu among the first visitors of the morning — this is how the Wonder of the World should first be encountered. With Cusco Pathways Adventure and the operational excellence of Salkantay Trekking, every detail is handled so you simply arrive, witness, and remember.`,
    highlights: [
      'Full day in the Sacred Valley — Pisac archaeological complex and colorful artisan market',
      'Buffet lunch of traditional Peruvian cuisine in Urubamba',
      'Ollantaytambo — the \'last living Inca city\' with original streets still inhabited today',
      'Scenic train journey to Aguas Calientes through stunning Andean cloud forest',
      'Night in a comfortable hotel in Aguas Calientes with dinner at a local restaurant',
      'Early morning access to Machu Picchu — among the first visitors of the day',
      'Expert 2-hour guided tour of Machu Picchu — temples, terraces, Intihuatana stone',
      'Optional: Huayna Picchu Mountain or Machu Picchu Mountain (pre-book, extra cost)',
      'Return by train to Ollantaytambo and private transport to Cusco'
    ],
    inclusions: [
      'Private transport hotel pickup Day 1 & Ollantaytambo station-Cusco hotel Day 2',
      'Train Ollantaytambo-Aguas Calientes Day 1 (PeruRail Expedition)',
      'Train Aguas Calientes-Ollantaytambo Day 2 (PeruRail Expedition)',
      'Round-trip bus ticket Aguas Calientes-Machu Picchu',
      'Hotel in Aguas Calientes — double, twin or triple room with private bathroom, hot shower, WiFi',
      'Day 1: Buffet lunch Sacred Valley (Urubamba) + Dinner Aguas Calientes',
      'Day 2: Breakfast at hotel',
      'Entry ticket to Machu Picchu Archaeological Site (Circuit 2 preferred; Circuit 3 or 1 if unavailable)',
      'Bilingual certified guide Day 1 (Sacred Valley) and Day 2 (Machu Picchu)',
      'First aid kit + oxygen',
      'Pre-departure briefing 5:00pm Day 0 / Briefing previo 5:00pm Día 0',
      '24/7 customer service',
      'Luggage storage at Salkantay Trekking office while visiting Machu Picchu'
    ],
    exclusions: [
      'Cusco Tourist Ticket / Boleto Turístico del Cusco (required for Pisac & Ollantaytambo — approx. PEN 70-130 / USD $20-40)',
      'Day 1: Breakfast',
      'Day 2: Lunch in Aguas Calientes and dinner in Cusco',
      'Huayna Picchu Mountain ticket (USD $60, book 1-2 months ahead)',
      'Machu Picchu Mountain ticket (USD $60, book 1-2 months ahead)',
      'Vistadome Train upgrade (USD $70 extra)',
      'Travel insurance',
      'Personal expenses and souvenirs',
      'Tips for guide and staff'
    ],
    packingList: [
      'Valid passport (original — required at Machu Picchu entrance)',
      'Student card if applicable (for student discount)',
      'Comfortable walking shoes or light hiking boots',
      'Warm layer for early morning Machu Picchu visit',
      'Waterproof jacket or rain poncho',
      'Sun hat and sunscreen SPF 50+',
      'Sunglasses UV protection',
      'Insect repellent',
      '2L water bottle',
      'Personal medication',
      'Camera and power bank',
      'Cash in Peruvian soles (for Boleto Turístico, optional mountains, souvenirs)',
      'Small daypack 15-20L'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco › Pisac (Sacred Valley) › Urubamba › Ollantaytambo › Aguas Calientes',
        desc: 'Pickup from your hotel at 7:00 am. Drive to Pisac in the Sacred Valley to visit the first archaeological site of the route. The Inca architecture and engineering here is truly astounding — appreciate the quality of its hydraulic engineering and impressive cultivation platforms. Enjoy a guided tour of the Pisac complex (~2 hours). Then head down to visit one of the most colorful traditional markets in the entire region — buy directly from local producers. Continue to Urubamba for a magnificent buffet lunch of traditional Peruvian cuisine. In the afternoon, visit Ollantaytambo — the only urban center in the Americas where people still live in original Inca-planned city blocks with functioning water channels running through the streets. Explore the massive archaeological complex with the second-largest Inca stone preserved to date (90 tons), used as part of the Temple of the Sun. Drive to Ollantaytambo train station and board the Expedition Train to Aguas Calientes. During the journey, witness stunning glaciers, snowy peaks, fertile green valleys, and Inca agricultural platforms on both sides of the valley. Check into your hotel in Aguas Calientes and enjoy a delicious dinner at the best restaurant in town.',
        accommodation: 'Difficulty: Easy | Max altitude: 3,440m/11,286ft (Pisac) | Accommodation: Hotel Aguas Calientes (2,040m)'
      },
      {
        day: 'Day 2',
        title: 'Aguas Calientes › Machu Picchu › Ollantaytambo › Cusco',
        desc: 'Wake very early for breakfast at 5:00 am. Board one of the first buses to Machu Picchu (2,430m) — arrive as the sun begins to cast its stunning orange glow over the huge Inca stones. Present your entry ticket and passport at the entrance. Enjoy a 2-hour expert guided tour through the most significant areas of the citadel — temples, terraces, ritual baths, agricultural platforms, and the famous Intihuatana stone. Learn all the secrets and mysteries of this extraordinary place. After the guided tour, optional activities include climbing Huayna Picchu Mountain (2,720m, 2 hrs, extra cost USD $60) or Machu Picchu Mountain (3,000m, 3-4 hrs, extra cost USD $60), if booked in advance. Return to Aguas Calientes by bus. Find a restaurant for lunch before making your way to the train station. Board the train to Ollantaytambo, then private transport back to your hotel in Cusco. Arrival time depends on scheduled train ticket.',
        accommodation: 'Difficulty: Easy | Machu Picchu altitude: 2,430m/7,972ft'
      }
    ],
    accommodation: [
      { day: 'Day 1', name: 'Hotel 3★ Aguas Calientes', type: 'Boutique Hotel', image: 'accom_hotel_aguas.webp', desc: 'Modern boutique hotel in the heart of Aguas Calientes (Machu Picchu Pueblo), just a 5-minute walk from the bus stop to the citadel. Double room with private bathroom, TV, Wi-Fi, decorative Andean textiles, and buffet breakfast included. Ideal for resting and preparing for the grand visit on the final day.' }
    ],
    priceGroup: 'USD 490.00',
    pricePrivate: 'USD 695.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 895.00' },
      { size: '2 – 3 People', price: 'USD 695.00' },
      { size: '4 – 5 People', price: 'USD 595.00' },
      { size: '6 – 8 People', price: 'USD 545.00' },
      { size: '9 People or More', price: 'USD 495.00' }
    ],
    offer: 'Includes private Sacred Valley tour & train tickets.',
    importantNote: 'Important Info: Pre-departure briefing: 5:00 pm the evening before (phone call and WhatsApp). Full payment required 2 days before tour. Original passport mandatory at Machu Picchu entrance — student card required if claiming student discount. Book Machu Picchu Circuit 2 at least 3 months in advance due to limited daily capacity. If Circuit 2 is unavailable, Circuit 3-B (lower urban sector) or Circuit 1-B (panoramic views) will be arranged. Machu Picchu Mountain and Huayna Picchu Mountain require additional entrance tickets (USD $60 each, book 1-2 months ahead). The Cusco Tourist Ticket (Boleto Turístico) is NOT included and required for Pisac and Ollantaytambo. Tour does not operate in February. Pickup time confirmed the day before by your guide.'
  },
  'machupicchu-fullday': {
    title: 'MACHU PICCHU FULL DAY: THE LOST PATH',
    tagline: 'The Lost Path',
    subtitle: 'One day. One wonder.',
    route: 'Cusco → Ollantaytambo → Aguas Calientes → Machu Picchu → Cusco',
    duration: 'Full Day',
    difficulty: 'Easy',
    altitude: 'Machu Picchu Altitude: 2,430m / 7,972ft',
    groupSize: 'Max. 12 passengers',
    distance: 'N/A (Train & Bus)',
    season: 'Year-round except February',
    start: 'Cusco, early morning pickup',
    acclimatization: '1-2 days in Cusco recommended',
    rating: '4.9 (480 reviews)',
    image: 'dest_machupicchu.png',
    heroImage: 'dest_machupicchu.png',
    brochure: 'assets/documents/CuscoPathways_MachuPicchu_LostPath.pdf',
    map: 'assets/images/sacred-valley/super_sacred_valley_map.webp',
    description: `Machu Picchu is one of the New 7 Wonders of the World, a UNESCO World Heritage Site, and one of the most important energy centers on the planet. Are you short on time but refuse to miss it? The Lost Path is the most direct and expertly curated way to experience the legendary citadel in a single day — traveling by scenic railway from Ollantaytambo through spectacular cloud forest to Aguas Calientes, then by bus to the Sacred City itself. A 2-hour expert guided tour, free time to explore, and an optional mountain hike before returning to Cusco. One day. One wonder. Unforgettable.<br><br><strong>Why choose us?</strong><br>Machu Picchu is consistently the #1 travel destination in the world — and for good reason. The experience is mesmerizing and unique. You are not merely driving up to a lookout and snapping a photo; you are traveling into the heart of the Andes, into the living legacy of one of the most sophisticated civilizations in human history. The Machu Picchu Full Day tour with Cusco Pathways Adventure ensures you experience this properly: aboard a scenic Andean railway, with an expert guide who brings the stones to life, in a small group that allows for genuine connection with this extraordinary place. One day, done right, is all it takes to change how you see the world.`,
    highlights: [
      'Travel aboard one of the most beautiful railways in the world — Andean cloud forest, glaciers, and Inca terraces',
      'Early morning entry to Machu Picchu — beat the crowds and witness the sunrise over the citadel',
      'Expert 2-hour guided tour: temples, terraces, ceremonial baths, Intihuatana stone',
      'Feel the powerful energy of this sacred site — one of the most spiritually charged places on Earth',
      'Optional: Huayna Picchu Mountain (2,720m, 2 hrs), Machu Picchu Mountain (3,000m, 3-4 hrs), or Huchuy Picchu (2,497m, 1.5 hrs)',
      'Return by scenic Andean railway to Ollantaytambo and private transport to Cusco',
      'Small group maximum 12 people — intimate, personalized experience'
    ],
    inclusions: [
      'Private transport hotel-Ollantaytambo station (Day 1) & Ollantaytambo station-hotel Cusco (Day 1)',
      'Train Ollantaytambo-Aguas Calientes (PeruRail Expedition)',
      'Train Aguas Calientes-Ollantaytambo (PeruRail Expedition)',
      'Round-trip bus ticket Aguas Calientes-Machu Picchu',
      'Entry ticket to Machu Picchu Archaeological Site (Circuit 2 preferred; Circuit 3 or 1 if unavailable)',
      'Bilingual certified guide for Machu Picchu tour',
      'First aid kit + oxygen',
      'Pre-departure briefing (phone call & WhatsApp, 6-8 pm the night before)',
      '24/7 customer service',
      'Luggage storage at Salkantay Trekking office while visiting Machu Picchu'
    ],
    exclusions: [
      'All meals in Cusco and Aguas Calientes',
      'Huayna Picchu Mountain ticket (USD $75, book 1-2 months ahead)',
      'Machu Picchu Mountain ticket (USD $75, book 1-2 months ahead)',
      'Huchuy Picchu ticket (consult for current price)',
      'Vistadome Train upgrade (USD $70 extra) — panoramic glass roof, entertainment show',
      'Travel insurance',
      'Personal expenses',
      'Tips for guide and staff'
    ],
    packingList: [
      'Valid passport ORIGINAL — required at Machu Picchu entrance',
      'Student card if applicable (for student discount)',
      'Comfortable walking shoes or light hiking boots',
      'Warm layer — it can be cold early morning at Machu Picchu',
      'Waterproof jacket or rain poncho',
      'Sun hat and sunscreen SPF 50+',
      'Sunglasses UV protection',
      'Insect repellent',
      '2L water bottle',
      'Personal medication',
      'Camera and power bank',
      'Cash in soles (for lunch, optional mountains, souvenirs)'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cusco › Ollantaytambo › Aguas Calientes › Machu Picchu › Cusco',
        desc: 'Very early pickup from your hotel and drive to Ollantaytambo (1:30 hrs). Board the train to Aguas Calientes, which takes you through the stunning Andean mountainous landscape and mysterious cloud forest. During the journey, witness several glaciers and snowy peaks, fertile green fields, and Inca agricultural platforms on both sides of the valley. Upon arrival in Aguas Calientes, board a bus to the entrance of the Historic Sanctuary of Machu Picchu (2,430m). Enter as one of the first visitors of the day. Your expert bilingual guide leads a 2-hour tour through the most important areas: the Temple of the Sun, Temple of the Condor, Royal Tomb, Intihuatana (\'hitching post of the sun\'), residential and ceremonial sectors. Learn about the extraordinary history, culture, flora, and fauna of this extraordinary place. Feel the powerful energy that has drawn pilgrims and visitors for centuries. After the guided tour, you have free time. Optional mountain hikes (if booked in advance): Huayna Picchu Mountain (2,720m, 45 min ascent — the dramatic summit seen in all the famous photos, USD $75), Machu Picchu Mountain (3,000m, 1.5 hrs ascent — even more panoramic views, USD $75), or Huchuy Picchu (2,497m, 1 hr — shorter, accessible option). Return to Aguas Calientes by bus. Find a restaurant for lunch. Board the train to Ollantaytambo. Private transport back to Cusco.',
        accommodation: 'Difficulty: Easy | Machu Picchu altitude: 2,430m/7,972ft | Duration: Full day from Cusco'
      }
    ],
    accommodation: [],
    priceGroup: 'USD 375.00',
    pricePrivate: 'USD 495.00',
    privatePricing: [
      { size: '1 Person', price: 'USD 595.00' },
      { size: '2 – 3 People', price: 'USD 495.00' },
      { size: '4 – 5 People', price: 'USD 445.00' },
      { size: '6 – 8 People', price: 'USD 395.00' },
      { size: '9 People or More', price: 'USD 380.00' }
    ],
    offer: 'Includes round-trip train & bus tickets and guided tour.',
    importantNote: 'Important Info: Pre-departure briefing: 6:00-8:00 pm the evening before (phone call and WhatsApp). Full payment required 2 days before the tour. Original passport mandatory at Machu Picchu entrance — student card required for student discount. Book Machu Picchu Circuit 2 at least 3 months in advance due to limited daily capacity. If Circuit 2 is unavailable, Circuit 3-B (lower urban sector) or Circuit 1-B (panoramic area) will be arranged. Optional mountains (Huayna Picchu, Machu Picchu Mountain, Huchuy Picchu) require separate tickets — book at least 1-2 months in advance. Vistadome Train upgrade available for USD $70 extra (panoramic glass roof, entertainment on board). Tour does not operate in February due to rainy season and route maintenance. Pickup time confirmed the day before by your guide. Luggage can be stored at Salkantay Trekking office or your hotel free of charge.'
  }
};
