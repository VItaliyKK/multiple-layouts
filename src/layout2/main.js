$(document).ready(checkWidth);
$(window).on("resize", checkWidth);

$('#show__sidebar').click(function(){
    $('.sidebar').removeClass("hidden")
})
$('.sidebar__toggle__hide').click(function(){
    if ($(window).width() <= 1180) {
        $('.sidebar').addClass("hidden")
    }
})

// ** check width of the window **
function checkWidth(){
    if ($(window).width() > 1180) {
        $('.sidebar').removeClass("hidden")
    } else {
        $('.sidebar').addClass("hidden")
    }
};