import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: data.map((el) => el.percentage),
          y: data.map((el) => el.name),
          orientation: 'h',
          marker: {
            width: 0.1, // Adjust the width to reduce the size of the bars
          },
        },
      ]}
      layout={{
        width: 550,
        height: 350,
        title: 'Security risk score by scan',
        yaxis: {
          automargin: true, // Adjusts margins to fit the entire text
        },
      }}
    />
  );
};

export default Chart;
