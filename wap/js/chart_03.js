/**
 * Created by Lwang on 2017-05-02.
 */
$(function () {
    var ECharts_03_option = {
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
            }, {
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
        backgroundColor: "#f5f5f5",
        // title: {
        //     text: '今日&昨日',
        //     left: '50%',
        //     textAlign: 'center'
        // },
        tooltip: {
            trigger: 'asix',
            axisPointer: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
                color: '#7588E4'
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        legend: {
            right: 20,
            data: ['项目数(单位"个")', '投资额(单位"亿美元")']
        },
        xAxis: {
            type: 'category',
            // data: ['', '商业服务业', '批发业', '房地产', '电气机械及器材制造业', '电力热力生产与供应业'],
            data: [
                {
                    value: ""
                },
                {
                    value: "商业服务业"
                },
                {
                    value: "批发业"
                },
                {
                    value: "房地产"
                },
                {
                    value: "电气机械及器材制造业"
                },
                {
                    value: "电力热力生产与供应业"
                },
            ],
            boundaryGap: false,
            nameLocation: "middle",
            nameRotate: 45,
            splitLine: {
                show: false,
                // interval: 'auto',
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false,
                interval: 0,
            },
            axisLine: {
                show: false,
                onZero: false,
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                rotate: 15,
                interval: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#000000'
                }
            },
            axisPointer: {
                show: true
            }
        },
        yAxis: [{
            type: 'value',
            min: 0,
            splitLine: {
                lineStyle: {
                    color: ['#e6e6e6']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: "#b3b3b3"
                }
            }
        },
            //辅助y轴
            {
                type: 'value',
                min: 0,
                max: 120,
                splitLine: {
                    lineStyle: {
                        color: ['#e6e6e6']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: "#b3b3b3"
                    }
                }
            }],
        series: [{
            name: '项目数(单位"个")',
            type: 'line',
            smooth: false,
            showSymbol: true,
            symbol: 'rect',
            symbolSize: 10,
            data: ['0', '577', '1087', '118', '75', '64'],
            label: {
                normal: {
                    show: true,
                    position: "bottom"
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 237, 250,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 237, 250,0.2)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#96cced'
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }, {
            name: '投资额(单位"亿美元")',
            type: 'line',
            yAxisIndex: 1,
            smooth: false,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            data: ['0', '94.7', '78.0', '39.9', '15.9', '15.8'],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(216, 244, 247,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(216, 244, 247,1)'
                    }], false)
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top"
                }
            },
            itemStyle: {
                normal: {
                    color: '#e28f84'
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }]
    };
    var chart_03 = echarts.init(document.querySelector("#ECharts_03"));
    chart_03.setOption(ECharts_03_option);
    $(window).resize(function () {

        setTimeout(function () {
            chart_03.resize();
        }, 500)
    })
});

