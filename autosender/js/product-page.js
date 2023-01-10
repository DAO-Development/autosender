$(document).ready(function () {
    if ($(window).width() >= '1440') {
        $('.gallery-open').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="../img/product-page/prev.svg"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="../img/product-page/next.svg"></div>',
            fade: true,
            asNavFor: '.gallery-carousel'
        });
        $('.gallery-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            asNavFor: '.gallery-open'
        });
    } else if ($(window).width() >= '1024') {
        $('.gallery-carousel').slick({
            slidesToShow: 2.3,
            slidesToScroll: 1,
            variableWidth: false,
            dots: true,
            infinite: false,
        });
    }  else if ($(window).width() >= '1200') {
        $('.gallery-carousel').slick({
            slidesToShow: 2.5,
            slidesToScroll: 1,
            variableWidth: false,
            dots: true,
            infinite: false,
        });
    } else if ($(window).width() >= '768') {
        $('.gallery-carousel').slick({
            slidesToShow: 1.6,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('.gallery-carousel').slick({
            slidesToShow: 1.4,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '414') {
        $('.gallery-carousel').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('.gallery-carousel').slick({
            slidesToShow: 1.1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('.gallery-carousel').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }


    if ($(window).width() >= '1200') {
        if($('.product-similar__list')[0].childElementCount>3)
        $('.product-similar__list').slick({
            slidesToShow: 3,
            variableWidth: false,
            prevArrow: '<div class="arrow-prev arrow-similar"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.461776 9.74459L9.20358 1.02696C9.49 0.741505 9.95371 0.741985 10.2396 1.02844C10.5254 1.31485 10.5246 1.77882 10.2382 2.0645L2.0167 10.2633L10.2385 18.462C10.5249 18.7477 10.5256 19.2114 10.2399 19.4978C10.0966 19.6414 9.90882 19.7132 9.72104 19.7132C9.53374 19.7132 9.3467 19.6419 9.20362 19.4993L0.461776 10.7819C0.323829 10.6447 0.24642 10.4579 0.24642 10.2633C0.24642 10.0687 0.32405 9.88209 0.461776 9.74459Z" fill="black"/><defs><linearGradient id="paint0_linear_7_1173" x1="5.35008" y1="0.813232" x2="5.35008" y2="19.7132" gradientUnits="userSpaceOnUse"><stop stop-color="black"/><stop offset="0.588542" stop-color="black"/></linearGradient></defs></svg></div>',
            nextArrow: '<div class="arrow-next arrow-similar"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5381 9.74459L1.7963 1.02696C1.50988 0.741505 1.04617 0.741985 0.760235 1.02844C0.474521 1.31485 0.47526 1.77882 0.761711 2.0645L8.98318 10.2633L0.761416 18.462C0.475001 18.7477 0.474263 19.2114 0.759939 19.4978C0.903276 19.6414 1.09106 19.7132 1.27884 19.7132C1.46614 19.7132 1.65318 19.6419 1.79626 19.4993L10.5381 10.7819C10.676 10.6447 10.7535 10.4579 10.7535 10.2633C10.7535 10.0687 10.6758 9.88209 10.5381 9.74459Z" fill="black"/></svg></div>',
            dots: true,
            infinite: false,
           
         });
        
    } else if ($(window).width() >= '968') {
        if($('.product-similar__list')[0].childElementCount>2)

        $('.product-similar__list').slick({
            slidesToShow: 2,
            variableWidth: false,
            prevArrow: '<div class="arrow-prev arrow-similar"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.461776 9.74459L9.20358 1.02696C9.49 0.741505 9.95371 0.741985 10.2396 1.02844C10.5254 1.31485 10.5246 1.77882 10.2382 2.0645L2.0167 10.2633L10.2385 18.462C10.5249 18.7477 10.5256 19.2114 10.2399 19.4978C10.0966 19.6414 9.90882 19.7132 9.72104 19.7132C9.53374 19.7132 9.3467 19.6419 9.20362 19.4993L0.461776 10.7819C0.323829 10.6447 0.24642 10.4579 0.24642 10.2633C0.24642 10.0687 0.32405 9.88209 0.461776 9.74459Z" fill="black"/><defs><linearGradient id="paint0_linear_7_1173" x1="5.35008" y1="0.813232" x2="5.35008" y2="19.7132" gradientUnits="userSpaceOnUse"><stop stop-color="black"/><stop offset="0.588542" stop-color="black"/></linearGradient></defs></svg></div>',
            nextArrow: '<div class="arrow-next arrow-similar"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5381 9.74459L1.7963 1.02696C1.50988 0.741505 1.04617 0.741985 0.760235 1.02844C0.474521 1.31485 0.47526 1.77882 0.761711 2.0645L8.98318 10.2633L0.761416 18.462C0.475001 18.7477 0.474263 19.2114 0.759939 19.4978C0.903276 19.6414 1.09106 19.7132 1.27884 19.7132C1.46614 19.7132 1.65318 19.6419 1.79626 19.4993L10.5381 10.7819C10.676 10.6447 10.7535 10.4579 10.7535 10.2633C10.7535 10.0687 10.6758 9.88209 10.5381 9.74459Z" fill="black"/></svg></div>',
            dots: true,
            infinite: false,
          
         });
        
    } else {
        console.log($('.product-similar__list').prevObject[0].childElementCount)
        if ($('.product-similar__list')[0].childElementCount > 1) {
            $('.product-similar__list').slick({
                slidesToShow: 1,
                variableWidth: false,
                dots: true,
                infinite: false,
                arrows: false,
            });
        }
        
    }
    
    $('.product__acc-title').on('click', function () {
        let data_id = $(this).attr('data-id')
        if ($('.product__acc[data-id="'+data_id+'"]').hasClass('show'))
            $('.product__acc[data-id="'+data_id+'"]').removeClass('show')
        else
            $('.product__acc[data-id="'+data_id+'"]').addClass('show')
    })
    $('.product__acc-mobile-title').on('click', function () {
        let data_id = $(this).attr('data-id')
        if ($('.product__acc-mobile[data-id="'+data_id+'"]').hasClass('show'))
            $('.product__acc-mobile[data-id="'+data_id+'"]').removeClass('show')
        else
            $('.product__acc-mobile[data-id="'+data_id+'"]').addClass('show')
    })
});