let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

document.querySelector('.next').addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        updateSlide();
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlide();
    }
});

function updateSlide() {
    slides.style.transform = `translateX(-${index * 25}%)`; /*   jarak slide   */
}
