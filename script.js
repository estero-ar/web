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

document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.image-carousel .slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let index = 0;

  function showSlide(newIndex) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i === newIndex) slide.classList.add('active');
      else if (i === index) slide.classList.add('prev');
    });
    index = newIndex;
  }

  function nextSlide() {
    let newIndex = (index + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (index - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  if (slides.length > 0) {
    showSlide(index);
    let interval = setInterval(nextSlide, 5000);

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }
  }

});

