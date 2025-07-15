// Fade out effect when clikking the button
    document.querySelector('.btn-crg').addEventListener('click', function() {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = './landing.html';
        }, 1000); // Espera 2 segundos para redirigir
    });

// (2) Listener para cuando la página vuelve de la cache (o se carga)
window.addEventListener('pageshow', function(event) {
  // Siempre quitamos fade-out y forzamos fade-in
  document.body.classList.remove('fade-out');
  document.body.classList.add('fade-in');
});