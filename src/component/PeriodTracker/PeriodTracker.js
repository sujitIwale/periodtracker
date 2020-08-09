import React, { Component } from 'react';
import AverageCycle from './AverageCycle/AverageCycle';
import DatePicker from './DatePicker/DatePicker';
import PeriodDays from './DatePicker/PeriodDays/PeriodDays';
import './PeriodTracker.css';

 class PeriodTracker extends Component {
    render() {
        return (
            <div className='period-tracker'>
                <h1 style={{textAlign:'center'}} >PeriodTracker</h1>
                <div className='tracker-inputs' >
                   <div className='box-1' > <DatePicker /> </div>
                   <div className='box-2'><PeriodDays /> </div>
                   <div className='box-3'><AverageCycle /> </div>
                </div>
            </div>
        )
    }
}

export default PeriodTracker;
