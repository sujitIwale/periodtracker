import React, { Component } from "react";
import AverageCycle from "./AverageCycle/AverageCycle";
import DatePicker from "./DatePicker/DatePicker";
import PeriodDays from "./PeriodDays/PeriodDays";
import "./PeriodTracker.css";

class PeriodTracker extends Component {
  state = {
    pDays: 0,
    cycle: 21,
    date: null,
    submitted: false,
    month: null,
    schedule:true
  };
  startTracking = () => {
    this.props.passPdays(this.state.pDays);
    this.props.passCycleDays(this.state.cycle);
    this.props.showSchedule();
    this.props.passDate(this.state.date, this.state.month);
   
  };
  getPeriodDays = (days) => {
    this.setState({ pDays: days });
  };
  getCycleDays = (days) => {
    this.setState({ cycle: days });
  };
  getDate = (date, month) => {
    this.setState({ date: date, month: month });
  };
  getSchedule =() => {
    this.setState({schedule:false})
    this.props.passSchedule();
  }
 
  render() {
    return (
      <div className='period-tracker'>
        <div className='tracker-inputs'>
          <div className='box'>
            <DatePicker getDate={this.getDate} getSchedule={this.getSchedule} />
          </div>
          <div className='box'>
            <PeriodDays getPeriodDays={this.getPeriodDays} />
          </div>
          <div className='box'>
            <AverageCycle getCycleDays={this.getCycleDays} />
          </div>
        </div>
        <section className='tracking-section'>
          <p className='track-btn' onClick={this.startTracking}>
            Start Tracking
          </p>
        </section>
      </div>
    );
  }
}

export default PeriodTracker;
