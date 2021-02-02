const contentContainer = $('.content')[0]

$(document).ready(checkHiddenSidebar)

$(window).on("resize", checkHiddenSidebar)

$(contentContainer).on("scroll", contentHeaderBackgroundCol)

$('#sidebar_hidden').click(function(){
    $('.sidebar').addClass("hidden")
    $(contentContainer).css({
        filter: 'none'
    })
})

$('#sidebar_visible').click(function(){
    $('.sidebar').removeClass("hidden")
    $(contentContainer).css({
        filter: 'blur(4px)'
    })
})

// ** to darken the background ContentHeader while scroll is greater than 0 px **
function contentHeaderBackgroundCol(){
    if (contentContainer.scrollTop > 0){
        $('.content_header').css({
            backgroundColor: `rgb(48 41 90 / 78%)`
        })
    } else {
        $('.content_header').css({
            backgroundColor: `rgba(0,0,0,.158)`
        })
    }
}

// ** to check Sidebar visibility **
function checkHiddenSidebar(){
    if ($(window).width() > 1040) {
        $('.sidebar').removeClass("hidden")
    } else {
        $('.sidebar').addClass("hidden")
    }
    $(contentContainer).css({
        filter: 'none'
    })
}