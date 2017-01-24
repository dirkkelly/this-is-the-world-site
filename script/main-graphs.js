var trace1 = {
  x: ['non-wenao', 'wenao'],
  y: [6324568000, 1016988000],
  name: 'Population',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var trace2 = {
  x: ['non-wenao', 'wenao'],
  y: [60490000000000, 194543000000000],
  name: 'Household Wealth',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var trace3 = {
  x: ['non-wenao', 'wenao'],
  y: [9654, 191293],
  name: 'Average Wealth Per Person',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

Plotly.newPlot('population-graph', [trace1], { title: 'Population' }, { displayModeBar: false });
Plotly.newPlot('household-wealth-graph', [trace2], { title: 'Household Wealth' }, { displayModeBar: false });
Plotly.newPlot('average-wealth-graph', [trace3], { title: 'Average Wealth Per Person' }, { displayModeBar: false });
