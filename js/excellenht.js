$(function(){
    $(".nav .nul .down .down_a").eq(2).addClass('current');
    $(".nav .nul .down").hover(function(){},function(){
        $(".nav .nul .down .down_a").eq(2).addClass('current');
    });
    $('.traleft').find('li').click(function(){
        var i=$(this).index();
        $(this).addClass('change').siblings('li').removeClass('change');
        $('.rlghtlis').css('top',-i*923);
    })
})

