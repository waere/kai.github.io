$(function(){
	$(".nav .nul .down .down_a").eq(1).addClass("current");
    $(".nav .nul .down").hover(function(){},function(){
        $(".nav .nul .down .down_a").removeClass("current").eq(1).addClass("current");
    });
// ——————————本页一共有几件商品
    // var x=$(".watches li").size();
    // $(".location .wrapper .cont b").html(x);

// ——————————当前所在位置内容替换
    // var y=$(".banner .shadow h2").html();
    // $(".location .wrapper p span").html(y);

});