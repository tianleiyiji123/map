/**
 * Created by Lwang on 2017-05-02.
 */

$(function () {


    var chart_02 = echarts.init(document.querySelector("#ECharts_02"));
    var ECharts_02_option = {
        title: {
            subtext: '投资项目数量(个)',
            textAlign: "left",
            bottom: "2%",
            textStyle: {
                color: "#000000",
                fontSize: 14
            },
            left: "40%"

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].value + "个";
            }
        },
        grid: [
            {
                show: true,
                top: "10%",
                width: '96%',
                height: "90%",
                bottom: 0,
                left: 'center',
                containLabel: true,
                backgroundColor: "#f5f5f5",
                borderWidth: 0
            }, {
                show: true,
                top: "10%",
                width: '96%',
                height: "90%",
                bottom: 0,
                left: 'center',
                containLabel: true,
                backgroundColor: "#f5f5f5",
                borderWidth: 0
            }
        ],
        backgroundColor: "#f5f5f5",
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            position: "bottom",
            type: "category",
            nameLocation: "middle",
            boundaryGap: true,
            data: [{
                value: "新加坡",
                textStyle: {
                    color: '#000000'
                }
            },
                {
                    value: "澳大利亚",
                    textStyle: {
                        color: '#000000',
                    }
                },
                {
                    value: "日本",
                    textStyle: {
                        color: '#000000'
                    }
                },
                {
                    value: "美国",
                    textStyle: {
                        color: '#000000'
                    }
                },
                {
                    value: "香港",
                    textStyle: {
                        color: '#000000'
                    }
                }],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                interval: 0,

            },
            splitArea: {
                interval: 2,
            },
        }, {
            // 辅助 y 轴
            show: false,
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                interval: 0
            },
            splitArea: {
                interval: 2,
                show: true
            },

            data: [{
                value: "新加坡",
                textStyle: {
                    color: '#8fd9d9'
                }
            },
                {
                    value: "澳大利亚",
                    textStyle: {
                        color: '#e28f84'
                    }
                },
                {
                    value: "日本",
                    textStyle: {
                        color: '#74c5e2'
                    }
                },
                {
                    value: "美国",
                    textStyle: {
                        color: '#e28f84'
                    }
                },
                {
                    value: "香港",
                    textStyle: {
                        color: '#8fd9d9'
                    }
                }]
        }],
        series: [{
            // 辅助系列
            type: 'bar',
            silent: true,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: '#e6e6e6'
                },
                emphasis: {
                    barBorderRadius: 4,
                    color: '#e6e6e6'
                }
            },
            barWidth: 20,
            data: [{
                name: "新加坡",
                value: 1000,
                itemStyle: {
                    normal: {
                        color: "#e6e6e6"

                    }
                }
            },
                {
                    name: "澳大利亚",
                    value: 1000,
                    itemStyle: {
                        normal: {
                            color: "#e6e6e6"

                        }
                    }
                },
                {
                    name: "日本",
                    value: 1000,
                    itemStyle: {
                        normal: {
                            color: "#e6e6e6"

                        }
                    }
                },
                {
                    name: "美国",
                    value: 1000,
                    itemStyle: {
                        normal: {
                            color: "#e6e6e6"

                        }
                    }
                },
                {
                    name: "香港",
                    value: 1000,
                    itemStyle: {
                        normal: {
                            color: "#e6e6e6"

                        }
                    }
                }]
        }, {
            type: 'bar',
            silent: false,
            label: {
                normal: {
                    show: true,
                    position: "right",
                    formatter: function (data) {
                        return data.value + "个"
                    }
                }
            },
            data: [{
                name: "新加坡",
                value: 119,
                itemStyle: {
                    normal: {
                        color: "#8fd9d9"

                    }
                }
            },
                {
                    name: "澳大利亚",
                    value: 119,
                    itemStyle: {
                        normal: {
                            color: "#e28f84"

                        }
                    }
                },
                {
                    name: "日本",
                    value: 129,
                    itemStyle: {
                        normal: {
                            color: "#74c5e2"

                        }
                    }
                },
                {
                    name: "美国",
                    value: 691,
                    itemStyle: {
                        normal: {
                            color: "#e28f84"

                        }
                    }
                },
                {
                    name: "香港",
                    value: 991,
                    itemStyle: {
                        normal: {
                            color: "#8fd9d9"

                        }
                    }
                }],
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 20,
                }
            },
        },]
    };
    chart_02.setOption(ECharts_02_option);
    $(window).resize(function () {

        setTimeout(function () {
            chart_02.resize();
        }, 500)
    })
})
