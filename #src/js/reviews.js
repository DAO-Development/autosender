$(document).ready(function () {
    if ($(window).width() >= '1440') {
        $('.reviews__items').slick({
            slidesToShow: 3,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            // responsive: [
            //     {
            //         breakpoint: 1440,
            //         settings: {
            //             slidesToShow: 2,
            //         }
            //     },
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //             slidesToShow: 2.2,
            //         }
            //     },
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             slidesToShow: 1.6,
            //         }
            //     },
            // ]
        });
    } else if ($(window).width() >= '1024') {
        $('.reviews__items').slick({
            slidesToShow: 2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
        });
    } else if ($(window).width() >= '768') {
        $('.reviews__items').slick({
            slidesToShow: 2.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('.reviews__items').slick({
            slidesToShow: 1.5,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('.reviews__items').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('.reviews__items').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }
});