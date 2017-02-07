$(function(){
//                       顶部导航    
    // -----------------------------------------------------模块滚动效果
    var l;
    $(".nav .nul .down").hover(function(){
        l=$(this).index();
        var c=117+l*135;
        $(".nav .nul i").stop().animate({left:c},500);
        $(".nav .nul .down .down_a").removeClass("current").eq(l).addClass("current");
        if(l!=0){$(".nav .nul .down>ul").eq(l-1).stop().slideDown(500);        }
    },function(){
        $(".nav .nul .down .down_a").removeClass("current");
        $(".nav .nul .down>ul").eq(l-1).stop().slideUp(500);
    })


});