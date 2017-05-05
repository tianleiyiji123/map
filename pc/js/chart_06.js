var chart_06 = echarts.init(document.getElementById('ECharts_06'));

var chart_06_xStyle = [
    {
        color: "#93DEDA",
        fontSize: 14,
        fontWeight: "bold"
    },
    {
        color: "#E69489",
        fontSize: 14,
        fontWeight: "bold"
    }
];

var chart_06_itemStyle = [
    {
        normal: {
            barBorderRadius: 3,
            color: "#59B1E3"
        }
    },
    {
        normal: {
            barBorderRadius: 3,
            color: "#B8A0EA"
        }

    },
    {
        normal: {
            barBorderRadius: 3,
            color: "#E6E6E6"
        }
    },
    {
        normal: {
            barBorderRadius: 3,
            color: "#95DDDC"
        }

    },
    {
        normal: {
            barBorderRadius: 3,
            color: "#E69489"
        }

    }
];

var chart_06_data_01= [562, 563, 666, 878, 1003];
var chart_06_data_02= [53.9, 63.2, 66.6, 114, 130];

var chart_06_data_base=function (v,a) {
    var arr =[]

    for (var i=0; i<a.length; i++){
        arr.push({
            value:v,
            label: {
                normal: {
                    formatter:a[i].toString()
                }
            }
        })
    }
    console.log(arr)
    return arr;
}

