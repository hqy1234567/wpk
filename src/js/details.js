 // 获取传过来的商品id，转成数值类型
 let str = location.search;
 str = +str.substr(4);
 console.log(str);


 // 获取本地数据
 let aaa = JSON.parse(localStorage.getItem("goodslist"));
 console.log(aaa);
 let goods_info = document.querySelector(".goods_info");
 let banner = document.querySelector(".banner");

 // 渲染详情页
 aaa.forEach((item, index) => {
     for (index in item) {
         item.forEach((value, idx) => {
             if (value.id == str) {
                 console.log(value);
                 let stra = ``;
                 let strimg = ``;
                 value.good_product.forEach(item => {

                     stra += `
                     <a href="javascript:void(0)" data-key="0" class="good_product"
                         data-spec_default="1-1">
                         <div class="value-label">${item.name}</div>
                         <input style="display:none" type="radio">
                     </a>`
                 });

                 value.images.forEach(item => {
                     strimg += `
                         <a href="javascript:void(0)"><img src="${item}"></a>
                     `
                 });
                 banner.innerHTML = strimg;
                 console.log(banner);

                 str = `
                     <div class="margin-w1210 clearfix" style="padding-top:120px">
                         <div class="cake_title">
                             <span class="title">${value.name}</span><br>
                             <span class="eng_title"></span><br>
                             <span class="intro">${value.desc}</span>
                             <br>
                             <span class="intro">${value.desc_english}</span>
                             <br>
                         </div>

                         <div id="product-intro" class="goods-info">
                             <div id="preview">
                                 <div>
                                     <div><img src="https://vipcake.oss-cn-shanghai.aliyuncs.com/themes/pc/images/ycl.png" alt="原材料">
                                     </div>
                                     <ul>
                                         <li>
                                             <img src="https://zt.vipcake99.com/uploads/good_tag/1497421149577195879.png" alt="新西兰乳脂奶油">
                                             <span>新西兰乳脂奶油</span>
                                         </li>
                                         <li>
                                             <img src="https://zt.vipcake99.com/uploads/good_tag/1497421259078252798.png" alt="智利蓝莓">
                                             <span>智利蓝莓</span>
                                         </li>
                                         <li>
                                             <img src="https://zt.vipcake99.com/uploads/good_tag/1497423228386298546.png" alt="韩国砂糖">
                                             <span>韩国砂糖</span>
                                         </li>
                                         <li>
                                             <img src="https://zt.vipcake99.com/uploads/good_tag/1499309675580689162.png" alt="新西兰芝士">
                                             <span>新西兰芝士</span>
                                         </li>
                                     </ul>
                                 </div>

                                 <table width="100%" height="170px;">
                                     <tbody>
                                         <tr>
                                             <td>甜度参考：</td>
                                             <td>
                                                 <img src="https://vipcake.oss-cn-shanghai.aliyuncs.com/themes/pc/images/tiandu2.png"
                                                     alt="甜度">
                                             </td>
                                         </tr>
                                         <tr>
                                             <td>口味：</td>
                                             <td>${value.attrs["2"]}</td>
                                         </tr>
                                         <tr>
                                             <td>适合人群：</td>
                                             <td>${value.attrs["3"]}</td>
                                         </tr>
                                         <tr>
                                             <td>适合节日：</td>
                                             <td>${value.attrs["4"]}</td>
                                         </tr>
                                         <tr>
                                             <td>酒精：</td>
                                             <td>${value.attrs["5"]}</td>
                                         </tr>
                                         <tr>
                                             <td>保鲜条件：</td>
                                             <td>${value.attrs["6"]}</td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </div>

                             <div class="goods-detail-info">
                                 <form action="javascript:addToCart(6)" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY">

                                     <div id="guige">
                                         <div class="pic">
                                             <div>
                                                 <img id="imageId" width="100%"
                                                     src="https://vipcake.oss-cn-shanghai.aliyuncs.com/themes/pc/images/15x15.png"
                                                     onerror="$(this).hide();">
                                             </div>
                                         </div>
                                         <div id="zhongliang">
                                             <div id="choose-version">
                                                 <div class="dt">产品规格：</div>
                                                 <div class="dd catt">
                                                     <ul class="ys_xuan" id="xuan_41">
                                                         <div class="catt" id="catt_41">
                                                             ${stra}
                                                         </div>
                                                     </ul>
                                                     <div class="clear"></div>
                                                     <input type="hidden" name="spec_list" value="4">
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                     <div id="shuxing">
                                         <ul id="choose" class="choose_bor">
                                             <li class="sx">
                                                 <table width="100%;" height="150px">
                                                     <tbody>
                                                         <tr>
                                                             <td width="25%">尺寸</td>
                                                             <td>
                                                                 <span id="attr_size">${value.good_product[0].size}</span>
                                                             </td>
                                                         </tr>
                                                         <tr>
                                                             <td>人数</td>
                                                             <td>适合<span id="attr_people">${value.good_product[0].people}</span>人食用</td>
                                                         </tr>
                                                         <tr>
                                                             <td>餐具</td>
                                                             <td>含<span id="attr_tableware">${value.good_product[0].tableware}</span>套</td>
                                                         </tr>
                                                         <tr>
                                                             <td>时间</td>
                                                             <td>
                                                                 <span id="attr_time">${value.good_product[0].time}</span>
                                                             </td>
                                                         </tr>
                                                     </tbody>
                                                 </table>
                                             </li>

                                             <li id="choose-amount">
                                                 <input name="number" type="hidden" class="text" id="number" value="1"
                                                     onblur="changePrice();">
                                             </li>
                                             <li id="goods-price">
                                                 <div class="mar-l">
                                                     <span>价格:</span>
                                                     <strong class="p-price">¥ <span id="attr_price">${value.good_product[0].price}</span></strong>
                                                     <br>
                                                 </div>
                                             </li>
                                         </ul>
                                     </div>

                                     <div class="buyNub-buy-wrap">
                                         <div id="choose-btns1" class="buyNub-buy" style="display:none">
                                             <a onclick="tell_me(6)" class="tell-me"><i></i>到货通知</a>
                                         </div>
                                         <div id="choose-btns" class="buyNub-buy" style="display: block;">

                                             <span class="u-buy1" id="addcard">
                                                 加入购物车
                                             </span>

                                             <a href="javascript:void(0);" name="bi_addToCart" class="u-buy1">
                                                 立即购买
                                             </a>
                                         </div>
                                     </div>
                                 </form>
                             </div>
                         </div>

                         <div class="goods_desc" align="center">
                             ${value.content}
                         </div>
                     </div>
                 `
                 goods_info.innerHTML = str;
             }
         })
     }
 });

 let id = location.search;
 id = +id.substr(4);
 console.log(id);

 let addcard = document.getElementById("addcard");
 goods_info.onclick = function () {
         let e = window.event;
         if (e.target.id == 'addcard') {
             // 因为添加到购物车按钮 需要把用户名和商品id
             // 所以需要判断是否有登录
             let login = getCookie('login');
             console.log(id);
             console.log(login);
             if (!login) {
                 location.href = '../html/login.html';
                 localStorage.setItem('url', 'http://wpk.com/wpk/src/html/detail.html?id=' + id)
                 return
             }
             pAjax({
                 url: '../api/addCarData.php',
                 data: {
                     tel: login,
                     goodsid: id
                 }
             }).then(res => {
                 console.log(res);
             })
         }
     } 
    //  !--详情页轮播图-- >
    
     let banner_list = document.querySelectorAll(".banner a");
 var ab = 0;
 window.onload = function () {
     for (var i = 0; i < banner_list.length; i++) {
         if (i != 0) {
             banner_list[i].style.opacity = 0;
         }
     }
 };

 function bb() {
     setInterval(function ac() {
         ab = ab > banner_list.length - 2 ? 0 : ++ab;
         for (var b = 0; b < banner_list.length; b++) {
             if (b == ab) {
                 banner_list[b].style.opacity = 5;
                 banner_list[b].style.transition = "opacity 3s";
             } else {
                 banner_list[b].style.opacity = 0;
             }
         }
     }, 3000);
 }
 bb();