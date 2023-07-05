
function prev() {
     document.getElementById('slider-container').scrollLeft -= 450;
}

function next() {
     document.getElementById('slider-container').scrollLeft += 450;
}

function prev1() {
     document.getElementById('slider-container1').scrollLeft -= 450;
}

function next1() {
     document.getElementById('slider-container1').scrollLeft += 450;
}


$(".slide img").on("click", function () {
     $(this).toggleClass('zoomed');
     $(".overlay").toggleClass('active');
})