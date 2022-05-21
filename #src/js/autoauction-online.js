$(document).ready(function () {

    $('.auctions__content-pictures').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });


    $('.filter__color').addClass('not-visible')
    $('.filter__auctions').addClass('not-visible')
    $('.filter__sell').addClass('not-visible')
    $('.filter__num-lot').addClass('not-visible')
    $('.filter__body-model').addClass('not-visible')
    $('.filter__body-type').addClass('not-visible')
    $('.filter__mileage').addClass('not-visible')
    $('.filter__volume').addClass('not-visible')
    $('.filter__drive').addClass('not-visible')
    $('.filter__num-body').addClass('not-visible')
    if ($(window).width() < '1024') {
        $('.filter__price').addClass('not-visible')
        $('.filter__year').addClass('not-visible')
        $('.filter__rating').addClass('not-visible')
    }

    let lists = document.getElementsByClassName('main-filter__list-category')
    let selectedList;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].classList.contains('active')) {
            selectedList = lists[i]
        }
    }

    let filterSelect = document.getElementById('main-filter__select');
    filterSelect.onchange = function () {
        selectedList.classList.remove("active")
        selectedList = lists[filterSelect.selectedIndex]
        selectedList.classList.add("active")
    };

    let tabs = $('.main-filter__category')
    tabs.each((i, el) => {
        console.log(el)
        $(el).on('click', function () {
            console.log(el)
            console.log($(el).attr('data-num'))
            $('.main-filter__list-category').removeClass('active')
            $('#list-category-' + $(el).attr('data-num')).addClass('active')

            tabs.removeClass('active')
            $(el).addClass('active')
        })

    })


    $('#filter-btn').on("click", function () {
        console.log('open')
        $('.main-filter__filter').addClass('active')
        $('.main-filter__filter-mobile').addClass('not-visible')
        window.scrollTo(0, 0);
    });
    $('.all-btn').on("click", function () {
        let btn = document.querySelector('.all-btn-svg')
        if (btn.classList.contains('closed')) {
            btn.classList.remove('closed')
            $('.filter__color').removeClass('not-visible')
            $('.filter__sell').removeClass('not-visible')
            $('.filter__auctions').removeClass('not-visible')
            $('.filter__num-lot').removeClass('not-visible')
            $('.filter__body-model').removeClass('not-visible')
            $('.filter__body-type').removeClass('not-visible')
            $('.filter__mileage').removeClass('not-visible')
            $('.filter__volume').removeClass('not-visible')
            $('.filter__drive').removeClass('not-visible')
            $('.filter__num-body').removeClass('not-visible')
            if ($(window).width() < '1024') {
                $('.filter__price').removeClass('not-visible')
                $('.filter__year').removeClass('not-visible')
                $('.filter__rating').removeClass('not-visible')
            }
        } else {
            btn.classList.add('closed')
            $('.filter__color').addClass('not-visible')
            $('.filter__auctions').addClass('not-visible')
            $('.filter__sell').addClass('not-visible')

            $('.filter__num-lot').addClass('not-visible')
            $('.filter__body-model').addClass('not-visible')
            $('.filter__body-type').addClass('not-visible')
            $('.filter__mileage').addClass('not-visible')
            $('.filter__volume').addClass('not-visible')
            $('.filter__drive').addClass('not-visible')
            $('.filter__num-body').addClass('not-visible')
            if ($(window).width() < '1024') {
                $('.filter__price').addClass('not-visible')
                $('.filter__year').addClass('not-visible')
                $('.filter__rating').addClass('not-visible')
            }
        }
    });
    let title = document.getElementById(('mobile-filter'))
    $('#filter__close-btn').on("click", function () {
        $('.main-filter__filter').removeClass('active')
        $('.main-filter__filter-mobile').removeClass('not-visible')
        window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
    });
    if ($(window).width() <= '768') {
        $('.clear-btn').on("click", function () {
            $('.main-filter__filter').removeClass('active')
            $('.main-filter__filter-mobile').removeClass('not-visible')
            window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
        });
        $('.show-btn').on("click", function () {
            $('.main-filter__filter').removeClass('active')
            $('.main-filter__filter-mobile').removeClass('not-visible')
            window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
        });
    }

    const elements = document.querySelectorAll('.select');
    console.log(elements)
    console.log($('.select'));
    elements.forEach(el => {
        let choices = new Choices(el, {
            placeholder: true,
        });
    });

    $(".model-change").on("click", function () {
        $(".filter__model").html("<select class='model-select'><option class='placeholder' value='placeholder'>Модель</option><option>не Модель 1</option><option> неМодель 2</option></select>")
        let models = document.querySelector('.model-select');
        console.log(models.innerHTML)
        const choices1 = new Choices(models, {
            placeholder: true,
        });
    })





    var slider = document.getElementById('rating');

    noUiSlider.create(slider, {
        start: [3, 9],
        step: 1,
        connect: true,
        range: {
            'min': 3,
            'max': 9
        }
    });




    slider.noUiSlider.on('update', function (values) {
        console.log(values)
        $('#rating-start-val').val(values[0])
        $('#rating-end-val').val(values[1])
        $('#rating-start').html(values[0])
        $('#rating-end').html(values[1])
    });


});
