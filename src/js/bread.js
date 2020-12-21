// 获取本地数据,渲染蛋糕名录
let aaa = JSON.parse(localStorage.getItem("goodslist"));
let bread_list = document.querySelector(".bread_list");

aaa.forEach((item, index) => {
    for (index in item) {
        item.forEach((value, idx) => {
            if (index == idx && value.type == 2) {
                bread_list.innerHTML += `
                <li class="bread_item">
                    <div class="img"><img src="${value.use_thumb}" alt="" gid=${value.id}></div>
                    <div class="title">
                        <span>${value.name}</span></br>
                        <span class="price">￥${value.good_product[0].price}/${value.good_product[0].price}</span>
                    </div>
                </li>
                 `
            }
        })
    }
});

// 传递id到详情页
bread_list.onclick = function () {
    let e = window.event;
    let target = e.target;
    let goodsid = target.getAttribute("gid");
    console.log(goodsid);
    if (goodsid) {
        location.href = `./details.html?id=${goodsid}`;
    }
}