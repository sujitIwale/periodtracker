import React, { Component } from 'react';
// import Cal from '../Cal/cal';
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
  ],
  months:[
    {index:1,month:'January',nDays:31},
    {index:2,month:'February',nDays:28},
    {index:3,month:'March',nDays:31},
    {index:4,month:'April',nDays:30},
    {index:5,month:'May',nDays:31},
    {index:6,month:'June',nDays:30},
    {index:7,month:'July',nDays:31},
    {index:8,month:'August',nDays:31},
    {index:9,month:'September',nDays:30},
    {index:10,month:'Octomber',nDays:31},
    {index:11,month:'November',nDays:30},
    {index:12,month:'December',nDays:31},
  ],
  week:[
    {index:0,weekD:'sunday',i:''},
    {index:1,weekD:'monday',i:''},
    {index:2,weekD:'Tuesdsay',i:''},
    {index:3,weekD:'Wednesday',i:''},
    {index:4,weekD:'Thursday',i:''},
    {index:5,weekD:'Friday',i:''},
    {index:6,weekD:'Saturday',i:''},
  ],
  monthName:''
} 
       
  monthName ='';   

   componentDidMount =() => {
    this.state.days.map((day,i) => {
      if (day.day >= this.props.date && day.day <this.props.totalDays) {
        
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
    this.state.months.map((month,i) => {
      if (month.index === this.props.month) {
        
           this.setState({monthName:month.month})
       }
       return 0;
    })
   
   }
   
    render() {
        return (
            <div>
                <div class="month">      
                <ul>
                  <li class="prev">&#10094;</li>
                  <li class="next">&#10095;</li>
                  <li  onClick={this.showDate}>
                   {this.state.monthName} <br/>
                    <span style={{fontSize:'18px'}} >{this.props.year} </span>
                  </li>
                </ul>
              </div>

              <ul class="weekdays">
              {this.state.week.map((week,i)=>(
                <li>{week.weekD} </li>

              ))}
              </ul>

              <ul class="days">  
              {
                this.state.days.map((day) =>  (
                <li ><span className={day.style}>{day.day}</span></li> ))
              }
              </ul>
              {/* <Cal /> */}

            </div>
        )
    }
}

export default Calender;
