var a = 20,
    b = 50,
    c = 30;
var h_items = new Array();
h_items[0] = {
    "h_title": "车辆",
    "h_amount": 0,
    "h_color": "#4dd0c8"
}
h_items[1] = {
    "h_title": "房产",
    "h_amount": 0,
    "h_color": "#fad680"
}
h_items[2] = {
    "h_title": "其他",
    "h_amount": 0,
    "h_color": "#f89679"
}

$("#easysector").easysector({
    "h_items": h_items,
    "h_title": "Browser Percent",
    "h_width": '100%',
    "h_borderColor": "silver",
    "h_poindlength": 2,
    //"h_showamount": true,
    "h_backColor": "white",
    "h_recwidth": 16,
    "h_titlesize": 24,
    "h_Radii": 108,
    "h_infosize": 12
});
new Mdate("dateShowBtn", {
    acceptId: "dateSelector",
    beginYear: "2017",
    beginMonth: "1",
    format: "-"
});
