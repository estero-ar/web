document.addEventListener('DOMContentLoaded', () => {
  // FORMULARIO
  const form = document.querySelector('.formulario');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      form.reset();
    });
  }

  // MENÚ HAMBURGUESA
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // CERRAR MENÚ AL TOCAR FUERA
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});
