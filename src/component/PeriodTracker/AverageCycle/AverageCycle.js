import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


 class AverageCycle extends Component {
    state = {
        pDays: 21
    }
   
    addDays = () => {
        if (this.state.pDays + 1 !== 41 ) {
            this.setState({pDays:this.state.pDays+ 1})  
        }
      
    }
    minusDays = () => {
        if (this.state.pDays - 1 !== 20 ) {
            this.setState({pDays:this.state.pDays - 1})
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

export default AverageCycle;
