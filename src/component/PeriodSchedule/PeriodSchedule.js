import React, { Component } from "react";
import Calender from './PeriodCalender/Calender';

class PeriodSchedule extends Component {
  render() {
    const { month ,date ,cycle,schedule} = this.props;
    const value = date + cycle;
    
    return (
      <div>
        {month + 1}
        <h1>Period Started Date : {this.props.date === null ?<p>Please Enter Date</p> 
         :<h1>{this.props.date}</h1> 
         } </h1>
        <h1>Period Lasts For : {this.props.pDays} </h1>
        <h1>Average Cycle :{this.props.cycle} </h1>
        {value < 30 ? (
          <h1>Next Period start on :{value} </h1>
        ) : (
          <h1>Next Period start on:{value - 31} </h1>
        )}
       <Calender date={date} month={month} cycle={cycle} schedule={schedule}  />
      </div>
    );
  }
}

export default PeriodSchedule;
