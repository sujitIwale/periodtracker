import React, { Component } from 'react';

class DatePicker extends Component {
    state ={
        periodDate:null
    }
    dateChange = (event) => {

        this.setState({periodDate:event.target.value})
       
    }
    passDate = (event) => {
        const newDate= new Date(`${event.target.value}`);
        this.props.getDate(newDate.getDate());
        console.log(newDate.getDate());
    }
    render() {
        return (
            <div>
            <h2>1. WHEN DID YOUR LAST PERIOD START?</h2>
                <input type='date'
                       value= {  this.state.periodDate } 
                       min="2020-07-01"
                       max="2020-09-30" 
                       onChange={this.dateChange}
                       onInput={this.passDate}
                       onSubmit={this.passDate}
                       style={style} 

                        />
                
            </div>
        )
    }
}
const style = {
    border:'2px solid black',
    borderRadius:'20px',
    marginLeft:'120px',
    height:'75px',
    width:'220px',
    textAlign:'center',
    fontSize:'25px',
    fontWeight:'25px',
    backgroundColor:'lightPink',
    cursor:'pointer'
}

export default DatePicker;
