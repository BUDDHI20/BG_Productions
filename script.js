// 1. Particle Background Generator (Bubbles Version)
const bgAnim = document.getElementById('bg-anim');
const particleCount = 20; // බෝල ගණන

for (let i = 0; i < particleCount; i++) {
    let span = document.createElement('span'); // img වෙනුවට span හදනවා
    let size = Math.random() * 20;
    let left = Math.floor(Math.random() * 100);
    let duration = Math.random() * 10 + 10;
    let delay = Math.random() * 5;
    
    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.left = left + '%';
    span.style.animationDuration = duration + 's';
    span.style.animationDelay = delay + 's';
    
    bgAnim.appendChild(span);
}

// 2. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const cards = document.querySelectorAll('.app-card');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
});

// වෙබ් පිටුවේ Right Click වැඩ නොකරන ලෙස සැකසීම
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});