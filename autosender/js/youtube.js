$(document).ready(function () {
    if ($(window).width() >= '1440') {
        $('.youtube-slider').slick({
            slidesToShow: 3,
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/autoauction-online/prev-arrow.svg"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/autoauction-online/next-arrow.svg"></div>',
            infinite: false
        });
    } else if ($(window).width() >= '1200') {
        $('.youtube-slider').slick({
            slidesToShow: 2.5,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '1024') {
        $('.youtube-slider').slick({
            slidesToShow: 2.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '768') {
        $('.youtube-slider').slick({
            slidesToShow: 1.6,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('.youtube-slider').slick({
            slidesToShow: 1.4,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '414') {
        $('.youtube-slider').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('.youtube-slider').slick({
            slidesToShow: 1.1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('.youtube-slider').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }
})