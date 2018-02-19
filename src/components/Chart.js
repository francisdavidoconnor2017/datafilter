import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    console.log (this.props.data.data);
  }


  //TODO: Add cumulative data in a 'Mix' graph
  
  render() {
    const transformation = this.props.data.data;
    return (
      <div>
        <h2>Spend Adjustment Report</h2>
        <Bar
          data={
            {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [
                {
                  label: 'Monthly Spend Distribution',
                  backgroundColor: 'rgba(25,255,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(25,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: transformation
                }
              ]
            }
          }
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};

export default Chart;
