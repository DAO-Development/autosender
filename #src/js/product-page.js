$(document).ready(function () {
    $('.interesting-cars-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        arrows: false,
        dots: true,
    });

    $('.interesting-cars-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(currentSlide)
        let categories = document.getElementsByClassName('category')
        categories.item(currentSlide / 3).classList.remove('active')
        categories.item(nextSlide / 3).classList.add('active')
    });
});