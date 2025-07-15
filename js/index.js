// Fade out effect when clikking the button
    document.querySelector('.btn-crg').addEventListener('click', function() {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = './landing.html';
        }, 1000); // Espera 2 segundos para redirigir
    });

// Fade-in effect for the landing page
    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('fade-in');
    });