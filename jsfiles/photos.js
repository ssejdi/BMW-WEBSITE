$(document).ready(function() {
    $(".my-car").slick({
        autoplay:true,
        speed:600,
        costumPaging : function (slider, i){
            var thumb = $ (slider.slides[i]).data();
            return '<a>' +i(i+2)+'</a>';
        }
    })
});