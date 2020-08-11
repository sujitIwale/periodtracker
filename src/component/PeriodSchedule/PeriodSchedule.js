import React, { Component } from "react";
import Calender from './PeriodCalender/Calender';

class PeriodSchedule extends Component {
  render() {
    const { month ,date ,cycle,schedule,pDays,year} = this.props;
    const value = date + cycle;
    const totalDays=date + pDays;

    return (
      <div>
        {month + 1}
        <h1>Period Started Date : {this.props.date === null ?<p>Please Enter Date</p> 
         :<h1>{this.props.date}</h1> 
         } </h1>
        <h1>Period Lasts For : {pDays} </h1>
        <h1>Average Cycle :{this.props.cycle} </h1>
        {value < 30 ? (
          <h1>Next Period start on :{value} </h1>
        ) : (
          <h1>Next Period start on:{value - 31} </h1>
        )}
       <Calender date={date} month={month+1} year={year} cycle={cycle} schedule={schedule} totalDays={totalDays} />
      </div>
    );
  }
}

export default PeriodSchedule;
