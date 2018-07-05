$(function () {
    var flag1 = false;
    $('#jieshao').click(function () {
        if (!flag1) {
            $.dialog({
                type: 'confirm',
                titleText: "请登陆！",
                onClickOk: function () {
                    window.location.href ="./minutepage3.html";
                    flag1 = true;
                },
                onClickCancel: function () {
                    alert('你点了取消~~');
                }
            });
        } else {
            window.location.href = "./raisejs1.html";
        }
        return false;
    });
    $('#contract').click(function () {
        $.dialog({
            type: 'confirm',
            titleText: "请登陆！",
            onClickOk: function () {
                window.location.href = "./minutepage3.html";
            },
            onClickCancel: function () {
                alert('你点了取消~~');
            }
        });
        return false;
    });
    $('#Order').click(function () {
        $.dialog({
            type: 'confirm',
            titleText: "请登陆！",
            onClickOk: function () {
                window.location.href = "./minutepage3.html";
            },
            onClickCancel: function () {
                alert('你点了取消~~');
            }
        });
        return false;
    });
})
