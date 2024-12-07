const navbar = document.querySelector('.sticky');
if (!navbar) {
    console.error("Sticky element not found!");
} else {
    console.log("Sticky element found:", navbar);
}

window.addEventListener('scroll', () => {
    console.log("ScrollY:", window.scrollY);
});

// Ensure the sticky class toggles correctly and updates on scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.sticky');

    if (!navbar) {
        console.error("Sticky navbar element not found!");
        return;
    }

    const toggleNavbarBorder = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('with-border');
            navbar.classList.remove('no-border');
        } else {
            navbar.classList.add('no-border');
            navbar.classList.remove('with-border');
        }
    };

    window.addEventListener('scroll', toggleNavbarBorder);
    toggleNavbarBorder(); // Initialize state
});


// Link Different sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const linkSection = this.getAttribute('data-target'); // Get the target section ID
        const section = document.getElementById(linkSection);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});