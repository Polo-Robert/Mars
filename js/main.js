$(function(){
    // Слайде
    $('.slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    // Включить меню
    $('.header-btn').on('click', function(){
        $('.menu').addClass('menu__active');
    });

    // Выключить меню
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('menu__active')
    })
    
});