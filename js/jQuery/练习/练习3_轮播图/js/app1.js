/*
 功能说明:
 1. 点击向右(左)的图标, 平滑切换到下(上)一页
 2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页是第一页
 3. 每隔3s自动滑动到下一页
 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
 5. 切换页面时, 下面的圆点也同步更新
 6. 点击圆点图标切换到对应的页

 bug: 快速点击下一页时, 有问题,翻页问题
 */
$(function () {
    var $container = $('#container');
    var $list = $('#list');
    var $points = $('#pointsDiv>span');
    var $prev = $('#prev');
    var $next = $('#next');
    var TIME = 400; // 移动的总时间
    var ITEM_TIME = 20; //单元移动的间隔时间
    var PAGE_WIDTH = 600; // 一页的宽度
    var imgCount = $points.length; //图片的数量
    var index = 0;//当前圆点的下标
    var moving = false; //是否正在翻页中

    // 1. 点击向右(左)的图标, 平滑切换到下(上)一页
    $next.click(function () {
        nextPage(true)
    })
    $prev.click(function () {
        nextPage(false)
    })

    //3.每隔3秒钟自动滑动到下一页
    var intervalId = setInterval(function () {
        nextPage(true);
    }, 3000);

    // 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
    $container.hover(function () {
        clearInterval(intervalId);
    }, function () {
        intervalId = setInterval(function () {
            nextPage(true);
        }, 3000);
    });

    $points.click(function () {
        var targetIndex = $(this).index();
        //如果是当前页则不处理
        if (targetIndex === index) {
            return;
        }
        nextPage(targetIndex);
    });
    /**
     * 平滑翻页
     * @param next  true 下一页，false上一页 数值：指定下页
     */
    function nextPage(next) {
        if (moving) {
            return;
        }
        moving = true;
        console.log("next Page");
        /**
         * 总的时间 TIME = 400
         * 单元移动的时间间隔ITEM_TIME= 20
         * 总的偏移量 offset
         * 单元偏移量itemoffset = offset / (TIME/ITME_TIME)
         * 启动循环定时器不断更新$list的left，到达目标处停止定时器
         */
        //当前left值
        var currentLeft = $list.position().left;
        //计算offset
        var offset = 0;
        if (typeof next === "boolean") {
            offset = next ? -PAGE_WIDTH : PAGE_WIDTH;
        } else {
            offset = -(next - index) * PAGE_WIDTH;
        }
        //计算单元移动的偏移量itemoffset
        var itemoffset = offset / (TIME / ITEM_TIME);
        // $list.css("left", currentLeft + offset);
        //计算出目标处的left
        var targetLeft = currentLeft + offset;
        //启动循环定时器不断更新$list的left，到达目标处停止定时器
        var intervalId = setInterval(function () {
            //计算出最新的currentLeft
            currentLeft += itemoffset;
            if (currentLeft == targetLeft) {
                clearInterval(intervalId);
                moving = false;
                //如果到达了最右边的图片（1.jpg),跳转到最左边的第2张图片（1.jpg）
                if (currentLeft == -(imgCount + 1) * PAGE_WIDTH) {
                    currentLeft = -600;
                } else if (currentLeft == 0) {
                    //如果到达了最左边的图片（5.jpg),跳转到最右边的第2张图片（5.jpg）
                    currentLeft = -(imgCount) * PAGE_WIDTH;
                }
            }
            $list.css("left", currentLeft);
        }, ITEM_TIME);
        updatePoints(next);
    }

    //更新圆点
    function updatePoints(next) {
        //当前index的span的class移除
        var tragetIndex = 0;
        if (typeof next === "boolean") {
            if (next) {
                tragetIndex = index + 1;
                if (tragetIndex === imgCount) {
                    tragetIndex = 0;
                }
            } else {
                tragetIndex = index - 1;
                if (index === -1) {
                    tragetIndex = imgCount - 1;
                }
            }
        } else {
            tragetIndex = next;
        }
        // $points.eq(index).removeClass("on");
        // $points.eq(tragetIndex).addClass("on");
        //计算出目标圆点的下标
        $points[index].className = "";
        //给目标圆点的class设置为on
        $points[tragetIndex].className = "on";
        //将index更新为目标的index
        index = tragetIndex;
    }
});