var chart_06_option = {
    title: [{
        text: '2016年',
        x: '15%',
        y: '90%',
        textAlign: 'center',
        textStyle: {
            color: "#95DDDC",
            fontSize:14
        }
    },{
        text: '比',
        x: '21%',
        y: '90%',
        textAlign: 'center',
        textStyle: {
            color: "#333333",
            fontSize:14,
            fontWeight:"normal"

        }
    },{
        text: '2012年',
        x: '27%',
        y: '90%',
        textAlign: 'center',
        textStyle: {
            color: "#E69489",
            fontSize:14
        }
    },
        {
            text: '项目和金额',
            x: '38%',
            y: '90%',
            textAlign: 'center',
            textStyle: {
                color: "#333333",
                fontSize:14,
                fontWeight:"normal"
            }
        },
        {
            text: '分别上升：',
            x: '13%',
            y: '93%',
            textAlign: 'center',
            textStyle: {
                color: "#333333",
                fontSize:14,
                fontWeight:"normal"
            }
        },
        {
            text: '178.6%',
            x: '25%',
            y: '92.5%',
            textAlign: 'center',
            textStyle: {
                color: "#95DDDC",
                fontSize:20
            }
        },
        {
            text: '、',
            x: '33%',
            y: '93%',
            textAlign: 'center',
            textStyle: {
                color: "#333333",
                fontSize:14,
                fontWeight:"normal"
            }
        },
        {
            text: '240.8%',
            x: '40%',
            y: '92.5%',
            textAlign: 'center',
            textStyle: {
                color: "#E69489",
                fontSize:20
            }
        },{
            text: '对外投资和吸引外资的比例',
            x: '73%',
            y: '90%',
            textAlign: 'center',
            textStyle: {
                color: "#333333",
                fontSize:14,
                fontWeight:"normal"

            }
        },
        {
            text: '2012: 1:12',
            x: '64%',
            y: '92.5%',
            textAlign: 'center',
            textStyle: {
                color: "#E69489",
                fontSize:20
            }
        },
        {
            text: '、',
            x: '75%',
            y: '92.5%',
            textAlign: 'center',
            textStyle: {
                color: "#333333",
                fontSize:20,
                fontWeight:"normal"
            }
        },
        {
            text: '2016: 1:1.9',
            x: '84%',
            y: '92.5%',
            textAlign: 'center',
            textStyle: {
                color: "#95DDDC",
                fontSize:20
            }
        }],
    tooltip: {},
    legend: {
        top:20,
        itemGap:230,
        data: [{
            name:'项目数(单位"个")',
            textStyle:{
                color:"#59B1E3"
            }
        }, {
            name:'投资数(单位"亿美元")',
            textStyle:{
                color:"#B8A0EA"
            }
        }]
    },
    grid: [{
        top: 80,
        width: '90%',
        bottom: '50%',
        left: 'center'
    },{
        top: 80,
        width: '90%',
        bottom: '50%',
        left: 'center'
    }, {
        top: '60%',
        width: '38%',
        right: "10%",
        bottom: "10%",
        containLabel: true
    }],
    xAxis: [
        {
            gridIndex: 0,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},

            data: [
                {
                    value: "2012",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2013",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2014",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2015",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2016",
                    textStyle: chart_06_xStyle[0]
                }
            ]
        },
        {
            gridIndex: 1,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},

            data: [
                {
                    value: "2012",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2013",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2014",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2015",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2016",
                    textStyle: chart_06_xStyle[0]
                }
            ]
        },
        {
            gridIndex: 2,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            axisLine: {
                lineStyle:{
                    color:"#dedede"
                }
            }
        }
    ]
    ,
    yAxis: [
        {
            gridIndex: 0,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        {
            gridIndex: 1,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        {
            gridIndex: 2,
            axisTick: {show: false},
            axisLabel: {show: false},
            axisLine: {
                lineStyle:{
                    color:"#dedede"
                }
            },
            data: [
                {
                    value: "2016",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2012",
                    textStyle: chart_06_xStyle[1]
                }
            ]
        }
    ],
    series: [
        {
            name: '项目基数',
            silent:true,
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                normal: {
                    position: "top",
                    show: true,
                    textStyle:{
                        color:"#59B1E3"

                    }
                }
            },
            data: chart_06_data_base(1004,chart_06_data_01),
            itemStyle: chart_06_itemStyle[2]
        },
        {
            name: '投资基数',
            silent:true,
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                normal: {
                    position: "top",
                    show: true,
                    textStyle:{
                        color:"#B8A0EA"
                    }
                }
            },
            data: chart_06_data_base(800,chart_06_data_02),
            itemStyle: chart_06_itemStyle[2]
        },


        {
            name: '项目数(单位"个")',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,

            data:chart_06_data_01,
            itemStyle: chart_06_itemStyle[0]
        },

        {
            name: '投资数(单位"亿美元")',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: chart_06_data_02,
            itemStyle: chart_06_itemStyle[1]
        },
        {
            type: 'pie',
            radius: ["28%", '32%'],
            center: ['26%', '74%'],
            data: [
                {
                    value: "50",
                    itemStyle: {
                        normal: {
                            color: "#ffffff"
                        }
                    },
                    label: {
                        normal: {
                            position: 'center',
                            formatter: '178.6%',
                            textStyle: {
                                color: '#95DDDC',
                                fontSize: 20
                            }
                        }
                    }
                },
                {
                    value: "50",
                    label: {
                        normal: {
                            position: 'center',
                            formatter: '240.8%',
                            textStyle: {
                                color: '#E69489',
                                fontSize: 20
                            }
                        }
                    }
                }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#95DDDC"
                }
            },
            tooltip:{
                formatter:"178.6%"
            }
        },
        {
            type: 'pie',
            radius: ["34%", '38%'],
            center: ['26%', '74%'],
            clockWise: true,
            data: [
                {
                    value: "30",
                    itemStyle: {
                        normal: {
                            color: "#ffffff"
                        }
                    }
                },
                {
                    value: "70"
                }],

            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#E69489"
                }
            },
            tooltip:{
                formatter:"240.8%"
            }
        },
        {
            name: '对外投资',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },
            barWidth: 20,
            data: [{
                value: 1,
                itemStyle: chart_06_itemStyle[3]
            }, {
                value: 1,
                itemStyle: chart_06_itemStyle[4]
            }],
            itemStyle: {}
        },
        {
            name: '吸引外资比例',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },
            barWidth: 20,
            data: [{
                value: 1.9,
                itemStyle: chart_06_itemStyle[3]
            }, {
                value: 12,
                itemStyle: chart_06_itemStyle[4]
            }]
        }]

};
chart_06.setOption(chart_06_option);