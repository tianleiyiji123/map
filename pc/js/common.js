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

    $(".tmtc-wx").click(function () {
        if($(this).hasClass("open")){
            $(this).removeClass("open")
        }else {
            $(this).addClass("open")
        }
    })

    $(window).scroll(function () {
        console.log($(this).scrollTop())
        if($(this).scrollTop()>30){
            $(".tm-title").addClass("fixed")
        }else {
            $(".tm-title").removeClass("fixed")
        }
    })
});