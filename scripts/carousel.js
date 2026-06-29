/* ══════════════════════════════════════════════════════════
   CUSCO PATHWAYS ADVENTURES — carousel.js (Carousel & Slider Logic)
   ══════════════════════════════════════════════════════════ */

'use strict';

// ─── Featured Tours Carousel ─────────────────────────────────
function initFeaturedCarousel() {
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
}

// ─── Testimonials Slider Logic ───────────────────────────────
function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  const cards = Array.from(track.children);
  if (cards.length === 0) return;

  let currentIndex = 0;
  
  function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function rotateTestimonials() {
    const cardsPerView = getCardsPerView();
    const maxIndex = cards.length - cardsPerView;
    
    currentIndex++;
    if (currentIndex > maxIndex) {
      currentIndex = 0; // Loop back to start
    }
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 30; 
    const shift = currentIndex * (cardWidth + gap);
    
    track.style.transform = `translateX(-${shift}px)`;
  }

  let sliderInterval = setInterval(rotateTestimonials, 4000);

  const nextBtn = document.getElementById('test-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(sliderInterval);
      rotateTestimonials();
      sliderInterval = setInterval(rotateTestimonials, 4000);
    });
  }

  window.addEventListener('resize', () => {
    currentIndex = 0;
    track.style.transform = `translateX(0)`;
  });
}

// ─── DOM Initializer ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFeaturedCarousel();
  initTestimonialsSlider();
});
