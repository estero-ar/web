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
  // LINKS DE CONTACTO
  // =======================
  const contactLinks = document.querySelectorAll('.contact-links a');
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // NO preventDefault, deja que los links funcionen normalmente
      // Esto asegura que WhatsApp, email e Instagram abran correctamente
    });
  });

  // =======================
  // CARRUSEL DE TEXTO
  // =======================
  const textSlider = document.querySelector('.text-slider');
  const textSlides = document.querySelectorAll('.text-slider .slide');
  let textIndex = 0;
  let textInterval;

  if (textSlider && textSlides.length > 0) {
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.className = 'arrow prev';
    nextBtn.className = 'arrow next';
    prevBtn.innerHTML = '❮';
    nextBtn.innerHTML = '❯';
    textSlider.appendChild(prevBtn);
    textSlider.appendChild(nextBtn);

    textSlides[textIndex].classList.add('active');

    const showTextSlide = (newIndex) => {
      textSlides[textIndex].classList.remove('active');
      textIndex = (newIndex + textSlides.length) % textSlides.length;
      textSlides[textIndex].classList.add('active');
    };

    prevBtn.addEventListener('click', () => { showTextSlide(textIndex - 1); restartTextInterval(); });
    nextBtn.addEventListener('click', () => { showTextSlide(textIndex + 1); restartTextInterval(); });

    const startTextInterval = () => {
      textInterval = setInterval(() => { showTextSlide(textIndex + 1); }, 5000);
    };

    const restartTextInterval = () => {
      clearInterval(textInterval);
      startTextInterval();
    };

    startTextInterval();
  }

  // =======================
  // CARRUSEL DE IMÁGENES
  // =======================
  const imageSlides = document.querySelectorAll('.image-carousel .slide');
  const prevImageBtn = document.querySelector('.carousel-btn.prev');
  const nextImageBtn = document.querySelector('.carousel-btn.next');
  let imageIndex = 0;
  let imageInterval;

  function showImageSlide(newIndex) {
    imageSlides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i === newIndex) slide.classList.add('active');
      else if (i === imageIndex) slide.classList.add('prev');
    });
    imageIndex = newIndex;
  }

  function nextImageSlide() {
    showImageSlide((imageIndex + 1) % imageSlides.length);
  }

  function prevImageSlide() {
    showImageSlide((imageIndex - 1 + imageSlides.length) % imageSlides.length);
  }

  if (imageSlides.length > 0) {
    showImageSlide(imageIndex);
    imageInterval = setInterval(nextImageSlide, 5000);

    if (prevImageBtn) prevImageBtn.addEventListener('click', () => { prevImageSlide(); resetImageInterval(); });
    if (nextImageBtn) nextImageBtn.addEventListener('click', () => { nextImageSlide(); resetImageInterval(); });

    function resetImageInterval() {
      clearInterval(imageInterval);
      imageInterval = setInterval(nextImageSlide, 5000);
    }
  }

});
