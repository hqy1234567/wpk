let tel = document.querySelector("#tel")
let password = document.querySelector("#password");
let form = document.querySelector(".form");

//点击按钮验证
let code_input = document.getElementById("code_input");

let verifyCode = new GVerify({
    id: "picyzm",
    length: 4
});

let tishi = document.querySelector(".tishi");
form.onsubmit = function () {
    let e = window.event;
    e.preventDefault();
    let res2 = verifyCode.validate(code_input.value);
    if (res2) {
        // alert("验证通过");
        pAjax({
            type: 'post',
            url: '../api/login.php',
            data: {
                tel: tel.value,
                password: password.value
            }
        }).then(res => {
            res = JSON.parse(res);
            console.log(res.code);
            if (res.code == 1) {
                console.log("登录成功");
                tishi.style.display = "block";
                tishi.innerHTML = "登录成功~";
                setInterval(function () {
                    tishi.style.display = "none";
                    setCookie('login', tel.value);
                    let url = localStorage.getItem('url');
                    if (url) {
                        location.href = url;
                        localStorage.removeItem('url');
                    } else {
                        location.href = 'http://wpk.com/wpk/src/index.html';
                    }
                }, 3000);


            } else if (res.code == 2) {
                console.log("该用户未注册");
                tishi.style.display = "block";
                tishi.innerHTML = "该用户未注册";
                setInterval(function () {
                    tishi.style.display = "none";
                }, 3000);
            } else if (res.code == 0) {
                console.log("用户名或密码错误");
                tishi.style.display = "block";
                tishi.innerHTML = "用户名或密码错误";
                setInterval(function () {
                    tishi.style.display = "none";
                }, 3000);
            }
        })
    } else {
        // alert("验证码错误");
        console.log("验证码错误");
        tishi.style.display = "block";
        tishi.innerHTML = "验证码错误";
        setInterval(function () {
            tishi.style.display = "none";
        }, 3000);
        return;
    }

}