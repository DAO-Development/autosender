let status = 0;


$( "#price" ).mouseenter(function() {
    status++
    $(".header__hover-1").addClass("vis")
});

$( ".header__hover-1" ).mouseenter(function(){
    status++;
});

$( "#price" ).mouseleave(function() {
    status--;
    setTimeout(() => {
        if (status == 0){
            $(".header__hover-1").removeClass("vis")
   
       }    
    }, 10);
    
});

$( ".header__hover-1" ).mouseleave(function() {
    status--;
    if (status == 0){
        $(".header__hover-1").removeClass("vis")
    }
});

$( "#au-online" ).mouseenter(function() {
    status++

    $(".header__hover-2").addClass("vis")

});

$( "#au-online" ).mouseleave(function() {
    status--;
    setTimeout(() => {
        if (status == 0){
            $(".header__hover-2").removeClass("vis")
        }
    }, 10);

});
$( ".header__hover-2" ).mouseenter(function(){
    status++;
})
$( ".header__hover-2" ).mouseleave(function() {
    status--

    setTimeout(() => {
        if (status == 0){
            $(".header__hover-2").removeClass("vis")
        }
    }, 10);
});



$( "#info" ).mouseenter(function() {
    status++;
    $(".header__hover-3").addClass("vis")

});

$( "#info" ).mouseleave(function(){
    status--;
    setTimeout(() => {
        if (status == 0){
            $(".header__hover-3").removeClass("vis")
        }
    }, 10);

})

$( ".header__hover-3" ).mouseenter(function(){
    status++;
})

$( ".header__hover-3" ).mouseleave(function() {
    status--;
    setTimeout(() => {
        if (status == 0){
            $(".header__hover-3").removeClass("vis")
        }
    }, 10);
});