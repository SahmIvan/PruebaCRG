window.addEventListener('DOMContentLoaded', () => {
    // Esperar un par de milisegundos para que el estilo inicial (opacity:0) se aplique
    setTimeout(() => {
      document.body.classList.add('fade-in');
    }, 50);
  });