import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import PeriodSchedule from './component/PeriodSchedule/PeriodSchedule';
import PeriodTracker from './component/PeriodTracker/PeriodTracker';

class  App extends Component {
   state = {
     pDays: 0,
     cycle:21,
     date:null,
     schedule:false
   }
   passPdays = (days) => {
     this.setState({pDays:days})
   }
   passCycleDays = (days) => {
     this.setState({cycle:days})
   }
   showSchedule = () => {
     this.setState({schedule:true})
   }
   passDate = (date) => {
     this.setState({date:date})
   }
  render() {
  return (
    <div className="App">
       <Header />
       <PeriodTracker {...this.props} passPdays={this.passPdays} 
                      passCycleDays={this.passCycleDays} 
                      passDate={this.passDate}
                      showSchedule={this.showSchedule}
       />
       {
           this.state.schedule &&  
           <PeriodSchedule pDays={this.state.pDays} 
                           cycle={this.state.cycle}
                           date={this.state.date}
                            /> 
            
        }
       

    </div>
  );
}
}

export default App;
