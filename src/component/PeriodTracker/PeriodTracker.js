import React, { Component } from 'react';
import AverageCycle from './AverageCycle/AverageCycle';
import DatePicker from './DatePicker/DatePicker';
import PeriodDays from './DatePicker/PeriodDays/PeriodDays';
import './PeriodTracker.css';

 class PeriodTracker extends Component {
     state = {
         pDays:0,
         cycle:0,
         date:0,
         submitted:false
     }
     startTracking = () => {
         

     } 
    render() {
         const { getPeriodDays,getCycleDays,getDate } =this.props;
        return (
            <div className='period-tracker'>
                <h1 style={{textAlign:'center'}} >PeriodTracker</h1>
                <div className='tracker-inputs' >
                   <div className='box-1' > <DatePicker getDate={getDate} /> </div>
                   <div className='box-2'><PeriodDays {...this.props} getPeriodDays={getPeriodDays} /> </div>
                   <div className='box-3'><AverageCycle getCycleDays={getCycleDays} /> </div>
                </div>
                <button className='track-btn' onClick={this.startTracking} >Start Tracking </button>
            </div>
        )
    }
}

export default PeriodTracker;
