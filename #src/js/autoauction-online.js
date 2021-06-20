$(document).ready(function () {
    let lists = document.getElementsByClassName('main-filter__list-category')
    let selectedList;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].classList.contains('active')) {
            selectedList = lists[i]
            console.log(i)
        }
    }

    let filterSelect = document.getElementById('main-filter__select');
    filterSelect.onchange = function () {
        selectedList.classList.remove("active")
        selectedList = lists[filterSelect.selectedIndex]
        selectedList.classList.add("active")
    };
})