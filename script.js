const navSlide = () => {
    const burg = document.querySelector('.ham-menu');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list__link');
    // Navigation toggle
    burg.addEventListener('click', () => {
        nav.classList.toggle('nav-list__active');
        // Animation of links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });
    });
}

navSlide();