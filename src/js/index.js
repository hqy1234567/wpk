// $(".logo").click(function () {
//     $(location).attr("href", "./index.html");
// })
// $(".nav2").click(function () {
//     $(location).attr("href", "./html/cakeList.html");
// });
// $(".nav3").click(function () {
//     $(location).attr("href", "./html/bread.html");
// });
// $(".nav4").click(function () {
//     $(location).attr("href", "./html/active.html");
// })
// $(".nav5").click(function () {
//     $(location).attr("href", "./html/active.html");
// })

// 点击导航栏改变图标url
function nav_hover(x, y, newImage, oldImage) {
    $(x).hover(function () {
            //鼠标滑过图片切换
            $(y).attr('src', newImage);
        },
        function () {
            $(y).attr('src', oldImage);
        });
}
nav_hover(".nav1", '.nav1 img', "./img/icon06.png", "./img/icon05.png");
nav_hover(".nav2", '.nav2 img', "./img/1-1.png", "./img/1.png");
nav_hover(".nav3", '.nav3 img', "./img/2-2.png", "./img/2.png");
nav_hover(".nav4", '.nav4 img', "./img/3-3.png", "./img/3.png");
nav_hover(".nav5", '.nav5 img', "./img/5-5.png", "./img/5.png");

// 点击导航栏改变背景颜色,字体颜色(排他思想)
// $(function () {
//     $('.nav_li').click(function () {
//         $(this).addClass('active').siblings().removeClass('active');
//         $(this).children('.nav_lia').addClass('activea').parent().siblings().children('.nav_lia').removeClass('activea');
//     })
// });

// 设置版心与浏览器宽度自适应
$('.header_warp').css({
    "width": window.innerWidth
});
$('.content_warp').css({
    "width": window.innerWidth
});
$('.newShops_warp').css({
    "width": window.innerWidth
});
$('.footer_warp').css({
    "width": window.innerWidth
})


// footer鼠标划入显示图片 
$(function () {
    $('.footer_bottom .wx').mouseover(function () {
        $('.footer_bottom .wxewm').css('display', 'block');
    })
    $('.footer_bottom .wx').mouseout(function () {
        $('.footer_bottom .wxewm').css('display', 'none');
    })

    $('.footer_bottom .wb').mouseover(function () {
        $('.footer_bottom .wbewm').css('display', 'block');
    })
    $('.footer_bottom .wb').mouseout(function () {
        $('.footer_bottom .wbewm').css('display', 'none');
    })
});

//回到顶部
$('.goTop img').on('click', function () {
    $(window).scrollTop(0);
    $(window).scrollLeft(0);
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 鼠标移入，轮播停止，移出继续轮播
$('.swiper-container').hover(function () {
    swiper.autoplay.stop();
}, function () {
    swiper.autoplay.start();
});