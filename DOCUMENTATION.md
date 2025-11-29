# The Hair Empress Studio - Website Documentation

## Project Overview
This project is a responsive website for "The Hair Empress Studio," a premium hair salon in India. It showcases the salon's services, team, gallery, and provides contact and appointment booking functionalities. The website is built using HTML5, CSS3, and Vanilla JavaScript, ensuring a lightweight and fast-loading experience.

## File Structure
The project is organized as follows:

-   **Root Directory**: Contains all HTML pages.
-   **`css/`**: Contains the stylesheet (`style.css`).
-   **`js/`**: Contains the JavaScript logic (`main.js`).
-   **`Hair Salone Photos/`**: Stores images and videos used on the website.

## Pages

### 1. Home (`index.html`)
The landing page features:
-   **Hero Section**: A full-screen video background (responsive for mobile/desktop) with a welcome message.
-   **About Summary**: A brief introduction to the salon with a "Read More" link.
-   **Franchise CTA**: A call-to-action for potential franchise partners.
-   **Footer**: Quick links, contact info, and social media icons.

### 2. About Us (`about.html`)
Provides detailed information about the salon:
-   **Our Story**: History and mission of the salon.
-   **Meet Our Team**: Profiles of key team members (Founder, Senior Stylist, Color Specialist).

### 3. Services (`services.html`)
Lists the services offered:
-   **Service Cards**: Displays services like Haircut, Coloring, Treatments, and Bridal styling with descriptions and icons.
-   **Booking CTA**: A direct link to the appointment booking page.

### 4. Gallery (`gallery.html`)
Showcases the salon's work:
-   **Image Grid**: A responsive grid displaying various hairstyles and treatments.
-   **Note**: Currently uses emojis as placeholders for some images.

### 5. Contact Us (`contact.html`)
Allows users to get in touch:
-   **Contact Info**: Address, phone number, and email.
-   **Map**: An embedded Google Map showing the salon's location.
-   **Contact Form**: A form to send messages.
-   **Popup**: A "Thank You" popup appears upon successful form submission.

### 6. Book Appointment (`appointments.html`)
A dedicated page for booking:
-   **Detailed Form**: Collects Name, Phone, Email, Service, Date, Time, and Notes.
-   **Validation**: Ensures required fields are filled and phone numbers are valid.

## Key Features & Functionality

### Responsive Design
-   The website is fully responsive, adapting to different screen sizes (Mobile, Tablet, Desktop).
-   **Mobile Menu**: A hamburger menu replaces the navigation bar on smaller screens.

### Navigation
-   **Sticky Navbar**: The navigation bar stays at the top or changes style on scroll for better visibility.
-   **Active State**: The current page link is highlighted in the navigation menu.

### Animations
-   **Scroll Animations**: Elements fade in or slide up as they come into view using the `IntersectionObserver` API.
-   **Hero Text**: The hero section text has entrance animations.

### Interactivity (`js/main.js`)
-   **Mobile Menu Toggle**: Opens/closes the navigation menu on mobile.
-   **Form Handling**:
    -   The contact form prevents default submission and shows a custom popup.
    -   The popup can be closed via a close button or by clicking outside the content area.

## Technical Details
-   **HTML5**: Semantic structure (header, main, footer, section).
-   **CSS3**: Flexbox and Grid for layout, CSS variables, and media queries for responsiveness.
-   **JavaScript**: Vanilla JS for DOM manipulation and event handling (no heavy frameworks).
-   **Font Awesome**: Used for icons (social media, contact info).
-   **Google Fonts**: Uses 'Poppins' font family.
