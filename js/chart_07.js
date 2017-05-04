var ECharts_07_data_01 = [
    {x: 59, y: 20, c: "#8BDAD7"},
    {x: 42, y: 60, c: "#8BDAD7"},
    {x: 75, y: 60, c: "#8BDAD7"},
    {x: 25, y: 100, c: "#8BDAD7"},
    {x: 59, y: 100, c: "#8BDAD7"},
    {x: 95, y: 100, c: "#8BDAD7"},
    {x: 10, y: 140, c: "#8BDAD7"},
    {x: 42, y: 140, c: "#8BDAD7"},
    {x: 75, y: 140, c: "#8BDAD7"},
    {x: 112, y: 140, c: "#8BDAD7"}

]
var ECharts_07_data_02 = [
    {x: 59, y: 20, c: "#E18F81"},
    {x: 42, y: 60, c: "#E18F81"},
    {x: 75, y: 60, c: "#E18F81"},
    {x: 25, y: 100, c: "#E18F81"},
    {x: 59, y: 100, c: "#E5E5E5"},
    {x: 95, y: 100, c: "#E5E5E5"},
    {x: 10, y: 140, c: "#E5E5E5"},
    {x: 42, y: 140, c: "#E5E5E5"},
    {x: 75, y: 140, c: "#E5E5E5"},
    {x: 112, y: 140, c: "#E5E5E5"}
]

var $persons = $(".persons")

var ECharts_07_timer=null
function pyramid(vessel, arr, coord) {
    var len=arr.length
    var i=0
    var ECharts_07_timer=setInterval(function () {
        console.log(i)
        if(i >=len){
            clearInterval(ECharts_07_timer)
            return
        }
        var $svgPersons = $('<svg version="1.1" class="person ">' +
            '<path fill="' + arr[i].c + '" d="M8.196,7.033c1.939,0,3.511-1.572,3.511-3.511C11.707,1.582,10.135,0,8.196,0C6.257,0,4.675,1.582,4.675,3.521C4.675,5.46,6.257,7.033,8.196,7.033z"/>' +
            '<path fill="' + arr[i].c + '" d="M11.655,7.766H6.97H6.645H4.737c-2.61,0-4.728,2.096-4.737,4.717v0.011v9.286C0,22.619,0.67,23.3,1.508,23.3c0.839,0,1.52-0.681,1.52-1.519v-5.503v-3.102h0.712v3.323v5.932v0.859v14.412c0,1.121,0.912,2.033,2.034,2.033c1.132,0,2.043-0.912,2.043-2.033V23.289h0.765v14.412c0,1.121,0.912,2.033,2.034,2.033c1.132,0,2.023-0.912,2.023-2.033V23.289V22.43v-5.932v-3.323h0.734v3.102v5.503c0,0.839,0.682,1.519,1.52,1.519c0.828,0,1.509-0.681,1.509-1.519v-9.286v-0.011C16.393,9.862,14.275,7.766,11.655,7.766z"/>' +
            '</svg>').css(
            coord ?
                {
                    left: arr[i].x,
                    top: arr[i].y
                } : {
                    right: arr[i].x,
                    bottom: arr[i].y
                }
        );
        vessel.append($svgPersons)
        $svgPersons.animate({opacity:1},1000);
        i++;
    },500);

}



pyramid($persons, ECharts_07_data_01, true)
pyramid($persons, ECharts_07_data_02, false)