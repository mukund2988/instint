const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbar-links');
const navbar = document.getElementById('navbar');
const logo = document.querySelector('.navbar .logo');

// Toggle menu on button click
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});

// Hide logo, navbar, and menu toggle on scroll down, show on scroll up
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px'; // Hides navbar when scrolling down
        logo.style.opacity = '0'; // Hides logo
        menuToggle.style.opacity = '0'; // Hides toggle button
    } else {
        navbar.style.top = '0'; // Shows navbar when scrolling up
        logo.style.opacity = '1'; // Shows logo
        menuToggle.style.opacity = '1'; // Shows toggle button
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevents negative scrolling
});
