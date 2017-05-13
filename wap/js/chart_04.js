

$(function () {
    var chart_04_option = {
        backgroundColor: "#f5f5f5",
        legend: {
            orient: 'vertical',
            top:"55%",
            itemGap:20,
            data:['印尼科拿威有色金属冶炼及压延加工','澳大利亚昆士兰房地产项目','澳大利亚布鲁姆斯伯里家业项目','意大利米兰体育项目','中国香港批发业项目（江苏赛夫）','中国香港批发业项目（苏宁云商）']
        },
        series: [
            {
                name:'2012年至今,江苏对外投资额最高的项目：印尼科拿威有色金属冶炼及压延加工项目,投资额6.92亿美元',
                type:'pie',
                selectedMode: 'single',
                center:["50%","28%"],
                radius: [0, '70%'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: "{c} \n亿美元"
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:2.9,
                        name:'中国香港批发业项目（江苏赛夫）',
                        itemStyle:{
                            normal:{
                                color:"#ffd278"
                            }
                        }
                    },
                    {
                        value:2.9,
                        name:'中国香港批发业项目（苏宁云商）',
                        itemStyle:{
                            normal:{
                                color:"#eeb84c"
                            }
                        }
                    },
                    {
                        value:2.93,
                        name:'意大利米兰体育项目',
                        itemStyle:{
                            normal:{
                                color:"#6ad0df"
                            }
                        }
                    },
                    {
                        value:2.99,
                        name:'澳大利亚布鲁姆斯伯里家业项目',
                        itemStyle:{
                            normal:{
                                color:"#7abf49"
                            }
                        }
                    },
                    {
                        value:5.02,
                        name:'澳大利亚昆士兰房地产项目',
                        selected:true,
                        itemStyle:{
                            normal:{
                                color:"#4EB0F1"
                            }
                        }
                    },
                    {
                        value:6.92,
                        name:'印尼科拿威有色金属冶炼及压延加工',
                        selected:true,
                        itemStyle:{
                            normal:{
                                color:"#F4524D"
                            }
                        }
                    }
                ]
            }

        ]
    };

    var chart_04 = echarts.init(document.getElementById('ECharts_04'),undefined,{

    });
    chart_04.setOption(chart_04_option);


    $(window).resize(function () {

        setTimeout(function () {
            chart_04.resize();
        }, 500)
    })

})



