document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');

    if (hamburger && navContainer) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Active Navigation Link Styling
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optional: remove class when element is not intersecting
                // entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.service-cards .card, .testimonial-cards .card, .team-cards .card, .about-content, .service-item, .gallery-item, .contact-section, .appointment-form-container');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});
