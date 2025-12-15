/* === Toggle Theme === */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')) {
        icon.classList.remove('bx-moon'); icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun'); icon.classList.add('bx-moon');
    }
});

/* === Scroll Spy (Active Link Fixed) === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 200; // Increased offset so color changes sooner
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let target = document.querySelector('header nav a[href*=' + id + ']');
                if(target) target.classList.add('active');
            });
        }
    });
};

/* === Scroll Reveal === */
ScrollReveal({ reset: true, distance: '60px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.greeting-text, .section-title', { origin: 'top' });
ScrollReveal().reveal('.hero-image-box, .skill-card, .project-card, .timeline-item', { origin: 'bottom' });
ScrollReveal().reveal('.name-text, .about-image-box', { origin: 'left' });
ScrollReveal().reveal('.description-text', { origin: 'right' });

/* === Typed JS === */
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Back-End Developer', 'Front-End Developer', 'Database Administrator', 'Coder'],
    typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
});

/* === Modal Logic === */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) { modal.style.display = 'block'; document.getElementById('modalOverlay').style.display = 'block'; }
}
function closeModal() {
    document.querySelectorAll('.custom-modal').forEach(modal => modal.style.display = 'none');
    document.getElementById('modalOverlay').style.display = 'none';
}