$(document).ready(function () {
    $('.main-filter__lists-more .more').on('click', function () {
        $('.main-filter__lists').addClass('open')
    })

    $('.main-filter__lists-more .less').on('click', function () {
        $('.main-filter__lists').removeClass('open')
    })

    let lists = document.getElementsByClassName('main-filter__list-category')
    let selectedList;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].classList.contains('active')) {
            selectedList = lists[i]
        }
    }

    let tabs = $('.main-filter__category')

    $('.autoauction-online #main-filter__select option').each((i, el) => {
        $(el).val(i)
    })
    
    $('#main-filter__select option').each((i, el) => {
        $(el).attr('data-custom-properties', i)
    })

    let select_filter = new Choices($('#main-filter__select')[0], {
        placeholder: true,
        searchEnabled: false,
        shouldSort: false
    })

    

    select_filter.passedElement.element.addEventListener('change', function (event) {
        $('.main-filter__list-category').removeClass("active");
        console.log(event)
        console.log($(event.target[0]).attr('data-custom-properties'))
        selectedList = lists[$(event.target[0]).attr('data-custom-properties')]
        selectedList.classList.add("active")

        tabs.removeClass('active')
        $('.main-filter__category[data-num=' + event.detail.value + ']').addClass('active')
    })

    tabs.each((i, el) => {
        console.log(el)
        $(el).on('click', function () {
            console.log(el)
            console.log($(el).attr('data-num'))
            $('.main-filter__list-category').removeClass('active')
            $('#list-category-' + $(el).attr('data-num')).addClass('active')

            tabs.removeClass('active')
            $(el).addClass('active')

            select_filter.setChoiceByValue($(el).attr('data-num'))

        })

    })
});