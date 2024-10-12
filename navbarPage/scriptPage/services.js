const menuToggle = document.getElementById('menuToggle');
        const navbarLinks = document.getElementById('navbar-links');
        const navLinks = document.querySelectorAll('.navbar a');
        const navbar = document.getElementById('navbar');

        // Toggle menu on button click
        menuToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('show');
        });

        // Close the toggle when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarLinks.classList.remove('show');
            });
        });

        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                navbar.style.transform = 'translateY(-100%)'; // Hide navbar
            } else {
                navbar.style.transform = 'translateY(0)'; // Show navbar
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
