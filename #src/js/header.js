$( "#price" ).mouseenter(function() {
    $(".header__hover-1").addClass("vis")
    $(".header__hover-2").removeClass("vis")
    $(".header__hover-3").removeClass("vis")

});

$( ".header__hover-1" ).mouseleave(function() {
    $(".header__hover-1").removeClass("vis")
    
});

$( "#au-online" ).mouseenter(function() {
    $(".header__hover-2").addClass("vis")
    $(".header__hover-1").removeClass("vis")
    $(".header__hover-3").removeClass("vis")

});

$( ".header__hover-2" ).mouseleave(function() {
    $(".header__hover-2").removeClass("vis")
});

$( "#info" ).mouseenter(function() {
    $(".header__hover-3").addClass("vis")
    $(".header__hover-1").removeClass("vis")
    $(".header__hover-2").removeClass("vis")

});

$( ".header__hover-3" ).mouseleave(function() {
    $(".header__hover-3").removeClass("vis")
});