$(window).on('load',function(){
// nav
    $(".nav .nul .down .down_a").eq(0).addClass('current');
    $(".nav .nul .down").hover(function(){},function(){
        $(".nav .nul .down .down_a").eq(0).addClass('current');
    });


// banner 轮播
var move=1;
var i=0;
// var t=setInterval(animate, 3000);


function animate(){
    i++;
    move++;
    $('.banner_img').stop();
    if(i>2){
        i=0;
    }
    if(move>4){
        move=2;
        $('.banner_img').stop().css('left','-1920px').animate({left: -1920*move}, 500);
    }else{
        $('.banner_img').animate({left: -1920*move}, 500)
    }
}

// function curr()点击小圆点
    $('.banner_btn').find('li').each(function(index){
        $(this).click(function(){
            $('.banner_btn').find('li').removeClass('current');
            $(this).addClass('current');
            move=$(this).index()+1;
            $('.banner_img').animate({left: -1920*move}, 500);
        })
    });

// 点击上一张下一张
    $('.next').click(function(){
       animate(); 
       $('.banner_btn').find('li').removeClass('current').eq(i).addClass('current');            
    })

    $('.prev').click(function(){
        move--;
        i--;
        if(i<0){
            i=2;
        }
        if(move<0){
            move=2;
            $('.banner_img').stop().css('left','-5760px').animate({left: -1920*move}, 500);
        }else{
            $('.banner_img').animate({left: -1920*move}, 500);
        } 
        $('.banner_btn').find('li').removeClass('current').eq(i).addClass('current');       
    })
// 点击上一张下一张



 // 鼠标经过时停止定时器
    $(".banner").hover(function(){
        // clearInterval(t);
        $(".banner .con1").stop(true,true).fadeIn(500);
    },function(){
        // t=setInterval(animate, 3000);
        $(".banner .con1").stop(true,true).fadeOut(500);
    });


// ！！！表厂！！！
$('.factorymain').find('li').mouseenter(function(){
    var i=$(this).index();
    $('.introduce').find('ul').stop().animate({left: -i*1200}, 500)
});


// !!!产品系列




})








