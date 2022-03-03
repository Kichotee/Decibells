$(function(){
    $(" input ").click(function(){
        $(".img-container-2 .bg").fadeOut(1000)
    })
    $(" input ").click(function(){
        $(".body").animate({
            left: "30%"
        }, 1000)
    });
    $(".logo-img").click(function(){
        $(".logo").fadeToggle(1000)

    })

});