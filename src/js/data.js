let dataArr = [];

for (let i = 1; i <= 2; i++) {
    let xhr = new XMLHttpRequest();
    data(i);

    function data(page) {
        xhr.open('post', '/api/getGoodList.html')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(
            `bid=2&ce_id=0&page_id=` + `${page}`
        );
    }

    xhr.onload = function () {
        let res = JSON.parse(xhr.responseText).data.list;
        console.log(res);
        dataArr.push(res);
    }
}

for (let i = 1; i <= 6; i++) {
    let xhr = new XMLHttpRequest();
    data(i);

    function data(page, bbid) {
        xhr.open('post', '/api/getGoodList.html')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(
            `bid=1&ce_id=0&page_id=` + `${page}`
        );
    }

    xhr.onload = function () {
        let res = JSON.parse(xhr.responseText).data.list;
        dataArr.push(res);
        localStorage.setItem("goodslist", JSON.stringify(dataArr));
    }
}