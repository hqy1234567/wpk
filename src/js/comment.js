// 点击跳转页面
$(".logo").click(function () {
    $(location).attr("href", "../index.html");
})
$(".nav2").click(function () {
    $(location).attr("href", "./cakeList.html");
});
$(".nav3").click(function () {
    $(location).attr("href", "./bread.html");
});
$(".nav4").click(function () {
    $(location).attr("href", "./active.html");
})
// $(".nav4").click(function () {
//     $(location).attr("href", "./active.html");
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
nav_hover(".nav1", '.nav1 img', "../img/icon06.png", "../img/icon05.png");
nav_hover(".nav2", '.nav2 img', "../img/1-1.png", "../img/1.png");
nav_hover(".nav3", '.nav3 img', "../img/2-2.png", "../img/2.png");
nav_hover(".nav4", '.nav4 img', "../img/3-3.png", "../img/3.png");
nav_hover(".nav5", '.nav5 img', "../img/5-5.png", "../img/5.png");
nav_hover(".cate_nav1", ".cate_nav1 img", '../img/pl2-on.gif', '../img/pl2.gif');
nav_hover(".cate_nav2", ".cate_nav2 img", '../img/pl1-on.gif', '../img/pl1.gif', );

//回到顶部
$('.goTop img').on('click', function () {
    $(window).scrollTop(0);
    $(window).scrollLeft(0);
});

// 设置版心与浏览器宽度自适应
$('.header_warp').css({
    "width": window.innerWidth
});

// 点击购物车
// 判断是否有登录

/* let login = getCookie('login');
if (!login) {
    location.href = '../html/login.html';
    localStorage.setItem('url', 'http://wpk.com/wpk/src/html/car.html');
} */