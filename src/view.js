document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.my-carousel-ofertas');

    sliders.forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll('.slide-ofertas'));
        const navDots = Array.from(slider.querySelectorAll('.nav-dot-ofertas'));
        let currentSlideOfertas = 0;
        let lastTimestamp = 0;

        const goToSlideOfertas = (index) => {
            slides[currentSlideOfertas].classList.remove('active');
            navDots[currentSlideOfertas].classList.remove('active');
            currentSlideOfertas = index;
            slides[currentSlideOfertas].classList.add('active');
            navDots[currentSlideOfertas].classList.add('active');
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

        requestAnimationFrame(nextSlideOfertas);
    });
});