/**
 * Created by Lwang on 2017-05-03.
 */
$(function () {
    //首页进行信息js
    $("#shou").click(function () {
        $("#J-info").animate({
            left: -350
        }, 600, "linear", function () {
            $("#fang").css("display", "block");
            $("#shou").css("display", "none");
            $(".tmi-position").css("height", 0)
        })
    });
    $("#fang").click(function () {
        $(".tmi-position").css("height", 700);
        $("#J-info").animate({
            left: 0
        }, 600, "linear", function () {
            $("#fang").css("display", "none");
            $("#shou").css("display", "block");
        })
    })


    /*监听宽度*/
    var $tmInfo = $(".tm-info");

    $(".tm-info .down").click(function () {
        var h = $("#j-html").height();

        if ($tmInfo.hasClass("active")) {
            $tmInfo.removeClass("active");
            $("#J-info").animate({
                bottom: 0
            }, 500);
        } else {
            $tmInfo.addClass("active");
            $("#J-info").animate({
                bottom: -h
            }, 500);
        }
    })


    var domall = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>投资项目数前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>香港</span>  <span>991</span></p>' +
        '<p><span>美国</span> <span>691</span></p>' +
        '<p><span>日本</span> <span>129</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>金额数前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>香港</span>  <span>152.6496</span></p>' +
        '<p><span>美国</span> <span>45.0730</span></p>' +
        '<p><span>澳大利亚</span> <span>27.4099</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span> <span>1087</span></p>' +
        '<p><span>商业服务业</span> <span>577</span></p>' +
        '<p><span>房地产</span> <span>118</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>商业服务业</span>  <span>94.7146</span></p>' +
        '<p><span>批发业</span>  <span>78.0357</span></p>' +
        '<p><span>房地产</span>  <span>39.933</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '国家(地区)128个｜行业78个｜项目3673个｜总额428.84亿美元' +
        '</p>' +
        '</div>';
    var dom2012 = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>101</span></p>' +
        '<p><span>商业服务业</span>  <span>198</span></p>' +
        '<p><span>房地产</span>  <span>10</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>商业服务业</span>  <span>14.8773</span></p>' +
        '<p><span>批发业</span>  <span>9.8551</span></p>' +
        '<p><span>房地产</span>  <span>4.2139</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '投资项目<span>562</span>个｜ <span>53.9873</span> 亿美元｜最大投资额项目:徐工香港通用设备制造项目|<span>2亿美元' +
        '</p>' +
        '</div>';
    var dom2013 = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>100</span></p>' +
        '<p><span>商业服务业</span>  <span>188</span></p>' +
        '<p><span>房地产</span>  <span>9</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>商业服务业</span>  <span>18.1976</span></p>' +
        '<p><span>批发业</span>  <span>10.1358</span></p>' +
        '<p><span>电力热力生产与供应业</span>  <span>6.5595</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '投资项目<span>563</span>个｜<span>63.2919</span> 亿美元｜最大投资额项目:卓郎香港商业服务项目|<span>2</span>亿美元' +
        '</p>' +
        '</div>';
    var dom2014 = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>96</span></p>' +
        '<p><span>商业服务业</span>  <span>217</span></p>' +
        '<p><span>房地产</span>  <span>28</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>商业服务业</span>  <span>15.7401</span></p>' +
        '<p><span>批发业</span>  <span>11.2467</span></p>' +
        '<p><span>房地产</span>  <span>9.5633</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '投资项目<span>666</span>个｜ <span>66.6865</span> 亿美元｜最大投资额项目:江苏涤诺印尼雅加达化工项目|<span>1.9625</span>亿美元' +
        '</p>' +
        '</div>';
    var dom2015 = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>236</span></p>' +
        '<p><span>商业服务业</span>  <span>127</span></p>' +
        '<p><span>房地产</span>  <span>33</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>23.9008</span></p>' +
        '<p><span>商业服务业</span> <span>20.5868</span></p>' +
        '<p><span>房地产</span>  <span>13.7456</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '投资项目<span>878</span>个｜ <span>114.8672</span> 亿美元｜最大投资额项目:江苏德龙印龙科拿威有色金属冶炼及压延加工业|<span>6.29</span>亿美元' +
        '</p>' +
        '</div>';
    var dom2016 = '<div id="j-html">' +
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">' +
        '<h3>行业项目前三&nbsp;&nbsp;(&nbsp;&nbsp;单位:个&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>139</span></p>' +
        '<p><span>商业服务业</span>  <span>227</span></p>' +
        '<p><span>房地产</span>  <span>10</span></p>' +
        '</div>' +
        '<div class="swiper-slide">' +
        '<h3>行业投资总额前三&nbsp;&nbsp;(&nbsp;&nbsp;单位：亿美元&nbsp;&nbsp;)</h3>' +
        '<p><span>批发业</span>  <span>14.8773</span></p>' +
        '<p><span>商业服务业</span>  <span>9.8551</span></p>' +
        '<p><span>房地产</span>  <span>4.2139</span></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p class="dep">' +
        '投资项目<span>1004</span>个｜ <span>130.0116</span> 亿美元｜最大投资额项目:南京丰盛澳大利亚布鲁姆斯伯里农业项目|<span>6.29</span>亿美元' +
        '</p>' +
        '</div>';

    function createswiper() {
        setTimeout(function () {
            var swiper = new Swiper('.swiper-container', {
                paginationClickable: true,
                spaceBetween: 8,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
        }, 30);
    }

    $("#j-html").remove();
    $("#J-info").append($(domall));
    createswiper();

    $("#selectYear").change(function () {
        var url = $(this).val();
        switch (url) {
            case "json/all.json" :
                $(".tmt-name").html("").html("总览");
                $("#j-html").remove();
                $("#J-info").append($(domall));
                createswiper();
                break;
            case "json/2012.json" :
                $(".tmt-name").html("").html("2012");
                $("#j-html").remove();
                $("#J-info").append($(dom2012));
                createswiper();
                break;
            case "json/2013.json" :
                $(".tmt-name").html("").html("2013");
                $("#j-html").remove();
                $("#J-info").append($(dom2013));
                createswiper();
                break;
            case "json/2014.json" :
                $(".tmt-name").html("").html("2014");
                $("#j-html").remove();
                $("#J-info").append($(dom2014));
                createswiper();
                break;
            case "json/2015.json" :
                $(".tmt-name").html("").html("2015");
                $("#j-html").remove();
                $("#J-info").append($(dom2015));
                createswiper();
                break;
            case "json/2016.json" :
                $("#j-html").remove();
                $(".tmt-name").html("").html("2016");
                $("#J-info").append($(dom2016));
                createswiper();
                break;

        }
    });
});