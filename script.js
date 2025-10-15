// Espera a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // =======================
  // FORMULARIO DE CONTACTO
  // =======================
  const form = document.querySelector('.formulario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // evita recargar la página
      alert('Gracias por tu mensaje. Te responderemos pronto.');
      form.reset(); // limpia los campos después de enviar
    });
  }

  // =======================
  // BOTONES (placeholder)
  // =======================

  // Ejemplo: botón "Nuevo proyecto"
  const nuevoProyectoBtn = document.querySelector('#btn-nuevo-proyecto');
  if (nuevoProyectoBtn) {
    nuevoProyectoBtn.addEventListener('click', () => {
      // Aquí podés agregar la lógica para limpiar un proyecto o iniciar uno nuevo
      console.log('Nuevo proyecto activado');
      alert('Función "Nuevo proyecto" activada (a implementar)');
    });
  }

  // Ejemplo: botón "Guardar proyecto"
  const guardarProyectoBtn = document.querySelector('#btn-guardar-proyecto');
  if (guardarProyectoBtn) {
    guardarProyectoBtn.addEventListener('click', () => {
      // Lógica para guardar proyecto
      console.log('Guardar proyecto activado');
      alert('Función "Guardar proyecto" activada (a implementar)');
    });
  }

  // Ejemplo: botón "Exportar PDF"
  const exportarPDFBtn = document.querySelector('#btn-exportar-pdf');
  if (exportarPDFBtn) {
    exportarPDFBtn.addEventListener('click', () => {
      // Lógica para exportar PDF
      console.log('Exportar PDF activado');
      alert('Función "Exportar PDF" activada (a implementar)');
    });
  }

});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

