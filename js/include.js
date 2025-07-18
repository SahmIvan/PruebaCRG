async function includeHTML(id, url) {
  const res = await fetch(url);
  if (res.ok) {
    document.getElementById(id).innerHTML = await res.text();
  } else {
    console.error(`Error cargando ${url}:`, res.status);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  includeHTML('nav-placeholder', 'includes/nav.html');
  includeHTML('footer-placeholder', 'includes/footer.html');
  includeHTML('landing-nav-placeholder', 'includes/landing_nav.html');
});