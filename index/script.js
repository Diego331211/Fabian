let currentSlide = 0; // Índice de la diapositiva actual


const slides = document.querySelectorAll('.carousel-slide'); // Todas las diapositivas
const totalSlides = slides.length; // Total de diapositivas

// Función para mostrar la diapositiva actual
function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`; // Mueve las diapositivas
    });
  }

// Cambio de texto en el footer
const footerText = document.querySelector('.footer-text');
const texts = [
  "BOOK I",
  "BOOK II",
  "PORTRAIT",
  "ADVERTISING",
  "CELEBRITY"
];
function updateFooter() {
    footerText.textContent = texts[currentSlide]; // Cambia el texto del footer según la diapositiva actual
  }

// Función para cambiar las diapositivas y el footer
function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Cambia a la siguiente diapositiva
    updateFooter(); // Actualiza el texto del footer
    updateCarousel(); // Actualiza las diapositivas
  }

// Inicializar el carrusel
updateCarousel();


// Inicializa el footer con el texto inicial
updateFooter();

// Configura un intervalo para cambiar de imagen cada 3 segundos (opcional)
setInterval(changeSlide, 3000);
