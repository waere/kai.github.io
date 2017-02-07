$(function(){
	$(".nav .nul .down .down_a").eq(2).addClass("current");
    $(".nav .nul .down").hover(function(){},function(){
        $(".nav .nul .down .down_a").removeClass("current").eq(2).addClass("current");
    });
});