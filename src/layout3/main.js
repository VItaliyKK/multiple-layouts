$(document).ready(checkWidth)
$(window).on("resize", checkWidth)

$('.toggle__sidebar').click(function(){
    if ($('.sidebar').hasClass('hidden')){
        $('.sidebar').removeClass("hidden")
    } else {
        $('.sidebar').addClass("hidden")
    }
})

// ** check width of the window **
function checkWidth(){
    if ($(window).width() > 1100) {
        $('.sidebar').removeClass("hidden")
    } else {
        $('.sidebar').addClass("hidden")
    }
};