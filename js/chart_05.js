/**
 * Created by Lwang on 2017-05-04.
 */
var data = [
    {}
];
var ECharts_05_option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    grid: [
        {
            show: true,
            top: "15%",
            width: '90%',
            height: "90%",
            bottom: '20%',
            left: 'center',
            containLabel: true,
            backgroundColor: "#f5f5f5",
            borderWidth: 0
        }, {
            show: true,
            top: "15%",
            width: '90%',
            height: "90%",
            bottom: '20%',
            left: 'center',
            containLabel: true,
            backgroundColor: "#f5f5f5",
            borderWidth: 0
        }
    ],
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
            textStyle: {
                color: '#e54035'
            }
        }
    },
    yAxis: [{
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
            }]
    }, {
        show: true,
        position: "right",
        type: "value",
        min: 0,
        max: 50,
        nameLocation: "middle",
        minInterval: 2,
        interval: 10,
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
            }]
    }],
    backgroundColor: "#f5f5f5",
    series: [{
        name: 'hill',
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
        data: [
            {
                name: "香港",
                value: 81,
                itemStyle: {
                    normal: {
                        color: "#94dddd"

                    }
                }
            },
            {
                name: "美国",
                value: 220,
                itemStyle: {
                    normal: {
                        color: "#e69389"
                    }
                }
            },
            {
                name: "澳大利亚",
                value: 30.6,
                itemStyle: {
                    normal: {
                        color: "#94dddd"
                    }

                }
            },
            {
                name: "印度尼西亚",
                value: 7.4,
                itemStyle: {
                    normal: {
                        color: "#e69389"

                    }
                }
            }
        ],
        z: 10
    }]
};
var chart_05 = echarts.init(document.querySelector("#ECharts_05"));
chart_05.setOption(ECharts_05_option);

