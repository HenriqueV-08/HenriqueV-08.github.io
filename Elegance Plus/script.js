(function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.custom-carousel .carousel-image');

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }
})();