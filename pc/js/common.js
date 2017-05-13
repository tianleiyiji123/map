/**
 * Created by Lwang on 2017-05-03.
 */
$(function () {
    var domall = ['<div id="j-html">',
        '<div class="info-total">',
        '国家（地区）<span>128</span>个｜行业 <span>78</span> 个｜项目<span>3673</span>个|',
        '总额<span>428.84</span>亿美元',
        '</div>',
        '<div class="info-each info-e-1">',
        '<h3>投资项目数前三 （单位：个）</h3>',
        '<p><span>香港</span> | <span>991</span></p>',
        '<p><span>美国</span> | <span>691</span></p>',
        '<p><span>日本</span> | <span>129</span></p>',
        '</div>',
        '<div class="info-each info-e-2">',
        '<h3>金额数前三 （单位：亿美元）</h3>',
        '<p><span>香港</span> | <span>152.6496</span></p>',
        '<p><span>美国</span> | <span>45.0730</span></p>',
        '<p><span>澳大利亚</span> | <span>27.4099</span></p>',
        '</div>',
        '<div class="info-each info-e-3">',
        '<h3>行业项目前三 （单位：个）</h3>',
        '<p><span>批发业</span> | <span>1087</span></p>',
        '<p><span>商业服务业</span> | <span>577</span></p>',
        '<p><span>房地产</span> | <span>118</span></p>',
        '</div>',
        '<div class="info-each info-e-4">',
        '<h3>行业投资总额前三 （单位：亿美元）</h3>',
        '<p><span>商业服务业</span> | <span>94.7146</span></p>',
        '<p><span>批发业</span> | <span>78.0357</span></p>',
        '<p><span>房地产</span> | <span>39.933</span></p>',
        '</div>',
        '</div>'].join("");
    var dom2012 = '<div id="j-html">'+
        '<div class="info-total">'+
        '投资项目<span>562</span>个｜总投资额 <span>53.9873</span> 亿美元｜投资额最大项目：徐工香港通用设备制造项目|<span>2</span>亿美元'+
        '</div>'+
        '<div class="info-each info-e-3">'+
        '<h3>行业项目前三 （单位：个）</h3>'+
        '<p><span>批发业</span> | <span>101</span></p>'+
        '<p><span>商业服务业</span> | <span>198</span></p>'+
        '<p><span>房地产</span> | <span>10</span></p>'+
        '</div>'+
        '<div class="info-each info-e-4">'+
        '<h3>行业投资总额前三 （单位：亿美元）</h3>'+
        '<p><span>商业服务业</span> | <span>14.8773</span></p>'+
        '<p><span>批发业</span> | <span>9.8551</span></p>'+
        '<p><span>房地产</span> | <span>4.2139</span></p>'+
        '</div>'+
        '</div>';
    var dom2013 = '<div id="j-html">'+
        '<div class="info-total">'+
        '投资项目<span>563</span>个｜总投资额 <span>63.2919</span> 亿美元｜投资额最大项目：卓郎香港商业服务项目|<span>2</span>亿美元'+
        '</div>'+
        '<div class="info-each info-e-3">'+
        '<h3>行业项目前三 （单位：个）</h3>'+
        '<p><span>批发业</span> | <span>100</span></p>'+
        '<p><span>商业服务业</span> | <span>188</span></p>'+
        '<p><span>房地产</span> | <span>9</span></p>'+
        '</div>'+
        '<div class="info-each info-e-4">'+
        '<h3>行业投资总额前三 （单位：亿美元）</h3>'+
        '<p><span>商业服务业</span> | <span>18.1976</span></p>'+
        '<p><span>批发业</span> | <span>10.1358</span></p>'+
        '<p><span>电力热力生产与供应业</span> | <span>6.5595</span></p>'+
        '</div>'+
        '</div>';
    var dom2014 = '<div id="j-html">'+
        '<div class="info-total">'+
        '投资项目<span>666</span>个｜总投资额 <span>66.6865</span> 亿美元｜投资额最大项目：江苏涤诺印尼雅加达化工项目|<span>1.9625</span>亿美元'+
        '</div>'+
        '<div class="info-each info-e-3">'+
        '<h3>行业项目前三 （单位：个）</h3>'+
        '<p><span>批发业</span> | <span>96</span></p>'+
        '<p><span>商业服务业</span> | <span>217</span></p>'+
        '<p><span>房地产</span> | <span>28</span></p>'+
        '</div>'+
        '<div class="info-each info-e-4">'+
        '<h3>行业投资总额前三 （单位：亿美元）</h3>'+
        '<p><span>商业服务业</span> | <span>15.7401</span></p>'+
        '<p><span>批发业</span> | <span>11.2467</span></p>'+
        '<p><span>房地产</span> | <span>9.5633</span></p>'+
        '</div>'+
        '</div>';
    var dom2015 = '<div id="j-html">'+
        '<div class="info-total">'+
        '投资项目<span>878</span>个｜总投资额 <span>114.8672</span> 亿美元｜投资额最大项目：江苏德龙印龙科拿威有色金属冶炼及压延加工业|<span>6.29</span>亿美元'+
        '</div>'+
        '<div class="info-each info-e-3">'+
        '<h3>行业项目前三 （单位：个）</h3>'+
        '<p><span>批发业</span> | <span>236</span></p>'+
        '<p><span>商业服务业</span> | <span>127</span></p>'+
        '<p><span>房地产</span> | <span>33</span></p>'+
        '</div>'+
        '<div class="info-each info-e-4">'+
        '<h3>行业投资总额前三 （单位：亿美元）</h3>'+
        '<p><span>批发业</span> | <span>23.9008</span></p>'+
        '<p><span>商业服务业</span> | <span>20.5868</span></p>'+
        '<p><span>房地产</span> | <span>13.7456</span></p>'+
        '</div>'+
        '</div>';
    var dom2016 = '<div id="j-html">'+
        '<div class="info-total">'+
        '投资项目<span>1004</span>个｜总投资额 <span>130.0116</span> 亿美元｜投资额最大项目：南京丰盛澳大利亚布鲁姆斯伯里农业项目|<span>6.29</span>亿美元'+
        '</div>'+
        '<div class="info-each info-e-3">'+
        '<h3>行业项目前三 （单位：个）</h3>'+
        '<p><span>批发业</span> | <span>139</span></p>'+
        '<p><span>商业服务业</span> | <span>227</span></p>'+
        '<p><span>房地产</span> | <span>10</span></p>'+
        '</div>'+
        '<div class="info-each info-e-4">'+
        '<h3>行业投资总额前三 （单位：亿美元）</h3>'+
        '<p><span>批发业</span> | <span>14.8773</span></p>'+
        '<p><span>商业服务业</span> | <span>9.8551</span></p>'+
        '<p><span>房地产</span> | <span>4.2139</span></p>'+
        '</div>'+
        '</div>';
    $("#j-html").remove();
    $("#J-info").append($(domall));
    $("#jAll").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(domall));
    });
    $("#jClick2").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(dom2012));
    });
    $("#jClick3").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(dom2013));
    });
    $("#jClick4").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(dom2014));
    });
    $("#jClick5").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(dom2015));
    });
    $("#jClick6").click(function () {
        $("#j-html").remove();
        $("#J-info").append($(dom2016));
    });
    // var data = [{
    //         "title": "国家（地区）<span>128</span>个｜行业 <span>78</span> 个｜项目<span>3673</span>个总额<span>428.84</span>亿美元",
    //         // "data1": [991, 691, 129],
    //         "data1": [{
    //             "香港":991,
    //             "美国":691,
    //             "日本":129
    //         }],
    //         "data2": [152.6496, 45.0730, 27.4099],
    //         "data3": [1087, 577, 118],
    //         "data4": [94.7146, 78.0357, 39.933]
    //     }, {
    //         "title": "投资项目<span>562</span>个｜总投资额 <span>53.9873</span> 亿美元｜投资额最大项目<span>徐工香港通用设备制造项目</span><span>2</span>亿美元",
    //         "data3": [101, 198, 10],
    //         "data4": [14.8773, 9.8551, 4.2139]
    //     },
    //         {
    //             "title": "投资项目<span>563</span>个｜总投资额 <span>63.2919</span> 亿美元｜投资额最大项目<span>卓郎香港商业服务项目</span><span>2</span>亿美元",
    //             "data3": [100, 188, 9],
    //             "data4": [18.1976, 10.1358, 6.5595]
    //         }
    //         ,
    //         {
    //             "title": "投资项目<span>666</span>个｜总投资额 <span>66.6865</span> 亿美元｜投资额最大项目<span>江苏涤诺印尼雅加达化工项目</span><span>1.9625</span>亿美元",
    //             "data3": [96, 217, 28],
    //             "data4": [15.7401, 11.2467, 9.5633]
    //         }
    //         ,
    //         {
    //             "title": "投资项目<span>878</span>个｜总投资额 <span>114.8672</span> 亿美元｜投资额最大项目<span>江苏德龙印龙科拿威有色金属冶炼及压延加工业</span><span>6.29</span>亿美元",
    //             "data3": [236, 127, 33],
    //             "data4": [23.9008,20.5868, 13.7456]
    //         }
    //         ,
    //         {
    //             "title": "投资项目<span>1004</span>个｜总投资额 <span>130.0116</span> 亿美元｜投资额最大项目<span>南京丰盛澳大利亚布鲁姆斯伯里农业项目</span><span>2.9999</span>亿美元",
    //             "data3": [139, 227, 10],
    //             "data4": [14.8773, 9.8551, 4.2139]
    //         }
    //
    //     ]
    //     ;


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

    $(".tmtc-wx").click(function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open")
        } else {
            $(this).addClass("open")
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $(".tm-title").addClass("fixed")
        } else {
            $(".tm-title").removeClass("fixed")
        }
    })
});