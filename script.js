const navSlide = () => {
    const burg = document.querySelector('.ham-menu');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list__link');
    const cart = document.querySelector('.cart');
    const cartInner = document.querySelector('.cart__inner');
    // Navigation toggle
    // burg.addEventListener('click', () => {
    //     nav.classList.toggle('nav-list__active');
    //     // Animation of links
    //   
    // });
    document.addEventListener("click", function(e) {
        let m = document.getElementById('nav-list');
        if (e.target.id != 'ham-menu' && e.target.id != 'nav-list') {
          m.style.display = 'none';
        } else if (e.target.id == 'ham-menu') {
          m.style.display = (m.style.display != 'flex') ? 'flex' : 'none';
        }
        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = ''
        //     } else {
        //         link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
        //     }
        // });
    });
    cart.addEventListener('click', () => {
        cartInner.classList.toggle('cart-inner__active');
    });
}
navSlide();

