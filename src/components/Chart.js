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

  constructor(props){
    super(props);
    console.log (this.props.data.data);
    console.log (this.props.data.cumulative);
  }

  render() {
    const transformation = this.props.data.data;
    const cumulative = this.props.data.cumulative;
    return (
      <div>
        <h2>Spend Adjustment Report</h2>
        <Bar
          data={{
          datasets: [{
          label: 'Cumulative Spend Distribution',
          type:'line',
          data: cumulative,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2'
          },{
          type: 'bar',
          label: 'Monthly Spend Distribution',
          data: transformation,
          fill: false,
          backgroundColor: '#71B37C',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1'
          }]
          }}
          options={options}
        />
      </div>
    );
  }
};

export default Chart;
