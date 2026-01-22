// 1. Particle Background Generator (Logo Version)
const bgAnim = document.getElementById('bg-anim');
const particleCount = 15; // ලෝගෝ නිසා ගොඩක් දාන්න එපා, 15ක් 20ක් ඇති

for (let i = 0; i < particleCount; i++) {
    let img = document.createElement('img'); // span වෙනුවට img හදනවා
    img.src = 'Logos/BGP.png'; // ඔයාගේ ලෝගෝ එකේ පාත් එක මෙතනට දාන්න
    
    let size = Math.random() * 30 + 20; // ලෝගෝ එකේ සයිස් එක (20px - 50px අතර)
    let left = Math.floor(Math.random() * 90); // Screen එකේ වම් පැත්තේ ඉඳන් පිහිටීම
    let duration = Math.random() * 15 + 10; // උඩට යන්න යන වෙලාව
    let delay = Math.random() * 5;
    
    img.style.width = size + 'px';
    img.style.height = size + 'px'; // උසයි පළලයි සමානව
    img.style.left = left + '%';
    img.style.animationDuration = duration + 's';
    img.style.animationDelay = delay + 's';
    
    // අමතරව: ලෝගෝ එක ටිකක් බොඳ වෙලා පේන්න (නැත්නම් අකුරු කියවන්න අමාරුයි)
    img.style.opacity = Math.random() * 0.3 + 0.1; 
    
    bgAnim.appendChild(img);
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