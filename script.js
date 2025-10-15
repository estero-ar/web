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
