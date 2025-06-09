document.addEventListener('DOMContentLoaded', function () {
  // === SLIDER / CARROSSEL ===
  const slider = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelectorAll('.indicador');
  const carrossel = document.querySelector('.carrossel');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza os indicadores
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('ativo', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Eventos de navegação
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Auto-play
  let slideInterval = setInterval(nextSlide, 5000);

  carrossel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  carrossel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

})