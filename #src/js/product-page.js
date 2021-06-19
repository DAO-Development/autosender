$(document).ready(function () {
    if ($(window).width() >= '1440') {
        $('.product__gallery-open').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/product-page/prev.svg"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/product-page/next.svg"></div>',
            fade: true,
            asNavFor: '.product__gallery-carousel'
        });
        $('.product__gallery-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            asNavFor: '.product__gallery-open'
        });
    } else if ($(window).width() >= '1024') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 2.3,
            slidesToScroll: 1,
            variableWidth: false,
            dots: true,
            infinite: false,
        });
    } else if ($(window).width() >= '768') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 1.6,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 1.4,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '414') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 1.1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('.product__gallery-carousel').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }
});