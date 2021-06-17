$(document).ready(function () {
    $('.reviews__items').slick({
        slidesToShow: 3,
        variableWidth: false,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 568,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});