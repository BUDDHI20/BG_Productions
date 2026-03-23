
const bgAnim = document.getElementById('bg-anim');
const particleCount = 20; 

for (let i = 0; i < particleCount; i++) {
    let span = document.createElement('span'); 
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


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


function closePopup() {
    const popup = document.getElementById('dev-popup');
    popup.style.display = 'none';
}


// --- Slideshow Logic (Home Page) ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlides(index) {
    // වෙනත් පිටුවලදී (home.html නොවන) මේක වැඩ කරලා error එන එක නවත්වන්න
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex = index;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function currentSlide(index) {
    clearInterval(slideInterval);
    showSlides(index);
    startSlideShow();
}

function startSlideShow() {
    if (slides.length > 0) {
        // තත්පර 5න් 5ට Slide එක මාරු වීම (5000ms = 5s)
        slideInterval = setInterval(nextSlide, 10000); 
    }
}

// --- Mobile Menu Toggle ---
function toggleMobileMenu() {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('show-menu');
}

// පිටුව Load වෙද්දිම Slideshow එක පටන් ගන්න
showSlides(0);
startSlideShow();