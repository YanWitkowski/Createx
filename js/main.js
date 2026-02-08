$(function () {
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                        dots: true,
                        appendDots: $('.team__dots'),
                    },
                },
            ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        waitForAnimate: false,
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__acc-link').on('click', function(e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // }) 

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 50
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800)
    })
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)
    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        e.stopPropagation();
        $('.burger').toggleClass('burger--close');
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--hide')
    })

    $('.footer__top-title--slide').on('click', function () {
        if (window.innerWidth <= 550) {
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', function () {
        if (window.innerWidth > 550) {
            $('.footer__top-title--slide').next().removeAttr('style');
        }
    });
})
