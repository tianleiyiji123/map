/**
 * Created by Lwang on 2017-05-01.
 */
$(function () {
    var data = [
        {}
    ];
    var ECharts_01_option = {
        title:{
            show:true,
            subtext:'投资额(单位"亿美元")',
            top: 0,
            right: 20
        },
        grid: [
            {
                show: true,
                top: "10%",
                width: '96%',
                height: "80%",
                bottom: 0,
                left: 'center',
                containLabel: true,
                backgroundColor: "#f5f5f5",
                borderWidth: 0
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        xAxis: {
            show: true,
            position: "bottom",
            type: "category",
            nameLocation: "middle",
            data: [{
                value: "香港",
                textStyle: {
                    color: '#4d4d4d'
                }
            },
                {
                    value: "美国",
                    textStyle: {
                        color: '#4d4d4d'
                    }
                },
                {
                    value: "澳大利亚",
                    textStyle: {
                        color: '#4d4d4d'
                    }
                },
                {
                    value: "印度尼西亚",
                    textStyle: {
                        color: '#4d4d4d'
                    }
                },
                {
                    value: "英属维尔金群岛",
                    textStyle: {
                        color: '#4d4d4d'
                    }
                }],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                interval: 0,
                rotate: 20,
                textStyle: {
                    color: '#e54035'
                }
            }
        },
        yAxis: {
            show: true,
            position: "left",
            type: "value",
            min: 0,
            max: 250,
            nameLocation: "middle",
            minInterval: 2,
            interval: 50,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#b3b3b3'],
                    opacity: .2
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: [{
                textStyle: {
                    color: '#b3b3b3'
                }
            },
                {
                    textStyle: {
                        color: '#b3b3b3'
                    }
                },
                {
                    textStyle: {
                        color: '#b3b3b3'
                    }
                },
                {
                    textStyle: {
                        color: '#b3b3b3'
                    }
                },
                {
                    textStyle: {
                        color: '#b3b3b3'
                    }
                }]
        },
        backgroundColor: "#f5f5f5",
        series: {
            name: '投资额(单位"亿美元")',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
//            symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                normal: {
                    show: true,
                    position: "top"
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
//            data: [152.6496, 45.0730, 27.4099, 24.1323, 17.3511],
            data: [
                {
                    name: "香港",
                    value: 152.6496,
                    itemStyle: {
                        normal: {
                            color: "#94dddd"

                        }
                    }
                },
                {
                    name: "美国",
                    value: 45.0730,
                    itemStyle: {
                        normal: {
                            color: "#e69389"
                        }
                    }
                },
                {
                    name: "澳大利亚",
                    value: 27.4099,
                    itemStyle: {
                        normal: {
                            color: "#79cae6"
                        }

                    }
                },
                {
                    name: "印度尼西亚",
                    value: 24.1323,
                    itemStyle: {
                        normal: {
                            color: "#e69389"

                        }
                    }
                },
                {
                    name: "英属维尔金群岛",
                    value: 17.3511,
                    itemStyle: {
                        normal: {
                            color: "#94dddd"
                        }
                    }
                }
            ]
        }
    };
    var chart_01 = echarts.init(document.querySelector("#ECharts_01"));

    chart_01.setOption(ECharts_01_option);
    $(window).resize(function () {

        setTimeout(function () {
            chart_01.resize();
        }, 500)
    })
});


