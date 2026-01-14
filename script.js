// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}



// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            document.getElementById('nav-menu').classList.remove('active');


        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!nav.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Prevent menu close when clicking inside menu
document.getElementById('nav-menu').addEventListener('click', function (e) {
    e.stopPropagation();
});

