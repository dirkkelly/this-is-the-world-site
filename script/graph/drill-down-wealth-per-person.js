var data = {
  x: ['90% non-wenao', '10% non-wenao', '99% wenao', '1% wenao'],
  y: [1098, 86815, 82014, 11009963],
  name: 'Wealth Per Person Split By Wealth Bracket',
  type: 'bar',
  marker: {
    color: ['blue', 'blue', 'orange', 'orange']
  }
};

var annotationContent = [];

for( var i = 0 ; i < data.x.length ; i++ ){
  var result = {
    x: data.x[i],
    y: data.y[i],
    text: numbro(data.y[i]).formatCurrency('0,0'),
    xanchor: 'center',
    yanchor: 'bottom',
    showarrow: false
  };
  annotationContent.push(result);
}

var layout = {
  title: 'Wealth Per Person Split By Wealth Bracket',
  annotations: annotationContent
};

Plotly.newPlot('drill-down-wealth-per-person-graph', [data], layout, { displayModeBar: false });
