import React, { Component } from 'react';
import './Calender.css';

export class Calender extends Component {
   state ={ days:[
    {day: 1,style:''},
    {day: 2,style:''},
    {day: 3,style:''},
    {day: 4,style:''},
    {day: 5,style:''},
    {day: 6,style:''},
    {day: 7,style:''},
    {day: 8,style:''},
    {day: 9,style:''},
     {day: 10,style:''},
     {day: 11,style:''},
     {day: 12,style:''},
     {day: 13,style:''},
     {day: 14,style:''},
     {day: 15,style:''},
     {day: 16,style:''},
     {day: 17,style:''},
     {day: 18,style:''},
     {day: 19,style:''},
     {day: 20,style:''},
     {day: 21,style:''},
     {day: 22,style:''},
     {day: 23,style:''},
     {day: 24,style:''},
     {day: 25,style:''},
     {day: 26,style:''},
     {day: 27,style:''},
     {day: 28,style:''},
     {day: 29,style:''},
     {day: 30,style:''},
     {day: 31,style:''}   
  ]
} 
       
   

   componentDidMount =() => {
    this.state.days.map((day,i) => {
      if (day.day === this.props.date) {
        
        this.setState(state => {
          const days = state.days.map((date, j) => {
            if (j === i) {
              return ( date.style = 'active' )
            } else {
              return date;
            }
          });
     
          return days
  
         
        });
       }
       return 0;
    })
   
   }
   showDate = () => {
    console.log(this.state.days[30])
   }
   showDetails = () => {
     return <h1>hello</h1>
   }
    render() {
        return (
            <div>
                <div class="month">      
                <ul>
                  <li class="prev">&#10094;</li>
                  <li class="next">&#10095;</li>
                  <li  onClick={this.showDate}>
                    August<br/>
                    <span style={{fontSize:'18px'}} >2017</span>
                  </li>
                </ul>
              </div>

              <ul class="weekdays">
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
              </ul>

              <ul class="days">  
              {
                this.state.days.map((day) =>  (
                <li ><span className={day.style}>{day.day}</span></li> ))
              }
              </ul>

            </div>
        )
    }
}

export default Calender;
