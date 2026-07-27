/* ══════════════════════════════════════════════════════════
   CUSCO PATHWAYS ADVENTURES — app.js (Main Logic Layer)
   ══════════════════════════════════════════════════════════ */

'use strict';

// ─── Navbar Scroll Handler ───────────────────────────────────
function initNavbar() {
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
}

// ─── Mobile Hamburger Menu ───────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  // Dynamically populate mobile accordion menu
  initMobileMenu(mobileMenu, hamburger);

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });
}

function initMobileMenu(mobileMenu, hamburger) {
  let listHTML = '<div class="mobile-menu-inner">';
  
  // Add CTA button at top
  listHTML += '<button class="btn btn-gold-solid open-modal-btn mobile-menu-cta">Enquire Now</button>';
  
  // Add Accordion list
  listHTML += '<ul class="mobile-accordion-list">';

  // Destination items
  if (typeof destinationsData !== 'undefined' && typeof toursData !== 'undefined') {
    Object.keys(destinationsData).forEach(destKey => {
      const dest = destinationsData[destKey];
      listHTML += `
        <li class="accordion-item">
          <div class="accordion-header">
            <span>${dest.title}</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <ul class="accordion-content">
      `;
      
      dest.tours.forEach(tourId => {
        const tour = toursData[tourId];
        if (tour) {
          listHTML += `
            <li><a href="tour-detail.html?tour=${tourId}&dest=${destKey}">${tour.title}</a></li>
          `;
        }
      });
      
      listHTML += `
          </ul>
        </li>
      `;
    });
  }

  // General pages
  listHTML += `
    <li><a href="index.html#testimonials-section" class="mobile-menu-link">Testimonials</a></li>
    <li><a href="reclamaciones.html" class="mobile-menu-link">Complaints Book</a></li>
  `;

  listHTML += '</ul>';

  // Contact Footer
  listHTML += `
    <div class="mobile-menu-contact">
      <span class="mobile-menu-contact-title">Talk to Us</span>
      <a href="tel:+51984000000" class="mobile-menu-phone">
        <i class="fas fa-phone-alt"></i> +51 984 000 000
      </a>
      <span class="mobile-menu-hours">Mon–Sat: 8:00am–7:00pm | <a href="https://wa.me/51984000000?text=Hello%20Cusco%20Pathways,%20I%20would%20like%20more%20information" target="_blank" style="color: var(--gold); text-decoration: underline; font-weight: 600;">WhatsApp: 24/7</a></span>
    </div>
  `;

  listHTML += '</div>';

  mobileMenu.innerHTML = listHTML;

  // Accordion click handlers
  const accordionHeaders = mobileMenu.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      mobileMenu.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
        }
      });
      item.classList.toggle('open');
    });
  });

  // Re-bind modal triggers in newly generated HTML
  const mobileCta = mobileMenu.querySelector('.mobile-menu-cta');
  if (mobileCta) {
    mobileCta.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('enquire-modal');
      if (modal) {
        modal.classList.add('active');
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Close menu on navigation link clicks
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ─── Destination Page Hydration ──────────────────────────────
function hydrateDestinationPage() {
  const destList = document.getElementById('dest-tours-list');
  if (!destList) return; // Only run on destination.html

  const urlParams = new URLSearchParams(window.location.search);
  const destKey = urlParams.get('dest');
  const dest = destinationsData[destKey];

  if (!dest) {
    destList.innerHTML = '<p class="error-msg">Destination not found.</p>';
    return;
  }

  // Update hero
  const banner = document.getElementById('dest-banner-img');
  if (banner) banner.src = resolveImagePath(dest.image);
  const title = document.getElementById('dest-title-display');
  if (title) title.textContent = dest.title;

  // Render horizontal tour cards
  destList.innerHTML = '';
  dest.tours.forEach(tourId => {
    const tour = toursData[tourId];
    if(!tour) return;
    
    // Extraer overview breve de la descripción
    let briefOverview = '';
    if (tour.description) {
      briefOverview = tour.description.split('<br>')[0];
    } else if (tour.itinerary && tour.itinerary.length > 0) {
      briefOverview = tour.itinerary[0].desc;
    }

    // Formatear precio extraído
    let rawPrice = tour.priceGroup ? tour.priceGroup.replace('USD ', '').replace('PEN ', '') : '00.00';

    destList.innerHTML += `
      <a href="tour-detail.html?tour=${tourId}&dest=${destKey}" class="featured-card reveal">
        <div class="fc-image">
          <img src="${resolveImagePath(tour.image)}" alt="${tour.title}" loading="lazy" />
        </div>
        <div class="fc-content">
          <div class="fc-meta-top">
            <span>🕒 ${tour.duration || 'Full Day'}</span>
            <span>⛰️ ${tour.difficulty || 'Moderate'}</span>
          </div>
          <h3 class="fc-title">${tour.title}</h3>
          <p class="fc-subtitle">${tour.route || tour.subtitle || ''}</p>
          <p class="fc-desc">${briefOverview}</p>
          
          <div class="fc-footer">
            <div class="fc-footer-left">
              <span>👥 ${tour.groupSize || 'Up to 16 People'}</span>
              <span>🏔️ ${tour.altitude || ''}</span>
              <span class="rating-highlight">★ ${tour.rating || '4.9 (1,000 reviews)'}</span>
            </div>
            <div class="fc-footer-right">
              <span class="fc-price">From <strong>$${rawPrice}</strong> pp</span>
              <span class="btn btn-gold-solid btn-itinerary">VIEW ITINERARY</span>
            </div>
          </div>
        </div>
      </a>
    `;
  });
}

// ─── Tour Detail Hydration ───────────────────────────────────
function hydrateTourDetailPage() {
  const itineraryContainer = document.getElementById('itinerary-list-container');
  if (!itineraryContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tourKey = urlParams.get('tour');
  const destKey = urlParams.get('dest');
  const tour = toursData[tourKey];

  if (!tour) {
    itineraryContainer.innerHTML = '<p class="error-msg">Tour not found.</p>';
    return;
  }

  // ── Page Title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) pageTitle.textContent = `${tour.title} — Cusco Pathways Adventures`;

  // ── Breadcrumb
  const destLink = document.getElementById('breadcrumb-dest-link');
  if (destLink && destKey) {
    destLink.href = `destination.html?dest=${destKey}`;
    destLink.textContent = destinationsData[destKey]?.title || 'Destination';
  }
  const breadcrumbName = document.getElementById('breadcrumb-tour-name');
  if (breadcrumbName) breadcrumbName.textContent = tour.title;

  // ── Back Button
  const backBtn = document.getElementById('back-to-dest');
  if (backBtn && destKey) {
    backBtn.href = `destination.html?dest=${destKey}`;
    backBtn.innerHTML = '&larr; Back to ' + (destinationsData[destKey]?.title || 'Destination');
  }

  // ── Hero
  const banner = document.getElementById('tour-banner-img');
  if (banner) banner.src = resolveImagePath(tour.heroImage || tour.image);
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

  const introTitle = document.getElementById('intro-title');
  if (introTitle) introTitle.textContent = tour.subtitle || tour.title;
  const introRoute = document.getElementById('intro-route');
  if (introRoute) introRoute.textContent = tour.route || '';
  const introBody = document.getElementById('intro-body');
  if (introBody) introBody.innerHTML = tour.description || '';

  // ── Summary Card
  const summaryPrice = document.getElementById('summary-price');
  if (summaryPrice) summaryPrice.textContent = tour.priceGroup || '';
  const summaryDuration = document.getElementById('summary-duration');
  if (summaryDuration) summaryDuration.textContent = tour.duration || '';
  const summaryDifficulty = document.getElementById('summary-difficulty');
  if (summaryDifficulty) summaryDifficulty.textContent = tour.difficulty || '';
  const summaryRoute = document.getElementById('summary-route');
  if (summaryRoute) summaryRoute.textContent = tour.route || '';

  // ── Highlights
  const highlightsContainer = document.getElementById('highlights-container');
  if (highlightsContainer && tour.highlights) {
    highlightsContainer.innerHTML = tour.highlights.map(h => {
      if (h.endsWith('.webp') || h.endsWith('.jpg') || h.endsWith('.jpeg')) {
        return `<img src="${resolveImagePath(h)}" alt="Highlight Image" class="highlight-image" loading="lazy">`;
      }
      return `
        <div class="highlight-item">
          <span class="highlight-star">★</span>
          <span class="highlight-text">${h}</span>
        </div>
      `;
    }).join('');
  }

  // ── Sidebar
  const priceDisplay = document.getElementById('booking-price-display');
  if (priceDisplay) priceDisplay.textContent = `From ${tour.priceGroup}`;
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
      <tr><td>Group Service</td><td>${tour.priceGroup}</td></tr>
      <tr><td>Private Service</td><td>${tour.pricePrivate}</td></tr>
    `;
  }

  // Pricing compare table (Main Section)
  const compareBody = document.getElementById('pricing-compare-body');
  if (compareBody && tour.privatePricing) {
    compareBody.innerHTML = tour.privatePricing.map(row => `
      <tr>
        <td>${row.size}</td>
        <td class="price-col">${row.price}</td>
      </tr>
    `).join('');
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
          <h4>Special Benefit</h4>
          <p>${tour.offer}</p>
        </div>
      </div>
    `;
  }

  // ── WhatsApp Buttons
  const waText = encodeURIComponent(`Hello Cusco Pathways, I would like information and to book the tour: ${tour.title}`);
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
        ${item.image ? `<img src="${resolveImagePath(item.image)}" alt="${item.title}" class="itinerary-day-image" loading="lazy">` : ''}
        <div class="idb-desc">${item.desc}</div>
      </div>
    `;
    itineraryContainer.appendChild(block);
  });

  // Render important note below itinerary if exists
  if (tour.importantNote) {
    const noteBlock = document.createElement('div');
    noteBlock.className = 'important-alert note-alert';
    noteBlock.innerHTML = `
      <h4>ℹ️ Important Note</h4>
      <p>${tour.importantNote}</p>
    `;
    itineraryContainer.appendChild(noteBlock);
  }

  // ── Inclusions
  const inclList = document.getElementById('inclusions-list');
  if (inclList && tour.inclusions) {
    inclList.innerHTML = tour.inclusions.map(i => `
      <div class="check-item">
        <div class="check-icon">✓</div>
        <span>${i}</span>
      </div>
    `).join('');
  }
  const exclList = document.getElementById('exclusions-list');
  if (exclList && tour.exclusions) {
    exclList.innerHTML = tour.exclusions.map(e => `
      <div class="check-item">
        <div class="cross-icon">×</div>
        <span>${e}</span>
      </div>
    `).join('');
  }

  // ── Packing List
  const packingContainer = document.getElementById('packing-list-container');
  if (packingContainer && tour.packingList) {
    const categories = [
      { label: 'Clothing & Apparel', icon: '👕', items: tour.packingList.slice(0, 11) },
      { label: 'Essential Gear', icon: '🔦', items: tour.packingList.slice(11, 17) },
      { label: 'Health & Wellness', icon: '💊', items: tour.packingList.slice(17, 20) },
      { label: 'Extra Snacks', icon: '🍫', items: tour.packingList.slice(20) },
    ];
    packingContainer.style.display = 'block';
    packingContainer.innerHTML = categories.map(cat => `
      <div class="packing-category">
        <div class="packing-cat-header">
          <span class="packing-cat-icon">${cat.icon}</span>
          <span class="packing-cat-label">${cat.label}</span>
        </div>
        ${cat.items.map(item => `
          <div class="check-item">
            <div class="check-icon packing-check">✓</div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // ── Accommodation
  const accomContainer = document.getElementById('accommodation-container');
  if (accomContainer) {
    if (tour.accommodation && tour.accommodation.length > 0) {
      accomContainer.innerHTML = tour.accommodation.map(a => `
        <div class="accom-card reveal">
          ${a.image ? `<div class="accom-card-img"><img src="${resolveImagePath(a.image)}" alt="${a.name}" loading="lazy" /></div>` : ''}
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
    } else {
      // Hide accommodation tab/section if it's a day tour
      const accomTabBtn = document.querySelector('[data-tab="accommodation"]');
      if (accomTabBtn) accomTabBtn.style.display = 'none';
      const accomSection = document.getElementById('section-accommodation');
      if (accomSection) accomSection.style.display = 'none';
    }
  }

  // ── Related Tours
  const relatedContainer = document.getElementById('related-tours-container');
  if (relatedContainer) {
    const related = tour.relatedTours || Object.keys(toursData).filter(k => k !== tourKey).slice(0, 3);
    relatedContainer.innerHTML = related.map(rId => {
      const r = toursData[rId];
      if (!r) return '';
      return `
        <a href="tour-detail.html?tour=${rId}" class="featured-card reveal">
          <div class="fc-image">
            <img src="${resolveImagePath(r.image)}" alt="${r.title}" loading="lazy" />
          </div>
          <div class="fc-content">
            <div class="fc-meta-top">
              <span>🕒 ${r.duration}</span>
              <span>⛰️ ${r.tagline}</span>
            </div>
            <h3 class="fc-title related-title">${r.title}</h3>
            <p class="fc-desc related-desc">${r.itinerary[0].desc.substring(0, 100)}...</p>
            <div class="fc-footer">
              <div class="fc-footer-left"><span>🏷️ ${r.priceGroup}</span></div>
              <div class="fc-footer-right">
                <span class="btn btn-gold-solid btn-related">View Details</span>
              </div>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  // ── Resources Section (Brochure and Map)
  const resourcesSection = document.getElementById('tour-resources-section');
  const resourcesGrid = document.getElementById('tour-resources-grid');
  if (resourcesSection && resourcesGrid) {
    if (tour.brochure || tour.map) {
      resourcesSection.style.display = 'block';
      let html = '';

      if (tour.brochure) {
        const bgImg = tour.brochureBgImage || tour.image;
        html += `
          <a href="${resolveImagePath(tour.brochure)}" target="_blank" class="resource-card" id="btn-download-brochure">
            <div class="resource-card-bg" style="background-image: url(${resolveImagePath(bgImg)})"></div>
            <div class="resource-card-overlay"></div>
            <div class="resource-card-content">
              <span class="resource-btn">Download Brochure</span>
            </div>
          </a>
        `;
      }

      if (tour.map) {
        html += `
          <a href="#" class="resource-card" id="btn-view-map">
            <div class="resource-card-bg" style="background-image: url(${resolveImagePath(tour.map)})"></div>
            <div class="resource-card-overlay"></div>
            <div class="resource-card-content">
              <span class="resource-btn">View Map</span>
            </div>
          </a>
        `;
      }

      resourcesGrid.innerHTML = html;

      // Handle single card centering
      if (!tour.brochure || !tour.map) {
        resourcesGrid.classList.add('single-card');
      } else {
        resourcesGrid.classList.remove('single-card');
      }

      // Add lightbox triggers for map if map exists
      const mapBtn = document.getElementById('btn-view-map');
      const mapLightbox = document.getElementById('map-lightbox');
      const lightboxImg = document.getElementById('lightbox-map-img');
      const closeLightboxBtn = document.getElementById('close-lightbox-btn');

      if (mapBtn && mapLightbox && lightboxImg) {
        mapBtn.addEventListener('click', (e) => {
          e.preventDefault();
          lightboxImg.src = resolveImagePath(tour.map);
          mapLightbox.classList.add('active');
        });

        const closeLightbox = () => {
          mapLightbox.classList.remove('active');
        };

        if (closeLightboxBtn) {
          closeLightboxBtn.addEventListener('click', closeLightbox);
        }

        mapLightbox.addEventListener('click', (e) => {
          if (e.target === mapLightbox) {
            closeLightbox();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && mapLightbox.classList.contains('active')) {
            closeLightbox();
          }
        });
      }
    } else {
      resourcesSection.style.display = 'none';
    }
  }

  // ── Mobile Sticky Bottom Bar
  const stickyBar = document.getElementById('mobile-sticky-bar');
  if (stickyBar) {
    stickyBar.innerHTML = `
      <div class="msb-price-box">
        <span class="msb-price-label">Starting From:</span>
        <span class="msb-price-val">${tour.priceGroup || 'USD 00.00'}</span>
      </div>
      <div class="msb-actions">
        <a href="mailto:info@cuscopathwaysadventures.com?subject=Enquiry:%20${encodeURIComponent(tour.title)}" class="msb-btn-mail">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/51984000000?text=Hello%20Cusco%20Pathways,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title)}" target="_blank" class="msb-btn-whatsapp">
          <i class="fab fa-whatsapp"></i>
        </a>
        <button class="btn btn-gold-solid msb-btn-book">BOOK ONLINE</button>
      </div>
    `;

    const bookBtn = stickyBar.querySelector('.msb-btn-book');
    if (bookBtn) {
      bookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('enquire-modal');
        if (modal) {
          modal.classList.add('active');
          const tourSelect = document.getElementById('modal-tour-select');
          if (tourSelect) {
            tourSelect.value = tourKey;
          }
        }
      });
    }
  }
}

// ─── Scroll Reveal Animations ────────────────────────────────
function initReveal() {
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
}

// ─── Auto-fill missing tour fields (fixed logic) ─────────────
function fillTourData() {
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
    
    // Check if tour is multi-day (check if duration string contains 'días' or 'nights' and is NOT a single day tour)
    const isMultiDay = tour.duration && 
      (tour.duration.toLowerCase().includes('días') || 
       tour.duration.toLowerCase().includes('dias') ||
       tour.duration.toLowerCase().includes('noches') ||
       tour.duration.toLowerCase().includes('nights')) && 
      !tour.duration.startsWith('1 ');

    // Only copy accommodation if it's a multi-day tour
    if (isMultiDay && !tour.accommodation) {
      tour.accommodation = [...template.accommodation];
    } else if (!isMultiDay) {
      tour.accommodation = []; // Explicitly clear for single day tours
    }
    
    // Generate intro fields if missing
    if (!tour.introTitle) tour.introTitle = tour.subtitle || 'An Unforgettable Adventure';
    if (!tour.introRoute) tour.introRoute = tour.itinerary.map(i => i.title.split(' ')[0]).join(' – ');
    if (!tour.introBody) {
      tour.introBody = `<p>Join us on this spectacular experience: <strong>${tour.title}</strong>. Discover breathtaking landscapes, immerse yourself in Andean culture, and enjoy the best service in its class. Every detail has been carefully planned to offer you comfort and adventure in perfect harmony.</p>
      <p>Our team of professionals will accompany you every step of the way, ensuring your safety and sharing fascinating stories about our millennial heritage. Get ready to take home memories that will last a lifetime!</p>`;
    }
  });
}

// ─── Contact Modal ───────────────────────────────────────────
function initContactModal() {
  if (document.getElementById('enquire-modal')) return;

  const modalHTML = `
    <div class="modal-overlay" id="enquire-modal">
      <div class="modal-container">
        <button class="modal-close" id="close-modal-btn">&times;</button>
        
        <div class="modal-left">
          <div class="modal-left-content">
            <img src="${resolveImagePath('logoweb2.webp')}" alt="Cusco Pathways" class="modal-left-logo">
            <span class="modal-tag">GET IN TOUCH</span>
            <h2>Plan Your <span class="text-gold">Cusco Adventure</span></h2>
            <div class="modal-divider"></div>
            <p>Ready to start planning? Fill in the form and we'll reply within 24 hours with availability, pricing, and everything you need to know. Or just message us on WhatsApp — we're always there.</p>
            
            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-icon-wrapper">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">WhatsApp</span>
                  <a href="https://wa.me/51984000000?text=Hello%20Cusco%20Pathways,%20I%20would%20like%20more%20information" target="_blank" class="contact-value">+51 984 000 000</a>
                </div>
              </div>
              
              <div class="contact-info-item">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Email</span>
                  <a href="mailto:info@cuscopathwaysadventures.com" class="contact-value">info@cuscopathwaysadventures.com</a>
                </div>
              </div>
              
              <div class="contact-info-item">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Office — Cusco, Peru</span>
                  <span class="contact-value">Jr. Ancash Mza. I Lote. 12 Urb. San Borja Alta, Wanchaq</span>
                </div>
              </div>
              
              <div class="contact-info-item">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Office Hours</span>
                  <span class="contact-value">Mon–Sat: 8:00am–7:00pm | WhatsApp: 24/7</span>
                </div>
              </div>
              
              <div class="contact-info-item">
                <div class="contact-icon-wrapper">
                  <i class="fas fa-building"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Legal Registration</span>
                  <span class="contact-value">RUC: 20615958167 — Cusco, Perú</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-right">
          <h3><i class="fas fa-compass" style="color: var(--gold); margin-right: 8px;"></i>Tell Us About Your Trip</h3>
          <form class="modal-form" onsubmit="event.preventDefault(); alert('Form submitted (front-end only).'); this.closest('.modal-overlay').classList.remove('active');">
            
            <div class="form-group">
              <label class="form-label">FIRST NAME *</label>
              <input type="text" class="form-input" required placeholder="John">
            </div>
            <div class="form-group">
              <label class="form-label">LAST NAME *</label>
              <input type="text" class="form-input" required placeholder="Smith">
            </div>

            <div class="form-group form-group-full">
              <label class="form-label">EMAIL ADDRESS *</label>
              <input type="email" class="form-input" required placeholder="john@example.com">
            </div>

            <div class="form-group form-group-full">
              <label class="form-label">WHATSAPP / PHONE</label>
              <input type="tel" class="form-input" placeholder="+1 555 000 0000 (include country code)">
            </div>

            <div class="form-group form-group-full">
              <label class="form-label">TOUR OF INTEREST *</label>
              <select class="form-select" required id="modal-tour-select">
                <option value="">— Select a tour —</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">APPROXIMATE TRAVEL DATE</label>
              <input type="date" class="form-input" placeholder="dd/mm/aaaa">
            </div>
            <div class="form-group">
              <label class="form-label">NUMBER OF PEOPLE *</label>
              <select class="form-select" required>
                <option value="">— Select —</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="9">9 people</option>
                <option value="10+">10+ people</option>
              </select>
            </div>

            <div class="form-group form-group-full">
              <label class="form-label">MESSAGE / QUESTIONS</label>
              <textarea class="form-textarea" placeholder="Tell us about your fitness level, dietary needs, special requests, or any questions..."></textarea>
            </div>

            <div class="form-privacy-note">
              <i class="fas fa-lock" style="color: #2ecc71; margin-right: 6px;"></i>Your information is 100% private and will never be shared.
            </div>

            <button type="submit" class="modal-submit-btn">
              <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>SEND MY ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Inject modal into body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('enquire-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const tourSelect = document.getElementById('modal-tour-select');

  // Populate tours select options dynamically
  if (tourSelect && typeof toursData !== 'undefined') {
    tourSelect.innerHTML = '<option value="">— Select a tour —</option>';
    Object.keys(toursData).forEach(key => {
      const tour = toursData[key];
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = tour.title;
      tourSelect.appendChild(opt);
    });
  }

  // Open logic
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      
      // Auto pre-select tour from URL if applicable
      const urlParams = new URLSearchParams(window.location.search);
      const currentTourKey = urlParams.get('tour');
      if (currentTourKey && tourSelect) {
        tourSelect.value = currentTourKey;
      }
      
      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobile-menu');
      if (hamburger && mobileMenu && hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Close logic
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

// ─── Tabs Navigation (Tour Detail Page) ──────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const sections = {
    'overview': document.getElementById('section-overview'),
    'itinerary': document.getElementById('section-itinerary'),
    'inclusions': document.getElementById('section-inclusions'),
    'before': document.getElementById('section-before'),
    'packing': document.getElementById('section-packing'),
    'accommodation': document.getElementById('section-accommodation'),
    'pricing': document.getElementById('section-pricing'),
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(sections).forEach(s => { if (s) s.classList.remove('active'); });
      if (sections[target]) sections[target].classList.add('active');
      
      const tabNav = document.getElementById('tour-tab-nav');
      if (tabNav) tabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ─── Libro de Reclamaciones Form Logic ───────────────────────
function initReclamaciones() {
  const checkboxMinor = document.getElementById('is-minor');
  const padreGroup = document.getElementById('padre-group');
  const padreInput = document.getElementById('padre-input');
  const form = document.getElementById('reclamaciones-form');

  if (checkboxMinor && padreGroup && padreInput) {
    checkboxMinor.addEventListener('change', function() {
      if (this.checked) {
        padreGroup.style.display = 'block';
        padreInput.setAttribute('required', 'true');
      } else {
        padreGroup.style.display = 'none';
        padreInput.removeAttribute('required');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Claim/Complaint submitted successfully! We will get in touch with you.');
      this.reset();
      if (padreGroup) padreGroup.style.display = 'none';
    });
  }
}

// ─── Hero Slideshow ──────────────────────────────────────────
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 6000;

  function nextSlide() {
    const prev = slides[currentSlide];
    prev.classList.remove('active');
    prev.classList.add('last-active');

    currentSlide = (currentSlide + 1) % slides.length;
    const next = slides[currentSlide];
    next.classList.remove('last-active');
    next.classList.add('active');

    slides.forEach((slide, idx) => {
      if (idx !== currentSlide && slide !== prev) {
        slide.classList.remove('last-active');
      }
    });
  }

  setInterval(nextSlide, slideInterval);
}

// ─── DOM Initializer ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  fillTourData();
  initNavbar();
  initHamburger();
  initContactModal();
  initHeroSlideshow();
  hydrateDestinationPage();
  hydrateTourDetailPage();
  initTabs();
  initReclamaciones();
  initReveal();
});
