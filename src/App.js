import React, { Component } from 'react';
import './App.css';
import Users from './data/Users';
import Slider from 'antd/lib/slider';
import 'antd/dist/antd.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(props){
    super(props);
    this.marks = {
      0: 'Zero',
      1000: '1000',
      2000: '2000',
      3000: '3000',
      4000: '4000',
      5000: 'Max'
    };

    this.initialSlide=[1000,3000]
    ;
    this.state = {
           users: {Users},
           incremental: 5,
           slideMax: 3000,
           slideMin: 1000,
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
           label: 'Monthly Spend Distribution',
           backgroundColor: 'rgba(25,255,132,0.2)',
           borderColor: 'rgba(255,99,132,1)',
           borderWidth: 1,
           hoverBackgroundColor: 'rgba(25,99,132,0.4)',
           hoverBorderColor: 'rgba(255,99,132,1)',
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
         };

}

componentDidMount() {
    this.handleSlideChange(this.initialSlide);
}


transform = () => {
  //make data transformation
  //TODO: Investigate more efficient way to traverse
  //TODO: Handle cumulative results
  var monthlyspend = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var key in this.state.users.Users) {
    if (!this.state.users.Users.hasOwnProperty(key)) continue;
      var obj = this.state.users.Users[key];
        for (var propt in obj) {
          if(!obj.hasOwnProperty(propt)) continue;
          if (propt === 'birthday') {
            //User filtering results applied
            //TODO: Implement user filter controls
            if (obj['spend'] < this.state.slideMax && obj['spend'] > this.state.slideMin){
              monthlyspend[obj['birthday']]+=this.state.incremental;
            }
          }
        }
      }
  monthlyspend=monthlyspend.slice(1);
  //test
  console.log(monthlyspend);
  //Update chart data with filtered results
  this.setState(prevState => ({
  data:monthlyspend
  }));
};


handleSlideChange = (value) => {
  //test
  console.log(value);
  //handle inputs
  var max = value[1];
  var min = value[0];
  //TODO: Ensure state is updating correctly
  this.setState(prevState => ({
  slideMax:max
  }));
  this.setState(prevState => ({
  slideMin:min
  }));
  this.transform();
};


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data Filtering Application</h1>
        </header>
        <div>
        <Slider range={true} defaultValue={[this.state.slideMin, this.state.slideMax]} step={100} min={0} max={5000} marks={this.marks} onChange={this.handleSlideChange} />
        <Chart data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
