$(document).ready(function () {
    console.log("pitty");
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
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
});