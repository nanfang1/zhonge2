$(document).ready(function () {
    $(".top .tab a").click(function () {
        $(this).addClass("tab-a").siblings().removeClass("tab-a");
    });
});
