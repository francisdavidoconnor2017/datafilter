import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


const options = {
responsive: true,
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
tooltips: {
mode: 'label'
},
elements: {
line: {
fill: false
}
},
scales: {

xAxes: [
  {
    display: true,
    gridLines: {
      display: false
    },

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }
],
yAxes: [
  {
    type: 'linear',
    display: true,
    position: 'left',
    id: 'y-axis-1',
    gridLines: {
      display: false
    },
    labels: {
      show: true
    }
  },
  {
    type: 'linear',
    display: true,
    position: 'right',
    id: 'y-axis-2',
    gridLines: {
      display: false
    },
    labels: {
      show: true
    }
  }
]
}
};


class Chart extends Component {

  render() {
    const transformation = this.props.data.data;
    const cumulative = this.props.data.cumulative;
    return (
      <div>
        <h2>Spend Adjustment Report</h2>
        <Bar
          data={{
          datasets: [{
          type: 'line',
          label: 'Monthly Spend Distribution',
          data: transformation,
          fill: false,
          backgroundColor: '#11B34C',
          borderColor: '#11B37C',
          pointBorderColor: '#EC9320',
          pointBackgroundColor: '#EC9320',
          pointHoverBackgroundColor: '#EC9320',
          pointHoverBorderColor: '#EC9320',
          yAxisID: 'y-axis-1'
          },{
          label: 'Cumulative Spend Distribution',
          type:'bar',
          data: cumulative,
          fill: false,
          borderColor: '#93932F',
          backgroundColor: '#A3C38F',
          hoverBackgroundColor: '#B3B37C',
          hoverBorderColor: '#B3B37C',
          yAxisID: 'y-axis-2'
          }]
          }}
          width={100}
          height={30}
          options={options}
        />
      </div>
    );
  }
};

export default Chart;
