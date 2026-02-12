const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.lightbox-close');

for (const image of document.querySelectorAll('.gallery-item')) {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
}

if (closeLightbox) {
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
}

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      checkin: document.getElementById('checkin').value || 'Not specified',
      guests: document.getElementById('guests').value || 'Not specified',
      requirement: document.getElementById('requirement').value,
    };

    const message = encodeURIComponent(
      `Hi Laxmi Farms, I want to inquire about booking.%0A` +
      `Name: ${data.name}%0A` +
      `Phone: ${data.phone}%0A` +
      `Check-in: ${data.checkin}%0A` +
      `Guests: ${data.guests}%0A` +
      `Requirement: ${data.requirement}`
    );

    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  });
}
