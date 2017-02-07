$(function(){
    $(".nav .nul .down .down_a").eq(1).addClass("current");
    $(".nav .nul .down").hover(function(){},function(){
        $(".nav .nul .down .down_a").removeClass("current").eq(1).addClass("current");
    });
   
   $('#Top').click(function(){
    $('body').animate({scrollTop: 0}, 500);
   })
})