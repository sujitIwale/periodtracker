import React, { Component } from "react";

class PeriodSchedule extends Component {
  render() {
    const value = this.props.date + this.props.cycle;
    const { month } = this.props;
    return (
      <div>
        {month + 1}
        <h1>Period Started Date : {this.props.date} </h1>
        <h1>Period Lasts For : {this.props.pDays} </h1>
        <h1>Average Cycle :{this.props.cycle} </h1>
        {value < 30 ? (
          <h1>Next Period start on :{value} </h1>
        ) : (
          <h1>Next Period start on:{value - 31} </h1>
        )}
      </div>
    );
  }
}

export default PeriodSchedule;
