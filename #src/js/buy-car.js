
let open_btn = document.getElementsByClassName('buy-car__open');
let texts = document.getElementsByClassName('buy-car__content');

console.log(open_btn.length)

for (let i = 0; i < open_btn.length; i++) {
    open_btn[i].addEventListener("click", function(){
        if(!texts[i].classList.contains('full-text')){
            texts[i].classList.add('full-text')
            open_btn[i].classList.add('open-btn')
        }
        else{
            texts[i].classList.remove('full-text')
            open_btn[i].classList.remove('open-btn')
        }

    })
}
