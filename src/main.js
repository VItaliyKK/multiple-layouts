$(document).ready(styleHeader)

$(window).on("resize", styleHeader)

$(window).on("scroll", styleHeader)

// ** gradual background display ** 
function styleHeader(){
    if (window.scrollY <= 160){
        $('#header__box').css({
            backgroundImage: `radial-gradient(rgb(63 81 181 / ${window.scrollY/2}%) 0%, rgb(0 0 0 / ${window.scrollY/2}%))`
        })
    } else {
        $('#header__box').css({
            backgroundImage: `radial-gradient(rgb(63 81 181 / 80%) 0%, rgb(0 0 0 / 70%))`
        }) 
    }
}