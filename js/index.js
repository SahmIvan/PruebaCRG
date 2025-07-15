// index.js

// 1) Cuando haces click en START…
document.querySelector('.btn-crg').addEventListener('click', () => {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = 'landing.html';
  }, 1000);
});

// 2) Al mostrarse la página (carga normal o bfcache / “atrás”)
function resetFade() {
  document.body.classList.remove('fade-out');
  document.body.classList.add('fade-in');
}

// se dispara siempre al entrar en la página
window.addEventListener('DOMContentLoaded', resetFade);
// también cuando viene de la cache con “atrás”
window.addEventListener('pageshow', (evt) => {
  if (evt.persisted) resetFade();
});

// 3) Al salir (para que no “se peguen” las clases en bfcache)
window.addEventListener('pagehide', () => {
  document.body.classList.remove('fade-in', 'fade-out');
});
