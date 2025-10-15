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

 // Cerrar el menú al tocar fuera
document.addEventListener('click', (e) => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (navLinks && hamburger) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  }
});
