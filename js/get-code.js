$(function () {
    //获取验证码倒计时
    var timer = null;
    var flag = true;
    $("#get-code").click(function () {
		if (flag) {
			flag=false;
			var countdown = 5;
			$(this).attr("disabled", "disabled").css("color", "#999999").text("重新发送" +
				"(" + countdown + ")");
			var $_this = $(this);
			timer = setInterval(function () {
				countdown--;
				$_this.attr("disabled", "disabled").css("color", "#999999").text("重新发送" +
					"(" + countdown + ")");
				if (countdown < 0) {
					$_this.removeAttr("disabled").text("获取验证码").css("color", "white");
					flag=true;
					clearInterval(timer);
				}
			}, 1000)
        }
    })
    //获取验证码倒计时结束
})
