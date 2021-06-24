$(document).ready(function () {
    $('.filter__color').addClass('not-visible')
    $('.filter__auctions').addClass('not-visible')
    $('.filter__num-lot').addClass('not-visible')
    $('.filter__body-model').addClass('not-visible')
    $('.filter__body-type').addClass('not-visible')
    $('.filter__mileage').addClass('not-visible')
    $('.filter__volume').addClass('not-visible')
    $('.filter__drive').addClass('not-visible')
    $('.filter__num-body').addClass('not-visible')

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

    $('#filter-btn').on("click", function () {
        console.log('open')
        $('.main-filter__filter').addClass('active')
        $('.main-filter__filter-mobile').addClass('not-visible')
    });
    $('.all-btn').on("click", function () {
        let btn = document.querySelector('.all-btn-svg')
        if (btn.classList.contains('closed')) {
            btn.classList.remove('closed')
            $('.filter__color').removeClass('not-visible')
            $('.filter__auctions').removeClass('not-visible')
            $('.filter__num-lot').removeClass('not-visible')
            $('.filter__body-model').removeClass('not-visible')
            $('.filter__body-type').removeClass('not-visible')
            $('.filter__mileage').removeClass('not-visible')
            $('.filter__volume').removeClass('not-visible')
            $('.filter__drive').removeClass('not-visible')
            $('.filter__num-body').removeClass('not-visible')
        } else {
            btn.classList.add('closed')
            $('.filter__color').addClass('not-visible')
            $('.filter__auctions').addClass('not-visible')
            $('.filter__num-lot').addClass('not-visible')
            $('.filter__body-model').addClass('not-visible')
            $('.filter__body-type').addClass('not-visible')
            $('.filter__mileage').addClass('not-visible')
            $('.filter__volume').addClass('not-visible')
            $('.filter__drive').addClass('not-visible')
            $('.filter__num-body').addClass('not-visible')
        }
    });
    $('#filter__close-btn').on("click", function () {
        $('.main-filter__filter').removeClass('active')
        $('.main-filter__filter-mobile').removeClass('not-visible')
    });
    $('.clear-btn').on("click", function () {
        $('.main-filter__filter').removeClass('active')
        $('.main-filter__filter-mobile').removeClass('not-visible')
    });
    $('.show-btn').on("click", function () {
        $('.main-filter__filter').removeClass('active')
        $('.main-filter__filter-mobile').removeClass('not-visible')
    });


    const elements = document.querySelectorAll('.select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            placeholder: true,
        });
    });
})