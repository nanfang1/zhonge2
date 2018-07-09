$(function () {
    var flag1 = false;
    $('#jieshao').click(function () {
        if (!flag1) {
            $.dialog({
                type: 'confirm',
                titleText: "请登陆！",
                onClickOk: function () {
                    window.location.href = "./login.html";
                    flag1 = true;
                },
                onClickCancel: function () {
                    alert('你点了取消~~');
                }
            });
        }
        return false;
    });
    $('#contract').click(function () {
        if (!flag1) {
        	$.dialog({
        		type: 'confirm',
        		titleText: "请登陆！",
        		onClickOk: function () {
        			window.location.href = "./login.html";
        			flag1 = true;
        		},
        		onClickCancel: function () {
        			alert('你点了取消~~');
        		}
        	});
        }
        return false;
    });
})
