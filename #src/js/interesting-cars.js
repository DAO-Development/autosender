$(document).ready(function () {
    if ($(window).width() >= '1440') {
        $('#slider-1').slick({
            slidesToShow: 3,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '1024') {
        $('#slider-1').slick({
            slidesToShow: 2.14,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '768') {
        $('#slider-1').slick({
            slidesToShow: 1.6,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('#slider-1').slick({
            slidesToShow: 1.4,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '414') {
        $('#slider-1').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('#slider-1').slick({
            slidesToShow: 1.1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('#slider-1').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }

    let sliders = document.getElementsByClassName('interesting-cars-slider')
    let elements = document.getElementsByClassName('interesting-cars__category')
    let selectedSlider;
    let selectedCategory;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('active')) {
            selectedSlider = sliders[i]
            selectedCategory = elements[i]
        }
    }
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            selectedSlider.classList.remove("active");
            selectedCategory.classList.remove("active");
            sliders[i].classList.add("active");
            elements[i].classList.add("active");
            selectedSlider = sliders[i]
            selectedCategory = elements[i]
            let id = '#slider-' + (i + 1);
            if ($(window).width() >= '1440') {
                $(id).slick({
                    slidesToShow: 3,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() >= '1024') {
                $(id).slick({
                    slidesToShow: 2.14,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() >= '768') {
                $(id).slick({
                    slidesToShow: 1.6,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() >= '568') {
                $(id).slick({
                    slidesToShow: 1.4,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() >= '414') {
                $(id).slick({
                    slidesToShow: 1.2,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() >= '360') {
                $(id).slick({
                    slidesToShow: 1.1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            } else if ($(window).width() < '360') {
                $(id).slick({
                    slidesToShow: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            }
        });
    }

    let select = document.getElementById('interesting-cars__select');
    select.onchange = function () {
        selectedCategory.classList.remove("active")
        selectedCategory = sliders[select.selectedIndex]
        selectedCategory.classList.add("active")
        let id = '#slider-' + (select.selectedIndex + 1);
        if ($(window).width() >= '1440') {
            $(id).slick({
                slidesToShow: 3,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() >= '1024') {
            $(id).slick({
                slidesToShow: 2.14,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() >= '768') {
            $(id).slick({
                slidesToShow: 1.6,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() >= '568') {
            $(id).slick({
                slidesToShow: 1.4,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() >= '414') {
            $(id).slick({
                slidesToShow: 1.2,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() >= '360') {
            $(id).slick({
                slidesToShow: 1.1,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        } else if ($(window).width() < '360') {
            $(id).slick({
                slidesToShow: 1,
                variableWidth: false,
                arrows: false,
                dots: true,
                infinite: false
            });
        }
    }
});