const handleClick = event => {
    event.preventDefault()  
    const href = event.target.getAttribute("href")
    this.location.hash=href
    scrollToHash(href)
}
  
function scrollToHash(href) {
    const headerOffset = 200 // полная высота header'a
    const elementToScroll = document.querySelectorAll(href)[0]
    const elementPosition = elementToScroll.offsetTop
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth"
    })
}
$(document).ready(function () {

      
  document.querySelectorAll(".about-company__navigation-item").forEach(item => 
      item.addEventListener("click", handleClick))
  
    const url = new URL(window.location)
    const urlHash = url.hash
    if (urlHash) {                                  
        scrollToHash(urlHash)
    }
})