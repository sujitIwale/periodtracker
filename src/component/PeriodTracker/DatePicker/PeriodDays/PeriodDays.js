import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './PeriodDays.css'
 class PeriodDays extends Component {
     state = {
         pDays: 0
     }
    
     addDays = () => {
         if (this.state.pDays + 1 !== 11 )  {
            this.setState({pDays:this.state.pDays+ 1}) 
            this.props.getPeriodDays(this.state.pDays.pDays); 
         } 
     }
     minusDays = () => {
         if (this.state.pDays - 1 !== -1 ) {
            this.setState({pDays:this.state.pDays - 1})
            this.props.getPeriodDays(this.state.pDays.pDays); 
         }
         
     }
    render() {
        return (
            <div>
                <h2>2. HOW MANY DAYS DID YOUR PERIOD LAST?</h2>
                <div className='Daycontainer' >
                   <div className='minus'><FontAwesomeIcon icon={faMinus} size='4x' onClick={this.minusDays} /></div> 
                  <div className='number'><p >{ this.state.pDays }</p></div>  
                   <div  className='plus'><FontAwesomeIcon icon={faPlus} size='4x' onClick={this.addDays} /></div> 
                </div>
            </div>
        )
    }
}

export default PeriodDays;
