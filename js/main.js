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
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to index.html if path is empty

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }


    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            // Optional: To make animations re-trigger every time you scroll
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.1, // Animate when 10% of the element is visible
    });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.about-summary-content, .about-summary-image, .services-summary h2, .service-card, .franchise-content, .footer-column, .page-header, .about-story-content, .about-story-image, .team-member, .service-page-card, .gallery-page-item, .contact-details-wrapper, .map-container-full, .centered-form, .contact-info-item'
    );
    
    elementsToAnimate.forEach((el, index) => {
        // This applies a staggered delay to each element based on its order in the DOM
        // This creates a pleasant "wave" effect as you scroll.
        el.style.transitionDelay = `${index * 75}ms`;
        observer.observe(el);
    });

    // Contact Form Popup
    const contactForm = document.querySelector('.contact-form');
    const popupContainer = document.getElementById('popup-container');
    const closeBtn = document.querySelector('.close-btn');

    if (contactForm && popupContainer && closeBtn) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Show the popup
            popupContainer.style.display = 'flex';

            // Optional: Reset the form after submission
            contactForm.reset();
        });

        // Close the popup when the close button is clicked
        closeBtn.addEventListener('click', function() {
            popupContainer.style.display = 'none';
        });

        // Close the popup when clicking outside the content area
        popupContainer.addEventListener('click', function(e) {
            if (e.target === popupContainer) {
                popupContainer.style.display = 'none';
            }
        });
    }

});
