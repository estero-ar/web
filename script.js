document.addEventListener('DOMContentLoaded', () => {

  // =======================
  // FORMULARIO DE CONTACTO
  // =======================
  const form = document.querySelector('.formulario');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      form.reset();
    });
  }

  // =======================
  // MENÚ HAMBURGUESA
  // =======================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
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


  // =======================
  // CARRUSEL DE IMÁGENES
  // =======================
  const slider = document.querySelector('.text-slider');
  const slides = document.querySelectorAll('.text-slider .slide');
  let index = 0;
  let interval;

  if (slides.length > 0 && slider) {
    // Crear flechas
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.className = 'arrow prev';
    nextBtn.className = 'arrow next';
    prevBtn.innerHTML = '❮';
    nextBtn.innerHTML = '❯';
    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);

    // Mostrar la primera imagen
    slides[index].classList.add('active');

    // Función para cambiar de slide
    const showSlide = (newIndex) => {
      slides[index].classList.remove('active');
      index = (newIndex + slides.length) % slides.length;
      slides[index].classList.add('active');
    };

    // Botones de navegación
    prevBtn.addEventListener('click', () => {
      showSlide(index - 1);
      restartInterval();
    });

    nextBtn.addEventListener('click', () => {
      showSlide(index + 1);
      restartInterval();
    });

    // Cambio automático cada 5 segundos
    const startAutoSlide = () => {
      interval = setInterval(() => {
        showSlide(index + 1);
      }, 5000);
    };

    const restartInterval = () => {
      clearInterval(interval);
      startAutoSlide();
    };

    startAutoSlide();
  }

});
