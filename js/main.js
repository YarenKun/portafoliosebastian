document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    document.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        slides.forEach((slide, index) => {
            if (slide.offsetTop <= scrollPosition + 200) {
                currentSlide = index;
                showSlide(currentSlide);
            }
        });
    });

    showSlide(currentSlide);
});
