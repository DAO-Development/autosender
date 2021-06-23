$(document).ready(function () {
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