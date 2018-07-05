$(function () {

    var itemIndex = 0;

    var tabLoadEndArray = [false, false, false];
    var tabLenghtArray = [28];//数据总数
    var tabScroolTopArray = [0, 0, 0];
    
    // dropload
    var dropload = $('.khfxWarp').dropload({
        scrollArea: window,
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">已无数据</div>'
        },
        loadDownFn: function (me) {
            setTimeout(function () {
                if (tabLoadEndArray[itemIndex]) {
                    me.resetload();
                    me.lock();
                    me.noData();
                    me.resetload();
                    return;
                }
                var result = '';
                for (var index = 0; index < 10; index++) {
                    if (tabLenghtArray[itemIndex] > 0) {
                        tabLenghtArray[itemIndex]--;
                    } else {
                        tabLoadEndArray[itemIndex] = true;
                        break;
                    }
                    if (itemIndex == 0) {
                        result
                        +="	<div class='row zc-itmes '>"
                        + "		<div class='row'>"
                        + "			<div class='col-xs col-sm item'>"
                        + "				<p class='item-name'>第8926期-宝马X3</p>"
                        + "			</div>"
                        + "		</div>"
                        + "		<div class='row'>"
                        + "			<div class='col-xs-4 col-sm-4 item-condition'> "
                        + "				<p>众筹金额</p>"
                        + "					<p class='money'>"
                        + "						<span>26.80</span>万"
						+ "					</p>"
						+ "			</div>"
						+ "			<div class='col-xs-6 col-sm-6 progress-wrapper'>"
						+ "				<p>众筹进度</p>"
						+ "					<div class='progress'>"
						+ "						<div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 60%;'>"
						+ "							<span class='sr-only'>60% Complete</span>"
						+ "						</div>"
						+ "					</div>"
						+ "			</div>"
						+ "			<div class='col-xs-2 col-sm-2 progress-num'>"
						+ "				<span>60%</span>"
						+ "			</div>"
						+ "		</div>"
						+ "		<div class='row timer'>"
						+ "			<div class='col-xs-9 col-sm-9'>"
						+ "				<span class='timer-icon'></span>"
						+ "				<p class='item-time'>2018-6-8 16:21:42</p>"
						+ "			</div>"
						+ "			<div class='col-xs-3 col-sm-3'>"
						+ "				<span class='zc-state'>认筹中</span>"
						+ "			</div>"
						+ "		</div>"
						+ "	</div>"
                    }
                }
                $('.khfxPane').eq(itemIndex).append(result);
                me.resetload();
            }, 500);
        }
    });
});