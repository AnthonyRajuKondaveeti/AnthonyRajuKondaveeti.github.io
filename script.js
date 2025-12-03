// Initialize Lucide icons
lucide.createIcons();

// Typewriter Effect - Types and deletes in a loop
const typewriterTexts = [
    "AI/ML Enthusiast | Researcher | Developer",
    "Building Intelligent Systems",
    "LLMs | RAG | NLP | Computer Vision"
];
const typewriterElement = document.getElementById('typewriter');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentText = typewriterTexts[textIndex];
    
    if (!isDeleting) {
        // Typing
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            // Pause at end before deleting
            isDeleting = true;
            setTimeout(typeWriter, 2000);
            return;
        }
    } else {
        // Deleting
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            setTimeout(typeWriter, 500);
            return;
        }
    }
    
    // Adjust speed based on typing or deleting
    const speed = isDeleting ? 50 : typingSpeed;
    setTimeout(typeWriter, speed);
}

// Start typewriter effect when page loads
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(typeWriter, 500); // Small delay before starting
});

// Certification Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('certCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    const currentSlideEl = document.getElementById('currentSlide');
    const totalSlidesEl = document.getElementById('totalSlides');

    if (!carousel) return; // Exit if carousel doesn't exist

    let currentIndex = 0;
    const totalSlides = 12;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.remove('bg-slate-600');
                indicator.classList.add('bg-blue-500');
            } else {
                indicator.classList.remove('bg-blue-500');
                indicator.classList.add('bg-slate-600');
            }
        });

        // Update counter
        currentSlideEl.textContent = currentIndex + 1;

        // Re-initialize Lucide icons for navigation buttons
        lucide.createIcons();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Event listeners for indicator dots
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize
    updateCarousel();
});
