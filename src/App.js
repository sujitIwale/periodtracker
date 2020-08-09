import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import PeriodSchedule from './component/PeriodSchedule/PeriodSchedule';
import PeriodTracker from './component/PeriodTracker/PeriodTracker';

class  App extends Component {
   state = {
     pDays: 0,
     cycle:0,
     date:0
   }
   getPeriodDays = (days) => {
     this.setState({pDays:days})
   }
  render() {
  return (
    <div className="App">
       <Header />
       <PeriodTracker {...this.props} getPeriodDays={this.getPeriodDays} getCycleDays={this.getCycleDays} getDate={this.getDate} />
       <PeriodSchedule pDays={this.state.pDays} />

    </div>
  );
}
}

export default App;
