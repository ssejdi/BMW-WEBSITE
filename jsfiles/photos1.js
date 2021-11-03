
$(document).ready(function() {
    $(".my-car").slick({
        autoplay:false,
        costumPaging : function (slider, i){
            var thumb = $ (slider.slides[i]).data();
            return '<a>' +i(i+1)+'</a>';
        },
    })
});