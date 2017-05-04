var chart_08_mapData = [
    {'code': 'FI', 'name': '欧洲', 'value': 35, fontSize: 12, 'color': '#F7CC31'},
    {'code': 'RU', 'name': '俄罗斯', 'value': 45, fontSize: 13, 'color': '#F7CC31'},
    {'code': 'IL', 'name': '地中海', 'value': 45, fontSize: 13, 'color': '#F7CC31'},
    {'code': 'KZ', 'name': '中亚', 'value': 45, fontSize: 13, 'color': '#F7CC31'},
    {'code': 'IR', 'name': '波斯湾', 'value': 35, fontSize: 12, 'color': '#F7CC31'},
    {'code': 'OM', 'name': '西亚', 'value': 30, fontSize: 12, 'color': '#F7CC31'},
    {'code': 'IN', 'name': '南亚', 'value': 25, fontSize: 12, 'color': '#F7CC31'},
    {'code': 'CN', 'name': '中国', 'value': 55, fontSize: 16, 'color': '#F96352'},
    {'code': 'CNNH', 'name': '南海', 'value': 20, fontSize: 12, 'color': '#04AEFF'},
    {'code': 'TH', 'name': '东南亚', 'value': 45, fontSize: 13, 'color': '#F7CC31'},
    {'code': 'IOR', 'name': '印度洋', 'value': 40, fontSize: 12, 'color': '#04AEFF'},
    {'code': 'PACIFIC', 'name': '南太\n平洋', 'value': 45, fontSize: 13, 'color': '#04AEFF'}
];

var chart_08_lines_data = [
    [{name: 'FI'}, {name: 'IL'}],
    [{name: 'FI'}, {name: 'RU'}],
    [{name: 'IL'}, {name: 'IR'}],
    [{name: 'KZ'}, {name: 'RU'}],
    [{name: 'KZ'}, {name: 'OM'}],
    [{name: 'CN'}, {name: 'KZ'}],
    [{name: 'CN'}, {name: 'TH'}],
    [{name: 'TH'}, {name: 'IN'}],
    [{name: 'IN'}, {name: 'IOR'}],
    [{name: 'IR'}, {name: 'OM'}]
]

var chart_08_convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = [
            latlong[dataItem[0].name].longitude,
            latlong[dataItem[0].name].latitude
        ]
        var toCoord = [
            latlong[dataItem[1].name].longitude,
            latlong[dataItem[1].name].latitude
        ];
        if (fromCoord && toCoord) {
            res.push({
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var chart_08_getLatlong = function (mapData) {
    return mapData.map(function (itemOpt) {
        return {
            name: itemOpt.name,
            symbolSize: itemOpt.value,
            value: [
                latlong[itemOpt.code].longitude,
                latlong[itemOpt.code].latitude,
                itemOpt.value
            ],
            label: {
                normal: {
                    offset:[0,-1],
                    textStyle: {

                        fontWeight:100,
                        fontSize:itemOpt.fontSize
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemOpt.color,
                    borderColor: "#fff",
                    borderWidth: 2,
                    opacity: 1
                }
            }
        };
    })
};


$.get("./json/world.json", function (worldjson) {
    var chart_08 = echarts.init(document.querySelector("#ECharts_08"));
    echarts.registerMap('world', worldjson);
    chart_08.setOption({
        backgroundColor: "#F5F5F5",
        geo: {
            show: true,
            type: 'map',
            map: 'world',
            left:"8%",
            label: {
                emphasis: {
                    show: false
                }
            },
            aspectScale: 0.85,
            zoom: 1.2,

            itemStyle: {
                normal: {
                    areaColor: '#CDCDCD',
                    borderColor: '#c1c1c1'
                },
                emphasis: {
                    areaColor: '#9c9c9c'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: "circle",
            z: 3,
            animationDelay: function (idx) {
                return idx * 100;
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            data: chart_08_getLatlong(chart_08_mapData)
        }, {
            name: "关系图",
            type: 'lines',
            z: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            animationDelay: function (idx) {
                return idx * 100;
            },
            markPoint:{
                symbol:"pin"
            },
            lineStyle: {
                normal: {
                    color: "#F7CC31",
                    width: 2,
                    opacity: 1,
                    type: 'dotted'
                }
            },
            data: chart_08_convertData(chart_08_lines_data)
        }]
    });
});