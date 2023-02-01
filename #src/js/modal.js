$('.open-modal').on("click", function(){
    $('.modal').addClass('vis')
})
 	
$('.modal, .modal__close').on("click", function(){
    $('.modal').removeClass('vis')
    $('.modal iframe').attr('src', $('iframe').attr('src'));

})


$( ".modal__wrap" ).click(function( event ) {
    event.stopPropagation();
  });
$('.video-reviews-item').on('click', function (e) {
    e.preventDefault();
    let code = $(this).attr('href').split('watch?v=')[1]
    $('.modal-video').addClass('vis'); 
    $('.modal-video iframe').attr('src', 'https://www.youtube.com/embed/' + code)
    
})
