document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.my-carousel-ofertas');

    sliders.forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll('.slide-ofertas'));
        const navDots = Array.from(slider.querySelectorAll('.nav-dot-ofertas'));
        const arrowLeft = slider.querySelector('.arrow-left');
        const arrowRight = slider.querySelector('.arrow-right');
        let currentSlideOfertas = 0;
        let lastTimestamp = 0;

        // Asegúrate de que el primer slide esté activo cuando se carga la página
        slides[1].classList.add('active');

        const goToSlideOfertas = (index) => {
            // Asegúrate de que el slide actual no esté activo y esté deslizándose hacia afuera
            slides[currentSlideOfertas].classList.remove('active', 'slide-in');
            slides[currentSlideOfertas].classList.add('slide-out');
            navDots[currentSlideOfertas].classList.remove('active-dot');  // Quita la clase 'active-dot' al dot actual
        
            // Actualiza el slide actual
            currentSlideOfertas = index;
        
            // Asegúrate de que el nuevo slide esté activo y esté deslizándose hacia adentro
            slides[currentSlideOfertas].classList.remove('slide-out');
            slides[currentSlideOfertas].classList.add('active', 'slide-in');
            navDots[currentSlideOfertas].classList.add('active-dot');  // Añade la clase 'active-dot' al nuevo dot

            // Reinicia el contador
            lastTimestamp = performance.now();
        };

        const nextSlideOfertas = (timestamp) => {
            if (!lastTimestamp || timestamp - lastTimestamp >= 5000) {
                goToSlideOfertas((currentSlideOfertas + 1) % slides.length);
                lastTimestamp = timestamp;
            }

            requestAnimationFrame(nextSlideOfertas);
        };

        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlideOfertas(index));
        });

        // Agrega eventos de clic a las flechas
        arrowLeft.addEventListener('click', () => {
            goToSlideOfertas((currentSlideOfertas - 1 + slides.length) % slides.length);
        });

        arrowRight.addEventListener('click', () => {
            goToSlideOfertas((currentSlideOfertas + 1) % slides.length);
        });

        requestAnimationFrame(nextSlideOfertas);
    });
});
