$(function () {
    var flag1 = false;
    $('#jieshao').click(function () {
        if (!flag1) {
            $.dialog({
                type: 'confirm',
                titleText: "请登陆！",
                onClickOk: function () {
                    window.location.href = "./housecf3.html";
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
        			window.location.href = "./housecf3.html";
        			flag1 = true;
        		},
        		onClickCancel: function () {
        			alert('你点了取消~~');
        		}
        	});
        }
        return false;
    });
	$('#Order').click(function () {
		if (!flag1) {
			$.dialog({
				type: 'confirm',
				titleText: "请登陆！",
				onClickOk: function () {
					window.location.href = "./housecf3.html";
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
// $(function () {
//     var flag1 = false;
// 	// var content=$("<div class='newlrp'><span id='hava'>可用资金<b>￥</b></span><span class='sumofmoney' id='sumofmoney'>0.00</span></div>");
//     $('#jieshao').click(function () {
//         if (!flag1) {
//             $.dialog({
//                 type: 'confirm',
//                 titleText: "请登陆！",
//                 onClickOk: function () {
//                     // window.location.href = "./housecf3.html";
// 					$(".row-box3").children().remove();
// 					$(".row-box3").append("<div class='newlrp'><span id='hava'>可用资金<b>￥</b></span><span class='sumofmoney' id='sumofmoney'>0.00</span></div>");
// 				    flag1 = true;
// 					
//                 },
//                 onClickCancel: function () {
//                     alert('你点了取消~~');
//                 }
//             });
// 			return false;
//         }
//     });
//     $('#contract').click(function () {
//         if (!flag1) {
//         	$.dialog({
//         		type: 'confirm',
//         		titleText: "请登陆！",
//         		onClickOk: function () {
//         			$(".row-box3").children().remove();
//         			$(".row-box3").append("<div class='newlrp'><span id='hava'>可用资金<b>￥</b></span><span class='sumofmoney' id='sumofmoney'>0.00</span></div>");
//         			flag1 = true;
//         		},
//         		onClickCancel: function () {
//         			alert('你点了取消~~');
//         		}
//         	});
//         return false;
//         }
//     });
// 	$('#Order').click(function () {
// 		if (!flag1) {
// 			$.dialog({
// 				type: 'confirm',
// 				titleText: "请登陆！",
// 				onClickOk: function () {
// 					$(".row-box3").children().remove();
// 					$(".row-box3").append("<div class='newlrp'><span id='hava'>可用资金<b>￥</b></span><span class='sumofmoney' id='sumofmoney'>0.00</span></div>");
// 					flag1 = true;
// 				},
// 				onClickCancel: function () {
// 					alert('你点了取消~~');
// 				}
// 			});
// 		return false;
// 		}
// 	});
// })
