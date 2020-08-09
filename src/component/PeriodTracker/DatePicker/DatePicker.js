import React, { Component } from 'react';

class DatePicker extends Component {
    state ={
        periodDate:null
    }
    dateChange = (event) => {
        const newDate= new Date(`${event.target.value}`);
        this.setState({periodDate:newDate.getDate()})
    }
    render() {
        return (
            <div>
            <h2>1. WHEN DID YOUR LAST PERIOD START?</h2>
                <input type='date'
                       min="2020-07-01"
                       max="2020-09-30" 
                       onChange={this.dateChange} />
                <h2>{this.state.periodDate} </h2>
            </div>
        )
    }
}

export default DatePicker;
