 $(document).ready(function () {
     $(".centerNav ul li").click(function () {
         $(this).addClass("border").siblings().removeClass("border");
     })
 });
 $(function () {
     //创建MeScroll对象
     var mescroll = new MeScroll("mescroll", {
         down: {
             auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
             callback: downCallback //下拉刷新的回调
         },
         up: {
             auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
             callback: upCallback //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
         }
     });

     /*下拉刷新的回调 */
     function downCallback() {
         //联网加载数据
         getListDataFromNet(0, 1, function (data) {
             //联网成功的回调,隐藏下拉刷新的状态
             mescroll.endSuccess();
             //设置列表数据
             setListData(data, false);
         }, function () {
             //联网失败的回调,隐藏下拉刷新的状态
             mescroll.endErr();
         });
     }

     /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
     function upCallback(page) {
         //联网加载数据
         console.log("page.num=" + page.num);
         getListDataFromNet(page.num, page.size, function (data) {
             //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
             mescroll.endSuccess(data.length); //传参:数据的总数; mescroll会自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
             //设置列表数据
             setListData(data, true);
         }, function () {
             //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
             mescroll.endErr();
         });
     }

     /*设置列表数据*/
     function setListData(data, isAppend) {
         var listDom = document.getElementById("newsList");
         for (var i = 0; i < data.length; i++) {
             var newObj = data[i];

             // var str = '<p>' + newObj.title + '</p>';
			 // var a="<a href='minutepage2.html'' class='row row1'>";
			 var a="<a href='minutepage2.html' class='row row1'><div class='col-xs-4 img'><img src='image/bmw.jpg'></div><div class='col-xs-8'><div class='row row2'><div class='col-xs-12 rightp'><span>第</span><span class='num'>"+newObj.num+"</span>期-<span class='name'>奔驰XXXX</span></div></div><div class='row mp'><div class='col-xs-4 center-vertical amount_box'><span class='amount'>众筹金额</span></div><div class='col-xs-4 center-vertical col-xs-push-4 money_box'><span class='money'><span>"+newObj.money+"</span>万元</span></div><div class='col-xs-3 col-xs-push-9 sale_box'><span class='sale'>待售中</span></div></div></div>"
			 // var b="";                                                               
             // str += '<p class="new-content">' + newObj.content + '</p>';
			 // a=a+b
             var liDom = document.createElement("li");
             liDom.innerHTML =a;

             if (isAppend) {
                 listDom.appendChild(liDom); //加在列表的后面,上拉加载
             } else {
                 listDom.insertBefore(liDom, listDom.firstChild); //加在列表的前面,下拉刷新
             }
         }
     }

     /*联网加载列表数据*/
     var downIndex = 0;

     function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
         //延时一秒,模拟联网
         setTimeout(function () {
             try {
                 var newArr = [];
                 if (pageNum == 0) {
                     //此处模拟下拉刷新返回的数据
                     downIndex++;
                     var newObj = {
                         num:downIndex,
                         money:100+downIndex
                     };
                     newArr.push(newObj);
                 } else {
                     //此处模拟上拉加载返回的数据
                     for (var i = 0; i < pageSize; i++) {
                         var upIndex = (pageNum - 1) * pageSize + i + 1;
                         var newObj = {
                             num:upIndex,
                             money:100+upIndex
                         };
                         newArr.push(newObj);
                     }
                 }
                 //联网成功的回调
                 successCallback && successCallback(newArr);
             } catch (e) {
                 //联网失败的回调
                 errorCallback && errorCallback();
             }
         }, 1000)
     }

     //禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
     document.ondragstart = function () {
         return false;
     }
 });
