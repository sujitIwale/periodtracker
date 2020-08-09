import React, { Component } from 'react';
import AverageCycle from './AverageCycle/AverageCycle';
import DatePicker from './DatePicker/DatePicker';
import PeriodDays from './DatePicker/PeriodDays/PeriodDays';
import './PeriodTracker.css';

 class PeriodTracker extends Component {
     state = {
         pDays:0,
         cycle:21,
         date:null,
         submitted:false
     }
     startTracking = () => {
         this.props.passPdays(this.state.pDays);
         this.props.passCycleDays(this.state.cycle);
         this.props.showSchedule();
         this.props.passDate(this.state.date);

     } 
     getPeriodDays = (days) => {
         this.setState({pDays:days})
     }
     getCycleDays = (days) => {
         this.setState({cycle:days})
     }
     getDate = (date) => {
         this.setState({date:date})
     } 
    render() {
        return (
            <div className='period-tracker'>
                <h1 style={{textAlign:'center'}} >PeriodTracker</h1>
                <div className='tracker-inputs' >
                   <div className='box-1' > <DatePicker getDate={this.getDate} /> </div>
                   <div className='box-2'><PeriodDays  getPeriodDays={this.getPeriodDays} /> </div>
                   <div className='box-3'><AverageCycle getCycleDays={this.getCycleDays} /> </div>
                </div>
                <button className='track-btn' onClick={this.startTracking} >Start Tracking </button>
            </div>
        )
    }
}

export default PeriodTracker;
