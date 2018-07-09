$(document).ready(function () {

    // login pwd 显示 隐藏
    var pwdFlag = 0;
    $('.hide-pwd').click(function () {
        if (pwdFlag % 2 == 0) {
            $(this).prev().attr({ 'type': 'text' });
            $(this).addClass("glyphicon-eye-open").removeClass("glyphicon-eye-close");
        } else {
            $(this).prev().attr({ 'type': 'password' });
            $(this).addClass("glyphicon-eye-close").removeClass("glyphicon-eye-open");
        }
        pwdFlag++;
    })
    // set-name-pwd   模态框跳过
    $('.skip').click(function () {
        window.location.href = 'my.html';
    })
    $('.skip-login').click(function () {
        window.location.href = 'login.html';
    })
    // 编辑联系地址 设为默认按钮
    $('.df-btn').click(function () {
        var circle = $('.circle');
        var right = parseInt($('.circle').css('right'));
        if (right == 0) {
            circle.animate({
                'right': '28px'
            }, 100, function () {
                $('.df-btn').removeClass("bg-color");
            })
        } else {
            circle.animate({
                'right': '0px'
            }, 100, function () {
                $('.df-btn').addClass("bg-color");
            })
        }
    })

    // my 资金 隐藏/显示
    var imgFlag = 0;
    var money = $('.money');
    var numArr = [];
    for (var i = 0; i < money.length; i++) {
        numArr.push(money.eq(i).html());
    }
    $('.num-show img').click(function () {
        if (imgFlag % 2 == 0) {
            $(this).attr("src", "images/eye-close.png");
            money.html('******');
        } else {
            $(this).attr("src", "images/eye.png");
            for (var i = 0; i < money.length; i++) {
                money.eq(i).html(numArr[i]);
            }
        }
        imgFlag++;
    })
    // 收支明细 模态框显示隐藏
    var modal = $('.my-modal').css('display');
    $('.modal-btn').click(function () {
        if (modal == 'none') {
            $('.my-modal').css({ 'display': 'block' });
            modal = 'block';
        }
        return false; //阻止冒泡
    })
    $('.my-modal').click(function () {
        if (modal == 'block') {
            $('.my-modal').css({ 'display': 'none' });
        }
        modal = 'none';
    })


    // user-set 推荐好友
    $('.fx').click(function () {
        $('.fx-hide').css({
            'display': 'block'
        }).animate({
            'top': '-50px'
        }, 200, function () {
            $(document).click(function () {
                $('.fx-hide').animate({
                    'top': '0px'
                }, 200).css({
                    'display': 'none'
                });
            })
        });
    })
    // ---user-set  设置   联系方式
    var dfFlag = 0;
    $('.contact-operation .default').click(function () {
        var contactDf = $(this),
            circle = $(this).children('.circle'),
            dfText = $(this).children('.df-text');
        if (dfFlag % 2 == 0) {
            contactDf.addClass("color");
            dfText.text("默认地址");
            circle.addClass("glyphicon glyphicon-ok-circle").removeClass("df-circle");
        } else {
            contactDf.removeClass("color");
            dfText.text("设为默认");
            circle.removeClass("glyphicon glyphicon-ok-circle").addClass("df-circle");
        }
        dfFlag++;
    })
    // 提现 选择银行卡
    $('.modal-li').click(function () {
        var str = $(this).text();
        $('.tx-text').text(str);
    })
    // 后退返回上一页按钮
    $('.nav-head .prev').click(function () {  
        javascript:history.go(-1);
    })
	 // 首页资讯 轮播
    function test() {
        var looper =$('.inf-list')
        val = parseInt(looper.css('top'));
        if (val > -60) {
            looper.animate({
                top: '-=3rem'
            }, 300);
        } else {
            looper.animate({
                top: '0px'
            }, 300);
        }
    }
    timer = setInterval(function () {
        test();
    }, 2500);
})
// 表单验证
// --存储页面信息
var register = 'register',              // --表示注册页面
    setNamePwd = 'setNamePwd',          //设置用户名密码       
    login = 'login',                    //登录页面
    changePwd = 'changePwd',            //修改密码页面
    successID = 'successID',            //注册成功时邀请实名认证页面
    realName = 'realName',
    retrievePwd = 'retrievePwd',        //找回密码
    addBankCard1 = 'addBankCard1',
    addBankCard2 = 'addBankCard2',
    addContact = 'addContact',
    changePhone = 'changePhone',
    tx = 'tx'

var phoneReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
    pwdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
    IDcardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    unameReg = /^[\u4E00-\u9FA5|A-z|0-9]{3,20}$/,
    bankCardReg = /^([1-9]{1})\d{14,20}$/,
    pwdFalseNum = 0,
    username = 12345,
    password = 23456,
    phoneNum = 13012345678,
    IDcard = '13012318880222361x',
    yzm = 123456;

