import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../PeriodDays/PeriodDays.css";

class AverageCycle extends Component {
  state = {
    cycle: 21,
  };

  addDays = () => {
    if (this.state.cycle + 1 !== 41) {
      this.setState({ cycle: this.state.cycle + 1 });
      this.props.getCycleDays(this.state.cycle + 1);
    }
  };
  minusDays = () => {
    if (this.state.cycle - 1 !== 20) {
      this.setState({ cycle: this.state.cycle - 1 });
      this.props.getCycleDays(this.state.cycle - 1);
    }
  };
  render() {
    return (
      <div>
        <h2>3. HOW LONG IS YOUR MENSTRUAL CYCLE?</h2>
        <div className='Daycontainer'>
          <div className='box'>
            <FontAwesomeIcon
              className='icon'
              icon={faMinus}
              size='3x'
              onClick={this.minusDays}
            />
          </div>
          <div className='box number'>
            <p>{this.state.cycle}</p>
          </div>
          <div className='box'>
            <FontAwesomeIcon
              className='icon'
              icon={faPlus}
              size='3x'
              onClick={this.addDays}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AverageCycle;
