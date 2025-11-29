document.addEventListener('DOMContentLoaded', function () {

    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');

    if (hamburger && navContainer) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const navbar = document.querySelector('.navbar');
    const hasHero = !!document.querySelector('.hero');
    if (navbar) {
        const setNavbarState = () => {
            const shouldBeScrolled = window.scrollY > 50 || !hasHero;
            navbar.classList.toggle('scrolled', shouldBeScrolled);
        };
        setNavbarState();
        window.addEventListener('scroll', setNavbarState);
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll(
        '.about-summary-content, .about-summary-image, .services-summary h2, .service-card, .franchise-content, .footer-column, .page-header, .about-story-content, .about-story-image, .team-member, .service-page-card, .gallery-page-item, .contact-details-wrapper, .map-container-full, .centered-form, .contact-info-item'
    );

    elementsToAnimate.forEach((el, index) => {
        el.style.transitionDelay = `${index * 75}ms`;
        observer.observe(el);
    });

    const contactForm = document.querySelector('.contact-form');
    const popupContainer = document.getElementById('popup-container');
    const closeBtn = document.querySelector('.close-btn');

    if (contactForm && popupContainer && closeBtn) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            popupContainer.style.display = 'flex';

            contactForm.reset();
        });

        closeBtn.addEventListener('click', function () {
            popupContainer.style.display = 'none';
        });

        popupContainer.addEventListener('click', function (e) {
            if (e.target === popupContainer) {
                popupContainer.style.display = 'none';
            }
        });
    }

});
