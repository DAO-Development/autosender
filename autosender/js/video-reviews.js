$(document).ready(function () {
        $('.video-reviews-list').slick({
            slidesToShow: 4,
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/arrow-left.svg"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/arrow.svg"></div>',
            infinite: false,
            responsive: [
                {
                    
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
});