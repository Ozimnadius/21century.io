window.onload = function () {
    // initialize swiper when document ready
    let swiperSlider= new Swiper('.slider__container', {
        direction: 'horizontal',
        loop: true,
        speed: 300,
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
};