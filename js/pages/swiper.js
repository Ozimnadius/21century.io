window.onload = function () {
    // initialize swiper when document ready
    let swiperSlider= new Swiper('.slider__container', {
        direction: 'horizontal',
        loop: true,
        speed: 700,
        slidesPerView: 1,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.slider__pag-pag',
        },
    });

    let swiperTypes= new Swiper('.types__container', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 4,
        grabCursor: true,
        spaceBetween: 30,
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: '.types__next',
            prevEl: '.types__prev',
        },
    });

    let swiperMnews= new Swiper('.mnews__container', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 2,
        grabCursor: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.mnews__next',
            prevEl: '.mnews__prev',
        },
        on:{
            init: function () {
                $('.mnews__tabs').css('height', $(this.wrapperEl).outerHeight());
            }
        }
    });


};