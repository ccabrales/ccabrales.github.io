'use strict';

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // https://color.adobe.com/muted-bar-graph-2-color-theme-1171175/edit/?copy=true&base=0&rule=Custom&selected=0&name=Copy%20of%20muted%20bar%20graph%202&mode=rgb&rgbvalues=0.576471,0.501961,0.65098,0.607843,0.94902,0.792157,0.396078,0.741176,0.788235,0.823529,0.85098,0.066667,0.94902,0.219608,0.058824&swatchOrder=0,1,2,3,4
    var data = google.visualization.arrayToDataTable([
      ['Skill', 'Years Experience', { role: 'style' }],
      ['Java', 3, '#F2380F'],
      ['JavaScript', 1.5, '#D2D911'],
      ['HTML/CSS', 1.5, '#65BDC9'],
      ['React', 1.0, '#9380A6'],
      ['Swift', 1, '#9BF2CA' ]
    ]);


    var options = {
        'backgroundColor': 'transparent',
        'bar': {
            groupWidth: '80%'
        },
        'hAxis': {
            'textStyle': {
                color: '#fff'
            },
            'title': 'Years of Experience',
            'titleTextStyle': {
                color: '#fff'
            }
        },
        'legend': {
            position: 'none'
        },
        'titleTextStyle': {
            color: '#fff',
            bold: true
        },
        'vAxis': {
            'textStyle': {
                color: '#fff'
            }
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('skills-chart'));
    chart.draw(data, options);

}

if (window.addEventListener) {
    window.addEventListener('resize', drawChart);
}  else {
    window.attachEvent('onresize', drawChart);
}