/**
 * Created by Lwang on 2017-05-02.
 */
var ECharts_03_option = {
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
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['项目数(单位"个")', '投资额(单位"亿美元")']
    },
    xAxis: {
        type: 'category',
        data: ['商业服务业', '批发业', '房地产', '电气机械及器材制造业', '电力热力生产与供应业'],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '项目数(单位"个")',
        type: 'line',
        smooth: false,
        showSymbol: false,
        symbol: 'rect',
        symbolSize: 10,
        data: ['577', '1087', '118', '75', '64'],
        label: {
            normal: {
                show: true,
                position: "top"
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
                color: '#90caec'
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
        data: ['94.7', '78.0', '39.9', '15.9', '15.8'],
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
        itemStyle: {
            normal: {
                color: '#90caec'
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
