$(document).ready(checkWidth)

$(window).on("resize", checkWidth)

$(window).on("scroll", checkWidth)

// ** toggle hidden sidebar **
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

// ** function for increment or decrement number **
function count(type){
    const numb = +$('#persons__switch__indicator').text()
    let btn = $('#persons__switch__indicator')[0]
    if (type) {
        $(btn).text(numb + 1)
    } else {
        if (numb > 0) $(btn).text(numb - 1)
    }
};