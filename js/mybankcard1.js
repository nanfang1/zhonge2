//银行卡号*替换 
$(function () {
    var $text = $(".banknumber").text();
    $(".banknumber").html($text.substr(0, 4) + "********" + $text.substr(-4));
})
