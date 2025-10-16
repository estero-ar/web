document.addEventListener('DOMContentLoaded', () => {

  // =======================
  // FORMULARIO DE CONTACTO
  // =======================
  const form = document.querySelector('.formulario');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault(); // evita recargar la página
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      form.reset(); // limpia los campos después de enviar
    });
  }

  // =======================
  // MENÚ HAMBURGUESA
  // =======================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que el click se propague al document
      navLinks.classList.toggle('show');
    });
  }

  // =======================
  // CERRAR MENÚ AL TOCAR FUERA
  // =======================
  document.addEventListener('click', (e) => {
    if (navLinks && hamburger) {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    }
  });

});

// CARROUSEL DE TEXTO
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.text-slider .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 3000); // Cambia cada 3 segundos
  }
});

