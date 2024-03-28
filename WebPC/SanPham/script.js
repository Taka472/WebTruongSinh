let currentIndex = 0;
const slides = document.querySelectorAll('.slider-images img');
const totalSlides = slides.length;
const sliderImages = document.querySelector('.slider-images');
const slideWidth = slides[0].offsetWidth;
let intervalId;

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = currentIndex * slideWidth;
    sliderImages.style.transform = `translateX(-${offset}px)`;
}

function startSlider() {
    intervalId = setInterval(function() {
        moveSlide(1);
    }, 2000); // Thay đổi 2000 thành khoảng thời gian bạn muốn mỗi hình ảnh hiển thị
}

function stopSlider() {
    clearInterval(intervalId);
}

startSlider();
