import React, { Component } from 'react';
import './App.css';
import Users from './data/Users';
import Slider from 'antd/lib/slider';
import 'antd/dist/antd.css';
import Chart from './components/Chart';
import Tabulate from './components/Tabulate';
import RadioButtons from './components/RadioButtons';

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

    this.initialSlide=[1000,3000];
    ;
    this.state = {
           users: {Users},
           incremental: 5,
           slideMax: 3000,
           slideMin: 1000,
           fullMax: 5000,
           fullMin: 0,
           fullStep: 100,
           genders:['Male', 'Female', 'Both'],
           genderValue: 'Both',
           regions:['All', 'APAC', 'Europe', 'Latin America', 'United States'],
           regionValue: 'All',
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
           label: 'Monthly Spend Distribution',
           backgroundColor: 'rgba(25,255,132,0.2)',
           borderColor: 'rgba(255,99,132,1)',
           borderWidth: 1,
           hoverBackgroundColor: 'rgba(25,99,132,0.4)',
           hoverBorderColor: 'rgba(255,99,132,1)',
           data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           cumulative: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           tabledata: []
         };

}

componentDidMount() {
    this.handleSlideChange(this.initialSlide);
}

transform = () => {
  //make data transformation
  //TODO: Investigate more efficient way to traverse

  let usercount = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  let monthlyspend = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  let cumulative = monthlyspend.slice(1);
  let genderTrip = false;
  let regionTrip = false;
  let months = ['none', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let tabledata =[];
  for (var key in this.state.users.Users) {
    if (!this.state.users.Users.hasOwnProperty(key)) continue;
      let obj = this.state.users.Users[key];
        genderTrip = false;
        regionTrip = false;
        for (let propt in obj) {
          if(!obj.hasOwnProperty(propt)) continue;
          if (propt === 'gender' && this.state.genderValue !== 'Both'){
            if (this.state.genderValue !== obj['gender']){
                  genderTrip = true;
                  continue;
                }
          }
          if (propt === 'region' && this.state.regionValue !== 'All'){
            if (this.state.regionValue !== obj['region']){
                  regionTrip = true;
                  continue;
                }
          }
          if (propt === 'birthday' && !genderTrip && !regionTrip) {
            if (obj['spend'] <= this.state.slideMax && obj['spend'] >= this.state.slideMin){
              monthlyspend[obj['birthday']]+=this.state.incremental;
              usercount[obj['birthday']]+=1;
              obj['key']=tabledata.length+1;
              obj['birthmonth']=months[obj['birthday']];
              tabledata.push(obj);
            }
          }
        }
      }
  monthlyspend=monthlyspend.slice(1);
  usercount=usercount.slice(1);
  monthlyspend.reduce(function(a,b,i) { return cumulative[i] = a+b; },0);
  //Update chart data with filtered results
  this.setState(prevState => ({
  data:usercount
  }));
  this.setState(prevState => ({
  cumulative:cumulative
  }));
  this.setState(prevState => ({
  tabledata:tabledata
  }));
};

handleSlideChange = (value) => {
  //handle inputs
  var max = value[1];
  var min = value[0];

  this.setState(state => {
      state.slideMax = max;
      state.tabledata = [];
   }, ()=>{
     this.transform();
   });

   this.setState(state => {
       state.slideMin = min;
       state.tabledata = [];
    }, ()=>{
      this.transform();
    });
};

handleGenderChange = (value) => {
  this.setState(state => {
      state.genderValue = value;
      state.tabledata = [];
   }, ()=>{
     this.transform();
   });
}

handleRegionChange = (value) => {
  this.setState(state => {
      state.regionValue = value;
      state.tabledata = [];
   }, ()=>{
     this.transform();
   });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data Filtering Application</h1>
        </header>
        <div>
        <Slider range={true} defaultValue={[this.state.slideMin, this.state.slideMax]} step={this.state.step} min={this.state.fullMin} max={this.state.fullMax} marks={this.marks} onChange={this.handleSlideChange} />
          <div>
             <RadioButtons handleChange = {this.handleGenderChange} items = {this.state.genders} />
          </div>
          <div>
            <RadioButtons handleChange = {this.handleRegionChange} items = {this.state.regions} />
          </div>
        <Chart users={this.state.data} cumulative={this.state.cumulative} />
        <Tabulate data={this.state.tabledata}/>
        </div>
      </div>
    );
  }
}

export default App;