function tip(myPage) {                                     //参数 判断是哪一个页面

    var inputArr = $('input').not("input[type='button']"); //存储非btn input jq对象集合
    var valArr = [];                                       // 存储 input.val
    var loginProv = $('.login-prov');                      // 获取登录页面 隐藏的图形验证码dom

    // input 绑定点击隐藏tip
    inputArr.on('click', atipClick);
    $('select').on('click', atipClick);
    // 页面插入tip
    if (myPage == 'successID') {
        $('.atip').remove();
        $('.modal-content').append("<div class='atip'></div>");
        var atip = $('.atip');
        atip.css({ 'marginBottom': '3rem' });
    } else if(myPage == 'tx'){
		$('.atip').remove();
		$('.mescroll').append("<div class='atip'></div>");
		var atip = $('.atip');
	}else {
        $('.atip').remove();
        $('body').append("<div class='atip'></div>");
        var atip = $('.atip');
    }

    // 判断 登录页面 是否显示了 图形验证码（连续密码错误3次显示）
    if (myPage == 'login' && loginProv.css('display') === 'none') {
        inputArr = inputArr.not(inputArr.eq(2));
    }

    // 遍历input 判断是否为空，并提示输入框内容不能为空
    inputArr.each(function () {
        var val = $(this).val()
        var tipText = $(this).attr('placeholder');

        if (val == "") {
            atip.css({ 'display': 'block' }).text(tipText);
            return false;
        }
        if ($.inArray(val, valArr) < 0) {
            valArr.push(val);
        }
    })
    // 根据tip 没有内容得知 用户已在所有input输入内容，来对input val值来进行验证
    if (atip.text() == "") {

        // 登录页面验证
        if (myPage == 'login') {

            if (valArr[0] != username) {
                atip.text('用户名错误或不存在').css({ 'display': 'block' });
                return false;
            } else if (valArr[1] != password) {
                atip.text('密码错误').css({ 'display': 'block' });
                pwdFalseNum++;
                if (pwdFalseNum == 3) {
                    loginProv.css({ 'display': 'block' });
                }
                return false;
            } else if (valArr[2] != code && loginProv.css('display') === 'block') {
                atip.css({ 'display': 'block' }).text("图形验证码错误");
                inputArr.eq(2).val('');

            } else {
                atip.text('登录成功').css({ 'display': 'block' });
                window.location.href = 'my.html';
            }

        }

        // 注册页面验证
        if (myPage == 'register') {

            if (!phoneReg.test(valArr[0])) {
                atip.css({ 'display': 'block' }).text("手机号格式不正确");
                return false;
            } else if (valArr[1] != yzm) {
                atip.css({ 'display': 'block' }).text("短信验证码错误");
                return false;
            } else if (valArr[2].toLowerCase() != code) {
                atip.css({ 'display': 'block' }).text("图形验证码错误");
                inputArr.eq(2).val('');
                return false;
            } else {
                window.location.href = "set-name-pwd.html";
            }

        }
        // 设置用户名密码
        if (myPage == 'setNamePwd') {
            if (!unameReg.test(valArr[0])) {
                atip.css({ 'display': 'block' }).text("用户名格式错误");
                return false;
            } else if (!pwdReg.test(valArr[1])) {
                atip.css({ 'display': 'block' }).text("请输入规范的密码");
                return false;
            } else {
                window.location.href = 'register-success.html';
            }
        }
        // register-success 邀请实名验证
        if (myPage == 'successID' || myPage == 'realName') {

            if (!IDcardReg.test(valArr[1])) {
                atip.css({ 'display': 'block' }).text("身份证格式错误");
                return false;
            }else{
                if(myPage == 'successID'){
                    atip.css({ 'display': 'block' }).text("实名认证成功");
                    var timer2 = setTimeout(function () {  
                        window.location.href = 'login.html';
                    },1000)
                }else{
                    atip.css({ 'display': 'block' }).text("实名认证成功");
                    var timer2 = setTimeout(function () {  
                        window.location.href = 'user-inf.html';
                    },1000)
                }
                
            }

        }
        //  changePwd 修改密码验证
        if (myPage == 'changePwd') {

            if (valArr[0] != password) {
                atip.css({ 'display': 'block' }).text("您输入的原密码错误");
                return false;
            } else if (!pwdReg.test(valArr[1])) {
                atip.css({ 'display': 'block' }).text("请输入规范的新密码");
                return false;
            } else if (valArr[2] != undefined) {  // undefined ————> valArr 不能存储相同的数据
                atip.css({ 'display': 'block' }).text("两次输入的新密码不一致");
                return false;
            } else {
                atip.css({ 'display': 'block' }).text("密码修改成功");
                var timer = setTimeout(function () {  
                    window.location.href = 'user-set.html';
                },1000)
            }

        }
        // 找回密码
        if (myPage == 'retrievePwd') {

            console.log(parseInt(valArr[0]));
            if (!phoneReg.test(valArr[0]) || parseInt(valArr[0]) != phoneNum) {
                atip.css({ 'display': 'block' }).text("手机号错误或格式不正确");
                return false;
            } else if (valArr[1] != yzm) {
                atip.css({ 'display': 'block' }).text("短信验证码错误");
                return false;
            } else if (!pwdReg.test(valArr[2])) {
                atip.css({ 'display': 'block' }).text("请输入规范的新密码");
                return false;
            } else {
                
                atip.css({ 'display': 'block' }).text("密码找回成功");
                var timer1 = setTimeout(function () {  
                    window.location.href = 'login.html';
                },1000)
            }

        }
        // 绑定银行卡  addcard1
        if (myPage == 'addBankCard1') {

            if (!bankCardReg.test(valArr[0])) {
                atip.css({ 'display': 'block' }).text("请输入规范的银行卡号");
                return false;
            } else if (valArr[1] != undefined) {
                atip.css({ 'display': 'block', 'width': '19rem' }).text("两次输入的银行卡号不一致");
            } else {
                window.location.href = 'user-bank-addcard2.html';
            }

        }
        if (myPage == 'addBankCard2') {
            var selectVal = $('select').eq(0).val();
            if (selectVal == '35') {
                atip.css({ 'display': 'block' }).text("请选择开户行省市");
            } else {
                atip.css({ 'display': 'block' }).text("绑定成功");
                var timer3 = setTimeout(function () {  
                    window.location.href = 'user-inf.html';
                },1000)
            }

        }

        // 添加联系方式 验证
        if (myPage == 'addContact') {
            var selectVal = $('select').eq(0).val();
            if (selectVal == '35') {
                atip.css({ 'display': 'block' }).text("请选择所在地区");
            } else if (!phoneReg.test(valArr[1])) {
                atip.css({ 'display': 'block' }).text("手机号码格式错误");
            } else {
                atip.css({ 'display': 'block' }).text("添加成功");
                var timer4 = setTimeout(function () {  
                    window.location.href = 'user-contact.html';
                },1000)
            }
        }

        // 用户修改绑定手机号验证 user-change-phone 
        if(myPage == 'changePhone'){
            if(valArr[0] != phoneNum){
                atip.css({ 'display': 'block' }).text("当前手机号不匹配");
                return false;
            }else if(valArr[1] != IDcard){
                atip.css({ 'display': 'block' }).text("身份证号码不匹配");
                return false;
            }else if (!phoneReg.test(valArr[2])) {
                atip.css({ 'display': 'block' }).text("新手机号码格式错误");
                return false;
            }else if (valArr[3] != yzm) {
                atip.css({ 'display': 'block' }).text("短信验证码错误");
                return false;
            }else{
                atip.css({ 'display': 'block' }).text("修改手机号成功");
                var timer5 = setTimeout(function () {  
                    window.location.href = 'user-inf.html';
                },1000)
            }
        }
        // 提现 验证
        if(myPage == 'tx'){
            var txNum = parseInt($('.tx-num').text());
            var btnText = $('.tx-text').text();
            if(parseInt(valArr[0]) > txNum){
                atip.css({ 'display': 'block' }).text("提现金额超出额度");
                return false;
            }else if(valArr[1] != IDcard){
                atip.css({ 'display': 'block' }).text("身份证号码不匹配");
                return false;
            }else if (valArr[2] != yzm) {
                atip.css({ 'display': 'block' }).text("短信验证码错误");
                return false;
            }else if (btnText == '请选择银行卡'){
                atip.css({ 'display': 'block' }).text("请选择银行卡");
                return false;
            }else{
                atip.css({ 'display': 'block' }).text("提现申请提交中请稍后...");
            }
        }
    }

}

// input 点击隐藏tip  
function atipClick() {
    var atip = $('.atip');
    if (atip.css('display') == 'block') {
        atip.css({ 'display': 'none' });
    }
}
// 充值页面  输入框 clearNoNum/convertCurrency函数
function convertCurrency(money) {
    //汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money == '') { return ''; }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return '您输入的金额已超出限制';
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 2);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}
function clearNoNum(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符  
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数  
    if (obj.value.indexOf(".") < 0 && obj.value != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        obj.value = parseFloat(obj.value);
    }
    $('#convert').val(convertCurrency(obj.value));
    if( $('#convert').val() == '您输入的金额已超出限制'){
        obj.value = '';    
    }
}




