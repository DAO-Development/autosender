$('.footer__bar-item--menu').on("click", function(){
    $('.fmenu').addClass('f-vis');
    $('.header').addClass('invis')
    $('main').addClass('invis')
    $('.footer__head').addClass('invis')
    $('.footer__main').addClass('invis')
    $('.footer__footer').addClass('invis')
    window.scrollTo(0,0);
})

$('.fmenu__close').on("click", function(){
    $('.fmenu').removeClass('f-vis');
    $('.header').removeClass('invis')
    $('main').removeClass('invis')
    $('.footer__head').removeClass('invis')
    $('.footer__main').removeClass('invis')
    $('.footer__footer').removeClass('invis')
})