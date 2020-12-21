// 判断是否有登录
let login = getCookie('login');
if (!login) {
    location.href = '../html/login.html';
    localStorage.setItem('url', 'http://wpk.com/wpk/src/html/car.html');
}

let userGoods = document.querySelector(".userGoods");

// 获取用户购物车中的数据
pAjax({
    url: '../api/getCarData.php',
    data: {
        tel: login
    }
}).then(res => {
    list = JSON.parse(res).list;
    let arr = [];
    let obj = {};
    list.forEach((item, index) => {
        obj = {
            goodsid: item.goodsid,
            goodsnum: item.goodsnum
        };
        arr.push(obj);
    });
    localStorage.setItem('userGoods', JSON.stringify(arr));
})

let bbb = JSON.parse(localStorage.getItem("userGoods"));
console.log(bbb);


let arr2 = [];
let aaa = JSON.parse(localStorage.getItem("goodslist"));

aaa.forEach((item, index) => {
    for (index in item) {
        item.forEach((value, idx) => {
            bbb.forEach((val) => {
                if (index == idx && value.id == val.goodsid) {
                    value['goodsnum'] = val.goodsnum;
                    arr2.push(value);
                }
            })
        })
    }
})
console.log(arr2);
// 渲染购物车
let str = ``;
let totle_price = 0;

function render(data) {
    arr2.forEach((item, index) => {


        // console.log(item.goodsnum * item.price);


        // console.log(localStorage.getItem("userGoods"));
        // if (localStorage.getItem("userGoods") = []) {
        //     console.log(1);
        //     userGoods.innerHTML = `
        //         <div class="jumbotron">
        //             <h1>亲爱的用户</h1>
        //             <p>您购物空空如也，请到列表页选购你商品</p>
        //             <p><a class="btn btn-primary btn-lg" href="../html/list.html" role="button">点击去到列表页</a></p>
        //         </div>`;
        //     return
        // }

        str += `
                <tr gid=${item.id}>
                    <td align="center" width="5%">
                        <input type="checkbox" name="select_good" checked="checked">
                    </td>
        
                    <td align="center" width="40%">
                        <div class="thumb_name">
                            <dl style="display: flex;align-items: center;">
                                <dt>
                                    <a href="" target="_blank">
                                        <img src="${item.thumb}" alt="" style="width: 80px;height: 80px;">
                                    </a>
                                </dt>
                                <dd>
                                    <a href="" target="_blank" class="f6"
                                        style="color: #666666;font-size: 12px;">${item.name}
                                    </a>
                                    <br>
                                    <font class="attrname" style="font-size: 14px;color: #BBBBBB;">
                                    产品规格:${item.good_product[0].name}
                                    </font>
                                </dd>
                            </dl>
                        </div>
                    </td>
        
                    <td align="center" width="15%">
                        <div class="jm_cartnum">
                            <span class="jmminu">
                                -
                            </span>
                            <input type="text" name="num" id="input-F6rFhd7RnFhK" value="${item.goodsnum}" size="1"
                                class="jminputBg">
                            <span class="jmadd">
                                +
                            </span>
                        </div>
                    </td>
        
                    <td align="center" width="15%">
                        <font class="cart_jmprice" style="font-size: 14px;color: #E31939;font-weight: 700;">
                            ￥${item.price}
                        </font>
                    </td>
        
                    <td align="center" width="15%">
                        <font class="cart_jmprice sum_price"
                            style="font-size: 14px;color: #E31939;font-weight: 700;">￥${item.goodsnum*item.price}</font>
                    </td>
        
                    <td align="center" width="10%">
                        <a href="javascript:void(0);" id="removeGoods" class="f6 remove-good" style="font-size: 12px;color: #666666;" >删除</a>
                    </td>
                </tr>
            `
        userGoods.innerHTML = str;

        totle_price += item.goodsnum * item.price;
    });

    // 商品总价格
    console.log(totle_price);

    let str2 = ``;
    let table_buttom = document.querySelector(".table_buttom");
    table_buttom.innerHTML =
        `
        <tr>
        <td width="150">
            <a href="" class="continue_buy">继续购物</a>
        </td>
        <td align="right" width="80">
            <a href="javascript:void(0);" class="jmclear">
                <span style="color:#aaaaaa">清空购物车 </span>
            </a>
        </td>
        <td align="right" id="cart_money_info"><span>应付金额: <span id="order_amount" style="font-size: 20px;color: #E31939;font-weight: 700;">￥${totle_price}</span></span>
        </td>
        <td align="right" width="150">
            <a href="javascript:void(0);" id="cart_settlement" class="jmcheckout"
                style="color: rgb(255, 255, 255); background: rgb(227, 25, 57);">去结算</a>
        </td>
        </tr>
    `
}

render();

userGoods.onclick = function () {
    let e = window.event;
    if (e.target.id == 'removeGoods') {
        let gid = e.target.parentNode.parentNode.getAttribute("gid");
        let goodsid = gid;
        console.log(login, goodsid);
        pAjax({
            type: 'post',
            url: '../api/removeCarData.php',
            data: {
                tel: login,
                goodsid: goodsid
            }
        }).then(res => {
            // render();
        });

        e.target.parentNode.parentNode.remove();
    }
}

