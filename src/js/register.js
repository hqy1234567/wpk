let password = document.querySelector("#password");
let form = document.querySelector(".form");
let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let tishi = document.querySelector(".tishi");

let verifyCode = new GVerify({
    id: "picyzm",
    length: 4
});

// 验证码
jQuery.validator.addMethod('testYzm', function (value) {
    let res = verifyCode.validate($("#code_input").val());
    if (res) {
        return true
    } else {
        return false
    }
}, "验证码不正确");

// 手机号
jQuery.validator.addMethod('testTel', function (value) {
    let reg1 = /^1[3,5,6,7,8]\d{9}$/;
    if (reg1.test(value)) {
        return true
    } else {
        return false
    }
}, "请输入正确的手机号");

// 验证用户名 字母开头，长度6~12位
jQuery.validator.addMethod('testPassword', function (value) {
    let reg2 = /^\d{6,12}$/;
    if (reg2.test(value)) {
        return true
    } else {
        return false
    }
}, "请输6~12位的数字");

// 接受协议
jQuery.validator.addMethod('testAgreement', function (value) {
    var isChecked = $('.checkbox').prop('checked');
    if (isChecked) {
        return true
    } else {
        return false
    }
}, "未接受协议");

$(".form").validate({
    // 输入框的验证规则
    rules: {
        // tel,password,password_again是输入框的name属性
        tel: {
            required: true,
            maxlength: 11,
            minlength: 11,
            testTel: true
        },
        password: {
            required: true,
            maxlength: 12,
            minlength: 6,
            testPassword: true
        },
        password_again: {
            required: true,
            equalTo: ".password"
        },
        yzm: {
            required: true,
            testYzm: true
        },
        agreement: {
            testAgreement: true
        }
    },
    // 提示信息
    messages: {
        tel: {
            required: '手机号为必填项',
            maxlength: '手机号长度为11',
            minlength: '手机号长度为11'
        },
        password: {
            required: '密码为必填项',
            maxlength: '密码长度不超过12位',
            minlength: '密码长度不低于6位'
        },
        password_again: {
            required: '确认密码为必填项',
            equalTo: '两次输入的密码不相同'
        },
        yzm: {
            required: '验证码为必填项'
        },
        agreement: {
            testAgreement: '请阅读协议，并勾选'
        }
    },
    submitHandler: function () {
        if (this.successList[0].value && this.successList[1].value && this.successList[2].value && this.successList[3]) {
            pAjax({
                type: "post",
                url: "../api/register.php",
                data: {
                    tel: phone.value,
                    password: pass.value
                }
            }).then(res => {
                res = JSON.parse(res);
                console.log(res.code);
                if (res.code == 1) {
                    console.log("注册成功");
                    tishi.style.display = "block";
                    tishi.innerHTML = "注册成功~";
                    setInterval(function () {
                        tishi.style.display = "none";
                        setCookie('login', phone.value);
                        location.href = 'http://wpk.com/wpk/src/index.html';
                    }, 3000);
                } else if (res.code == 0) {
                    console.log("注册失败");
                    tishi.style.display = "block";
                    tishi.innerHTML = "注册失败~";
                    setInterval(function () {
                        tishi.style.display = "none";
                    }, 3000);
                } else {
                    console.log("该用户已注册");
                    tishi.style.display = "block";
                    tishi.innerHTML = "该用户已注册~";
                    setInterval(function () {
                        tishi.style.display = "none";
                    }, 3000);
                }
            })
        }
    }
})

// <!-- 切换登录方式 -->
let weixin = document.querySelectorAll(".weixin span");
let erweima = document.querySelectorAll(".erweima");
weixin.forEach((item, index) => {
    item.onmouseover = function () {
        erweima.forEach((value, idx) => {
            if (index == idx) {
                value.style.display = "block";
            }
        })
    }
    item.onmouseout = function () {
        erweima.forEach((value, idx) => {
            if (index == idx) {
                value.style.display = "none";
            }
        })
    }
})

// <!-- 获取验证码倒计时 -->
let zphone = document.querySelector('.zphone')
let a = true;
let len = 30;
zphone.onclick = function () {
    if (a) {
        zphone.value = len + 's';
        let time = setInterval(function () {
            zphone.value = parseFloat(zphone.value) - 1 + 's'
            if (zphone.value == '0s') {
                clearInterval(time);
                a = true;
                zphone.value = "获取手机验证码";
            }
        }, 1000);
        a = false;
    } else {
        return false;
    }
}