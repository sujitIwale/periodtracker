import React, { Component } from "react";

class DatePicker extends Component {
  state = {
    periodDate: null,
  };
  dateChange = (event) => {
    this.setState({ periodDate: event.target.value });
  };
  passDate = (event) => {
    const newDate = new Date(`${event.target.value}`);
    this.props.getDate(newDate.getDate(), newDate.getMonth());
  };
  render() {
    return (
      <div>
        <h2>1. WHEN WAS YOUR LAST PERIOD START?</h2>
        <div style={{ pading: "20px", marginTop: "75px" }}>
          <input
            type='date'
            value={this.state.periodDate}
            onChange={this.dateChange}
            onInput={this.passDate}
            onSubmit={this.passDate}
            style={style}
          />
        </div>
      </div>
    );
  }
}
const style = {
  border: "2px solid black",
  borderRadius: "20px",
  marginLeft: "120px",
  height: "75px",
  width: "220px",
  textAlign: "center",
  fontSize: "25px",
  fontWeight: "25px",
  backgroundColor: "lightPink",
  cursor: "pointer",
};

export default DatePicker;
